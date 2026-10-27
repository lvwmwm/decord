// Module ID: 16173
// Function ID: 16174
// Name: SyncContactsSetting
// Dependencies: [6501, 1389, 8331, 1084, 558, 576, 13599, 16174, 11212, 1125, 2]

// Module 16173 (SyncContactsSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13599 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16174 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6501 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
