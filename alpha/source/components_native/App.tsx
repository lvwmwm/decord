// Module ID: 16482
// Function ID: 16483
// Name: App
// Dependencies: [19, 16483, 502, 9374, 15833, 15843, 16484, 15862, 9782, 16143, 16485, 16486, 16487, 7931, 2181, 5144, 16488, 7258, 16489, 16491, 21, 16492, 2123, 16525, 6158, 16531, 16535, 16536, 10395, 16545, 15459, 16547, 16550, 10762, 16643, 16651, 16654, 8983, 16657, 16659, 16663, 16665, 16666, 16667, 16669, 8044, 16670, 1377, 8374, 12265, 504, 6878, 16672, 8108, 9, 15805, 16282, 11764, 16674, 18265, 2]
// Exports: default

// Module 16482 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6158 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6878 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8044 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8983 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10395 */;
import GPlayManagerDefault from "GPlayManager" /* 10762 */;
import StartupProfilerDefault from "StartupProfiler" /* 11764 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15459 */;
import react_nativeDefault from "react-native" /* 16282 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16525 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16531 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16535 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16536 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16545 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16547 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16550 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16643 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16651 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16654 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16657 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16659 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16663 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16665 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16666 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16667 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16669 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16670 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16672 */;
import AppContainerDefault from "AppContainer" /* 16674 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16483 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9374 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15833 */;
import RequestReviewStore from "RequestReviewStore" /* 15843 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16484 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15862 */;
import PromotionsStore from "PromotionsStore" /* 9782 */;
import BitRateStore from "BitRateStore" /* 16143 */;
import ShareStore from "ShareStore" /* 16485 */;
import PermissionVADStore from "PermissionVADStore" /* 16486 */;
import InteractionModalStore from "InteractionModalStore" /* 16487 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7931 */;
import SubscriptionStore from "SubscriptionStore" /* 2181 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16488 */;
import PhoneStore from "PhoneStore" /* 7258 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16489 */;
import MemoryExperiment from "MemoryExperiment" /* 16491 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8374);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16492, dependencyMap.paths);
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
          const tmp5Result = tmp5(8108);
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
  let obj2 = stateFromStores(15805);
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
  return <tmp9 profile={stateFromStores(11764).Profiles.App}>{null}</tmp9>;
};
