// Module ID: 13623
// Function ID: 103208
// Name: toggle
// Dependencies: []

// Module 13623 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const PlatformTypes = arg1(dependencyMap[3]).PlatformTypes;
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.uSvEy7);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = arg1(dependencyMap[4]).useContactSyncAccount();
    const obj = arg1(dependencyMap[4]);
    return arg1(dependencyMap[4]).isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    const localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    const currentUser = currentUser.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    arg1(dependencyMap[5]).handleSyncContacts(localAccount, phone, arg0);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;
