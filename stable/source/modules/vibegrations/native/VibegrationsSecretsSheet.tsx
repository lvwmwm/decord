// Module ID: 16386
// Function ID: 16387
// Name: VibegrationsSecretsSheet
// Dependencies: [5, 32, 19, 17, 12644, 21, 4837, 588, 6399, 6611, 1127, 3718, 4801, 6624, 6571, 4833, 5282, 6021, 2]
// Exports: default

// Module 16386 (VibegrationsSecretsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12644 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, closure_1, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ sendUserMessage: metroImportDefault, submitProjectSecrets: metroImportAll } = VibegrationsConnectionStore);
({ jsx: c9, jsxs: c10 } = Fragment);
const VibegrationsSecretsSheet_str = "VibegrationsSecretsSheet";
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, copyRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copyInfo: { flex: 1, gap: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flex: 1, gap: nativeDefault.space.PX_4 });
  return obj;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretsSheet.tsx");

export default function VibegrationsSecretsSheet(projectId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let c7;
  let c8;
  let closure_3;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj2;
  let obj3;
  let tmp16;
  let tmp17;
  projectId = projectId.projectId;
  const request = projectId.request;
  importDefault = undefined;
  let first;
  let first1;
  react = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  let tmp = importDefault;
  let tmp2 = first;
  let tmp3 = closure_12(require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom);
  importDefault = tmp3;
  const tmp4 = first1(react.useState({}), 2);
  first = tmp4[0];
  _asyncToGenerator = tmp4[1];
  const tmp6 = first1(react.useState(false), 2);
  first1 = tmp6[0];
  react = tmp6[1];
  const tmp8 = first1(react.useState(false), 2);
  let closure_6 = tmp8[1];
  const first2 = tmp8[0];
  [c7, c8] = first1(react.useState(null), 2);
  first1(react.useState(null), 2);
  let closure_9 = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = projectId(first[9]);
    obj.copy(arg0, () => c8(closure_0));
  }, []);
  let closure_10 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    closure_1 = arg1;
    closure_6(false);
    closure_3((arg0) => {
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
  closure_12 = tmp11;
  let closure_13 = tmp12;
  let items = [tmp11, found, tmp12, projectId, first1, first];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let v2;
    if (c4 === 2) {
      c4 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp50 = closure_12;
            if (tmp50) {
              const tmp25 = first1;
              if (!tmp25) {
                closure_5(true);
                closure_6(false);
                c3 = 2;
                const obj4 = {
                  secrets: Object.fromEntries(found.map((item) => {
                                const items = [item, ];
                                const str = closure_1_2[item];
                                items[1] = str.trim();
                                return items;
                              }))
                };
                const _Object = Object;
                c1 = 3;
                c4 = 1;
                const obj5 = { value: _undefined(projectId, obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c1) {
          c3 = 0;
          closure_128_5(false);
          throw first;
        } else {
          if (2 === c1) {
            c3 = 1;
            closure_128_6(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let lM98yZ;
            const intl = tmp(first[10]).intl;
            const string = intl.string;
            const tmp49 = c1(first[11]);
            const tmp41 = closure_1_7;
            const tmp42 = closure_128_0;
            if (closure_128_13) {
              lM98yZ = tmp49.pu8e3p;
            } else {
              lM98yZ = tmp49.lM98yZ;
            }
            tmp41(tmp42, string(lM98yZ));
            const obj = c1(first[12]);
            obj.hideActionSheet(closure_1_11);
            c3 = 1;
          }
          c3 = 0;
          closure_128_5(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp33) {
        first = tmp33;
        if (0 === c3) {
          c4 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          c1 = 1;
        } else {
          c1 = 2;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, header: closure_9(BottomSheetTitleHeader, obj2), children: tmp16(tmp17, obj3) };
  const ActionSheet = projectId(first[13]).ActionSheet;
  obj2 = { title: intl.string(require("module_3718").ACvhVC) };
  BottomSheetTitleHeader = projectId(first[14]).BottomSheetTitleHeader;
  intl = projectId(first[10]).intl;
  obj3 = { style: tmp3.container, children: items1 };
  let tmp14Result = null;
  tmp16 = closure_10;
  tmp17 = closure_6;
  if (null != request.note) {
    let str = "";
    tmp14Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp14Result = tmp14(tmp15(tmp2[15]).Text, obj4);
    }
  }
  items1 = [tmp14Result, , , , , , ];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(tmp(tmp2[11]).p0Ay4J) };
  const Text = tmp15(tmp2[15]).Text;
  intl2 = tmp15(tmp2[10]).intl;
  items1[1] = closure_9(Text, obj5);
  let tmp14Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(tmp(tmp2[11]).LpnmXm) };
    const Text2 = tmp15(tmp2[15]).Text;
    intl3 = tmp15(tmp2[10]).intl;
    tmp14Result3 = tmp14(Text2, obj6);
  }
  items1[2] = tmp14Result3;
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
    items[0] = closure_9(projectId(first[15]).Text, obj3);
    const obj4 = { variant: "text-xs/normal", color: "text-default", children: children.value };
    items[1] = closure_9(projectId(first[15]).Text, obj4);
    items1 = [closure_10(closure_6, obj2), ];
    const Button = projectId(first[16]).Button;
    const intl = projectId(first[10]).intl;
    const string = intl.string;
    const tmp = closure_10;
    const tmp2 = closure_6;
    const tmp3 = closure_9;
    if (c7 === children.value) {
      OpuAlK = tmp4(tmp5[10]).t.t5VZ88;
    } else {
      OpuAlK = tmp4(tmp5[10]).t.OpuAlK;
    }
    const obj5 = {
      variant: "secondary",
      size: "sm",
      text: string(OpuAlK),
      onPress() {
        return closure_9(children.value);
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
        return closure_10(label.name, arg0);
      },
      disabled: first1
    };
    hint = undefined;
    const TextInput = projectId(first[17]).TextInput;
    const tmp = closure_9;
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
  let tmp14Result4 = null;
  if (first2) {
    const obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl4.string(tmp(tmp2[11])["4nT7Lo"]) };
    const Text3 = tmp15(tmp2[15]).Text;
    intl4 = tmp15(tmp2[10]).intl;
    tmp14Result4 = tmp14(Text3, obj7);
  }
  items1[5] = tmp14Result4;
  const obj8 = { text: intl5.string(tmp(tmp2[11])["8SWZaW"]), variant: "primary", loading: first1, disabled: found.length <= 0, onPress: callback };
  let Button = tmp15(tmp2[16]).Button;
  intl5 = tmp15(tmp2[10]).intl;
  items1[6] = closure_9(Button, obj8);
  return closure_9(ActionSheet, obj);
};
export const VIBEGRATIONS_SECRETS_SHEET_KEY = "VibegrationsSecretsSheet";
