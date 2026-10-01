// Module ID: 15574
// Function ID: 15575
// Name: ChooseAccount
// Dependencies: [5, 19, 17, 11906, 11907, 1074, 21, 4836, 576, 1485, 15575, 1241, 11910, 5204, 1115, 1177, 4800, 6615, 6391, 4832, 13409, 15576, 5435, 9091, 8053, 15577, 2]
// Exports: default

// Module 15574 (ChooseAccount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants_mod from "Constants" /* 11907 */;
import Constants_mod2 from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, closure_0;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
let Constants = Constants_mod2;
({ MAX_ACCOUNTS: metroImportDefault, MultiAccountSwitchLocation: metroImportAll } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: c9, AuthStates: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, mainCard: obj3, addAccountLabel: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_16, margin: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
obj4 = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  let Icon;
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj5;
  let obj7;
  let obj = function _handlePressRemove() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let closure_2;
      let formatToPlainString;
      let intl;
      let intl2;
      let intl3;
      let obj6;
      let phEQmS;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let combined;
              const obj5 = { title: intl3.string(closure_0(c3[14]).t.n0Fbg6), body: formatToPlainString(phEQmS, obj6), confirmText: intl.string(closure_0(c3[14]).t.N86XcP), confirmColor: closure_0(c3[15]).ButtonColors.RED, cancelText: intl2.string(closure_0(c3[14]).t["ETE/oC"]), isDismissable: true };
              const _confirm = tmp(c3[13]).confirm;
              const tmp29 = tmp(c3[13]);
              intl3 = closure_0(c3[14]).intl;
              const intl4 = closure_0(c3[14]).intl;
              formatToPlainString = intl4.formatToPlainString;
              phEQmS = closure_0(c3[14]).t.phEQmS;
              if ("0" === closure_0.discriminator) {
                const _HermesInternal2 = HermesInternal;
                combined = "" + tmp26.username;
              } else {
                const _HermesInternal = HermesInternal;
                combined = "" + tmp26.username + "#" + tmp26.discriminator;
              }
              obj6 = { username: combined };
              intl = tmp30(c3[14]).intl;
              intl2 = tmp30(c3[14]).intl;
              c3 = 1;
              c4 = 1;
              const obj7 = { value: _confirm(obj5), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            if (value) {
              obj = tmp(c3[16]);
              obj.hideActionSheet();
              const obj2 = tmp4(c3[12]);
              obj2.removeAccount(closure_0.id);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          c4 = 3;
          throw tmp22;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_13();
  obj = require("useNavigation");
  _require = obj.useNavigation();
  let obj2 = require("useMultiAccount");
  const multiAccountUsers = obj2.useMultiAccountUsers().multiAccountUsers;
  let obj3 = { headerText: intl.string(require("intl").t.bVbB63), subHeader: closure_11(Text, obj4), backgroundImageSource: multiAccountUsers(13409), backgroundImageCover: true, contentStyle: tmp.container, children: closure_12(View, obj5) };
  let tmp2 = multiAccountUsers(6391);
  intl = require("intl").intl;
  obj4 = { variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["0M5fN7"]) };
  Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  obj5 = { style: tmp.mainCard, children: items };
  items = [
    multiAccountUsers.map((user) => {
      let Icon;
      let PressableOpacity;
      let constants3;
      let constants4;
      let obj2;
      let obj3;
      obj = {
        user,
        onPressUser() {
          if (user.tokenStatus === constants.INVALID) {
            user.push(constants4.LOGIN);
            const obj2 = multiAccountUsers(closure_1_3[11]);
            obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
          } else {
            obj = closure_1_2(closure_1_3[12]);
            obj.switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
          }
          return tmp4;
        },
        trailing: closure_1_11(PressableOpacity, obj2)
      };
      const tmp = multiAccountUsers(dependencyMap[21]);
      obj2 = {
        accessibilityRole: "button",
        onPress() {
          let intl;
          let intl2;
          let items;
          obj = multiAccountUsers(closure_1_3[16]);
          obj.hideActionSheet();
          let obj2 = { key: "RemoveAccount", options: items, hasIcons: false };
          const tmp2 = user(closure_1_3[17]);
          const showSimpleActionSheet = tmp2.showSimpleActionSheet;
          const obj3 = {
            label: intl.string(user(closure_1_3[14]).t["DSN+hw"]),
            onPress() {
              if (tokenStatus.tokenStatus === constants.INVALID) {
                user.push(constants4.LOGIN);
                const obj2 = closure_1_1(closure_1_3[11]);
                obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              } else {
                obj = closure_1_2(closure_1_3[12]);
                obj.switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              }
              return tmp4;
            }
          };
          intl = user(closure_1_3[14]).intl;
          items = [obj3, ];
          const obj4 = {
            label: intl2.string(user(closure_1_3[14]).t.lSLMaU),
            onPress() {
              function handlePressRemove(arg0) {
                return closure_1_2(...arguments);
              }
              return handlePressRemove(tokenStatus);
            },
            isDestructive: true
          };
          intl2 = user(closure_1_3[14]).intl;
          items[1] = obj4;
          const result = showSimpleActionSheet(obj2);
        },
        children: closure_1_11(Icon, obj3)
      };
      PressableOpacity = user(dependencyMap[22]).PressableOpacity;
      obj3 = { size: user(dependencyMap[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(dependencyMap[23]), disableColor: true };
      Icon = user(dependencyMap[15]).Icon;
      return closure_1_11(tmp, obj, user.id);
    }),

  ];
  let obj6 = {
    leading: closure_11(Icon, obj7),
    label: intl3.string(require("intl").t.bPP34Q),
    labelStyle: tmp.addAccountLabel,
    onPress: function handlePressAddAccount() {
      let intl;
      let intl2;
      let obj3;
      if (multiAccountUsers.length >= metroImportDefault) {
        const obj2 = { title: intl.string(intl5.t.w7wfXi), body: intl2.formatToPlainString(intl5.t.WOyelG, obj3), isDismissable: true };
        const show = actions_AlertActionCreatorsDefault.show;
        actions_AlertActionCreatorsDefault;
        intl = intl5.intl;
        intl2 = intl5.intl;
        obj3 = { maxNumAccounts: tmp };
        show(obj2);
      } else {
        closure_0.push(constants2.LOGIN);
        obj = AnalyticsUtilsDefault;
        obj.track(constants.LOGIN_VIEWED, { source: "choose_account_add_account" });
      }
    }
  };
  const FormRow = require("Form").FormRow;
  obj7 = { themedColor: multiAccountUsers(576).colors.TEXT_LINK, size: require("native").Icon.Sizes.SMALL_20, source: multiAccountUsers(15577) };
  Icon = require("Form").FormRow.Icon;
  intl3 = require("intl").intl;
  items[1] = closure_11(FormRow, obj6);
  return closure_11(tmp2, obj3);
};
