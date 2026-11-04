// Module ID: 16747
// Function ID: 16748
// Name: SyncContactsSetting
// Dependencies: [6572, 1383, 8432, 1072, 14251, 16748, 11540, 1113, 2]

// Module 16747 (SyncContactsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14251 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16748 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import UserStore from "UserStore" /* 1383 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
