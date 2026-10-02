// Module ID: 11450
// Function ID: 11451
// Name: Timestamp
// Dependencies: [19, 21, 4837, 588, 558, 576, 11451, 4531, 1189, 2]

// Module 11450 (Timestamp)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 11451 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let node;

let obj2;
const jsx = Fragment.jsx;
let obj = { timestamp: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  let tmp6;
  let obj = node(576);
  const cResult = obj.c(6);
  const tmp = node;
  node = node.node;
  const style = node.style;
  const tmp4 = closure_4();
  const tmp5 = useFormattedTimestampDefault(node);
  let timestamp = tmp4.timestamp;
  if (timestamp == null) {
    timestamp = style;
  }
  if (cResult[0] !== node.full) {
    const fn = function o() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { key: "TIMESTAMP", content: node.full };
      obj.open(obj2);
    };
    cResult[0] = node.full;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === timestamp) {
      let tmp7;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(tmp(1189).LegacyText, { style: timestamp, onPress: tmp6, children: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = timestamp;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((node) => {
  node = node.node;
  const style = node.style;
  let timestamp = closure_4().timestamp;
  const tmp = closure_4();
  const tmp2 = useFormattedTimestampDefault(node);
  const LegacyText = node(1189).LegacyText;
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
});
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default tmp3;
