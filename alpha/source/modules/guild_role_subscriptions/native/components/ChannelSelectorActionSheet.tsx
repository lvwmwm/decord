// Module ID: 19908
// Function ID: 19909
// Name: ChannelSelectorActionSheet
// Dependencies: [32, 19, 17, 4858, 7274, 4880, 4941, 4951, 1384, 1072, 21, 5009, 575, 5647, 17163, 5253, 7055, 6969, 1626, 504, 1114, 5267, 7315, 7212, 7288, 11449, 6738, 9017, 1995, 9020, 9025, 5619, 2]
// Exports: default

// Module 19908 (ChannelSelectorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useChannelName from "useChannelName" /* 5647 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9020 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9025 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7274 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
function ChannelRow(channel) {
  let end;
  let guild;
  let selected;
  let start;
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  ({ selected, guild, start, end } = channel);
  let str = onChannelSelected(5647)(channel);
  let obj = channel(17163);
  const items = [onChannelSelected, channel];
  const channelIconComponentOrDefault = obj.getChannelIconComponentOrDefault(channel, guild);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  const obj2 = { value: channel.id, start, end, icon: closure_13(channel(6969).TableRow.Icon, { IconComponent: channelIconComponentOrDefault }), label: str, labelLineClamp: 1, legacyCompat_selected: selected, legacyCompat_onPress: callback };
  const TableRadioRow = channel(7055).TableRadioRow;
  const tmp3 = closure_13;
  if (str == null) {
    str = "";
  }
  return tmp3(TableRadioRow, obj2);
}
let react = react_mod;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, createChannelRow: obj3, emptyState: obj4 };
obj2 = { gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let closure_15 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let BottomSheetFlashList;
  let Icon;
  let TableRow;
  let Text;
  let guild;
  let hideCreateChannel;
  let intl3;
  let intl4;
  let items4;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let onChannelSelected;
  let title;
  let tmp10Result;
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  react = undefined;
  const tmp = closure_15();
  let tmp3 = dependencyMap;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp4 = first(react.useState(""), 2);
  first = tmp4[0];
  let tmp7 = guildId;
  let tmp6 = tmp4[1];
  let obj = guildId(504);
  let items = [GuildStore];
  const items1 = [guildId];
  react = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(504);
  const items2 = [GuildCategoryStore, PermissionStore, UserStore, RelationshipStore];
  const items3 = [guildId, first];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    const categories = GuildCategoryStore.getCategories(guildId);
    const str = first.trim();
    const formatted = str.toLowerCase();
    const iter = categories._categories[Symbol.iterator]();
    const tmp3 = "" === formatted;
    while (iter !== undefined) {
      let tmp4 = categories[iter.next().channel.id];
      for (const item10026 of tmp4) {
        let tmp7 = item10026;
        let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, item10026.channel);
        if (canResult) {
          let hasItem = tmp3;
          if (!hasItem) {
            let obj = useChannelName;
            let str2 = obj.computeChannelName(tmp7.channel, UserStore, RelationshipStore);
            let formatted1 = str2.toLowerCase();
            hasItem = formatted1.includes(formatted);
          }
          canResult = hasItem;
        }
        if (canResult) {
          let arr = items.push(tmp7.channel);
        }
        continue;
      }
      continue;
    }
    return items;
  }, items3);
  if (title == null) {
    const intl = tmp7(1114).intl;
    title = intl.string(tmp7(1114).t.PDn2fR);
  }
  const intl2 = tmp7(1114).intl;
  const stringResult = intl2.string(tmp7(1114).t.UTYBjS);
  const obj3 = { scrollable: true, startExpanded: true, header: closure_14(stateFromStoresArray, obj4), children: closure_13(BottomSheetFlashList, obj5) };
  obj4 = { style: tmp.header, children: items4 };
  BottomSheet = tmp7(5267).BottomSheet;
  items4 = [closure_13(tmp7(7315).BottomSheetTitleHeader, { title }), closure_13(tmp7(7212).SearchBar, { size: "md", placeholder: stringResult, accessibilityLabel: stringResult, onChange: tmp6 })];
  obj5 = {
    maintainVisibleContentPosition: { disabled: true },
    keyboardShouldPersistTaps: "handled",
    accessibilityRole: "radiogroup",
    accessibilityLabel: title,
    contentContainerStyle: obj6,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(arg0) {
      let index;
      let item;
      ({ item, index } = arg0);
      const obj = { channel: item, onChannelSelected: importDefault, selected: item.id === dependencyMap, guild, start: 0 === index, end: index === stateFromStoresArray.length - 1 };
      return map1(ChannelRow, obj);
    },
    ListHeaderComponent: tmp10Result,
    ListEmptyComponent: closure_13(Text, obj10)
  };
  obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: bottom };
  BottomSheetFlashList = tmp7(7288).BottomSheetFlashList;
  tmp10Result = null;
  const tmp11 = stateFromStoresArray;
  if (!hideCreateChannel) {
    const obj7 = { style: tmp.createChannelRow, children: closure_13(TableRow, obj8) };
    obj8 = {
      start: true,
      end: true,
      icon: closure_13(Icon, obj9),
      label: intl3.string(tmp7(1114).t.d7AN7W),
      onPress: function handleCreateChannel() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const pushLazy = ModalActionCreatorsDefault.pushLazy;
          const obj2 = {
            guildId,
            createMode: useCreateChannelSubmit.CreateChannelMode.PREMIUM_CHANNEL,
            onChannelCreated(arg0) {
              const obj = CreateChannelModalActionCreatorsDefault;
              obj.close();
              channel = channel.getChannel(arg0);
              if (null != channel) {
                onChannelSelected(channel);
              }
            }
          };
          ModalActionCreatorsDefault;
          const tmp3 = asyncRequire(9017, dependencyMap.paths);
          pushLazy(tmp3, obj2, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        }
    };
    TableRow = tmp7(6969).TableRow;
    obj9 = { IconComponent: tmp7(11449).PlusMediumIcon };
    Icon = tmp7(6969).TableRow.Icon;
    intl3 = tmp7(1114).intl;
    tmp10Result = tmp10(tmp11, obj7);
  }
  obj10 = { style: tmp.emptyState, variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp7(1114).t.V6nAfF) };
  Text = tmp7(5619).Text;
  intl4 = tmp7(1114).intl;
  return closure_13(BottomSheet, obj3);
};
