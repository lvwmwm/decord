// Module ID: 15727
// Function ID: 15728
// Name: MessagesItemEmptyState
// Dependencies: [19, 17, 21, 4836, 576, 4693, 15687, 4832, 1115, 5281, 2]

// Module 15727 (MessagesItemEmptyState)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 15687 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerImage: obj3, image: { height: "100%", width: "100%" }, body: obj4, title: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj4 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function MessagesItemEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  const tmp = closure_8();
  let obj = { style: tmp.container, collapsable: false, children: items };
  let obj2 = { style: tmp.containerImage, children: metroRequire(React3, obj3) };
  obj3 = { resizeMode: "contain", source: AssetRegistryDefault, style: tmp.image };
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
  items = [metroRequire(hasOwnProperty, obj2), , , ];
  const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items[1] = metroRequire(Heading, obj4);
  const obj5 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroRequire(Text, obj5);
  const obj6 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback, size: "lg" };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[3] = metroRequire(Button, obj6);
  return metroImportDefault(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
