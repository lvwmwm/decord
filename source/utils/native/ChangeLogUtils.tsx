// Module ID: 7863
// Function ID: 62035
// Name: ChangeLogLink
// Dependencies: [31, 27, 33, 4130, 689, 4973, 4562, 4126, 3829, 2]

// Module 7863 (ChangeLogLink)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult1 from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
function ChangeLogLink(arg0) {
  let node;
  let output;
  let state;
  let styling;
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  let obj = { className: _createForOfIteratorHelperLoose().link, target: node.target };
  obj = {};
  const merged = Object.assign(state);
  obj["inLink"] = true;
  obj.children = output(node.content, obj);
  return jsx(styling.components.Link, {}, state.key);
}
function ChangeLogList(styling) {
  let require;
  let state;
  ({ output: require, state } = styling);
  styling = styling.styling;
  let List = styling.components.List;
  if (!List) {
    List = closure_3;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let items = styling.node.items;
  return <List key={state.key} style={_createForOfIteratorHelperLoose().list}>{items.map((arg0, arg1) => {
    let closure_0 = arg0;
    return outer1_5(styling.components.ListItem, {
      children(arg0) {
        return (function processListItem(closure_0, closure_02, outer1_1, arg3) {
          closure_0 = closure_02;
          let closure_1 = outer1_1;
          let closure_2 = arg3;
          function renderText() {
            if (arr.length > 0) {
              const obj = { variant: "text-sm/normal" };
              const merged = Object.assign(closure_2);
              obj["children"] = callback(arr, closure_1);
              arr = items.push(outer4_5(outer4_0(styling[7]).Text, obj, -1));
              arr = [];
            }
          }
          const items = [];
          let closure_4 = [];
          const item = closure_0.forEach((type) => {
            if ("list" === type.type) {
              renderText();
              const obj = { children: callback(type, closure_1) };
              let arr = items.push(outer4_5(outer4_3, obj, arg1));
            } else {
              arr = arr.push(type);
            }
          });
          renderText();
          return items;
        })(closure_0, closure_0, outer1_1, arg0);
      }
    }, arg1);
  })}</List>;
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
    Paragraph = require(4126) /* Text */.Text;
  }
  const tmp = _createForOfIteratorHelperLoose();
  return <Paragraph key={state.key} variant="text-sm/normal" style={_createForOfIteratorHelperLoose().text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogImage(arg0) {
  let node;
  let state;
  ({ node, state } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().image };
  obj = { uri: importDefault(3829).sanitizeUrl(node.target) };
  obj.source = obj;
  return <closure_4 key={state.key} uri={importDefault(3829).sanitizeUrl(node.target)} />;
}
function ChangeLogBlockQuote(state) {
  let node;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) });
  return <closure_3 key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</closure_3>;
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
_createForOfIteratorHelperLoose.link = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.list = { marginBottom: 10 };
_createForOfIteratorHelperLoose.image = { alignSelf: "center", flex: 1 };
const obj1 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
_createForOfIteratorHelperLoose.container = obj1;
const obj2 = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.text = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const rules = require("_createForOfIteratorHelperLoose").createRules({});
const obj3 = {
  link(arg0) {
    let closure_0 = arg0;
    return {
      react(node, output, state) {
        return outer1_5(outer1_7, { accessibilityRole: "link", node, output, state, styling: closure_0 });
      }
    };
  },
  lheading(arg0) {
    let closure_0 = arg0;
    return {
      react(className, arg1, key) {
        return outer1_5(components.components.LHeading, { className: className.className, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  heading(arg0) {
    let closure_0 = arg0;
    return {
      react(className, arg1, key) {
        return outer1_5(components.components.Heading, { className: className.className, level: className.level, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  list(arg0) {
    let closure_0 = arg0;
    return {
      react(node, output, state) {
        return outer1_5(outer1_8, { node, output, state, styling: closure_0 });
      }
    };
  },
  image: obj4,
  blockQuote: obj5,
  paragraph(arg0) {
    let closure_0 = arg0;
    return {
      react(node, output, state) {
        return outer1_5(outer1_9, { node, output, state, styling: closure_0 });
      }
    };
  }
};
obj4 = {
  react(node, output, state) {
    return <ChangeLogImage node={arg0} output={arg1} state={arg2} />;
  }
};
obj5 = {
  react(node, output, state) {
    return <ChangeLogBlockQuote node={arg0} output={arg1} state={arg2} />;
  }
};
const result = require("jsxProd").fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj3;
