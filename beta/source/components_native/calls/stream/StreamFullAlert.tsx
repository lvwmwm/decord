// Module ID: 17683
// Function ID: 17684
// Name: StreamFullAlert
// Dependencies: [19, 17, 21, 8875, 1115, 5300, 4832, 17684, 2]
// Exports: default

// Module 17683 (StreamFullAlert)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import AVError from "AVError" /* 8875 */;
import AssetRegistryDefault from "AssetRegistry" /* 17684 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
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
  const intl = tmp(1115).intl;
  const obj2 = { title: intl2.string(intl4.t.GzjdO5), children: items };
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, { errorCode });
  const tmp6 = AlertDefault;
  const merged = Object.assign(arg0);
  intl2 = tmp(1115).intl;
  const obj3 = { variant: "text-md/normal", style: closure_6.body, children: intl3.string(intl4.t.VVZDBL) };
  const Text = tmp(4832).Text;
  intl3 = tmp(1115).intl;
  items = [React3(Text, obj3), , ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { source: AssetRegistryDefault, style: closure_6.image };
  items[2] = React3(Image, obj5);
  return hasOwnProperty(tmp6, obj2);
};
