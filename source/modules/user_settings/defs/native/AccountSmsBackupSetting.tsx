// Module ID: 13578
// Function ID: 102935
// Name: useAccountSMSBackupSettingDescription
// Dependencies: []

// Module 13578 (useAccountSMSBackupSettingDescription)
function useAccountSMSBackupSettingDescription() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let sMSBackupDisabledMessage = null;
  if (null != stateFromStores) {
    sMSBackupDisabledMessage = arg1(dependencyMap[5]).getSMSBackupDisabledMessage(stateFromStores);
    const obj2 = arg1(dependencyMap[5]);
  }
  return sMSBackupDisabledMessage;
}
let closure_3 = importDefault(dependencyMap[0]);
const UserFlags = arg1(dependencyMap[2]).UserFlags;
let closure_5 = arg1(dependencyMap[3]).PHONE_VERIFICATION_MODAL_KEY;
let obj = arg1(dependencyMap[14]);
let closure_6 = obj.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = arg1(dependencyMap[6]).intl;
    const formatted = intl2.string(arg1(dependencyMap[6]).t.CIGa+7).toUpperCase();
    const intl3 = arg1(dependencyMap[6]).intl;
    const str2 = intl2.string(arg1(dependencyMap[6]).t.CIGa+7);
    let obj = {};
    const formatted1 = intl3.string(arg1(dependencyMap[6]).t.wlfmlR).toUpperCase();
    obj.onSubmit = importDefault(dependencyMap[7]).disableSMS;
    obj.title = formatted1;
    obj.placeholder = formatted;
    obj.closeOnSuccess = true;
    importDefault(dependencyMap[8])(obj);
    const str3 = intl3.string(arg1(dependencyMap[6]).t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = arg1(dependencyMap[6]).intl;
        const formatted2 = intl.string(arg1(dependencyMap[6]).t.DZQe23).toUpperCase();
        const str = intl.string(arg1(dependencyMap[6]).t.DZQe23);
        obj = { title: formatted2 };
        const obj3 = importDefault(dependencyMap[9]);
        importDefault(dependencyMap[9]).confirm(obj).then((arg0) => {
          if (arg0) {
            callback(closure_2[7]).enableSMS();
            const obj = callback(closure_2[7]);
          }
        });
        const confirmResult = importDefault(dependencyMap[9]).confirm(obj);
      }
    }
    obj = importDefault(dependencyMap[10]);
    const obj1 = { reason: arg1(dependencyMap[13]).ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(arg1(dependencyMap[12])(dependencyMap[11], dependencyMap.paths), obj1, closure_5);
    const tmp5 = arg1(dependencyMap[12])(dependencyMap[11], dependencyMap.paths);
  }
}, 200);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.uHAJ5v);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    return null != useAccountSMSBackupSettingDescription();
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    let hasFlagResult;
    const items = [closure_3];
    const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
    if (null != stateFromStores) {
      hasFlagResult = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    return null != hasFlagResult && hasFlagResult;
  },
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      callback(obj);
    }
  },
  useDescription: useAccountSMSBackupSettingDescription,
  usePredicate: arg1(dependencyMap[16]).useIsTOTPEnabled
};
const toggle = arg1(dependencyMap[15]).createToggle(obj);
const obj2 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;
