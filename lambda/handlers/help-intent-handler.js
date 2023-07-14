const Alexa = require('ask-sdk-core')

/**
 * ヘルプインテントハンドラー。
 */
class HelpIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    }

    handle(handlerInput) {
        const speakOutput = '知りたいことを聞いてください。その質問にお答えします。'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse()
    }
}

module.exports = HelpIntentHandler