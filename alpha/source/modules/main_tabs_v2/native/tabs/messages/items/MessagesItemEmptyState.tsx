// Module ID: 16507
// Function ID: 16508
// Name: MessagesItemEmptyState
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 4977, 1126, 5088, 5379, 2]

// Module 16507 (MessagesItemEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: obj3, title: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemEmptyState() {
  let container;
  let first;
  let intl3;
  let items;
  let title;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp6;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (rootNavigationRef != null) {
        const current = rootNavigationRef.current;
        if (current != null) {
          const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
          current.navigate("friends", obj2);
        }
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  ({ container, title } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t["8JZof8"]);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.title) {
    let obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: title, maxFontSizeMultiplier: 2, children: tmp6 };
    const tmp10 = React3(Text_Text.Heading, obj2);
    cResult[2] = tmp4.title;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  const body = tmp4.body;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t["qm+H7x"]);
    cResult[4] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4.body) {
    const obj3 = { color: "text-default", variant: "text-md/medium", style: body, maxFontSizeMultiplier: 2, children: tmp11 };
    const tmp15 = React3(Text_Text.Text, obj3);
    cResult[5] = tmp4.body;
    cResult[6] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { text: intl3.string(intl4.t.zIJnA6), onPress: first, size: "lg" };
    const Button = tmp(5379).Button;
    intl3 = tmp(1126).intl;
    const tmp18 = React3(Button, obj4);
    cResult[7] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === tmp4.container) {
    if (cResult[9] === tmp8) {
      let tmp19;
      if (cResult[10] === tmp13) {
        tmp19 = cResult[11];
      }
      return tmp19;
    }
  }
  const obj5 = { style: container, collapsable: false, children: items };
  items = [tmp8, tmp13, tmp16];
  const tmp20 = hasOwnProperty(View, obj5);
  cResult[8] = tmp4.container;
  cResult[9] = tmp8;
  cResult[10] = tmp13;
  cResult[11] = tmp20;
  tmp19 = tmp20;
}) : (function MessagesItemEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  const tmp = closure_6();
  let obj = { style: tmp.container, collapsable: false, children: items };
  const callback = react.useCallback(() => {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [React3(Heading, obj2), , ];
  const obj3 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = React3(Text, obj3);
  const obj4 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback, size: "lg" };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = React3(Button, obj4);
  return hasOwnProperty(View, obj);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
