// Module ID: 13584
// Function ID: 102963
// Name: route
// Dependencies: []

// Module 13584 (route)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[2]);
const NOOP_NULL = tmp2.NOOP_NULL;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.xZEzbu);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  usePredicate: arg1(dependencyMap[8]).useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    return React.useCallback((arg0) => {
      const obj = {
        onSubmit(password) {
          const result = callback(closure_2[3]).sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            function onConfirmBackups(closure_0) {
              const obj = { onSubmit() { ... } };
              const intl = callback(closure_2[4]).intl;
              obj.title = intl.string(callback(closure_2[4]).t.mGppp/);
              const intl2 = callback(closure_2[4]).intl;
              obj.helpText = intl2.string(callback(closure_2[4]).t.37S9yU);
              const intl3 = callback(closure_2[4]).intl;
              obj.inputLabel = intl3.string(callback(closure_2[4]).t.TjGb4Q);
              obj.closeOnSuccess = true;
              obj.onSuccess = closure_0;
              obj.secureTextEntry = false;
              const intl4 = callback(closure_2[4]).intl;
              obj.actionText = intl4.string(callback(closure_2[4]).t.geKm7t);
              obj.confirmColor = callback(closure_2[5]).ButtonColors.BRAND;
              obj.useKeyboardAwareWrapper = true;
              callback2(closure_2[6])(obj);
            }(closure_0);
          });
        },
        onSuccess: closure_4
      };
      const intl = arg0(closure_2[4]).intl;
      obj.title = intl.string(arg0(closure_2[4]).t.PsQmzU);
      const intl2 = arg0(closure_2[4]).intl;
      obj.inputLabel = intl2.string(arg0(closure_2[4]).t.CIGa+7);
      obj.closeOnSuccess = false;
      const intl3 = arg0(closure_2[4]).intl;
      obj.actionText = intl3.string(arg0(closure_2[4]).t.PDTjLN);
      obj.confirmColor = arg0(closure_2[5]).ButtonColors.BRAND;
      obj.useKeyboardAwareWrapper = true;
      callback(closure_2[6])(obj);
      return false;
    }, []);
  },
  screen: obj
};
obj = {
  route: tmp2.UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
  getComponent() {
    return arg1(dependencyMap[9]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default route;
