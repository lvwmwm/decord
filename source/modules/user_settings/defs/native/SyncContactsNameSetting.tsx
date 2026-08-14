// Module ID: 14171
// Function ID: 14172
// Name: pressable
// Dependencies: [8148, 676, 698, 4572, 14170, 2007, 12116, 10421, 1236, 2]

// Module 14171 (pressable)
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    importDefault(698).track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = importDefault(698);
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14170, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(12116) /* _uploadContacts */.useContactSyncAccount();
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    importDefault(698).track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = importDefault(698);
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14170, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(12116) /* _uploadContacts */.useContactSyncAccount();
  }
};
const result = require("expandEventProperties").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
