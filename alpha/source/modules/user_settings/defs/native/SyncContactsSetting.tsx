// Module ID: 16357
// Function ID: 16358
// Name: SyncContactsSetting
// Dependencies: [7462, 1387, 9556, 1071, 13681, 16358, 11970, 1112, 2]

// Module 16357 (SyncContactsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13681 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16358 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7462 */;
import UserStore from "UserStore" /* 1387 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const PlatformTypes = Constants.PlatformTypes;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.uSvEy7);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const obj = ContactSyncUtils;
    const contactSyncAccount = obj.useContactSyncAccount();
    const obj2 = ContactSyncUtils;
    return obj2.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    const currentUser = UserStore.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    const obj = ContactSyncSettings;
    obj.handleSyncContacts(localAccount, phone, arg0);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;
