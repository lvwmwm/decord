// Module ID: 15828
// Function ID: 121012
// Name: I18nLink
// Dependencies: []
// Exports: default

// Module 15828 (I18nLink)
class I18nLink {
  constructor(arg0) {
    node = global.node;
    arg1 = node;
    obj = {};
    ({ output, state } = global);
    alwaysShowLinkDecorations = importAll.useContext(arg1(dependencyMap[3]).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
    importDefault = alwaysShowLinkDecorations;
    obj2 = arg1(dependencyMap[4]);
    token = obj2.useToken(importDefault(dependencyMap[5]).colors.TEXT_LINK);
    dependencyMap = token;
    items = [, ];
    items[0] = token;
    items[1] = alwaysShowLinkDecorations;
    memo = importAll.useMemo(() => {
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
    obj = { onPress: obj.onClick, style: memo };
    obj.children = output(node.content, state);
    return jsx(arg1(dependencyMap[8]).LegacyText, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = { strong: { fontFamily: arg1(dependencyMap[1]).Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
const obj = { fontFamily: arg1(dependencyMap[1]).Fonts.PRIMARY_SEMIBOLD };
const result = arg1(dependencyMap[9]).fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  let obj = {};
  const merged = Object.assign(paragraph.paragraph);
  obj["react"] = function react(content, arg1, key) {
    const obj = { children: arg1(content.content, key) };
    return callback2(callback(closure_2[8]).LegacyText, obj, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.strong);
  obj["react"] = function react(content, arg1, key) {
    const obj = { style: closure_5.strong, children: arg1(content.content, key) };
    return callback2(callback(closure_2[8]).LegacyText, obj, key.key);
  };
  paragraph.strong = obj;
  obj = {};
  const merged2 = Object.assign(paragraph.em);
  obj["react"] = function react(content, arg1, key) {
    const obj = { style: closure_5.italic, children: arg1(content.content, key) };
    return callback2(callback(closure_2[8]).LegacyText, obj, key.key);
  };
  paragraph.em = obj;
  const obj1 = {};
  const merged3 = Object.assign(paragraph.u);
  obj1["react"] = function react(content, arg1, key) {
    const obj = { style: closure_5.underline, children: arg1(content.content, key) };
    return callback2(callback(closure_2[8]).LegacyText, obj, key.key);
  };
  paragraph.u = obj1;
  const obj2 = {};
  const merged4 = Object.assign(paragraph.link);
  obj2["react"] = function react(node, output, key) {
    return callback2(closure_6, { node, output, state: key }, key.key);
  };
  paragraph.link = obj2;
  return paragraph;
};
export { I18nLink };
