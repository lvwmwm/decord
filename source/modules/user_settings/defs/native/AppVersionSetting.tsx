// Module ID: 14810
// Function ID: 14811
// Dependencies: [1625, 1236, 14811, 10493, 9579, 4034, 2]

// Module 14810
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
    const clientInfoString = require(14811) /* getClientInfo */.getClientInfoString(closure_3.ReleaseChannel);
    const obj = require(14811) /* getClientInfo */;
    const obj2 = require(14811) /* getClientInfo */;
    const clientInfoString1 = obj2.getClientInfoString(importAll(1625).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(1625);
    const clientInfoString2 = require(14811) /* getClientInfo */.getClientInfoString(closure_3.Version);
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
    const clientInfoString = require(14811) /* getClientInfo */.getClientInfoString(closure_3.ReleaseChannel);
    const obj = require(14811) /* getClientInfo */;
    const obj2 = require(14811) /* getClientInfo */;
    const clientInfoString1 = obj2.getClientInfoString(importAll(1625).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(1625);
    const clientInfoString2 = require(14811) /* getClientInfo */.getClientInfoString(closure_3.Version);
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
