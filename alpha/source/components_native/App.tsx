// Module ID: 15777
// Function ID: 15778
// Name: App
// Dependencies: [19, 15778, 502, 8595, 15126, 15138, 15779, 15157, 9120, 15439, 15780, 15781, 12371, 8265, 2178, 5013, 15782, 7275, 15783, 15785, 21, 15786, 6077, 15792, 15796, 15797, 10313, 15806, 14307, 15808, 15811, 9188, 15918, 15926, 15929, 8766, 15932, 15934, 15938, 15940, 15941, 15942, 15944, 8375, 15945, 1378, 8103, 13769, 504, 6808, 15947, 13331, 9, 11955, 15949, 17593, 2]
// Exports: default

// Module 15777 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6077 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6808 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8375 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8766 */;
import GPlayManagerDefault from "GPlayManager" /* 9188 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10313 */;
import StartupProfilerDefault from "StartupProfiler" /* 11955 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14307 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15786 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15792 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15796 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15797 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15806 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15808 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15811 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15918 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15926 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15929 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15932 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15934 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15938 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15940 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15941 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15942 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15944 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15945 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15947 */;
import AppContainerDefault from "AppContainer" /* 15949 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 8595 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15126 */;
import RequestReviewStore from "RequestReviewStore" /* 15138 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15779 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15157 */;
import PromotionsStore from "PromotionsStore" /* 9120 */;
import BitRateStore from "BitRateStore" /* 15439 */;
import ShareStore from "ShareStore" /* 15780 */;
import PermissionVADStore from "PermissionVADStore" /* 15781 */;
import InteractionModalStore from "InteractionModalStore" /* 12371 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8265 */;
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15782 */;
import PhoneStore from "PhoneStore" /* 7275 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15783 */;
import MemoryExperiment from "MemoryExperiment" /* 15785 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8103);
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
          const tmp9Result = tmp9(13331);
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
  return <tmp7 profile={stateFromStores(11955).Profiles.App}>{null}</tmp7>;
};
