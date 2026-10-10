// Module ID: 15963
// Function ID: 15964
// Name: BackupScreen
// Dependencies: [5, 32, 19, 21, 15961, 5088, 1126, 558, 576, 6625, 15962, 15956, 15957, 2]

// Module 15963 (BackupScreen)
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import MFA from "MFA" /* 15961 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, closure_3, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function removeDashes(str) {
  return str.replace(/-/g, "");
}
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
function getFormattedExplainer(first1) {
  let items;
  let items1;
  let obj3;
  const Text = Text_Text.Text;
  const tmp = metroRequire;
  if (first1 > 0) {
    const obj = { variant: "text-md/normal", children: items };
    const intl = tmp2(1126).intl;
    items = [intl.string(intl6.t.RRtlLg), ];
    const intl2 = tmp2(1126).intl;
    const obj2 = { countdown: first1 };
    items[1] = intl2.format(intl6.t.tsWkAE, obj2);
    obj3 = obj;
  } else {
    obj3 = { variant: "text-md/normal", children: items1 };
    const intl3 = tmp2(1126).intl;
    items1 = [intl3.string(intl6.t.RRtlLg), ];
    const intl4 = tmp2(1126).intl;
    items1[1] = intl4.string(intl6.t.v3a6Pd);
  }
  return tmp(Text, obj3);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsxs: metroRequire, jsx: metroImportDefault, Fragment: metroImportAll } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackupScreen(arg0) {
  let closure_7;
  let finish;
  let first;
  let first1;
  let items1;
  let mfaChallenge;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp7;
  const tmp = finish;
  let obj = finish(first[8]);
  const cResult = obj.c(34);
  ({ mfaChallenge, finish } = arg0);
  const tmp4 = importDefault;
  let obj2 = react;
  const tmp5 = require("useWideAuthView")();
  [tmp7, importDefault] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  [first, _asyncToGenerator] = react.useState("");
  const tmp9 = _slicedToArray(react.useState(undefined), 2);
  [tmp10, _slicedToArray] = tmp9;
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp12, react] = tmp11;
  [first1, closure_7] = react.useState(10);
  if (cResult[0] !== first1) {
    const fn = function f() {
      let closure_0;
      if (first1 > 0) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_1_7((arg0) => arg0 - 1);
        }, 1000);
        return () => clearTimeout(closure_0);
      }
    };
    const items = [first1];
    cResult[0] = first1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp16 = items;
    tmp15 = fn;
  } else {
    tmp15 = cResult[1];
    tmp16 = cResult[2];
  }
  const effect = obj2.useEffect(tmp15, tmp16);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function onChangeCode(arg0) {
      closure_3(arg0);
      _slicedToArray(undefined);
    }
    cResult[3] = onChangeCode;
    tmp18 = onChangeCode;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] !== finish) {
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let closure_4;
      let message2;
      let v0;
      closure_0 = arg0;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c5;
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              let closure_2 = tmp4;
              closure_0 = undefined;
              tmp28(undefined);
              message2(true);
              c5 = 1;
              const obj4 = { mfaType: "backup", data: removeDashes(closure_0) };
              c6 = 2;
              c7 = 1;
              const obj5 = { value: closure_0(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_0 = tmp28;
              let message;
              const tmp12 = tmp28;
              if (closure_0 != null) {
                const body = closure_0.body;
                if (body != null) {
                  message = body.message;
                }
              }
              message2 = message;
              if (message == null) {
                message2 = closure_0.message;
              }
              tmp12(message2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c5(true);
              c5 = 0;
            }
            message2(false);
            c7 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp28) {
          if (0 === c5) {
            c7 = 3;
            throw tmp28;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function t4() {
      return closure_0(...arguments);
    }
    cResult[4] = finish;
    cResult[5] = t4;
    tmp19 = t4;
  } else {
    tmp19 = cResult[5];
  }
  let closure_8 = tmp19;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(tmp(first[6]).t.B2T1HD);
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult1 = intl2.string(tmp(first[6]).t.c5J7O0);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
    tmp22 = stringResult1;
    tmp21 = stringResult;
  } else {
    tmp21 = cResult[6];
    tmp22 = cResult[7];
  }
  if (cResult[8] !== first1) {
    const tmp27 = getFormattedExplainer(first1);
    cResult[8] = first1;
    cResult[9] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult2 = intl3.string(tmp(first[6]).t["C/ZAw/"]);
    const intl4 = tmp(tmp2[6]).intl;
    const stringResult3 = intl4.string(tmp(first[6]).t.fZSi1D);
    cResult[10] = stringResult2;
    cResult[11] = stringResult3;
    tmp29 = stringResult3;
    tmp28 = stringResult2;
  } else {
    tmp28 = cResult[10];
    tmp29 = cResult[11];
  }
  if (cResult[12] === tmp10) {
    if (cResult[13] === (tmp7 || tmp12)) {
      let tmp34;
      if (cResult[14] === !tmp5) {
        tmp34 = cResult[15];
      }
      if (cResult[16] === tmp34) {
        let tmp37;
        let tmp41;
        if (cResult[17] === tmp25) {
          tmp37 = cResult[18];
        }
        const _Symbol = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = tmp(tmp2[6]).intl;
          const stringResult4 = intl5.string(tmp(first[6]).t.geKm7t);
          cResult[19] = stringResult4;
          tmp41 = stringResult4;
        } else {
          tmp41 = cResult[19];
        }
        if (cResult[20] === first) {
          let tmp44;
          if (cResult[21] === tmp19) {
            tmp44 = cResult[22];
          }
          if (!tmp7) {
            tmp7 = tmp12;
          }
          if (!tmp7) {
            tmp7 = first.length < tmp(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
          }
          if (!tmp7) {
            tmp7 = first1 > 0;
          }
          if (cResult[23] === (tmp7 || tmp12)) {
            if (cResult[24] === tmp44) {
              let tmp45;
              if (cResult[25] === tmp7) {
                tmp45 = cResult[26];
              }
              if (cResult[27] === finish) {
                let tmp48;
                if (cResult[28] === mfaChallenge) {
                  tmp48 = cResult[29];
                }
                if (cResult[30] === tmp37) {
                  if (cResult[31] === tmp45) {
                    let tmp49;
                    if (cResult[32] === tmp48) {
                      tmp49 = cResult[33];
                    }
                    return tmp49;
                  }
                }
                let obj3 = { headerText: tmp21, subtitle: tmp22, input: tmp37, submit: tmp45, screenProps: tmp48, mfaMethod: "backup" };
                const tmp51 = closure_7(tmp4(first[12]), obj3);
                cResult[30] = tmp37;
                cResult[31] = tmp45;
                cResult[32] = tmp48;
                cResult[33] = tmp51;
                tmp49 = tmp51;
              }
              let obj4 = { mfaChallenge, finish };
              cResult[27] = finish;
              cResult[28] = mfaChallenge;
              cResult[29] = obj4;
              tmp48 = obj4;
            }
          }
          let obj5 = { variant: "primary", text: tmp41, loading: tmp7 || tmp12, onPress: tmp44, disabled: tmp7 };
          const tmp47 = closure_7(tmp4(first[11]), obj5);
          cResult[23] = tmp7 || tmp12;
          cResult[24] = tmp44;
          cResult[25] = tmp7;
          cResult[26] = tmp47;
          tmp45 = tmp47;
        }
        function ee() {
          return closure_8(first);
        }
        cResult[20] = first;
        cResult[21] = tmp19;
        cResult[22] = ee;
        tmp44 = ee;
      }
      const obj6 = { children: items1 };
      items1 = [tmp25, tmp34];
      const tmp40 = first1(closure_8, obj6);
      cResult[16] = tmp34;
      cResult[17] = tmp25;
      cResult[18] = tmp40;
      tmp37 = tmp40;
    }
  }
  const obj7 = { label: tmp28, placeholder: tmp29, isValidClipboardCode, maxLength: tmp(first[4]).BACKUP_CODE_MAX_LENGTH, onChangeCode: tmp18, error: tmp10, isDisabled: tmp7 || tmp12, autoFocus: !tmp5 };
  const tmp4Result = tmp4(first[10]);
  const tmp36 = closure_7(tmp4Result, obj7);
  cResult[12] = tmp10;
  cResult[13] = tmp7 || tmp12;
  cResult[14] = !tmp5;
  cResult[15] = tmp36;
  tmp34 = tmp36;
}) : (function BackupScreen(finish) {
  let _undefined;
  let c1;
  let c4;
  let c5;
  let closure_7;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj3;
  let obj4;
  let tmp10;
  let tmp18;
  let tmp20;
  let tmp5;
  let tmp8;
  let tmpResult;
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  closure_7 = undefined;
  const mfaChallenge = finish.mfaChallenge;
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, c1] = tmp4;
  [first, _asyncToGenerator] = react.useState("");
  [tmp8, c4] = _slicedToArray(react.useState(undefined), 2);
  const tmp7 = _slicedToArray(react.useState(undefined), 2);
  [tmp10, c5] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [first1, closure_7] = react.useState(10);
  const items = [first1];
  const effect = react.useEffect(() => {
    let closure_0;
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let closure_4;
    let message2;
    let v0;
    closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            tmp28(undefined);
            message2(true);
            c5 = 1;
            const obj4 = { mfaType: "backup", data: removeDashes(closure_0) };
            c6 = 2;
            c7 = 1;
            const obj5 = { value: closure_0(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_0 = tmp28;
            let message;
            const tmp12 = tmp28;
            if (closure_0 != null) {
              const body = closure_0.body;
              if (body != null) {
                message = body.message;
              }
            }
            message2 = message;
            if (message == null) {
              message2 = closure_0.message;
            }
            tmp12(message2);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5(true);
            c5 = 0;
          }
          message2(false);
          c7 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp28) {
        if (0 === c5) {
          c7 = 3;
          throw tmp28;
        } else {
          c6 = 1;
        }
      }
    }
  });
  const items1 = [finish];
  let closure_8 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  let obj = { headerText: intl.string(finish(first[6]).t.B2T1HD), subtitle: intl2.string(finish(first[6]).t.c5J7O0), input: first1(tmp18, obj3), submit: tmp14(tmpResult, obj4), screenProps: { mfaChallenge, finish }, mfaMethod: "backup" };
  const tmp15 = require("MfaOptionScreen");
  intl = finish(first[6]).intl;
  intl2 = finish(first[6]).intl;
  const items2 = [getFormattedExplainer(first1), ];
  let obj2 = {
    label: intl3.string(finish(first[6]).t["C/ZAw/"]),
    placeholder: intl4.string(finish(first[6]).t.fZSi1D),
    isValidClipboardCode,
    maxLength: finish(first[4]).BACKUP_CODE_MAX_LENGTH,
    onChangeCode(arg0) {
      closure_3(arg0);
      _undefined(undefined);
    },
    error: tmp8,
    isDisabled: tmp20,
    autoFocus: !tmp3
  };
  const tmp19 = require("ClipboardCopyInput");
  intl3 = finish(first[6]).intl;
  intl4 = finish(first[6]).intl;
  obj3 = { children: items2 };
  tmp20 = tmp5 || tmp10;
  items2[1] = closure_7(tmp19, obj2);
  obj4 = {
    variant: "primary",
    text: intl5.string(tmp16(tmp2[6]).t.geKm7t),
    loading: tmp5 || tmp10,
    onPress() {
      return closure_8(first);
    },
    disabled: tmp5
  };
  tmpResult = tmp(first[11]);
  intl5 = tmp16(tmp2[6]).intl;
  tmp18 = closure_8;
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length < tmp16(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  return closure_7(tmp15, obj);
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default tmp3;
