// Module ID: 10610
// Function ID: 10611
// Name: Timestamp
// Dependencies: [19, 21, 5012, 575, 10611, 5694, 5603, 1186, 2]
// Exports: default

// Module 10610 (Timestamp)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 10611 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { timestamp: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  let fn;
  let interactive;
  let style;
  let timestamp2;
  let tmp4Result;
  let variant;
  node = node.node;
  ({ style, variant, interactive } = node);
  if (interactive === undefined) {
    interactive = true;
  }
  const tmp = closure_4();
  const tmp3 = useFormattedTimestampDefault(node);
  if (interactive) {
    fn = () => {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text: node.full };
      return obj.open("TIMESTAMP", obj2);
    };
  }
  if (null != variant) {
    let obj2 = { variant, color: "none", style: timestamp2, onPress: fn, children: tmp3 };
    timestamp2 = tmp.timestamp;
    const Text = node(5603).Text;
    const tmp7 = jsx;
    if (timestamp2 == null) {
      timestamp2 = style;
    }
    tmp4Result = tmp7(Text, obj2);
  } else {
    let timestamp = tmp.timestamp;
    const LegacyText = node(1186).LegacyText;
    const tmp4 = jsx;
    if (timestamp == null) {
      timestamp = style;
    }
    let obj = { style: timestamp, onPress: fn, children: tmp3 };
    tmp4Result = tmp4(LegacyText, obj);
  }
  return tmp4Result;
};
