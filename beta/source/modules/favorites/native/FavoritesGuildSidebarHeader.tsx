// Module ID: 15914
// Function ID: 15915
// Name: FavoritesGuildSidebarHeader
// Dependencies: [19, 17, 15834, 21, 4836, 576, 9685, 10439, 4800, 9689, 1981, 9688, 4832, 1115, 3361, 5394, 5415, 5385, 5279, 2]
// Exports: default

// Module 15914 (FavoritesGuildSidebarHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef3361 from "module_3361" /* 3361 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import ChatIcon2 from "ChatIcon" /* 5385 */;
import TextIcon2 from "TextIcon" /* 5394 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5415 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 9688 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10439 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 15834 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
    const obj = FavoritesHooks;
    if (obj.getFavoritesAccess().hasAccess) {
      openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_sidebar" });
    } else {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequire(dependencyMap[9], dependencyMap.paths);
      openLazy(tmp5, openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
    }
  }, []);
  let obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(_modDef3361.Z3Hdr5, { onClick: callback }) };
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
  const Stack2 = tmp4(5279).Stack;
  const obj4 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3361["1n0TGE"]) };
  const Heading = tmp4(4832).Heading;
  intl = tmp4(1115).intl;
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
