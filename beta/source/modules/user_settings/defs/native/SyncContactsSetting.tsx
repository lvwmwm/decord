// Module ID: 15120
// Function ID: 15121
// Name: SyncContactsSetting
// Dependencies: [5532, 1376, 8270, 1078, 558, 568, 12863, 15121, 11630, 1119, 2]

// Module 15120 (SyncContactsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12863 */;
import ContactSyncSettings from "ContactSyncSettings" /* 15121 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5532 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const PlatformTypes = fn(1078).PlatformTypes;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const isContactSyncEnabledResult = ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    let tmp5 = isContactSyncEnabledResult;
    const tmpResult = ContactSyncUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
  return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8270).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    if (cResult[0] !== contactSyncAccount) {
      const isContactSyncEnabledResult = ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
      cResult[0] = contactSyncAccount;
      cResult[1] = isContactSyncEnabledResult;
      let tmp5 = isContactSyncEnabledResult;
      const tmpResult = ContactSyncUtils;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }) : (() => {
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  }),
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
