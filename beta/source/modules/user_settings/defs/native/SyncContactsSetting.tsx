// Module ID: 14379
// Function ID: 14380
// Name: SyncContactsSetting
// Dependencies: [5593, 1372, 7417, 1074, 12177, 14380, 11006, 1115, 2]

// Module 14379 (SyncContactsSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import ContactSyncSettings from "ContactSyncSettings" /* 14380 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import UserStore from "UserStore" /* 1372 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
