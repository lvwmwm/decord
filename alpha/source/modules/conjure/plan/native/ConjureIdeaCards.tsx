// Module ID: 12773
// Function ID: 12774
// Name: ConjureIdeaCards
// Dependencies: [19, 17, 21, 5014, 12631, 5624, 1113, 3868, 6977, 6027, 2]
// Exports: default

// Module 12773 (ConjureIdeaCards)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import Card_Card from "Card/Card" /* 6977 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12631 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { ideaCards: obj2 };
obj2 = { gap: conjureNativeChatLayout.BLOCK_GAP };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjureIdeaCards.tsx");

export default function ConjureIdeaCards(arg0) {
  let ideas;
  let intl;
  let items;
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_6().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3868["wx/o8Y"]) };
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
        accessibilityLabel: intl.formatToPlainString(_modDef3868.H8G39M, obj2),
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
        tmpResult = tmp(tmp2(tmp3[5]).Text, obj4);
      }
      items[1] = tmpResult;
      return tmp(Card, obj, title.id);
    })
  ];
  return closure_5(View, obj);
};
