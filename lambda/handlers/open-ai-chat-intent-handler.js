const Alexa = require('ask-sdk-core')

/**
 * OpenAIチャットを呼び出すインテントハンドラー。
 */
class OpenAiChatIntentHandler {
    /**
     * OpenAIチャットを呼び出すインテントハンドラーを生成する。
     * @param {*} openAiChat OpenAIチャット。
     */
    constructor(openAiChat) {
        /**
         * OpenAIチャット。
         */
        this.openAiChat = openAiChat
    }

    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OpenAiChatIntent'
    }

    async handle(handlerInput) {
        // 質問を取得する。
        const { request } = handlerInput.requestEnvelope
        const question = request.intent.slots['question'].value

        // OpenAIチャットに質問し、回答を取得する。
        const answer = await this.openAiChat.chat(question)

        // 回答を返す。
        return handlerInput.responseBuilder
            .speak(answer)
            .reprompt(answer)
            .getResponse()
    }
}

module.exports = OpenAiChatIntentHandler