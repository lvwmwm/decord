// Module ID: 16562
// Function ID: 16563
// Name: FavoritesEmptyState
// Dependencies: [19, 17, 21, 4836, 576, 9685, 10439, 4800, 9689, 1981, 9688, 9694, 5279, 4832, 1115, 3361, 5281, 12269, 2]
// Exports: default

// Module 16562 (FavoritesEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 9694 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp2;
const PlusMediumIcon = tmp2(12269);
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
  let intl4;
  let items;
  let items1;
  let obj7;
  let paths;
  const tmp = closure_7();
  let tmp2 = require;
  const obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess("favorites_empty_state").hasAccess;
  const callback = react.useCallback(() => {
    require("openFavoritesGuildAddChannelModal")({ source: "favorites_empty_state" });
  }, []);
  const obj2 = { style: tmp.container, children: items };
  const callback1 = react.useCallback(() => {
    const openLazy = require("ActionSheetActionCreators").openLazy;
    require("ActionSheetActionCreators");
    const tmp2 = require("asyncRequire")(paths[8], paths.paths);
    openLazy(tmp2, require("openFavoritesGuildLimitUpsell").FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
  }, []);
  items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj3 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(_modDef3361["wh+Rz1"]) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items1 = [hasOwnProperty(Heading, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(_modDef3361["+SuGKb"]) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items1[1] = hasOwnProperty(Text, obj5);
  items[1] = metroRequire(Stack, obj3);
  const Button = components_Button_Button.Button;
  const tmp6 = metroRequire;
  const tmp7 = View;
  if (hasAccess) {
    const obj6 = { variant: "primary", text: intl4.string(_modDef3361["6kk0gM"]), icon: hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {}), onPress: callback };
    intl4 = intl5.intl;
    obj7 = obj6;
  } else {
    obj7 = { variant: "primary", text: intl3.string(_modDef3361.yYVbdv), onPress: callback1 };
    intl3 = intl5.intl;
  }
  items[2] = hasOwnProperty(Button, obj7);
  return tmp6(tmp7, obj2);
};
