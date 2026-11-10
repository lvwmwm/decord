// Module ID: 9674
// Function ID: 9675
// Name: useConjureEntryPointPlacement
// Dependencies: [9675, 6879, 504, 1447, 9676, 2]
// Exports: default

// Module 9674 (useConjureEntryPointPlacement)
import ConjureMobileExperimentDefault from "ConjureMobileExperiment" /* 9676 */;
import ConjureYouBarPinStore from "ConjureYouBarPinStore" /* 9675 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureEntryPointPlacement.tsx");

export default function useConjureEntryPointPlacement(DMAppChannel) {
  let _location;
  let pinned;
  _require = DMAppChannel;
  let obj = require("ConjureGuildExperiment");
  const hasConjureGuild = obj.useHasConjureGuild(DMAppChannel);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp2 = require("get initialized");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [hasConjureGuild, DMAppChannel];
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
};
