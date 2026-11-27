// Module ID: 16029
// Function ID: 16030
// Name: DevToolsLazy
// Dependencies: [19, 17, 8385, 8384, 21, 6111, 16030, 2120, 504, 1379, 17650, 2]
// Exports: default

// Module 16029 (DevToolsLazy)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import KeyCommands from "KeyCommands" /* 6111 */;
import react from "react" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8385 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8384 */;
import size from "module_2" /* 2 */;

let NSUserDefaultsBridge;

const NativeModules = react_native.NativeModules;
const jsx = Fragment.jsx;
let obj = {
  input: "o",
  modifierFlags: KeyCommands.KeyModifierFlags.keyModifierControl,
  eventName: "keyCommandShowDevTools",
  discoverabilityTitle: "Open DevTools Panel",
  onKeyCommand() {
    const promise = asyncRequire(16030, dependencyMap.paths);
    promise.then((navigateToDevTools) => {
      navigateToDevTools.navigateToDevTools();
    });
    return true;
  }
};
let items = [obj];
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  let isDeveloper;
  let showDevWidget;
  let stateFromStores;
  const tmp = stateFromStores;
  let obj = stateFromStores(504);
  items = [DeveloperExperimentStore];
  stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [DevToolsSettingsStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = react.useEffect(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      DeveloperExperimentStore.addChangeListener(() => {
        NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
        if (NSUserDefaultsBridge != null) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
        }
      });
    }
  });
  const obj3 = stateFromStores(6111);
  const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(17650).default, {});
    }
  }
  return null;
};
