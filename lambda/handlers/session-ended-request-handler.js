const Alexa = require('ask-sdk-core')

/**
 * スキル終了時に呼び出されるハンドラ。
 * このハンドラは、セッションが終了したことを通知する。
 * 現在開いているセッションが次のいずれかの理由で終了された場合にトリガーされる
 * 1. ユーザーが「exit」または「quit」と言った場合。
 * 2. ユーザーが応答せず、またはボイスモデルで定義されていないインテントにマッチしない内容を話した場合。
 * 3. エラーが発生した場合。
 */
class SessionEndedRequestHandler {
    /**
     * スキル終了時に呼び出されるハンドラを生成する。
     * @param {*} openAiChat OpenAIチャット。
     */
    constructor(openAiChat) {
        /**
         * OpenAIチャット。
         */
        this.openAiChat = openAiChat
    }

    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest'
    }

    handle(handlerInput) {
        // セッションが終了した理由をログに出力する。
        const reason = handlerInput.requestEnvelope.request.reason
        console.log(`セッションが終了した理由: ${reason}`)
        console.log(`セッションを終了しました。\n${JSON.stringify(handlerInput.requestEnvelope)}`)

        // OpenAIのチャット履歴をクリアする。
        this.openAiChat.clearHistory()

        // セッションを終了する。
        return handlerInput.responseBuilder.getResponse()
    }
}

module.exports = SessionEndedRequestHandler