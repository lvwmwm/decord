// Module ID: 8099
// Function ID: 8100
// Name: utils/ChangeLogUtils
// Dependencies: [19, 17, 21, 5090, 587, 5974, 5395, 5086, 558, 576, 8100, 6655, 8101, 8102, 2]

// Module 8099 (utils/ChangeLogUtils)
import react_native from "react-native" /* 17 */;
import Fragment2 from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import LegacyTokens from "LegacyTokens" /* 5974 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6655 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8101 */;
import ChangelogInlineImageDefault from "ChangelogInlineImage" /* 8102 */;
import React from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5090 */;
import CustomMarkup from "CustomMarkup" /* 5395 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_4, flag, length, obj1, tmp3;

let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment2.jsx;
let createStyles = createStyles_mod;
let obj = { link: obj2, list: { marginBottom: 10 }, container: obj3, text: obj4 };
obj2 = { color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj3 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
obj4 = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles(obj);
const rules = CustomMarkup.createRules({});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogLink(arg0) {
  let node;
  let output;
  let state;
  let styling;
  const obj = react2;
  const cResult = obj.c(10);
  ({ node, output, state, styling } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      let tmp7;
      if (cResult[2] === state) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === node.target) {
        if (cResult[5] === state.key) {
          if (cResult[6] === tmp2.link) {
            if (cResult[7] === styling.components.Link) {
              let tmp10;
              if (cResult[8] === tmp7) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
        }
      }
      const tmp12 = <tmp3 key={tmp4} className={tmp5} target={tmp6}>{tmp7}</tmp3>;
      cResult[4] = node.target;
      cResult[5] = state.key;
      cResult[6] = tmp2.link;
      cResult[7] = styling.components.Link;
      cResult[8] = tmp7;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
  }
  const content = node.content;
  const obj3 = { inLink: true };
  const merged = Object.assign(state);
  const outputResult = output(content, obj3);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp7 = outputResult;
}) : (function ChangeLogLink(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogList(state) {
  let node;
  let output;
  let styling;
  let tmp6;
  let obj = output(styling[9]);
  const cResult = obj.c(14);
  ({ node, output } = state);
  state = state.state;
  styling = state.styling;
  const tmp2 = closure_6();
  if (cResult[0] === node.items) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        if (cResult[3] === styling.components.ListItem) {
          tmp6 = cResult[4];
        }
        if (cResult[9] === (styling.components.List || View)) {
          if (cResult[10] === state.key) {
            if (cResult[11] === tmp2.list) {
              let tmp9;
              if (cResult[12] === tmp6) {
                tmp9 = cResult[13];
              }
              return tmp9;
            }
          }
        }
        const tmp11 = jsx(styling.components.List || View, { style: tmp5, children: tmp6 }, tmp4);
        cResult[9] = styling.components.List || View;
        cResult[10] = state.key;
        cResult[11] = tmp2.list;
        cResult[12] = tmp6;
        cResult[13] = tmp11;
        tmp9 = tmp11;
      }
    }
  }
  if (cResult[5] === output) {
    if (cResult[6] === state) {
      let tmp7;
      if (cResult[7] === styling.components.ListItem) {
        tmp7 = cResult[8];
      }
      let items = node.items;
      const mapped = items.map(tmp7);
      cResult[0] = node.items;
      cResult[1] = output;
      cResult[2] = state;
      cResult[3] = styling.components.ListItem;
      cResult[4] = mapped;
      tmp6 = mapped;
    }
  }
  const fn = function c(arg0, arg1) {
    let closure_0 = arg0;
    return jsx(styling.components.ListItem, {
      children(arg0) {
        const obj = { changelogImagesDisabled: true };
        const merged = Object.assign(state);
        closure_0 = output;
        let closure_2 = arg0;
        const items = [];
        length = [];
        const item = closure_0.forEach((type, index) => {
          if ("list" === type.type) {
            if (closure_4.length > 0) {
              const push = items.push;
              obj = { variant: "text-sm/normal", children: closure_0(closure_4, obj) };
              const Text = item(closure_2_2[7]).Text;
              const merged = Object.assign(closure_2);
              push(closure_2_5(Text, obj, -1));
              closure_4 = [];
            }
            const push2 = items.push;
            const obj2 = { children: closure_0(type, obj) };
            push2(closure_2_5(length, obj2, index));
          } else {
            closure_4.push(type);
          }
        });
        const tmp = output;
        if (length.length > 0) {
          const push = items.push;
          const Text = Text_Text.Text;
          const merged1 = Object.assign(arg0);
          push(<Text key={-1} variant="text-sm/normal">{tmp(length, obj)}</Text>);
          length = [];
        }
        return items;
      }
    }, arg1);
  };
  cResult[5] = output;
  cResult[6] = state;
  cResult[7] = styling.components.ListItem;
  cResult[8] = fn;
  tmp7 = fn;
}) : (function ChangeLogList(styling) {
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
            const push = items.push;
            obj = { variant: "text-sm/normal", children: closure_0(closure_4, obj) };
            const Text = item(closure_2_2[7]).Text;
            const merged = Object.assign(closure_2);
            push(closure_2_5(Text, obj, -1));
            closure_4 = [];
          }
          const push2 = items.push;
          const obj2 = { children: closure_0(type, obj) };
          push2(closure_2_5(length, obj2, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let push = items.push;
        let obj2 = { variant: "text-sm/normal", children: tmp(length, obj) };
        let Text = Text_Text.Text;
        const merged1 = Object.assign(arg0);
        push(<Text key={-1} variant="text-sm/normal">{require(length, obj)}</Text>);
        length = [];
      }
      return items;
    }
  }, index))}</List>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogParagraph(state) {
  let node;
  let output;
  let text;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = output(576);
  const cResult = obj.c(27);
  ({ node, output } = state);
  state = state.state;
  const styling = state.styling;
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const components = styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = tmp(5086).Text;
  }
  if (cResult[0] === Paragraph) {
    if (cResult[1] === node.content) {
      if (cResult[2] === output) {
        if (cResult[3] === state) {
          if (cResult[4] === tmp4) {
            tmp6 = cResult[5];
            tmp7 = cResult[6];
            tmp8 = cResult[7];
            tmp9 = cResult[8];
          }
          const _Symbol = Symbol;
          if (tmp9 === Symbol.for("react.early_return_sentinel")) {
            if (cResult[23] === tmp6) {
              if (cResult[24] === tmp7) {
                let tmp26;
                if (cResult[25] === tmp8) {
                  tmp26 = cResult[26];
                }
                tmp9 = tmp26;
              }
            }
            const tmp28 = <tmp6 key={tmp7}>{tmp8}</tmp6>;
            cResult[23] = tmp6;
            cResult[24] = tmp7;
            cResult[25] = tmp8;
            cResult[26] = tmp28;
            tmp26 = tmp28;
          }
          return tmp9;
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = output(8100);
  const result = tmpResult.splitParagraphAtImages(node.content);
  if (true !== state.changelogImagesDisabled) {
    const tmpResult2 = output(8100);
    if (tmpResult2.hasImageSegment(result)) {
      if (cResult[18] === Paragraph) {
        if (cResult[19] === output) {
          if (cResult[20] === state) {
            class T {
              constructor(arg0, arg1) {
                if ("image" === state.type) {
                  tmp7 = jsx;
                  tmp8 = closure_3;
                  obj1 = { children: null };
                  tmp9 = output;
                  items = [];
                  items[0] = state.node;
                  obj4 = {};
                  tmp10 = state;
                  tmp11 = obj4;
                  Fragment = closure_3.Fragment;
                  merged = Object.assign(state);
                  flag = true;
                  obj4.changelogBlockImage = true;
                  obj1.children = output(items, obj4);
                  tmp6 = jsx(Fragment, obj1, arg1);
                } else {
                  tmp = jsx;
                  tmp2 = Text;
                  obj = { variant: "text-sm/normal", style: null, children: null };
                  tmp3 = closure_2;
                  obj.style = closure_2.text;
                  tmp4 = output;
                  tmp5 = state;
                  obj.children = output(state.nodes, state);
                  tmp6 = jsx(Text, obj, arg1);
                }
                return tmp6;
              }
            }
            tmp16 = forResult;
          }
        }
      }
      class T {
        constructor(arg0, arg1) {
          if ("image" === state.type) {
            tmp7 = jsx;
            tmp8 = closure_3;
            obj1 = { children: null };
            tmp9 = output;
            items = [];
            items[0] = state.node;
            obj4 = {};
            tmp10 = state;
            tmp11 = obj4;
            Fragment = closure_3.Fragment;
            merged = Object.assign(state);
            flag = true;
            obj4.changelogBlockImage = true;
            obj1.children = output(items, obj4);
            tmp6 = jsx(Fragment, obj1, arg1);
          } else {
            tmp = jsx;
            tmp2 = Text;
            obj = { variant: "text-sm/normal", style: null, children: null };
            tmp3 = closure_2;
            obj.style = closure_2.text;
            tmp4 = output;
            tmp5 = state;
            obj.children = output(state.nodes, state);
            tmp6 = jsx(Text, obj, arg1);
          }
          return tmp6;
        }
      }
      cResult[18] = Paragraph;
      cResult[19] = output;
      cResult[20] = state;
      cResult[21] = tmp4;
      cResult[22] = T;
    }
    cResult[0] = Paragraph;
    cResult[1] = node.content;
    cResult[2] = output;
    cResult[3] = state;
    cResult[4] = tmp4;
    cResult[5] = tmp21;
    cResult[6] = tmp20;
    cResult[7] = tmp19;
    cResult[8] = tmp16;
    tmp9 = tmp16;
    tmp8 = tmp19;
    tmp7 = tmp20;
    tmp6 = tmp21;
  }
  if (cResult[9] === node.content) {
    if (cResult[10] === output) {
      let tmp14;
      if (cResult[11] === state) {
        tmp14 = cResult[12];
      }
      class T {
        constructor(arg0, arg1) {
          if ("image" === state.type) {
            tmp7 = jsx;
            tmp8 = closure_3;
            obj1 = { children: null };
            tmp9 = output;
            items = [];
            items[0] = state.node;
            obj4 = {};
            tmp10 = state;
            tmp11 = obj4;
            Fragment = closure_3.Fragment;
            merged = Object.assign(state);
            flag = true;
            obj4.changelogBlockImage = true;
            obj1.children = output(items, obj4);
            tmp6 = jsx(Fragment, obj1, arg1);
          } else {
            tmp = jsx;
            tmp2 = Text;
            obj = { variant: "text-sm/normal", style: null, children: null };
            tmp3 = closure_2;
            obj.style = closure_2.text;
            tmp4 = output;
            tmp5 = state;
            obj.children = output(state.nodes, state);
            tmp6 = jsx(Text, obj, arg1);
          }
          return tmp6;
        }
      }
      const tmp18 = <Paragraph key={tmp12} variant="text-sm/normal" style={tmp13}>{tmp14}</Paragraph>;
      cResult[13] = Paragraph;
      cResult[14] = state.key;
      cResult[15] = tmp4.text;
      cResult[16] = tmp14;
      cResult[17] = tmp18;
      tmp16 = tmp18;
    }
  }
  const outputResult = output(node.content, state);
  cResult[9] = node.content;
  cResult[10] = output;
  cResult[11] = state;
  cResult[12] = outputResult;
  tmp14 = outputResult;
}) : (function ChangeLogParagraph(state) {
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
    Paragraph = output(5086).Text;
  }
  let tmp6 = dependencyMap;
  const obj = output(8100);
  const result = obj.splitParagraphAtImages(node.content);
  const tmp5 = output;
  if (true !== state.changelogImagesDisabled) {
    let tmp7;
    const tmp5Result = tmp5(8100);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogStrong(arg0) {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(11);
  ({ node, output, state } = arg0);
  const obj2 = ManaTypeConsolidationExperiment;
  if (obj2.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    if (cResult[4] === node) {
      if (cResult[5] === output) {
        let tmp8;
        if (cResult[6] === state) {
          tmp8 = cResult[7];
        }
        if (cResult[8] === str) {
          let tmp10;
          if (cResult[9] === tmp8) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
        const tmp12 = jsx(Text_Text.Text, { variant: "experimental/body-sm/semibold", color: str, children: tmp8 });
        cResult[8] = str;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp10 = tmp12;
      }
    }
    const tmpResult = MarkupRulesUtils;
    const smartOutputResult = tmpResult.smartOutput(node, output, state);
    cResult[4] = node;
    cResult[5] = output;
    cResult[6] = state;
    cResult[7] = smartOutputResult;
    tmp8 = smartOutputResult;
  } else {
    if (cResult[0] === node) {
      if (cResult[1] === output) {
        let tmp4;
        if (cResult[2] === state) {
          tmp4 = cResult[3];
        }
        return tmp4;
      }
    }
    const strong = rules.strong;
    const reactResult = strong.react(node, output, state);
    cResult[0] = node;
    cResult[1] = output;
    cResult[2] = state;
    cResult[3] = reactResult;
    tmp4 = reactResult;
  }
}) : (function ChangeLogStrong(arg0) {
  let node;
  let output;
  let reactResult;
  let state;
  let tmpResult;
  ({ node, output, state } = arg0);
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    const Text = tmp(5086).Text;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogBlockQuote(arg0) {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(11);
  ({ node, output, state } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      let tmp8;
      if (cResult[2] === state) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4.text) {
        let tmp11;
        if (cResult[5] === tmp8) {
          tmp11 = cResult[6];
        }
        if (cResult[7] === state.key) {
          if (cResult[8] === tmp4.container) {
            let tmp14;
            if (cResult[9] === tmp11) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const tmp17 = <View key={tmp5} style={tmp6}>{tmp11}</View>;
        cResult[7] = state.key;
        cResult[8] = tmp4.container;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp7, children: tmp8 });
      cResult[4] = tmp4.text;
      cResult[5] = tmp8;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    }
  }
  const content = node.content;
  const obj4 = { changelogImagesDisabled: true };
  const merged = Object.assign(state);
  const outputResult = output(content, obj4);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp8 = outputResult;
}) : (function ChangeLogBlockQuote(state) {
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
});
const obj5 = {
  link(inlineStoreParams) {
    const styling = inlineStoreParams;
    return {
      react(node, output, state) {
        return <closure_8 accessibilityRole="link" node={arg0} output={arg1} state={arg2} styling={styling} />;
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
        return <closure_9 node={arg0} output={arg1} state={arg2} styling={styling} />;
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
      return <closure_12 node={arg0} output={arg1} state={arg2} />;
    }
  },
  strong: {
    react(node, output, state) {
      return <closure_11 key={arg2.key} node={arg0} output={arg1} state={arg2} />;
    }
  },
  paragraph(dependencyMap) {
    return {
      react(node, output, state) {
        return <closure_10 node={arg0} output={arg1} state={arg2} styling={dependencyMap} />;
      }
    };
  }
};
let result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj5;
