// Module ID: 18770
// Function ID: 18771
// Name: FavoritesEmptyState
// Dependencies: [19, 17, 21, 5009, 575, 14349, 10818, 6022, 5619, 1114, 3447, 5629, 11449, 2]
// Exports: default

// Module 18770 (FavoritesEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 10818 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11449 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 14349 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, text: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  const callback = react.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
  }, []);
  items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj2 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(_modDef3447["wh+Rz1"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items1 = [hasOwnProperty(Heading, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(_modDef3447["+SuGKb"]) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = hasOwnProperty(Text, obj4);
  items[1] = metroRequire(Stack, obj2);
  const obj5 = { variant: "primary", text: intl3.string(_modDef3447["6kk0gM"]), icon: hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {}), onPress: callback };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = hasOwnProperty(Button, obj5);
  return metroRequire(View, obj);
};
