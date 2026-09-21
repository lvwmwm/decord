// Module ID: 14676
// Function ID: 14677
// Name: App
// Dependencies: [19, 17, 14677, 502, 9886, 13954, 13963, 13988, 10963, 14268, 14678, 14679, 14680, 7885, 4424, 4750, 14681, 7184, 14682, 14683, 21, 14684, 1984, 558, 568, 14717, 5172, 14723, 14724, 14725, 14726, 8003, 14736, 8007, 14737, 14740, 11006, 14811, 9572, 9558, 8539, 14819, 14821, 14825, 14827, 14828, 14829, 14830, 4899, 14831, 1368, 5378, 13034, 504, 6832, 14833, 9, 13936, 13905, 14835, 12087, 14837, 16274, 2]

// Module 14676 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 568 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4899 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5172 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6832 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8003 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8007 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8539 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9558 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9572 */;
import GPlayManagerDefault from "GPlayManager" /* 11006 */;
import StartupProfiler from "StartupProfiler" /* 12087 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13905 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14717 */;
import BackPressManagerDefault from "BackPressManager" /* 14723 */;
import CallKitManagerDefault from "CallKitManager" /* 14724 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14725 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14726 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14736 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14737 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14740 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14811 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14819 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14821 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14825 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14827 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14828 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14829 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14830 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14831 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14833 */;
import _modDef14837 from "module_14837" /* 14837 */;
import MainNavigatorDefault from "MainNavigator" /* 16274 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14677 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5378);
const RouteManagerUtils = tmp29(13034);
require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9886);
const ConnectivityIndicatorStateStore = fn(13954);
const RequestReviewStore = fn(13963);
const LocalPushNotificationStore = fn(13988);
const PromotionsStore = fn(10963);
const BitRateStore = fn(14268);
const ShareStore = fn(14678);
const PermissionVADStore = fn(14679);
const InteractionModalStore = fn(14680);
const MobileAppDatabaseManager = fn(7885);
const SubscriptionStore = fn(4424);
const AccessibilityStore = fn(4750);
const AnalyticsLogStore = fn(14681);
const PhoneStore = fn(7184);
const ICYMISessionStore = fn(14682);
const MemoryExperiment = fn(14683);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1984)(14684, dependencyMap.paths);
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
        closure_1_1(14725).terminate();
        const obj = closure_1_1(14725);
        closure_1_1(5172).terminate();
        const obj2 = closure_1_1(5172);
        closure_1_1(11006).terminate();
        const obj3 = closure_1_1(11006);
        closure_1_1(14811).terminate();
        const obj4 = closure_1_1(14811);
        closure_1_0(13034).cleanupRouteManager();
        const obj5 = closure_1_0(13034);
        closure_1_1(14831).terminate();
        const obj6 = closure_1_1(14831);
        closure_1_1(14819).terminate();
        const obj7 = closure_1_1(14819);
        closure_1_1(8539).terminate();
        const obj8 = closure_1_1(8539);
        closure_1_1(14740).terminate();
        const obj9 = closure_1_1(14740);
        closure_1_1(14723).terminate();
        const obj10 = closure_1_1(14723);
        closure_1_1(14825).terminate();
        const obj11 = closure_1_1(14825);
        closure_1_1(14827).terminate();
        const obj12 = closure_1_1(14827);
        closure_1_1(14828).terminate();
        const obj13 = closure_1_1(14828);
        closure_1_1(14830).terminate();
        const obj14 = closure_1_1(14830);
        closure_1_1(4899).terminate();
        const obj15 = closure_1_1(4899);
        closure_1_1(14736).terminate();
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
      closure_1_1(14725).terminate();
      const obj = closure_1_1(14725);
      closure_1_1(5172).terminate();
      const obj2 = closure_1_1(5172);
      closure_1_1(11006).terminate();
      const obj3 = closure_1_1(11006);
      closure_1_1(14811).terminate();
      const obj4 = closure_1_1(14811);
      closure_1_0(13034).cleanupRouteManager();
      const obj5 = closure_1_0(13034);
      closure_1_1(14831).terminate();
      const obj6 = closure_1_1(14831);
      closure_1_1(14819).terminate();
      const obj7 = closure_1_1(14819);
      closure_1_1(8539).terminate();
      const obj8 = closure_1_1(8539);
      closure_1_1(14740).terminate();
      const obj9 = closure_1_1(14740);
      closure_1_1(14723).terminate();
      const obj10 = closure_1_1(14723);
      closure_1_1(14825).terminate();
      const obj11 = closure_1_1(14825);
      closure_1_1(14827).terminate();
      const obj12 = closure_1_1(14827);
      closure_1_1(14828).terminate();
      const obj13 = closure_1_1(14828);
      closure_1_1(14830).terminate();
      const obj14 = closure_1_1(14830);
      closure_1_1(4899).terminate();
      const obj15 = closure_1_1(4899);
      closure_1_1(14736).terminate();
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13936).useIsChannelMetadataObfuscationEnabled("App");
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13936).useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = shouldUseAltGateway(568).c(3);
  const obj = shouldUseAltGateway(568);
  shouldUseAltGateway = shouldUseAltGateway(14835).useShouldUseAltGateway("App");
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
  shouldUseAltGateway = shouldUseAltGateway(14835).useShouldUseAltGateway("App");
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
    const tmp4Result = tmp4(12087);
    obj3.children = jsx(tmp4(16274), {});
    obj2.children = jsx(tmp4(14837), { appEntryKey: main, children: null });
    const tmp18 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp18;
    let tmp13 = tmp18;
    const tmp4Result2 = tmp4(14837);
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
  obj.children = jsx(_modDef14837, { appEntryKey: main, children: null });
  return <tmp7 profile={StartupProfiler.Profiles.App}>{null}</tmp7>;
});
