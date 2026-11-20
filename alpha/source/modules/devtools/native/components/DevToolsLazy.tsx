// Module ID: 15699
// Function ID: 15700
// Name: DevToolsLazy
// Dependencies: [19, 17, 8303, 8302, 21, 5806, 15700, 2119, 504, 1378, 17311, 2]
// Exports: default

// Module 15699 (DevToolsLazy)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import KeyCommands from "KeyCommands" /* 5806 */;
import react from "react" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8303 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8302 */;
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
    const promise = asyncRequire(15700, dependencyMap.paths);
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
  const obj3 = stateFromStores(5806);
  const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(17311).default, {});
    }
  }
  return null;
};
