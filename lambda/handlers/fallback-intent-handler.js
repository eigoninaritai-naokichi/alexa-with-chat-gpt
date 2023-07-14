const Alexa = require('ask-sdk-core')

/**
 * 代替処理を行うハンドラー。
 * このインテントは、ユーザーがスキル内のいかなるインテントにもマッピングされない内容を話したときにトリガーされる。
 * まだサポートされていないロケールでは無視される。
 */
class FallbackIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent'
    }

    handle(handlerInput) {
        const speakOutput = 'すみません。もう一度お願いします。'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse()
    }
}

module.exports = FallbackIntentHandler