// Module ID: 14768
// Function ID: 14769
// Name: toggle
// Dependencies: [5242, 1921, 7906, 673, 12612, 14769, 11400, 1233, 2]

// Module 14768 (toggle)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _uploadContacts from "_uploadContacts" /* 12612 */;
import syncContacts from "syncContacts" /* 14769 */;
import closure_2 from "set" /* 5242 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PlatformTypes } from "ME" /* 673 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uSvEy7);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = _uploadContacts.useContactSyncAccount();
    const obj = _uploadContacts;
    return _uploadContacts.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    syncContacts.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;
