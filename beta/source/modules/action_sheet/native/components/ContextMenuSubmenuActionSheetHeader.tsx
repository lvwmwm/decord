// Module ID: 11854
// Function ID: 11855
// Name: ContextMenuSubmenuActionSheetHeader
// Dependencies: [19, 17, 21, 4758, 558, 568, 1119, 9781, 2]

// Module 11854 (ContextMenuSubmenuActionSheetHeader)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9781 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_4 = createStyles.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onBack) => {
  const cResult = c.c(8);
  onBack = onBack.onBack;
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["13/7kX"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onBack) {
    let fn = onBack;
    if (onBack == null) {
      fn = () => {

      };
    }
    cResult[1] = onBack;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    const obj2 = { label: first, onPress: tmp7 };
    const tmp11 = jsx(tmp(9781).ActionSheetHeaderPressableText, { label: first, onPress: tmp7 });
    cResult[3] = tmp7;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4.headerContainer) {
    if (cResult[6] === tmp9) {
      let tmp12 = cResult[7];
    }
    return tmp12;
  }
  const tmp13 = <View style={tmp4.headerContainer}>{tmp9}</View>;
  cResult[5] = tmp4.headerContainer;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((onBack) => {
  let fn = onBack.onBack;
  const obj = { style: closure_4().headerContainer, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["13/7kX"]);
  if (fn == null) {
    fn = () => {

    };
  }
  obj2.onPress = fn;
  obj.children = jsx(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View style={closure_4().headerContainer}>{null}</View>;
});
