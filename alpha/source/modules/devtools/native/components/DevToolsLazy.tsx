// Module ID: 14647
// Function ID: 14648
// Name: DevToolsLazy
// Dependencies: [19, 17, 7397, 7396, 21, 5371, 14648, 1999, 558, 576, 504, 1381, 16138, 2]

// Module 14647 (DevToolsLazy)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import KeyCommands from "KeyCommands" /* 5371 */;
import react from "react" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7397 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7396 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
    const promise = asyncRequire(14648, dependencyMap.paths);
    promise.then((navigateToDevTools) => {
      navigateToDevTools.navigateToDevTools();
    });
    return true;
  }
};
let items = [obj];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsLazy() {
  let isDeveloper;
  let showDevWidget;
  let stateFromStores;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [DeveloperExperimentStore];
    const fn = function c() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DevToolsSettingsStore];
    class D {
      constructor() {
        return showDevWidget.showDevWidget;
      }
    }
    cResult[2] = items1;
    cResult[3] = D;
    tmp9 = D;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    const fn2 = function h() {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        DeveloperExperimentStore.addChangeListener(() => {
          NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
          if (NSUserDefaultsBridge != null) {
            const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
          }
        });
      }
    };
    cResult[4] = stateFromStores;
    class D {
      constructor() {
        return showDevWidget.showDevWidget;
      }
    }
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const effect = react.useEffect(tmp12);
  if (cResult[6] !== stateFromStores) {
    const tmp15 = stateFromStores ? items : [];
    cResult[6] = stateFromStores;
    class D {
      constructor() {
        return showDevWidget.showDevWidget;
      }
    }
    cResult[7] = tmp15;
    tmp14 = tmp15;
  } else {
    tmp14 = cResult[7];
  }
  const tmpResult5 = tmp(5371);
  const keyCommands = tmpResult5.useKeyCommands(tmp14);
  if (stateFromStores) {
    if (stateFromStores1) {
      let tmp19;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[8] = tmp(16138);
        tmp(16138);
        class D {
          constructor() {
            return showDevWidget.showDevWidget;
          }
        }
      }
      class D {
        constructor() {
          return showDevWidget.showDevWidget;
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = <_default />;
        class D {
          constructor() {
            return showDevWidget.showDevWidget;
          }
        }
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      return tmp19;
    }
  }
  return null;
}) : (function DevToolsLazy() {
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
  const obj3 = stateFromStores(5371);
  const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(16138).default, {});
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default tmp2;
