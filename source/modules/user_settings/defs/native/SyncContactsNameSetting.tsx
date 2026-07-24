// Module ID: 13800
// Function ID: 105773
// Name: pressable
// Dependencies: [7751, 653, 675, 4337, 13799, 1934, 11736, 10127, 1212, 2]

// Module 13800 (pressable)
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    importDefault(675).track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = importDefault(675);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13799, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(11736) /* isContactSyncAvailable */.useContactSyncAccount();
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    importDefault(675).track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = importDefault(675);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13799, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(11736) /* isContactSyncAvailable */.useContactSyncAccount();
  }
};
const result = require("expandLocation").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
