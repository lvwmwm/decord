// Module ID: 9597
// Function ID: 9598
// Name: useConjureEntryPointPlacement
// Dependencies: [9598, 558, 576, 6843, 1452, 9599, 504, 2]

// Module 9597 (useConjureEntryPointPlacement)
import ConjureMobileExperimentDefault from "ConjureMobileExperiment" /* 9599 */;
import ConjureYouBarPinStore from "ConjureYouBarPinStore" /* 9598 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureEntryPointPlacement(_location) {
  let first;
  let pinned;
  _require = _location;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  let obj2 = require("ConjureGuildExperiment");
  const hasConjureGuild = obj2.useHasConjureGuild(_location);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(1452).ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasConjureGuild) {
    let tmp6;
    let tmp7;
    if (cResult[2] === _location) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ConjureYouBarPinStore];
      class P {
        constructor() {
          return pinned.isPinned();
        }
      }
      cResult[5] = items1;
      cResult[6] = P;
    }
    tmp(504);
    if (null == stateFromStores) {
      return null;
    } else {
      let str3;
      class P {
        constructor() {
          return pinned.isPinned();
        }
      }
      if ("profile" === stateFromStores) {
        str3 = "you_bar";
        if (!tmp13) {
          str3 = "you_screen";
        }
      }
      if (cResult[7] === "profile" === stateFromStores) {
        let tmp16;
        if (cResult[8] === str3) {
          tmp16 = cResult[9];
        }
        return tmp16;
      }
      const obj3 = { placement: str3, canPin: "profile" === stateFromStores };
      cResult[7] = "profile" === stateFromStores;
      cResult[8] = str3;
      cResult[9] = obj3;
      tmp16 = obj3;
    }
  }
  const fn = function u() {
    const tmp = hasConjureGuild;
    if (tmp) {
      const obj2 = { location: _location };
      const obj = ConjureMobileExperimentDefault;
      const config = obj.getConfig(obj2);
      let entryPoint = null;
      if (config.enabled) {
        entryPoint = config.entryPoint;
      }
      return entryPoint;
    } else {
      return null;
    }
  };
  const items2 = [hasConjureGuild, _location];
  cResult[1] = hasConjureGuild;
  cResult[2] = _location;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : (function useConjureEntryPointPlacement(_location) {
  let pinned;
  _require = _location;
  let obj = require("ConjureGuildExperiment");
  const hasConjureGuild = obj.useHasConjureGuild(_location);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp2 = require("get initialized");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [hasConjureGuild, _location];
  const stateFromStores = useStateFromStores(items, () => {
    const tmp = hasConjureGuild;
    if (tmp) {
      const obj2 = { location: _location };
      const obj = ConjureMobileExperimentDefault;
      const config = obj.getConfig(obj2);
      let entryPoint = null;
      if (config.enabled) {
        entryPoint = config.entryPoint;
      }
      return entryPoint;
    } else {
      return null;
    }
  }, items1);
  require("get initialized");
  [][0] = ConjureYouBarPinStore;
  if (null == stateFromStores) {
    return null;
  } else {
    let str3 = "you_bar";
    if ("profile" === stateFromStores) {
      str3 = "you_bar";
      if (!tmp5) {
        str3 = "you_screen";
      }
    }
    let obj2 = { placement: str3, canPin: "profile" === stateFromStores };
    return obj2;
  }
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureEntryPointPlacement.tsx");

export default tmp2;
