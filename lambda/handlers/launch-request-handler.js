const Alexa = require('ask-sdk-core')

/**
 * スキル起動時に呼び出されるハンドラー。
 */
class LaunchRequestHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    }

    handle(handlerInput) {
        const speakOutput = '質問をどうぞ！'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse()
    }
}

module.exports = LaunchRequestHandler