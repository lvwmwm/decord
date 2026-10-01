// Module ID: 14138
// Function ID: 14139
// Name: DevToolsLazy
// Dependencies: [19, 17, 7133, 7132, 21, 5277, 14139, 1981, 504, 1364, 15549, 2]
// Exports: default

// Module 14138 (DevToolsLazy)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import KeyCommands from "KeyCommands" /* 5277 */;
import react from "react" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7133 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7132 */;
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
    const promise = asyncRequire(14139, dependencyMap.paths);
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
  const obj3 = stateFromStores(5277);
  const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15549).default, {});
    }
  }
  return null;
};
