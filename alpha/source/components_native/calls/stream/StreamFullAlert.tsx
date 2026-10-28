// Module ID: 19720
// Function ID: 19721
// Name: StreamFullAlert
// Dependencies: [19, 21, 558, 576, 5933, 1125, 5270, 6014, 2]

// Module 19720 (StreamFullAlert)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import AVError from "AVError" /* 5933 */;
import AlertDefault from "Alert" /* 6014 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = { body: { marginTop: 16 } };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamFullAlert(arg0) {
  let first;
  let intl3;
  let items;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AVError;
    const errorInfo = tmpResult.getErrorInfo(tmp(5933).AVError.STREAM_FULL);
    let errorCode;
    if (errorInfo != null) {
      errorCode = errorInfo.errorCode;
    }
    const intl = tmp(1125).intl;
    const obj2 = { errorCode };
    const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, obj2);
    cResult[0] = formatToPlainStringResult;
    first = formatToPlainStringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1125).intl;
    const stringResult = intl2.string(intl4.t.GzjdO5);
    cResult[1] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", style: closure_5.body, children: intl3.string(intl4.t.VVZDBL) };
    const Text = tmp(5270).Text;
    intl3 = tmp(1125).intl;
    const tmp15 = _false(Text, obj3);
    const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: first };
    const tmp16 = _false(Text_Text.Text, obj4);
    cResult[2] = tmp15;
    cResult[3] = tmp16;
    tmp12 = tmp16;
    tmp11 = tmp15;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const obj5 = { title: tmp9, children: items };
    const tmp20 = AlertDefault;
    const merged = Object.assign(arg0);
    items = [tmp11, tmp12];
    const tmp24 = React3(tmp20, obj5);
    cResult[4] = arg0;
    cResult[5] = tmp24;
    tmp17 = tmp24;
  } else {
    tmp17 = cResult[5];
  }
  return tmp17;
}) : (function StreamFullAlert(arg0) {
  let intl2;
  let intl3;
  let items;
  const obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1125).intl;
  const obj2 = { title: intl2.string(intl4.t.GzjdO5), children: items };
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, { errorCode });
  const tmp6 = AlertDefault;
  const merged = Object.assign(arg0);
  intl2 = tmp(1125).intl;
  const obj3 = { variant: "text-md/normal", style: closure_5.body, children: intl3.string(intl4.t.VVZDBL) };
  const Text = tmp(5270).Text;
  intl3 = tmp(1125).intl;
  items = [_false(Text, obj3), ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: formatToPlainStringResult };
  items[1] = _false(Text_Text.Text, obj4);
  return React3(tmp6, obj2);
});
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default tmp4;
