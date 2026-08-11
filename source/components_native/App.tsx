// Module ID: 13676
// Function ID: 13677
// Name: App
// Dependencies: [19, 17, 13677, 1218, 9158, 12955, 12964, 12981, 7345, 4373, 13678, 13679, 13680, 7106, 3972, 4295, 13681, 8477, 13682, 13683, 21, 13684, 2007, 13717, 4699, 13723, 13724, 13725, 13726, 7217, 13735, 7220, 13736, 13739, 7379, 13800, 10606, 10983, 8858, 13808, 13810, 13814, 13816, 13817, 13818, 13819, 4481, 13820, 500, 4882, 10966, 589, 5827, 13822, 9, 12944, 502, 13824, 11008, 13826, 15087, 2]
// Exports: default

// Module 13676 (App)
import closure_3 from "ApexExperiment";
import { NativeModules } from "handleSetLocationMetadata";
import checkForNewerBuild from "checkForNewerBuild";
import fetchFingerprint from "fetchFingerprint";
import nativeEventEmitter from "nativeEventEmitter";
import updateState from "updateState";
import showReviewRequestModal from "showReviewRequestModal";
import set from "set";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import bitrate from "bitrate";
import handleTokenUpdated from "handleTokenUpdated";
import handleUpdateVADPermission from "handleUpdateVADPermission";
import getModalState from "getModalState";
import appDatabaseManager from "appDatabaseManager";
import reset from "reset";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import initialize from "initialize";
import handleSetLocationMetadata from "handleSetLocationMetadata";
import "map";
import ApexExperiment from "ApexExperiment";
import { jsx } from "reactNativeCorePlugins";
import set from "checkForNewerBuild";

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = importDefault(9).renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(13717).init();
    let obj = callback(13717);
    const tmp = callback;
    callback(4699).initialize();
    let obj2 = callback(4699);
    callback(13723).initialize();
    let obj3 = callback(13723);
    callback(13724).initialize();
    let obj4 = callback(13724);
    callback(13725).initialize();
    let obj5 = callback(13725);
    callback(13726).initialize();
    let obj6 = callback(13726);
    callback(7217).initialize();
    let obj7 = callback(7217);
    callback(13735).initialize();
    let obj8 = callback(13735);
    callback(7220).init();
    let obj9 = callback(7220);
    callback(13736).init();
    let obj10 = callback(13736);
    callback(13739).init();
    let obj11 = callback(13739);
    callback(7379).initialize();
    let obj12 = callback(7379);
    callback(13800).initialize();
    let obj13 = callback(13800);
    callback(10606).initialize();
    let obj14 = callback(10606);
    callback(10983).initialize();
    let obj15 = callback(10983);
    callback(8858).initialize();
    const obj16 = callback(8858);
    callback(13808).initialize();
    const obj17 = callback(13808);
    callback(13810).initialize();
    const obj18 = callback(13810);
    callback(13814).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13814);
    callback(13816).initialize();
    const obj20 = callback(13816);
    callback(13817).initialize();
    const obj21 = callback(13817);
    callback(13818).initialize();
    const obj22 = callback(13818);
    callback(13819).initialize();
    const obj23 = callback(13819);
    callback(4481).initialize();
    const obj24 = callback(4481);
    callback(13820).initialize();
    const obj25 = callback(13820);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4882).initialize();
      const tmpResult = tmp(4882);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10966).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13725).terminate();
      const obj = callback2(13725);
      callback2(4699).terminate();
      const obj2 = callback2(4699);
      callback2(7379).terminate();
      const obj3 = callback2(7379);
      callback2(13800).terminate();
      const obj4 = callback2(13800);
      callback(10966).cleanupRouteManager();
      const obj5 = callback(10966);
      callback2(13820).terminate();
      const obj6 = callback2(13820);
      callback2(13808).terminate();
      const obj7 = callback2(13808);
      callback2(8858).terminate();
      const obj8 = callback2(8858);
      callback2(13739).terminate();
      const obj9 = callback2(13739);
      callback2(13723).terminate();
      const obj10 = callback2(13723);
      callback2(13814).terminate();
      const obj11 = callback2(13814);
      callback2(13816).terminate();
      const obj12 = callback2(13816);
      callback2(13817).terminate();
      const obj13 = callback2(13817);
      callback2(13819).terminate();
      const obj14 = callback2(13819);
      callback2(4481).terminate();
      const obj15 = callback2(4481);
      callback2(13735).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(589);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => fetchFingerprint.isAuthenticated());
  shouldUseAltGateway = stateFromStores;
  const items1 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (shouldUseAltGateway) {
      const token = outer1_6.getToken();
      if (null == token) {
        const _Error = Error;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        outer1_1(outer1_2[52]).startSession(token);
        const obj = outer1_1(outer1_2[52]);
        outer1_1(outer1_2[53]).initialize();
        const obj2 = outer1_1(outer1_2[53]);
        if (obj3.isAndroid()) {
          const NativePermissionManager = outer1_4.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          callback(table[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = React.useEffect(() => {
    callback(9).wasAuthenticated = fetchFingerprint.isAuthenticated();
  }, []);
  shouldUseAltGateway = undefined;
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12944).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    if (obj.isAndroid()) {
      const result = outer1_1(outer1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
      const obj2 = outer1_1(outer1_2[56]);
    } else {
      const DCDFastConnectManager = outer1_4.DCDFastConnectManager;
      const result1 = DCDFastConnectManager.setUseChannelObfuscation(shouldUseAltGateway);
    }
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(12944);
  shouldUseAltGateway = shouldUseAltGateway(13824).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    if (obj.isAndroid()) {
      outer1_1(outer1_2[56]).setUseAltGateway(shouldUseAltGateway);
      const obj2 = outer1_1(outer1_2[56]);
    } else {
      const DCDFastConnectManager = outer1_4.DCDFastConnectManager;
      DCDFastConnectManager.setUseAltGateway(shouldUseAltGateway);
    }
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(13824);
  obj[0] = shouldUseAltGateway(11008).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(11008);
  obj[1] = jsx(importDefault(15087), {});
  obj[1] = jsx(importDefault(13826), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
