// Module ID: 14742
// Function ID: 14743
// Dependencies: [1606, 1236, 14743, 10447, 9533, 3974, 2]

// Module 14742
import createToggle from "createToggle";
import importAllResult from "getConstants";

const require = arg1;
const constants = require("getConstants").getConstants();
let obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.H66MEk);
  },
  parent: null,
  IconComponent: require("ClydeIcon").ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = require(14743) /* getClientInfo */.getClientInfoString(closure_3.ReleaseChannel);
    const obj = require(14743) /* getClientInfo */;
    const obj2 = require(14743) /* getClientInfo */;
    const clientInfoString1 = obj2.getClientInfoString(importAll(1606).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(1606);
    const clientInfoString2 = require(14743) /* getClientInfo */.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle: function useAppVersionSettingTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.H66MEk);
  },
  parent: null,
  IconComponent: require("ClydeIcon").ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = require(14743) /* getClientInfo */.getClientInfoString(closure_3.ReleaseChannel);
    const obj = require(14743) /* getClientInfo */;
    const obj2 = require(14743) /* getClientInfo */;
    const clientInfoString1 = obj2.getClientInfoString(importAll(1606).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(1606);
    const clientInfoString2 = require(14743) /* getClientInfo */.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("getClientInfo").fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default createStaticResult;
