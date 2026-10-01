// Module ID: 15738
// Function ID: 15739
// Name: RedesignCategory
// Dependencies: [19, 17, 6951, 6538, 5017, 9577, 21, 4836, 1364, 576, 4832, 12269, 5435, 10615, 11053, 10374, 504, 4989, 10438, 15739, 15740, 6534, 1115, 6616, 11054, 6034, 2]
// Exports: CategoryChannel, RecentlyActiveCategory, SuggestedCategory, useCategoryPressEvents

// Module 15738 (RedesignCategory)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import CircleXIcon from "CircleXIcon" /* 6034 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6534 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6616 */;
import useFavoritesGuildCategoryAddActionDefault from "useFavoritesGuildCategoryAddAction" /* 10438 */;
import useFavoritesGuildCategoryFullNoticeDefault from "useFavoritesGuildCategoryFullNotice" /* 15739 */;
import useFavoritesGuildCategoryLongPressDefault from "useFavoritesGuildCategoryLongPress" /* 15740 */;
import react from "react" /* 19 */;
import RecentlyActiveCollapseStore from "RecentlyActiveCollapseStore" /* 6951 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6538 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let items;
let map1;
let metroImportAll;
let unpackModuleId;
function renderCategoryItem(muted) {
  let PressableOpacity;
  let accessibilityState;
  let handleAccessibilityAction;
  let icon;
  let label;
  let note;
  let noteAlignment;
  let obj5;
  let obj6;
  let onLongPress;
  let onPress;
  let tmp26Result;
  let tmp31;
  let trailingAction;
  let withMarginTop;
  ({ name, icon, note, noteAlignment } = muted);
  if (noteAlignment === undefined) {
    noteAlignment = "inline";
  }
  let flag = muted.muted;
  if (flag === undefined) {
    flag = false;
  }
  ({ onPress, onLongPress, styles, trailingAction } = muted);
  const longPressAction = muted.longPressAction;
  let tmp = null != onPress;
  ({ withMarginTop, accessibilityState } = muted);
  if (!tmp) {
    tmp = null != onLongPress;
  }
  const items = [styles.categoryWrapper, ];
  let num = 0;
  if (withMarginTop) {
    num = closure_9;
  }
  let obj = { paddingLeft: 16, marginTop: num, marginBottom };
  items[1] = obj;
  let tmp32Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    const Text = trailingAction(4832).Text;
    const tmp32 = closure_11;
    if (flag) {
      str = "text-muted";
    }
    obj2 = { experimental_useNativeText: true, variant: "text-sm/semibold", color: str, lineClamp: 1, style: styles.categoryText, children: name };
    tmp32Result = tmp32(Text, obj2);
  }
  let tmp3 = null;
  if (null != icon) {
    obj3 = { style: styles.iconWrapperStyles, children: icon };
    tmp3 = closure_11(View, obj3);
  }
  let Icon;
  if (trailingAction != null) {
    Icon = trailingAction.Icon;
  }
  if (Icon == null) {
    Icon = trailingAction(12269).PlusMediumIcon;
  }
  let tmp10Result = null;
  if (null != trailingAction) {
    const obj4 = { style: styles.endAlignedWrapper, children: closure_11(PressableOpacity, obj5) };
    obj5 = { accessible: !tmp, accessibilityRole: "button", accessibilityLabel: label, onPress: trailingAction.perform, hitSlop, androidRippleConfig, children: closure_11(Icon, obj6) };
    PressableOpacity = trailingAction(5435).PressableOpacity;
    label = undefined;
    const tmp11 = View;
    if (!tmp) {
      label = trailingAction.label;
    }
    const colors = longPressAction(576).colors;
    obj6 = { size: "xxs", color: flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE };
    tmp10Result = tmp10(tmp11, obj4);
  }
  const items1 = [tmp32Result, , , ];
  let tmp20 = null;
  const tmp18 = closure_13;
  const tmp19 = closure_12;
  if (null != note) {
    const obj7 = { style: "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper, children: note };
    tmp20 = closure_11(View, obj7);
  }
  items1[1] = tmp20;
  items1[2] = tmp3;
  items1[3] = tmp10Result;
  const tmp18Result = tmp18(tmp19, { children: items1 });
  const items2 = [];
  if (null != trailingAction) {
    const obj8 = { name, label: trailingAction.label };
    items2.push(obj8);
  }
  if (null != longPressAction) {
    const obj9 = { name: name2, label: longPressAction.label };
    items2.push(obj9);
  }
  if (tmp) {
    const obj10 = { accessibilityRole: "header", accessibilityState, accessibilityActions: tmp31, onAccessibilityAction: handleAccessibilityAction, onPress, onLongPress, style: items, children: tmp18Result };
    tmp31 = undefined;
    const PressableHighlight = trailingAction(5435).PressableHighlight;
    if (items2.length > 0) {
      tmp31 = items2;
    }
    handleAccessibilityAction = undefined;
    if (items2.length > 0) {
      handleAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if (c17 === actionName) {
          obj2 = trailingAction;
          if (trailingAction != null) {
            obj2.perform();
          }
        } else if (c18 === actionName) {
          const obj = longPressAction;
          if (longPressAction != null) {
            obj.perform();
          }
        }
      };
    }
    tmp26Result = tmp26(PressableHighlight, obj10);
  } else {
    const obj11 = { accessibilityRole: "header", style: items, children: tmp18Result };
    tmp26Result = tmp26(View, obj11);
  }
  return tmp26Result;
}
const View = react_native.View;
({ CATEGORY_MARGIN_BOTTOM: metroImportAll, CATEGORY_MARGIN_TOP: c9, CATEGORY_VERTICAL_PADDING: c10 } = RedesignChannelListConstants);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
const styles = createStyles.createStyles(() => {
  let num;
  const obj = { categoryWrapper: obj2, categoryText: { flexShrink: 1, marginTop: num }, noteWrapper: { marginLeft: 4 }, iconWrapperStyles: { marginLeft: 4 }, endAlignedWrapper: { paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" } };
  num = 0;
  obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 };
  obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num = -1;
  }
  ({ paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" });
  return obj;
});
const hitSlop = { top: 16, bottom: 16, left: 16, right: 16 };
const androidRippleConfig = { borderless: true, radius: 16 };
let c17 = "add-to-category";
let c18 = "category-actions";
let obj = { flexShrink: 0, flexGrow: 0 };
let obj2 = { transform: items };
let merged = Object.assign(obj);
items = [{ rotate: "-90deg" }];
let obj3 = {};
let merged1 = Object.assign(obj);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export const useCategoryPressEvents = function useCategoryPressEvents(arg0, arg1) {
  let items;
  let items1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = {
    onPress: react.useCallback(() => {
      const obj = channel(dependencyMap[14]);
      if (collapsed) {
        obj.categoryExpand(id);
      } else {
        obj.categoryCollapse(id);
      }
    }, items),
    onLongPress: react.useCallback(() => {
      const obj = channel(dependencyMap[15]);
      return obj.openChannelLongPressActionSheet(id);
    }, items1)
  };
  items = [arg0, arg1];
  items1 = [arg0];
  return obj;
};
export const CategoryChannel = function CategoryChannel(channel) {
  let perform;
  let tmp13;
  let tmp16;
  let tmp17;
  channel = channel.channel;
  const withMarginTop = channel.withMarginTop;
  const tmp = styles();
  let obj = channel(504);
  const items = [CategoryCollapseStore, UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { collapsed: CategoryCollapseStore.isCollapsed(channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id) };
    return obj;
  });
  const collapsed = stateFromStoresObject.collapsed;
  const id = channel.id;
  const items1 = [id, collapsed];
  const muted = stateFromStoresObject.muted;
  const items2 = [id];
  const callback = react.useCallback(() => {
    const obj = channel(dependencyMap[14]);
    if (collapsed) {
      obj.categoryExpand(id);
    } else {
      obj.categoryCollapse(id);
    }
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = channel(dependencyMap[15]);
    return obj.openChannelLongPressActionSheet(id);
  }, items2);
  const tmp8 = useChannelNameDefault(channel);
  const tmp9 = useFavoritesGuildCategoryAddActionDefault(channel);
  const tmp10 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp8);
  const tmp11 = useFavoritesGuildCategoryLongPressDefault(channel);
  obj2 = { name: tmp8, muted, collapsed, onPress: callback, onLongPress: perform, withMarginTop, styles: tmp, note: tmp13, trailingAction: tmp9, longPressAction: tmp11 };
  perform = undefined;
  if (tmp11 != null) {
    perform = tmp11.perform;
  }
  if (perform == null) {
    perform = callback1;
  }
  tmp13 = null;
  if (null != tmp10) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp10);
    tmp13 = closure_11(tmp2(4832).Text, obj4);
  }
  const collapsed2 = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const muted2 = merged.muted;
  const colors = nativeDefault.colors;
  const obj7 = { icon: closure_11(channel(10615).ChevronSmallDownIcon, { size: "xxs", color: tmp16, style: tmp17 }), accessibilityState: { expanded: !collapsed2 } };
  tmp16 = muted2 ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  tmp17 = collapsed2 ? obj2 : obj3;
  const merged1 = Object.assign(merged);
  return renderCategoryItem(obj7);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  let callback;
  let intl;
  let tmp7;
  let tmp8;
  guildId = guildId.guildId;
  const withMarginTop = guildId.withMarginTop;
  const tmp = styles();
  let obj = guildId(504);
  const items = [RecentlyActiveCollapseStore];
  const stateFromStores = obj.useStateFromStores(items, () => RecentlyActiveCollapseStore.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj2 = { name: intl.string(guildId(1115).t.uZyspD), collapsed: stateFromStores, onPress: callback, withMarginTop, styles: tmp };
  callback = react.useCallback(() => {
    const obj = OptInChannelsActionCreators;
    return obj.setRecentlyActiveCollapsed(guildId, !stateFromStores);
  }, items1);
  intl = guildId(1115).intl;
  const collapsed = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const muted = merged.muted;
  const colors = stateFromStores(576).colors;
  obj3 = { icon: closure_11(guildId(10615).ChevronSmallDownIcon, { size: "xxs", color: tmp7, style: tmp8 }), accessibilityState: { expanded: !collapsed } };
  tmp7 = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  tmp8 = collapsed ? obj2 : obj3;
  const merged1 = Object.assign(merged);
  return renderCategoryItem(obj3);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const withMarginTop = guildId.withMarginTop;
  let items = [guildId, channelIds];
  const tmp = styles();
  let obj = { name: intl.string(guildId(1115).t.HbJ7eD), onPress: callback, withMarginTop, styles: tmp };
  callback = react.useCallback(() => {
    let intl;
    let items;
    let obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: items, hasIcons: true };
    obj2 = {
      label: intl.string(intl2.t.VkKicb),
      onPress() {
        const obj = guildId(dependencyMap[24]);
        obj.clearRecentChannels(closure_1_0, channelIds);
      },
      IconComponent: CircleXIcon.CircleXIcon
    };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    intl = intl2.intl;
    items = [obj2];
    const result = showSimpleActionSheet(obj);
  }, items);
  intl = guildId(1115).intl;
  return renderCategoryItem(obj);
};
