// Module ID: 13714
// Function ID: 105212
// Name: handleDisableAccount
// Dependencies: [1838, 1849, 1212, 9230, 13699, 4470, 2]
// Exports: default

// Module 13714 (handleDisableAccount)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

export default function handleDisableAccount() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if ((function hasOwnedGuilds() {
    const currentUser = outer1_4.getCurrentUser();
    let someResult = null != currentUser;
    if (someResult) {
      const guildsArray = outer1_3.getGuildsArray();
      someResult = guildsArray.some((ownerId) => ownerId.ownerId === currentUser.id);
    }
    return someResult;
  })()) {
    let intl = require(1212) /* getSystemLocale */.intl;
    let intl2 = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t.vJiTOL);
    let obj = importDefault(4470);
    obj = { title: stringResult, body: intl2.string(require(1212) /* getSystemLocale */.t.UyVVan) };
    obj.show(obj);
    const stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.UyVVan);
  } else {
    if (flag) {
      let tmp = (function getDeleteAlertProps() {
        const intl = outer1_0(outer1_2[2]).intl;
        const obj = {
          onSubmit(password) {
            return outer2_0(outer2_2[3]).disableAccount(password, true);
          }
        };
        const formatted = intl.string(outer1_0(outer1_2[2]).t["CIGa+7"]).toUpperCase();
        const intl2 = outer1_0(outer1_2[2]).intl;
        const str = intl.string(outer1_0(outer1_2[2]).t["CIGa+7"]);
        obj.title = intl2.string(outer1_0(outer1_2[2]).t["8lQ2rR"]).toUpperCase();
        obj.placeholder = formatted;
        obj.closeOnSuccess = true;
        return obj;
      })();
    } else {
      tmp = (function getDisableAlertProps() {
        const intl = outer1_0(outer1_2[2]).intl;
        const obj = {
          onSubmit(password) {
            return outer2_0(outer2_2[3]).disableAccount(password, false);
          }
        };
        const formatted = intl.string(outer1_0(outer1_2[2]).t["CIGa+7"]).toUpperCase();
        const intl2 = outer1_0(outer1_2[2]).intl;
        const str = intl.string(outer1_0(outer1_2[2]).t["CIGa+7"]);
        obj.title = intl2.string(outer1_0(outer1_2[2]).t.jf5GGb).toUpperCase();
        obj.placeholder = formatted;
        obj.closeOnSuccess = true;
        return obj;
      })();
    }
    importDefault(13699)(tmp);
  }
};
