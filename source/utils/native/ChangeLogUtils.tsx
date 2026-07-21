// Module ID: 7763
// Function ID: 61649
// Name: ChangeLogLink
// Dependencies: []

// Module 7763 (ChangeLogLink)
function ChangeLogLink(arg0) {
  let node;
  let output;
  let state;
  let styling;
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  let obj = { className: callback().link, target: node.target };
  obj = {};
  const merged = Object.assign(state);
  obj["inLink"] = true;
  obj.children = output(node.content, obj);
  return jsx(styling.components.Link, obj, state.key);
}
function ChangeLogList(styling) {
  let state;
  ({ output: closure_0, state } = styling);
  const importDefault = state;
  styling = styling.styling;
  const dependencyMap = styling;
  let List = styling.components.List;
  if (!List) {
    List = closure_3;
  }
  const tmp = callback();
  const items = styling.node.items;
  return <List key={state.key} style={callback().list}>{items.map((arg0, arg1) => callback(styling.components.ListItem, {
    children(arg0) {
      return function processListItem(arr, arg1, closure_1, arg3) {
        function renderText(TextWithIOSLinkWorkaround, arg1, arg2) {
          if (arr.length > 0) {
            const obj = { variant: "text-sm/normal" };
            const merged = Object.assign(arg3);
            obj["children"] = arg1(arr, arg2);
            let arr = items.push(renderText(arg1(arg3[7]).TextWithIOSLinkWorkaround, obj, -1));
            arr = [];
          }
        }
        const items = [];
        let closure_4 = [];
        const item = arr.forEach((type) => {
          if ("list" === type.type) {
            renderText();
            const obj = { children: arg1(type, arg2) };
            let arr = items.push(renderText(items, obj, arg1));
          } else {
            arr = arr.push(type);
          }
        });
        renderText();
        return items;
      }(arg0, arg0, closure_1, arg0);
    }
  }, arg1))}</List>;
}
function ChangeLogParagraph(state) {
  let node;
  let output;
  let styling;
  state = state.state;
  ({ node, output, styling } = state);
  const components = styling.components;
  let Paragraph;
  if (null != components) {
    Paragraph = components.Paragraph;
  }
  if (null == Paragraph) {
    Paragraph = arg1(dependencyMap[7]).TextWithIOSLinkWorkaround;
  }
  const tmp = callback();
  return <Paragraph key={state.key} variant="text-sm/normal" style={callback().text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogImage(arg0) {
  let node;
  let state;
  ({ node, state } = arg0);
  let obj = { style: callback().image };
  obj = { uri: importDefault(dependencyMap[8]).sanitizeUrl(node.target) };
  obj.source = obj;
  return <closure_4 key={state.key} {...obj} />;
}
function ChangeLogBlockQuote(state) {
  let node;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = callback();
  let obj = { style: tmp.container };
  obj = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
  obj.children = jsx(arg1(dependencyMap[7]).TextWithIOSLinkWorkaround, obj);
  return <closure_3 key={state.key} {...obj} />;
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { color: importDefault(dependencyMap[4]).colors.TEXT_LINK };
obj.link = obj;
obj.list = { marginBottom: 10 };
obj.image = {};
const obj1 = { marginLeft: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027409561345743463, marginTop: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002740925212695659, borderRadius: 13881203163401010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderLeftColor: arg1(dependencyMap[5]).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
obj.container = obj1;
const obj2 = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000617653580892864, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030586903747, 9223372036854775807: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243038517235036, color: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
obj.text = obj2;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const rules = importAll(dependencyMap[6]).createRules({});
const importAllResult1 = importAll(dependencyMap[6]);
const obj3 = {
  link(arg0) {
    const arg1 = arg0;
    return {
      react(node, output, state) {
        return callback(closure_7, { accessibilityRole: "link", node, output, state, styling: node });
      }
    };
  },
  lheading(arg0) {
    const arg1 = arg0;
    return {
      react(className, arg1, key) {
        return callback(className.components.LHeading, { className: className.className, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  heading(arg0) {
    const arg1 = arg0;
    return {
      react(className, arg1, key) {
        return callback(className.components.Heading, { className: className.className, level: className.level, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  list(arg0) {
    const arg1 = arg0;
    return {
      react(node, output, state) {
        return callback(closure_8, { node, output, state, styling: node });
      }
    };
  },
  image: obj4,
  blockQuote: obj5,
  paragraph(arg0) {
    const arg1 = arg0;
    return {
      react(node, output, state) {
        return callback(closure_9, { node, output, state, styling: node });
      }
    };
  }
};
const obj4 = {
  react(node, output, state) {
    return <ChangeLogImage node={arg0} output={arg1} state={arg2} />;
  }
};
const obj5 = {
  react(node, output, state) {
    return <ChangeLogBlockQuote node={arg0} output={arg1} state={arg2} />;
  }
};
const result = arg1(dependencyMap[9]).fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj3;
