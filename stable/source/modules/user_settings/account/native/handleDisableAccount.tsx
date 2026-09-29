// Module ID: 15090
// Function ID: 15091
// Name: handleDisableAccount
// Dependencies: [2063, 1372, 1115, 7261, 15075, 5140, 2]
// Exports: default

// Module 15090 (handleDisableAccount)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5140 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 15075 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

export default function handleDisableAccount() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let someResult = null != currentUser;
  if (someResult) {
    const guildsArray = GuildStore.getGuildsArray();
    someResult = guildsArray.some((ownerId) => ownerId.ownerId === currentUser.id);
  }
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (someResult) {
    const intl4 = tmp4(1115).intl;
    const stringResult = string(t.vJiTOL);
    const stringResult1 = intl4.string(tmp4(1115).t.UyVVan);
    const obj = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj);
  } else {
    const formatted = string(t["CIGa+7"]).toUpperCase();
    const obj2 = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj2.onSubmit = function onSubmit(password) {
        return currentUser(7261).disableAccount(password, true);
      };
      const intl3 = tmp4(1115).intl;
      obj2.title = intl3.string(tmp4(1115).t["8lQ2rR"]).toUpperCase();
      obj2.placeholder = formatted;
      let tmp8 = obj2;
      const str3 = intl3.string(tmp4(1115).t["8lQ2rR"]);
    } else {
      obj2.onSubmit = function onSubmit(password) {
        return currentUser(7261).disableAccount(password, false);
      };
      const intl2 = tmp4(1115).intl;
      obj2.title = intl2.string(tmp4(1115).t.jf5GGb).toUpperCase();
      obj2.placeholder = formatted;
      tmp8 = obj2;
      const str2 = intl2.string(tmp4(1115).t.jf5GGb);
    }
    showUserSettingsInputAlertDefault(tmp8);
    const str = string(t["CIGa+7"]);
  }
};
