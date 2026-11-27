// Module ID: 18724
// Function ID: 18725
// Name: ConjureSecretsSheet
// Dependencies: [5, 32, 19, 17, 7693, 7710, 21, 5043, 575, 8487, 504, 7538, 18531, 18654, 18725, 1112, 4245, 5726, 18550, 7546, 7507, 7547, 5634, 7480, 5641, 18533, 18551, 2]
// Exports: default

// Module 18724 (ConjureSecretsSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import conjureSetupForm from "conjureSetupForm" /* 18531 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c4, closure_2, dependencyMap;

let c10;
let c9;
let tmp6;
const intl8 = tmp6(1112);
const Text_Text = tmp6(5634);
const components_Button_Button = tmp6(5641);
const common_SafeAreaView = tmp6(7480);
const BottomSheetTitleHeader2 = tmp6(7507);
const ActionSheet2 = tmp6(7546);
const ActionSheetCloseButton = tmp6(7547);
let react = react_mod;
const View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_24, paddingBottom }, footer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, step: { gap: nativeDefault.space.PX_12 }, stepHeader: { gap: nativeDefault.space.PX_4 }, copyRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copyInfo: { flex: 1, gap: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_12 });
  ({ gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flex: 1, gap: nativeDefault.space.PX_4 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretsSheet.tsx");

export default function ConjureSecretsSheet(arg0) {
  let BottomSheetTitleHeader;
  let Button;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c11;
  let c12;
  let c13;
  let c5;
  let c6;
  let c7;
  let c8;
  let copy_values;
  let ekefN9;
  let fields;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  let onLayout;
  let ref;
  let request;
  let tmp13;
  ({ projectId: require, request } = arg0);
  dependencyMap = undefined;
  let closure_3;
  let ref1;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let loading;
  let closure_10;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  let closure_14;
  let closure_15;
  let found;
  let closure_17;
  let c18;
  let closure_19;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let intl2;
      let obj12;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
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
              closure_0 = tmp4;
              const tmp93 = closure_2_17;
              if (tmp93) {
                const tmp58 = first;
                if (!tmp58) {
                  let obj8;
                  closure_2_10(true);
                  _undefined4(false);
                  if (true === request.over_mcp) {
                    const obj6 = closure_0(closure_2[13]);
                    const result = obj6.markMcpSecretRequestSaved(request.request_id);
                  }
                  c3 = 1;
                  const obj5 = {
                    secrets: Object.fromEntries(found.map((item) => {
                                  const items = [item, ];
                                  const str = closure_1_5[item];
                                  items[1] = str.trim();
                                  return items;
                                }))
                  };
                  const _Object = Object;
                  const submitProjectSecrets = closure_0(closure_2[14]).submitProjectSecrets;
                  const tmp70 = closure_0(closure_2[14]);
                  const tmp71 = require;
                  if (null != request.request_id) {
                    const obj7 = { request_id: request.request_id };
                    obj8 = obj7;
                  } else {
                    obj8 = {};
                  }
                  const merged = Object.assign(obj8);
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: submitProjectSecrets(tmp71, obj5), done: false };
                  return obj9;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_0 = closure_2;
            const obj4 = closure_0(closure_2[13]);
            const result1 = obj4.unmarkMcpSecretRequestSaved(closure_129_1.request_id);
            closure_129_10(false);
            if (closure_0 instanceof closure_0(closure_2[14]).ConjureSecretRequestExpiredError) {
              if (true !== closure_129_1.over_mcp) {
                const intl3 = closure_0(closure_2[15]).intl;
                _undefined3(closure_129_0, intl3.string(tmp(closure_2[16]).KVBvVy));
              }
              const current2 = closure_129_4.current;
              if (current2 != null) {
                current2.closeActionSheet();
              }
            } else {
              closure_129_11(true);
            }
            c5 = 3;
            const obj10 = { value: tmp45, done: true };
            return obj10;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c3 = 0;
            closure_129_6({});
            closure_129_8({});
            if (true !== closure_129_1.over_mcp) {
              let UGqnoV;
              const intl = closure_0(closure_2[15]).intl;
              const string = intl.string;
              const tmp14 = tmp(closure_2[16]);
              const tmp6 = _undefined3;
              const tmp7 = closure_129_0;
              if (closure_129_19) {
                UGqnoV = tmp14.sMQt5O;
              } else {
                UGqnoV = tmp14.UGqnoV;
              }
              tmp6(tmp7, string(UGqnoV));
            }
            const tmp17 = closure_129_19;
            if (tmp17) {
              obj = { text: intl2.formatToPlainString(tmp(closure_2[16])["xfz7+k"], obj12), variant: "success" };
              const showToast = closure_0(closure_2[17]).showToast;
              const tmp20 = closure_0(closure_2[17]);
              intl2 = closure_0(closure_2[15]).intl;
              obj12 = { items: closure_129_18 };
              showToast(obj);
            }
            const current = closure_129_4.current;
            if (current != null) {
              current.closeActionSheet();
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp78) {
          closure_2 = tmp78;
          if (0 === c3) {
            c5 = 3;
            throw tmp78;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = request;
  let tmp2 = dependencyMap;
  let tmp3 = request(8487)();
  const height = tmp3.height;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  const tmp4 = c11;
  if (undefined !== height) {
    num = height;
  }
  const tmp4Result = tmp4(num);
  dependencyMap = tmp4Result;
  let tmp6 = require;
  obj = get_initialized;
  let items = [c8];
  closure_3 = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(require));
  ref1 = react.useRef(null);
  [c5, c6] = ref1(react.useState({}), 2);
  const tmp8 = ref1(react.useState({}), 2);
  [c7, c8] = ref1(react.useState({}), 2);
  const tmp9 = ref1(react.useState({}), 2);
  const tmp10 = ref1(react.useState(false), 2);
  loading = tmp10[0];
  closure_10 = tmp10[1];
  [tmp13, c11] = ref1(react.useState(false), 2);
  const tmp12 = ref1(react.useState(false), 2);
  let tmp14 = ref1(react.useState(null), 2);
  [c12, c13] = tmp14;
  closure_14 = react.useCallback((arg0) => {
    let closure_0;
    require = arg0;
    obj = require("ClipboardUtils");
    obj.copy(arg0, () => c13(closure_0));
  }, []);
  closure_15 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined4(false);
    _undefined2((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const fields1 = request.fields;
  const mapped = fields1.map((name) => name.name);
  found = mapped.filter((item) => {
    let str = c5[item];
    if (str == null) {
      str = "";
    }
    return "" !== str.trim();
  });
  closure_17 = tmp15;
  const fields2 = request.fields;
  const conjureSetupNeededText = conjureSetupForm.conjureSetupNeededText;
  const found1 = fields2.filter((name) => {
    const hasItem = found.includes(name.name);
    let tmp2 = !hasItem;
    if (tmp2) {
      name = name.name;
      let someResult;
      if (closure_3 != null) {
        const secrets = closure_3.secrets;
        someResult = secrets.some((name) => name.name === name && name.set);
      }
      tmp2 = true !== someResult;
    }
    return tmp2;
  });
  let result = conjureSetupNeededText(found1.map((label) => label.label));
  c18 = result;
  closure_19 = "" !== result;
  ({ fields, copy_values } = request);
  const length = fields.filter((name) => {
    let hasItem = found.includes(name.name);
    if (!hasItem) {
      name = name.name;
      let someResult;
      if (closure_3 != null) {
        const secrets = closure_3.secrets;
        someResult = secrets.some((name) => name.name === name && name.set);
      }
      hasItem = true === someResult;
    }
    return hasItem;
  }).length;
  if (copy_values == null) {
    copy_values = [];
  }
  const fields3 = request.fields;
  const mapped1 = fields3.map((label) => {
    let someResult;
    let str;
    obj = {
      label: label.label,
      help: label.hint,
      hosts: label.hosts,
      stored: true === someResult,
      replacing: true === _undefined3[label.name],
      onReplace() {
        let name;
        return c8((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = true;
          return obj;
        });
      },
      value: str,
      onChange(arg0) {
        return closure_15(label.name, arg0);
      },
      disabled
    };
    const name = label.name;
    someResult = undefined;
    const tmp = disabled;
    const tmp2 = request(closure_2[18]);
    if (closure_3 != null) {
      const secrets = closure_3.secrets;
      someResult = secrets.some((name) => name.name === name && name.set);
    }
    str = _undefined[label.name];
    if (str == null) {
      str = "";
    }
    return tmp(tmp2, obj, label.name);
  });
  const fields4 = request.fields;
  const tmp6Result = conjureSetupForm;
  let result1 = tmp6Result.conjureSetupStatusText(fields4.map((key) => {
    let hasItem = found.includes(key.name);
    if (!hasItem) {
      const name = key.name;
      let someResult;
      if (closure_3 != null) {
        const secrets = closure_3.secrets;
        someResult = secrets.some((name) => name.name === name && name.set);
      }
      hasItem = true === someResult;
    }
    return { key: key.name, label: key.label, filled: hasItem, needed: !hasItem };
  }));
  let tmp20 = loading;
  let obj2 = { ref: ref1, startExpanded: true, keyboardShouldPersistTaps: "always", header: loading(BottomSheetTitleHeader, obj3), footer: tmp21(tmp22, obj6), children: tmp21(tmp22, obj10) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj3 = { title: intl.string(tmp(4245).TuMGZp), subtitle: intl2.formatToPlainString(tmp(4245).hoevP8, obj4), trailing: loading(ActionSheetCloseButton.ActionSheetCloseButton, obj5) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl8.intl;
  intl2 = intl8.intl;
  obj4 = { filled: length, total: request.fields.length };
  obj5 = {
    onPress() {
      const current = ref1.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  };
  obj6 = { style: tmp4Result.footer, ref, onLayout, children: items1 };
  let tmp20Result = null;
  if (null != result1) {
    let obj7 = { variant: "body-xs/normal", color: "text-muted", lineClamp: conjureSetupForm.SETUP_STATUS_MAX_LINES, accessibilityLabel: result1, accessibilityLiveRegion: "polite", children: result1 };
    const Text = Text_Text.Text;
    tmp20Result = tmp20(Text, obj7);
  }
  items1 = [tmp20Result, ];
  let obj8 = { bottom: true, children: tmp20(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = {
    text: intl3.string(tmp(4245).DUdtms),
    variant: "primary",
    loading,
    disabled: found.length <= 0,
    onPress: function handleSubmit() {
      return obj(...arguments);
    }
  };
  Button = components_Button_Button.Button;
  intl3 = intl8.intl;
  items1[1] = tmp20(SafeAreaPaddingView, obj8);
  obj10 = { style: tmp4Result.container, children: items2 };
  let tmp20Result3 = null;
  if (null != request.note) {
    tmp20Result3 = null;
    if ("" !== request.note) {
      let obj11 = { text: request.note, variant: "body-sm/normal", color: "text-default", shortLinks: true };
      tmp20Result3 = tmp20(tmp(18533), obj11);
    }
  }
  items2 = [tmp20Result3, , , ];
  let tmp21Result = null;
  if (copy_values.length > 0) {
    let obj12 = { style: tmp4Result.step, children: items4 };
    const obj13 = { style: tmp4Result.stepHeader, children: items3 };
    const obj14 = { variant: "heading-sm/semibold", children: intl4.string(tmp(4245)["6sN6pA"]) };
    const Heading = Text_Text.Heading;
    intl4 = intl8.intl;
    items3 = [tmp20(Heading, obj14), ];
    const obj15 = { variant: "body-xs/normal", color: "text-muted", children: intl5.string(tmp(4245).u0vpJw) };
    const Text2 = Text_Text.Text;
    intl5 = intl8.intl;
    items3[1] = tmp20(Text2, obj15);
    items4 = [
      tmp21(tmp22, obj13),
      copy_values.map((children) => {
          let OpuAlK;
          let items;
          let items1;
          const obj2 = { style: closure_2.copyInfo, children: items };
          items = [, ];
          obj = { style: closure_2.copyRow, children: items1 };
          const obj3 = { variant: "body-xs/semibold", color: "text-muted", children: children.label };
          items[0] = first(require("Text/Text").Text, obj3);
          const obj4 = { variant: "body-xs/normal", color: "text-default", children: children.value };
          items[1] = first(require("Text/Text").Text, obj4);
          items1 = [closure_10(c6, obj2), ];
          const Button = require("components/Button/Button").Button;
          const intl = require("intl").intl;
          const string = intl.string;
          const tmp = closure_10;
          const tmp2 = c6;
          const tmp3 = first;
          if (c12 === children.value) {
            OpuAlK = tmp4(tmp5[15]).t.t5VZ88;
          } else {
            OpuAlK = tmp4(tmp5[15]).t.OpuAlK;
          }
          const obj5 = {
            variant: "secondary",
            size: "sm",
            text: string(OpuAlK),
            onPress() {
              return closure_14(children.value);
            }
          };
          items1[1] = tmp3(Button, obj5);
          return tmp(tmp2, obj, children.label);
        })
    ];
    tmp21Result = tmp21(tmp22, obj12);
  }
  items2[1] = tmp21Result;
  const tmpResult = tmp(18551);
  const intl6 = intl8.intl;
  let string = intl6.string;
  if (copy_values.length > 0) {
    ekefN9 = tmp(4245).ekefN9;
  } else {
    ekefN9 = tmp(4245)["xEfQj/"];
  }
  const obj16 = { title: string(ekefN9), children: mapped1 };
  items2[2] = tmp20(tmpResult, obj16);
  let tmp20Result4 = null;
  if (tmp13) {
    const obj17 = { variant: "body-xs/normal", color: "text-feedback-critical", children: intl7.string(tmp(4245).IrMuew) };
    const Text3 = Text_Text.Text;
    intl7 = intl8.intl;
    tmp20Result4 = tmp20(Text3, obj17);
  }
  items2[3] = tmp20Result4;
  return tmp20(ActionSheet, obj2);
};
export const CONJURE_SECRETS_SHEET_KEY = "ConjureSecretsSheet";
