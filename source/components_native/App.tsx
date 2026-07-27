// Module ID: 13391
// Function ID: 102718
// Name: App
// Dependencies: [31, 27, 13392, 1194, 8767, 12675, 12684, 12701, 6207, 4201, 13393, 13394, 13395, 5877, 3783, 4123, 13396, 9124, 13397, 13398, 33, 13399, 1935, 13432, 4528, 13438, 13439, 13440, 13441, 5990, 13450, 5993, 13451, 13454, 6241, 13515, 10547, 10573, 8062, 13523, 13525, 13529, 13531, 13532, 13533, 13534, 4309, 13535, 477, 4697, 10806, 566, 5588, 13537, 14, 12664, 479, 13539, 10834, 13541, 14785, 2]
// Exports: default

// Module 13391 (App)
import set from "set";
import { NativeModules } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import appDatabaseManager from "appDatabaseManager";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_13398 from "module_13398";
import { jsx } from "module_13454";

const require = arg1;
if (global.__DEV__) {
  require("getPluginOptions");
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = importDefault(14).renderApp;
  renderApp.record();
  (function useManagers() {
    const effect = outer1_3.useEffect(() => {
      outer2_1(outer2_2[23]).init();
      let obj = outer2_1(outer2_2[23]);
      outer2_1(outer2_2[24]).initialize();
      let obj2 = outer2_1(outer2_2[24]);
      outer2_1(outer2_2[25]).initialize();
      let obj3 = outer2_1(outer2_2[25]);
      outer2_1(outer2_2[26]).initialize();
      let obj4 = outer2_1(outer2_2[26]);
      outer2_1(outer2_2[27]).initialize();
      let obj5 = outer2_1(outer2_2[27]);
      outer2_1(outer2_2[28]).initialize();
      let obj6 = outer2_1(outer2_2[28]);
      outer2_1(outer2_2[29]).initialize();
      let obj7 = outer2_1(outer2_2[29]);
      outer2_1(outer2_2[30]).initialize();
      let obj8 = outer2_1(outer2_2[30]);
      outer2_1(outer2_2[31]).init();
      let obj9 = outer2_1(outer2_2[31]);
      outer2_1(outer2_2[32]).init();
      let obj10 = outer2_1(outer2_2[32]);
      outer2_1(outer2_2[33]).init();
      let obj11 = outer2_1(outer2_2[33]);
      outer2_1(outer2_2[34]).initialize();
      let obj12 = outer2_1(outer2_2[34]);
      outer2_1(outer2_2[35]).initialize();
      let obj13 = outer2_1(outer2_2[35]);
      outer2_1(outer2_2[36]).initialize();
      let obj14 = outer2_1(outer2_2[36]);
      outer2_1(outer2_2[37]).initialize();
      let obj15 = outer2_1(outer2_2[37]);
      outer2_1(outer2_2[38]).initialize();
      const obj16 = outer2_1(outer2_2[38]);
      outer2_1(outer2_2[39]).initialize();
      const obj17 = outer2_1(outer2_2[39]);
      outer2_1(outer2_2[40]).initialize();
      const obj18 = outer2_1(outer2_2[40]);
      outer2_1(outer2_2[41]).initialize();
      outer2_5.ensureInitialized();
      const obj19 = outer2_1(outer2_2[41]);
      outer2_1(outer2_2[42]).initialize();
      const obj20 = outer2_1(outer2_2[42]);
      outer2_1(outer2_2[43]).initialize();
      const obj21 = outer2_1(outer2_2[43]);
      outer2_1(outer2_2[44]).initialize();
      const obj22 = outer2_1(outer2_2[44]);
      outer2_1(outer2_2[45]).initialize();
      const obj23 = outer2_1(outer2_2[45]);
      outer2_1(outer2_2[46]).initialize();
      const obj24 = outer2_1(outer2_2[46]);
      outer2_1(outer2_2[47]).initialize();
      const obj25 = outer2_1(outer2_2[47]);
      if (obj26.isIOS()) {
        outer2_1(outer2_2[49]).initialize();
        const obj27 = outer2_1(outer2_2[49]);
      }
      obj26 = outer2_0(outer2_2[48]);
      const result = outer2_0(outer2_2[50]).initializeRouteManagerIfNeeded();
      return () => {
        outer3_1(outer3_2[27]).terminate();
        const obj = outer3_1(outer3_2[27]);
        outer3_1(outer3_2[24]).terminate();
        const obj2 = outer3_1(outer3_2[24]);
        outer3_1(outer3_2[34]).terminate();
        const obj3 = outer3_1(outer3_2[34]);
        outer3_1(outer3_2[35]).terminate();
        const obj4 = outer3_1(outer3_2[35]);
        outer3_0(outer3_2[50]).cleanupRouteManager();
        const obj5 = outer3_0(outer3_2[50]);
        outer3_1(outer3_2[47]).terminate();
        const obj6 = outer3_1(outer3_2[47]);
        outer3_1(outer3_2[39]).terminate();
        const obj7 = outer3_1(outer3_2[39]);
        outer3_1(outer3_2[38]).terminate();
        const obj8 = outer3_1(outer3_2[38]);
        outer3_1(outer3_2[33]).terminate();
        const obj9 = outer3_1(outer3_2[33]);
        outer3_1(outer3_2[25]).terminate();
        const obj10 = outer3_1(outer3_2[25]);
        outer3_1(outer3_2[41]).terminate();
        const obj11 = outer3_1(outer3_2[41]);
        outer3_1(outer3_2[42]).terminate();
        const obj12 = outer3_1(outer3_2[42]);
        outer3_1(outer3_2[43]).terminate();
        const obj13 = outer3_1(outer3_2[43]);
        outer3_1(outer3_2[45]).terminate();
        const obj14 = outer3_1(outer3_2[45]);
        outer3_1(outer3_2[46]).terminate();
        const obj15 = outer3_1(outer3_2[46]);
        outer3_1(outer3_2[30]).terminate();
      };
    }, []);
  })();
  (function useAuthenticated() {
    const items = [outer1_6];
    const stateFromStores = outer1_0(outer1_2[51]).useStateFromStores(items, () => outer2_6.isAuthenticated());
    const items1 = [stateFromStores];
    const effect = outer1_3.useEffect(() => {
      if (stateFromStores) {
        const token = outer2_6.getToken();
        if (null == token) {
          const _Error = Error;
          const error = new Error("Authenticated without a token");
          throw error;
        } else {
          outer2_1(outer2_2[52]).startSession(token);
          const obj = outer2_1(outer2_2[52]);
          outer2_1(outer2_2[53]).initialize();
          const obj2 = outer2_1(outer2_2[53]);
          if (obj3.isAndroid()) {
            const NativePermissionManager = outer2_4.NativePermissionManager;
            const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
          }
          return () => {
            outer3_1(outer3_2[53]).terminate();
          };
        }
      }
    }, items1);
    const effect1 = outer1_3.useEffect(() => {
      outer2_1(outer2_2[54]).wasAuthenticated = outer2_6.isAuthenticated();
    }, []);
  })();
  (function useChannelObfuscationPersistence() {
    const isChannelMetadataObfuscationEnabled = outer1_0(outer1_2[55]).useIsChannelMetadataObfuscationEnabled("App");
    const items = [isChannelMetadataObfuscationEnabled];
    const effect = outer1_3.useEffect(() => {
      if (obj.isAndroid()) {
        const result = outer2_1(outer2_2[56]).setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
        const obj2 = outer2_1(outer2_2[56]);
      } else {
        const DCDFastConnectManager = outer2_4.DCDFastConnectManager;
        const result1 = DCDFastConnectManager.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
      }
    }, items);
  })();
  (function useAltGatewayPersistence() {
    const shouldUseAltGateway = outer1_0(outer1_2[57]).useShouldUseAltGateway("App");
    const items = [shouldUseAltGateway];
    const effect = outer1_3.useEffect(() => {
      if (obj.isAndroid()) {
        outer2_1(outer2_2[56]).setUseAltGateway(shouldUseAltGateway);
        const obj2 = outer2_1(outer2_2[56]);
      } else {
        const DCDFastConnectManager = outer2_4.DCDFastConnectManager;
        DCDFastConnectManager.setUseAltGateway(shouldUseAltGateway);
      }
    }, items);
  })();
  let effect = React.useEffect(() => {
    const renderAppEffect = outer1_1(outer1_2[54]).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj = { profile: require(10834) /* setLevels */.Profiles.App };
  obj = { appEntryKey: "main" };
  const tmp7 = importDefault(10834);
  obj.children = jsx(importDefault(14785), {});
  obj.children = jsx(importDefault(13541), { appEntryKey: "main" });
  return <tmp7 appEntryKey="main" />;
};
