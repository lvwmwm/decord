// Module ID: 12704
// Function ID: 12705
// Name: ConjurePlanCommandText
// Dependencies: [19, 6031, 21, 5009, 575, 5619, 12693, 2]
// Exports: ConjurePlanCommandMarkup, ConjurePlanCommandText

// Module 12704 (ConjurePlanCommandText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6031 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let obj2;
class ConjurePlanCommandMention {
  constructor(size) {
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
  }
}
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const jsx = Fragment.jsx;
let obj = { mention: obj2 };
obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
const hasOwnProperty = createStyles.createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandText.tsx");

export { ConjurePlanCommandMention };
export function ConjurePlanCommandText(text) {
  let commandNames;
  text = text.text;
  ({ commandNames, size } = text);
  const obj = size(12693);
  const conjurePlanCommandPattern = obj.useConjurePlanCommandPattern(commandNames);
  const obj2 = size(12693);
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
}
export function ConjurePlanCommandMarkup(markup) {
  markup = markup.markup;
  size = markup.size;
  const commandNames = markup.commandNames;
  let obj = markup(size[6]);
  const conjurePlanCommandPattern = obj.useConjurePlanCommandPattern(commandNames);
  const items = [markup, conjurePlanCommandPattern, size];
  return conjurePlanCommandPattern.useMemo(() => {
    let mapped;
    let validElement;
    const f102609 = (icon) => {
      let Children;
      let cloneElement;
      let cloneElementResult;
      let mapped = icon;
      if (typeof icon === "string") {
        closure_0 = closure_1;
        let obj = markup(size[6]);
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
            cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, f102609));
          }
        }
      }
      return cloneElementResult;
    };
    if (null == conjurePlanCommandPattern) {
      mapped = markup;
    } else {
      let closure_0 = tmp;
      let closure_1 = size;
      const Children = react.Children;
      mapped = Children.map(markup, f102609);
    }
    return mapped;
  }, items);
}
