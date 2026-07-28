// Module ID: 15067
// Function ID: 114685
// Name: renderCategoryItem
// Dependencies: [31, 27, 5766, 5111, 4360, 10263, 33, 4165, 477, 689, 4161, 4695, 11831, 8368, 9980, 9073, 1324, 566, 4355, 11856, 5107, 1212, 5531, 9981, 6715, 2]
// Exports: CategoryChannel, RecentlyActiveCategory, SuggestedCategory

// Module 15067 (renderCategoryItem)
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
  let trailingAction;
  let withMarginTop;
  ({ name, icon, note, muted } = arg0);
  if (muted === undefined) {
    muted = false;
  }
  ({ onPress, onLongPress, styles, isRefreshEnabled, trailingAction } = arg0);
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
    tmp3Result = callback(trailingAction(4161).Text, obj);
    const tmp3 = callback;
  }
  let tmp6 = null;
  if (null != icon) {
    obj = { style: styles.iconWrapperStyles, children: icon };
    tmp6 = callback(View, obj);
  }
  if (null == trailingAction) {
    const obj1 = {};
    const items1 = [, , , ];
    if (isRefreshEnabled) {
      items1[0] = tmp3Result;
      let tmp23 = null;
      if (null != note) {
        const obj2 = { style: styles.noteWrapper, children: note };
        tmp23 = callback(View, obj2);
      }
      items1[1] = tmp23;
      items1[2] = tmp6;
      items1[3] = null;
      obj1.children = items1;
      let tmp22 = obj1;
    } else {
      items1[0] = tmp6;
      items1[1] = tmp3Result;
      items1[2] = note;
      items1[3] = null;
      obj1.children = items1;
      tmp22 = obj1;
    }
    const tmp20Result = closure_13(closure_12, tmp22);
    if (null == onPress) {
      if (null == onLongPress) {
        const obj3 = { accessibilityRole: "header", style: items, children: tmp20Result };
        let tmp30Result = callback(View, obj3);
      }
      return tmp30Result;
    }
    const obj4 = { accessibilityRole: "header", accessibilityState };
    let tmp33;
    if (null != trailingAction) {
      const obj5 = { name: "add-to-category", label: trailingAction.label };
      const items2 = [obj5];
      tmp33 = items2;
    }
    obj4.accessibilityActions = tmp33;
    let fn;
    if (null != trailingAction) {
      fn = (nativeEvent) => {
        if ("add-to-category" === nativeEvent.nativeEvent.actionName) {
          trailingAction.perform();
        }
      };
    }
    obj4.onAccessibilityAction = fn;
    obj4.onPress = onPress;
    obj4.onLongPress = onLongPress;
    obj4.style = items;
    obj4.children = tmp20Result;
    tmp30Result = callback(trailingAction(4695).PressableHighlight, obj4);
    const tmp20 = closure_13;
    const tmp21 = closure_12;
    const tmp30 = callback;
  } else {
    const obj6 = { style: styles.trailingActionWrapper };
    let obj7 = { accessible: false, onPress: trailingAction.perform, hitSlop: closure_15, androidRippleConfig: closure_16 };
    let obj8 = { size: "xxs" };
    const colors = importDefault(689).colors;
    obj8.color = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    obj8 = callback(trailingAction(11831).PlusMediumIcon, obj8);
    obj7.children = obj8;
    obj7 = callback(trailingAction(4695).PressableOpacity, obj7);
    obj6.children = obj7;
    callback(View, obj6);
    const tmp10 = View;
    const tmp11 = callback;
    const tmp16 = callback;
    const tmp9 = callback;
  }
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
  obj["icon"] = callback(require(8368) /* ChevronSmallDownIcon */.ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? _createForOfIteratorHelperLoose : obj1 });
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
      const obj = id(outer1_2[14]);
      if (closure_1) {
        obj.categoryExpand(id);
      } else {
        obj.categoryCollapse(id);
      }
    }, items),
    onLongPress: React.useCallback(() => id(outer1_2[15]).openChannelLongPressActionSheet(id), items1)
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
  let obj4 = require(477) /* set */;
  let num = 0;
  if (obj4.isAndroid()) {
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
  obj4 = { paddingLeft: importDefault(689).space.PX_8, marginLeft: "auto" };
  obj.trailingActionWrapper = obj4;
  return obj;
});
let closure_15 = { top: 16, bottom: 16, left: 16, right: 16 };
let closure_16 = { borderless: true, radius: 16 };
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
  obj = { name: importDefault(4355)(channel), muted: stateFromStoresObject.muted, collapsed, onPress, onLongPress, withMarginTop: channel.withMarginTop, styles: tmp2, isRefreshEnabled: tmp, trailingAction: importDefault(11856)(channel) };
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
  const callback = React.useCallback(() => guildId(outer1_2[20]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
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
    let obj = guildId(outer1_2[22]);
    obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj = {};
    const intl = guildId(outer1_2[21]).intl;
    obj.label = intl.string(guildId(outer1_2[21]).t.VkKicb);
    obj.onPress = function onPress() {
      guildId(outer2_2[23]).clearRecentChannels(outer1_0, outer1_1);
    };
    obj.IconComponent = guildId(outer1_2[24]).CircleXIcon;
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
