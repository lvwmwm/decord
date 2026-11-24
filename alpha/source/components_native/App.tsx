// Module ID: 15655
// Function ID: 15656
// Name: App
// Dependencies: [19, 15656, 502, 8496, 15004, 15016, 15657, 15035, 9021, 15317, 15658, 15659, 15660, 8166, 2178, 4918, 15661, 7180, 15662, 15664, 21, 15665, 5982, 15671, 15675, 15676, 10214, 15685, 14184, 15687, 15690, 9089, 15797, 15805, 15808, 8667, 15811, 15813, 15817, 15819, 15820, 15821, 15823, 8276, 15824, 1378, 8004, 13646, 504, 6713, 15826, 13208, 9, 11856, 15828, 17482, 2]
// Exports: default

// Module 15655 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5982 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6713 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8276 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8667 */;
import GPlayManagerDefault from "GPlayManager" /* 9089 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10214 */;
import StartupProfilerDefault from "StartupProfiler" /* 11856 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14184 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15665 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15671 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15675 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15676 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15685 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15687 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15690 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15797 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15805 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15808 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15811 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15813 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15817 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15819 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15820 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15821 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15823 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15824 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15826 */;
import AppContainerDefault from "AppContainer" /* 15828 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15656 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 8496 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15004 */;
import RequestReviewStore from "RequestReviewStore" /* 15016 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15657 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15035 */;
import PromotionsStore from "PromotionsStore" /* 9021 */;
import BitRateStore from "BitRateStore" /* 15317 */;
import ShareStore from "ShareStore" /* 15658 */;
import PermissionVADStore from "PermissionVADStore" /* 15659 */;
import InteractionModalStore from "InteractionModalStore" /* 15660 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8166 */;
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15661 */;
import PhoneStore from "PhoneStore" /* 7180 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15662 */;
import MemoryExperiment from "MemoryExperiment" /* 15664 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8004);
const jsx = Fragment.jsx;
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
    const obj25 = stateFromStores(dependencyMap[45]);
    const tmp28 = stateFromStores;
    if (obj25.isIOS()) {
      const tmpResult = IosImageTypesManagerDefault;
      tmpResult.initialize();
    }
    const tmp28Result = tmp28(dependencyMap[47]);
    const result = tmp28Result.initializeRouteManagerIfNeeded();
    return () => {
      const obj = closure_1_1(closure_1_2[24]);
      obj.terminate();
      const obj2 = closure_1_1(closure_1_2[22]);
      obj2.terminate();
      const obj3 = closure_1_1(closure_1_2[31]);
      obj3.terminate();
      const obj4 = closure_1_1(closure_1_2[32]);
      obj4.terminate();
      const obj5 = stateFromStores(closure_1_2[47]);
      obj5.cleanupRouteManager();
      const obj6 = closure_1_1(closure_1_2[44]);
      obj6.terminate();
      const obj7 = closure_1_1(closure_1_2[36]);
      obj7.terminate();
      const obj8 = closure_1_1(closure_1_2[35]);
      obj8.terminate();
      const obj9 = closure_1_1(closure_1_2[30]);
      obj9.terminate();
      const obj10 = closure_1_1(closure_1_2[38]);
      obj10.terminate();
      const obj11 = closure_1_1(closure_1_2[39]);
      obj11.terminate();
      const obj12 = closure_1_1(closure_1_2[40]);
      obj12.terminate();
      const obj13 = closure_1_1(closure_1_2[42]);
      obj13.terminate();
      const obj14 = closure_1_1(closure_1_2[43]);
      obj14.terminate();
      const obj15 = closure_1_1(closure_1_2[27]);
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
        const tmp9 = require;
        if (obj3.isAndroid()) {
          const tmp9Result = tmp9(13208);
          const androidNotificationPermission = tmp9Result.requestAndroidNotificationPermission();
        }
        return () => {
          const obj = closure_1_1(closure_1_2[50]);
          obj.terminate();
        };
      }
    }
  }, items1);
  const effect2 = react.useEffect(() => {
    const tmp = TTITrackerDefault;
    tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  const effect3 = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  let obj3 = { appEntryKey: "main", children: null };
  AppContainerDefault;
  return <tmp7 profile={stateFromStores(11856).Profiles.App}>{null}</tmp7>;
};
