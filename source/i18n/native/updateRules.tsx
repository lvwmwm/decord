// Module ID: 15953
// Function ID: 123228
// Name: I18nLink
// Dependencies: [31, 653, 33, 3849, 3834, 689, 3827, 3829, 1273, 2]
// Exports: default

// Module 15953 (I18nLink)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
class I18nLink {
  constructor(arg0) {
    node = global.node;
    obj = {};
    ({ output, state } = global);
    alwaysShowLinkDecorations = result.useContext(require("context").AccessibilityPreferencesContext).alwaysShowLinkDecorations;
    obj2 = require("map");
    token = obj2.useToken(require("_createForOfIteratorHelperLoose").colors.TEXT_LINK);
    closure_2 = token;
    items = [, ];
    items[0] = token;
    items[1] = alwaysShowLinkDecorations;
    memo = result.useMemo(() => {
      const obj = { color: token };
      let str = "none";
      if (alwaysShowLinkDecorations) {
        str = "underline";
      }
      obj.textDecorationLine = str;
      return obj;
    }, items);
    if (null != node.context) {
      tmp3 = node.context[node.target];
      if (tmp3) {
        if (tmp3.onClick) {
          obj.onClick = tmp3.onClick;
        }
      }
      obj.onClick = tmp3;
    }
    if (null == obj.onClick) {
      obj.onClick = () => {
        const obj = alwaysShowLinkDecorations(token[6]);
        return obj.openURL(alwaysShowLinkDecorations(token[7]).sanitizeUrl(node.target));
      };
    }
    obj = { accessible: true, accessibilityRole: "link" };
    obj.onPress = obj.onClick;
    obj.style = memo;
    obj.children = output(node.content, state);
    return jsx(require("Button").LegacyText, obj);
  }
}
let closure_5 = { strong: { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
let obj = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD };
const result = require("jsxProd").fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  let obj = {};
  const merged = Object.assign(paragraph.paragraph);
  obj["react"] = function react(content, arg1, key) {
    const obj = { children: arg1(content.content, key) };
    return outer1_4(outer1_0(outer1_2[8]).LegacyText, obj, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.strong);
  obj["react"] = function react(content, arg1, key) {
    const obj = { style: outer1_5.strong, children: arg1(content.content, key) };
    return outer1_4(outer1_0(outer1_2[8]).LegacyText, obj, key.key);
  };
  paragraph.strong = obj;
  obj = {};
  const merged2 = Object.assign(paragraph.em);
  obj["react"] = function react(content, arg1, key) {
    const obj = { style: outer1_5.italic, children: arg1(content.content, key) };
    return outer1_4(outer1_0(outer1_2[8]).LegacyText, obj, key.key);
  };
  paragraph.em = obj;
  const obj1 = {};
  const merged3 = Object.assign(paragraph.u);
  obj1["react"] = function react(content, arg1, key) {
    const obj = { style: outer1_5.underline, children: arg1(content.content, key) };
    return outer1_4(outer1_0(outer1_2[8]).LegacyText, obj, key.key);
  };
  paragraph.u = obj1;
  const obj2 = {};
  const merged4 = Object.assign(paragraph.link);
  obj2["react"] = function react(node, output, key) {
    return outer1_4(outer1_6, { node, output, state: key }, key.key);
  };
  paragraph.link = obj2;
  return paragraph;
};
export { I18nLink };
