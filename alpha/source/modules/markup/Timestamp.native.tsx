// Module ID: 11820
// Function ID: 11821
// Name: Timestamp
// Dependencies: [19, 21, 5310, 575, 11821, 1187, 6009, 2]
// Exports: default

// Module 11820 (Timestamp)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 11821 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
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
