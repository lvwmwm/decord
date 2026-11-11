// Module ID: 12425
// Function ID: 12426
// Name: PlaintextFileMarkdownPreview
// Dependencies: [32, 19, 17, 1083, 21, 5243, 575, 5866, 7587, 5949, 12415, 1377, 12426, 2]
// Exports: default

// Module 12425 (PlaintextFileMarkdownPreview)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Text_Text from "Text/Text" /* 5866 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7587 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 12415 */;
import PlaintextFileMarkdownParser from "PlaintextFileMarkdownParser" /* 12426 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const f104170 = (type) => {
  let tmp = typeof type !== "string";
  if (typeof type !== "string") {
    let tmp3 = "link" === type.type;
    if (!tmp3) {
      let someResult = "element" === type.type;
      if (someResult) {
        const children = type.children;
        someResult = children.some(f104170);
      }
      tmp3 = someResult;
    }
    tmp = tmp3;
  }
  return tmp;
};
const f104171 = (type, index) => {
  let children;
  let children1;
  let children2;
  let children3;
  let tmp2 = type;
  if (typeof type !== "string") {
    type = type.type;
    if ("element" === type) {
      let tmp10;
      const styles = tmp.styles;
      const tag = type.tag;
      if ("strong" === tag) {
        const obj2 = { variant: obj3.strongVariant };
        const merged = Object.assign(tmp);
        obj3 = { variant: obj2.variant, color: "none", children: children.map(f104171) };
        children = type.children;
        const Text3 = Text_Text.Text;
        tmp10 = metroImportDefault(Text3, obj3, index);
      } else if ("em" === tag) {
        const obj4 = { variant: obj3.variant, color: "none", style: styles.italic, children: children1.map(f104171) };
        children1 = type.children;
        let closure_0 = tmp;
        const Text2 = Text_Text.Text;
        tmp10 = metroImportDefault(Text2, obj4, index);
      } else if ("s" === tag) {
        const obj5 = { variant: obj3.variant, color: "none", style: styles.strikethrough, children: children2.map(f104171) };
        children2 = type.children;
        closure_0 = tmp;
        const Text = Text_Text.Text;
        tmp10 = metroImportDefault(Text, obj5, index);
      } else {
        const obj6 = { children: children3.map(f104171) };
        children3 = type.children;
        closure_0 = tmp;
        const Fragment = react.Fragment;
        tmp10 = metroImportDefault(Fragment, obj6, index);
      }
      tmp2 = tmp10;
    } else if ("link" === type) {
      const obj7 = { node: type, context: obj3 };
      tmp2 = metroImportDefault(MarkdownLink, obj7, index);
    } else {
      if ("inlineCode" !== type) {
        if ("inlineMath" !== type) {
          if ("br" === type) {
            tmp2 = "\n";
          } else {
            tmp2 = null;
            if ("codeBlock" !== type) {
              tmp2 = null;
              if ("mathBlock" !== type) {
                tmp2 = null;
              }
            }
          }
        }
      }
      const obj = { variant: obj3.variant, color: "none", style: obj3.styles.inlineCode, children: type.content };
      tmp2 = metroImportDefault(Text_Text.Text, obj, index);
    }
  }
  return tmp2;
};
function createBodyContext(styles) {
  return { styles, variant: "body-md/normal", strongVariant: "body-md/semibold" };
}
function isBlockNode(item10015) {
  if (typeof item10015 === "string") {
    return false;
  } else {
    const type = item10015.type;
    if ("element" === type) {
      return set.has(item10015.tag);
    } else {
      if ("codeBlock" !== type) {
        if ("mathBlock" !== type) {
          if ("hr" !== type) {
            return false;
          }
        }
      }
      return true;
    }
  }
}
function MarkdownLink(arg0) {
  let _undefined;
  let c0;
  let c1;
  let children;
  let context;
  let node;
  ({ node, context } = arg0);
  _require = undefined;
  c1 = undefined;
  ({ href: c0, title: c1 } = node);
  let obj = {
    variant: context.variant,
    color: "text-link",
    accessibilityRole: "link",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      let obj = MaskedLinkUtils;
      const obj2 = {
        href: _undefined,
        onConfirm() {
          const obj = c1(dependencyMap[9]);
          return obj.openURL(_undefined);
        },
        trusted() {
          const obj = c0(dependencyMap[8]);
          return obj.isLinkTrusted(_undefined, closure_1_1);
        }
      };
      obj.handleClick(obj2);
    },
    onLongPress(stopPropagation) {
      stopPropagation.stopPropagation();
      const obj = { urlString: _undefined };
      showLongPressURLActionSheetDefault(obj);
    },
    children: children.map(f104171)
  };
  children = node.children;
  const Text = require("Text/Text").Text;
  return closure_7(Text, obj);
}
function InlineText(arg0) {
  let context;
  let nodes;
  let textAlign;
  let tmp4;
  let tmp6;
  ({ nodes, context, textAlign } = arg0);
  const obj = { variant: context.variant, color: "text-default", style: tmp4, selectable: tmp6, children: nodes.map(f104171) };
  tmp4 = undefined;
  const Text = context(5866).Text;
  const tmp = closure_7;
  const tmp2 = context;
  if (null != textAlign) {
    tmp4 = { textAlign };
    const obj2 = { textAlign };
  }
  const tmp2Result = tmp2(1377);
  const isAndroidResult = tmp2Result.isAndroid();
  tmp6 = !isAndroidResult;
  if (isAndroidResult) {
    tmp6 = !nodes.some(f104170);
  }
  return tmp(Text, obj);
}
function CodeBlock(arg0) {
  let Text;
  let content;
  let obj2;
  let styles;
  ({ content, styles } = arg0);
  const obj = { horizontal: true, style: styles.codeBlock, contentContainerStyle: styles.codeBlockContent, children: metroImportDefault(Text, obj2) };
  obj2 = { variant: "body-sm/normal", color: "text-default", style: styles.code, selectable: true, children: content.replace(/\n$/, "") };
  Text = Text_Text.Text;
  return metroImportDefault(hasOwnProperty, obj);
}
function MarkdownList(node) {
  let children;
  node = node.node;
  const styles = node.styles;
  let num2;
  let closure_3;
  let variant;
  let num = NaN;
  if (null != node.attrs.start) {
    let tmp = globalThis;
    const _parseInt = parseInt;
    num = parseInt(node.attrs.start);
  }
  num2 = 1;
  if (!Number.isNaN(num)) {
    num2 = num;
  }
  closure_3 = tmp2;
  variant = { styles, variant: "body-md/normal", strongVariant: "body-md/semibold" };
  let obj = {
    style: tmp2 ? styles.looseList : styles.list,
    children: children.map((type, index) => {
      let items1;
      let str;
      const obj = { style: styles.listItem, children: null };
      const obj2 = { variant: variant.variant, color: "text-muted", style: styles.listMarker, accessible: false, children: str };
      str = "\u2022";
      const Text = Text_Text.Text;
      const tmp = metroImportAll;
      const tmp5 = variant;
      if ("ol" === node.tag) {
        const _HermesInternal = HermesInternal;
        str = "" + num2 + index + ".";
      }
      const items = [metroImportDefault(Text, obj2), ];
      const obj3 = { style: styles.listItemContent, children: null };
      if (typeof type !== "string") {
        let tmp4Result;
        if ("element" === type.type) {
          const obj4 = { nodes: type.children, styles, tight: !closure_3 };
          tmp4Result = tmp4(MarkdownBlocks, obj4);
        }
        obj3.children = tmp4Result;
        items[1] = metroImportDefault(metroRequire, obj3);
        obj.children = items;
        return tmp(metroRequire, obj, index);
      }
      const obj5 = { nodes: items1, context: tmp5 };
      items1 = [type];
      tmp4Result = tmp4(InlineText, obj5);
    })
  };
  children = node.children;
  const tmp4 = closure_6;
  return closure_7(tmp4, obj);
}
function getTableRows(node) {
  const items = [];
  const iter = node.children[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = typeof nextResult !== "string";
    if (typeof nextResult !== "string") {
      tmp4 = "element" === tmp3.type;
    }
    if (tmp4) {
      if ("tr" === tmp3.tag) {
        let arr = items.push(tmp3);
      } else {
        let push = items.push;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, getTableRows(tmp3), 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
      }
    }
    continue;
  }
  return items;
}
function MarkdownTable(node) {
  let c3;
  let c4;
  let obj2;
  node = node.node;
  const styles = node.styles;
  _slicedToArray = undefined;
  react = undefined;
  let items = [node];
  const memo = react.useMemo(() => getTableRows(node), items);
  let closure_2 = react.useRef([]);
  [c3, c4] = _slicedToArray(react.useState([]), 2);
  const tmp = _slicedToArray(react.useState([]), 2);
  let obj = { horizontal: true, children: closure_7(closure_6, obj2) };
  obj2 = {
    style: styles.table,
    children: memo.map((children, index) => {
      let ref;
      let obj = {
        style: styles.tableRow,
        children: children.map((type, index) => {
          let obj4;
          let closure_0 = index;
          if (typeof type !== "string") {
            if ("element" === type.type) {
              let tableHeaderCell = "th" === type.tag;
              let str = "body-sm/normal";
              if (tableHeaderCell) {
                str = "body-sm/semibold";
              }
              let items = [tmp5.tableCell, , ];
              let tmp2 = closure_1_6;
              const obj = { styles, variant: str, strongVariant: "body-sm/semibold" };
              if (tableHeaderCell) {
                tableHeaderCell = tmp5.tableHeaderCell;
              }
              items[1] = tableHeaderCell;
              const obj3 = { minWidth: closure_3[index] };
              items[2] = obj3;
              const obj2 = {
                style: items,
                onLayout(nativeEvent) {
                      const width = nativeEvent.nativeEvent.layout.width;
                      const current = ref.current;
                      let num = current[index];
                      const tmp2 = index;
                      if (num == null) {
                        num = 0;
                      }
                      if (width > num) {
                        current[tmp2] = width;
                        const items = [];
                        HermesBuiltin.arraySpread(items, current, 0);
                        closure_2_4(items);
                      }
                    },
                children: closure_1_7(closure_1_15, obj4)
              };
              obj4 = { nodes: type.children, context: obj, textAlign: type.align };
              return closure_1_7(tmp2, obj2, index);
            }
          }
          return null;
        })
      };
      children = children.children;
      return metroImportDefault(metroRequire, obj, index);
    })
  };
  return closure_7(closure_5, obj);
}
function renderBlock(type, length, styles) {
  let children1;
  let obj6;
  let obj9;
  let tmp20;
  if (typeof type === "string") {
    return null;
  } else {
    type = type.type;
    if ("codeBlock" !== type) {
      if ("mathBlock" !== type) {
        if ("hr" === type) {
          let obj2 = { style: styles.hr };
          return closure_7(closure_6, obj2, length);
        } else if ("element" === type) {
          let tmp2 = closure_10;
          let tmp3 = closure_10[type.tag];
          if (null != tmp3) {
            let obj3 = { styles, variant: tmp3, strongVariant: tmp3 };
            let obj4 = { variant: obj3.variant, color: "text-strong", selectable: tmp20, children: children1.map(f104171) };
            let children = type.children;
            const Heading = obj3(5866).Heading;
            const obj10 = obj3(1377);
            const isAndroidResult = obj10.isAndroid();
            tmp20 = !isAndroidResult;
            const tmp16 = closure_7;
            if (isAndroidResult) {
              tmp20 = !children.some(f104170);
            }
            children1 = type.children;
            return tmp16(Heading, obj4, length);
          } else {
            let tag = type.tag;
            if ("ul" !== tag) {
              if ("ol" !== tag) {
                if ("blockquote" === tag) {
                  let obj5 = { style: styles.blockquote, children: closure_7(MarkdownBlocks, obj6) };
                  obj6 = { nodes: type.children, styles };
                  return closure_7(closure_6, obj5, length);
                } else if ("table" === tag) {
                  let tmp10 = MarkdownTable;
                  let obj7 = { node: type, styles };
                  return closure_7(MarkdownTable, obj7, length);
                } else if ("p" === tag) {
                  const obj8 = { nodes: type.children, context: obj9 };
                  obj9 = { styles, variant: "body-md/normal", strongVariant: "body-md/semibold" };
                  return closure_7(InlineText, obj8, length);
                } else {
                  let obj = { nodes: type.children, styles };
                  return closure_7(MarkdownBlocks, obj, length);
                }
              }
            }
            const obj11 = { node: type, styles };
            return closure_7(MarkdownList, obj11, length);
          }
        } else {
          let tmp = null;
          return null;
        }
      }
    }
    const obj12 = { content: type.content, styles };
    return closure_7(CodeBlock, obj12, length);
  }
}
function MarkdownBlocks(arg0) {
  let nodes;
  let styles;
  let tight;
  ({ nodes, styles, tight } = arg0);
  if (tight === undefined) {
    tight = false;
  }
  function flushInlineRun() {
    if (nodes.length > 0) {
      const obj = { nodes, context };
      items.push(metroImportDefault(InlineText, obj, items.length));
      nodes = [];
    }
  }
  const context = createBodyContext(styles);
  const items = [];
  dependencyMap = [];
  for (const item10015 of nodes) {
    let tmp = item10015;
    if (isBlockNode(item10015)) {
      let flushInlineRunResult = flushInlineRun();
      let arr = items.push(renderBlock(tmp, items.length, styles));
    } else {
      let arr3 = dependencyMap.push(tmp);
    }
    continue;
  }
  flushInlineRun();
  let obj = { style: tight ? styles.tightBlocks : styles.blocks, children: items };
  return closure_7(closure_6, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const set = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "blockquote", "table", "thead", "tbody", "tr", "th", "td"]);
let closure_10 = { h1: "heading-xl/semibold", h2: "heading-lg/semibold", h3: "heading-md/semibold", h4: "heading-sm/semibold", h5: "heading-sm/semibold", h6: "heading-sm/semibold" };
let createStyles = createStyles_mod;
let obj = { blocks: obj2, tightBlocks: { gap: 0 }, italic: { fontStyle: "italic" }, strikethrough: { textDecorationLine: "line-through" }, code: { fontFamily: Fonts.CODE_NORMAL }, inlineCode: obj3, codeBlock: obj4, codeBlockContent: obj5, blockquote: obj6, hr: obj7, list: { gap: 0 }, looseList: obj8, listItem: { flexDirection: "row" }, listMarker: obj9, listItemContent: { flex: 1 }, table: obj10, tableRow: { flexDirection: "row" }, tableCell: obj11, tableHeaderCell: obj12 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.CODE_NORMAL, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_CODE, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: StyleSheet.hairlineWidth, borderRadius: nativeDefault.radii.sm };
obj5 = { padding: nativeDefault.space.PX_8 };
obj6 = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj7 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { gap: nativeDefault.space.PX_8 };
obj9 = { paddingRight: nativeDefault.space.PX_8 };
obj10 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: StyleSheet.hairlineWidth, borderLeftWidth: StyleSheet.hairlineWidth };
obj11 = { maxWidth: 240, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRightWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media/native/PlaintextFileMarkdownPreview.tsx");

export default function PlaintextFileMarkdownPreview(text) {
  let items1;
  text = text.text;
  const require = text;
  const notice = text.notice;
  const tmp = closure_11();
  const items = [text];
  let obj = { style: tmp.blocks, children: items1 };
  items1 = [, ];
  const obj2 = {
    nodes: react.useMemo(() => {
      const obj = PlaintextFileMarkdownParser;
      return obj.parseMarkdownPreview(require);
    }, items),
    styles: tmp
  };
  items1[0] = closure_7(MarkdownBlocks, obj2);
  let tmp4Result = null;
  const tmp2 = closure_8;
  const tmp3 = closure_6;
  const tmp4 = closure_7;
  if ("" !== notice) {
    const obj3 = { variant: "body-sm/normal", color: "text-subtle", children: notice };
    tmp4Result = tmp4(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  return tmp2(tmp3, obj);
};
