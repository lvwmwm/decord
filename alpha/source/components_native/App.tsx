// Module ID: 16878
// Function ID: 16879
// Name: App
// Dependencies: [19, 16879, 502, 10284, 16227, 16237, 16880, 16256, 9635, 16540, 16881, 16882, 16883, 8762, 2179, 5311, 16884, 7778, 16885, 16887, 21, 16888, 2121, 16921, 6328, 16927, 16931, 16932, 8868, 16941, 8871, 16943, 16946, 9698, 17040, 17048, 17051, 8642, 17054, 17056, 17060, 17062, 17063, 17064, 17066, 6858, 17067, 1380, 8899, 14360, 504, 6829, 17069, 8210, 9, 16191, 16678, 12653, 17071, 18685, 2]
// Exports: default

// Module 16878 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6328 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6858 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8642 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8868 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8871 */;
import GPlayManagerDefault from "GPlayManager" /* 9698 */;
import StartupProfilerDefault from "StartupProfiler" /* 12653 */;
import react_nativeDefault from "react-native" /* 16678 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16921 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16927 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16931 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16932 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16941 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16943 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16946 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 17040 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 17048 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 17051 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 17054 */;
import SoundboardManagerDefault from "SoundboardManager" /* 17056 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 17060 */;
import ICYMIManagerDefault from "ICYMIManager" /* 17062 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 17063 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 17064 */;
import SessionAdManagerDefault from "SessionAdManager" /* 17066 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 17067 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 17069 */;
import AppContainerDefault from "AppContainer" /* 17071 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16879 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 10284 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 16227 */;
import RequestReviewStore from "RequestReviewStore" /* 16237 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16880 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 16256 */;
import PromotionsStore from "PromotionsStore" /* 9635 */;
import BitRateStore from "BitRateStore" /* 16540 */;
import ShareStore from "ShareStore" /* 16881 */;
import PermissionVADStore from "PermissionVADStore" /* 16882 */;
import InteractionModalStore from "InteractionModalStore" /* 16883 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8762 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16884 */;
import PhoneStore from "PhoneStore" /* 7778 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16885 */;
import MemoryExperiment from "MemoryExperiment" /* 16887 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8899);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16888, dependencyMap.paths);
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
          const tmp5Result = tmp5(8210);
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
  let obj2 = stateFromStores(16191);
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
  return <tmp9 profile={stateFromStores(12653).Profiles.App}>{null}</tmp9>;
};
