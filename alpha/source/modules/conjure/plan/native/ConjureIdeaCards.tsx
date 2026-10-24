// Module ID: 12491
// Function ID: 12492
// Name: ConjureIdeaCards
// Dependencies: [19, 17, 21, 4971, 12351, 558, 576, 5234, 1128, 3830, 6905, 5977, 2]

// Module 12491 (ConjureIdeaCards)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import Card_Card from "Card/Card" /* 6905 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12351 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { ideaCards: obj2 };
obj2 = { gap: conjureNativeChatLayout.BLOCK_GAP };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureIdeaCards(arg0) {
  let first;
  let ideas;
  let intl;
  let items;
  let onPick;
  let tmp10;
  let tmp = onPick;
  let tmp2 = dependencyMap;
  let obj = onPick(576);
  const cResult = obj.c(9);
  ({ ideas, onPick } = arg0);
  const tmp4 = closure_6();
  const ideaCards = tmp4.ideaCards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830["wx/o8Y"]) };
    const Text = tmp(5234).Text;
    intl = tmp(1128).intl;
    const tmp8 = closure_4(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === ideas) {
    let tmp9;
    if (cResult[2] === onPick) {
      tmp9 = cResult[3];
    }
    if (cResult[6] === tmp4.ideaCards) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    let obj3 = { style: ideaCards, children: items };
    items = [first, tmp9];
    const tmp15 = closure_5(View, obj3);
    cResult[6] = tmp4.ideaCards;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  if (cResult[4] !== onPick) {
    const fn = function x(title) {
      let Stack;
      let intl;
      let items;
      let obj2;
      let tmp5;
      let closure_0 = title;
      const tmp = closure_1_4;
      let tmpResult = null;
      const obj = {
        onPress() {
          let tmpResult;
          if (onPick != null) {
            tmpResult = tmp(title);
          }
          return tmpResult;
        },
        disabled: null == closure_0,
        accessibilityLabel: intl.formatToPlainString(_modDef3830.H8G39M, obj2),
        children: tmp5(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = onPick(dependencyMap[10]).Card;
      intl = onPick(dependencyMap[8]).intl;
      obj2 = { title: title.title };
      Stack = onPick(dependencyMap[11]).Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_4(onPick(dependencyMap[7]).Text, obj3);
      const tmp2 = onPick;
      const tmp3 = dependencyMap;
      tmp5 = closure_1_5;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[7]).Text, obj4);
      }
      items[1] = tmpResult;
      return tmp(Card, obj, title.id);
    };
    cResult[4] = onPick;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const mapped = ideas.map(tmp10);
  cResult[1] = ideas;
  cResult[2] = onPick;
  cResult[3] = mapped;
  tmp9 = mapped;
}) : (function ConjureIdeaCards(arg0) {
  let ideas;
  let intl;
  let items;
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_6().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830["wx/o8Y"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [
    closure_4(Text, obj2),
    ideas.map((title) => {
      let Stack;
      let intl;
      let items;
      let obj2;
      let tmp5;
      require = title;
      const tmp = closure_1_4;
      let tmpResult = null;
      const obj = {
        onPress() {
          let tmpResult;
          if (require != null) {
            tmpResult = tmp(title);
          }
          return tmpResult;
        },
        disabled: null == require,
        accessibilityLabel: intl.formatToPlainString(_modDef3830.H8G39M, obj2),
        children: tmp5(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = Card_Card.Card;
      intl = intl2.intl;
      obj2 = { title: title.title };
      Stack = Stack_Stack.Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_4(Text_Text.Text, obj3);
      const tmp2 = require;
      const tmp3 = dependencyMap;
      tmp5 = closure_1_5;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[7]).Text, obj4);
      }
      items[1] = tmpResult;
      return tmp(Card, obj, title.id);
    })
  ];
  return closure_5(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjureIdeaCards.tsx");

export default tmp4;
