// Module ID: 18098
// Function ID: 18099
// Name: MessagesItemEmptyState
// Dependencies: [19, 17, 21, 5009, 575, 5194, 5619, 1114, 5629, 2]

// Module 18098 (MessagesItemEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const memoResult = react.memo(function MessagesItemEmptyState() {
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
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
