// Module ID: 15828
// Function ID: 15829
// Name: App
// Dependencies: [19, 15829, 502, 8637, 15176, 15188, 15830, 15207, 9162, 15490, 15831, 15832, 12421, 8307, 2179, 5044, 15833, 7306, 15834, 15836, 21, 15837, 6108, 15843, 15847, 15848, 10355, 15857, 14359, 15859, 15862, 9230, 15969, 15977, 15980, 8808, 15983, 15985, 15989, 15991, 15992, 15993, 15995, 8417, 15996, 1379, 8145, 13821, 504, 6839, 15998, 13383, 9, 12003, 16000, 17650, 2]
// Exports: default

// Module 15828 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6108 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6839 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8417 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8808 */;
import GPlayManagerDefault from "GPlayManager" /* 9230 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10355 */;
import StartupProfilerDefault from "StartupProfiler" /* 12003 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14359 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15837 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15843 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15847 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15848 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15857 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15859 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15862 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15969 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15977 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15980 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15983 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15985 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15989 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15991 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15992 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15993 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15995 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15996 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15998 */;
import AppContainerDefault from "AppContainer" /* 16000 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15829 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 8637 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15176 */;
import RequestReviewStore from "RequestReviewStore" /* 15188 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15830 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15207 */;
import PromotionsStore from "PromotionsStore" /* 9162 */;
import BitRateStore from "BitRateStore" /* 15490 */;
import ShareStore from "ShareStore" /* 15831 */;
import PermissionVADStore from "PermissionVADStore" /* 15832 */;
import InteractionModalStore from "InteractionModalStore" /* 12421 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8307 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15833 */;
import PhoneStore from "PhoneStore" /* 7306 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15834 */;
import MemoryExperiment from "MemoryExperiment" /* 15836 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8145);
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
          const tmp9Result = tmp9(13383);
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
  return <tmp7 profile={stateFromStores(12003).Profiles.App}>{null}</tmp7>;
};
