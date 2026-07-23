// Module ID: 14965
// Function ID: 114059
// Name: renderCategoryItem
// Dependencies: [31, 27, 6763, 5076, 4325, 10260, 33, 4130, 477, 4126, 4660, 689, 8525, 9979, 9099, 1324, 566, 4320, 5072, 1212, 5498, 9980, 5776, 2]
// Exports: CategoryChannel, RecentlyActiveCategory, SuggestedCategory

// Module 14965 (renderCategoryItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import hairlineWidth from "hairlineWidth";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function renderCategoryItem(arg0) {
  let accessibilityState;
  let icon;
  let isRefreshEnabled;
  let muted;
  let name;
  let note;
  let onLongPress;
  let onPress;
  let styles;
  let withMarginTop;
  ({ name, icon, note, muted } = arg0);
  if (muted === undefined) {
    muted = false;
  }
  ({ onPress, onLongPress, styles, isRefreshEnabled } = arg0);
  const items = [styles.categoryWrapper, ];
  let obj = {};
  let num = 16;
  let num2 = 16;
  ({ withMarginTop, accessibilityState } = arg0);
  if (!isRefreshEnabled) {
    if (null != icon) {
      num = 3;
    }
    num2 = num;
  }
  obj.paddingLeft = num2;
  let num3 = 0;
  if (withMarginTop) {
    num3 = closure_9;
  }
  obj.marginTop = num3;
  obj.marginBottom = closure_8;
  items[1] = obj;
  let tmp3Result = name;
  if ("string" === typeof name) {
    obj = { experimental_useNativeText: true, variant: "text-sm/semibold", color: null, lineClamp: 1 };
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj.color = str;
    obj.style = styles.categoryText;
    obj.children = name;
    tmp3Result = callback(require(4126) /* Text */.Text, obj);
    const tmp3 = callback;
  }
  let tmp6 = null;
  if (null != icon) {
    obj = { style: styles.iconWrapperStyles, children: icon };
    tmp6 = callback(View, obj);
  }
  const obj1 = {};
  const items1 = [, , ];
  if (isRefreshEnabled) {
    items1[0] = tmp3Result;
    let tmp12 = null;
    if (null != note) {
      const obj2 = { style: styles.noteWrapper, children: note };
      tmp12 = callback(View, obj2);
    }
    items1[1] = tmp12;
    items1[2] = tmp6;
    obj1.children = items1;
    let tmp11 = obj1;
  } else {
    items1[0] = tmp6;
    items1[1] = tmp3Result;
    items1[2] = note;
    obj1.children = items1;
    tmp11 = obj1;
  }
  const tmp9Result = closure_13(closure_12, tmp11);
  if (null == onPress) {
    if (null == onLongPress) {
      const obj3 = { accessibilityRole: "header", style: items, children: tmp9Result };
      let tmp18 = callback(View, obj3);
    }
    return tmp18;
  }
  tmp18 = callback(require(4660) /* PressableBase */.PressableHighlight, { accessibilityRole: "header", accessibilityState, onPress, onLongPress, style: items, children: tmp9Result });
}
function renderCollapsibleCategoryItem(collapsed) {
  collapsed = collapsed.collapsed;
  let obj = Object.create(null);
  obj.collapsed = 0;
  obj.isRefreshEnabled = 0;
  const merged = Object.assign(collapsed, obj);
  const colors = importDefault(689).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["icon"] = callback(require(8525) /* ChevronSmallDownIcon */.ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? _createForOfIteratorHelperLoose : obj1 });
  obj = { expanded: !collapsed };
  obj["accessibilityState"] = obj;
  obj["isRefreshEnabled"] = collapsed.isRefreshEnabled;
  return renderCategoryItem(obj);
}
function useCategoryPressEvents(id, collapsed) {
  let closure_0 = id;
  let closure_1 = collapsed;
  const items = [id, collapsed];
  const items1 = [id];
  return {
    onPress: React.useCallback(() => {
      const obj = id(outer1_2[13]);
      if (closure_1) {
        obj.categoryExpand(id);
      } else {
        obj.categoryCollapse(id);
      }
    }, items),
    onLongPress: React.useCallback(() => id(outer1_2[14]).openChannelLongPressActionSheet(id), items1)
  };
}
({ CATEGORY_MARGIN_BOTTOM: closure_8, CATEGORY_MARGIN_TOP: closure_9, CATEGORY_VERTICAL_PADDING: closure_10 } = hairlineWidth);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
const styles = _createForOfIteratorHelperLoose.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  obj = { categoryWrapper: obj };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: closure_10, paddingRight: 16 };
  obj = {};
  const obj1 = {};
  if (flag) {
    obj1.flexShrink = 1;
    let tmp = obj1;
  } else {
    obj1.flex = 1;
    tmp = obj1;
  }
  const merged = Object.assign(tmp);
  let num = 0;
  if (obj5.isAndroid()) {
    num = -1;
  }
  obj["marginTop"] = num;
  obj.categoryText = obj;
  obj.noteWrapper = { marginLeft: 4 };
  const obj3 = {};
  if (flag) {
    obj3.marginLeft = 4;
    let tmp3 = obj3;
  } else {
    obj3.marginRight = 3;
    tmp3 = obj3;
  }
  const merged1 = Object.assign(tmp3);
  obj.iconWrapperStyles = {};
  return obj;
});
_createForOfIteratorHelperLoose = { flexShrink: 0, flexGrow: 0 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = Object.assign(_createForOfIteratorHelperLoose);
let items = [{ rotate: "-90deg" }];
_createForOfIteratorHelperLoose["transform"] = items;
let obj1 = {};
_createForOfIteratorHelperLoose = Object.assign(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export { useCategoryPressEvents };
export const CategoryChannel = function CategoryChannel(channel) {
  let onLongPress;
  let onPress;
  channel = channel.channel;
  const tmp = importDefault(1324)("CategoryChannel");
  let obj = channel(566);
  const items = [closure_6, closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ collapsed: outer1_6.isCollapsed(channel.id), muted: outer1_7.isChannelMuted(channel.getGuildId(), channel.id) }));
  const collapsed = stateFromStoresObject.collapsed;
  const tmp2 = styles(tmp);
  obj = { name: importDefault(4320)(channel), muted: stateFromStoresObject.muted, collapsed, onPress, onLongPress, withMarginTop: channel.withMarginTop, styles: tmp2, isRefreshEnabled: tmp };
  ({ onPress, onLongPress } = useCategoryPressEvents(channel.id, collapsed));
  return renderCollapsibleCategoryItem(obj);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  const tmp = stateFromStores(1324)("RecentlyActiveCategory");
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj = {};
  const callback = React.useCallback(() => guildId(outer1_2[18]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
  const intl = guildId(1212).intl;
  obj.name = intl.string(guildId(1212).t.uZyspD);
  obj.collapsed = stateFromStores;
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles(tmp);
  obj.isRefreshEnabled = tmp;
  return renderCollapsibleCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const tmp = channelIds(1324)("SuggestedCategory");
  let items = [guildId, channelIds];
  let obj = {};
  const callback = React.useCallback(() => {
    let obj = guildId(outer1_2[20]);
    obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj = {};
    const intl = guildId(outer1_2[19]).intl;
    obj.label = intl.string(guildId(outer1_2[19]).t.VkKicb);
    obj.onPress = function onPress() {
      guildId(outer2_2[21]).clearRecentChannels(outer1_0, outer1_1);
    };
    obj.IconComponent = guildId(outer1_2[22]).CircleXIcon;
    const items = [obj];
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items);
  let intl = guildId(1212).intl;
  obj.name = intl.string(guildId(1212).t.HbJ7eD);
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles(tmp);
  obj.isRefreshEnabled = tmp;
  return renderCategoryItem(obj);
};
