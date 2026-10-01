// Module ID: 6556
// Function ID: 6557
// Name: DropdownOptionsActionSheet
// Dependencies: [19, 17, 5771, 6521, 1375, 21, 4836, 563, 6551, 1397, 1177, 1115, 4832, 6557, 1613, 4800, 6570, 6571, 6045, 5281, 2]
// Exports: default

// Module 6556 (DropdownOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl4 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
function DropdownOptionRow(option) {
  let emojiURL;
  let intl;
  let items2;
  let leading;
  let obj4;
  let onSelect;
  let responses;
  let str;
  let tmp13;
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const canBeNew = option.canBeNew;
  let tmp = closure_10();
  const items = [EmojiStore];
  const obj = option(selected[7]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    const tmp = option;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = tmp.emoji;
      let id1;
      const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = react.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj2 = { style: { display: "flex", alignItems: "center" }, children: closure_8(tmp13, obj4) };
    obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    emojiURL = undefined;
    const tmp11 = View;
    const tmp12 = onSelect;
    tmp13 = onSelect(selected[8]);
    if (null != stateFromStores) {
      const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      const tmp12Result = tmp12(selected[9]);
      emojiURL = tmp12Result.getEmojiURL(obj6);
    }
    const emoji3 = option.emoji;
    str = undefined;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    leading = tmp10(tmp11, obj2);
  } else {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    leading = null;
  }
  let trailing = null;
  if (canBeNew) {
    trailing = null;
    if (option.isUnseen) {
      const obj7 = { color: option(selected[10]).BadgeColors.BRAND, text: intl.string(option(selected[11]).t.y2b7CA), textStyle: tmp.newBadge };
      const TextBadge = tmp2(tmp3[10]).TextBadge;
      intl = tmp2(tmp3[11]).intl;
      trailing = closure_8(TextBadge, obj7);
    }
  }
  const obj8 = { style: tmp.labelRow, children: items2 };
  items2 = [, ];
  const obj14 = { variant: "text-md/normal", children: option.title };
  items2[0] = closure_8(option(selected[12]).Text, obj14);
  items2[1] = trailing;
  const label = closure_9(View, obj8);
  return closure_8(onSelect(selected[13]), { label, selected, leading, trailing, onPress });
}
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, newBadge: { fontWeight: "bold" }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default function DropdownOptionsActionSheet(arg0) {
  let BottomSheetScrollView;
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj5;
  let obj6;
  let obj9;
  let onSelect;
  let options;
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: react } = arg0);
  const tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = useStateFromStores;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingPrompt(importDefault));
  const items1 = [GuildOnboardingPromptsStore];
  const obj2 = useStateFromStores;
  const responses = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(require, importDefault));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj3 = { title: intl.string(intl4.t.E2ICbC) };
    const BottomSheetTitleHeader = tmp3(6570).BottomSheetTitleHeader;
    intl = tmp3(1115).intl;
    const obj4 = { scrollable: true, header: closure_8(BottomSheetTitleHeader, obj3), children: closure_9(BottomSheetScrollView, obj5) };
    closure_8(BottomSheetTitleHeader, obj3);
    BottomSheet = tmp3(6571).BottomSheet;
    obj5 = { contentContainerStyle: obj6, children: items2 };
    obj6 = { paddingBottom: bottom };
    BottomSheetScrollView = tmp3(6045).BottomSheetScrollView;
    const obj7 = {
      accessibilityRole: "radiogroup",
      accessibilityLabel: intl2.string(intl4.t.E2ICbC),
      children: options.map((option) => {
          const obj = { option, responses, onSelect: react, canBeNew: Boolean(dependencyMap) };
          return metroImportAll(DropdownOptionRow, obj, option.id);
        })
    };
    const CardSection = tmp3(1177).CardSection;
    intl2 = tmp3(1115).intl;
    options = stateFromStores.options;
    items2 = [closure_8(CardSection, obj7), ];
    const obj8 = { style: tmp.closeButtonWrapper, children: closure_8(Button, obj9) };
    obj9 = { onPress: tmp5, text: intl3.string(intl4.t.cpT0Cq), grow: true };
    Button = tmp3(5281).Button;
    intl3 = tmp3(1115).intl;
    items2[1] = closure_8(responses, obj8);
    return closure_8(BottomSheet, obj4);
  }
};
