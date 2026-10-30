// Module ID: 8561
// Function ID: 8562
// Name: utils/ChangeLogUtils
// Dependencies: [19, 17, 21, 5009, 575, 6772, 6026, 5619, 8562, 7143, 8563, 8564, 2]

// Module 8561 (utils/ChangeLogUtils)
import react_native from "react-native" /* 17 */;
import Fragment2 from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import LegacyTokens from "LegacyTokens" /* 6772 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7143 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8563 */;
import ChangelogInlineImageDefault from "ChangelogInlineImage" /* 8564 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import CustomMarkup from "CustomMarkup" /* 6026 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_4, item, length;

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
    List = View;
  }
  let items = node.items;
  return <List key={state.key} style={tmp.list}>{items.map((item, index) => jsx(styling.components.ListItem, {
    children(arg0) {
      let obj = { changelogImagesDisabled: true };
      let merged = Object.assign(state);
      item = require;
      let closure_2 = arg0;
      const items = [];
      length = [];
      item = item.forEach((type, index) => {
        if ("list" === type.type) {
          if (closure_4.length > 0) {
            const push2 = items.push;
            const obj2 = { variant: "text-sm/normal", children: closure_0(closure_4, obj) };
            const Text = item(closure_2_2[7]).Text;
            const merged = Object.assign(closure_2);
            const _HermesInternal = HermesInternal;
            push2(closure_2_5(Text, obj2, "text-" + items.length));
            closure_4 = [];
          }
          obj = { children: closure_0(type, obj) };
          const push = items.push;
          push(closure_2_5(length, obj, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let push = items.push;
        let obj2 = { variant: "text-sm/normal", children: tmp(length, obj) };
        let Text = Text_Text.Text;
        const merged1 = Object.assign(arg0);
        let _HermesInternal = HermesInternal;
        push(<Text key={"text-" + items.length} variant="text-sm/normal">{require(length, obj)}</Text>);
        length = [];
      }
      return items;
    }
  }, index))}</List>;
}
function ChangeLogParagraph(state) {
  let node;
  let output;
  let text;
  ({ node, output } = state);
  state = state.state;
  const styling = state.styling;
  const tmp = closure_6();
  dependencyMap = tmp;
  const components = styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = output(5619).Text;
  }
  let tmp6 = dependencyMap;
  const obj = output(8562);
  const result = obj.splitParagraphAtImages(node.content);
  const tmp5 = output;
  if (true !== state.changelogImagesDisabled) {
    let tmp7;
    const tmp5Result = tmp5(8562);
    if (tmp5Result.hasImageSegment(result)) {
      tmp7 = <View key={state.key}>{result.map((type, index) => {
        let tmp6;
        if ("image" === type.type) {
          const items = [type.node];
          const Fragment = Paragraph.Fragment;
          const obj3 = { changelogBlockImage: true };
          const merged = Object.assign(state);
          tmp6 = < key={arg1}>{output(items, obj3)}</>;
        } else {
          tmp6 = <Paragraph key={arg1} variant="text-sm/normal" style={text.text}>{output(arg0.nodes, state)}</Paragraph>;
        }
        return tmp6;
      })}</View>;
    }
    return tmp7;
  }
  tmp7 = <Paragraph key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</Paragraph>;
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
    const Text = tmp(5619).Text;
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
function ChangeLogBlockQuote(state) {
  let content;
  let node;
  let obj3;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  ({ variant: "text-sm/normal", style: tmp.text, children: output(content, obj3) });
  obj3 = { changelogImagesDisabled: true };
  const Text = Text_Text.Text;
  content = node.content;
  const merged = Object.assign(state);
  return <View key={state.key} style={tmp.container}>{null}</View>;
}
const View = react_native.View;
const jsx = Fragment2.jsx;
let createStyles = createStyles_mod;
let obj = { link: obj2, list: { marginBottom: 10 }, container: obj3, text: { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED } };
obj2 = { color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj3 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
({ fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED });
let closure_6 = createStyles(obj);
const rules = CustomMarkup.createRules({});
const obj5 = {
  link(dependencyMap) {
    return {
      react(node, output, state) {
        return <ChangeLogLink key={arg2.key} accessibilityRole="link" node={arg0} output={arg1} state={arg2} styling={dependencyMap} />;
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
  heading(styles) {
    return {
      react(className, fn, key) {
        return jsx(styles.components.Heading, { className: className.className, level: className.level, children: fn(className.content, key) }, key.key);
      }
    };
  },
  list(styling) {
    return {
      react(node, output, state) {
        return <ChangeLogList key={arg2.key} node={arg0} output={arg1} state={arg2} styling={styling} />;
      }
    };
  },
  image: {
    react(arg0, arg1, changelogBlockImage) {
      let tmp = null;
      if (true === changelogBlockImage.changelogBlockImage) {
        const obj = { target: null, alt: null, title: null };
        ({ target: obj.target, alt: obj.alt, title: obj.title } = arg0);
        tmp = jsx(ChangelogInlineImageDefault, { target: null, alt: null, title: null }, changelogBlockImage.key);
      }
      return tmp;
    }
  },
  blockQuote: {
    react(node, output, state) {
      return <ChangeLogBlockQuote key={arg2.key} node={arg0} output={arg1} state={arg2} />;
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
        return <ChangeLogParagraph key={arg2.key} node={arg0} output={arg1} state={arg2} styling={dependencyMap} />;
      }
    };
  }
};
let result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj5;
