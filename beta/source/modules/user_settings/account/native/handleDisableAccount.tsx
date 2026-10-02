// Module ID: 14333
// Function ID: 14334
// Name: handleDisableAccount
// Dependencies: [2073, 1378, 1127, 6405, 14318, 5204, 2]
// Exports: default

// Module 14333 (handleDisableAccount)
import intl5 from "intl" /* 1127 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14318 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

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
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  if (someResult) {
    const stringResult = string(t.vJiTOL);
    const intl4 = tmp4(1127).intl;
    let obj = { title: stringResult, body: intl4.string(intl5.t.UyVVan) };
    const stringResult1 = intl4.string(intl5.t.UyVVan);
    const obj3 = AlertActionCreatorsDefault;
    obj3.show(obj);
  } else {
    let tmp8;
    const str = string(t["CIGa+7"]);
    const formatted = str.toUpperCase();
    const obj2 = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj2.onSubmit = function onSubmit(password) {
        const obj = UserSettingsAccountActionCreators;
        return obj.disableAccount(password, true);
      };
      const intl3 = tmp4(1127).intl;
      const str3 = intl3.string(intl5.t["8lQ2rR"]);
      obj2.title = str3.toUpperCase();
      obj2.placeholder = formatted;
      tmp8 = obj2;
    } else {
      obj2.onSubmit = function onSubmit(password) {
        const obj = UserSettingsAccountActionCreators;
        return obj.disableAccount(password, false);
      };
      const intl2 = tmp4(1127).intl;
      const str2 = intl2.string(intl5.t.jf5GGb);
      obj2.title = str2.toUpperCase();
      obj2.placeholder = formatted;
      tmp8 = obj2;
    }
    showUserSettingsInputAlertDefault(tmp8);
  }
};
