// Module ID: 9588
// Function ID: 9589
// Name: Timestamp
// Dependencies: [19, 21, 4836, 576, 9589, 1177, 4528, 2]
// Exports: default

// Module 9588 (Timestamp)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 9589 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  const LegacyText = node(1177).LegacyText;
  const tmp3 = jsx;
  if (timestamp == null) {
    timestamp = style;
  }
  let obj = {
    style: timestamp,
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { key: "TIMESTAMP", content: node.full };
      obj.open(obj2);
    },
    children: tmp2
  };
  return tmp3(LegacyText, obj);
};
