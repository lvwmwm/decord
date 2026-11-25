// Module ID: 15642
// Function ID: 15643
// Name: App
// Dependencies: [19, 15643, 502, 9664, 14973, 14985, 15644, 15004, 9143, 15304, 15645, 15646, 15647, 8346, 2178, 4914, 15648, 7370, 15649, 15651, 21, 15652, 5922, 15658, 15662, 15663, 8452, 15672, 8455, 15674, 15677, 9209, 15777, 15785, 15788, 8221, 15791, 15793, 15797, 15799, 15800, 15801, 15803, 6454, 15804, 1378, 8483, 13739, 504, 6425, 15806, 13284, 9, 11983, 15808, 17452, 2]
// Exports: default

// Module 15642 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5922 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6425 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6454 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8221 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8452 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8455 */;
import GPlayManagerDefault from "GPlayManager" /* 9209 */;
import StartupProfilerDefault from "StartupProfiler" /* 11983 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15652 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15658 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15662 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15663 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15672 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15674 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15677 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15777 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15785 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15788 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15791 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15793 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15797 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15799 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15800 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15801 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15803 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15804 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15806 */;
import AppContainerDefault from "AppContainer" /* 15808 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15643 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9664 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 14973 */;
import RequestReviewStore from "RequestReviewStore" /* 14985 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15644 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15004 */;
import PromotionsStore from "PromotionsStore" /* 9143 */;
import BitRateStore from "BitRateStore" /* 15304 */;
import ShareStore from "ShareStore" /* 15645 */;
import PermissionVADStore from "PermissionVADStore" /* 15646 */;
import InteractionModalStore from "InteractionModalStore" /* 15647 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8346 */;
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15648 */;
import PhoneStore from "PhoneStore" /* 7370 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15649 */;
import MemoryExperiment from "MemoryExperiment" /* 15651 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8483);
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
          const tmp9Result = tmp9(13284);
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
  return <tmp7 profile={stateFromStores(11983).Profiles.App}>{null}</tmp7>;
};
