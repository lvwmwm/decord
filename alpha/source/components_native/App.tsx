// Module ID: 16179
// Function ID: 16180
// Name: App
// Dependencies: [19, 16180, 502, 9203, 15534, 15544, 16181, 15563, 9606, 15839, 16182, 16183, 16184, 7779, 2053, 5010, 16185, 7103, 16186, 16188, 21, 16189, 1995, 16222, 6015, 16228, 16229, 16230, 10191, 16239, 15174, 16241, 16244, 10558, 16329, 16337, 16340, 8829, 16343, 16345, 16349, 16351, 16352, 16353, 16355, 7891, 16356, 1376, 8221, 12020, 504, 6734, 16358, 7955, 9, 15519, 15979, 11528, 16360, 17927, 2]
// Exports: default

// Module 16179 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6015 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7891 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8829 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10191 */;
import GPlayManagerDefault from "GPlayManager" /* 10558 */;
import StartupProfilerDefault from "StartupProfiler" /* 11528 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15174 */;
import react_nativeDefault from "react-native" /* 15979 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16222 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16228 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16229 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16230 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16239 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16241 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16244 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16329 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16337 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16340 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16343 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16345 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16349 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16351 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16352 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16353 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16355 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16356 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16358 */;
import AppContainerDefault from "AppContainer" /* 16360 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16180 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9203 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15534 */;
import RequestReviewStore from "RequestReviewStore" /* 15544 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16181 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15563 */;
import PromotionsStore from "PromotionsStore" /* 9606 */;
import BitRateStore from "BitRateStore" /* 15839 */;
import ShareStore from "ShareStore" /* 16182 */;
import PermissionVADStore from "PermissionVADStore" /* 16183 */;
import InteractionModalStore from "InteractionModalStore" /* 16184 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7779 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16185 */;
import PhoneStore from "PhoneStore" /* 7103 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16186 */;
import MemoryExperiment from "MemoryExperiment" /* 16188 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8221);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16189, dependencyMap.paths);
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
          const tmp5Result = tmp5(7955);
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
  let obj2 = stateFromStores(15519);
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
  return <tmp9 profile={stateFromStores(11528).Profiles.App}>{null}</tmp9>;
};
