/**
 * エラーハンドラー。
 * */
class ErrorHandler {
    canHandle() {
        return true
    }

    handle(handlerInput, error) {
        console.log(`エラーが発生しました。\n${JSON.stringify(error)}`)

        const speakOutput = 'エラーが発生しました。もう一度お願いします。'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse()
    }
}

module.exports = ErrorHandler