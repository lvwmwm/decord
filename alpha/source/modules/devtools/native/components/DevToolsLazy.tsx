// Module ID: 14339
// Function ID: 14340
// Name: DevToolsLazy
// Dependencies: [19, 17, 7328, 7327, 21, 5473, 14340, 1981, 504, 1364, 15757, 2]
// Exports: default

// Module 14339 (DevToolsLazy)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7328 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7327 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let items = [
  {
    input: "o",
    modifierFlags: fn(5473).KeyModifierFlags.keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      asyncRequireImpl(14340, dependencyMap.paths).then((navigateToDevTools) => {
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
  const keyCommands = stateFromStores(5473).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15757).default, {});
    }
  }
  return null;
};
