// Module ID: 12204
// Function ID: 12205
// Name: ConjureNativeMarkdown
// Dependencies: [19, 17, 21, 587, 5191, 558, 576, 12205, 5187, 12206, 12207, 2]

// Module 12204 (ConjureNativeMarkdown)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5187 */;
import ConjureMarkdownBlocks from "ConjureMarkdownBlocks" /* 12205 */;
import conjureMarkup from "conjureMarkup" /* 12206 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj4;
let obj5;
let obj6;
let tmp;
const useConjureRevealedText = tmp(12207);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const CONJURE_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = { allowList: false };
const merged = Object.assign(CONJURE_MARKUP_OPTIONS);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj3 = { blocks: obj4, list: obj5, item: { flexDirection: "row", alignItems: "flex-start" }, marker: obj6, itemText: { flex: 1 } };
obj4 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeMarkdown(source) {
  let arr;
  let list;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(16);
  source = source.source;
  let tmp4 = closure_9();
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] !== source) {
    const tmpResult = tmp(12205);
    const splitMarkdownBlocksResult = tmpResult.splitMarkdownBlocks(source);
    cResult[0] = source;
    cResult[1] = splitMarkdownBlocksResult;
    arr = splitMarkdownBlocksResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    if (cResult[3] === tmp4.item) {
      if (cResult[4] === tmp4.itemText) {
        if (cResult[5] === tmp4.list) {
          if (cResult[6] === tmp4.marker) {
            tmp7 = cResult[7];
          }
          if (cResult[13] === tmp4.blocks) {
            let tmp10;
            if (cResult[14] === tmp7) {
              tmp10 = cResult[15];
            }
            return tmp10;
          }
          obj2 = { style: tmp6, children: tmp7 };
          const tmp13 = closure_4(View, obj2);
          cResult[13] = tmp4.blocks;
          cResult[14] = tmp7;
          cResult[15] = tmp13;
          tmp10 = tmp13;
        }
      }
    }
  }
  if (cResult[8] === tmp4.item) {
    if (cResult[9] === tmp4.itemText) {
      if (cResult[10] === tmp4.list) {
        let tmp8;
        if (cResult[11] === tmp4.marker) {
          tmp8 = cResult[12];
        }
        const mapped = arr.map(tmp8);
        cResult[2] = arr;
        cResult[3] = tmp4.item;
        cResult[4] = tmp4.itemText;
        cResult[5] = tmp4.list;
        cResult[6] = tmp4.marker;
        cResult[7] = mapped;
        tmp7 = mapped;
      }
    }
  }
  const fn = function j(kind, arg1) {
    let items;
    let obj;
    let obj3;
    let tmp4;
    if ("text" === kind.kind) {
      obj2 = { variant: "text-md/normal", color: "text-default", children: obj3.parseConjureMarkup(kind.text, true, obj) };
      let Text = Text_Text.Text;
      obj3 = conjureMarkup;
      tmp4 = React3(Text, obj2, arg1);
    } else {
      obj = {
        style: list.list,
        accessibilityRole: "list",
        children: items.map((children, index) => {
            let Text;
            let items;
            let items1;
            let obj4;
            let obj6;
            let obj7;
            const obj = { style: items, children: items1 };
            items = [closure_1_0.item, ];
            obj2 = { paddingLeft: children.depth * PX_16 };
            items[1] = obj2;
            const obj3 = { style: closure_1_0.marker, children: closure_2_4(closure_0(dependencyMap[8]).Text, obj4) };
            obj4 = { variant: "text-md/normal", color: "text-default", children: children.marker };
            items1 = [closure_2_4(View, obj3), ];
            const obj5 = { style: closure_1_0.itemText, children: closure_2_4(Text, obj6) };
            obj6 = { variant: "text-md/normal", color: "text-default", children: obj7.parseConjureMarkup(children.text, true, closure_2_7) };
            Text = closure_0(dependencyMap[8]).Text;
            obj7 = closure_0(dependencyMap[9]);
            items1[1] = closure_2_4(View, obj5);
            return closure_2_5(View, obj, index);
          })
      };
      items = kind.items;
      tmp4 = React3(View, obj, arg1);
    }
    return tmp4;
  };
  cResult[8] = tmp4.item;
  cResult[9] = tmp4.itemText;
  cResult[10] = tmp4.list;
  cResult[11] = tmp4.marker;
  cResult[12] = fn;
  tmp8 = fn;
}) : (function ConjureNativeMarkdown(source) {
  source = source.source;
  const tmp = closure_9();
  const list = tmp;
  let items = [source];
  const memo = react.useMemo(() => {
    const obj = ConjureMarkdownBlocks;
    return obj.splitMarkdownBlocks(source);
  }, items);
  let obj = {
    style: tmp.blocks,
    children: memo.map((kind, index) => {
      let items;
      let obj;
      let obj3;
      let tmp4;
      if ("text" === kind.kind) {
        obj2 = { variant: "text-md/normal", color: "text-default", children: obj3.parseConjureMarkup(kind.text, true, obj) };
        let Text = Text_Text.Text;
        obj3 = conjureMarkup;
        tmp4 = React3(Text, obj2, index);
      } else {
        obj = {
          style: list.list,
          accessibilityRole: "list",
          children: items.map((children, index) => {
              let Text;
              let items;
              let items1;
              let obj4;
              let obj6;
              let obj7;
              const obj = { style: items, children: items1 };
              items = [closure_1_1.item, ];
              obj2 = { paddingLeft: children.depth * PX_16 };
              items[1] = obj2;
              const obj3 = { style: closure_1_1.marker, children: closure_2_4(source(closure_1[8]).Text, obj4) };
              obj4 = { variant: "text-md/normal", color: "text-default", children: children.marker };
              items1 = [closure_2_4(View, obj3), ];
              const obj5 = { style: closure_1_1.itemText, children: closure_2_4(Text, obj6) };
              obj6 = { variant: "text-md/normal", color: "text-default", children: obj7.parseConjureMarkup(children.text, true, closure_2_7) };
              Text = source(closure_1[8]).Text;
              obj7 = source(closure_1[9]);
              items1[1] = closure_2_4(View, obj5);
              return closure_2_5(View, obj, index);
            })
        };
        items = kind.items;
        tmp4 = React3(View, obj, index);
      }
      return tmp4;
    })
  };
  return closure_4(View, obj);
});
let closure_10 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRevealedMarkdown(arg0) {
  let source;
  let streaming;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  ({ streaming, source } = arg0);
  if (cResult[0] !== streaming) {
    obj2 = { streaming };
    cResult[0] = streaming;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useConjureRevealedText;
  const text = tmpResult.useConjureRevealedText(source, tmp4).text;
  if (cResult[2] !== text) {
    const obj3 = { source: text };
    const tmp8 = React3(closure_10, obj3);
    cResult[2] = text;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : (function ConjureRevealedMarkdown(arg0) {
  let source;
  let streaming;
  ({ source, streaming } = arg0);
  const obj = useConjureRevealedText;
  obj2 = { source: obj.useConjureRevealedText(source, { streaming }).text };
  return React3(closure_10, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeMarkdown.tsx");

export default tmp5;
export { CONJURE_MARKUP_OPTIONS };
export const ConjureRevealedMarkdown = tmp6;
