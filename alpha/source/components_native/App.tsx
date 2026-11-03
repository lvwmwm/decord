// Module ID: 16367
// Function ID: 16368
// Name: App
// Dependencies: [19, 16368, 502, 9350, 15719, 15729, 16369, 15748, 9758, 16027, 16370, 16371, 16372, 7910, 2181, 5142, 16373, 7235, 16374, 16376, 21, 16377, 2123, 16410, 6140, 16416, 16417, 16418, 10341, 16428, 15358, 16430, 16433, 10708, 16526, 16534, 16537, 8961, 16540, 16542, 16546, 16548, 16549, 16550, 16552, 8023, 16553, 1377, 8353, 12196, 504, 6860, 16555, 8087, 9, 15703, 16167, 11700, 16557, 18126, 2]
// Exports: default

// Module 16367 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6140 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6860 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8023 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8961 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10341 */;
import GPlayManagerDefault from "GPlayManager" /* 10708 */;
import StartupProfilerDefault from "StartupProfiler" /* 11700 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15358 */;
import react_nativeDefault from "react-native" /* 16167 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16410 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16416 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16417 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16418 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16428 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16430 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16433 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16526 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16534 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16537 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16540 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16542 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16546 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16548 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16549 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16550 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16552 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16553 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16555 */;
import AppContainerDefault from "AppContainer" /* 16557 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16368 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9350 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15719 */;
import RequestReviewStore from "RequestReviewStore" /* 15729 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16369 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15748 */;
import PromotionsStore from "PromotionsStore" /* 9758 */;
import BitRateStore from "BitRateStore" /* 16027 */;
import ShareStore from "ShareStore" /* 16370 */;
import PermissionVADStore from "PermissionVADStore" /* 16371 */;
import InteractionModalStore from "InteractionModalStore" /* 16372 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7910 */;
import SubscriptionStore from "SubscriptionStore" /* 2181 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16373 */;
import PhoneStore from "PhoneStore" /* 7235 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16374 */;
import MemoryExperiment from "MemoryExperiment" /* 16376 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8353);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16377, dependencyMap.paths);
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
          const tmp5Result = tmp5(8087);
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
  let obj2 = stateFromStores(15703);
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
  return <tmp9 profile={stateFromStores(11700).Profiles.App}>{null}</tmp9>;
};
