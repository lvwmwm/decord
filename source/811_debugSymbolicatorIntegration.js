// Module ID: 811
// Function ID: 812
// Name: debugSymbolicatorIntegration
// Dependencies: [812, 1000, 1016, 1023, 1110, 1111, 1112, 1114, 1115, 1116, 1125, 1126, 1127, 1128, 1129, 1133, 1134, 1152, 1162, 1164, 1165, 1121, 1153, 1167, 1170, 1171, 1173, 1174, 1175, 1135]

// Module 811 (debugSymbolicatorIntegration)

export const debugSymbolicatorIntegration = require("processEvent").debugSymbolicatorIntegration;
export const deviceContextIntegration = require("processEvent").deviceContextIntegration;
export const reactNativeErrorHandlersIntegration = require("reactNativeErrorHandlersIntegration").reactNativeErrorHandlersIntegration;
export const nativeLinkedErrorsIntegration = require("walkErrorTree").nativeLinkedErrorsIntegration;
export const nativeReleaseIntegration = require("processEvent").nativeReleaseIntegration;
export const eventOriginIntegration = require("eventOriginIntegration").eventOriginIntegration;
export const sdkInfoIntegration = require("items").sdkInfoIntegration;
export const reactNativeInfoIntegration = require("processEvent").reactNativeInfoIntegration;
export const modulesLoaderIntegration = require("modulesLoaderIntegration").modulesLoaderIntegration;
export const hermesProfilingIntegration = require("stopProfiling").hermesProfilingIntegration;
export const screenshotIntegration = require("processEvent").screenshotIntegration;
export const viewHierarchyIntegration = require("processEvent").viewHierarchyIntegration;
export const expoContextIntegration = require("getExpoUpdatesContext").expoContextIntegration;
export const spotlightIntegration = require("getDefaultSidecarUrl").spotlightIntegration;
export const mobileReplayIntegration = require("mobileReplayIntegrationNoop").mobileReplayIntegration;
export const feedbackIntegration = require("_getClientIntegration").feedbackIntegration;
export const browserReplayIntegration = require("browserReplayIntegrationNoop").browserReplayIntegration;
export const appStartIntegration = require("setSpanDurationAsMeasurementOnTransactionEvent").appStartIntegration;
export const nativeFramesIntegration = require("fetchNativeFrames").nativeFramesIntegration;
export const createNativeFramesIntegrations = require("fetchNativeFrames").createNativeFramesIntegrations;
export const stallTrackingIntegration = require("stallTrackingIntegration").stallTrackingIntegration;
export const userInteractionIntegration = require("userInteractionIntegration").userInteractionIntegration;
export const createReactNativeRewriteFrames = require("ANDROID_DEFAULT_BUNDLE_NAME").createReactNativeRewriteFrames;
export const appRegistryIntegration = require("patchAppRegistryRunApplication").appRegistryIntegration;
export const timeToDisplayIntegration = require("isDeadlineExceeded").timeToDisplayIntegration;
export const breadcrumbsIntegration = require("breadcrumbsIntegration").breadcrumbsIntegration;
export const primitiveTagIntegration = require("primitiveTagIntegration").primitiveTagIntegration;
export const logEnricherIntegration = require("logEnricherIntegration").logEnricherIntegration;
export const graphqlIntegration = require("graphqlIntegration").graphqlIntegration;
export const supabaseIntegration = require("supabaseIntegration").supabaseIntegration;
export const browserApiErrorsIntegration = require("init").browserApiErrorsIntegration;
export const dedupeIntegration = require("init").dedupeIntegration;
export const functionToStringIntegration = require("init").functionToStringIntegration;
export const browserGlobalHandlersIntegration = require("init").globalHandlersIntegration;
export const httpClientIntegration = require("init").httpClientIntegration;
export const httpContextIntegration = require("init").httpContextIntegration;
export const inboundFiltersIntegration = require("init").inboundFiltersIntegration;
export const browserLinkedErrorsIntegration = require("init").linkedErrorsIntegration;
export const rewriteFramesIntegration = require("init").rewriteFramesIntegration;
export const extraErrorDataIntegration = require("init").extraErrorDataIntegration;
