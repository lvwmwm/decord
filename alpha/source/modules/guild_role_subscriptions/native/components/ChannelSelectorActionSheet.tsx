// Module ID: 19845
// Function ID: 19846
// Name: ChannelSelectorActionSheet
// Dependencies: [32, 19, 17, 4857, 7267, 4879, 4937, 4947, 1389, 1084, 21, 5005, 587, 558, 576, 5641, 17109, 5247, 6963, 7044, 1631, 504, 1125, 5302, 7308, 7205, 7280, 11244, 6731, 8987, 2000, 9007, 9012, 5271, 2]
// Exports: default

// Module 19845 (ChannelSelectorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import useChannelName from "useChannelName" /* 5641 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9007 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9012 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7267 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, hideActionSheetResult, tmp2;

let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
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
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  let end;
  let guild;
  let selected;
  let start;
  let obj = channel(576);
  const cResult = obj.c(16);
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  ({ selected, guild, start, end } = channel);
  const tmp4 = onChannelSelected(5641)(channel);
  if (cResult[0] === channel) {
    let tmp5;
    if (cResult[1] === guild) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === channel) {
      let tmp7;
      let tmp8;
      if (cResult[4] === onChannelSelected) {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp5) {
        const obj2 = { IconComponent: null };
        class S {
          constructor() {
            obj = closure_1(closure_2[17]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = onChannelSelected(channel);
            return;
          }
        }
        const tmp10 = closure_13(channel(6963).TableRow.Icon, obj2);
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[7];
      }
      class S {
        constructor() {
          obj = closure_1(closure_2[17]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = onChannelSelected(channel);
          return;
        }
      }
      let str = tmp4;
      if (tmp4 == null) {
        str = "";
      }
      if (cResult[8] === channel.id) {
        if (cResult[9] === end) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === selected) {
              if (cResult[12] === start) {
                if (cResult[13] === tmp8) {
                  let tmp11;
                  if (cResult[14] === str) {
                    tmp11 = cResult[15];
                  }
                  return tmp11;
                }
              }
            }
          }
        }
      }
      const obj3 = { value: channel.id, start, end, icon: tmp8, label: str, labelLineClamp: 1, legacyCompat_selected: selected, legacyCompat_onPress: tmp7 };
      const tmp13 = closure_13(channel(7044).TableRadioRow, obj3);
      cResult[8] = channel.id;
      cResult[9] = end;
      cResult[10] = tmp7;
      cResult[11] = selected;
      cResult[12] = start;
      cResult[13] = tmp8;
      cResult[14] = str;
      cResult[15] = tmp13;
      tmp11 = tmp13;
    }
    class S {
      constructor() {
        obj = closure_1(closure_2[17]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onChannelSelected(channel);
        return;
      }
    }
    cResult[3] = channel;
    cResult[4] = onChannelSelected;
    cResult[5] = S;
    tmp7 = S;
  }
  const tmpResult = channel(17109);
  const channelIconComponentOrDefault = tmpResult.getChannelIconComponentOrDefault(channel, guild);
  cResult[0] = channel;
  cResult[1] = guild;
  cResult[2] = channelIconComponentOrDefault;
  tmp5 = channelIconComponentOrDefault;
}) : (function ChannelRow(channel) {
  let end;
  let guild;
  let selected;
  let start;
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  ({ selected, guild, start, end } = channel);
  let str = onChannelSelected(5641)(channel);
  let obj = channel(17109);
  const items = [onChannelSelected, channel];
  const channelIconComponentOrDefault = obj.getChannelIconComponentOrDefault(channel, guild);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  const obj2 = { value: channel.id, start, end, icon: closure_13(channel(6963).TableRow.Icon, { IconComponent: channelIconComponentOrDefault }), label: str, labelLineClamp: 1, legacyCompat_selected: selected, legacyCompat_onPress: callback };
  const TableRadioRow = channel(7044).TableRadioRow;
  const tmp3 = closure_13;
  if (str == null) {
    str = "";
  }
  return tmp3(TableRadioRow, obj2);
});
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
    const intl = tmp7(1125).intl;
    title = intl.string(tmp7(1125).t.PDn2fR);
  }
  const intl2 = tmp7(1125).intl;
  const stringResult = intl2.string(tmp7(1125).t.UTYBjS);
  const obj3 = { scrollable: true, startExpanded: true, header: closure_14(stateFromStoresArray, obj4), children: closure_13(BottomSheetFlashList, obj5) };
  obj4 = { style: tmp.header, children: items4 };
  BottomSheet = tmp7(5302).BottomSheet;
  items4 = [closure_13(tmp7(7308).BottomSheetTitleHeader, { title }), closure_13(tmp7(7205).SearchBar, { size: "md", placeholder: stringResult, accessibilityLabel: stringResult, onChange: tmp6 })];
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
      return map1(closure_16, obj);
    },
    ListHeaderComponent: tmp10Result,
    ListEmptyComponent: closure_13(Text, obj10)
  };
  obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: bottom };
  BottomSheetFlashList = tmp7(7280).BottomSheetFlashList;
  tmp10Result = null;
  const tmp11 = stateFromStoresArray;
  if (!hideCreateChannel) {
    const obj7 = { style: tmp.createChannelRow, children: closure_13(TableRow, obj8) };
    obj8 = {
      start: true,
      end: true,
      icon: closure_13(Icon, obj9),
      label: intl3.string(tmp7(1125).t.d7AN7W),
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
          const tmp3 = asyncRequire(8987, dependencyMap.paths);
          pushLazy(tmp3, obj2, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        }
    };
    TableRow = tmp7(6963).TableRow;
    obj9 = { IconComponent: tmp7(11244).PlusMediumIcon };
    Icon = tmp7(6963).TableRow.Icon;
    intl3 = tmp7(1125).intl;
    tmp10Result = tmp10(tmp11, obj7);
  }
  obj10 = { style: tmp.emptyState, variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp7(1125).t.V6nAfF) };
  Text = tmp7(5271).Text;
  intl4 = tmp7(1125).intl;
  return closure_13(BottomSheet, obj3);
};
