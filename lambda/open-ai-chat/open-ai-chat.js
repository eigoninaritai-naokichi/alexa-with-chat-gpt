const { Configuration, OpenAIApi } = require("openai")
const chatGptApiKey = require('../chat-gpt-api-key')

/**
 * OpenAIチャット。
 */
class OpenAiChat {
    /**
     * OpenAIチャットを生成する。
     */
    constructor() {
        const configuration = new Configuration({
          apiKey: chatGptApiKey,
        })

        /**
         * OpenAI API。
         */
        this.openai = new OpenAIApi(configuration)

        /**
         * 質問履歴。
         */
        this.questionHistory = []

        /**
         * 回答履歴。
         */
        this.answerHistory = []
    }

    /**
     * チャットを行う。
     * @param {*} question 質問文。
     * @returns 回答文。
     */
    async chat(question) {
        // チャット履歴を作成する。
        let messages = [
            { role: 'system', content: 'You are a helpful assistant.' },
        ]

        // ユーザー、アシスタントの順に履歴を追加する。
        for (let i = 0; i < this.questionHistory.length || i < this.answerHistory.length; i++) {
            if (this.questionHistory[i]) {
                messages.push({ role: 'user', content: this.questionHistory[i] })
            }

            if (this.answerHistory[i]) {
                messages.push({ role: 'assistant', content: this.answerHistory[i] })
            }
        }

        // ユーザーの質問を追加する。
        messages.push({ role: 'user', content: `${question} 回答は100文字程度でお願いします。` })

        // チャットを行う。
        const chatCompletion = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: messages,
        })

        // 質問、回答を履歴に追加する。
        const answer = chatCompletion.data.choices[0].message.content
        this.questionHistory.push(question)
        this.answerHistory.push(answer)

        return answer
    }

    /**
     * 履歴をクリアする。
     */
    clearHistory() {
        this.questionHistory = []
        this.answerHistory = []
    }
}

module.exports = OpenAiChat