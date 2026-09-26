// Module ID: 15124
// Function ID: 15125
// Name: SyncContactsSetting
// Dependencies: [5530, 1372, 8265, 1074, 12962, 15125, 11754, 1115, 2]

// Module 15124 (SyncContactsSetting)
import util from "util" /* 1115 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12962 */;
import ContactSyncSettings from "ContactSyncSettings" /* 15125 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5530 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const SettingBuilders = fn(11754);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8265).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    const currentUser = UserStore.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    ContactSyncSettings.handleSyncContacts(localAccount, phone, arg0);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;
