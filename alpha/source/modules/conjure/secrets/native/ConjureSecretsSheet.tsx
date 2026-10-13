// Module ID: 11930
// Function ID: 11931
// Name: ConjureSecretsSheet
// Dependencies: [5, 32, 19, 17, 11215, 21, 5092, 587, 6665, 6886, 11931, 1126, 3849, 6899, 6839, 5088, 5379, 6286, 2]
// Exports: default

// Module 11930 (ConjureSecretsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 11215 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, dependencyMap;

let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, copyRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copyInfo: { flex: 1, gap: nativeDefault.space.PX_4 }, field: { gap: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flex: 1, gap: nativeDefault.space.PX_4 });
  ({ gap: nativeDefault.space.PX_4 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretsSheet.tsx");

export default function ConjureSecretsSheet(projectId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let c10;
  let c8;
  let c9;
  let closure_5;
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
  dependencyMap = undefined;
  let first;
  react = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let tmp = request;
  let tmp2 = dependencyMap;
  let tmp3 = c10(request(6665)({ includeKeyboardHeight: true }).insets.bottom);
  dependencyMap = tmp3;
  const ref = react.useRef(null);
  const tmp5 = first(react.useState({}), 2);
  first = tmp5[0];
  react = tmp5[1];
  const tmp7 = first(react.useState(false), 2);
  const first1 = tmp7[0];
  let closure_7 = tmp7[1];
  [tmp10, c8] = first(react.useState(false), 2);
  const tmp9 = first(react.useState(false), 2);
  [c9, c10] = first(react.useState(null), 2);
  const tmp11 = first(react.useState(null), 2);
  let closure_11 = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = projectId(closure_2[9]);
    obj.copy(arg0, () => c10(closure_0));
  }, []);
  let closure_12 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined(false);
    closure_5((arg0) => {
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
  let closure_14 = tmp12;
  let closure_15 = tmp13;
  let items = [tmp12, found, tmp13, projectId, request.request_id, first1, first];
  const callback = react.useCallback(ref(function*(arg0, value) {
    let closure_0;
    let closure_1;
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            projectId = tmp4;
            const tmp63 = closure_14;
            if (tmp63) {
              const tmp30 = first1;
              if (!tmp30) {
                let obj6;
                closure_7(true);
                _undefined(false);
                c3 = 1;
                const obj4 = {
                  secrets: Object.fromEntries(found.map((item) => {
                                const items = [item, ];
                                const str = closure_1_4[item];
                                items[1] = str.trim();
                                return items;
                              }))
                };
                const _Object = Object;
                const submitProjectSecrets = projectId(closure_2[10]).submitProjectSecrets;
                const tmp37 = projectId(closure_2[10]);
                const tmp38 = projectId;
                if (null != request.request_id) {
                  const obj5 = { request_id: tmp40.request_id };
                  obj6 = obj5;
                } else {
                  obj6 = {};
                }
                const merged = Object.assign(obj6);
                c4 = 2;
                c5 = 1;
                const obj7 = { value: submitProjectSecrets(tmp38, obj4), done: false };
                return obj7;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          projectId = closure_2;
          closure_129_7(false);
          if (projectId instanceof projectId(closure_2[10]).ConjureSecretRequestExpiredError) {
            const intl = projectId(closure_2[11]).intl;
            closure_1_7(closure_129_0, intl.string(tmp(closure_2[12]).KVBvVy));
            const current2 = closure_129_3.current;
            if (current2 != null) {
              current2.closeActionSheet();
            }
          } else {
            closure_129_8(true);
          }
          c5 = 3;
          const obj8 = { value: tmp20, done: true };
          return obj8;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          let UGqnoV;
          c3 = 0;
          const intl2 = projectId(closure_2[11]).intl;
          const string = intl2.string;
          const tmp61 = tmp(closure_2[12]);
          const tmp53 = closure_1_7;
          const tmp54 = closure_129_0;
          if (closure_129_15) {
            UGqnoV = tmp61.sMQt5O;
          } else {
            UGqnoV = tmp61.UGqnoV;
          }
          tmp53(tmp54, string(UGqnoV));
          const current = closure_129_3.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp44) {
        closure_2 = tmp44;
        if (0 === c3) {
          c5 = 3;
          throw tmp44;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  let obj = { ref, startExpanded: true, keyboardShouldPersistTaps: "handled", header: c8(BottomSheetTitleHeader, obj2), children: tmp17(tmp18, obj3) };
  const ActionSheet = projectId(6899).ActionSheet;
  obj2 = { title: intl.string(request(3849).TuMGZp) };
  BottomSheetTitleHeader = projectId(6839).BottomSheetTitleHeader;
  intl = projectId(1126).intl;
  obj3 = { style: tmp3.container, children: items1 };
  let tmp15Result = null;
  tmp17 = c9;
  tmp18 = first1;
  if (null != request.note) {
    let str = "";
    tmp15Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp15Result = tmp15(tmp16(5088).Text, obj4);
    }
  }
  items1 = [tmp15Result, , , , , , ];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(tmp(3849).jgDBJZ) };
  let Text = tmp16(5088).Text;
  intl2 = tmp16(1126).intl;
  items1[1] = c8(Text, obj5);
  let tmp15Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(tmp(3849)["La+pe4"]) };
    const Text2 = tmp16(5088).Text;
    intl3 = tmp16(1126).intl;
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
    const obj2 = { style: closure_2.copyInfo, children: items };
    items = [, ];
    const obj = { style: closure_2.copyRow, children: items1 };
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: children.label };
    items[0] = _undefined(projectId(closure_2[15]).Text, obj3);
    const obj4 = { variant: "text-xs/normal", color: "text-default", children: children.value };
    items[1] = _undefined(projectId(closure_2[15]).Text, obj4);
    items1 = [_undefined2(first1, obj2), ];
    const Button = projectId(closure_2[16]).Button;
    const intl = projectId(closure_2[11]).intl;
    const string = intl.string;
    const tmp = _undefined2;
    const tmp2 = first1;
    const tmp3 = _undefined;
    if (_undefined2 === children.value) {
      OpuAlK = tmp4(tmp5[11]).t.t5VZ88;
    } else {
      OpuAlK = tmp4(tmp5[11]).t.OpuAlK;
    }
    const obj5 = {
      variant: "secondary",
      size: "sm",
      text: string(OpuAlK),
      onPress() {
        return closure_11(children.value);
      }
    };
    items1[1] = tmp3(Button, obj5);
    return tmp(tmp2, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    let hint;
    let items;
    let obj4;
    let str2;
    const obj2 = {
      label: label.label,
      description: hint,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str2,
      onChange(arg0) {
        return closure_12(label.name, arg0);
      },
      disabled: first1
    };
    hint = undefined;
    const obj = { style: closure_2.field, children: items };
    const TextInput = projectId(closure_2[17]).TextInput;
    const tmp = c9;
    const tmp2 = first1;
    if (null != label.hint) {
      if ("" !== label.hint) {
        hint = label.hint;
      }
    }
    str2 = first[label.name];
    if (str2 == null) {
      str2 = "";
    }
    items = [_undefined(TextInput, obj2), ];
    let hosts = label.hosts;
    if (hosts == null) {
      hosts = [];
    }
    let tmp3Result = null;
    if (hosts.length > 0) {
      const Text = tmp4(tmp5[15]).Text;
      const intl = tmp4(tmp5[11]).intl;
      const formatToPlainString = intl.formatToPlainString;
      let hosts1 = label.hosts;
      const Ww9HFO = request(tmp5[12]).Ww9HFO;
      if (hosts1 == null) {
        hosts1 = [];
      }
      const obj3 = { variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(Ww9HFO, obj4) };
      obj4 = { hosts: hosts1.join(", ") };
      tmp3Result = tmp3(Text, obj3);
    }
    items[1] = tmp3Result;
    return tmp(tmp2, obj, label.name);
  });
  let tmp15Result4 = null;
  if (tmp10) {
    let obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl4.string(tmp(3849).IrMuew) };
    const Text3 = tmp16(5088).Text;
    intl4 = tmp16(1126).intl;
    tmp15Result4 = tmp15(Text3, obj7);
  }
  items1[5] = tmp15Result4;
  let obj8 = { text: intl5.string(tmp(3849).DUdtms), variant: "primary", loading: first1, disabled: !tmp12, onPress: callback };
  let Button = tmp16(5379).Button;
  intl5 = tmp16(1126).intl;
  items1[6] = c8(Button, obj8);
  return c8(ActionSheet, obj);
};
export const CONJURE_SECRETS_SHEET_KEY = "ConjureSecretsSheet";
