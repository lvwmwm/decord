// Module ID: 15547
// Function ID: 15548
// Name: App
// Dependencies: [19, 15548, 502, 9544, 14880, 14890, 15549, 14909, 9023, 15209, 15550, 15551, 15552, 8227, 2179, 4793, 15553, 7251, 15554, 15556, 21, 15557, 5801, 15563, 15567, 15568, 8333, 15577, 8336, 15579, 15582, 9089, 15682, 15690, 15693, 8102, 15696, 15698, 15702, 15704, 15705, 15706, 15708, 6333, 15709, 1380, 8364, 13646, 504, 6304, 15711, 13191, 9, 14844, 15347, 11916, 15713, 17491, 2]
// Exports: default

// Module 15547 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5801 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6304 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6333 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8102 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8333 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8336 */;
import GPlayManagerDefault from "GPlayManager" /* 9089 */;
import StartupProfilerDefault from "StartupProfiler" /* 11916 */;
import react_nativeDefault from "react-native" /* 15347 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15557 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15563 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15567 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15568 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15577 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15579 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15582 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15682 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15690 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15693 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15696 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15698 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15702 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15704 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15705 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15706 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15708 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15709 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15711 */;
import AppContainerDefault from "AppContainer" /* 15713 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15548 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9544 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 14880 */;
import RequestReviewStore from "RequestReviewStore" /* 14890 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15549 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 14909 */;
import PromotionsStore from "PromotionsStore" /* 9023 */;
import BitRateStore from "BitRateStore" /* 15209 */;
import ShareStore from "ShareStore" /* 15550 */;
import PermissionVADStore from "PermissionVADStore" /* 15551 */;
import InteractionModalStore from "InteractionModalStore" /* 15552 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 8227 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 15553 */;
import PhoneStore from "PhoneStore" /* 7251 */;
import ICYMISessionStore from "ICYMISessionStore" /* 15554 */;
import MemoryExperiment from "MemoryExperiment" /* 15556 */;
import size from "module_2" /* 2 */;

let tmp;
const IosImageTypesManagerDefault = tmp(8364);
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
          const tmp9Result = tmp9(13191);
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
  let obj2 = stateFromStores(14844);
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
  let tmp9 = StartupProfilerDefault;
  let obj4 = { appEntryKey: "main", children: null };
  AppContainerDefault;
  return <tmp9 profile={stateFromStores(11916).Profiles.App}>{null}</tmp9>;
};
