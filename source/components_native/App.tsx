// Module ID: 13458
// Function ID: 13459
// Name: App
// Dependencies: [19, 17, 13459, 1218, 8835, 12740, 12749, 12766, 6262, 4259, 13460, 13461, 13462, 5930, 3841, 4181, 13463, 9192, 13464, 13465, 21, 13466, 1959, 13499, 4585, 13505, 13506, 13507, 13508, 6042, 13517, 6045, 13518, 13521, 6298, 13582, 10609, 10619, 8124, 13590, 13592, 13596, 13598, 13599, 13600, 13601, 4367, 13602, 500, 4753, 10868, 589, 5641, 13604, 9, 12729, 502, 13606, 10896, 13608, 14855, 2]
// Exports: default

// Module 13458 (App)
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
    callback(13499).init();
    let obj = callback(13499);
    const tmp = callback;
    callback(4585).initialize();
    let obj2 = callback(4585);
    callback(13505).initialize();
    let obj3 = callback(13505);
    callback(13506).initialize();
    let obj4 = callback(13506);
    callback(13507).initialize();
    let obj5 = callback(13507);
    callback(13508).initialize();
    let obj6 = callback(13508);
    callback(6042).initialize();
    let obj7 = callback(6042);
    callback(13517).initialize();
    let obj8 = callback(13517);
    callback(6045).init();
    let obj9 = callback(6045);
    callback(13518).init();
    let obj10 = callback(13518);
    callback(13521).init();
    let obj11 = callback(13521);
    callback(6298).initialize();
    let obj12 = callback(6298);
    callback(13582).initialize();
    let obj13 = callback(13582);
    callback(10609).initialize();
    let obj14 = callback(10609);
    callback(10619).initialize();
    let obj15 = callback(10619);
    callback(8124).initialize();
    const obj16 = callback(8124);
    callback(13590).initialize();
    const obj17 = callback(13590);
    callback(13592).initialize();
    const obj18 = callback(13592);
    callback(13596).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13596);
    callback(13598).initialize();
    const obj20 = callback(13598);
    callback(13599).initialize();
    const obj21 = callback(13599);
    callback(13600).initialize();
    const obj22 = callback(13600);
    callback(13601).initialize();
    const obj23 = callback(13601);
    callback(4367).initialize();
    const obj24 = callback(4367);
    callback(13602).initialize();
    const obj25 = callback(13602);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4753).initialize();
      const tmpResult = tmp(4753);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10868).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13507).terminate();
      const obj = callback2(13507);
      callback2(4585).terminate();
      const obj2 = callback2(4585);
      callback2(6298).terminate();
      const obj3 = callback2(6298);
      callback2(13582).terminate();
      const obj4 = callback2(13582);
      callback(10868).cleanupRouteManager();
      const obj5 = callback(10868);
      callback2(13602).terminate();
      const obj6 = callback2(13602);
      callback2(13590).terminate();
      const obj7 = callback2(13590);
      callback2(8124).terminate();
      const obj8 = callback2(8124);
      callback2(13521).terminate();
      const obj9 = callback2(13521);
      callback2(13505).terminate();
      const obj10 = callback2(13505);
      callback2(13596).terminate();
      const obj11 = callback2(13596);
      callback2(13598).terminate();
      const obj12 = callback2(13598);
      callback2(13599).terminate();
      const obj13 = callback2(13599);
      callback2(13601).terminate();
      const obj14 = callback2(13601);
      callback2(4367).terminate();
      const obj15 = callback2(4367);
      callback2(13517).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12729).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12729);
  shouldUseAltGateway = shouldUseAltGateway(13606).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13606);
  obj[0] = shouldUseAltGateway(10896).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(10896);
  obj[1] = jsx(importDefault(14855), {});
  obj[1] = jsx(importDefault(13608), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
