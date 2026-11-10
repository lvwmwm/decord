// Module ID: 16564
// Function ID: 16565
// Name: App
// Dependencies: [19, 16565, 502, 9308, 15915, 15925, 16566, 15944, 9720, 16224, 16567, 16568, 16569, 7866, 2176, 5143, 16570, 7183, 16571, 16573, 21, 16574, 2118, 16607, 6154, 16613, 16617, 16618, 10336, 16627, 15523, 16629, 16632, 10706, 16726, 16734, 16737, 8917, 16740, 16742, 16746, 16748, 16749, 16750, 16752, 7980, 16753, 1377, 8303, 12232, 504, 6797, 16755, 8036, 9, 15879, 16364, 11730, 16757, 18346, 2]
// Exports: default

// Module 16564 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6154 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6797 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7980 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8917 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10336 */;
import GPlayManagerDefault from "GPlayManager" /* 10706 */;
import StartupProfilerDefault from "StartupProfiler" /* 11730 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15523 */;
import react_nativeDefault from "react-native" /* 16364 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16607 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16613 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16617 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16618 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16627 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16629 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16632 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16726 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16734 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16737 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16740 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16742 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16746 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16748 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16749 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16750 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16752 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16753 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16755 */;
import AppContainerDefault from "AppContainer" /* 16757 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16565 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9308 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15915 */;
import RequestReviewStore from "RequestReviewStore" /* 15925 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16566 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15944 */;
import PromotionsStore from "PromotionsStore" /* 9720 */;
import BitRateStore from "BitRateStore" /* 16224 */;
import ShareStore from "ShareStore" /* 16567 */;
import PermissionVADStore from "PermissionVADStore" /* 16568 */;
import InteractionModalStore from "InteractionModalStore" /* 16569 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7866 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16570 */;
import PhoneStore from "PhoneStore" /* 7183 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16571 */;
import MemoryExperiment from "MemoryExperiment" /* 16573 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8303);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16574, dependencyMap.paths);
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
          const tmp5Result = tmp5(8036);
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
  let obj2 = stateFromStores(15879);
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
  return <tmp9 profile={stateFromStores(11730).Profiles.App}>{null}</tmp9>;
};
