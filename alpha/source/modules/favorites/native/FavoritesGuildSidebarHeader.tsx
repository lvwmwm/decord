// Module ID: 18299
// Function ID: 18300
// Name: FavoritesGuildSidebarHeader
// Dependencies: [19, 17, 18206, 21, 5009, 575, 14349, 5619, 1114, 3447, 8644, 8665, 8635, 6022, 2]
// Exports: default

// Module 18299 (FavoritesGuildSidebarHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ChatIcon2 from "ChatIcon" /* 8635 */;
import TextIcon2 from "TextIcon" /* 8644 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 8665 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 14349 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 18206 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function EmptyBody() {
  let intl;
  const callback = react.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_sidebar" });
  }, []);
  const obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(_modDef3447.Z3Hdr5, { onClick: callback }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return metroRequire(Text, obj);
}
function PlaceholderRows() {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  const tmp = closure_9();
  const obj = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  const obj2 = { style: tmp.placeholderRow, children: items };
  const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const TextIcon = TextIcon2.TextIcon;
  items = [metroRequire(TextIcon, obj3), ];
  const obj4 = { style: items1 };
  items1 = [, ];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  items[1] = metroRequire(View, obj4);
  items2 = [metroImportDefault(View, obj2), , ];
  const obj5 = { style: tmp.placeholderRow, children: items3 };
  const obj6 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  items3 = [metroRequire(VoiceNormalIcon, obj6), ];
  const obj7 = { style: items4 };
  items4 = [, ];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  items3[1] = metroRequire(View, obj7);
  items2[1] = metroImportDefault(View, obj5);
  const obj8 = { style: tmp.placeholderRow, children: items5 };
  const obj9 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const ChatIcon = ChatIcon2.ChatIcon;
  items5 = [metroRequire(ChatIcon, obj9), ];
  const obj10 = { style: items6 };
  items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  items5[1] = metroRequire(View, obj10);
  items2[2] = metroImportDefault(View, obj8);
  return metroImportDefault(View, obj);
}
const View = react_native.View;
let closure_5 = FavoritesGuildSuggestionsStore.useHasFavoritesGuildSuggestions;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { copy: obj2, divider: obj3, placeholderRows: obj4, placeholderRow: obj5, placeholderBar: obj6, placeholderBarShort: obj7, placeholderBarLong: obj8 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj7 = { width: nativeDefault.space.PX_80 };
obj8 = { width: nativeDefault.space.PX_128 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader() {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_9();
  const tmp2 = closure_5();
  const obj = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  let tmp7 = null;
  if (tmp2) {
    const obj2 = { style: tmp.divider };
    tmp7 = metroRequire(View, obj2);
  }
  items = [tmp7, , ];
  const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.copy, children: items1 };
  const Stack2 = tmp4(6022).Stack;
  const obj4 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3447["1n0TGE"]) };
  const Heading = tmp4(5619).Heading;
  intl = tmp4(1114).intl;
  items1 = [metroRequire(Heading, obj4), metroRequire(EmptyBody, {})];
  items[1] = metroImportDefault(Stack2, obj3);
  let tmp3Result = null;
  if (!tmp2) {
    const obj5 = { children: items2 };
    const obj6 = { style: tmp.divider };
    items2 = [metroRequire(View, obj6), metroRequire(PlaceholderRows, {})];
    tmp3Result = tmp3(metroImportAll, obj5);
  }
  items[2] = tmp3Result;
  return metroImportDefault(Stack, obj);
};
