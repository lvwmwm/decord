// Module ID: 13435
// Function ID: 102891
// Name: App
// Dependencies: [31, 27, 13436, 1194, 8811, 12718, 12727, 12744, 6242, 4235, 13437, 13438, 13439, 5911, 3817, 4157, 13440, 9168, 13441, 13442, 33, 13443, 1935, 13476, 4562, 13482, 13483, 13484, 13485, 6024, 13494, 6027, 13495, 13498, 6277, 13559, 10585, 10611, 8100, 13567, 13569, 13573, 13575, 13576, 13577, 13578, 4343, 13579, 477, 4731, 10844, 566, 5623, 13581, 14, 12707, 479, 13583, 10872, 13585, 14829, 2]
// Exports: default

// Module 13435 (App)
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
import module_13442 from "module_13442";
import { jsx } from "module_13498";

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
  let obj = { profile: require(10872) /* setLevels */.Profiles.App };
  obj = { appEntryKey: "main" };
  const tmp7 = importDefault(10872);
  obj.children = jsx(importDefault(14829), {});
  obj.children = jsx(importDefault(13585), { appEntryKey: "main" });
  return <tmp7 appEntryKey="main" />;
};
