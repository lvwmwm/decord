// Module ID: 14666
// Function ID: 14667
// Name: DevToolsLazy
// Dependencies: [5, 19, 17, 7822, 7821, 21, 14667, 14669, 1896, 504, 1363, 16022, 2]
// Exports: default

// Module 14666 (DevToolsLazy)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7822 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7821 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let items = [
  {
    input: "o",
    modifierFlags: fn(14667).KeyModifierFlags.keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      return (async (arg0, value) => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: require("asyncRequireImpl")(paths[7], paths.paths), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              value.navigateToDevTools();
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      })();
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
  const keyCommands = stateFromStores(14667).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(16022).default, {});
    }
  }
  return null;
};
