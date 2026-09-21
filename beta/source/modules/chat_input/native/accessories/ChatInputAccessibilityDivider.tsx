// Module ID: 12409
// Function ID: 12410
// Name: ChatInputAccessibilityDivider
// Dependencies: [19, 17, 21, 558, 568, 5173, 1368, 1119, 2]

// Module 12409 (ChatInputAccessibilityDivider)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let c5 = "chat-input-accessibility-divider";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  let tmp4 = null;
  if (obj2.useIsScreenReaderEnabled()) {
    tmp4 = null;
    if (!tmpResult.isAndroid()) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t["uKZtC/"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { nativeID, accessible: true, accessibilityLabel: first, accessibilityRole: "header", style: null };
        const items = [React2.absoluteFill, ];
        first = { height: 1 };
        items[1] = first;
        obj3.style = items;
        const tmp12 = <React3 nativeID={nativeID} accessible accessibilityLabel={first} accessibilityRole="header" style={null} />;
        cResult[1] = tmp12;
      }
    }
    tmpResult = tmp(1368);
  }
  return tmp4;
}) : (() => {
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      const obj2 = { nativeID, accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = tmp(1119).intl;
      obj2.accessibilityLabel = intl.string(tmp(1119).t["uKZtC/"]);
      const items = [React2.absoluteFill, { height: 1 }];
      obj2.style = items;
      tmp3 = <React3 nativeID={nativeID} accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = tmp(1368);
  }
  return tmp3;
}));
