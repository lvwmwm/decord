// Module ID: 14570
// Function ID: 14571
// Name: App
// Dependencies: [19, 14571, 502, 8769, 13904, 13914, 14572, 13934, 9101, 14231, 14573, 14574, 14575, 7326, 4734, 5080, 14576, 6622, 14577, 14579, 21, 14580, 2000, 558, 576, 14613, 5360, 14619, 14620, 14621, 9673, 14631, 13546, 14632, 14635, 10035, 14713, 14721, 14724, 8374, 14727, 14729, 14733, 14735, 14736, 14737, 14738, 7442, 14739, 1382, 7759, 11152, 504, 5937, 14741, 7505, 9, 13889, 14370, 11583, 14743, 16275, 2]

// Module 14570 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5360 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5937 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7442 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8374 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 9673 */;
import GPlayManagerDefault from "GPlayManager" /* 10035 */;
import StartupProfilerDefault from "StartupProfiler" /* 11583 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 13546 */;
import react_nativeDefault from "react-native" /* 14370 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14613 */;
import CallKitManagerDefault from "CallKitManager" /* 14619 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14620 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14621 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14631 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14632 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14635 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14713 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 14721 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 14724 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14727 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14729 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14733 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14735 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14736 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14737 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14738 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14739 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14741 */;
import AppContainerDefault from "AppContainer" /* 14743 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14571 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 8769 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13904 */;
import RequestReviewStore from "RequestReviewStore" /* 13914 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 14572 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 13934 */;
import PromotionsStore from "PromotionsStore" /* 9101 */;
import BitRateStore from "BitRateStore" /* 14231 */;
import ShareStore from "ShareStore" /* 14573 */;
import PermissionVADStore from "PermissionVADStore" /* 14574 */;
import InteractionModalStore from "InteractionModalStore" /* 14575 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7326 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 14576 */;
import PhoneStore from "PhoneStore" /* 6622 */;
import ICYMISessionStore from "ICYMISessionStore" /* 14577 */;
import MemoryExperiment from "MemoryExperiment" /* 14579 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp28;
const IosImageTypesManagerDefault = tmp(7759);
const RouteManagerUtils = tmp28(11152);
const StartupProfiler = tmp(11583);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(14580, dependencyMap.paths);
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
      let obj3 = CallKitManagerDefault;
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
    let obj3 = CallKitManagerDefault;
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
            const tmp5Result = tmp5(7505);
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
          const tmp5Result = tmp5(7505);
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
  const obj2 = isChannelMetadataObfuscationEnabled(13889);
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
  let obj = isChannelMetadataObfuscationEnabled(13889);
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
