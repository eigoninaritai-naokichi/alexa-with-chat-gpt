const Alexa = require('ask-sdk-core')
const LaunchRequestHandler = require('./handlers/launch-request-handler')
const OpenAiChatIntentHandler = require('./handlers/open-ai-chat-intent-handler')
const HelpIntentHandler = require('./handlers/help-intent-handler')
const CancelAndStopIntentHandler = require('./handlers/cancel-and-stop-intent-handler')
const FallbackIntentHandler = require('./handlers/fallback-intent-handler')
const SessionEndedRequestHandler = require('./handlers/session-ended-request-handler')
const LogRequestInterceptor = require('./interceptors/log-request-interceptor')
const LogResponseInterceptor = require('./interceptors/log-response-interceptor')
const ErrorHandler = require('./handlers/error-handler')
const OpenAiChat = require('./open-ai-chat/open-ai-chat')

/**
 * OpenAIチャット。
 */
let openAiChat = new OpenAiChat()

// スキルのエントリーポイントを設定する。
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        new LaunchRequestHandler(),
        new OpenAiChatIntentHandler(openAiChat),
        new HelpIntentHandler(),
        new CancelAndStopIntentHandler(),
        new FallbackIntentHandler(),
        new SessionEndedRequestHandler(openAiChat)
    )
    .addRequestInterceptors(new LogRequestInterceptor())
    .addResponseInterceptors(new LogResponseInterceptor())
    .addErrorHandlers(new ErrorHandler())
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda()