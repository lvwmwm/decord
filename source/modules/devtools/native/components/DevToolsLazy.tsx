// Module ID: 13387
// Function ID: 101754
// Name: NativeModules
// Dependencies: []
// Exports: default

// Module 13387 (NativeModules)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const obj = { flexDirection: false, alignItems: false, gap: false, width: false };
if (obj2.isAndroid()) {
  let keyModifierControl = importDefault(dependencyMap[7]).getConstants().keyModifierControl;
  const importDefaultResult = importDefault(dependencyMap[7]);
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
obj.modifierFlags = keyModifierControl;
obj.onKeyCommand = function onKeyCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
const items = [obj];
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => closure_5.isDeveloper);
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = React.useEffect(() => {
    if (obj.isIOS()) {
      closure_5.addChangeListener(() => {
        const NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
        if (null != NSUserDefaultsBridge) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(closure_0);
        }
      });
    }
  });
  const obj2 = arg1(dependencyMap[10]);
  const keyCommands = arg1(dependencyMap[11]).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(arg1(dependencyMap[12]).default, {});
    }
  }
  return null;
};
