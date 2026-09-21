// Module ID: 14857
// Function ID: 14858
// Name: DevToolsLazy
// Dependencies: [19, 17, 7956, 7955, 21, 5182, 14858, 1980, 504, 1364, 16256, 2]
// Exports: default

// Module 14857 (DevToolsLazy)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7956 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7955 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let items = [
  {
    input: "o",
    modifierFlags: fn(5182).KeyModifierFlags.keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      asyncRequireImpl(14858, dependencyMap.paths).then((navigateToDevTools) => {
        navigateToDevTools.navigateToDevTools();
      });
      return true;
    }
  }
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  items = [DeveloperExperimentStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => isDeveloper.isDeveloper);
  const obj = stateFromStores(504);
  const tmp = stateFromStores;
  const items1 = [DevToolsSettingsStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = noop.useEffect(() => {
    if (obj.isIOS()) {
      DeveloperExperimentStore.addChangeListener(() => {
        NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
        if (NSUserDefaultsBridge != null) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
        }
      });
    }
  });
  const obj2 = stateFromStores(504);
  const keyCommands = stateFromStores(5182).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(16256).default, {});
    }
  }
  return null;
};
