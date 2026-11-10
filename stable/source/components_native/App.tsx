// Module ID: 16219
// Function ID: 16220
// Name: App
// Dependencies: [19, 16220, 502, 9222, 15572, 15582, 16221, 15601, 9626, 15879, 16222, 16223, 16224, 7786, 2052, 5015, 16225, 7109, 16226, 16228, 21, 16229, 1994, 16262, 6020, 16268, 16269, 16270, 10211, 16279, 15212, 16281, 16284, 10578, 16378, 16386, 16389, 8837, 16392, 16394, 16398, 16400, 16401, 16402, 16404, 7899, 16405, 1375, 8229, 12059, 504, 6740, 16407, 7963, 9, 15557, 16019, 11563, 16409, 17978, 2]
// Exports: default

// Module 16219 (App)
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
import StartupProfilerDefault from "StartupProfiler" /* 11563 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15212 */;
import react_nativeDefault from "react-native" /* 16019 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16262 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16268 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16269 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16270 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16279 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16281 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16284 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16378 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16386 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16389 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16392 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16394 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16398 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16400 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16401 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16402 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16404 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16405 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16407 */;
import AppContainerDefault from "AppContainer" /* 16409 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16220 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9222 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15572 */;
import RequestReviewStore from "RequestReviewStore" /* 15582 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16221 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15601 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import BitRateStore from "BitRateStore" /* 15879 */;
import ShareStore from "ShareStore" /* 16222 */;
import PermissionVADStore from "PermissionVADStore" /* 16223 */;
import InteractionModalStore from "InteractionModalStore" /* 16224 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7786 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16225 */;
import PhoneStore from "PhoneStore" /* 7109 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16226 */;
import MemoryExperiment from "MemoryExperiment" /* 16228 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8229);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16229, dependencyMap.paths);
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
  let obj2 = stateFromStores(15557);
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
  return <tmp9 profile={stateFromStores(11563).Profiles.App}>{null}</tmp9>;
};
