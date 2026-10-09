// Module ID: 17880
// Function ID: 17881
// Name: updateRules
// Dependencies: [19, 1085, 21, 558, 576, 4795, 4779, 587, 4765, 1949, 1200, 2]
// Exports: default

// Module 17880 (updateRules)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import _modDef1949 from "module_1949" /* 1949 */;
import LinkingDefault from "Linking" /* 4765 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let paragraph = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function I18nLink(node) {
  let output;
  let state;
  const tmp = node;
  let obj = node(576);
  const cResult = obj.c(9);
  node = node.node;
  ({ output, state } = node);
  const alwaysShowLinkDecorations = react.useContext(node(4795).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const obj2 = node(4779);
  const token = obj2.useToken(nativeDefault.colors.TEXT_LINK);
  let str = "none";
  if (alwaysShowLinkDecorations) {
    str = "underline";
  }
  if (cResult[0] === token) {
    let tmp5;
    if (cResult[1] === str) {
      tmp5 = cResult[2];
    }
    const obj3 = {};
    if (null != node.context) {
      if (node.context[node.target]) {
        if (node.context[node.target].onClick) {
          obj3.onClick = node.context[node.target].onClick;
        }
      }
      obj3.onClick = node.context[node.target];
    }
    if (null == obj3.onClick) {
      let tmp8;
      if (cResult[3] !== node.target) {
        const fn = function f() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = _modDef1949;
          return openURL(obj.sanitizeUrl(node.target));
        };
        cResult[3] = node.target;
        cResult[4] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      obj3.onClick = tmp8;
    }
    if (cResult[5] === node.content) {
      if (cResult[6] === output) {
        let tmp10;
        if (cResult[7] === state) {
          tmp10 = cResult[8];
        }
        return jsx(tmp(1200).LegacyText, { accessible: true, accessibilityRole: "link", onPress: tmp9, style: tmp5, children: tmp10 });
      }
    }
    const outputResult = output(node.content, state);
    cResult[5] = node.content;
    cResult[6] = output;
    cResult[7] = state;
    cResult[8] = outputResult;
    tmp10 = outputResult;
  }
  const obj5 = { color: token, textDecorationLine: str };
  cResult[0] = token;
  cResult[1] = str;
  cResult[2] = obj5;
  tmp5 = obj5;
}) : (function I18nLink(node) {
  let output;
  let state;
  node = node.node;
  let token;
  let obj = {};
  ({ output, state } = node);
  const tmp = node;
  const alwaysShowLinkDecorations = react.useContext(node(token[5]).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const obj2 = node(token[6]);
  const tmp2 = token;
  token = obj2.useToken(alwaysShowLinkDecorations(token[7]).colors.TEXT_LINK);
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
      const obj = _modDef1949;
      return openURL(obj.sanitizeUrl(node.target));
    };
  }
  const LegacyText = tmp(tmp2[10]).LegacyText;
  return <LegacyText accessible accessibilityRole="link" onPress={obj.onClick} style={memo}>{output(node.content, state)}</LegacyText>;
});
let closure_6 = tmp2;
const result = size.fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  paragraph = {
    react: function ParagraphReact(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged = Object.assign(paragraph.paragraph);
  paragraph.paragraph = paragraph;
  const obj2 = {
    react: function StrongReact(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.strong}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged1 = Object.assign(paragraph.strong);
  paragraph.strong = obj2;
  const obj3 = {
    react: function EmReact(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.italic}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged2 = Object.assign(paragraph.em);
  paragraph.em = obj3;
  const obj4 = {
    react: function UnderlineReact(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={arg2.key} style={paragraph.underline}>{arg1(arg0.content, arg2)}</LegacyText>;
    }
  };
  const merged3 = Object.assign(paragraph.u);
  paragraph.u = obj4;
  const obj5 = {
    react(node, output, state) {
      return <closure_1_6 key={arg2.key} node={arg0} output={arg1} state={arg2} />;
    }
  };
  const merged4 = Object.assign(paragraph.link);
  paragraph.link = obj5;
  return paragraph;
};
export const I18nLink = tmp2;
