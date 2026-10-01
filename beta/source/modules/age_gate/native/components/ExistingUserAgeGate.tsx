// Module ID: 17088
// Function ID: 17089
// Name: ExistingUserAgeGate
// Dependencies: [5, 32, 19, 17, 2037, 1372, 1099, 17086, 1074, 21, 4836, 1485, 504, 1241, 1115, 2111, 38, 15584, 5039, 4421, 15606, 6544, 4832, 17089, 5281, 2]
// Exports: default

// Module 17088 (ExistingUserAgeGate)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 17086 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import UserStore from "UserStore" /* 1372 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Blocked, c0, c1, closure_1, closure_2, closure_3, navigation, shouldShowError;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let react = react_mod;
const View = react_native.View;
({ AgeGateAnalyticAction: c9, AgeGateSource: c10 } = AgeGateConstants);
let closure_11 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(onSuccess) {
  let Button;
  let FAMILY_CENTER;
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let Pawtect;
  let action;
  let c7;
  let c8;
  let closure_5;
  let currentUser;
  let intl5;
  let intl6;
  let items5;
  let obj11;
  let obj5;
  let obj7;
  let tmp13;
  let tmp15;
  onSuccess = onSuccess.onSuccess;
  const onClose = onSuccess.onClose;
  const source = onSuccess.source;
  react = undefined;
  let date;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    return obj(...arguments);
  }
  let obj = function _submitBirthday() {
    const obj = _asyncToGenerator(async (shouldShowError) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (async (arg0, value) => {
        let obj10;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                shouldShowError = undefined;
                closure_1(closure_2[16])(null != shouldShowError, "Cannot submit null birthday.");
                shouldShowError = false;
                c4 = 1;
                _undefined(null);
                _undefined2(true);
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj10.submitDateOfBirth(shouldShowError, source), done: false };
                obj10 = shouldShowError(closure_2[17]);
                return obj5;
              }
            } else {
              if (1 === c5) {
                let message;
                c4 = 0;
                closure_1 = closure_3;
                if (null != closure_1.body) {
                  if (null != closure_1.body.date_of_birth) {
                    const push = closure_130_3.push;
                    Blocked = Blocked.Blocked;
                    const obj6 = { onClose: closure_1(closure_2[18]).pop, underageMessage: closure_1.body.date_of_birth, existingUser: true };
                    push(Blocked, obj6);
                  }
                  const obj7 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
                  const obj3 = closure_1(closure_2[13]);
                  obj3.track(constants2.AGE_GATE_ACTION, obj7);
                }
                let username;
                const tmp13 = closure_130_7;
                if (closure_1 != null) {
                  const body = closure_1.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const intl = shouldShowError(closure_2[14]).intl;
                  message = intl.string(shouldShowError(closure_2[14]).t["TGg/2k"]);
                } else {
                  message = closure_1.message;
                }
                tmp13(message);
                closure_130_8(false);
                shouldShowError = true;
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                c4 = 0;
              }
              c6 = 3;
              return { value: { shouldShowError }, done: true };
            }
          } catch (tmp44) {
            closure_3 = tmp44;
            if (0 === c4) {
              c6 = 3;
              throw tmp44;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
    return obj(...arguments);
  };
  obj = function _submitBirthdayWithAgeConfirmation() {
    let obj = _asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c0 === 2) {
        c0 = 3;
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
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1(source[16])(null != date, "Cannot submit null birthday.");
              const obj6 = c1(source[19])();
              const diffResult = obj6.diff(date, "years");
              const tmp15 = date;
              if (diffResult < 18) {
                const obj4 = {
                  source,
                  onConfirm() {
                              return closure_1_10(closure_1_6);
                            },
                  age: diffResult
                };
                navigation.push(AgeGateConfirm.AgeGateConfirm, obj4);
              } else {
                c1 = 1;
                c0 = 1;
                const obj5 = { value: submitBirthday(tmp15), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          c0 = 3;
          throw tmp9;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_16();
  const tmp2 = onSuccess;
  let tmp3 = source;
  obj = onSuccess(source[11]);
  navigation = obj.useNavigation();
  let obj2 = onSuccess(source[12]);
  const items = [c8];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = submitBirthday);
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE_EMBED;
  }
  react = tmp7;
  const tmp9 = stateFromStores(react.useState(null), 2);
  date = tmp9[0];
  const tmp11 = tmp9[1];
  [tmp13, c7] = stateFromStores(react.useState(null), 2);
  const tmp12 = stateFromStores(react.useState(null), 2);
  [tmp15, c8] = stateFromStores(react.useState(false), 2);
  const tmp14 = stateFromStores(react.useState(false), 2);
  const items1 = [c7];
  const ref = react.useRef(null);
  const tmp2Result = tmp2(tmp3[12]);
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => action.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = react.useEffect(() => {
    if (null != stateFromStores1) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp7, navigation];
  const effect1 = react.useEffect(() => {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = tmp.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      const tmp3 = closure_5;
      if (tmp3) {
        navigation.push(Pawtect.Pawtect);
      }
    }
    let nsfwAllowed1;
    if (stateFromStores != null) {
      nsfwAllowed1 = tmp.nsfwAllowed;
    }
    if (null != nsfwAllowed1) {
      onSuccess();
    }
  }, items3);
  const items4 = [source];
  const effect2 = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source, action: stateFromStores1.AGE_GATE_OPEN };
    obj.track(constants.AGE_GATE_ACTION, obj2);
  }, items4);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      let stringResult;
      let stringResult1;
      if (!tmp7) {
        let intl = tmp2(tmp3[14]).intl;
        if (source === FAMILY_CENTER) {
          stringResult = intl.string(tmp2(tmp3[14]).t.mhUrKS);
        } else {
          const format = intl.format;
          let obj3 = { helpURL: obj5.getArticleURL(constants3.AGE_GATE) };
          const EcJBEI = tmp2(tmp3[14]).t.EcJBEI;
          obj5 = onClose(tmp3[15]);
          stringResult = format(EcJBEI, obj3);
        }
      }
      const intl3 = tmp2(tmp3[14]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[14]).t;
      if (tmp7) {
        stringResult1 = string(t["H0SG/g"]);
      } else if (source === FAMILY_CENTER) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      let stringResult2 = tmp13;
      const tmp27 = !onClose(tmp3[20])(date);
      const tmp25 = onClose;
      if (tmp27) {
        stringResult2 = tmp13;
        if (null != date) {
          const intl4 = tmp2(tmp3[14]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[14]).t.udnqh6);
        }
      }
      let obj4 = { top: true, style: tmp.container, children: items5 };
      const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
      let obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      items5 = [closure_14(tmp2(tmp3[22]).Text, obj6), , , ];
      const obj8 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items5[1] = closure_14(tmp2(tmp3[22]).Text, obj8);
      const obj9 = { style: tmp.inputGroup, ref, label: intl5.string(tmp2(tmp3[14]).t.xNpFJ6), date, onChangeDate: tmp11, error: stringResult2 };
      const tmp25Result = tmp25(tmp3[23]);
      intl5 = tmp2(tmp3[14]).intl;
      items5[2] = closure_14(tmp25Result, obj9);
      let obj10 = { style: tmp.buttonWrapper, children: tmp30(Button, obj11) };
      obj11 = {
        loading: tmp15,
        disabled: tmp15,
        text: intl6.string(tmp2(tmp3[14]).t.PDTjLN),
        onPress: function submitBirthdayWithAgeConfirmation() {
              return obj(...arguments);
            },
        grow: true
      };
      Button = tmp2(tmp3[24]).Button;
      const tmp29 = closure_15;
      const tmp32 = date;
      if (!tmp15) {
        tmp15 = tmp27;
      }
      intl6 = tmp2(tmp3[14]).intl;
      items5[3] = closure_14(tmp32, obj10);
      return tmp29(SafeAreaPaddingView, obj4);
    }
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const format2 = intl2.format;
  const obj12 = { helpURL: obj7.getArticleURL(constants3.AGE_GATE) };
  const n3QjDE = tmp2(tmp3[14]).t.n3QjDE;
  obj7 = onClose(tmp3[15]);
  stringResult = format2(n3QjDE, obj12);
};
