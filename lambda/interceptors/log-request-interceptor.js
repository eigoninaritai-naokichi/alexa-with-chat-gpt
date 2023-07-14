/**
 * リクエストをログに出力するインターセプター。
 */
class LogRequestInterceptor {
    process(handlerInput) {
      console.log(`リクエストを受け付けました。\n${JSON.stringify(handlerInput.requestEnvelope, null, 2)}`)
    }
}

module.exports = LogRequestInterceptor