// Module ID: 15835
// Function ID: 15836
// Name: App
// Dependencies: [19, 15836, 502, 8638, 15183, 15195, 15837, 15214, 9163, 15497, 15838, 15839, 12429, 8308, 2179, 5044, 15840, 7306, 15841, 15843, 21, 15844, 6108, 15850, 15854, 15855, 10356, 15864, 14366, 15866, 15869, 9231, 15976, 15984, 15987, 8809, 15990, 15992, 15996, 15998, 15999, 16000, 16002, 8418, 16003, 1379, 8146, 13828, 504, 6839, 16005, 13391, 9, 12011, 16007, 17657, 2]
// Exports: default

// Module 15835 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6108 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6839 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8418 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8809 */;
import GPlayManagerDefault from "GPlayManager" /* 9231 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10356 */;
import StartupProfilerDefault from "StartupProfiler" /* 12011 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14366 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15844 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15850 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15854 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15855 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15864 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15866 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15869 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15976 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15984 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15987 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15990 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15992 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15996 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15998 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15999 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16000 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16002 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16003 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16005 */;
import AppContainerDefault from "AppContainer" /* 16007 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15836 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 8638 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15183 */;
import RequestReviewStore from "RequestReviewStore" /* 15195 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15837 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15214 */;
import PromotionsStore from "PromotionsStore" /* 9163 */;
import BitRateStore from "BitRateStore" /* 15497 */;
import ShareStore from "ShareStore" /* 15838 */;
import PermissionVADStore from "PermissionVADStore" /* 15839 */;
import InteractionModalStore from "InteractionModalStore" /* 12429 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8308 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15840 */;
import PhoneStore from "PhoneStore" /* 7306 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15841 */;
import MemoryExperiment from "MemoryExperiment" /* 15843 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8146);
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
          const tmp9Result = tmp9(13391);
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
  return <tmp7 profile={stateFromStores(12011).Profiles.App}>{null}</tmp7>;
};
