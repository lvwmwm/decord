// Module ID: 14841
// Function ID: 111848
// Name: renderCategoryItem
// Dependencies: []
// Exports: CategoryChannel, RecentlyActiveCategory, SuggestedCategory

// Module 14841 (renderCategoryItem)
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
    obj = { 9223372036854775807: 0, -9223372036854775808: null, 0: 0, 0: 96 };
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj.color = str;
    obj.style = styles.categoryText;
    obj.children = name;
    tmp3Result = callback(arg1(dependencyMap[9]).Text, obj);
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
  tmp18 = callback(arg1(dependencyMap[10]).PressableHighlight, { accessibilityRole: "header", accessibilityState, onPress, onLongPress, style: items, children: tmp9Result });
}
function renderCollapsibleCategoryItem(collapsed) {
  collapsed = collapsed.collapsed;
  let obj = Object.create(null);
  obj.collapsed = 0;
  obj.isRefreshEnabled = 0;
  const merged = Object.assign(collapsed, obj);
  const colors = importDefault(dependencyMap[11]).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["icon"] = callback(arg1(dependencyMap[12]).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? obj : obj1 });
  obj = { expanded: !collapsed };
  obj["accessibilityState"] = obj;
  obj["isRefreshEnabled"] = collapsed.isRefreshEnabled;
  return renderCategoryItem(obj);
}
function useCategoryPressEvents(id, collapsed) {
  collapsed = id;
  const importDefault = collapsed;
  const items = [id, collapsed];
  const items1 = [id];
  return {
    onPress: React.useCallback(() => {
      const obj = arg0(closure_2[13]);
      if (arg1) {
        obj.categoryExpand(arg0);
      } else {
        obj.categoryCollapse(arg0);
      }
    }, items),
    onLongPress: React.useCallback(() => arg0(closure_2[14]).openChannelLongPressActionSheet(arg0), items1)
  };
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ CATEGORY_MARGIN_BOTTOM: closure_8, CATEGORY_MARGIN_TOP: closure_9, CATEGORY_VERTICAL_PADDING: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
const styles = obj.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { categoryWrapper: obj };
  obj = { experimental_useNativeText: -1437532158, lineClamp: -1032896085, backgroundColor: -12517375, borderRadius: 1358955119, display: 1598139306, paddingVertical: closure_10 };
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
obj = { "Null": -536870861, "Null": -299892737 };
obj = {};
const merged = Object.assign(obj);
const items = [{ rotate: "-90deg" }];
obj["transform"] = items;
const obj1 = {};
const merged1 = Object.assign(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export { useCategoryPressEvents };
export const CategoryChannel = function CategoryChannel(channel) {
  let onLongPress;
  let onPress;
  channel = channel.channel;
  const arg1 = channel;
  const tmp = importDefault(dependencyMap[15])("CategoryChannel");
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6, closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ collapsed: collapsed.isCollapsed(channel.id), muted: channelMuted.isChannelMuted(channel.getGuildId(), channel.id) }));
  const collapsed = stateFromStoresObject.collapsed;
  const tmp2 = styles(tmp);
  obj = { name: importDefault(dependencyMap[17])(channel), muted: stateFromStoresObject.muted, collapsed, onPress, onLongPress, withMarginTop: channel.withMarginTop, styles: tmp2, isRefreshEnabled: tmp };
  ({ onPress, onLongPress } = useCategoryPressEvents(channel.id, collapsed));
  return renderCollapsibleCategoryItem(obj);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = importDefault(dependencyMap[15])("RecentlyActiveCategory");
  let obj = arg1(dependencyMap[16]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => collapsed.isCollapsed(guildId));
  const importDefault = stateFromStores;
  const items1 = [guildId, stateFromStores];
  obj = {};
  const callback = React.useCallback(() => guildId(closure_2[18]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
  const intl = arg1(dependencyMap[19]).intl;
  obj.name = intl.string(arg1(dependencyMap[19]).t.uZyspD);
  obj.collapsed = stateFromStores;
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles(tmp);
  obj.isRefreshEnabled = tmp;
  return renderCollapsibleCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const channelIds = guildId.channelIds;
  const importDefault = channelIds;
  const tmp = importDefault(dependencyMap[15])("SuggestedCategory");
  const items = [guildId, channelIds];
  const obj = {};
  const callback = React.useCallback(() => {
    let obj = guildId(closure_2[20]);
    obj = { position: true, width: true, aspectRatio: true };
    obj = {};
    const intl = guildId(closure_2[19]).intl;
    obj.label = intl.string(guildId(closure_2[19]).t.VkKicb);
    obj.onPress = function onPress() {
      callback(closure_2[21]).clearRecentChannels(callback, closure_1);
    };
    obj.IconComponent = guildId(closure_2[22]).CircleXIcon;
    const items = [obj];
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items);
  const intl = arg1(dependencyMap[19]).intl;
  obj.name = intl.string(arg1(dependencyMap[19]).t.HbJ7eD);
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles(tmp);
  obj.isRefreshEnabled = tmp;
  return renderCategoryItem(obj);
};
