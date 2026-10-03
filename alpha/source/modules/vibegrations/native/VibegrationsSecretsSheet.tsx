// Module ID: 16707
// Function ID: 16708
// Name: VibegrationsSecretsSheet
// Dependencies: [5, 32, 19, 17, 12904, 21, 4890, 587, 558, 576, 6471, 6688, 1126, 3723, 6644, 4886, 5594, 6098, 6701, 2]

// Module 16707 (VibegrationsSecretsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c3, closure_1, importDefault, projectId;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ sendUserMessage: metroImportDefault, submitProjectSecrets: metroImportAll } = VibegrationsConnectionStore);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, copyRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copyInfo: { flex: 1, gap: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flex: 1, gap: nativeDefault.space.PX_4 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_4;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let first;
  let first1;
  let first2;
  let ref;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp = ref;
  let obj = projectId(ref[9]);
  const cResult = obj.c(56);
  projectId = projectId.projectId;
  const request = projectId.request;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = M(require("useSafeAreaInsetsKeyboardAware")(first).insets.bottom);
  importDefault = tmp4;
  let obj3 = first2;
  ref = first2.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp6 = obj4;
  } else {
    tmp6 = cResult[1];
  }
  [first1, _slicedToArray] = obj3.useState(tmp6);
  [first2, closure_6] = obj3.useState(false);
  [r10055, closure_7] = _slicedToArray(obj3.useState(false), 2);
  const tmp11 = _slicedToArray(obj3.useState(false), 2);
  [closure_8, closure_9] = obj3.useState(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        let closure_0 = arg0;
        const obj = projectId(ref[11]);
        obj.copy(arg0, () => closure_9(closure_0));
      }
    }
    cResult[2] = I;
    tmp13 = I;
  } else {
    class I {
      constructor(arg0) {
        let closure_0 = arg0;
        const obj = projectId(ref[11]);
        obj.copy(arg0, () => closure_9(closure_0));
      }
    }
  }
  I = tmp13;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        closure_1 = arg1;
        closure_7(false);
        closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
      }
    }
    cResult[3] = M;
    tmp14 = M;
  } else {
    class M {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        closure_1 = arg1;
        closure_7(false);
        closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
      }
    }
  }
  M = tmp14;
  if (cResult[4] === request.fields) {
    class M {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        closure_1 = arg1;
        closure_7(false);
        closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
      }
    }
    let closure_13 = tmp18;
    let closure_14 = tmp19;
    if (cResult[10] === arr.length > 0) {
      class M {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          closure_1 = arg1;
          closure_7(false);
          closure_4((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0] = closure_1;
            return obj;
          });
        }
      }
    }
    const tmp21 = first1;
    let closure_0 = first1(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp39 = closure_1_13;
              if (tmp39) {
                const tmp13 = first2;
                if (!tmp13) {
                  closure_1_6(true);
                  closure_1_7(false);
                  ref = 1;
                  const obj4 = {
                    secrets: Object.fromEntries(arr.map((item) => {
                                  const items = [item, ];
                                  const str = closure_1_3[item];
                                  items[1] = str.trim();
                                  return items;
                                }))
                  };
                  const _Object = Object;
                  c1 = 2;
                  c3 = 1;
                  const obj5 = { value: closure_2_8(tmp, obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === tmp4) {
            ref = 0;
            closure_1_7(true);
            closure_1_6(false);
            c3 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            let lM98yZ;
            ref = 0;
            const intl = tmp(ref[12]).intl;
            const string = intl.string;
            const tmp37 = closure_2_1(ref[13]);
            const tmp29 = closure_2_7;
            const tmp30 = tmp;
            if (closure_1_14) {
              lM98yZ = tmp37.pu8e3p;
            } else {
              lM98yZ = tmp37.lM98yZ;
            }
            tmp29(tmp30, string(lM98yZ));
            const current = ref.current;
            if (current != null) {
              current.closeActionSheet();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } catch (tmp21) {
          if (0 === ref) {
            c3 = 3;
            throw tmp21;
          } else {
            c1 = 1;
          }
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[10] = arr.length > 0;
    cResult[11] = arr;
    cResult[12] = arr.length < request.fields.length;
    cResult[13] = projectId;
    cResult[14] = first2;
    cResult[15] = first1;
    cResult[16] = fn;
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(name) {
        return name.name;
      }
    }
    cResult[7] = J;
    tmp15 = J;
  } else {
    class J {
      constructor(name) {
        return name.name;
      }
    }
  }
  if (cResult[8] !== first1) {
    class D {
      constructor(arg0) {
        let str = first1[arg0];
        if (str == null) {
          str = "";
        }
        return "" !== str.trim();
      }
    }
    cResult[8] = first1;
    cResult[9] = D;
    tmp16 = D;
  } else {
    class D {
      constructor(arg0) {
        let str = first1[arg0];
        if (str == null) {
          str = "";
        }
        return "" !== str.trim();
      }
    }
  }
  const fields = request.fields;
  const mapped = fields.map(tmp15);
  const found = mapped.filter(tmp16);
  cResult[4] = request.fields;
  cResult[5] = first1;
  cResult[6] = found;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let _undefined22;
  let c7;
  let c8;
  let c9;
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj2;
  let obj3;
  let tmp10;
  let tmp17;
  let tmp18;
  projectId = projectId.projectId;
  const request = projectId.request;
  importDefault = undefined;
  let ref;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_11 = undefined;
  let tmp = importDefault;
  let tmp2 = ref;
  let tmp3 = closure_11(require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom);
  importDefault = tmp3;
  ref = first1.useRef(null);
  [first, _slicedToArray] = first1.useState({});
  [first1, closure_6] = first1.useState(false);
  [tmp10, c7] = _slicedToArray(first1.useState(false), 2);
  const tmp9 = _slicedToArray(first1.useState(false), 2);
  [c8, c9] = _slicedToArray(first1.useState(null), 2);
  const tmp11 = _slicedToArray(first1.useState(null), 2);
  let closure_10 = first1.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = projectId(ref[11]);
    obj.copy(arg0, () => c9(closure_0));
  }, []);
  closure_11 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    closure_1 = arg1;
    _undefined(false);
    closure_4((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const fields = request.fields;
  const mapped = fields.map((name) => name.name);
  const found = mapped.filter((item) => {
    let str = first[item];
    if (str == null) {
      str = "";
    }
    return "" !== str.trim();
  });
  let closure_13 = tmp12;
  let tmp13 = found.length < request.fields.length;
  let closure_14 = tmp13;
  let items = [tmp12, found, tmp13, projectId, first1, first];
  const callback = first1.useCallback(first(function*(arg0, value) {
    let c2;
    let closure_0;
    let v1;
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp39 = closure_13;
            if (tmp39) {
              const tmp13 = first1;
              if (!tmp13) {
                closure_6(true);
                _undefined(false);
                ref = 1;
                const obj4 = {
                  secrets: Object.fromEntries(found.map((item) => {
                                const items = [item, ];
                                const str = closure_1_3[item];
                                items[1] = str.trim();
                                return items;
                              }))
                };
                const _Object = Object;
                c1 = 2;
                c3 = 1;
                const obj5 = { value: _undefined2(projectId, obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          ref = 0;
          closure_128_7(true);
          closure_128_6(false);
          c3 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          ref = 0;
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          let lM98yZ;
          ref = 0;
          const intl = tmp(ref[12]).intl;
          const string = intl.string;
          const tmp37 = c1(ref[13]);
          const tmp29 = _undefined;
          const tmp30 = closure_128_0;
          if (closure_128_14) {
            lM98yZ = tmp37.pu8e3p;
          } else {
            lM98yZ = tmp37.lM98yZ;
          }
          tmp29(tmp30, string(lM98yZ));
          const current = closure_128_2.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp21) {
        if (0 === ref) {
          c3 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  let obj = { ref, startExpanded: true, keyboardShouldPersistTaps: "handled", header: c9(BottomSheetTitleHeader, obj2), children: tmp17(tmp18, obj3) };
  const ActionSheet = projectId(ref[18]).ActionSheet;
  obj2 = { title: intl.string(require("module_3723").ACvhVC) };
  BottomSheetTitleHeader = projectId(ref[14]).BottomSheetTitleHeader;
  intl = projectId(ref[12]).intl;
  obj3 = { style: tmp3.container, children: items1 };
  let tmp15Result = null;
  tmp17 = closure_10;
  tmp18 = closure_6;
  if (null != request.note) {
    let str = "";
    tmp15Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp15Result = tmp15(tmp16(tmp2[15]).Text, obj4);
    }
  }
  items1 = [tmp15Result, , , , , , ];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(tmp(tmp2[13]).p0Ay4J) };
  const Text = tmp16(tmp2[15]).Text;
  intl2 = tmp16(tmp2[12]).intl;
  items1[1] = c9(Text, obj5);
  let tmp15Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(tmp(tmp2[13]).LpnmXm) };
    const Text2 = tmp16(tmp2[15]).Text;
    intl3 = tmp16(tmp2[12]).intl;
    tmp15Result3 = tmp15(Text2, obj6);
  }
  items1[2] = tmp15Result3;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    let OpuAlK;
    let items;
    let items1;
    const obj2 = { style: closure_1.copyInfo, children: items };
    items = [, ];
    const obj = { style: closure_1.copyRow, children: items1 };
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: children.label };
    items[0] = _undefined22(projectId(ref[15]).Text, obj3);
    const obj4 = { variant: "text-xs/normal", color: "text-default", children: children.value };
    items[1] = _undefined22(projectId(ref[15]).Text, obj4);
    items1 = [closure_10(closure_6, obj2), ];
    const Button = projectId(ref[16]).Button;
    const intl = projectId(ref[12]).intl;
    const string = intl.string;
    const tmp = closure_10;
    const tmp2 = closure_6;
    const tmp3 = _undefined22;
    if (c8 === children.value) {
      OpuAlK = tmp4(tmp5[12]).t.t5VZ88;
    } else {
      OpuAlK = tmp4(tmp5[12]).t.OpuAlK;
    }
    const obj5 = {
      variant: "secondary",
      size: "sm",
      text: string(OpuAlK),
      onPress() {
        return closure_10(children.value);
      }
    };
    items1[1] = tmp3(Button, obj5);
    return tmp(tmp2, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    let hint;
    let str2;
    const obj = {
      label: label.label,
      description: hint,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str2,
      onChange(arg0) {
        return closure_11(label.name, arg0);
      },
      disabled: first1
    };
    hint = undefined;
    const TextInput = projectId(ref[17]).TextInput;
    const tmp = c9;
    if (null != label.hint) {
      if ("" !== label.hint) {
        hint = label.hint;
      }
    }
    str2 = first[label.name];
    if (str2 == null) {
      str2 = "";
    }
    return tmp(TextInput, obj, label.name);
  });
  let tmp15Result4 = null;
  if (tmp10) {
    const obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl4.string(tmp(tmp2[13])["4nT7Lo"]) };
    const Text3 = tmp16(tmp2[15]).Text;
    intl4 = tmp16(tmp2[12]).intl;
    tmp15Result4 = tmp15(Text3, obj7);
  }
  items1[5] = tmp15Result4;
  const obj8 = { text: intl5.string(tmp(tmp2[13])["8SWZaW"]), variant: "primary", loading: first1, disabled: found.length <= 0, onPress: callback };
  let Button = tmp16(tmp2[16]).Button;
  intl5 = tmp16(tmp2[12]).intl;
  items1[6] = c9(Button, obj8);
  return c9(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretsSheet.tsx");

export default tmp4;
export const VIBEGRATIONS_SECRETS_SHEET_KEY = "VibegrationsSecretsSheet";
