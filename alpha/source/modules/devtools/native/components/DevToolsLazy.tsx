// Module ID: 16422
// Function ID: 16423
// Name: DevToolsLazy
// Dependencies: [19, 17, 7864, 7863, 21, 6023, 16423, 1994, 504, 1375, 17963, 2]
// Exports: default

// Module 16422 (DevToolsLazy)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import KeyCommands from "KeyCommands" /* 6023 */;
import react from "react" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7864 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7863 */;
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
    const promise = asyncRequire(16423, dependencyMap.paths);
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
  const obj3 = stateFromStores(6023);
  const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(17963).default, {});
    }
  }
  return null;
};
