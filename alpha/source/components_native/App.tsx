// Module ID: 16220
// Function ID: 16221
// Name: App
// Dependencies: [19, 16221, 502, 9222, 15573, 15583, 16222, 15602, 9626, 15880, 16223, 16224, 16225, 7786, 2052, 5015, 16226, 7109, 16227, 16229, 21, 16230, 1994, 16263, 6020, 16269, 16270, 16271, 10211, 16280, 15213, 16282, 16285, 10578, 16371, 16379, 16382, 8837, 16385, 16387, 16391, 16393, 16394, 16395, 16397, 7899, 16398, 1375, 8229, 12058, 504, 6740, 16400, 7963, 9, 15558, 16020, 11562, 16402, 17970, 2]
// Exports: default

// Module 16220 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6020 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7899 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8837 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10211 */;
import GPlayManagerDefault from "GPlayManager" /* 10578 */;
import StartupProfilerDefault from "StartupProfiler" /* 11562 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15213 */;
import react_nativeDefault from "react-native" /* 16020 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16263 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16269 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16270 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16271 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16280 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16282 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16285 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16371 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16379 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16382 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16385 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16387 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16391 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16393 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16394 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16395 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16397 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16398 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16400 */;
import AppContainerDefault from "AppContainer" /* 16402 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9222 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15573 */;
import RequestReviewStore from "RequestReviewStore" /* 15583 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16222 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15602 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import BitRateStore from "BitRateStore" /* 15880 */;
import ShareStore from "ShareStore" /* 16223 */;
import PermissionVADStore from "PermissionVADStore" /* 16224 */;
import InteractionModalStore from "InteractionModalStore" /* 16225 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7786 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16226 */;
import PhoneStore from "PhoneStore" /* 7109 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16227 */;
import MemoryExperiment from "MemoryExperiment" /* 16229 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8229);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16230, dependencyMap.paths);
}
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
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
    const obj25 = stateFromStores(dependencyMap[47]);
    const tmp28 = stateFromStores;
    if (obj25.isIOS()) {
      const tmpResult = IosImageTypesManagerDefault;
      tmpResult.initialize();
    }
    const tmp28Result = tmp28(dependencyMap[49]);
    const result = tmp28Result.initializeRouteManagerIfNeeded();
    return () => {
      const obj = closure_1_1(closure_1_2[26]);
      obj.terminate();
      const obj2 = closure_1_1(closure_1_2[24]);
      obj2.terminate();
      const obj3 = closure_1_1(closure_1_2[33]);
      obj3.terminate();
      const obj4 = closure_1_1(closure_1_2[34]);
      obj4.terminate();
      const obj5 = stateFromStores(closure_1_2[49]);
      obj5.cleanupRouteManager();
      const obj6 = closure_1_1(closure_1_2[46]);
      obj6.terminate();
      const obj7 = closure_1_1(closure_1_2[38]);
      obj7.terminate();
      const obj8 = closure_1_1(closure_1_2[37]);
      obj8.terminate();
      const obj9 = closure_1_1(closure_1_2[32]);
      obj9.terminate();
      const obj10 = closure_1_1(closure_1_2[40]);
      obj10.terminate();
      const obj11 = closure_1_1(closure_1_2[41]);
      obj11.terminate();
      const obj12 = closure_1_1(closure_1_2[42]);
      obj12.terminate();
      const obj13 = closure_1_1(closure_1_2[44]);
      obj13.terminate();
      const obj14 = closure_1_1(closure_1_2[45]);
      obj14.terminate();
      const obj15 = closure_1_1(closure_1_2[29]);
      obj15.terminate();
    };
  }, []);
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect1 = react.useEffect(function() {
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
          const tmp5Result = tmp5(7963);
          const notificationAuthorization = tmp5Result.requestNotificationAuthorization();
        }
        return () => {
          const obj = closure_1_1(closure_1_2[52]);
          obj.terminate();
        };
      }
    }
  }, items1);
  const effect2 = react.useEffect(() => {
    const tmp = TTITrackerDefault;
    tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj2 = stateFromStores(15558);
  const isChannelMetadataObfuscationEnabled = obj2.useIsChannelMetadataObfuscationEnabled("App");
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = react.useEffect(() => {
    const obj = react_nativeDefault;
    const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items2);
  const effect4 = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  let obj4 = { appEntryKey: "main", children: null };
  AppContainerDefault;
  return <tmp9 profile={stateFromStores(11562).Profiles.App}>{null}</tmp9>;
};
