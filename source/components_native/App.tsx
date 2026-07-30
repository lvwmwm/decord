// Module ID: 13453
// Function ID: 13454
// Name: App
// Dependencies: [19, 17, 13454, 1218, 8831, 12734, 12743, 12760, 6259, 4259, 13455, 13456, 13457, 5928, 3841, 4181, 13458, 9188, 13459, 13460, 21, 13461, 1959, 13494, 4585, 13500, 13501, 13502, 13503, 6040, 13512, 6043, 13513, 13516, 6295, 13577, 10605, 10615, 8121, 13585, 13587, 13591, 13593, 13594, 13595, 13596, 4367, 13597, 500, 4753, 10864, 589, 5641, 13599, 9, 12723, 502, 13601, 10892, 13603, 14849, 2]
// Exports: default

// Module 13453 (App)
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
    callback(13494).init();
    let obj = callback(13494);
    const tmp = callback;
    callback(4585).initialize();
    let obj2 = callback(4585);
    callback(13500).initialize();
    let obj3 = callback(13500);
    callback(13501).initialize();
    let obj4 = callback(13501);
    callback(13502).initialize();
    let obj5 = callback(13502);
    callback(13503).initialize();
    let obj6 = callback(13503);
    callback(6040).initialize();
    let obj7 = callback(6040);
    callback(13512).initialize();
    let obj8 = callback(13512);
    callback(6043).init();
    let obj9 = callback(6043);
    callback(13513).init();
    let obj10 = callback(13513);
    callback(13516).init();
    let obj11 = callback(13516);
    callback(6295).initialize();
    let obj12 = callback(6295);
    callback(13577).initialize();
    let obj13 = callback(13577);
    callback(10605).initialize();
    let obj14 = callback(10605);
    callback(10615).initialize();
    let obj15 = callback(10615);
    callback(8121).initialize();
    const obj16 = callback(8121);
    callback(13585).initialize();
    const obj17 = callback(13585);
    callback(13587).initialize();
    const obj18 = callback(13587);
    callback(13591).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13591);
    callback(13593).initialize();
    const obj20 = callback(13593);
    callback(13594).initialize();
    const obj21 = callback(13594);
    callback(13595).initialize();
    const obj22 = callback(13595);
    callback(13596).initialize();
    const obj23 = callback(13596);
    callback(4367).initialize();
    const obj24 = callback(4367);
    callback(13597).initialize();
    const obj25 = callback(13597);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4753).initialize();
      const tmpResult = tmp(4753);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10864).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13502).terminate();
      const obj = callback2(13502);
      callback2(4585).terminate();
      const obj2 = callback2(4585);
      callback2(6295).terminate();
      const obj3 = callback2(6295);
      callback2(13577).terminate();
      const obj4 = callback2(13577);
      callback(10864).cleanupRouteManager();
      const obj5 = callback(10864);
      callback2(13597).terminate();
      const obj6 = callback2(13597);
      callback2(13585).terminate();
      const obj7 = callback2(13585);
      callback2(8121).terminate();
      const obj8 = callback2(8121);
      callback2(13516).terminate();
      const obj9 = callback2(13516);
      callback2(13500).terminate();
      const obj10 = callback2(13500);
      callback2(13591).terminate();
      const obj11 = callback2(13591);
      callback2(13593).terminate();
      const obj12 = callback2(13593);
      callback2(13594).terminate();
      const obj13 = callback2(13594);
      callback2(13596).terminate();
      const obj14 = callback2(13596);
      callback2(4367).terminate();
      const obj15 = callback2(4367);
      callback2(13512).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12723).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12723);
  shouldUseAltGateway = shouldUseAltGateway(13601).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13601);
  obj[0] = shouldUseAltGateway(10892).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(10892);
  obj[1] = jsx(importDefault(14849), {});
  obj[1] = jsx(importDefault(13603), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
