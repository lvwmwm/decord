// Module ID: 13884
// Function ID: 13885
// Name: App
// Dependencies: [19, 17, 13885, 502, 9101, 13230, 13239, 13886, 13260, 10128, 13541, 13887, 13888, 13889, 7057, 4494, 4825, 13890, 6362, 13891, 13892, 21, 13893, 1981, 13926, 5265, 14001, 14002, 14003, 14004, 7175, 14014, 7179, 14015, 14018, 10172, 14089, 8765, 8751, 7711, 14097, 14099, 14103, 14105, 14106, 14107, 14108, 4977, 14109, 1364, 5472, 12298, 504, 6010, 14111, 9, 13212, 13181, 14113, 11027, 14115, 15564, 2]
// Exports: default

// Module 13884 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4977 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5265 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7175 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7179 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7711 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import GPlayManagerDefault from "GPlayManager" /* 10172 */;
import StartupProfilerDefault from "StartupProfiler" /* 11027 */;
import react_nativeDefault from "react-native" /* 13181 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 13926 */;
import BackPressManagerDefault from "BackPressManager" /* 14001 */;
import CallKitManagerDefault from "CallKitManager" /* 14002 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14003 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14004 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14014 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14015 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14018 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14089 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14097 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14099 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14103 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14105 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14106 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14107 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14108 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14109 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14111 */;
import AppContainerDefault from "AppContainer" /* 14115 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 13885 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9101 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13230 */;
import RequestReviewStore from "RequestReviewStore" /* 13239 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 13886 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 13260 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import BitRateStore from "BitRateStore" /* 13541 */;
import ShareStore from "ShareStore" /* 13887 */;
import PermissionVADStore from "PermissionVADStore" /* 13888 */;
import InteractionModalStore from "InteractionModalStore" /* 13889 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7057 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 13890 */;
import PhoneStore from "PhoneStore" /* 6362 */;
import ICYMISessionStore from "ICYMISessionStore" /* 13891 */;
import MemoryExperiment from "MemoryExperiment" /* 13892 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(5472);
const NativeModules = react_native.NativeModules;
const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(13893, dependencyMap.paths);
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
    let obj3 = BackPressManagerDefault;
    obj3.initialize();
    let obj4 = CallKitManagerDefault;
    obj4.initialize();
    let obj5 = AccessibilityCallManagerDefault;
    obj5.initialize();
    let obj6 = NotificationTokenManagerDefault;
    obj6.initialize();
    let obj7 = ForegroundServiceManagerDefault;
    obj7.initialize();
    let obj8 = VoiceNotificationManagerDefault;
    obj8.initialize();
    let obj9 = SentMessageIntentsHandlerDefault;
    obj9.init();
    let obj10 = UserSettingsProtoManagerDefault;
    obj10.init();
    let obj11 = NativeRPCServerManagerDefault;
    obj11.init();
    let obj12 = GPlayManagerDefault;
    obj12.initialize();
    let obj13 = MobileVoiceOverlayLifecycleManagerDefault;
    obj13.initialize();
    let obj14 = EmbeddedActivitiesNativeManagerDefault;
    obj14.initialize();
    let obj15 = FramesNativeManagerDefault;
    obj15.initialize();
    let obj16 = MediaPlayerMuteManagerDefault;
    obj16.initialize();
    const obj17 = MediaPlayerManagerDefault;
    obj17.initialize();
    const obj18 = SoundboardManagerDefault;
    obj18.initialize();
    const obj19 = VoiceMessagesPlaybackManagerDefault;
    obj19.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    const obj20 = ICYMIManagerDefault;
    obj20.initialize();
    const obj21 = GameRelationshipManagerDefault;
    obj21.initialize();
    const obj22 = CollectiblesMarketingManagerDefault;
    obj22.initialize();
    const obj23 = SessionAdManagerDefault;
    obj23.initialize();
    const obj24 = VoiceEngineStreamingManagerDefault;
    obj24.initialize();
    const obj25 = TouchEventAnalyticsManagerDefault;
    obj25.initialize();
    const obj26 = stateFromStores(dependencyMap[49]);
    const tmp29 = stateFromStores;
    if (obj26.isIOS()) {
      const tmpResult = IosImageTypesManagerDefault;
      tmpResult.initialize();
    }
    const tmp29Result = tmp29(dependencyMap[51]);
    const result = tmp29Result.initializeRouteManagerIfNeeded();
    return () => {
      const obj = closure_1_1(closure_1_2[28]);
      obj.terminate();
      const obj2 = closure_1_1(closure_1_2[25]);
      obj2.terminate();
      const obj3 = closure_1_1(closure_1_2[35]);
      obj3.terminate();
      const obj4 = closure_1_1(closure_1_2[36]);
      obj4.terminate();
      const obj5 = stateFromStores(closure_1_2[51]);
      obj5.cleanupRouteManager();
      const obj6 = closure_1_1(closure_1_2[48]);
      obj6.terminate();
      const obj7 = closure_1_1(closure_1_2[40]);
      obj7.terminate();
      const obj8 = closure_1_1(closure_1_2[39]);
      obj8.terminate();
      const obj9 = closure_1_1(closure_1_2[34]);
      obj9.terminate();
      const obj10 = closure_1_1(closure_1_2[26]);
      obj10.terminate();
      const obj11 = closure_1_1(closure_1_2[42]);
      obj11.terminate();
      const obj12 = closure_1_1(closure_1_2[43]);
      obj12.terminate();
      const obj13 = closure_1_1(closure_1_2[44]);
      obj13.terminate();
      const obj14 = closure_1_1(closure_1_2[46]);
      obj14.terminate();
      const obj15 = closure_1_1(closure_1_2[47]);
      obj15.terminate();
      const obj16 = closure_1_1(closure_1_2[31]);
      obj16.terminate();
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
        if (obj3.isAndroid()) {
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          const obj = closure_1_1(closure_1_2[54]);
          obj.terminate();
        };
      }
    }
  }, items1);
  const effect2 = react.useEffect(() => {
    const tmp = TTITrackerDefault;
    tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj2 = stateFromStores(13212);
  const isChannelMetadataObfuscationEnabled = obj2.useIsChannelMetadataObfuscationEnabled("App");
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = react.useEffect(() => {
    const obj = react_nativeDefault;
    const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items2);
  let obj3 = stateFromStores(14113);
  const shouldUseAltGateway = obj3.useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = react.useEffect(() => {
    const obj = react_nativeDefault;
    obj.setUseAltGateway(shouldUseAltGateway);
  }, items3);
  const effect5 = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  let obj5 = { appEntryKey: "main", children: null };
  AppContainerDefault;
  return <tmp11 profile={stateFromStores(11027).Profiles.App}>{null}</tmp11>;
};
