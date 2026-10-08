// Module ID: 16869
// Function ID: 16870
// Name: ConjureRemovedItems
// Dependencies: [19, 17, 21, 5090, 587, 1126, 8741, 558, 576, 8209, 12825, 8177, 5086, 3827, 5373, 2]
// Exports: formatWithAppTag

// Module 16869 (ConjureRemovedItems)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import FolderIcon from "FolderIcon" /* 8177 */;
import AppsIcon from "AppsIcon" /* 8209 */;
import BotTagDefault from "BotTag" /* 8741 */;
import RobotIcon from "RobotIcon" /* 12825 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { box: obj2 };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemIcon(kind) {
  const obj = react2;
  const cResult = obj.c(3);
  kind = kind.kind;
  if ("channel" === kind) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
      cResult[0] = tmp15;
      first = tmp15;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("app" === kind) {
    let tmp9;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
      cResult[1] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if ("project" === kind) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
      cResult[2] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
}) : (function ItemIcon(kind) {
  kind = kind.kind;
  if ("channel" === kind) {
    return hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemovedItems(items) {
  let first;
  let intl;
  let items1;
  let tmp12;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(9);
  items = items.items;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3827["+E2PqP"]) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp8 = hasOwnProperty(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const box = tmp4.box;
  if (cResult[1] !== items) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v(kind) {
        let items;
        const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
        const obj2 = { kind: kind.kind };
        const Stack = Stack_Stack.Stack;
        items = [closure_1_5(closure_1_8, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
        items[1] = closure_1_5(Text_Text.Text, obj3);
        return closure_1_6(Stack, obj, kind.key);
      };
      cResult[3] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[3];
    }
    const mapped = items.map(tmp10);
    cResult[1] = items;
    cResult[2] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[4] !== tmp9) {
    let obj3 = { spacing: 8, children: tmp9 };
    const tmp14 = hasOwnProperty(Stack_Stack.Stack, obj3);
    cResult[4] = tmp9;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.box) {
    let tmp15;
    if (cResult[7] === tmp12) {
      tmp15 = cResult[8];
    }
    return tmp15;
  }
  const obj4 = { spacing: 8, children: items1 };
  items1 = [first, ];
  let Stack = tmp(5373).Stack;
  items1[1] = hasOwnProperty(View, { style: box, children: tmp12 });
  const tmp16 = metroRequire(Stack, obj4);
  cResult[6] = tmp4.box;
  cResult[7] = tmp12;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (function ConjureRemovedItems(items) {
  let Stack2;
  let intl;
  let items1;
  let obj4;
  items = items.items;
  let obj = { spacing: 8, children: items1 };
  const tmp = closure_7();
  let Stack = Stack_Stack.Stack;
  let obj2 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3827["+E2PqP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj2), ];
  let obj3 = { style: tmp.box, children: hasOwnProperty(Stack2, obj4) };
  obj4 = {
    spacing: 8,
    children: items.map((kind) => {
      let items;
      const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
      const obj2 = { kind: kind.kind };
      const Stack = Stack_Stack.Stack;
      items = [closure_1_5(closure_1_8, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
      items[1] = closure_1_5(Text_Text.Text, obj3);
      return closure_1_6(Stack, obj, kind.key);
    })
  };
  Stack2 = Stack_Stack.Stack;
  items1[1] = hasOwnProperty(View, obj3);
  return metroRequire(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default tmp3;
export const formatWithAppTag = function formatWithAppTag(_87CtcA, appName) {
  let Fragment;
  let items;
  let obj2;
  const intl = intl2.intl;
  const obj = { app: metroRequire(Fragment, obj2, "app") };
  obj2 = { children: items };
  items = [appName, " ", ];
  const format = intl.format;
  Fragment = react.Fragment;
  items[2] = hasOwnProperty(BotTagDefault, {});
  return format(_87CtcA, obj);
};
