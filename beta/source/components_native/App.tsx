// Module ID: 13886
// Function ID: 13887
// Name: App
// Dependencies: [19, 17, 13887, 502, 9078, 13232, 13241, 13888, 13262, 10167, 13543, 13889, 13890, 13891, 7061, 4497, 4826, 13892, 6359, 13893, 13894, 21, 13895, 1987, 558, 576, 13928, 5266, 14003, 14004, 14005, 14006, 7179, 14016, 7183, 14017, 14020, 10211, 14091, 8760, 8746, 7715, 14099, 14101, 14105, 14107, 14108, 14109, 14110, 4978, 14111, 1370, 5473, 12296, 504, 6005, 14113, 9, 13214, 13183, 14115, 11315, 14117, 15566, 2]

// Module 13886 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4978 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5266 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6005 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7179 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7183 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7715 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8746 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8760 */;
import GPlayManagerDefault from "GPlayManager" /* 10211 */;
import StartupProfilerDefault from "StartupProfiler" /* 11315 */;
import react_nativeDefault from "react-native" /* 13183 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 13928 */;
import BackPressManagerDefault from "BackPressManager" /* 14003 */;
import CallKitManagerDefault from "CallKitManager" /* 14004 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14005 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14006 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14016 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14017 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14020 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14091 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14099 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14101 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14105 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14107 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14108 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14109 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14110 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14111 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14113 */;
import AppContainerDefault from "AppContainer" /* 14117 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 13887 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9078 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13232 */;
import RequestReviewStore from "RequestReviewStore" /* 13241 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 13888 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 13262 */;
import PromotionsStore from "PromotionsStore" /* 10167 */;
import BitRateStore from "BitRateStore" /* 13543 */;
import ShareStore from "ShareStore" /* 13889 */;
import PermissionVADStore from "PermissionVADStore" /* 13890 */;
import InteractionModalStore from "InteractionModalStore" /* 13891 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7061 */;
import SubscriptionStore from "SubscriptionStore" /* 4497 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 13892 */;
import PhoneStore from "PhoneStore" /* 6359 */;
import ICYMISessionStore from "ICYMISessionStore" /* 13893 */;
import MemoryExperiment from "MemoryExperiment" /* 13894 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp29;
const IosImageTypesManagerDefault = tmp(5473);
const StartupProfiler = tmp(11315);
const RouteManagerUtils = tmp29(12296);
const NativeModules = react_native.NativeModules;
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(13895, dependencyMap.paths);
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let obj = AccessibilityManagerDefault;
      obj.init();
      let obj2 = AccessibilityFocusLockManagerDefault;
      obj2.initialize();
      let obj3 = BackPressManagerDefault;
      obj3.initialize();
      let obj4 = CallKitManagerDefault;
      obj4.initialize();
      let obj5 = AccessibilityCallManagerDefault;
      obj5.initialize();
      let obj6 = NotificationTokenManagerDefault;
      obj6.initialize();
      let obj7 = ForegroundServiceManagerDefault;
      obj7.initialize();
      let obj8 = VoiceNotificationManagerDefault;
      obj8.initialize();
      let obj9 = SentMessageIntentsHandlerDefault;
      obj9.init();
      let obj10 = UserSettingsProtoManagerDefault;
      obj10.init();
      let obj11 = NativeRPCServerManagerDefault;
      obj11.init();
      let obj12 = GPlayManagerDefault;
      obj12.initialize();
      let obj13 = MobileVoiceOverlayLifecycleManagerDefault;
      obj13.initialize();
      let obj14 = EmbeddedActivitiesNativeManagerDefault;
      obj14.initialize();
      let obj15 = FramesNativeManagerDefault;
      obj15.initialize();
      let obj16 = MediaPlayerMuteManagerDefault;
      obj16.initialize();
      const obj17 = MediaPlayerManagerDefault;
      obj17.initialize();
      const obj18 = SoundboardManagerDefault;
      obj18.initialize();
      const obj19 = VoiceMessagesPlaybackManagerDefault;
      obj19.initialize();
      MobileNativeUpdateStore.ensureInitialized();
      const obj20 = ICYMIManagerDefault;
      obj20.initialize();
      const obj21 = GameRelationshipManagerDefault;
      obj21.initialize();
      const obj22 = CollectiblesMarketingManagerDefault;
      obj22.initialize();
      const obj23 = SessionAdManagerDefault;
      obj23.initialize();
      const obj24 = VoiceEngineStreamingManagerDefault;
      obj24.initialize();
      const obj25 = TouchEventAnalyticsManagerDefault;
      obj25.initialize();
      const obj26 = PlatformUtils;
      if (obj26.isIOS()) {
        const tmpResult = IosImageTypesManagerDefault;
        tmpResult.initialize();
      }
      const tmp29Result = RouteManagerUtils;
      const result = tmp29Result.initializeRouteManagerIfNeeded();
      return () => {
        const obj = closure_1_1(closure_1_2[30]);
        obj.terminate();
        const obj2 = closure_1_1(closure_1_2[27]);
        obj2.terminate();
        const obj3 = closure_1_1(closure_1_2[37]);
        obj3.terminate();
        const obj4 = closure_1_1(closure_1_2[38]);
        obj4.terminate();
        const obj5 = closure_1_0(closure_1_2[53]);
        obj5.cleanupRouteManager();
        const obj6 = closure_1_1(closure_1_2[50]);
        obj6.terminate();
        const obj7 = closure_1_1(closure_1_2[42]);
        obj7.terminate();
        const obj8 = closure_1_1(closure_1_2[41]);
        obj8.terminate();
        const obj9 = closure_1_1(closure_1_2[36]);
        obj9.terminate();
        const obj10 = closure_1_1(closure_1_2[28]);
        obj10.terminate();
        const obj11 = closure_1_1(closure_1_2[44]);
        obj11.terminate();
        const obj12 = closure_1_1(closure_1_2[45]);
        obj12.terminate();
        const obj13 = closure_1_1(closure_1_2[46]);
        obj13.terminate();
        const obj14 = closure_1_1(closure_1_2[48]);
        obj14.terminate();
        const obj15 = closure_1_1(closure_1_2[49]);
        obj15.terminate();
        const obj16 = closure_1_1(closure_1_2[33]);
        obj16.terminate();
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = react.useEffect(() => {
    let obj = AccessibilityManagerDefault;
    obj.init();
    let obj2 = AccessibilityFocusLockManagerDefault;
    obj2.initialize();
    let obj3 = BackPressManagerDefault;
    obj3.initialize();
    let obj4 = CallKitManagerDefault;
    obj4.initialize();
    let obj5 = AccessibilityCallManagerDefault;
    obj5.initialize();
    let obj6 = NotificationTokenManagerDefault;
    obj6.initialize();
    let obj7 = ForegroundServiceManagerDefault;
    obj7.initialize();
    let obj8 = VoiceNotificationManagerDefault;
    obj8.initialize();
    let obj9 = SentMessageIntentsHandlerDefault;
    obj9.init();
    let obj10 = UserSettingsProtoManagerDefault;
    obj10.init();
    let obj11 = NativeRPCServerManagerDefault;
    obj11.init();
    let obj12 = GPlayManagerDefault;
    obj12.initialize();
    let obj13 = MobileVoiceOverlayLifecycleManagerDefault;
    obj13.initialize();
    let obj14 = EmbeddedActivitiesNativeManagerDefault;
    obj14.initialize();
    let obj15 = FramesNativeManagerDefault;
    obj15.initialize();
    let obj16 = MediaPlayerMuteManagerDefault;
    obj16.initialize();
    const obj17 = MediaPlayerManagerDefault;
    obj17.initialize();
    const obj18 = SoundboardManagerDefault;
    obj18.initialize();
    const obj19 = VoiceMessagesPlaybackManagerDefault;
    obj19.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    const obj20 = ICYMIManagerDefault;
    obj20.initialize();
    const obj21 = GameRelationshipManagerDefault;
    obj21.initialize();
    const obj22 = CollectiblesMarketingManagerDefault;
    obj22.initialize();
    const obj23 = SessionAdManagerDefault;
    obj23.initialize();
    const obj24 = VoiceEngineStreamingManagerDefault;
    obj24.initialize();
    const obj25 = TouchEventAnalyticsManagerDefault;
    obj25.initialize();
    const obj26 = PlatformUtils;
    if (obj26.isIOS()) {
      const tmpResult = IosImageTypesManagerDefault;
      tmpResult.initialize();
    }
    const tmp29Result = RouteManagerUtils;
    const result = tmp29Result.initializeRouteManagerIfNeeded();
    return () => {
      const obj = closure_1_1(closure_1_2[30]);
      obj.terminate();
      const obj2 = closure_1_1(closure_1_2[27]);
      obj2.terminate();
      const obj3 = closure_1_1(closure_1_2[37]);
      obj3.terminate();
      const obj4 = closure_1_1(closure_1_2[38]);
      obj4.terminate();
      const obj5 = closure_1_0(closure_1_2[53]);
      obj5.cleanupRouteManager();
      const obj6 = closure_1_1(closure_1_2[50]);
      obj6.terminate();
      const obj7 = closure_1_1(closure_1_2[42]);
      obj7.terminate();
      const obj8 = closure_1_1(closure_1_2[41]);
      obj8.terminate();
      const obj9 = closure_1_1(closure_1_2[36]);
      obj9.terminate();
      const obj10 = closure_1_1(closure_1_2[28]);
      obj10.terminate();
      const obj11 = closure_1_1(closure_1_2[44]);
      obj11.terminate();
      const obj12 = closure_1_1(closure_1_2[45]);
      obj12.terminate();
      const obj13 = closure_1_1(closure_1_2[46]);
      obj13.terminate();
      const obj14 = closure_1_1(closure_1_2[48]);
      obj14.terminate();
      const obj15 = closure_1_1(closure_1_2[49]);
      obj15.terminate();
      const obj16 = closure_1_1(closure_1_2[33]);
      obj16.terminate();
    };
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return AuthenticationStore.isAuthenticated();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function u() {
      const tmp = stateFromStores;
      if (tmp) {
        const token = AuthenticationStore.getToken();
        if (null == token) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Authenticated without a token");
          throw error;
        } else {
          let obj = AuthenticationActionCreatorsDefault;
          obj.startSession(token);
          const obj2 = LocalMessageCacheManagerDefault;
          obj2.initialize();
          const obj3 = PlatformUtils;
          if (obj3.isAndroid()) {
            const NativePermissionManager = NativeModules.NativePermissionManager;
            const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
          }
          return () => {
            const obj = closure_1_1(closure_1_2[56]);
            obj.terminate();
          };
        }
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  let obj3 = react;
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function z() {
      const tmp = TTITrackerDefault;
      tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const effect1 = obj3.useEffect(tmp11, tmp12);
}) : (() => {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = react.useEffect(function() {
    const tmp = stateFromStores;
    if (tmp) {
      const token = AuthenticationStore.getToken();
      if (null == token) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        let obj = AuthenticationActionCreatorsDefault;
        obj.startSession(token);
        const obj2 = LocalMessageCacheManagerDefault;
        obj2.initialize();
        const obj3 = PlatformUtils;
        if (obj3.isAndroid()) {
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          const obj = closure_1_1(closure_1_2[56]);
          obj.terminate();
        };
      }
    }
  }, items1);
  const effect1 = react.useEffect(() => {
    const tmp = TTITrackerDefault;
    tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isChannelMetadataObfuscationEnabled;
  let tmp3;
  let tmp4;
  let obj = isChannelMetadataObfuscationEnabled(576);
  const cResult = obj.c(3);
  const obj2 = isChannelMetadataObfuscationEnabled(13214);
  isChannelMetadataObfuscationEnabled = obj2.useIsChannelMetadataObfuscationEnabled("App");
  if (cResult[0] !== isChannelMetadataObfuscationEnabled) {
    const fn = function n() {
      const obj = react_nativeDefault;
      const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
    };
    const items = [isChannelMetadataObfuscationEnabled];
    cResult[0] = isChannelMetadataObfuscationEnabled;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (() => {
  let isChannelMetadataObfuscationEnabled;
  let obj = isChannelMetadataObfuscationEnabled(13214);
  isChannelMetadataObfuscationEnabled = obj.useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault;
    const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let shouldUseAltGateway;
  let tmp3;
  let tmp4;
  let obj = shouldUseAltGateway(576);
  const cResult = obj.c(3);
  const obj2 = shouldUseAltGateway(14115);
  shouldUseAltGateway = obj2.useShouldUseAltGateway("App");
  if (cResult[0] !== shouldUseAltGateway) {
    const fn = function n() {
      const obj = react_nativeDefault;
      obj.setUseAltGateway(shouldUseAltGateway);
    };
    const items = [shouldUseAltGateway];
    cResult[0] = shouldUseAltGateway;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (() => {
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(14115);
  shouldUseAltGateway = obj.useShouldUseAltGateway("App");
  const items = [shouldUseAltGateway];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault;
    obj.setUseAltGateway(shouldUseAltGateway);
  }, items);
});
const main = "main";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp11;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(3);
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_8();
  closure_9();
  closure_10();
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const renderAppEffect = TTITrackerDefault.renderAppEffect;
      return renderAppEffect.record();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = fn;
    tmp11 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    StartupProfilerDefault;
    AppContainerDefault;
    const tmp18 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp18;
    tmp13 = tmp18;
  } else {
    tmp13 = cResult[2];
  }
  return tmp13;
}) : (() => {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_8();
  closure_9();
  closure_10();
  closure_11();
  const effect = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  AppContainerDefault;
  return <tmp7 profile={StartupProfiler.Profiles.App}>{null}</tmp7>;
});
let result = size.fileFinishedImporting("components_native/App.tsx");

export default tmp20;
