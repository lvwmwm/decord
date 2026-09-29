// Module ID: 14704
// Function ID: 14705
// Name: App
// Dependencies: [19, 17, 14705, 502, 9940, 13980, 13989, 14014, 10961, 14296, 14706, 14707, 14708, 7912, 4452, 4780, 14709, 7218, 14710, 14711, 21, 14712, 1980, 14745, 5202, 14751, 14752, 14753, 14754, 8030, 14764, 8034, 14765, 14768, 11004, 14839, 9608, 9594, 8566, 14847, 14849, 14853, 14855, 14856, 14857, 14858, 4929, 14859, 1364, 5408, 13064, 504, 6866, 14861, 9, 13962, 13931, 14863, 11813, 14865, 16274, 2]
// Exports: default

// Module 14704 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4929 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5202 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6866 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8030 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8034 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8566 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9594 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9608 */;
import GPlayManagerDefault from "GPlayManager" /* 11004 */;
import StartupProfilerDefault from "StartupProfiler" /* 11813 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13931 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14745 */;
import BackPressManagerDefault from "BackPressManager" /* 14751 */;
import CallKitManagerDefault from "CallKitManager" /* 14752 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14753 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14754 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14764 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14765 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14768 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14839 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14847 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14849 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14853 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14855 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14856 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14857 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14858 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14859 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14861 */;
import AppContainerDefault from "AppContainer" /* 14865 */;
import MainNavigatorDefault from "MainNavigator" /* 16274 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14705 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5408);
const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9940);
const ConnectivityIndicatorStateStore = fn(13980);
const RequestReviewStore = fn(13989);
const LocalPushNotificationStore = fn(14014);
const PromotionsStore = fn(10961);
const BitRateStore = fn(14296);
const ShareStore = fn(14706);
const PermissionVADStore = fn(14707);
const InteractionModalStore = fn(14708);
const MobileAppDatabaseManager = fn(7912);
const SubscriptionStore = fn(4452);
const AccessibilityStore = fn(4780);
const AnalyticsLogStore = fn(14709);
const PhoneStore = fn(7218);
const ICYMISessionStore = fn(14710);
const MemoryExperiment = fn(14711);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14712, dependencyMap.paths);
}
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
    BackPressManagerDefault.initialize();
    CallKitManagerDefault.initialize();
    AccessibilityCallManagerDefault.initialize();
    NotificationTokenManagerDefault.initialize();
    ForegroundServiceManagerDefault.initialize();
    VoiceNotificationManagerDefault.initialize();
    SentMessageIntentsHandlerDefault.init();
    UserSettingsProtoManagerDefault.init();
    NativeRPCServerManagerDefault.init();
    GPlayManagerDefault.initialize();
    MobileVoiceOverlayLifecycleManagerDefault.initialize();
    EmbeddedActivitiesNativeManagerDefault.initialize();
    FramesNativeManagerDefault.initialize();
    MediaPlayerMuteManagerDefault.initialize();
    MediaPlayerManagerDefault.initialize();
    SoundboardManagerDefault.initialize();
    VoiceMessagesPlaybackManagerDefault.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    ICYMIManagerDefault.initialize();
    GameRelationshipManagerDefault.initialize();
    CollectiblesMarketingManagerDefault.initialize();
    SessionAdManagerDefault.initialize();
    VoiceEngineStreamingManagerDefault.initialize();
    TouchEventAnalyticsManagerDefault.initialize();
    const tmp29 = stateFromStores;
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = stateFromStores(1364);
    const result = tmp29(13064).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14753).terminate();
      const obj = closure_1_1(14753);
      closure_1_1(5202).terminate();
      const obj2 = closure_1_1(5202);
      closure_1_1(11004).terminate();
      const obj3 = closure_1_1(11004);
      closure_1_1(14839).terminate();
      const obj4 = closure_1_1(14839);
      stateFromStores(13064).cleanupRouteManager();
      const obj5 = stateFromStores(13064);
      closure_1_1(14859).terminate();
      const obj6 = closure_1_1(14859);
      closure_1_1(14847).terminate();
      const obj7 = closure_1_1(14847);
      closure_1_1(8566).terminate();
      const obj8 = closure_1_1(8566);
      closure_1_1(14768).terminate();
      const obj9 = closure_1_1(14768);
      closure_1_1(14751).terminate();
      const obj10 = closure_1_1(14751);
      closure_1_1(14853).terminate();
      const obj11 = closure_1_1(14853);
      closure_1_1(14855).terminate();
      const obj12 = closure_1_1(14855);
      closure_1_1(14856).terminate();
      const obj13 = closure_1_1(14856);
      closure_1_1(14858).terminate();
      const obj14 = closure_1_1(14858);
      closure_1_1(4929).terminate();
      const obj15 = closure_1_1(4929);
      closure_1_1(14764).terminate();
    };
  }, []);
  let stateFromStores;
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores) {
      const token = AuthenticationStore.getToken();
      if (null == token) {
        const _Error = Error;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        AuthenticationActionCreatorsDefault.startSession(token);
        LocalMessageCacheManagerDefault.initialize();
        if (obj3.isAndroid()) {
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          closure_1_1(dependencyMap[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13962).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13962);
  const shouldUseAltGateway = stateFromStores(14863).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj4 = { profile: null, children: null };
  let obj3 = stateFromStores(14863);
  obj4.profile = stateFromStores(11813).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};
