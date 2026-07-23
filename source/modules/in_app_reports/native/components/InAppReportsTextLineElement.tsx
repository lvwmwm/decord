// Module ID: 7618
// Function ID: 61052
// Name: TextLineElement
// Dependencies: [5, 57, 31, 27, 33, 4130, 689, 5450, 4562, 477, 4110, 3827, 4126, 4543, 1212, 5492, 3830, 2]
// Exports: default

// Module 7618 (TextLineElement)
import closure_4 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_7, Linking: closure_8 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
_createForOfIteratorHelperLoose.smsNumberContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.smsNumberContainerSuccess = { borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND };
_createForOfIteratorHelperLoose.startButtonContainer = { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND };
let result = require("result").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default function TextLineElement(element) {
  let body;
  let is_localized;
  let title;
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  async function _handleOpenSms() {
    let str = "?";
    if (obj.isIOS()) {
      let str2 = "&";
      if (obj2.getSystemVersionMajor() < 8) {
        str2 = ";";
      }
      str = str2;
      obj2 = sms(_handleOpenSms[10]);
    }
    let str3 = "";
    const combined = "sms:" + outer2_0;
    if (null != outer2_1) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      str3 = "" + str + "body=" + encodeURIComponent(tmp2);
    }
    const sum = combined + str3;
    if (yield outer3_8.canOpenURL(sum)) {
      sms_body(_handleOpenSms[11]).openURL(sum);
      const obj3 = sms_body(_handleOpenSms[11]);
    }
  }
  ({ title, body, is_localized } = data);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  let closure_2 = tmp2[1];
  if (is_localized) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const items = [callback2(sms(_handleOpenSms[12]).Text, obj), , ];
    obj = { style: tmp.description, variant: "text-md/medium", children: tmp4(body) };
    items[1] = callback2(sms(_handleOpenSms[12]).Text, obj);
    const obj1 = { style: tmp.smsInfoContainer };
    let obj2 = {};
    const items1 = [tmp.smsNumberContainer, first ? tmp.smsNumberContainerSuccess : {}];
    obj2.style = items1;
    let obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    const items2 = [callback2(sms(_handleOpenSms[12]).Text, obj3), ];
    const obj4 = { style: tmp.trailingButtonContainer };
    const obj5 = {};
    const intl = sms(_handleOpenSms[14]).intl;
    const string = intl.string;
    const t = sms(_handleOpenSms[14]).t;
    if (first) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj5.text = stringResult;
    obj5.size = "sm";
    obj5.onPress = function handleCopyPress() {
      sms(_handleOpenSms[15]).copy(sms);
      const obj = sms(_handleOpenSms[15]);
      const result = sms(_handleOpenSms[16]).presentCopiedToClipboard();
      callback(true);
    };
    obj5.variant = "secondary";
    obj4.children = callback2(sms(_handleOpenSms[13]).Button, obj5);
    items2[1] = callback2(closure_7, obj4);
    obj2.children = items2;
    const items3 = [closure_10(closure_7, obj2), ];
    const obj6 = { style: tmp.startButtonContainer };
    const obj7 = {};
    const intl2 = sms(_handleOpenSms[14]).intl;
    obj7.text = intl2.string(sms(_handleOpenSms[14]).t.BDYHSe);
    obj7.size = "md";
    obj7.onPress = function handleOpenSms() {
      return _handleOpenSms(...arguments);
    };
    obj6.children = callback2(sms(_handleOpenSms[13]).Button, obj7);
    items3[1] = callback2(closure_7, obj6);
    obj1.children = items3;
    items[2] = closure_10(closure_7, obj1);
    obj.children = items;
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
};
