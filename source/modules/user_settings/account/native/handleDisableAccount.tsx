// Module ID: 13600
// Function ID: 103056
// Name: handleDisableAccount
// Dependencies: []
// Exports: default

// Module 13600 (handleDisableAccount)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

export default function handleDisableAccount() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (function hasOwnedGuilds() {
    const currentUser = currentUser.getCurrentUser();
    let someResult = null != currentUser;
    if (someResult) {
      const guildsArray = guildsArray.getGuildsArray();
      someResult = guildsArray.some((ownerId) => ownerId.ownerId === currentUser.id);
    }
    return someResult;
  }()) {
    const intl = arg1(dependencyMap[2]).intl;
    const intl2 = arg1(dependencyMap[2]).intl;
    const stringResult = intl.string(arg1(dependencyMap[2]).t.vJiTOL);
    let obj = importDefault(dependencyMap[5]);
    obj = { title: stringResult, body: intl2.string(arg1(dependencyMap[2]).t.UyVVan) };
    obj.show(obj);
    const stringResult1 = intl2.string(arg1(dependencyMap[2]).t.UyVVan);
  } else {
    if (flag) {
      let tmp = function getDeleteAlertProps() {
        const intl = callback(closure_2[2]).intl;
        const obj = {
          onSubmit(password) {
            return callback(closure_2[3]).disableAccount(password, true);
          }
        };
        const formatted = intl.string(callback(closure_2[2]).t.CIGa+7).toUpperCase();
        const intl2 = callback(closure_2[2]).intl;
        const str = intl.string(callback(closure_2[2]).t.CIGa+7);
        obj.title = intl2.string(callback(closure_2[2]).t.8lQ2rR).toUpperCase();
        obj.placeholder = formatted;
        obj.closeOnSuccess = true;
        return obj;
      }();
    } else {
      tmp = function getDisableAlertProps() {
        const intl = callback(closure_2[2]).intl;
        const obj = {
          onSubmit(password) {
            return callback(closure_2[3]).disableAccount(password, false);
          }
        };
        const formatted = intl.string(callback(closure_2[2]).t.CIGa+7).toUpperCase();
        const intl2 = callback(closure_2[2]).intl;
        const str = intl.string(callback(closure_2[2]).t.CIGa+7);
        obj.title = intl2.string(callback(closure_2[2]).t.jf5GGb).toUpperCase();
        obj.placeholder = formatted;
        obj.closeOnSuccess = true;
        return obj;
      }();
    }
    importDefault(dependencyMap[4])(tmp);
  }
};
