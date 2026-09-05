// Module ID: 676
// Function ID: 677
// Name: debugSymbolicatorIntegration
// Dependencies: [677, 865, 881, 888, 975, 976, 977, 979, 980, 981, 990, 991, 992, 993, 994, 998, 999, 1017, 1027, 1029, 1030, 986, 1018, 1032, 1035, 1036, 1038, 1039, 1040, 1000]

// Module 676 (debugSymbolicatorIntegration)
import processEvent from "processEvent" /* 677 */;
import processEvent2 from "processEvent" /* 865 */;
import reactNativeErrorHandlersIntegration from "reactNativeErrorHandlersIntegration" /* 881 */;
import walkErrorTree from "walkErrorTree" /* 888 */;
import processEvent3 from "processEvent" /* 975 */;
import eventOriginIntegration from "eventOriginIntegration" /* 976 */;
import items from "items" /* 977 */;
import processEvent4 from "processEvent" /* 979 */;
import modulesLoaderIntegration from "modulesLoaderIntegration" /* 980 */;
import stopProfiling from "stopProfiling" /* 981 */;
import ANDROID_DEFAULT_BUNDLE_NAME from "ANDROID_DEFAULT_BUNDLE_NAME" /* 986 */;
import processEvent5 from "processEvent" /* 990 */;
import processEvent6 from "processEvent" /* 991 */;
import getExpoUpdatesContext from "getExpoUpdatesContext" /* 992 */;
import getDefaultSidecarUrl from "getDefaultSidecarUrl" /* 993 */;
import mobileReplayIntegrationNoop from "mobileReplayIntegrationNoop" /* 994 */;
import _getClientIntegration from "_getClientIntegration" /* 998 */;
import browserReplayIntegrationNoop from "browserReplayIntegrationNoop" /* 999 */;
import init from "init" /* 1000 */;
import setSpanDurationAsMeasurementOnTransactionEvent from "setSpanDurationAsMeasurementOnTransactionEvent" /* 1017 */;
import patchAppRegistryRunApplication from "patchAppRegistryRunApplication" /* 1018 */;
import fetchNativeFrames from "fetchNativeFrames" /* 1027 */;
import stallTrackingIntegration from "stallTrackingIntegration" /* 1029 */;
import userInteractionIntegration from "userInteractionIntegration" /* 1030 */;
import isDeadlineExceeded from "isDeadlineExceeded" /* 1032 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 1035 */;
import primitiveTagIntegration from "primitiveTagIntegration" /* 1036 */;
import logEnricherIntegration from "logEnricherIntegration" /* 1038 */;
import graphqlIntegration from "graphqlIntegration" /* 1039 */;
import supabaseIntegration from "supabaseIntegration" /* 1040 */;


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
