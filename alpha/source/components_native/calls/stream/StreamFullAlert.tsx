// Module ID: 20005
// Function ID: 20006
// Name: StreamFullAlert
// Dependencies: [19, 21, 5942, 1114, 6025, 5619, 2]
// Exports: default

// Module 20005 (StreamFullAlert)
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import AVError from "AVError" /* 5942 */;
import AlertDefault from "Alert" /* 6025 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = { body: { marginTop: 16 } };
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let intl2;
  let intl3;
  let items;
  const obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1114).intl;
  const obj2 = { title: intl2.string(intl4.t.GzjdO5), children: items };
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, { errorCode });
  const tmp6 = AlertDefault;
  const merged = Object.assign(arg0);
  intl2 = tmp(1114).intl;
  const obj3 = { variant: "text-md/normal", style: closure_5.body, children: intl3.string(intl4.t.VVZDBL) };
  const Text = tmp(5619).Text;
  intl3 = tmp(1114).intl;
  items = [_false(Text, obj3), ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: formatToPlainStringResult };
  items[1] = _false(Text_Text.Text, obj4);
  return React3(tmp6, obj2);
};
