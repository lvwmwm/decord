// Module ID: 14168
// Function ID: 14169
// Name: toggle
// Dependencies: [5061, 1922, 8148, 676, 12116, 14169, 10421, 1236, 2]

// Module 14168 (toggle)
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
    const contactSyncAccount = require(12116) /* _uploadContacts */.useContactSyncAccount();
    const obj = require(12116) /* _uploadContacts */;
    return require(12116) /* _uploadContacts */.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    require(14169) /* syncContacts */.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;
