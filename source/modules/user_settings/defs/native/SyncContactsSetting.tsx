// Module ID: 14090
// Function ID: 14091
// Name: toggle
// Dependencies: [4998, 1903, 8082, 676, 12035, 14091, 10447, 1236, 2]

// Module 14090 (toggle)
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { PlatformTypes } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.uSvEy7);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = require(12035) /* _uploadContacts */.useContactSyncAccount();
    const obj = require(12035) /* _uploadContacts */;
    return require(12035) /* _uploadContacts */.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    require(14091) /* syncContacts */.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;
