// Module ID: 15675
// Function ID: 15676
// Name: App
// Dependencies: [19, 15676, 502, 9186, 15032, 15042, 15677, 15061, 9552, 15336, 15678, 15679, 15680, 7749, 2058, 5004, 15681, 7067, 15682, 15684, 21, 15685, 2002, 558, 576, 15718, 6002, 15724, 15725, 15726, 10131, 15735, 14672, 15737, 15740, 10497, 15822, 15830, 15833, 8787, 15836, 15838, 15842, 15844, 15845, 15846, 15848, 7859, 15849, 1384, 8196, 11764, 504, 6700, 15851, 7923, 9, 15017, 15475, 13089, 15853, 17393, 2]

// Module 15675 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6002 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6700 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7859 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8787 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10131 */;
import GPlayManagerDefault from "GPlayManager" /* 10497 */;
import StartupProfilerDefault from "StartupProfiler" /* 13089 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14672 */;
import react_nativeDefault from "react-native" /* 15475 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15718 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15724 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15725 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15726 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15735 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15737 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15740 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15822 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15830 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15833 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15836 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15838 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15842 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15844 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15845 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15846 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15848 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15849 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15851 */;
import AppContainerDefault from "AppContainer" /* 15853 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15676 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9186 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15032 */;
import RequestReviewStore from "RequestReviewStore" /* 15042 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15677 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15061 */;
import PromotionsStore from "PromotionsStore" /* 9552 */;
import BitRateStore from "BitRateStore" /* 15336 */;
import ShareStore from "ShareStore" /* 15678 */;
import PermissionVADStore from "PermissionVADStore" /* 15679 */;
import InteractionModalStore from "InteractionModalStore" /* 15680 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7749 */;
import SubscriptionStore from "SubscriptionStore" /* 2058 */;
import AccessibilityStore from "AccessibilityStore" /* 5004 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15681 */;
import PhoneStore from "PhoneStore" /* 7067 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15682 */;
import MemoryExperiment from "MemoryExperiment" /* 15684 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp28;
const IosImageTypesManagerDefault = tmp(8196);
const RouteManagerUtils = tmp28(11764);
const StartupProfiler = tmp(13089);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(15685, dependencyMap.paths);
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useManagers() {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let obj = AccessibilityManagerDefault;
      obj.init();
      let obj2 = AccessibilityFocusLockManagerDefault;
      obj2.initialize();
      let obj3 = SystemTelecomManagerDefault;
      obj3.initialize();
      let obj4 = AccessibilityCallManagerDefault;
      obj4.initialize();
      let obj5 = NotificationTokenManagerDefault;
      obj5.initialize();
      let obj6 = ForegroundServiceManagerDefault;
      obj6.initialize();
      let obj7 = VoiceNotificationManagerDefault;
      obj7.initialize();
      let obj8 = SentMessageIntentsHandlerDefault;
      obj8.init();
      let obj9 = UserSettingsProtoManagerDefault;
      obj9.init();
      let obj10 = NativeRPCServerManagerDefault;
      obj10.init();
      let obj11 = GPlayManagerDefault;
      obj11.initialize();
      let obj12 = MobileVoiceOverlayLifecycleManagerDefault;
      obj12.initialize();
      let obj13 = EmbeddedActivitiesNativeManagerDefault;
      obj13.initialize();
      let obj14 = FramesNativeManagerDefault;
      obj14.initialize();
      let obj15 = MediaPlayerMuteManagerDefault;
      obj15.initialize();
      const obj16 = MediaPlayerManagerDefault;
      obj16.initialize();
      const obj17 = SoundboardManagerDefault;
      obj17.initialize();
      const obj18 = VoiceMessagesPlaybackManagerDefault;
      obj18.initialize();
      MobileNativeUpdateStore.ensureInitialized();
      const obj19 = ICYMIManagerDefault;
      obj19.initialize();
      const obj20 = GameRelationshipManagerDefault;
      obj20.initialize();
      const obj21 = CollectiblesMarketingManagerDefault;
      obj21.initialize();
      const obj22 = SessionAdManagerDefault;
      obj22.initialize();
      const obj23 = VoiceEngineStreamingManagerDefault;
      obj23.initialize();
      const obj24 = TouchEventAnalyticsManagerDefault;
      obj24.initialize();
      const obj25 = PlatformUtils;
      if (obj25.isIOS()) {
        const tmpResult = IosImageTypesManagerDefault;
        tmpResult.initialize();
      }
      const tmp28Result = RouteManagerUtils;
      const result = tmp28Result.initializeRouteManagerIfNeeded();
      return () => {
        const obj = closure_1_1(closure_1_2[28]);
        obj.terminate();
        const obj2 = closure_1_1(closure_1_2[26]);
        obj2.terminate();
        const obj3 = closure_1_1(closure_1_2[35]);
        obj3.terminate();
        const obj4 = closure_1_1(closure_1_2[36]);
        obj4.terminate();
        const obj5 = closure_1_0(closure_1_2[51]);
        obj5.cleanupRouteManager();
        const obj6 = closure_1_1(closure_1_2[48]);
        obj6.terminate();
        const obj7 = closure_1_1(closure_1_2[40]);
        obj7.terminate();
        const obj8 = closure_1_1(closure_1_2[39]);
        obj8.terminate();
        const obj9 = closure_1_1(closure_1_2[34]);
        obj9.terminate();
        const obj10 = closure_1_1(closure_1_2[42]);
        obj10.terminate();
        const obj11 = closure_1_1(closure_1_2[43]);
        obj11.terminate();
        const obj12 = closure_1_1(closure_1_2[44]);
        obj12.terminate();
        const obj13 = closure_1_1(closure_1_2[46]);
        obj13.terminate();
        const obj14 = closure_1_1(closure_1_2[47]);
        obj14.terminate();
        const obj15 = closure_1_1(closure_1_2[31]);
        obj15.terminate();
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
}) : (function useManagers() {
  const effect = react.useEffect(() => {
    let obj = AccessibilityManagerDefault;
    obj.init();
    let obj2 = AccessibilityFocusLockManagerDefault;
    obj2.initialize();
    let obj3 = SystemTelecomManagerDefault;
    obj3.initialize();
    let obj4 = AccessibilityCallManagerDefault;
    obj4.initialize();
    let obj5 = NotificationTokenManagerDefault;
    obj5.initialize();
    let obj6 = ForegroundServiceManagerDefault;
    obj6.initialize();
    let obj7 = VoiceNotificationManagerDefault;
    obj7.initialize();
    let obj8 = SentMessageIntentsHandlerDefault;
    obj8.init();
    let obj9 = UserSettingsProtoManagerDefault;
    obj9.init();
    let obj10 = NativeRPCServerManagerDefault;
    obj10.init();
    let obj11 = GPlayManagerDefault;
    obj11.initialize();
    let obj12 = MobileVoiceOverlayLifecycleManagerDefault;
    obj12.initialize();
    let obj13 = EmbeddedActivitiesNativeManagerDefault;
    obj13.initialize();
    let obj14 = FramesNativeManagerDefault;
    obj14.initialize();
    let obj15 = MediaPlayerMuteManagerDefault;
    obj15.initialize();
    const obj16 = MediaPlayerManagerDefault;
    obj16.initialize();
    const obj17 = SoundboardManagerDefault;
    obj17.initialize();
    const obj18 = VoiceMessagesPlaybackManagerDefault;
    obj18.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    const obj19 = ICYMIManagerDefault;
    obj19.initialize();
    const obj20 = GameRelationshipManagerDefault;
    obj20.initialize();
    const obj21 = CollectiblesMarketingManagerDefault;
    obj21.initialize();
    const obj22 = SessionAdManagerDefault;
    obj22.initialize();
    const obj23 = VoiceEngineStreamingManagerDefault;
    obj23.initialize();
    const obj24 = TouchEventAnalyticsManagerDefault;
    obj24.initialize();
    const obj25 = PlatformUtils;
    if (obj25.isIOS()) {
      const tmpResult = IosImageTypesManagerDefault;
      tmpResult.initialize();
    }
    const tmp28Result = RouteManagerUtils;
    const result = tmp28Result.initializeRouteManagerIfNeeded();
    return () => {
      const obj = closure_1_1(closure_1_2[28]);
      obj.terminate();
      const obj2 = closure_1_1(closure_1_2[26]);
      obj2.terminate();
      const obj3 = closure_1_1(closure_1_2[35]);
      obj3.terminate();
      const obj4 = closure_1_1(closure_1_2[36]);
      obj4.terminate();
      const obj5 = closure_1_0(closure_1_2[51]);
      obj5.cleanupRouteManager();
      const obj6 = closure_1_1(closure_1_2[48]);
      obj6.terminate();
      const obj7 = closure_1_1(closure_1_2[40]);
      obj7.terminate();
      const obj8 = closure_1_1(closure_1_2[39]);
      obj8.terminate();
      const obj9 = closure_1_1(closure_1_2[34]);
      obj9.terminate();
      const obj10 = closure_1_1(closure_1_2[42]);
      obj10.terminate();
      const obj11 = closure_1_1(closure_1_2[43]);
      obj11.terminate();
      const obj12 = closure_1_1(closure_1_2[44]);
      obj12.terminate();
      const obj13 = closure_1_1(closure_1_2[46]);
      obj13.terminate();
      const obj14 = closure_1_1(closure_1_2[47]);
      obj14.terminate();
      const obj15 = closure_1_1(closure_1_2[31]);
      obj15.terminate();
    };
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthenticated() {
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
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function o() {
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
          const tmp5 = importDefault;
          if (obj3.isAndroid()) {
            const tmp5Result = tmp5(7923);
            const notificationAuthorization = tmp5Result.requestNotificationAuthorization();
          }
          return () => {
            const obj = closure_1_1(closure_1_2[54]);
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
    const fn3 = function f() {
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
}) : (function useAuthenticated() {
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
        const tmp5 = importDefault;
        if (obj3.isAndroid()) {
          const tmp5Result = tmp5(7923);
          const notificationAuthorization = tmp5Result.requestNotificationAuthorization();
        }
        return () => {
          const obj = closure_1_1(closure_1_2[54]);
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
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelObfuscationPersistence() {
  let isChannelMetadataObfuscationEnabled;
  let tmp3;
  let tmp4;
  let obj = isChannelMetadataObfuscationEnabled(576);
  const cResult = obj.c(3);
  const obj2 = isChannelMetadataObfuscationEnabled(15017);
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
}) : (function useChannelObfuscationPersistence() {
  let isChannelMetadataObfuscationEnabled;
  let obj = isChannelMetadataObfuscationEnabled(15017);
  isChannelMetadataObfuscationEnabled = obj.useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault;
    const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
const main = "main";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? (function App() {
  let tmp10;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_7();
  closure_8();
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const renderAppEffect = TTITrackerDefault.renderAppEffect;
      return renderAppEffect.record();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const effect = react.useEffect(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    StartupProfilerDefault;
    AppContainerDefault;
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[2];
  }
  return tmp12;
}) : (function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_7();
  closure_8();
  closure_9();
  const effect = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  AppContainerDefault;
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});
let result = size.fileFinishedImporting("components_native/App.tsx");

export default tmp20;
