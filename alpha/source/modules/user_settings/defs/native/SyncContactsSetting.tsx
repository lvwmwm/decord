// Module ID: 16134
// Function ID: 16135
// Name: SyncContactsSetting
// Dependencies: [6500, 1392, 8332, 1087, 558, 576, 13583, 16135, 11208, 1128, 2]

// Module 16134 (SyncContactsSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13583 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16135 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6500 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const PlatformTypes = Constants.PlatformTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContactSyncSettingValue() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = ContactSyncUtils;
  const contactSyncAccount = obj2.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const tmpResult = ContactSyncUtils;
    const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    tmp5 = isContactSyncEnabledResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useContactSyncSettingValue() {
  const obj = ContactSyncUtils;
  const contactSyncAccount = obj.useContactSyncAccount();
  const obj2 = ContactSyncUtils;
  return obj2.isContactSyncEnabled(contactSyncAccount);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.uSvEy7);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp2,
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
