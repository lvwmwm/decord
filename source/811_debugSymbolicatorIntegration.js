// Module ID: 811
// Function ID: 812
// Name: debugSymbolicatorIntegration
// Dependencies: [812, 1000, 1016, 1023, 1110, 1111, 1112, 1114, 1115, 1116, 1125, 1126, 1127, 1128, 1129, 1133, 1134, 1152, 1162, 1164, 1165, 1121, 1153, 1167, 1170, 1171, 1173, 1174, 1175, 1135]

// Module 811 (debugSymbolicatorIntegration)
import processEvent from "processEvent" /* 812 */;
import processEvent2 from "processEvent" /* 1000 */;
import reactNativeErrorHandlersIntegration from "reactNativeErrorHandlersIntegration" /* 1016 */;
import walkErrorTree from "walkErrorTree" /* 1023 */;
import processEvent3 from "processEvent" /* 1110 */;
import eventOriginIntegration from "eventOriginIntegration" /* 1111 */;
import items from "items" /* 1112 */;
import processEvent4 from "processEvent" /* 1114 */;
import modulesLoaderIntegration from "modulesLoaderIntegration" /* 1115 */;
import stopProfiling from "stopProfiling" /* 1116 */;
import ANDROID_DEFAULT_BUNDLE_NAME from "ANDROID_DEFAULT_BUNDLE_NAME" /* 1121 */;
import processEvent5 from "processEvent" /* 1125 */;
import processEvent6 from "processEvent" /* 1126 */;
import getExpoUpdatesContext from "getExpoUpdatesContext" /* 1127 */;
import getDefaultSidecarUrl from "getDefaultSidecarUrl" /* 1128 */;
import mobileReplayIntegrationNoop from "mobileReplayIntegrationNoop" /* 1129 */;
import _getClientIntegration from "_getClientIntegration" /* 1133 */;
import browserReplayIntegrationNoop from "browserReplayIntegrationNoop" /* 1134 */;
import init from "init" /* 1135 */;
import setSpanDurationAsMeasurementOnTransactionEvent from "setSpanDurationAsMeasurementOnTransactionEvent" /* 1152 */;
import patchAppRegistryRunApplication from "patchAppRegistryRunApplication" /* 1153 */;
import fetchNativeFrames from "fetchNativeFrames" /* 1162 */;
import stallTrackingIntegration from "stallTrackingIntegration" /* 1164 */;
import userInteractionIntegration from "userInteractionIntegration" /* 1165 */;
import isDeadlineExceeded from "isDeadlineExceeded" /* 1167 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 1170 */;
import primitiveTagIntegration from "primitiveTagIntegration" /* 1171 */;
import logEnricherIntegration from "logEnricherIntegration" /* 1173 */;
import graphqlIntegration from "graphqlIntegration" /* 1174 */;
import supabaseIntegration from "supabaseIntegration" /* 1175 */;


export const debugSymbolicatorIntegration = processEvent.debugSymbolicatorIntegration;
export const deviceContextIntegration = processEvent2.deviceContextIntegration;
export const reactNativeErrorHandlersIntegration = reactNativeErrorHandlersIntegration.reactNativeErrorHandlersIntegration;
export const nativeLinkedErrorsIntegration = walkErrorTree.nativeLinkedErrorsIntegration;
export const nativeReleaseIntegration = processEvent3.nativeReleaseIntegration;
export const eventOriginIntegration = eventOriginIntegration.eventOriginIntegration;
export const sdkInfoIntegration = items.sdkInfoIntegration;
export const reactNativeInfoIntegration = processEvent4.reactNativeInfoIntegration;
export const modulesLoaderIntegration = modulesLoaderIntegration.modulesLoaderIntegration;
export const hermesProfilingIntegration = stopProfiling.hermesProfilingIntegration;
export const screenshotIntegration = processEvent5.screenshotIntegration;
export const viewHierarchyIntegration = processEvent6.viewHierarchyIntegration;
export const expoContextIntegration = getExpoUpdatesContext.expoContextIntegration;
export const spotlightIntegration = getDefaultSidecarUrl.spotlightIntegration;
export const mobileReplayIntegration = mobileReplayIntegrationNoop.mobileReplayIntegration;
export const feedbackIntegration = _getClientIntegration.feedbackIntegration;
export const browserReplayIntegration = browserReplayIntegrationNoop.browserReplayIntegration;
export const appStartIntegration = setSpanDurationAsMeasurementOnTransactionEvent.appStartIntegration;
export const nativeFramesIntegration = fetchNativeFrames.nativeFramesIntegration;
export const createNativeFramesIntegrations = fetchNativeFrames.createNativeFramesIntegrations;
export const stallTrackingIntegration = stallTrackingIntegration.stallTrackingIntegration;
export const userInteractionIntegration = userInteractionIntegration.userInteractionIntegration;
export const createReactNativeRewriteFrames = ANDROID_DEFAULT_BUNDLE_NAME.createReactNativeRewriteFrames;
export const appRegistryIntegration = patchAppRegistryRunApplication.appRegistryIntegration;
export const timeToDisplayIntegration = isDeadlineExceeded.timeToDisplayIntegration;
export const breadcrumbsIntegration = breadcrumbsIntegration.breadcrumbsIntegration;
export const primitiveTagIntegration = primitiveTagIntegration.primitiveTagIntegration;
export const logEnricherIntegration = logEnricherIntegration.logEnricherIntegration;
export const graphqlIntegration = graphqlIntegration.graphqlIntegration;
export const supabaseIntegration = supabaseIntegration.supabaseIntegration;
export const browserApiErrorsIntegration = init.browserApiErrorsIntegration;
export const dedupeIntegration = init.dedupeIntegration;
export const functionToStringIntegration = init.functionToStringIntegration;
export const browserGlobalHandlersIntegration = init.globalHandlersIntegration;
export const httpClientIntegration = init.httpClientIntegration;
export const httpContextIntegration = init.httpContextIntegration;
export const inboundFiltersIntegration = init.inboundFiltersIntegration;
export const browserLinkedErrorsIntegration = init.linkedErrorsIntegration;
export const rewriteFramesIntegration = init.rewriteFramesIntegration;
export const extraErrorDataIntegration = init.extraErrorDataIntegration;
