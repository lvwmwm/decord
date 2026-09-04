// Module ID: 14319
// Function ID: 14320
// Name: App
// Dependencies: [19, 17, 14320, 1215, 9016, 13610, 13619, 13639, 10594, 4555, 14321, 14322, 14323, 7577, 4145, 4473, 14324, 6883, 14325, 14326, 21, 14327, 2008, 14360, 4922, 14366, 14367, 14368, 14369, 7689, 14378, 7692, 14379, 14382, 10637, 14453, 9444, 9497, 8201, 14461, 14463, 14467, 14469, 14470, 14471, 14472, 4668, 14473, 1234, 5121, 12714, 586, 6534, 14475, 9, 13595, 13564, 14477, 11465, 14479, 15864, 2]
// Exports: default

// Module 14319 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11465 */;
import GestureWrapperDefault from "GestureWrapper" /* 14479 */;
import getAuthComponentDefault from "getAuthComponent" /* 15864 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 14320 */;
import closure_6 from "fetchFingerprint" /* 1215 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9016 */;
import updateState from "updateState" /* 13610 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13619 */;
import set from "set" /* 13639 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 10594 */;
import bitrate from "bitrate" /* 4555 */;
import handleTokenUpdated from "handleTokenUpdated" /* 14321 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 14322 */;
import getModalState from "getModalState" /* 14323 */;
import appDatabaseManager from "appDatabaseManager" /* 7577 */;
import reset from "reset" /* 4145 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import initialize from "initialize" /* 14324 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 6883 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 14326 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = serializeDefault.renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(14360).init();
    let obj = callback(14360);
    const tmp = callback;
    callback(4922).initialize();
    let obj2 = callback(4922);
    callback(14366).initialize();
    let obj3 = callback(14366);
    callback(14367).initialize();
    let obj4 = callback(14367);
    callback(14368).initialize();
    let obj5 = callback(14368);
    callback(14369).initialize();
    let obj6 = callback(14369);
    callback(7689).initialize();
    let obj7 = callback(7689);
    callback(14378).initialize();
    let obj8 = callback(14378);
    callback(7692).init();
    let obj9 = callback(7692);
    callback(14379).init();
    let obj10 = callback(14379);
    callback(14382).init();
    let obj11 = callback(14382);
    callback(10637).initialize();
    let obj12 = callback(10637);
    callback(14453).initialize();
    let obj13 = callback(14453);
    callback(9444).initialize();
    let obj14 = callback(9444);
    callback(9497).initialize();
    let obj15 = callback(9497);
    callback(8201).initialize();
    const obj16 = callback(8201);
    callback(14461).initialize();
    const obj17 = callback(14461);
    callback(14463).initialize();
    const obj18 = callback(14463);
    callback(14467).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14467);
    callback(14469).initialize();
    const obj20 = callback(14469);
    callback(14470).initialize();
    const obj21 = callback(14470);
    callback(14471).initialize();
    const obj22 = callback(14471);
    callback(14472).initialize();
    const obj23 = callback(14472);
    callback(4668).initialize();
    const obj24 = callback(4668);
    callback(14473).initialize();
    const obj25 = callback(14473);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5121).initialize();
      const tmpResult = tmp(5121);
    }
    obj26 = shouldUseAltGateway(1234);
    const result = tmp29(12714).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14368).terminate();
      const obj = callback2(14368);
      callback2(4922).terminate();
      const obj2 = callback2(4922);
      callback2(10637).terminate();
      const obj3 = callback2(10637);
      callback2(14453).terminate();
      const obj4 = callback2(14453);
      callback(12714).cleanupRouteManager();
      const obj5 = callback(12714);
      callback2(14473).terminate();
      const obj6 = callback2(14473);
      callback2(14461).terminate();
      const obj7 = callback2(14461);
      callback2(8201).terminate();
      const obj8 = callback2(8201);
      callback2(14382).terminate();
      const obj9 = callback2(14382);
      callback2(14366).terminate();
      const obj10 = callback2(14366);
      callback2(14467).terminate();
      const obj11 = callback2(14467);
      callback2(14469).terminate();
      const obj12 = callback2(14469);
      callback2(14470).terminate();
      const obj13 = callback2(14470);
      callback2(14472).terminate();
      const obj14 = callback2(14472);
      callback2(4668).terminate();
      const obj15 = callback2(4668);
      callback2(14378).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.isAuthenticated());
  shouldUseAltGateway = stateFromStores;
  const items1 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (shouldUseAltGateway) {
      const token = closure_1_6.getToken();
      if (null == token) {
        const _Error = Error;
        error = new Error("Authenticated without a token");
        throw error;
      } else {
        closure_1_1(closure_1_2[52]).startSession(token);
        const obj = closure_1_1(closure_1_2[52]);
        closure_1_1(closure_1_2[53]).initialize();
        const obj2 = closure_1_1(closure_1_2[53]);
        if (obj3.isAndroid()) {
          const NativePermissionManager = closure_1_4.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          callback(table[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = React.useEffect(() => {
    callback(9).wasAuthenticated = closure_6.isAuthenticated();
  }, []);
  shouldUseAltGateway = undefined;
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13595).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    const result = closure_1_1(closure_1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(13595);
  shouldUseAltGateway = shouldUseAltGateway(14477).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    closure_1_1(closure_1_2[56]).setUseAltGateway(shouldUseAltGateway);
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(14477);
  obj[0] = shouldUseAltGateway(11465).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
