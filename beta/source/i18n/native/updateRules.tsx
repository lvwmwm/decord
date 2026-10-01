// Module ID: 17056
// Function ID: 17057
// Name: updateRules
// Dependencies: [19, 1074, 21, 4550, 4531, 576, 4525, 1930, 1177, 2]
// Exports: default

// Module 17056 (updateRules)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import _modDef1930 from "module_1930" /* 1930 */;
import LinkingDefault from "Linking" /* 4525 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class I18nLink {
  constructor(node) {
    let output;
    let state;
    node = node.node;
    let token;
    let obj = {};
    ({ output, state } = node);
    const tmp = node;
    const alwaysShowLinkDecorations = react.useContext(node(token[3]).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
    const obj2 = node(token[4]);
    const tmp2 = token;
    token = obj2.useToken(alwaysShowLinkDecorations(token[5]).colors.TEXT_LINK);
    const items = [token, alwaysShowLinkDecorations];
    const memo = react.useMemo(() => {
      let str;
      const obj = { color: token, textDecorationLine: str };
      str = "none";
      if (alwaysShowLinkDecorations) {
        str = "underline";
      }
      return obj;
    }, items);
    if (null != node.context) {
      if (node.context[node.target]) {
        if (node.context[node.target].onClick) {
          obj.onClick = node.context[node.target].onClick;
        }
      }
      obj.onClick = node.context[node.target];
    }
    if (null == obj.onClick) {
      obj.onClick = () => {
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj = _modDef1930;
        return openURL(obj.sanitizeUrl(node.target));
      };
    }
    const LegacyText = tmp(tmp2[8]).LegacyText;
    return <LegacyText accessible accessibilityRole="link" onPress={obj.onClick} style={memo}>{output(node.content, state)}</LegacyText>;
  }
}
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let paragraph = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
const result = size.fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  paragraph = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged = Object.assign(paragraph.paragraph);
  paragraph.paragraph = paragraph;
  const obj2 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.strong}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged1 = Object.assign(paragraph.strong);
  paragraph.strong = obj2;
  const obj3 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.italic}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged2 = Object.assign(paragraph.em);
  paragraph.em = obj3;
  const obj4 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.underline}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged3 = Object.assign(paragraph.u);
  paragraph.u = obj4;
  const obj5 = {
    react(node, output, state) {
      return <I18nLink key={arg2.key} node={arg0} output={arg1} state={arg2} />;
    }
  };
  const merged4 = Object.assign(paragraph.link);
  paragraph.link = obj5;
  return paragraph;
};
export { I18nLink };
