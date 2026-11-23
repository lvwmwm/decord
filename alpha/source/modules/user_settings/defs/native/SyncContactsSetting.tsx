// Module ID: 16145
// Function ID: 16146
// Name: SyncContactsSetting
// Dependencies: [6689, 1386, 8712, 1071, 13585, 16146, 11937, 1112, 2]

// Module 16145 (SyncContactsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13585 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16146 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6689 */;
import UserStore from "UserStore" /* 1386 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
