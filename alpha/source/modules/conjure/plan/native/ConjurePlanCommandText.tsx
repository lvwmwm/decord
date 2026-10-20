// Module ID: 12301
// Function ID: 12302
// Name: ConjurePlanCommandText
// Dependencies: [19, 5939, 21, 4945, 587, 558, 576, 5195, 12284, 2]

// Module 12301 (ConjurePlanCommandText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5939 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let tmp;
const Text_Text = tmp(5195);
const f112964 = (label) => {
  let Children;
  let cloneElement;
  let cloneElementResult;
  let mapped = label;
  if (typeof label === "string") {
    closure_0 = closure_1;
    let obj = markup(size[8]);
    const result = obj.splitConjurePlanCommandText(mapped, closure_0);
    if (null != result) {
      mapped = result.map((kind) => {
        let text;
        if ("command" === kind.kind) {
          const obj = { name: kind.name, size };
          text = closure_2_4(closure_2_6, obj, kind.start);
        } else {
          text = kind.text;
        }
        return text;
      });
    }
    cloneElementResult = mapped;
  } else {
    cloneElementResult = mapped;
    const tmp11 = validElement;
    if (validElement.isValidElement(mapped)) {
      cloneElementResult = mapped;
      if (null != mapped.props.children) {
        ({ Children, cloneElement } = tmp11);
        cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, f112964));
      }
    }
  }
  return cloneElementResult;
};
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const jsx = Fragment.jsx;
let obj = { mention: obj2 };
obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandMention(arg0) {
  let name;
  let prefix;
  const obj = react2;
  const cResult = obj.c(4);
  ({ name, prefix, size } = arg0);
  if (undefined === prefix) {
    prefix = COMMAND_SENTINEL;
  }
  const tmp4 = closure_5();
  const combined = "" + size + "/bold";
  let combined1 = name;
  if ("" !== prefix) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + prefix + "\u2060" + name;
  }
  if (cResult[0] === tmp4.mention) {
    if (cResult[1] === combined) {
      let tmp7;
      if (cResult[2] === combined1) {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(Text_Text.Text, { variant: combined, color: "none", style: tmp4.mention, children: combined1 });
  cResult[0] = tmp4.mention;
  cResult[1] = combined;
  cResult[2] = combined1;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function ConjurePlanCommandMention(size) {
  let combined;
  let name;
  let prefix;
  let tmp;
  ({ name, prefix } = size);
  size = size.size;
  if (prefix === undefined) {
    prefix = COMMAND_SENTINEL;
  }
  const obj = { variant: "" + size + "/bold", color: "none", style: tmp.mention, children: combined };
  tmp = closure_5();
  const Text = Text_Text.Text;
  combined = name;
  const tmp2 = jsx;
  if ("" !== prefix) {
    const _HermesInternal = HermesInternal;
    combined = "" + prefix + "\u2060" + name;
  }
  return tmp2(Text, obj);
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandText(arg0) {
  let commandNames;
  let text;
  const obj = size(576);
  const cResult = obj.c(4);
  const tmp = size;
  ({ text, size, commandNames } = arg0);
  const obj2 = size(12284);
  const conjurePlanCommandPattern = obj2.useConjurePlanCommandPattern(commandNames);
  if (cResult[0] === conjurePlanCommandPattern) {
    if (cResult[1] === size) {
      let tmp5;
      if (cResult[2] === text) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmpResult = tmp(12284);
  const result = tmpResult.splitConjurePlanCommandText(text, conjurePlanCommandPattern);
  let mapped = text;
  if (null != result) {
    mapped = result.map((kind) => {
      let text;
      if ("command" === kind.kind) {
        const obj = { name: kind.name, size };
        text = closure_2_4(closure_2_6, obj, kind.start);
      } else {
        text = kind.text;
      }
      return text;
    });
  }
  cResult[0] = conjurePlanCommandPattern;
  cResult[1] = size;
  cResult[2] = text;
  cResult[3] = mapped;
  tmp5 = mapped;
}) : (function ConjurePlanCommandText(text) {
  let commandNames;
  text = text.text;
  ({ commandNames, size } = text);
  const obj = size(12284);
  const conjurePlanCommandPattern = obj.useConjurePlanCommandPattern(commandNames);
  const obj2 = size(12284);
  const result = obj2.splitConjurePlanCommandText(text, conjurePlanCommandPattern);
  if (null != result) {
    text = result.map((kind) => {
      let text;
      if ("command" === kind.kind) {
        const obj = { name: kind.name, size };
        text = closure_2_4(closure_2_6, obj, kind.start);
      } else {
        text = kind.text;
      }
      return text;
    });
  }
  return text;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandMarkup(arg0) {
  let commandNames;
  let conjurePlanCommandPattern;
  let markup;
  const obj = conjurePlanCommandPattern(size[6]);
  const cResult = obj.c(4);
  ({ markup, size, commandNames } = arg0);
  const obj2 = conjurePlanCommandPattern(size[8]);
  conjurePlanCommandPattern = obj2.useConjurePlanCommandPattern(commandNames);
  if (cResult[0] === markup) {
    if (cResult[1] === conjurePlanCommandPattern) {
      let tmp3;
      if (cResult[2] === size) {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  let mapped = markup;
  if (null != conjurePlanCommandPattern) {
    const Children = react.Children;
    mapped = Children.map(markup, f112964);
  }
  cResult[0] = markup;
  cResult[1] = conjurePlanCommandPattern;
  cResult[2] = size;
  cResult[3] = mapped;
  tmp3 = mapped;
}) : (function ConjurePlanCommandMarkup(markup) {
  markup = markup.markup;
  size = markup.size;
  const commandNames = markup.commandNames;
  let obj = markup(size[8]);
  const conjurePlanCommandPattern = obj.useConjurePlanCommandPattern(commandNames);
  const items = [markup, conjurePlanCommandPattern, size];
  return conjurePlanCommandPattern.useMemo(() => {
    let mapped;
    let validElement;
    if (null == conjurePlanCommandPattern) {
      mapped = markup;
    } else {
      let closure_0 = tmp;
      let closure_1 = size;
      const Children = react.Children;
      mapped = Children.map(markup, f112964);
    }
    return mapped;
  }, items);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandText.tsx");

export const ConjurePlanCommandMention = tmp2;
export const ConjurePlanCommandText = tmp3;
export const ConjurePlanCommandMarkup = tmp4;
