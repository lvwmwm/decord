// Module ID: 19612
// Function ID: 19613
// Name: ChannelSelectorActionSheet
// Dependencies: [32, 19, 17, 4856, 7243, 4936, 1084, 6740, 21, 5004, 587, 558, 576, 5640, 5246, 17831, 7303, 504, 7334, 5270, 1125, 7181, 6944, 6707, 8984, 1999, 9004, 9009, 9500, 7256, 2]
// Exports: default

// Module 19612 (ChannelSelectorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import ReadStateConstants from "ReadStateConstants" /* 6740 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9004 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9009 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7243 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
const View = react_native.View;
const Permissions = Constants.Permissions;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleContainer: obj2, searchContainer: obj3, createChannelButton: obj4, createChannelLabel: { marginStart: 8 }, bodyContainer: obj5, channelRow: { paddingHorizontal: 8, paddingVertical: 4 }, selectedIcon: { end: 16, top: 10, position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
obj4 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_14 = createStyles(obj);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  let CircleCheckIcon;
  let items;
  let obj4;
  let obj = channel(576);
  const cResult = obj.c(15);
  const tmp = channel;
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  const selected = channel.selected;
  const tmp4 = closure_14();
  const tmp6 = onChannelSelected(5640)(channel);
  if (cResult[0] === channel) {
    let tmp7;
    if (cResult[1] === onChannelSelected) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === channel) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === selected) {
          if (cResult[6] === tmp4.channelRow) {
            let tmp10;
            if (cResult[7] === tmp6) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === selected) {
              let tmp14;
              if (cResult[10] === tmp4.selectedIcon) {
                tmp14 = cResult[11];
              }
              if (cResult[12] === tmp10) {
                let tmp18;
                if (cResult[13] === tmp14) {
                  tmp18 = cResult[14];
                }
                return tmp18;
              }
              const obj2 = { children: items };
              items = [tmp10, tmp14];
              const tmp21 = closure_13(closure_12, obj2);
              cResult[12] = tmp10;
              cResult[13] = tmp14;
              cResult[14] = tmp21;
              tmp18 = tmp21;
            }
            let tmp15 = selected;
            if (tmp15) {
              const obj3 = { style: tmp4.selectedIcon, children: closure_11(CircleCheckIcon, obj4) };
              obj4 = { size: "md", color: onChannelSelected(587).colors.ICON_BRAND, secondaryColor: onChannelSelected(587).colors.WHITE };
              CircleCheckIcon = tmp(7303).CircleCheckIcon;
              tmp15 = closure_11(View, obj3);
            }
            cResult[9] = selected;
            cResult[10] = tmp4.selectedIcon;
            cResult[11] = tmp15;
            tmp14 = tmp15;
          }
        }
      }
    }
    const obj5 = { style: tmp4.channelRow, onPress: tmp7, accessible: true, accessibilityLabel: tmp6, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
    const tmp13 = closure_11(onChannelSelected(17831), obj5);
    cResult[3] = channel;
    cResult[4] = tmp7;
    cResult[5] = selected;
    cResult[6] = tmp4.channelRow;
    cResult[7] = tmp6;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const fn = function t() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  };
  cResult[0] = channel;
  cResult[1] = onChannelSelected;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function ChannelRow(channel) {
  let CircleCheckIcon;
  let obj3;
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = closure_14();
  const items = [onChannelSelected, channel];
  const tmp4 = onChannelSelected(5640)(channel);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: tmp4, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const tmp9 = onChannelSelected(17831);
  const children = [closure_11(tmp9, obj), ];
  const tmp6 = closure_13;
  const tmp7 = closure_12;
  if (selected) {
    const obj2 = { style: tmp.selectedIcon, children: closure_11(CircleCheckIcon, obj3) };
    obj3 = { size: "md", color: onChannelSelected(587).colors.ICON_BRAND, secondaryColor: onChannelSelected(587).colors.WHITE };
    CircleCheckIcon = channel(7303).CircleCheckIcon;
    selected = tmp8(View, obj2);
  }
  children[1] = selected;
  return tmp6(tmp7, { children });
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let SearchBar;
  let Text;
  let hideCreateChannel;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj5;
  let obj9;
  let onChannelSelected;
  let title;
  let tmp11;
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  let ref;
  const tmp = closure_14();
  let tmp2 = first(ref.useState(""), 2);
  first = tmp2[0];
  let tmp4 = tmp2[1];
  ref = ref.useRef(null);
  let tmp6 = guildId;
  let tmp7 = dependencyMap;
  let obj = guildId(504);
  let items = [GuildCategoryStore, PermissionStore];
  const items1 = [guildId, first];
  const tmp9 = closure_11;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const categories = GuildCategoryStore.getCategories(guildId);
    const iter = categories._categories[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = categories[iter.next().channel.id];
      for (const item10020 of tmp2) {
        let tmp5 = item10020;
        let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, item10020.channel);
        if (canResult) {
          let hasItem = "" === first;
          if (!hasItem) {
            let name = tmp5.channel.name;
            hasItem = name.includes(tmp9);
          }
          canResult = hasItem;
        }
        if (canResult) {
          let arr = items.push(tmp5.channel);
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  let obj2 = { scrollable: true, ref, header: closure_13(tmp11, { children: items2 }), children: tmp9(tmp6(7256).BottomSheetFlashList, obj9) };
  let tmp12 = View;
  const obj3 = { style: tmp.titleContainer, children: tmp9(Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title }) };
  const ActionSheet = guildId(7334).ActionSheet;
  tmp11 = closure_12;
  Text = guildId(5270).Text;
  if (title == null) {
    const intl = tmp6(1125).intl;
    title = intl.string(tmp6(1125).t.PDn2fR);
  }
  items2 = [tmp9(tmp12, obj3), , ];
  const obj4 = { style: tmp.searchContainer, children: tmp9(SearchBar, obj5) };
  obj5 = {
    size: "md",
    placeholder: intl2.string(tmp6(1125).t.UTYBjS),
    onChange: tmp4,
    onFocus() {
      const current = ref.current;
      let expandActionSheetResult;
      if (current != null) {
        expandActionSheetResult = current.expandActionSheet();
      }
      return expandActionSheetResult;
    }
  };
  SearchBar = tmp6(7181).SearchBar;
  intl2 = tmp6(1125).intl;
  items2[1] = tmp9(tmp12, obj4);
  let tmp10Result = !hideCreateChannel;
  if (tmp10Result) {
    const obj6 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
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
          const tmp3 = asyncRequire(8984, dependencyMap.paths);
          pushLazy(tmp3, obj2, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        },
      children: items3
    };
    const PressableOpacity = tmp6(6944).PressableOpacity;
    const obj7 = { size: "md", color: nativeDefault.colors.TEXT_LINK };
    const PlusSmallIcon = tmp6(9500).PlusSmallIcon;
    items3 = [tmp9(PlusSmallIcon, obj7), ];
    const obj8 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: intl3.string(tmp6(1125).t.d7AN7W) };
    const Text2 = tmp6(5270).Text;
    intl3 = tmp6(1125).intl;
    items3[1] = tmp9(Text2, obj8);
    tmp10Result = tmp10(PressableOpacity, obj6);
  }
  items2[2] = tmp10Result;
  obj9 = {
    maintainVisibleContentPosition: { disabled: true },
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      const obj = { channel: item, onChannelSelected: importDefault, selected: item.id === dependencyMap };
      return unpackModuleId(closure_15, obj);
    }
  };
  return tmp9(ActionSheet, obj2);
};
