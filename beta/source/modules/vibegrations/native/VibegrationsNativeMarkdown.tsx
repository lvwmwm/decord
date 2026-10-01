// Module ID: 16344
// Function ID: 16345
// Name: VibegrationsNativeMarkdown
// Dependencies: [19, 17, 21, 576, 4836, 16345, 4832, 4823, 16346, 2]
// Exports: VibegrationsRevealedMarkdown

// Module 16344 (VibegrationsNativeMarkdown)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsMarkdownBlocks from "VibegrationsMarkdownBlocks" /* 16345 */;
import useVibegrationsRevealedText from "useVibegrationsRevealedText" /* 16346 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj4;
let obj5;
let obj6;
class VibegrationsNativeMarkdown {
  constructor(source) {
    source = source.source;
    const tmp = closure_10();
    const list = tmp;
    let items = [source];
    const memo = react.useMemo(() => {
      const obj = VibegrationsMarkdownBlocks;
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
          obj2 = { variant: "text-md/normal", color: "text-default", children: obj3.parse(kind.text, true, obj) };
          let Text = Text_Text.Text;
          obj3 = MarkupUtilsDefault;
          tmp4 = hasOwnProperty(Text, obj2, index);
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
                const obj3 = { style: closure_1_1.marker, children: closure_2_5(source(dependencyMap[6]).Text, obj4) };
                obj4 = { variant: "text-md/normal", color: "text-default", children: children.marker };
                items1 = [closure_2_5(View, obj3), ];
                const obj5 = { style: closure_1_1.itemText, children: closure_2_5(Text, obj6) };
                obj6 = { variant: "text-md/normal", color: "text-default", children: obj7.parse(children.text, true, closure_2_8) };
                Text = source(dependencyMap[6]).Text;
                obj7 = closure_1(dependencyMap[7]);
                items1[1] = closure_2_5(View, obj5);
                return closure_2_6(View, obj, index);
              })
          };
          items = kind.items;
          tmp4 = hasOwnProperty(View, obj, index);
        }
        return tmp4;
      })
    };
    return closure_5(View, obj);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const VIBEGRATIONS_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = { allowList: false };
const merged = Object.assign(VIBEGRATIONS_MARKUP_OPTIONS);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj3 = { blocks: obj4, list: obj5, item: { flexDirection: "row", alignItems: "flex-start" }, marker: obj6, itemText: { flex: 1 } };
obj4 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
const authStore = createStyles(obj3);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeMarkdown.tsx");

export default VibegrationsNativeMarkdown;
export { VIBEGRATIONS_MARKUP_OPTIONS };
export const VibegrationsRevealedMarkdown = function VibegrationsRevealedMarkdown(arg0) {
  let source;
  let streaming;
  ({ source, streaming } = arg0);
  const obj = useVibegrationsRevealedText;
  obj2 = { source: obj.useVibegrationsRevealedText(source, { streaming }).text };
  return hasOwnProperty(VibegrationsNativeMarkdown, obj2);
};
