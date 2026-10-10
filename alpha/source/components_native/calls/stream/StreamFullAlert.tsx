// Module ID: 18618
// Function ID: 18619
// Name: StreamFullAlert
// Dependencies: [19, 21, 558, 576, 5289, 1126, 5088, 6156, 18619, 5398, 2]

// Module 18618 (StreamFullAlert)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import AVError from "AVError" /* 5289 */;
import AlertDefault from "Alert" /* 5398 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 18619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamFullAlert(arg0) {
  let first;
  let intl3;
  let items;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp21;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AVError;
    const errorInfo = tmpResult.getErrorInfo(tmp(5289).AVError.STREAM_FULL);
    let errorCode;
    if (errorInfo != null) {
      errorCode = errorInfo.errorCode;
    }
    const intl = tmp(1126).intl;
    const obj2 = { errorCode };
    const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, obj2);
    cResult[0] = formatToPlainStringResult;
    first = formatToPlainStringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(intl4.t.GzjdO5);
    cResult[1] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", style: closure_5.body, children: intl3.string(intl4.t.VVZDBL) };
    const Text = tmp(5088).Text;
    intl3 = tmp(1126).intl;
    const tmp16 = _false(Text, obj3);
    const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: first };
    const tmp17 = _false(Text_Text.Text, obj4);
    const obj5 = { source: AssetRegistryDefault, style: closure_5.image };
    const tmp19 = FastImageDefault;
    const tmp20 = _false(tmp19, obj5);
    cResult[2] = tmp16;
    cResult[3] = tmp17;
    cResult[4] = tmp20;
    tmp13 = tmp20;
    tmp12 = tmp17;
    tmp11 = tmp16;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const obj6 = { title: tmp9, children: items };
    const tmp24 = AlertDefault;
    const merged = Object.assign(arg0);
    items = [tmp11, tmp12, tmp13];
    const tmp28 = React3(tmp24, obj6);
    cResult[5] = arg0;
    cResult[6] = tmp28;
    tmp21 = tmp28;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
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
  const intl = tmp(1126).intl;
  const obj2 = { title: intl2.string(intl4.t.GzjdO5), children: items };
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, { errorCode });
  const tmp6 = AlertDefault;
  const merged = Object.assign(arg0);
  intl2 = tmp(1126).intl;
  const obj3 = { variant: "text-md/normal", style: closure_5.body, children: intl3.string(intl4.t.VVZDBL) };
  const Text = tmp(5088).Text;
  intl3 = tmp(1126).intl;
  items = [_false(Text, obj3), , ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: formatToPlainStringResult };
  items[1] = _false(Text_Text.Text, obj4);
  const obj5 = { source: AssetRegistryDefault, style: closure_5.image };
  const tmp8 = FastImageDefault;
  items[2] = _false(tmp8, obj5);
  return React3(tmp6, obj2);
});
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default tmp4;
