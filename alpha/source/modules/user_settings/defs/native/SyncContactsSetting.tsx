// Module ID: 16058
// Function ID: 16059
// Name: SyncContactsSetting
// Dependencies: [6568, 1388, 8593, 1072, 13495, 16059, 11875, 1113, 2]

// Module 16058 (SyncContactsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13495 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16059 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6568 */;
import UserStore from "UserStore" /* 1388 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
