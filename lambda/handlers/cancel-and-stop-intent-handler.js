const Alexa = require('ask-sdk-core')

/**
 * キャンセルとストップのインテントハンドラー。
 */
class CancelAndStopIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
    }

    handle(handlerInput) {
        const speakOutput = 'さようなら！　また質問してください！'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse()
    }
}

module.exports = CancelAndStopIntentHandler