// Module ID: 19332
// Function ID: 19333
// Name: ExistingUserAgeGate
// Dependencies: [5, 32, 19, 17, 4852, 1098, 19328, 1072, 21, 5009, 1498, 504, 1253, 1114, 2062, 38, 17948, 6738, 2044, 17970, 7286, 5619, 19333, 5629, 2]
// Exports: default

// Module 19332 (ExistingUserAgeGate)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 19328 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4852 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let Blocked, c0, c1, closure_1, closure_2, shouldShowError;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ AgeGateAnalyticAction: metroImportAll, AgeGateSource: c9 } = AgeGateConstants);
let closure_10 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
({ AnalyticEvents: unpackModuleId, HelpdeskArticles: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(source) {
  let Button;
  let FAMILY_CENTER;
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let c5;
  let c6;
  let intl5;
  let intl6;
  let items3;
  let obj10;
  let obj4;
  let obj6;
  let onClose;
  let tmp11;
  let tmp13;
  ({ onSuccess: require, onClose } = source);
  source = source.source;
  let date;
  react = undefined;
  c6 = undefined;
  let stateFromStores;
  function submitBirthday(arg0) {
    return obj(...arguments);
  }
  let obj = function _submitBirthday() {
    obj = _asyncToGenerator(async (shouldShowError) => {
      c5 = 0;
      c6 = 0;
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
                closure_1(closure_2[15])(null != shouldShowError, "Cannot submit null birthday.");
                shouldShowError = false;
                c4 = 1;
                closure_2_5(null);
                closure_2_6(true);
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj10.submitDateOfBirth(shouldShowError, source), done: false };
                obj10 = shouldShowError(closure_2[16]);
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
                    const obj6 = { onClose: closure_1(closure_2[17]).pop, underageMessage: closure_1.body.date_of_birth, existingUser: true };
                    push(Blocked, obj6);
                  }
                  const obj7 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
                  const obj3 = closure_1(closure_2[12]);
                  obj3.track(constants2.AGE_GATE_ACTION, obj7);
                }
                let username;
                const tmp16 = closure_130_5;
                if (closure_1 != null) {
                  const body = closure_1.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const intl = shouldShowError(closure_2[13]).intl;
                  message = intl.string(shouldShowError(closure_2[13]).t["TGg/2k"]);
                } else {
                  message = closure_1.message;
                }
                tmp16(message);
                closure_130_6(false);
                shouldShowError = true;
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                closure_130_0();
                c4 = 0;
              }
              c6 = 3;
              return { value: { shouldShowError }, done: true };
            }
          } catch (tmp47) {
            closure_3 = tmp47;
            if (0 === c4) {
              c6 = 3;
              throw tmp47;
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
    obj = _asyncToGenerator(async (arg0, value) => {
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
              c1(source[15])(null != date, "Cannot submit null birthday.");
              const obj6 = c1(source[18])();
              const diffResult = obj6.diff(date, "years");
              const tmp15 = date;
              if (diffResult < 18) {
                const obj4 = {
                  source,
                  onConfirm() {
                              return closure_1_8(closure_1_4);
                            },
                  age: diffResult
                };
                closure_2_3.push(AgeGateConfirm.AgeGateConfirm, obj4);
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
            obj = { value, done: true };
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
  const tmp = closure_15();
  const tmp2 = require;
  const tmp3 = source;
  obj = require("useNavigation");
  let closure_3 = obj.useNavigation();
  const tmp4 = obj;
  let tmp5 = source === obj.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = obj);
  if (!tmp5) {
    tmp5 = source === tmp4.NSFW_SERVER_INVITE;
  }
  if (!tmp5) {
    tmp5 = source === tmp4.NSFW_SERVER_INVITE_EMBED;
  }
  const tmp7 = date(react.useState(null), 2);
  date = tmp7[0];
  const tmp9 = tmp7[1];
  [tmp11, c5] = date(react.useState(null), 2);
  const tmp10 = date(react.useState(null), 2);
  [tmp13, c6] = date(react.useState(false), 2);
  const tmp12 = date(react.useState(false), 2);
  const items = [stateFromStores];
  const ref = react.useRef(null);
  const tmp2Result = tmp2(tmp3[11]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => stateFromStores.getAction());
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [source];
  const effect1 = react.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { source, action: metroImportAll.AGE_GATE_OPEN };
    obj.track(unpackModuleId.AGE_GATE_ACTION, obj2);
  }, items2);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      let stringResult;
      let stringResult1;
      if (!tmp5) {
        let intl = tmp2(tmp3[13]).intl;
        if (source === FAMILY_CENTER) {
          stringResult = intl.string(tmp2(tmp3[13]).t.mhUrKS);
        } else {
          const format = intl.format;
          let obj2 = { helpURL: obj4.getArticleURL(constants3.AGE_GATE) };
          const EcJBEI = tmp2(tmp3[13]).t.EcJBEI;
          obj4 = onClose(tmp3[14]);
          stringResult = format(EcJBEI, obj2);
        }
      }
      const intl3 = tmp2(tmp3[13]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[13]).t;
      if (tmp5) {
        stringResult1 = string(t["H0SG/g"]);
      } else if (source === FAMILY_CENTER) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      let stringResult2 = tmp11;
      const tmp24 = !onClose(tmp3[19])(date);
      const tmp22 = onClose;
      if (tmp24) {
        stringResult2 = tmp11;
        if (null != date) {
          const intl4 = tmp2(tmp3[13]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[13]).t.udnqh6);
        }
      }
      let obj3 = { top: true, style: tmp.container, children: items3 };
      const SafeAreaPaddingView = tmp2(tmp3[20]).SafeAreaPaddingView;
      let obj5 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      items3 = [closure_13(tmp2(tmp3[21]).Heading, obj5), , , ];
      let obj7 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items3[1] = closure_13(tmp2(tmp3[21]).Text, obj7);
      const obj8 = { style: tmp.inputGroup, ref, label: intl5.string(tmp2(tmp3[13]).t.xNpFJ6), date, onChangeDate: tmp9, error: stringResult2 };
      const tmp22Result = tmp22(tmp3[22]);
      intl5 = tmp2(tmp3[13]).intl;
      items3[2] = closure_13(tmp22Result, obj8);
      const obj9 = { style: tmp.buttonWrapper, children: closure_13(Button, obj10) };
      obj10 = {
        loading: tmp13,
        disabled: tmp13,
        text: intl6.string(tmp2(tmp3[13]).t.PDTjLN),
        onPress: function submitBirthdayWithAgeConfirmation() {
              return obj(...arguments);
            },
        grow: true
      };
      Button = tmp2(tmp3[23]).Button;
      const tmp26 = closure_14;
      const tmp29 = c6;
      intl6 = tmp2(tmp3[13]).intl;
      items3[3] = closure_13(tmp29, obj9);
      return tmp26(SafeAreaPaddingView, obj3);
    }
  }
  const intl2 = tmp2(tmp3[13]).intl;
  const format2 = intl2.format;
  const obj11 = { helpURL: obj6.getArticleURL(constants3.AGE_GATE) };
  const n3QjDE = tmp2(tmp3[13]).t.n3QjDE;
  obj6 = onClose(tmp3[14]);
  stringResult = format2(n3QjDE, obj11);
};
