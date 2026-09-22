// Module ID: 10391
// Function ID: 10392
// Name: Timestamp
// Dependencies: [19, 21, 4757, 576, 10392, 1177, 4455, 2]
// Exports: default

// Module 10391 (Timestamp)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4455 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 10392 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj2 = { timestamp: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = closure_4();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = useFormattedTimestampDefault(node);
  const tmp3 = jsx;
  return tmp3(node(1177).LegacyText, {
    style,
    onPress() {
      ToastActionCreatorsDefault.open({ key: "TIMESTAMP", content: node.full });
    },
    children: useFormattedTimestampDefault(node)
  });
};
