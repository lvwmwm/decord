// Module ID: 12503
// Function ID: 12504
// Name: ConjureNativeMarkdown
// Dependencies: [19, 17, 21, 575, 5009, 12504, 5619, 12448, 12505, 2]
// Exports: ConjureRevealedMarkdown

// Module 12503 (ConjureNativeMarkdown)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import conjureMarkup from "conjureMarkup" /* 12448 */;
import ConjureMarkdownBlocks from "ConjureMarkdownBlocks" /* 12504 */;
import useConjureRevealedText from "useConjureRevealedText" /* 12505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj4;
let obj5;
let obj6;
class ConjureNativeMarkdown {
  constructor(source) {
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
                const obj3 = { style: closure_1_1.marker, children: closure_2_4(source(closure_1[6]).Text, obj4) };
                obj4 = { variant: "text-md/normal", color: "text-default", children: children.marker };
                items1 = [closure_2_4(View, obj3), ];
                const obj5 = { style: closure_1_1.itemText, children: closure_2_4(Text, obj6) };
                obj6 = { variant: "text-md/normal", color: "text-default", children: obj7.parseConjureMarkup(children.text, true, closure_2_7) };
                Text = source(closure_1[6]).Text;
                obj7 = source(closure_1[7]);
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
  }
}
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
const React4 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeMarkdown.tsx");

export default ConjureNativeMarkdown;
export { CONJURE_MARKUP_OPTIONS };
export function ConjureRevealedMarkdown(arg0) {
  let source;
  let streaming;
  ({ source, streaming } = arg0);
  const obj = useConjureRevealedText;
  obj2 = { source: obj.useConjureRevealedText(source, { streaming }).text };
  return React3(ConjureNativeMarkdown, obj2);
}
