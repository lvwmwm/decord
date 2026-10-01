// Module ID: 17278
// Function ID: 17279
// Name: VerificationModal
// Dependencies: [5, 19, 17, 17279, 2037, 1372, 1074, 21, 4836, 1177, 17280, 1115, 5281, 1486, 1249, 5936, 6795, 9091, 6615, 6010, 17284, 6006, 6021, 6018, 6403, 6465, 6466, 6007, 17285, 6499, 6414, 504, 4800, 4701, 6421, 2]
// Exports: default

// Module 17278 (VerificationModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1486 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PhoneVerificationStore from "PhoneVerificationStore" /* 17279 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
function PhoneThenEmailInterstitial(navigation) {
  let intl3;
  navigation = navigation.navigation;
  const tmp = closure_12();
  const EmptyState = navigation(1177).EmptyState;
  const intl = navigation(1115).intl;
  const intl2 = navigation(1115).intl;
  ({
    text: intl3.string(navigation(1115).t["3oK4qw"]),
    onPress() {
      let ENTER_EMAIL;
      const currentUser = UserStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      if (null != email) {
        ENTER_EMAIL = constants.RESEND_EMAIL;
      } else {
        ENTER_EMAIL = constants.ENTER_EMAIL;
      }
      const dispatch = navigation.dispatch;
      const StackActions = Link.StackActions;
      dispatch(StackActions.push(ENTER_EMAIL));
    }
  });
  const Button = navigation(5281).Button;
  intl3 = navigation(1115).intl;
  return <EmptyState Illustration={navigation(17280).VerifyPhone} title={intl.string(navigation(1115).t.KLnLIP)} body={intl2.string(navigation(1115).t.XGbCq3)}>{null}</EmptyState>;
}
const View = react_native.View;
({ UserRequiredActions: c9, VerificationModalScenes: c10 } = Constants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let result = size.fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let countrySelectorOpened;
  let stateFromStores;
  let obj = stateFromStores(504);
  let items = [PhoneVerificationStore];
  stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const items = [];
    const obj = { name: constants.OVERVIEW };
    items[0] = obj;
    const tmp2 = stateFromStores;
    if (tmp2) {
      const obj2 = { name: tmp.ADD_PHONE };
      items.push(obj2);
    }
    return items;
  }, items1);
  const effect = react.useEffect(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = stateFromStores(dependencyMap[33]);
    obj2.dismissKeyboard();
  }, []);
  const Navigator = stateFromStores(6421).Navigator;
  let intl = stateFromStores(1115).intl;
  return <Navigator screens={react.useMemo(() => {
    let obj10;
    let obj13;
    let obj16;
    let obj19;
    let obj22;
    let obj25;
    let obj28;
    let obj3;
    let obj31;
    let obj34;
    let obj37;
    let obj4;
    let obj6;
    let obj7;
    let obj9;
    let obj = {};
    let obj2 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: obj3,
      headerTitle: obj4.getHeaderNoTitle(),
      render() {
        return null;
      }
    };
    const CHANGE_EMAIL_COLLECT_REASONS = constants.CHANGE_EMAIL_COLLECT_REASONS;
    obj3 = { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
    obj4 = stateFromStores(dependencyMap[15]);
    obj[CHANGE_EMAIL_COLLECT_REASONS] = obj2;
    let obj5 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: obj6,
      headerTitle: obj7.getHeaderNoTitle(),
      render() {
        return null;
      }
    };
    const CHANGE_EMAIL_WARNING = constants.CHANGE_EMAIL_WARNING;
    obj6 = { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
    obj7 = stateFromStores(dependencyMap[15]);
    obj[CHANGE_EMAIL_WARNING] = obj5;
    let obj8 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: obj9,
      gestureEnabled: false,
      headerLeft() {
        return null;
      },
      headerTitle: obj10.getHeaderNoTitle(),
      headerRight() {
        let intl;
        let obj = {
          source: closure_1_1(closure_1_2[17]),
          accessibilityLabel: intl.string(stateFromStores(closure_1_2[11]).t.PdRCRg),
          onPress() {
            let intl;
            let items;
            let obj = { key: "VerificationOverviewMore", options: items, hasIcons: false };
            const obj2 = {
              label: intl.string(closure_1_0(closure_1_2[11]).t["2jxGer"]),
              isDestructive: true,
              onPress() {
                const obj = closure_1_1(closure_1_2[19]);
                return obj.logout("verification_modal");
              }
            };
            const showSimpleActionSheet = closure_1_0(closure_1_2[18]).showSimpleActionSheet;
            closure_1_0(closure_1_2[18]);
            intl = closure_1_0(closure_1_2[11]).intl;
            items = [obj2];
            const result = showSimpleActionSheet(obj);
          }
        };
        const HeaderActionButton = stateFromStores(closure_1_2[16]).HeaderActionButton;
        intl = stateFromStores(closure_1_2[11]).intl;
        return closure_1_11(HeaderActionButton, obj);
      },
      render() {
        return closure_1_11(closure_1_1(closure_1_2[20]), {});
      }
    };
    const OVERVIEW = constants.OVERVIEW;
    obj9 = { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
    obj[OVERVIEW] = obj8;
    obj10 = stateFromStores(dependencyMap[15]);
    const RESEND_EMAIL = constants.RESEND_EMAIL;
    const obj11 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL },
      headerTitle: obj13.getHeaderNoTitle(),
      render() {
        return closure_1_11(closure_1_1(closure_1_2[21]), {});
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL });
    obj[RESEND_EMAIL] = obj11;
    obj13 = stateFromStores(dependencyMap[15]);
    const CHANGE_EMAIL_COMPLETE = constants.CHANGE_EMAIL_COMPLETE;
    const obj14 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL },
      headerTitle: obj16.getHeaderNoTitle(),
      render() {
        return closure_1_11(closure_1_1(closure_1_2[21]), {});
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL });
    obj[CHANGE_EMAIL_COMPLETE] = obj14;
    obj16 = stateFromStores(dependencyMap[15]);
    const CONFIRM_EMAIL_CHANGE_CODE = constants.CONFIRM_EMAIL_CHANGE_CODE;
    const obj17 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE },
      headerTitle: obj19.getHeaderNoTitle(),
      render() {
        return closure_1_11(closure_1_1(closure_1_2[22]), { isChangeEmail: false });
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE });
    obj[CONFIRM_EMAIL_CHANGE_CODE] = obj17;
    obj19 = stateFromStores(dependencyMap[15]);
    const CONFIRM_EMAIL_CHANGE_START = constants.CONFIRM_EMAIL_CHANGE_START;
    const obj20 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START },
      headerTitle: obj22.getHeaderNoTitle(),
      render() {
        return closure_1_11(closure_1_1(closure_1_2[23]), {});
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START });
    obj[CONFIRM_EMAIL_CHANGE_START] = obj20;
    obj22 = stateFromStores(dependencyMap[15]);
    const ENTER_EMAIL = constants.ENTER_EMAIL;
    const obj23 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL },
      headerTitle: obj25.getHeaderNoTitle(),
      render() {
        return closure_1_11(closure_1_1(closure_1_2[24]), { isChangeEmail: false });
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL });
    obj[ENTER_EMAIL] = obj23;
    obj25 = stateFromStores(dependencyMap[15]);
    const ADD_PHONE = constants.ADD_PHONE;
    const obj26 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE },
      headerTitle: obj28.getHeaderNoTitle(),
      render(arg0, arg1) {
        let closure_0 = arg1;
        let obj = {
          reason: closure_0(closure_2[26]).ChangePhoneReason.USER_ACTION_REQUIRED,
          onComplete(phone) {
            let obj = {
              phone,
              onVerified(arg0) {
                let constants2;
                navigation = arg0;
                let obj = {
                  hideUnverifiedBanner: true,
                  onSubmit: function() {
                    return closure_2(...arguments);
                  },
                  onSuccess: function() {
                    return closure_1(...arguments);
                  }
                };
                const push = navigation.push;
                const VERIFY_PASSWORD = constants.VERIFY_PASSWORD;
                let closure_2 = closure_1_3(function*(arg0, value) {
                  closure_0 = arg0;
                  if (c1 === 2) {
                    c1 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    let c4;
                    try {
                      c1 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          c4 = 1;
                          const isPhoneReverification = v3(closure_2[27]).isPhoneReverification;
                          const tmp18 = v3(closure_2[27]);
                          currentUser = currentUser.getCurrentUser();
                          const result = isPhoneReverification(currentUser, closure_2_7.getAction());
                          const obj9 = v3(closure_2[26]);
                          if (result) {
                            c2 = 3;
                            c1 = 1;
                            const obj4 = { value: obj9.reverifyPhone(closure_0, closure_0, closure_0(closure_2[26]).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                            return obj4;
                          } else {
                            c2 = 2;
                            c1 = 1;
                            const obj5 = { value: obj9.addPhone(closure_0, closure_0, closure_0(closure_2[26]).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                            return obj5;
                          }
                        }
                      } else if (1 === c2) {
                        c4 = 0;
                        c1 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        if (2 === c2) {
                          if (arg0 === 1) {
                            c1 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c1 = 3;
                            const obj7 = { value, done: true };
                            return obj7;
                          }
                        } else if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 0;
                          c1 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        c4 = 0;
                        c1 = 3;
                        const obj8 = { value, done: true };
                        return obj8;
                      }
                    } catch (tmp9) {
                      value = tmp9;
                      if (0 === c4) {
                        c1 = 3;
                        throw tmp9;
                      } else {
                        c2 = 1;
                      }
                    }
                  }
                });
                let closure_1 = closure_1_3(function*(arg0, value) {
                  let obj2;
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
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
                      c2 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_0 = tmp3;
                          c1 = 1;
                          c2 = 1;
                          const obj5 = { value: obj2.waitUntil(() => action.getAction() !== constants.REQUIRE_VERIFIED_PHONE), done: false };
                          obj2 = closure_0(closure_2[28]);
                          return obj5;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        if (closure_2_7.getAction() === constants.REQUIRE_VERIFIED_EMAIL) {
                          closure_0.push(constants2.PHONE_THEN_EMAIL_INTERSTITIAL);
                        } else {
                          closure_0.push(constants2.OVERVIEW);
                        }
                        c2 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp14) {
                      c2 = 3;
                      throw tmp14;
                    }
                  }
                });
                push(VERIFY_PASSWORD, obj);
              }
            };
            return navigation.push(constants.VERIFY_PHONE, obj);
          }
        };
        const tmp = closure_1(closure_2[25]);
        const merged = Object.assign(arg0);
        return closure_11(tmp, obj);
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE });
    obj[ADD_PHONE] = obj26;
    obj28 = stateFromStores(dependencyMap[15]);
    const VERIFY_PHONE = constants.VERIFY_PHONE;
    const obj29 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE },
      headerTitle: obj31.getHeaderNoTitle(),
      render(arg0) {
        const obj = { disableKeyboardAvoidingView: true };
        const tmp = closure_1_1(closure_1_2[29]);
        const merged = Object.assign(arg0);
        return closure_1_11(tmp, obj);
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE });
    obj[VERIFY_PHONE] = obj29;
    obj31 = stateFromStores(dependencyMap[15]);
    let VERIFY_PASSWORD = constants.VERIFY_PASSWORD;
    const obj32 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD },
      headerTitle: obj34.getHeaderNoTitle(),
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(closure_1_2[30]);
        const merged = Object.assign(arg0);
        return closure_1_11(tmp, obj);
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD });
    obj[VERIFY_PASSWORD] = obj32;
    obj34 = stateFromStores(dependencyMap[15]);
    const PHONE_THEN_EMAIL_INTERSTITIAL = constants.PHONE_THEN_EMAIL_INTERSTITIAL;
    const obj35 = {
      impressionName: stateFromStores(dependencyMap[14]).ImpressionNames.USER_VERIFICATION_MODAL,
      impressionProperties: { impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL },
      headerTitle: obj37.getHeaderNoTitle(),
      render(arg0, navigation) {
        const obj = { navigation };
        return closure_1_11(closure_1_13, obj);
      }
    };
    ({ impression_group: stateFromStores(dependencyMap[14]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL });
    obj[PHONE_THEN_EMAIL_INTERSTITIAL] = obj35;
    obj37 = stateFromStores(dependencyMap[15]);
    return obj;
  }, [])} initialRouteStack={memo} headerBackTitle={intl.string(stateFromStores(1115).t["13/7kX"])} />;
};
