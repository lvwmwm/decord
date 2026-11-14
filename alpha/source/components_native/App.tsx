// Module ID: 16843
// Function ID: 16844
// Name: App
// Dependencies: [19, 16844, 502, 10584, 16190, 16200, 16845, 16219, 9623, 16504, 16846, 16847, 16848, 8751, 2179, 5307, 16849, 7768, 16850, 16852, 21, 16853, 2121, 16886, 6330, 16892, 16896, 16897, 8857, 16906, 8860, 16908, 16911, 9685, 17005, 17013, 17016, 8631, 17019, 17021, 17025, 17027, 17028, 17029, 17031, 6819, 17032, 1380, 8888, 13114, 504, 6844, 17034, 8199, 9, 16154, 16643, 12447, 17036, 18642, 2]
// Exports: default

// Module 16843 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6330 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6819 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6844 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8631 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8857 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8860 */;
import GPlayManagerDefault from "GPlayManager" /* 9685 */;
import StartupProfilerDefault from "StartupProfiler" /* 12447 */;
import react_nativeDefault from "react-native" /* 16643 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16886 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16892 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16896 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16897 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16906 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16908 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16911 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 17005 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 17013 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 17016 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 17019 */;
import SoundboardManagerDefault from "SoundboardManager" /* 17021 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 17025 */;
import ICYMIManagerDefault from "ICYMIManager" /* 17027 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 17028 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 17029 */;
import SessionAdManagerDefault from "SessionAdManager" /* 17031 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 17032 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 17034 */;
import AppContainerDefault from "AppContainer" /* 17036 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16844 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 10584 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 16190 */;
import RequestReviewStore from "RequestReviewStore" /* 16200 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 16219 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;
import BitRateStore from "BitRateStore" /* 16504 */;
import ShareStore from "ShareStore" /* 16846 */;
import PermissionVADStore from "PermissionVADStore" /* 16847 */;
import InteractionModalStore from "InteractionModalStore" /* 16848 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8751 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16849 */;
import PhoneStore from "PhoneStore" /* 7768 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16850 */;
import MemoryExperiment from "MemoryExperiment" /* 16852 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8888);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16853, dependencyMap.paths);
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
          const tmp5Result = tmp5(8199);
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
  let obj2 = stateFromStores(16154);
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
  return <tmp9 profile={stateFromStores(12447).Profiles.App}>{null}</tmp9>;
};
