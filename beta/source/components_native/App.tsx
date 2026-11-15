// Module ID: 16567
// Function ID: 16568
// Name: App
// Dependencies: [19, 16568, 502, 9335, 15917, 15927, 16569, 15946, 9747, 16227, 16570, 16571, 16572, 7895, 2176, 5171, 16573, 7213, 16574, 16576, 21, 16577, 2118, 16610, 6184, 16616, 16620, 16621, 10362, 16630, 15528, 16632, 16635, 10729, 16729, 16737, 16740, 8944, 16743, 16745, 16749, 16751, 16752, 16753, 16755, 8009, 16756, 1377, 8332, 12254, 504, 6827, 16758, 8065, 9, 15881, 16367, 11752, 16760, 18353, 2]
// Exports: default

// Module 16567 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6184 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6827 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8009 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8944 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10362 */;
import GPlayManagerDefault from "GPlayManager" /* 10729 */;
import StartupProfilerDefault from "StartupProfiler" /* 11752 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15528 */;
import react_nativeDefault from "react-native" /* 16367 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16610 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16616 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16620 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16621 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16630 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16632 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16635 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16729 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16737 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16740 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16743 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16745 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16749 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16751 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16752 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16753 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16755 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16756 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16758 */;
import AppContainerDefault from "AppContainer" /* 16760 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16568 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9335 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15917 */;
import RequestReviewStore from "RequestReviewStore" /* 15927 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16569 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15946 */;
import PromotionsStore from "PromotionsStore" /* 9747 */;
import BitRateStore from "BitRateStore" /* 16227 */;
import ShareStore from "ShareStore" /* 16570 */;
import PermissionVADStore from "PermissionVADStore" /* 16571 */;
import InteractionModalStore from "InteractionModalStore" /* 16572 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7895 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16573 */;
import PhoneStore from "PhoneStore" /* 7213 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16574 */;
import MemoryExperiment from "MemoryExperiment" /* 16576 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8332);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16577, dependencyMap.paths);
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
          const tmp5Result = tmp5(8065);
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
  let obj2 = stateFromStores(15881);
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
  return <tmp9 profile={stateFromStores(11752).Profiles.App}>{null}</tmp9>;
};
