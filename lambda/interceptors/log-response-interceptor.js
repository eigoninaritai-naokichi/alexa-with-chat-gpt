/**
 * レスポンスをログに出力するインターセプター。
 */
class LogResponseInterceptor {
    process(handlerInput, response) {
      console.log(`レスポンスを返します。\n${JSON.stringify(response, null, 2)}`)
    }
}

module.exports = LogResponseInterceptor