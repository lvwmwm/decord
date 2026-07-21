// Module ID: 13205
// Function ID: 100070
// Name: App
// Dependencies: []
// Exports: default

// Module 13205 (App)
let closure_3 = importAll(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
arg1(dependencyMap[4]);
arg1(dependencyMap[5]);
arg1(dependencyMap[6]);
arg1(dependencyMap[7]);
arg1(dependencyMap[8]);
arg1(dependencyMap[9]);
arg1(dependencyMap[10]);
arg1(dependencyMap[11]);
arg1(dependencyMap[12]);
arg1(dependencyMap[13]);
arg1(dependencyMap[14]);
arg1(dependencyMap[15]);
arg1(dependencyMap[16]);
arg1(dependencyMap[17]);
arg1(dependencyMap[18]);
arg1(dependencyMap[19]);
const jsx = arg1(dependencyMap[20]).jsx;
if (global.__DEV__) {
  arg1(dependencyMap[22])(dependencyMap[21], dependencyMap.paths);
}
const result = arg1(dependencyMap[61]).fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = importDefault(dependencyMap[54]).renderApp;
  renderApp.record();
  function useManagers() {
    const effect = React.useEffect(() => {
      callback2(closure_2[23]).init();
      const obj = callback2(closure_2[23]);
      callback2(closure_2[24]).initialize();
      const obj2 = callback2(closure_2[24]);
      callback2(closure_2[25]).initialize();
      const obj3 = callback2(closure_2[25]);
      callback2(closure_2[26]).initialize();
      const obj4 = callback2(closure_2[26]);
      callback2(closure_2[27]).initialize();
      const obj5 = callback2(closure_2[27]);
      callback2(closure_2[28]).initialize();
      const obj6 = callback2(closure_2[28]);
      callback2(closure_2[29]).initialize();
      const obj7 = callback2(closure_2[29]);
      callback2(closure_2[30]).initialize();
      const obj8 = callback2(closure_2[30]);
      callback2(closure_2[31]).init();
      const obj9 = callback2(closure_2[31]);
      callback2(closure_2[32]).init();
      const obj10 = callback2(closure_2[32]);
      callback2(closure_2[33]).init();
      const obj11 = callback2(closure_2[33]);
      callback2(closure_2[34]).initialize();
      const obj12 = callback2(closure_2[34]);
      callback2(closure_2[35]).initialize();
      const obj13 = callback2(closure_2[35]);
      callback2(closure_2[36]).initialize();
      const obj14 = callback2(closure_2[36]);
      callback2(closure_2[37]).initialize();
      const obj15 = callback2(closure_2[37]);
      callback2(closure_2[38]).initialize();
      const obj16 = callback2(closure_2[38]);
      callback2(closure_2[39]).initialize();
      const obj17 = callback2(closure_2[39]);
      callback2(closure_2[40]).initialize();
      const obj18 = callback2(closure_2[40]);
      callback2(closure_2[41]).initialize();
      closure_5.ensureInitialized();
      const obj19 = callback2(closure_2[41]);
      callback2(closure_2[42]).initialize();
      const obj20 = callback2(closure_2[42]);
      callback2(closure_2[43]).initialize();
      const obj21 = callback2(closure_2[43]);
      callback2(closure_2[44]).initialize();
      const obj22 = callback2(closure_2[44]);
      callback2(closure_2[45]).initialize();
      const obj23 = callback2(closure_2[45]);
      callback2(closure_2[46]).initialize();
      const obj24 = callback2(closure_2[46]);
      callback2(closure_2[47]).initialize();
      const obj25 = callback2(closure_2[47]);
      if (obj26.isIOS()) {
        callback2(closure_2[49]).initialize();
        const obj27 = callback2(closure_2[49]);
      }
      const obj26 = callback(closure_2[48]);
      const result = callback(closure_2[50]).initializeRouteManagerIfNeeded();
      return () => {
        callback2(closure_2[27]).terminate();
        const obj = callback2(closure_2[27]);
        callback2(closure_2[24]).terminate();
        const obj2 = callback2(closure_2[24]);
        callback2(closure_2[34]).terminate();
        const obj3 = callback2(closure_2[34]);
        callback2(closure_2[35]).terminate();
        const obj4 = callback2(closure_2[35]);
        callback(closure_2[50]).cleanupRouteManager();
        const obj5 = callback(closure_2[50]);
        callback2(closure_2[47]).terminate();
        const obj6 = callback2(closure_2[47]);
        callback2(closure_2[39]).terminate();
        const obj7 = callback2(closure_2[39]);
        callback2(closure_2[38]).terminate();
        const obj8 = callback2(closure_2[38]);
        callback2(closure_2[33]).terminate();
        const obj9 = callback2(closure_2[33]);
        callback2(closure_2[25]).terminate();
        const obj10 = callback2(closure_2[25]);
        callback2(closure_2[41]).terminate();
        const obj11 = callback2(closure_2[41]);
        callback2(closure_2[42]).terminate();
        const obj12 = callback2(closure_2[42]);
        callback2(closure_2[43]).terminate();
        const obj13 = callback2(closure_2[43]);
        callback2(closure_2[45]).terminate();
        const obj14 = callback2(closure_2[45]);
        callback2(closure_2[46]).terminate();
        const obj15 = callback2(closure_2[46]);
        callback2(closure_2[30]).terminate();
      };
    }, []);
  }();
  function useAuthenticated() {
    const items = [closure_6];
    const stateFromStores = stateFromStores(closure_2[51]).useStateFromStores(items, () => closure_6.isAuthenticated());
    const items1 = [stateFromStores];
    const effect = React.useEffect(() => {
      if (stateFromStores) {
        const token = closure_6.getToken();
        if (null == token) {
          const _Error = Error;
          const error = new Error("Authenticated without a token");
          throw error;
        } else {
          const obj = callback(closure_2[52]);
          obj.startSession(token);
          callback(closure_2[53]).initialize();
          const obj2 = callback(closure_2[53]);
          if (obj3.isAndroid()) {
            const NativePermissionManager = obj.NativePermissionManager;
            const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
          }
          return () => {
            callback(closure_2[53]).terminate();
          };
        }
      }
    }, items1);
    const effect1 = React.useEffect(() => {
      callback(closure_2[54]).wasAuthenticated = closure_6.isAuthenticated();
    }, []);
  }();
  function useChannelObfuscationPersistence() {
    const isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(closure_2[55]).useIsChannelMetadataObfuscationEnabled("App");
    const items = [isChannelMetadataObfuscationEnabled];
    const effect = React.useEffect(() => {
      const obj = isChannelMetadataObfuscationEnabled(closure_2[48]);
      if (obj.isAndroid()) {
        const result = callback(closure_2[56]).setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
        const obj2 = callback(closure_2[56]);
      } else {
        const DCDFastConnectManager = obj.DCDFastConnectManager;
        const result1 = DCDFastConnectManager.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
      }
    }, items);
  }();
  function useAltGatewayPersistence() {
    const shouldUseAltGateway = shouldUseAltGateway(closure_2[57]).useShouldUseAltGateway("App");
    const items = [shouldUseAltGateway];
    const effect = React.useEffect(() => {
      const obj = shouldUseAltGateway(closure_2[48]);
      if (obj.isAndroid()) {
        callback(closure_2[56]).setUseAltGateway(shouldUseAltGateway);
        const obj2 = callback(closure_2[56]);
      } else {
        const DCDFastConnectManager = obj.DCDFastConnectManager;
        DCDFastConnectManager.setUseAltGateway(shouldUseAltGateway);
      }
    }, items);
  }();
  const effect = React.useEffect(() => {
    const renderAppEffect = callback(closure_2[54]).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj = { profile: arg1(dependencyMap[58]).Profiles.App };
  obj = { appEntryKey: "main" };
  const tmp7 = importDefault(dependencyMap[58]);
  obj.children = jsx(importDefault(dependencyMap[60]), {});
  obj.children = jsx(importDefault(dependencyMap[59]), obj);
  return <tmp7 {...obj} />;
};
