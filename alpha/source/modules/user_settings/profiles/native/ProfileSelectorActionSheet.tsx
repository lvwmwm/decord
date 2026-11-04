// Module ID: 16825
// Function ID: 16826
// Name: ProfileSelectorActionSheet
// Dependencies: [32, 19, 17, 5012, 6907, 16824, 21, 5141, 575, 7202, 1113, 10863, 7098, 504, 6914, 5743, 6096, 5150, 5382, 5396, 7457, 7355, 5761, 7430, 2]
// Exports: default

// Module 16825 (ProfileSelectorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import GuildIcon from "GuildIcon" /* 7098 */;
import TableRadioRow2 from "TableRadioRow" /* 7202 */;
import ProfileSelectorActionSheetConstants from "ProfileSelectorActionSheetConstants" /* 16824 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import SortedGuildStore from "SortedGuildStore" /* 6907 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let flattenedGuildIds;

let c10;
let c9;
let obj2;
let obj3;
function getOptionKey(type) {
  let str = "main";
  if ("main" !== type.type) {
    str = type.guild.id;
  }
  return str;
}
const View = react_native.View;
let closure_8 = ProfileSelectorActionSheetConstants.PROFILE_SELECTOR_ACTION_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBar: obj2, emptyState: obj3, emptyStateText: { textAlign: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_11 = createStyles(obj);
let closure_13 = react.memo(function ProfileOptionRow(option) {
  let end;
  let name;
  let selected;
  let start;
  let tmpResult;
  option = option.option;
  const onSelect = option.onSelect;
  ({ selected, start, end } = option);
  let str = "main";
  const TableRadioRow = TableRadioRow2.TableRadioRow;
  if ("main" !== option.type) {
    str = option.guild.id;
  }
  const obj = {
    value: str,
    label: name,
    labelLineClamp: 1,
    icon: tmpResult,
    start,
    end,
    legacyCompat_selected: selected,
    legacyCompat_onPress() {
      return onSelect(option);
    }
  };
  if ("main" === option.type) {
    const intl = tmp2(1113).intl;
    name = intl.string(tmp2(1113).t["2p07FR"]);
  } else {
    name = option.guild.name;
  }
  if ("main" === option.type) {
    const obj2 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    const ClydeIcon = tmp2(10863).ClydeIcon;
    tmpResult = tmp(ClydeIcon, obj2);
  } else {
    const obj3 = { guild: option.guild, size: GuildIcon.GuildIconSizes.XSMALL };
    const tmp5 = GuildIconDefault;
    tmpResult = tmp(tmp5, obj3);
  }
  return React4(TableRadioRow, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileSelectorActionSheet.tsx");

export default function ProfileSelectorActionSheet(selectedGuildId) {
  let BottomSheetTitleHeader;
  let SearchBar;
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items6;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let str;
  let tmp14Result;
  let tmp5;
  selectedGuildId = selectedGuildId.selectedGuildId;
  const onSelectMainProfile = selectedGuildId.onSelectMainProfile;
  const onSelectGuild = selectedGuildId.onSelectGuild;
  let trimmed;
  let stateFromStoresArray;
  let onSelect;
  const tmp = closure_11();
  let tmp2 = onSelectMainProfile;
  let tmp3 = onSelectGuild;
  const insets = onSelectMainProfile(onSelectGuild[15])().insets;
  [str, tmp5] = trimmed(stateFromStoresArray.useState(""), 2);
  const tmp4 = trimmed(stateFromStoresArray.useState(""), 2);
  trimmed = str.trim();
  let obj = selectedGuildId(onSelectGuild[13]);
  let items = [onSelect, SortedGuildStore];
  const items1 = [trimmed];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let found;
    let guild;
    if (0 === trimmed.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const mapped = flattenedGuildIds.map((item) => guild.getGuild(item));
      found = mapped.filter((item) => null != item);
    } else {
      const obj2 = { query: tmp, limit: Infinity };
      const obj = onSelectMainProfile(onSelectGuild[14]);
      const queryGuildsResult = obj.queryGuilds(obj2);
      found = queryGuildsResult.map((record) => record.record);
    }
    return found;
  }, items1);
  const items2 = [stateFromStoresArray, trimmed];
  const memo = stateFromStoresArray.useMemo(() => {
    const mapped = stateFromStoresArray.map((guild) => ({ type: "guild", guild }));
    let tmp3 = mapped;
    if (0 === trimmed.length) {
      const items = [{ type: "main" }];
      HermesBuiltin.arraySpread(items, mapped, 1);
      tmp3 = items;
    }
    return tmp3;
  }, items2);
  const effect = stateFromStoresArray.useEffect(() => onSelectMainProfile(onSelectGuild[16]), []);
  const items3 = [trimmed, memo.length];
  const effect1 = stateFromStoresArray.useEffect(() => {
    if (trimmed.length > 0) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl5.intl;
      const obj = { count: memo.length };
      announce(intl.formatToPlainString(intl5.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  const items4 = [onSelectMainProfile, onSelectGuild];
  onSelect = stateFromStoresArray.useCallback((type) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(closure_8);
    if ("main" === type.type) {
      onSelectMainProfile();
    } else {
      onSelectGuild(type.guild);
    }
  }, items4);
  const items5 = [memo, selectedGuildId, onSelect];
  const callback1 = stateFromStoresArray.useCallback((arg0) => {
    let index;
    let item;
    let tmp2;
    ({ item, index } = arg0);
    if ("main" === item.type) {
      tmp2 = null == selectedGuildId;
    } else {
      tmp2 = item.guild.id === selectedGuildId;
    }
    const obj = { option: item, selected: tmp2, start: 0 === index, end: index === memo.length - 1, onSelect };
    return React4(closure_13, obj);
  }, items5);
  let obj2 = { scrollable: true, header: closure_9(BottomSheetTitleHeader, obj3), children: items6 };
  const BottomSheet = selectedGuildId(onSelectGuild[19]).BottomSheet;
  obj3 = { title: intl.string(selectedGuildId(onSelectGuild[10]).t.MRnpah) };
  BottomSheetTitleHeader = selectedGuildId(onSelectGuild[20]).BottomSheetTitleHeader;
  intl = selectedGuildId(onSelectGuild[10]).intl;
  const obj4 = { style: tmp.searchBar, children: closure_9(SearchBar, obj5) };
  obj5 = { size: "md", accessibilityLabel: intl2.string(selectedGuildId(onSelectGuild[10]).t["5h0QOP"]), onChange: tmp5 };
  SearchBar = selectedGuildId(onSelectGuild[21]).SearchBar;
  intl2 = selectedGuildId(onSelectGuild[10]).intl;
  items6 = [closure_9(memo, obj4), ];
  const tmp13 = closure_10;
  const tmp15 = memo;
  if (0 === memo.length) {
    const obj6 = { style: tmp.emptyState, children: closure_9(Text, obj7) };
    obj7 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl3.string(selectedGuildId(tmp3[10]).t["Xe+fJM"]) };
    Text = tmp7(tmp3[22]).Text;
    intl3 = tmp7(tmp3[10]).intl;
    tmp14Result = tmp14(tmp15, obj6);
  } else {
    const obj8 = { accessibilityRole: "radiogroup", accessibilityLabel: intl4.string(selectedGuildId(tmp3[10]).t.MRnpah), keyboardShouldPersistTaps: "handled", maintainVisibleContentPosition: { disabled: true }, data: memo, keyExtractor: getOptionKey, renderItem: callback1, contentContainerStyle: obj9 };
    const BottomSheetFlashList = tmp7(tmp3[23]).BottomSheetFlashList;
    intl4 = tmp7(tmp3[10]).intl;
    obj9 = { paddingHorizontal: tmp2(tmp3[8]).space.PX_16, paddingBottom: tmp2(tmp3[8]).space.PX_16 + insets.bottom };
    tmp14Result = tmp14(BottomSheetFlashList, obj8);
  }
  items6[1] = tmp14Result;
  return tmp13(BottomSheet, obj2);
};
