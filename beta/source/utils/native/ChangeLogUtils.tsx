// Module ID: 7541
// Function ID: 7542
// Name: utils/ChangeLogUtils
// Dependencies: [19, 17, 21, 4836, 576, 5753, 5301, 4832, 6401, 7542, 1930, 2]

// Module 7541 (utils/ChangeLogUtils)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _modDef1930 from "module_1930" /* 1930 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 7542 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import CustomMarkup from "CustomMarkup" /* 5301 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let item, length;

let c3;
let closure_4;
let obj2;
let obj3;
function ChangeLogLink(arg0) {
  let node;
  let output;
  let state;
  let styling;
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  const Link = styling.components.Link;
  const content = node.content;
  const obj2 = { inLink: true };
  const merged = Object.assign(state);
  return <Link key={state.key} className={closure_6().link} target={node.target}>{output(content, obj2)}</Link>;
}
function ChangeLogList(styling) {
  let state;
  ({ output: require, state } = styling);
  styling = styling.styling;
  const node = styling.node;
  let List = styling.components.List;
  const tmp = closure_6();
  if (!List) {
    List = closure_3;
  }
  let items = node.items;
  return <List key={state.key} style={tmp.list}>{items.map((item, index) => jsx(styling.components.ListItem, {
    children(arg0) {
      item = require;
      let closure_1 = state;
      let closure_2 = arg0;
      const items = [];
      length = [];
      item = item.forEach((type, index) => {
        if ("list" === type.type) {
          if (closure_4.length > 0) {
            const push = items.push;
            const obj = { variant: "text-sm/normal", children: closure_0(closure_4, closure_1) };
            const Text = item(closure_2_2[7]).Text;
            const merged = Object.assign(closure_2);
            push(closure_2_5(Text, obj, -1));
            closure_4 = [];
          }
          const push2 = items.push;
          const obj2 = { children: closure_0(type, closure_1) };
          push2(closure_2_5(closure_2_3, obj2, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let push = items.push;
        let obj = { variant: "text-sm/normal", children: tmp(length, tmp2) };
        let Text = Text_Text.Text;
        let merged = Object.assign(arg0);
        push(<Text key={-1} variant="text-sm/normal">{require(length, state)}</Text>);
        length = [];
      }
      return items;
    }
  }, index))}</List>;
}
function ChangeLogParagraph(state) {
  let node;
  let output;
  let styling;
  state = state.state;
  ({ node, output, styling } = state);
  const components = styling.components;
  let Paragraph;
  const tmp = closure_6();
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = Text_Text.Text;
  }
  return <Paragraph key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogStrong(arg0) {
  let node;
  let output;
  let reactResult;
  let state;
  let tmpResult;
  ({ node, output, state } = arg0);
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    const Text = tmp(4832).Text;
    const tmp5 = jsx;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    const obj2 = { variant: "experimental/body-sm/semibold", color: str, children: tmpResult.smartOutput(node, output, state) };
    tmpResult = MarkupRulesUtils;
    reactResult = tmp5(Text, obj2);
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
}
function ChangeLogImage(arg0) {
  let node;
  let obj3;
  let state;
  ({ node, state } = arg0);
  const obj2 = { uri: obj3.sanitizeUrl(node.target) };
  obj3 = _modDef1930;
  return <React3 key={state.key} style={closure_6().image} source={obj2} />;
}
function ChangeLogBlockQuote(state) {
  let node;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  ({ variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) });
  const Text = Text_Text.Text;
  return <_false key={state.key} style={tmp.container}>{null}</_false>;
}
({ View: c3, Image: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { link: obj2, list: { marginBottom: 10 }, image: { alignSelf: "center", flex: 1 }, container: obj3, text: { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED } };
obj2 = { color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj3 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
({ fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED });
let closure_6 = createStyles(obj);
const rules = CustomMarkup.createRules({});
const obj5 = {
  link(inlineStoreParams) {
    const styling = inlineStoreParams;
    return {
      react(node, output, state) {
        return <ChangeLogLink accessibilityRole="link" node={arg0} output={arg1} state={arg2} styling={styling} />;
      }
    };
  },
  lheading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(dependencyMap.components.LHeading, { className: className.className, children: fn(className.content, key) }, key.key);
      }
    };
  },
  heading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(dependencyMap.components.Heading, { className: className.className, level: className.level, children: fn(className.content, key) }, key.key);
      }
    };
  },
  list(styling) {
    return {
      react(node, output, state) {
        return <ChangeLogList node={arg0} output={arg1} state={arg2} styling={styling} />;
      }
    };
  },
  image: {
    react(node, output, state) {
      return <ChangeLogImage node={arg0} output={arg1} state={arg2} />;
    }
  },
  blockQuote: {
    react(node, output, state) {
      return <ChangeLogBlockQuote node={arg0} output={arg1} state={arg2} />;
    }
  },
  strong: {
    react(node, output, state) {
      return <ChangeLogStrong key={arg2.key} node={arg0} output={arg1} state={arg2} />;
    }
  },
  paragraph(dependencyMap) {
    return {
      react(node, output, state) {
        return <ChangeLogParagraph node={arg0} output={arg1} state={arg2} styling={dependencyMap} />;
      }
    };
  }
};
const result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj5;
