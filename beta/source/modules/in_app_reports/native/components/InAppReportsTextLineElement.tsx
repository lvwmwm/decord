// Module ID: 8109
// Function ID: 8110
// Name: InAppReportsTextLineElement
// Dependencies: [5, 32, 19, 17, 21, 4836, 576, 5910, 5301, 1364, 4812, 4525, 4832, 5281, 1115, 6610, 4527, 2]
// Exports: default

// Module 8109 (InAppReportsTextLineElement)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ View: metroImportDefault, Linking: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: obj2, smsNumberContainerSuccess: obj3, startButtonContainer: { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default function TextLineElement(element) {
  let Button;
  let Button2;
  let _undefined;
  let body;
  let c2;
  let intl2;
  let is_localized;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj8;
  let title;
  let tmp3;
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  let obj = function _handleOpenSms() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let tmp2;
      function buildSmsUrl(arg0, arg1) {
        let str = "?";
        obj = closure_1_0(closure_1_3[9]);
        const tmp = closure_1_0;
        const tmp2 = closure_1_3;
        if (obj.isIOS()) {
          let str2 = "&";
          const tmpResult = tmp(tmp2[10]);
          if (tmpResult.getSystemVersionMajor() < 8) {
            str2 = ";";
          }
          str = str2;
        }
        let str3 = "";
        const combined = "sms:" + arg0;
        if (null != arg1) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          str3 = "" + str + "body=" + encodeURIComponent(arg1);
        }
        return combined + str3;
      }
      if (c3 === 2) {
        c3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          let closure_0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp14 = buildSmsUrl(sms, sms_body);
              closure_0 = tmp14;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: closure_1_8.canOpenURL(tmp14), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              obj = tmp2(c3[11]);
              obj.openURL(closure_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  ({ title, body, is_localized } = data);
  let tmp = closure_11();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const tmp4 = obj;
  if (is_localized) {
    let stringResult;
    obj = { style: tmp.container, children: items };
    let obj2 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const tmp7 = tmp3 ? tmp.smsNumberContainerSuccess : {};
    items = [closure_9(sms(tmp4[12]).Text, obj2), , ];
    let obj3 = { style: tmp.description, variant: "text-md/medium", children: tmp5(body) };
    const Text = sms(tmp4[12]).Text;
    items[1] = closure_9(Text, obj3);
    let obj4 = { style: tmp.smsInfoContainer, children: items3 };
    let obj5 = { style: items1, children: items2 };
    items1 = [tmp.smsNumberContainer, tmp7];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    items2 = [closure_9(sms(tmp4[12]).Text, obj6), ];
    const obj7 = { style: tmp.trailingButtonContainer, children: closure_9(Button, obj8) };
    Button = sms(tmp4[13]).Button;
    const intl = sms(tmp4[14]).intl;
    const string = intl.string;
    const t = sms(tmp4[14]).t;
    if (tmp3) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj8 = {
      text: stringResult,
      size: "sm",
      onPress: function handleCopyPress() {
          obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          _undefined(true);
        },
      variant: "secondary"
    };
    items2[1] = closure_9(closure_7, obj7);
    items3 = [tmp8(tmp9, obj5), ];
    const obj9 = { style: tmp.startButtonContainer, children: closure_9(Button2, obj10) };
    obj10 = {
      text: intl2.string(sms(tmp4[14]).t.BDYHSe),
      size: "md",
      onPress: function handleOpenSms() {
          return obj(...arguments);
        }
    };
    Button2 = tmp11(tmp4[13]).Button;
    intl2 = tmp11(tmp4[14]).intl;
    items3[1] = closure_9(closure_7, obj9);
    items[2] = closure_10(closure_7, obj4);
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
};
