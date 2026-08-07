// Module ID: 13596
// Function ID: 13597
// Name: App
// Dependencies: [19, 17, 13597, 1218, 9092, 12879, 12888, 12905, 7284, 4371, 13598, 13599, 13600, 7045, 3953, 4294, 13601, 8411, 13602, 13603, 21, 13604, 1988, 13637, 4697, 13643, 13644, 13645, 13646, 7156, 13655, 7159, 13656, 13659, 7317, 13720, 10534, 10911, 8792, 13728, 13730, 13734, 13736, 13737, 13738, 13739, 4479, 13740, 500, 4880, 10894, 589, 5767, 13742, 9, 12868, 502, 13744, 10936, 13746, 15006, 2]
// Exports: default

// Module 13596 (App)
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
    callback(13637).init();
    let obj = callback(13637);
    const tmp = callback;
    callback(4697).initialize();
    let obj2 = callback(4697);
    callback(13643).initialize();
    let obj3 = callback(13643);
    callback(13644).initialize();
    let obj4 = callback(13644);
    callback(13645).initialize();
    let obj5 = callback(13645);
    callback(13646).initialize();
    let obj6 = callback(13646);
    callback(7156).initialize();
    let obj7 = callback(7156);
    callback(13655).initialize();
    let obj8 = callback(13655);
    callback(7159).init();
    let obj9 = callback(7159);
    callback(13656).init();
    let obj10 = callback(13656);
    callback(13659).init();
    let obj11 = callback(13659);
    callback(7317).initialize();
    let obj12 = callback(7317);
    callback(13720).initialize();
    let obj13 = callback(13720);
    callback(10534).initialize();
    let obj14 = callback(10534);
    callback(10911).initialize();
    let obj15 = callback(10911);
    callback(8792).initialize();
    const obj16 = callback(8792);
    callback(13728).initialize();
    const obj17 = callback(13728);
    callback(13730).initialize();
    const obj18 = callback(13730);
    callback(13734).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13734);
    callback(13736).initialize();
    const obj20 = callback(13736);
    callback(13737).initialize();
    const obj21 = callback(13737);
    callback(13738).initialize();
    const obj22 = callback(13738);
    callback(13739).initialize();
    const obj23 = callback(13739);
    callback(4479).initialize();
    const obj24 = callback(4479);
    callback(13740).initialize();
    const obj25 = callback(13740);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4880).initialize();
      const tmpResult = tmp(4880);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10894).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13645).terminate();
      const obj = callback2(13645);
      callback2(4697).terminate();
      const obj2 = callback2(4697);
      callback2(7317).terminate();
      const obj3 = callback2(7317);
      callback2(13720).terminate();
      const obj4 = callback2(13720);
      callback(10894).cleanupRouteManager();
      const obj5 = callback(10894);
      callback2(13740).terminate();
      const obj6 = callback2(13740);
      callback2(13728).terminate();
      const obj7 = callback2(13728);
      callback2(8792).terminate();
      const obj8 = callback2(8792);
      callback2(13659).terminate();
      const obj9 = callback2(13659);
      callback2(13643).terminate();
      const obj10 = callback2(13643);
      callback2(13734).terminate();
      const obj11 = callback2(13734);
      callback2(13736).terminate();
      const obj12 = callback2(13736);
      callback2(13737).terminate();
      const obj13 = callback2(13737);
      callback2(13739).terminate();
      const obj14 = callback2(13739);
      callback2(4479).terminate();
      const obj15 = callback2(4479);
      callback2(13655).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12868).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12868);
  shouldUseAltGateway = shouldUseAltGateway(13744).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13744);
  obj[0] = shouldUseAltGateway(10936).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(10936);
  obj[1] = jsx(importDefault(15006), {});
  obj[1] = jsx(importDefault(13746), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
