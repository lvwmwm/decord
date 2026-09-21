// Module ID: 12222
// Function ID: 12223
// Name: Timestamp
// Dependencies: [19, 21, 4758, 580, 558, 568, 12223, 4458, 1181, 2]

// Module 12222 (Timestamp)
import nativeDefault from "native" /* 580 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 12223 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
const obj2 = { timestamp: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  const cResult = node(568).c(6);
  node = node.node;
  const obj = node(568);
  const tmp = node;
  const tmp5 = useFormattedTimestampDefault(node);
  let style = closure_4().timestamp;
  if (style == null) {
    style = node.style;
  }
  if (cResult[0] !== node.full) {
    const fn = function o() {
      ToastActionCreatorsDefault.open({ key: "TIMESTAMP", content: node.full });
    };
    cResult[0] = node.full;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === style) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(tmp(1181).LegacyText, { style, onPress: tmp6, children: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = style;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((node) => {
  node = node.node;
  const tmp = closure_4();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = useFormattedTimestampDefault(node);
  const tmp3 = jsx;
  return tmp3(node(1181).LegacyText, {
    style,
    onPress() {
      ToastActionCreatorsDefault.open({ key: "TIMESTAMP", content: node.full });
    },
    children: useFormattedTimestampDefault(node)
  });
});
