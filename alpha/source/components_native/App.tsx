// Module ID: 16469
// Function ID: 16470
// Name: App
// Dependencies: [19, 16470, 502, 9367, 15820, 15830, 16471, 15849, 9776, 16130, 16472, 16473, 16474, 7926, 2181, 5142, 16475, 7255, 16476, 16478, 21, 16479, 2123, 16512, 6155, 16518, 16522, 16523, 10389, 16532, 15446, 16534, 16537, 10756, 16630, 16638, 16641, 8978, 16644, 16646, 16650, 16652, 16653, 16654, 16656, 8039, 16657, 1377, 8369, 12256, 504, 6875, 16659, 8103, 9, 15792, 16269, 11756, 16661, 18237, 2]
// Exports: default

// Module 16469 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6155 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6875 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8039 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8978 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10389 */;
import GPlayManagerDefault from "GPlayManager" /* 10756 */;
import StartupProfilerDefault from "StartupProfiler" /* 11756 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15446 */;
import react_nativeDefault from "react-native" /* 16269 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16512 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16518 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16522 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16523 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16532 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16534 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16537 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16630 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16638 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16641 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16644 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16646 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16650 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16652 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16653 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16654 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16656 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16657 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16659 */;
import AppContainerDefault from "AppContainer" /* 16661 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16470 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9367 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15820 */;
import RequestReviewStore from "RequestReviewStore" /* 15830 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16471 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 15849 */;
import PromotionsStore from "PromotionsStore" /* 9776 */;
import BitRateStore from "BitRateStore" /* 16130 */;
import ShareStore from "ShareStore" /* 16472 */;
import PermissionVADStore from "PermissionVADStore" /* 16473 */;
import InteractionModalStore from "InteractionModalStore" /* 16474 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7926 */;
import SubscriptionStore from "SubscriptionStore" /* 2181 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 16475 */;
import PhoneStore from "PhoneStore" /* 7255 */;
import ICYMISessionStore from "ICYMISessionStore" /* 16476 */;
import MemoryExperiment from "MemoryExperiment" /* 16478 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8369);
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(16479, dependencyMap.paths);
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
          const tmp5Result = tmp5(8103);
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
  let obj2 = stateFromStores(15792);
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
  return <tmp9 profile={stateFromStores(11756).Profiles.App}>{null}</tmp9>;
};
