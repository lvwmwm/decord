// Module ID: 14714
// Function ID: 14715
// Name: App
// Dependencies: [19, 17, 14715, 502, 9918, 13990, 13999, 14024, 10999, 14306, 14716, 14717, 14718, 7917, 4456, 4782, 14719, 7216, 14720, 14721, 21, 14722, 1984, 558, 568, 14755, 5204, 14761, 14762, 14763, 14764, 8035, 14774, 8039, 14775, 14778, 11042, 14849, 9604, 9590, 8571, 14857, 14859, 14863, 14865, 14866, 14867, 14868, 4931, 14869, 1368, 5410, 13070, 504, 6864, 14871, 9, 13972, 13941, 14873, 12123, 14875, 16284, 2]

// Module 14714 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 568 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4931 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5204 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6864 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8035 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8039 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8571 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9590 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9604 */;
import GPlayManagerDefault from "GPlayManager" /* 11042 */;
import StartupProfiler from "StartupProfiler" /* 12123 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13941 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14755 */;
import BackPressManagerDefault from "BackPressManager" /* 14761 */;
import CallKitManagerDefault from "CallKitManager" /* 14762 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14763 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14764 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14774 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14775 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14778 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14849 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14857 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14859 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14863 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14865 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14866 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14867 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14868 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14869 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14871 */;
import _modDef14875 from "module_14875" /* 14875 */;
import MainNavigatorDefault from "MainNavigator" /* 16284 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14715 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5410);
const RouteManagerUtils = tmp29(13070);
require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9918);
const ConnectivityIndicatorStateStore = fn(13990);
const RequestReviewStore = fn(13999);
const LocalPushNotificationStore = fn(14024);
const PromotionsStore = fn(10999);
const BitRateStore = fn(14306);
const ShareStore = fn(14716);
const PermissionVADStore = fn(14717);
const InteractionModalStore = fn(14718);
const MobileAppDatabaseManager = fn(7917);
const SubscriptionStore = fn(4456);
const AccessibilityStore = fn(4782);
const AnalyticsLogStore = fn(14719);
const PhoneStore = fn(7216);
const ICYMISessionStore = fn(14720);
const MemoryExperiment = fn(14721);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1984)(14722, dependencyMap.paths);
}
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
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
      if (obj26.isIOS()) {
        IosImageTypesManagerDefault.initialize();
        const tmpResult = IosImageTypesManagerDefault;
      }
      obj26 = PlatformUtils;
      const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
      return () => {
        closure_1_1(14763).terminate();
        const obj = closure_1_1(14763);
        closure_1_1(5204).terminate();
        const obj2 = closure_1_1(5204);
        closure_1_1(11042).terminate();
        const obj3 = closure_1_1(11042);
        closure_1_1(14849).terminate();
        const obj4 = closure_1_1(14849);
        closure_1_0(13070).cleanupRouteManager();
        const obj5 = closure_1_0(13070);
        closure_1_1(14869).terminate();
        const obj6 = closure_1_1(14869);
        closure_1_1(14857).terminate();
        const obj7 = closure_1_1(14857);
        closure_1_1(8571).terminate();
        const obj8 = closure_1_1(8571);
        closure_1_1(14778).terminate();
        const obj9 = closure_1_1(14778);
        closure_1_1(14761).terminate();
        const obj10 = closure_1_1(14761);
        closure_1_1(14863).terminate();
        const obj11 = closure_1_1(14863);
        closure_1_1(14865).terminate();
        const obj12 = closure_1_1(14865);
        closure_1_1(14866).terminate();
        const obj13 = closure_1_1(14866);
        closure_1_1(14868).terminate();
        const obj14 = closure_1_1(14868);
        closure_1_1(4931).terminate();
        const obj15 = closure_1_1(4931);
        closure_1_1(14774).terminate();
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (() => {
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
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = PlatformUtils;
    const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14763).terminate();
      const obj = closure_1_1(14763);
      closure_1_1(5204).terminate();
      const obj2 = closure_1_1(5204);
      closure_1_1(11042).terminate();
      const obj3 = closure_1_1(11042);
      closure_1_1(14849).terminate();
      const obj4 = closure_1_1(14849);
      closure_1_0(13070).cleanupRouteManager();
      const obj5 = closure_1_0(13070);
      closure_1_1(14869).terminate();
      const obj6 = closure_1_1(14869);
      closure_1_1(14857).terminate();
      const obj7 = closure_1_1(14857);
      closure_1_1(8571).terminate();
      const obj8 = closure_1_1(8571);
      closure_1_1(14778).terminate();
      const obj9 = closure_1_1(14778);
      closure_1_1(14761).terminate();
      const obj10 = closure_1_1(14761);
      closure_1_1(14863).terminate();
      const obj11 = closure_1_1(14863);
      closure_1_1(14865).terminate();
      const obj12 = closure_1_1(14865);
      closure_1_1(14866).terminate();
      const obj13 = closure_1_1(14866);
      closure_1_1(14868).terminate();
      const obj14 = closure_1_1(14868);
      closure_1_1(4931).terminate();
      const obj15 = closure_1_1(4931);
      closure_1_1(14774).terminate();
    };
  }, []);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(568).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return AuthenticationStore.isAuthenticated();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function u() {
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
            closure_1_1(closure_1_2[55]).terminate();
          };
        }
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function z() {
      TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    let tmp12 = items2;
    let tmp11 = fn3;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const effect1 = noop.useEffect(tmp11, tmp12);
}) : (() => {
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
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
          closure_1_1(closure_1_2[55]).terminate();
        };
      }
    }
  }, items1);
  const effect1 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = isChannelMetadataObfuscationEnabled(568).c(3);
  const obj = isChannelMetadataObfuscationEnabled(568);
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13972).useIsChannelMetadataObfuscationEnabled("App");
  if (cResult[0] !== isChannelMetadataObfuscationEnabled) {
    const fn = function n() {
      const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
    };
    const items = [isChannelMetadataObfuscationEnabled];
    cResult[0] = isChannelMetadataObfuscationEnabled;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
}) : (() => {
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13972).useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = shouldUseAltGateway(568).c(3);
  const obj = shouldUseAltGateway(568);
  shouldUseAltGateway = shouldUseAltGateway(14873).useShouldUseAltGateway("App");
  if (cResult[0] !== shouldUseAltGateway) {
    const fn = function n() {
      NativeFastConnectModuleDefault.setUseAltGateway(shouldUseAltGateway);
    };
    const items = [shouldUseAltGateway];
    cResult[0] = shouldUseAltGateway;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
}) : (() => {
  shouldUseAltGateway = shouldUseAltGateway(14873).useShouldUseAltGateway("App");
  const items = [shouldUseAltGateway];
  const effect = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(shouldUseAltGateway);
  }, items);
});
const main = "main";
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_8();
  closure_9();
  closure_10();
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const renderAppEffect = TTITrackerDefault.renderAppEffect;
      return renderAppEffect.record();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = fn;
    tmp11 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const effect = noop.useEffect(tmp10, tmp11);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { profile: StartupProfiler.Profiles.App, children: null };
    const obj3 = { appEntryKey: main, children: null };
    const tmp4Result = tmp4(12123);
    obj3.children = jsx(tmp4(16284), {});
    obj2.children = jsx(tmp4(14875), { appEntryKey: main, children: null });
    const tmp18 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp18;
    let tmp13 = tmp18;
    const tmp4Result2 = tmp4(14875);
  } else {
    tmp13 = cResult[2];
  }
  return tmp13;
}) : (() => {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_8();
  closure_9();
  closure_10();
  closure_11();
  const effect = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  const obj = { profile: StartupProfiler.Profiles.App, children: null };
  const obj2 = { appEntryKey: main, children: null };
  obj2.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(_modDef14875, { appEntryKey: main, children: null });
  return <tmp7 profile={StartupProfiler.Profiles.App}>{null}</tmp7>;
});
