// Module ID: 11245
// Function ID: 11246
// Name: MessagePreviewParagraph
// Dependencies: [32, 19, 17, 21, 5141, 11232, 1377, 5776, 11238, 5761, 2]
// Exports: MessagePreviewParagraph

// Module 11245 (MessagePreviewParagraph)
import Text_Text from "Text/Text" /* 5761 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function MeasuredParagraph(leadingContent) {
  let items1;
  let items2;
  let items3;
  leadingContent = leadingContent.leadingContent;
  const mentions = leadingContent.mentions;
  const onLayout = leadingContent.onLayout;
  const children = leadingContent.children;
  const merged = Object.assign(leadingContent, Object.assign({ leadingContent: 0, mentions: 0, children: 0, onLayout: 0 }));
  const variant = merged.variant;
  const maxFontSizeMultiplier = merged.maxFontSizeMultiplier;
  const style = merged.style;
  const tmp2 = onLayout(variant.useState(0), 2);
  const first = tmp2[0];
  let closure_6 = tmp2[1];
  let tmp4 = onLayout(variant.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  let obj = leadingContent(mentions[7]);
  const fontScale = obj.useFontScale();
  let items = [variant, maxFontSizeMultiplier, mentions, first, first1, fontScale];
  const tmp7 = closure_8();
  const tmp8 = fontScale(first);
  const memo = variant.useMemo(() => {
    const f127094 = (node, index) => {
      let tmp15;
      let tmp16;
      const items = [node.node, ];
      let tmp4;
      if (0 !== first) {
        if (null != first1[index]) {
          const _Math = Math;
          const bound = Math.max(0, tmp - 1 / maxFontSizeMultiplier.get() - tmp2);
          let tmp10 = bound;
          const obj = leadingContent(mentions[6]);
          if (obj.isAndroid()) {
            tmp10 = bound;
            if (fontScale > 1) {
              const _Math3 = Math;
              let sum = Math.ceil(bound) + 1;
              let num2 = 0;
              let num3 = 0;
              if (1 < sum) {
                do {
                  let _Math2 = Math;
                  let rounded = Math.floor((num2 + sum) / 2);
                  let obj2 = leadingContent(mentions[5]);
                  tmp15 = num2;
                  tmp16 = rounded;
                  if (obj2.scaleLineHeight(rounded, tmp3) <= bound) {
                    tmp16 = sum;
                    tmp15 = rounded;
                  }
                  sum = tmp16;
                  num2 = tmp15;
                  num3 = tmp15;
                } while (tmp16 - tmp15 > 1);
              }
              tmp10 = num3;
            }
          }
          tmp4 = tmp10;
        }
      }
      items[1] = tmp4;
      return items;
    };
    let obj = { variant, maxFontSizeMultiplier, widths: new Map(mentions.map(f127094)) };
    new Map(mentions.map(f127094));
    return obj;
  }, items);
  let tmp10 = closure_6;
  let obj2 = { value: memo, children: items3 };
  const Provider = leadingContent(mentions[8]).PreviewMentionLayoutContext.Provider;
  const obj3 = {
    style: items1,
    onLayout(nativeEvent) {
      closure_6(nativeEvent.nativeEvent.layout.width);
      if (onLayout != null) {
        onLayout(nativeEvent);
      }
    },
    children: items2
  };
  const Text = leadingContent(mentions[9]).Text;
  const merged1 = Object.assign(merged);
  items1 = [style, tmp7.paragraph];
  items2 = [leadingContent, children];
  items3 = [closure_6(Text, obj3), ];
  let tmp12 = first > 0;
  if (tmp12) {
    let tmp13 = first1;
    let tmp14 = first;
    const obj4 = {
      style: tmp8.probes,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: mentions.map((prefix, index) => {
          let items;
          let closure_0 = index;
          const obj = {
            variant,
            maxFontSizeMultiplier,
            accessible: false,
            onTextLayout(nativeEvent) {
              const lines = nativeEvent.nativeEvent.lines;
              const atResult = lines.at(-1);
              let tmp3;
              const tmp = closure_0;
              if (null != atResult) {
                let num2;
                if (lines.length <= 1) {
                  num2 = atResult.width;
                } else {
                  num2 = Infinity;
                }
                tmp3 = num2;
              }
              closure_0 = tmp;
              num2 = tmp3;
              closure_8((arg0) => {
                if (arg0[closure_0] === num2) {
                  return arg0;
                } else {
                  const items = [];
                  HermesBuiltin.arraySpread(items, arg0, 0);
                  items[tmp2] = tmp3;
                  return items;
                }
              });
            },
            children: items
          };
          items = [closure_0, prefix.prefix, "\u2026"];
          return closure_6(leadingContent(mentions[9]).Text, obj, index);
        })
    };
    tmp12 = first1(first, obj4);
  }
  items3[1] = tmp12;
  return tmp10(Provider, obj2);
}
({ PixelRatio: closure_4, View: hasOwnProperty } = react_native);
({ jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ paragraph: { width: "100%", minWidth: 0, flexShrink: 1 } });
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((width) => {
  const obj = { probes: size };
  size = { position: "absolute", width, height: 0, overflow: "hidden", opacity: 0 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewParagraph.tsx");

export function MessagePreviewParagraph(arg0) {
  let children;
  let items;
  let leadingContent;
  let mentions;
  ({ mentions, leadingContent, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ mentions: 0, leadingContent: 0, children: 0 }));
  if (null != mentions) {
    let tmp7;
    if (0 !== mentions.length) {
      const obj = { leadingContent, mentions, children };
      const merged1 = Object.assign(merged);
      tmp7 = metroImportDefault(MeasuredParagraph, obj);
    }
    return tmp7;
  }
  const obj2 = { children: items };
  const Text = Text_Text.Text;
  const merged2 = Object.assign(merged);
  items = [leadingContent, children];
  tmp7 = metroRequire(Text, obj2);
}
