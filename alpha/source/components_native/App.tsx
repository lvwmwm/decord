// Module ID: 16720
// Function ID: 16721
// Name: App
// Dependencies: [19, 16721, 502, 10515, 16069, 16079, 16722, 16098, 9556, 16381, 16723, 16724, 16725, 8684, 2176, 5244, 16726, 7702, 16727, 16729, 21, 16730, 2118, 16763, 6267, 16769, 16773, 16774, 8790, 16783, 8793, 16785, 16788, 9618, 16882, 16890, 16893, 8564, 16896, 16898, 16902, 16904, 16905, 16906, 16908, 6756, 16909, 1377, 8821, 13018, 504, 6781, 16911, 8133, 9, 16033, 16520, 12352, 16913, 18513, 2]
// Exports: default

// Module 16720 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6267 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6756 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6781 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8564 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8790 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8793 */;
import GPlayManagerDefault from "GPlayManager" /* 9618 */;
import StartupProfilerDefault from "StartupProfiler" /* 12352 */;
import react_nativeDefault from "react-native" /* 16520 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16763 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16769 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16773 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16774 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16783 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16785 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16788 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16882 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16890 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16893 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16896 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16898 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16902 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16904 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16905 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16906 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16908 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16909 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16911 */;
import AppContainerDefault from "AppContainer" /* 16913 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16721 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 10515 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 16069 */;
import RequestReviewStore from "RequestReviewStore" /* 16079 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16722 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 16098 */;
import PromotionsStore from "PromotionsStore" /* 9556 */;
import BitRateStore from "BitRateStore" /* 16381 */;
import ShareStore from "ShareStore" /* 16723 */;
import PermissionVADStore from "PermissionVADStore" /* 16724 */;
import InteractionModalStore from "InteractionModalStore" /* 16725 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8684 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16726 */;
import PhoneStore from "PhoneStore" /* 7702 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16727 */;
import MemoryExperiment from "MemoryExperiment" /* 16729 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8821);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16730, dependencyMap.paths);
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
          const tmp5Result = tmp5(8133);
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
  let obj2 = stateFromStores(16033);
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
  return <tmp9 profile={stateFromStores(12352).Profiles.App}>{null}</tmp9>;
};
