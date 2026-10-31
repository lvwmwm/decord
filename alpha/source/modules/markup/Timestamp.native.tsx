// Module ID: 11057
// Function ID: 11058
// Name: Timestamp
// Dependencies: [19, 21, 5014, 575, 11058, 1187, 5712, 2]
// Exports: default

// Module 11057 (Timestamp)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 11058 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { timestamp: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const style = node.style;
  let timestamp = closure_4().timestamp;
  const tmp = closure_4();
  const tmp2 = useFormattedTimestampDefault(node);
  const LegacyText = node(1187).LegacyText;
  const tmp3 = jsx;
  if (timestamp == null) {
    timestamp = style;
  }
  let obj = {
    style: timestamp,
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text: node.full };
      obj.open("TIMESTAMP", obj2);
    },
    children: tmp2
  };
  return tmp3(LegacyText, obj);
};
