// Module ID: 16503
// Function ID: 16504
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: [32, 19, 17, 8393, 21, 5014, 1375, 575, 8736, 5082, 6975, 5258, 1113, 6957, 9295, 7062, 14727, 12, 5023, 14730, 7351, 7366, 7321, 5634, 7218, 5272, 5624, 7294, 8177, 2]
// Exports: default

// Module 16503 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import _mod8177 from "module_8177" /* 8177 */;
import GuildTagConstants from "GuildTagConstants" /* 8393 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14730 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let num;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: { lineHeight: num }, divider: obj2, itemTrailingStyle: { flexDirection: "row", alignItems: "center", gap: 8, height: 20 }, searchContainer: { paddingHorizontal: 16, paddingTop: 16 }, searchRow: { flexDirection: "row", alignItems: "center", gap: 8 }, searchField: { flex: 1 }, emptyState: { alignItems: "center" }, noResults: { padding: 16, textAlign: "center" } };
createStyles = createStyles.createStyles;
num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
let closure_11 = react.memo(function Item(item) {
  let accessibilityRole;
  let accessibilityState;
  let end;
  let items;
  let name;
  let obj4;
  let profile;
  let selected;
  let start;
  let tag;
  let tmp11Result;
  let tmp15;
  let tmp16;
  item = item.item;
  ({ selected, onSelectGuild: importDefault } = item);
  ({ start, end } = item);
  let tmp = closure_10();
  if (item != null) {
    profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge;
    const getGuildTagBadgeUrl = item(8736).getGuildTagBadgeUrl;
    let id = item.id;
    item(8736);
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_24);
  }
  let obj = item(5082);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = {
    start,
    end,
    onPress() {
      let id;
      const tmp = importDefault;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      tmp(id);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    label: name,
    icon: tmp11Result,
    accessibilityRole,
    accessibilityState,
    trailing: tmp15(tmp16, obj4)
  };
  const TableRow = item(6975).TableRow;
  if (null != item) {
    name = item.name;
  } else {
    const intl = tmp8(1113).intl;
    name = intl.string(tmp8(1113).t.PoWNfe);
  }
  tmp11Result = null;
  if (null != item) {
    const obj3 = { style: tmp.guildIcon, guild: item, size: item(6957).GuildIconSizes.SMALL_32 };
    const tmp14 = GuildIconDefault;
    tmp11Result = tmp11(tmp14, obj3);
  }
  let tmp11Result2 = null != item;
  obj4 = { style: tmp.itemTrailingStyle, children: items };
  tmp15 = closure_8;
  tmp16 = View;
  if (tmp11Result2) {
    tmp11Result2 = null != profile;
  }
  if (tmp11Result2) {
    const obj9 = { containerStyles: null, textStyle: null, guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp);
    tag = profile.tag;
    const BaseGuildTagChiplet = tmp8(9295).BaseGuildTagChiplet;
    tmp11Result2 = tmp11(BaseGuildTagChiplet, obj9);
  }
  items = [tmp11Result2, closure_7(item(7062).FormRadio, { selected })];
  return closure_7(TableRow, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  let BottomSheetFlashList;
  let Button2;
  let Text;
  let Text2;
  let c6;
  let divider;
  let first;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isUpsellVisible;
  let items4;
  let items6;
  let obj14;
  let obj15;
  let obj16;
  let obj5;
  let obj8;
  let tmp15Result;
  let tmp4;
  availableGuilds = availableGuilds.availableGuilds;
  const selectedGuildId = availableGuilds.selectedGuildId;
  const onSelectGuild = availableGuilds.onSelectGuild;
  first = undefined;
  c6 = undefined;
  function handleCreateGuildTag() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp2 = openGuildTagCreateFlowDefault;
    tmp2(c6, AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE);
  }
  let tmp = closure_10();
  _slicedToArray = tmp;
  [first, tmp4] = first.useState("");
  const ref = first.useRef(null);
  let obj = availableGuilds(onSelectGuild[16]);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("UserPrimaryGuildListBottomSheet");
  ({ creatableGuilds: c6, isUpsellVisible } = guildTagCreationUpsell);
  let items = [availableGuilds];
  const memo = first.useMemo(() => {
    const obj = _modDef12;
    return obj.sortBy(availableGuilds, (name) => {
      const str = name.name;
      return str.toLowerCase();
    });
  }, items);
  const items1 = [memo, first];
  const memo1 = first.useMemo(() => {
    let found;
    let str = first.trim();
    let formatted = str.toLowerCase();
    if ("" === formatted) {
      const items = [null];
      HermesBuiltin.arraySpread(items, memo, 1);
      found = items;
    } else {
      found = memo.filter((name) => {
        const str = name.name;
        formatted = str.toLowerCase();
        let hasItem = formatted.includes(formatted);
        const tmp = formatted;
        if (!hasItem) {
          const profile = name.profile;
          let flag;
          if (profile != null) {
            if (profile.tag != null) {
              const formatted1 = str2.toLowerCase();
              flag = formatted1.includes(tmp);
            }
          }
          if (flag == null) {
            flag = false;
          }
          hasItem = flag;
        }
        return hasItem;
      });
    }
    return found;
  }, items1);
  const items2 = [first];
  const effect = first.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items2);
  const items3 = [memo1, first];
  const effect1 = first.useEffect(() => {
    if ("" !== first.trim()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: memo1.length };
      announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  if (0 === availableGuilds.length) {
    if (null == selectedGuildId) {
      if (isUpsellVisible) {
        const obj2 = { children: items4 };
        const ActionSheet = tmp6(tmp7[21]).ActionSheet;
        const obj3 = { title: intl8.string(availableGuilds(onSelectGuild[12]).t.Fo0g9x), subtitle: intl9.string(availableGuilds(onSelectGuild[12]).t["NV+MBV"]) };
        const BottomSheetTitleHeader = tmp6(tmp7[22]).BottomSheetTitleHeader;
        intl8 = tmp6(tmp7[12]).intl;
        intl9 = tmp6(tmp7[12]).intl;
        items4 = [memo(BottomSheetTitleHeader, obj3), ];
        const obj4 = { style: tmp.emptyState, children: memo(Button2, obj5) };
        obj5 = { text: intl10.string(availableGuilds(onSelectGuild[12]).t["65zBhE"]), onPress: handleCreateGuildTag };
        Button2 = tmp6(tmp7[23]).Button;
        intl10 = tmp6(tmp7[12]).intl;
        items4[1] = memo(ref, obj4);
        return memo1(ActionSheet, obj2);
      }
    }
  }
  const obj6 = { placeholder: intl.string(availableGuilds(onSelectGuild[12]).t.uohsSv), accessibilityLabel: intl2.string(availableGuilds(onSelectGuild[12]).t.uohsSv), onChange: tmp4 };
  const SearchBar = tmp6(tmp7[24]).SearchBar;
  intl = tmp6(tmp7[12]).intl;
  intl2 = tmp6(tmp7[12]).intl;
  const tmp14 = memo(SearchBar, obj6);
  const obj7 = { style: tmp.titleContainer, children: memo(Text, obj8) };
  BottomSheet = tmp6(tmp7[25]).BottomSheet;
  obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl3.string(availableGuilds(onSelectGuild[12]).t.Fo0g9x) };
  Text = tmp6(tmp7[26]).Text;
  intl3 = tmp6(tmp7[12]).intl;
  const items5 = [memo(ref, obj7), ];
  const obj9 = { style: tmp.searchContainer, children: tmp15Result };
  tmp15Result = tmp14;
  const tmp16 = closure_9;
  if (isUpsellVisible) {
    const obj10 = { style: tmp.searchRow, children: items6 };
    const obj11 = { style: tmp.searchField, children: tmp14 };
    items6 = [memo(ref, obj11), ];
    const obj12 = { text: intl4.string(availableGuilds(onSelectGuild[12]).t.CumH4u), accessibilityLabel: intl5.string(availableGuilds(onSelectGuild[12]).t.xO5QzM), variant: "secondary", size: "lg", onPress: handleCreateGuildTag };
    const Button = tmp6(tmp7[23]).Button;
    intl4 = tmp6(tmp7[12]).intl;
    intl5 = tmp6(tmp7[12]).intl;
    items6[1] = memo(Button, obj12);
    tmp15Result = tmp15(tmp17, obj10);
  }
  const obj13 = { scrollable: true, startExpanded: true, header: memo1(tmp16, obj14), children: memo(BottomSheetFlashList, obj15) };
  obj14 = { children: items5 };
  items5[1] = memo(ref, obj9);
  obj15 = {
    ref,
    maintainVisibleContentPosition: { disabled: true },
    accessibilityRole: "radiogroup",
    accessibilityLabel: intl6.string(availableGuilds(onSelectGuild[12]).t.Fo0g9x),
    keyboardShouldPersistTaps: "handled",
    ListEmptyComponent: memo(Text2, obj16),
    ItemSeparatorComponent() {
      const obj = { iconPush: true, style: divider.divider };
      return metroImportDefault(_mod8177.FormDivider, obj);
    },
    data: memo1,
    contentContainerStyle: { padding: 16 },
    keyExtractor(id) {
      let str = "none-guild-type";
      if (null != id) {
        str = id.id;
      }
      return str;
    },
    renderItem(arg0) {
      let id;
      let index;
      let item;
      let tmp3;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === memo1.length - 1, item, selected: tmp3 === id, onSelectGuild };
      tmp3 = selectedGuildId;
      const tmp = metroImportDefault;
      const tmp2 = closure_11;
      if (selectedGuildId == null) {
        tmp3 = null;
      }
      id = undefined;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      return tmp(tmp2, obj);
    }
  };
  BottomSheetFlashList = tmp6(tmp7[27]).BottomSheetFlashList;
  intl6 = tmp6(tmp7[12]).intl;
  obj16 = { variant: "text-md/normal", color: "text-muted", style: tmp.noResults, children: intl7.formatToPlainString(availableGuilds(onSelectGuild[12]).t.ZGVL3g, { count: 0 }) };
  Text2 = tmp6(tmp7[26]).Text;
  intl7 = tmp6(tmp7[12]).intl;
  return memo(BottomSheet, obj13);
};
