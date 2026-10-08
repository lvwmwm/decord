// Module ID: 16169
// Function ID: 16170
// Name: ChooseAccount
// Dependencies: [5, 19, 17, 12144, 12145, 1085, 21, 5090, 587, 558, 576, 1502, 16170, 1264, 12148, 5298, 1126, 1200, 5054, 6877, 5086, 16171, 6189, 8646, 8555, 16172, 6645, 13915, 2]

// Module 16169 (ChooseAccount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import MultiAccountStore from "MultiAccountStore" /* 12144 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12148 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants_mod from "Constants" /* 12145 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
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
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChooseAccount() {
  let closure_3;
  let closure_4;
  let intl2;
  let items;
  let tmp6;
  let tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(29);
  const tmp4 = closure_13();
  let obj2 = navigation(1502);
  navigation = obj2.useNavigation();
  let obj3 = navigation(16170);
  const multiAccountUsers = obj3.useMultiAccountUsers().multiAccountUsers;
  if (cResult[0] !== navigation) {
    function handlePressUser(tokenStatus) {
      if (tokenStatus.tokenStatus === MultiAccountTokenStatus.INVALID) {
        navigation.push(constants2.LOGIN);
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
      } else {
        const obj = MultiAccountActionCreatorsAll;
        obj.switchAccount(tokenStatus.id, undefined, metroImportAll.CHOOSE_ACCOUNT);
      }
    }
    cResult[0] = navigation;
    cResult[1] = handlePressUser;
    tmp6 = handlePressUser;
  } else {
    tmp6 = cResult[1];
  }
  let closure_2 = tmp6;
  if (cResult[2] === multiAccountUsers.length) {
    let tmp7;
    let tmp10;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp20;
    if (cResult[3] === navigation) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      _require = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
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
            return { value: "IconComponent", done: null };
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
                const obj5 = { title: intl3.string(closure_0(c3[16]).t.n0Fbg6), body: formatToPlainString(phEQmS, obj6), confirmText: intl.string(closure_0(c3[16]).t.N86XcP), confirmColor: closure_0(c3[17]).ButtonColors.RED, cancelText: intl2.string(closure_0(c3[16]).t["ETE/oC"]), isDismissable: true };
                const _confirm = tmp(c3[15]).confirm;
                const tmp29 = tmp(c3[15]);
                intl3 = closure_0(c3[16]).intl;
                const intl4 = closure_0(c3[16]).intl;
                formatToPlainString = intl4.formatToPlainString;
                phEQmS = closure_0(c3[16]).t.phEQmS;
                if ("0" === closure_0.discriminator) {
                  const _HermesInternal2 = HermesInternal;
                  combined = "" + tmp26.username;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + tmp26.username + "#" + tmp26.discriminator;
                }
                obj6 = { username: combined };
                intl = tmp30(c3[16]).intl;
                intl2 = tmp30(c3[16]).intl;
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
                const obj = tmp(c3[18]);
                obj.hideActionSheet();
                const obj2 = tmp4(c3[14]);
                obj2.removeAccount(closure_0.id);
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp22) {
            c4 = 3;
            throw tmp22;
          }
        }
      });
      function handlePressRemove() {
        return closure_0(...arguments);
      }
      cResult[5] = handlePressRemove;
      tmp10 = handlePressRemove;
    } else {
      tmp10 = cResult[5];
    }
    dependencyMap = tmp10;
    if (cResult[6] !== tmp6) {
      function handlePressMore(arg0) {
        let intl;
        let intl2;
        let items;
        let closure_0 = arg0;
        const obj = multiAccountUsers(closure_3[18]);
        obj.hideActionSheet();
        const obj2 = { key: "RemoveAccount", options: items, hasIcons: false };
        const obj3 = {
          label: intl.string(navigation(closure_3[16]).t["DSN+hw"]),
          onPress() {
            return closure_2(closure_0);
          }
        };
        const showSimpleActionSheet = navigation(closure_3[19]).showSimpleActionSheet;
        navigation(closure_3[19]);
        intl = navigation(closure_3[16]).intl;
        items = [obj3, ];
        const obj4 = {
          label: intl2.string(navigation(closure_3[16]).t.lSLMaU),
          onPress() {
            return closure_3(closure_0);
          },
          isDestructive: true
        };
        intl2 = navigation(closure_3[16]).intl;
        items[1] = obj4;
        const result = showSimpleActionSheet(obj2);
      }
      cResult[6] = tmp6;
      cResult[7] = handlePressMore;
      tmp12 = handlePressMore;
    } else {
      tmp12 = cResult[7];
    }
    _asyncToGenerator = tmp12;
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.bVbB63);
      cResult[8] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp(1126).t["0M5fN7"]) };
      const Text = tmp(5086).Text;
      intl2 = tmp(1126).intl;
      const tmp17 = closure_11(Text, obj4);
      cResult[9] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp12) {
      if (cResult[11] === tmp6) {
        let tmp24;
        let tmp23;
        if (cResult[12] === multiAccountUsers) {
          tmp20 = cResult[13];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { themedColor: multiAccountUsers(587).colors.TEXT_LINK, size: tmp(1200).Icon.Sizes.SMALL_20, source: multiAccountUsers(16172) };
          const tmp26 = multiAccountUsers;
          let Icon = tmp(8555).FormRow.Icon;
          const tmp27 = closure_11(Icon, obj5);
          let intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t.bPP34Q);
          cResult[17] = stringResult1;
          cResult[18] = tmp27;
          tmp24 = tmp27;
          tmp23 = stringResult1;
        } else {
          tmp23 = cResult[17];
          tmp24 = cResult[18];
        }
        if (cResult[19] === tmp7) {
          let tmp29;
          if (cResult[20] === tmp4.addAccountLabel) {
            tmp29 = cResult[21];
          }
          if (cResult[22] === tmp4.mainCard) {
            if (cResult[23] === tmp29) {
              let tmp32;
              if (cResult[24] === tmp20) {
                tmp32 = cResult[25];
              }
              if (cResult[26] === tmp4.container) {
                let tmp36;
                if (cResult[27] === tmp32) {
                  tmp36 = cResult[28];
                }
                return tmp36;
              }
              let obj6 = { headerText: tmp13, subHeader: tmp15, backgroundImageSource: multiAccountUsers(13915), backgroundImageCover: true, contentStyle: tmp18, children: tmp32 };
              cResult[26] = tmp4.container;
              cResult[27] = tmp32;
              const tmp39 = multiAccountUsers(6645);
              const tmp40 = closure_11(tmp39, obj6);
              class R {
                constructor(user) {
                  let Icon;
                  let PressableOpacity;
                  let obj2;
                  let obj3;
                  let closure_0 = user;
                  const obj = {
                    user,
                    onPressUser() {
                      return closure_2(user);
                    },
                    trailing: closure_1_11(PressableOpacity, obj2)
                  };
                  obj2 = {
                    accessibilityRole: "button",
                    onPress() {
                      return closure_4(user);
                    },
                    children: closure_1_11(Icon, obj3)
                  };
                  const tmp = multiAccountUsers(closure_3[21]);
                  PressableOpacity = navigation(closure_3[22]).PressableOpacity;
                  obj3 = { size: navigation(closure_3[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_3[23]), disableColor: true };
                  Icon = navigation(closure_3[17]).Icon;
                  return closure_1_11(tmp, obj, user.id);
                }
              }
              tmp36 = tmp40;
            }
          }
          let obj7 = { style: tmp19, children: items };
          items = [tmp20, tmp29];
          const tmp35 = closure_12(View, obj7);
          cResult[22] = tmp4.mainCard;
          cResult[23] = tmp29;
          cResult[24] = tmp20;
          class R {
            constructor(user) {
              let Icon;
              let PressableOpacity;
              let obj2;
              let obj3;
              let closure_0 = user;
              const obj = {
                user,
                onPressUser() {
                  return closure_2(user);
                },
                trailing: closure_1_11(PressableOpacity, obj2)
              };
              obj2 = {
                accessibilityRole: "button",
                onPress() {
                  return closure_4(user);
                },
                children: closure_1_11(Icon, obj3)
              };
              const tmp = multiAccountUsers(closure_3[21]);
              PressableOpacity = navigation(closure_3[22]).PressableOpacity;
              obj3 = { size: navigation(closure_3[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_3[23]), disableColor: true };
              Icon = navigation(closure_3[17]).Icon;
              return closure_1_11(tmp, obj, user.id);
            }
          }
          cResult[25] = tmp35;
          tmp32 = tmp35;
        }
        const tmp30 = closure_11;
        let obj8 = { leading: tmp24, label: tmp23, labelStyle: tmp4.addAccountLabel, onPress: tmp7 };
        cResult[19] = tmp7;
        cResult[20] = tmp4.addAccountLabel;
        const tmp31 = closure_11(tmp(8555).FormRow, obj8);
        class R {
          constructor(user) {
            let Icon;
            let PressableOpacity;
            let obj2;
            let obj3;
            let closure_0 = user;
            const obj = {
              user,
              onPressUser() {
                return closure_2(user);
              },
              trailing: closure_1_11(PressableOpacity, obj2)
            };
            obj2 = {
              accessibilityRole: "button",
              onPress() {
                return closure_4(user);
              },
              children: closure_1_11(Icon, obj3)
            };
            const tmp = multiAccountUsers(closure_3[21]);
            PressableOpacity = navigation(closure_3[22]).PressableOpacity;
            obj3 = { size: navigation(closure_3[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_3[23]), disableColor: true };
            Icon = navigation(closure_3[17]).Icon;
            return closure_1_11(tmp, obj, user.id);
          }
        }
        tmp29 = tmp31;
      }
    }
    if (cResult[14] === tmp12) {
      let tmp21;
      if (cResult[15] === tmp6) {
        tmp21 = cResult[16];
      }
      const mapped = multiAccountUsers.map(tmp21);
      cResult[10] = tmp12;
      cResult[11] = tmp6;
      cResult[12] = multiAccountUsers;
      cResult[13] = mapped;
      tmp20 = mapped;
    }
    class R {
      constructor(user) {
        let Icon;
        let PressableOpacity;
        let obj2;
        let obj3;
        let closure_0 = user;
        const obj = {
          user,
          onPressUser() {
            return closure_2(user);
          },
          trailing: closure_1_11(PressableOpacity, obj2)
        };
        obj2 = {
          accessibilityRole: "button",
          onPress() {
            return closure_4(user);
          },
          children: closure_1_11(Icon, obj3)
        };
        const tmp = multiAccountUsers(closure_3[21]);
        PressableOpacity = navigation(closure_3[22]).PressableOpacity;
        obj3 = { size: navigation(closure_3[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_3[23]), disableColor: true };
        Icon = navigation(closure_3[17]).Icon;
        return closure_1_11(tmp, obj, user.id);
      }
    }
    cResult[14] = tmp12;
    cResult[15] = tmp6;
    cResult[16] = R;
    tmp21 = R;
  }
  cResult[2] = multiAccountUsers.length;
  cResult[3] = navigation;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function ChooseAccount() {
  let Icon;
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj5;
  let obj7;
  let obj = function _handlePressRemove2() {
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
          return { value: "IconComponent", done: null };
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
              const obj5 = { title: intl3.string(closure_0(c3[16]).t.n0Fbg6), body: formatToPlainString(phEQmS, obj6), confirmText: intl.string(closure_0(c3[16]).t.N86XcP), confirmColor: closure_0(c3[17]).ButtonColors.RED, cancelText: intl2.string(closure_0(c3[16]).t["ETE/oC"]), isDismissable: true };
              const _confirm = tmp(c3[15]).confirm;
              const tmp29 = tmp(c3[15]);
              intl3 = closure_0(c3[16]).intl;
              const intl4 = closure_0(c3[16]).intl;
              formatToPlainString = intl4.formatToPlainString;
              phEQmS = closure_0(c3[16]).t.phEQmS;
              if ("0" === closure_0.discriminator) {
                const _HermesInternal2 = HermesInternal;
                combined = "" + tmp26.username;
              } else {
                const _HermesInternal = HermesInternal;
                combined = "" + tmp26.username + "#" + tmp26.discriminator;
              }
              obj6 = { username: combined };
              intl = tmp30(c3[16]).intl;
              intl2 = tmp30(c3[16]).intl;
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
              obj = tmp(c3[18]);
              obj.hideActionSheet();
              const obj2 = tmp4(c3[14]);
              obj2.removeAccount(closure_0.id);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
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
  let obj3 = { headerText: intl.string(require("intl").t.bVbB63), subHeader: closure_11(Text, obj4), backgroundImageSource: multiAccountUsers(13915), backgroundImageCover: true, contentStyle: tmp.container, children: closure_12(View, obj5) };
  let tmp2 = multiAccountUsers(6645);
  intl = require("intl").intl;
  obj4 = { variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["0M5fN7"]) };
  Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  obj5 = { style: tmp.mainCard, children: items };
  items = [
    multiAccountUsers.map((user) => {
      let Icon;
      let PressableOpacity;
      let constants4;
      let obj2;
      let obj3;
      obj = {
        user,
        onPressUser() {
          if (user.tokenStatus === constants.INVALID) {
            user.push(constants4.LOGIN);
            const obj2 = multiAccountUsers(closure_1_3[13]);
            obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
          } else {
            obj = closure_1_2(closure_1_3[14]);
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
          obj = multiAccountUsers(closure_1_3[18]);
          obj.hideActionSheet();
          let obj2 = { key: "RemoveAccount", options: items, hasIcons: false };
          const tmp2 = user(closure_1_3[19]);
          const showSimpleActionSheet = tmp2.showSimpleActionSheet;
          const obj3 = {
            label: intl.string(user(closure_1_3[16]).t["DSN+hw"]),
            onPress() {
              if (tokenStatus.tokenStatus === constants.INVALID) {
                user.push(constants4.LOGIN);
                const obj2 = closure_1_1(closure_1_3[13]);
                obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              } else {
                obj = closure_1_2(closure_1_3[14]);
                obj.switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              }
              return tmp4;
            }
          };
          intl = user(closure_1_3[16]).intl;
          items = [obj3, ];
          const obj4 = {
            label: intl2.string(user(closure_1_3[16]).t.lSLMaU),
            onPress() {
              function handlePressRemove(arg0) {
                return closure_1_2(...arguments);
              }
              return handlePressRemove(tokenStatus);
            },
            isDestructive: true
          };
          intl2 = user(closure_1_3[16]).intl;
          items[1] = obj4;
          const result = showSimpleActionSheet(obj2);
        },
        children: closure_1_11(Icon, obj3)
      };
      PressableOpacity = user(dependencyMap[22]).PressableOpacity;
      obj3 = { size: user(dependencyMap[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(dependencyMap[23]), disableColor: true };
      Icon = user(dependencyMap[17]).Icon;
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
  obj7 = { themedColor: multiAccountUsers(587).colors.TEXT_LINK, size: require("native").Icon.Sizes.SMALL_20, source: multiAccountUsers(16172) };
  Icon = require("Form").FormRow.Icon;
  intl3 = require("intl").intl;
  items[1] = closure_11(FormRow, obj6);
  return closure_11(tmp2, obj3);
});
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default tmp7;
