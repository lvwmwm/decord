// Module ID: 13856
// Function ID: 106078
// Name: pressable
// Dependencies: [7733, 653, 675, 4372, 13855, 1935, 11746, 10099, 1212, 2]

// Module 13856 (pressable)
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
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(13855, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(11746) /* isContactSyncAvailable */.useContactSyncAccount();
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
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(13855, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(11746) /* isContactSyncAvailable */.useContactSyncAccount();
  }
};
const result = require("expandLocation").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
