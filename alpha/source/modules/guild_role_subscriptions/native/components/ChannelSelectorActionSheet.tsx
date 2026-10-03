// Module ID: 17928
// Function ID: 17929
// Name: ChannelSelectorActionSheet
// Dependencies: [32, 19, 17, 2051, 6606, 4509, 1085, 5072, 21, 4890, 587, 5915, 558, 576, 5043, 4854, 16050, 5974, 17865, 504, 6701, 4886, 1126, 6547, 5909, 5093, 9209, 1987, 9212, 9214, 1188, 13411, 6112, 2]
// Exports: default

// Module 17928 (ChannelSelectorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9212 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9214 */;
import AssetRegistryDefault from "AssetRegistry" /* 13411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let Fonts;
let c9;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
const View = react_native.View;
({ Permissions: c9, Fonts } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleContainer: obj2, searchContainer: obj3, createChannelButton: obj4, createChannelLabel: obj5, bodyContainer: obj6, channelRow: { paddingHorizontal: 8, paddingVertical: 4 }, selectedIcon: { end: 16, top: 10, position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
obj4 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
obj5 = { marginStart: 8 };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_LINK, 16));
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_14 = createStyles(obj);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let obj = channel(576);
  const cResult = obj.c(15);
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  const selected = channel.selected;
  const tmp3 = closure_14();
  const tmp5 = onChannelSelected(5043)(channel);
  if (cResult[0] === channel) {
    let tmp6;
    if (cResult[1] === onChannelSelected) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === channel) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === selected) {
          if (cResult[6] === tmp3.channelRow) {
            let tmp9;
            if (cResult[7] === tmp5) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === selected) {
              let tmp13;
              if (cResult[10] === tmp3.selectedIcon) {
                tmp13 = cResult[11];
              }
              if (cResult[12] === tmp9) {
                let tmp17;
                if (cResult[13] === tmp13) {
                  tmp17 = cResult[14];
                }
                return tmp17;
              }
              const obj2 = { children: items };
              items = [tmp9, tmp13];
              const tmp20 = closure_13(closure_12, obj2);
              cResult[12] = tmp9;
              cResult[13] = tmp13;
              cResult[14] = tmp20;
              tmp17 = tmp20;
            }
            let tmp14 = selected;
            if (tmp14) {
              const obj3 = { style: tmp3.selectedIcon, source: onChannelSelected(17865) };
              const tmp4Result = onChannelSelected(5974);
              tmp14 = closure_11(tmp4Result, obj3);
            }
            cResult[9] = selected;
            cResult[10] = tmp3.selectedIcon;
            cResult[11] = tmp14;
            tmp13 = tmp14;
          }
        }
      }
    }
    const obj4 = { style: tmp3.channelRow, onPress: tmp6, accessible: true, accessibilityLabel: tmp5, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
    const tmp12 = closure_11(onChannelSelected(16050), obj4);
    cResult[3] = channel;
    cResult[4] = tmp6;
    cResult[5] = selected;
    cResult[6] = tmp3.channelRow;
    cResult[7] = tmp5;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const fn = function t() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  };
  cResult[0] = channel;
  cResult[1] = onChannelSelected;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = closure_14();
  const items = [onChannelSelected, channel];
  const tmp4 = onChannelSelected(5043)(channel);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: tmp4, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const tmp9 = onChannelSelected(16050);
  const children = [closure_11(tmp9, obj), ];
  const tmp6 = closure_13;
  const tmp7 = closure_12;
  if (selected) {
    const obj2 = { style: tmp.selectedIcon, source: onChannelSelected(17865) };
    const tmp2Result = onChannelSelected(5974);
    selected = tmp8(tmp2Result, obj2);
  }
  children[1] = selected;
  return tmp6(tmp7, { children });
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let SearchField;
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
        let canResult = PermissionStore.can(constants.VIEW_CHANNEL, item10020.channel);
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
  let obj2 = { scrollable: true, ref, header: closure_13(tmp11, { children: items2 }), children: tmp9(tmp6(6112).BottomSheetFlatList, obj9) };
  let tmp12 = View;
  const obj3 = { style: tmp.titleContainer, children: tmp9(Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title }) };
  const ActionSheet = guildId(6701).ActionSheet;
  tmp11 = closure_12;
  Text = guildId(4886).Text;
  if (title == null) {
    const intl = tmp6(1126).intl;
    title = intl.string(tmp6(1126).t.PDn2fR);
  }
  items2 = [tmp9(tmp12, obj3), , ];
  const obj4 = { style: tmp.searchContainer, children: tmp9(SearchField, obj5) };
  obj5 = {
    size: "md",
    placeholder: intl2.string(tmp6(1126).t.UTYBjS),
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
  SearchField = tmp6(6547).SearchField;
  intl2 = tmp6(1126).intl;
  items2[1] = tmp9(tmp12, obj4);
  let tmp10Result = !hideCreateChannel;
  if (tmp10Result) {
    const obj6 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
      onPress() {
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
          const tmp3 = asyncRequire(9209, dependencyMap.paths);
          pushLazy(tmp3, obj2, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        },
      children: items3
    };
    const PressableOpacity = tmp6(5909).PressableOpacity;
    let str1;
    const Icon = tmp6(1188).Icon;
    if (tmp.createChannelLabel.color != null) {
      str1 = str.toString();
    }
    const obj7 = { color: str1, source: AssetRegistryDefault };
    items3 = [tmp9(Icon, obj7), ];
    const obj8 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: intl3.string(tmp6(1126).t.d7AN7W) };
    const Text2 = tmp6(4886).Text;
    intl3 = tmp6(1126).intl;
    items3[1] = tmp9(Text2, obj8);
    tmp10Result = tmp10(PressableOpacity, obj6);
  }
  items2[2] = tmp10Result;
  obj9 = {
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
