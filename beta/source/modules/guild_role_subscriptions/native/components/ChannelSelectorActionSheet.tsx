// Module ID: 18219
// Function ID: 18220
// Name: ChannelSelectorActionSheet
// Dependencies: [32, 19, 17, 2041, 7388, 4427, 1074, 4970, 21, 4788, 576, 5773, 4941, 4755, 16458, 5836, 18156, 504, 7474, 4784, 1115, 7327, 5371, 4991, 9849, 1980, 9852, 9854, 1177, 13899, 6901, 2]
// Exports: default

// Module 18219 (ChannelSelectorActionSheet)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9852 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9854 */;
import _modDef13899 from "module_13899" /* 13899 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7388 */;
import PermissionStore from "PermissionStore" /* 4427 */;
import TextStyles from "TextStyles" /* 5773 */;

require = fn;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = closure_14();
  const tmp4 = onChannelSelected(4941)(channel);
  const items = [onChannelSelected, channel];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  const obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: tmp4, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const children = [closure_11(onChannelSelected(16458), obj), ];
  if (selected) {
    const obj2 = { style: tmp.selectedIcon, source: tmp2(18156) };
    selected = tmp8(tmp2(5836), obj2);
    const tmp2Result = tmp2(5836);
  }
  children[1] = selected;
  return closure_13(closure_12, { children });
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: closure_9, Fonts } = Constants);
const UnreadSetting = fn(4970).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { titleContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" }, searchContainer: null, createChannelButton: null, createChannelLabel: null, bodyContainer: null, channelRow: null, selectedIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
obj2.searchContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
obj2.createChannelButton = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
let obj6 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_LINK, 16));
obj6.marginStart = 8;
obj2.createChannelLabel = obj6;
let obj5 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
obj2.bodyContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.channelRow = { paddingHorizontal: 8, paddingVertical: 4 };
obj2.selectedIcon = { end: 16, top: 10, position: "absolute" };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
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
  ref = ref.useRef(null);
  let items = [GuildCategoryStore, PermissionStore];
  const items1 = [guildId, first];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(items, () => {
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
  let obj2 = { scrollable: true, ref, header: null, children: null };
  let obj3 = { style: tmp.titleContainer, children: null };
  if (title == null) {
    const intl = tmp5(1115).intl;
    title = intl.string(tmp5(1115).t.PDn2fR);
  }
  obj3.children = closure_11(guildId(4784).Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title });
  const items2 = [closure_11(View, obj3), , ];
  const obj4 = { style: tmp.searchContainer, children: null };
  const obj5 = { size: "md", placeholder: null, onChange: null, onFocus: null };
  const intl2 = tmp5(1115).intl;
  obj5.placeholder = intl2.string(guildId(1115).t.UTYBjS);
  obj5.onChange = tmp2[1];
  obj5.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (current != null) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj4.children = closure_11(guildId(7327).SearchField, obj5);
  items2[1] = closure_11(View, obj4);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj6 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj3 = { guildId, createMode: null, onChannelCreated: null };
          const obj2 = ModalActionCreatorsDefault;
          obj3.createMode = useCreateChannelSubmit.CreateChannelMode.PREMIUM_CHANNEL;
          obj3.onChannelCreated = function onChannelCreated(arg0) {
            onChannelSelected(dependencyMap[27]).close();
            channel = channel.getChannel(arg0);
            if (null != channel) {
              closure_1_1(channel);
            }
          };
          obj2.pushLazy(asyncRequireImpl(9849, dependencyMap.paths), obj3, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        },
      children: null
    };
    let str1;
    if (tmp.createChannelLabel.color != null) {
      str1 = str.toString();
    }
    const obj7 = { color: str1, source: _modDef13899 };
    const items3 = [tmp8(tmp5(1177).Icon, obj7), ];
    const obj8 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: null };
    const intl3 = tmp5(1115).intl;
    obj8.children = intl3.string(tmp5(1115).t.d7AN7W);
    items3[1] = tmp8(tmp5(4784).Text, obj8);
    obj6.children = items3;
    tmp9Result = tmp9(tmp5(5371).PressableOpacity, obj6);
  }
  items2[2] = tmp9Result;
  obj2.header = closure_13(closure_12, { children: items2 });
  obj2.children = closure_11(guildId(6901).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_2_11(ChannelRow, { channel: item, onChannelSelected, selected: item.id === dependencyMap });
    }
  });
  return closure_11(guildId(7474).ActionSheet, obj2);
};
