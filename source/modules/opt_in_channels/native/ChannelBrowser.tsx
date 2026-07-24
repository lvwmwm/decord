// Module ID: 10009
// Function ID: 77275
// Name: keyExtractor
// Dependencies: [57, 31, 27, 6764, 5070, 1907, 1838, 4325, 653, 1345, 33, 4130, 689, 5160, 10010, 566, 10012, 3946, 1334, 10008, 5772, 7527, 5167, 4660, 1212, 5776, 5085, 10014, 4126, 4320, 3848, 5501, 7638, 3834, 4593, 9132, 5170, 1273, 4120, 2]
// Exports: default

// Module 10009 (keyExtractor)
import _slicedToArray from "_slicedToArray";
import importAllResult from "TableRowGroupTitle";
import { View } from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "map";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let obj = { container: { flex: 1 } };
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.header = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.categoryContainer = _createForOfIteratorHelperLoose;
obj.categoryTitle = { marginBottom: 0 };
obj.channelTitle = { flexDirection: "row", alignItems: "center" };
obj.selectAllContainer = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexShrink: 0 };
let items = [{ scale: 0.75 }];
obj.selectAllCheckbox = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4, transform: items };
obj.newBadge = { fontFamily: require("ME").Fonts.DISPLAY_EXTRABOLD };
let obj3 = { position: "relative", padding: 0, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, alignItems: "center" };
obj.nuxCard = obj3;
let obj4 = { position: "absolute", color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj.nuxCloseContainer = obj4;
let obj5 = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", padding: 16, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.nuxHeader = obj5;
obj.nuxHeaderText = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj.nuxBody = { textAlign: "center", marginBottom: 4 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_16 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = callback4();
  let obj = channel(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.isChannelOptedIn(channel.guild_id, channel.id));
  let obj1 = channel(3848);
  const checkboxA11yNative = obj1.useCheckboxA11yNative({ checked: stateFromStores });
  obj = {
    style: tmp.categoryContainer,
    onPress() {
      return onChannelClick(channel.guild_id, channel.id, channel.id);
    }
  };
  let str = "text";
  if ("null" !== channel.id) {
    str = checkboxA11yNative.accessibilityRole;
  }
  obj.accessibilityRole = str;
  let accessibilityState;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  obj.accessibilityState = accessibilityState;
  obj = {};
  obj1 = { style: tmp.categoryTitle, title: onChannelClick(4320)(channel), lineClamp: 1 };
  const items1 = [callback2(channel(5501).TableRowGroupTitle, obj1), ];
  let tmp10 = null;
  if ("null" !== channel.id) {
    const obj2 = { style: tmp.selectAllContainer };
    ({ accessibilityRole: obj6.accessibilityRole, accessibilityState: obj6.accessibilityState } = checkboxA11yNative);
    const obj3 = { style: tmp.selectAllCheckbox };
    const obj4 = { checked: stateFromStores };
    obj3.children = callback2(channel(7638).FormCheckbox, obj4);
    const items2 = [callback2(View, obj3), ];
    const obj5 = { variant: "text-xs/semibold", color: "interactive-text-default" };
    const intl = channel(1212).intl;
    obj5.children = intl.string(channel(1212).t.mSQwnW);
    items2[1] = callback2(channel(4126).Text, obj5);
    obj2.children = items2;
    tmp10 = callback3(View, obj2);
  }
  items1[1] = tmp10;
  obj.children = items1;
  obj.children = callback3(closure_14, obj);
  return callback2(channel(4660).PressableOpacity, obj);
});
let closure_17 = importAllResult.memo((channel) => {
  let forceChecked;
  let isFirst;
  let isLast;
  channel = channel.channel;
  const guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = channel(onChannelClick[15]);
  const items = [closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_10.isChannelOptedIn(channel.guild_id, channel.id));
  let obj1 = channel(onChannelClick[15]);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [channel.id, guild];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    return outer1_6.shouldIndicateNewChannel(id, channel.id);
  }, items2);
  let obj2 = channel(onChannelClick[15]);
  const items3 = [closure_10];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = outer1_10.isChannelOptedIn(channel.guild_id, channel.parent_id);
    }
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    let obj3 = channel(onChannelClick[16]);
    topic = obj3.getActiveAgoTimestamp(channel.id);
  }
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj4 = channel(onChannelClick[33]);
  const token = obj4.useToken(guild(onChannelClick[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[33]);
  if (null == guild) {
    return null;
  } else {
    const channelIconWithGuild = channel(onChannelClick[34]).getChannelIconWithGuild(channel, guild);
    const obj16 = channel(onChannelClick[34]);
    obj = {};
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj.isRulesChannel = rulesChannelId === channel.id;
    const channelIconComponent = channel(onChannelClick[34]).getChannelIconComponent(channel, obj);
    obj = { start: isFirst, end: isLast, disabled: stateFromStores2 };
    obj1 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj.icon = callback2(channel(onChannelClick[36]).TableRowIcon, obj1);
    obj2 = { style: tmp.channelTitle };
    obj3 = { lineClamp: 1 };
    let tmp22;
    if (stateFromStores1) {
      obj4 = { marginRight: first + 8 };
      tmp22 = obj4;
    }
    const items4 = [tmp22];
    obj3.style = items4;
    obj3.variant = token;
    obj3.color = tmp14;
    obj3.children = tmp7;
    const items5 = [callback2(channel(onChannelClick[28]).Text, obj3), ];
    if (stateFromStores1) {
      const obj5 = {};
      const obj6 = { marginLeft: -first };
      obj5.style = obj6;
      obj5.onLayout = callback;
      const obj7 = { color: channel(onChannelClick[37]).BadgeColors.BRAND };
      const intl = channel(onChannelClick[24]).intl;
      obj7.text = intl.string(channel(onChannelClick[24]).t.y2b7CA);
      obj7.textStyle = tmp.newBadge;
      obj5.children = callback2(channel(onChannelClick[37]).TextBadge, obj7);
      stateFromStores1 = callback2(View, obj5);
    }
    items5[1] = stateFromStores1;
    obj2.children = items5;
    obj.label = closure_13(View, obj2);
    let parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj8 = { channelId: channel.id, shouldCloseModal: true };
        parseTopicResult = guild(onChannelClick[38]).parseTopic(topic, true, obj8);
        const obj14 = guild(onChannelClick[38]);
      }
    }
    obj.subLabel = parseTopicResult;
    obj.subLabelLineClamp = 1;
    obj.onPress = function onPress() {
      return onChannelClick(guild.id, channel.id, channel.parent_id);
    };
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    obj.checked = stateFromStores;
    return callback2(channel(onChannelClick[35]).TableCheckboxRow, obj);
  }
  tmp7 = guild(onChannelClick[29])(channel);
});
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4, transform: items };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  let tmp = callback4();
  let tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  const importDefault = tmp2[1];
  onChannelClick = importDefault(onChannelClick[14])(guildId).onChannelClick;
  let obj = guildId(onChannelClick[15]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuild(guildId));
  let obj1 = guildId(onChannelClick[15]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCategories(guildId));
  let obj2 = guildId(onChannelClick[15]);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_8.getChannels(guildId));
  let obj3 = guildId(onChannelClick[16]);
  filterCategoriesByQuery = obj3.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, tmp2[0]);
  let obj4 = guildId(onChannelClick[17]);
  let result = obj4.useIsDismissibleContentDismissed_UNSAFE(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX);
  let obj5 = guildId(onChannelClick[16]);
  const channelBrowserSections = obj5.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount, section) => {
      if (rowCount.rowCount > 0) {
        let channel = outer1_4._categories[section].channel;
        let obj = { isSection: true, section, row: -1, channel, isLast: false };
        items.push(obj);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          obj = { isSection: false, section, row: num };
          let tmp2 = outer1_4;
          let tmp3 = outer1_4[channel.id][num];
          channel = undefined;
          let tmp = items;
          if (null != tmp3) {
            channel = tmp3.channel;
          }
          obj.channel = channel;
          let tmp5 = outer1_4;
          obj.isLast = num >= outer1_4[channel.id].length - 1;
          let arr = items.push(obj);
        }
      }
    });
    return items;
  }, items3);
  let obj6 = guildId(onChannelClick[19]);
  const result1 = obj6.hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    let obj = guildId(onChannelClick[17]);
    obj = { dismissAction: outer1_11.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, obj);
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  obj = { style: tmp.container };
  obj = { style: tmp.header };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    const channel = item.item.channel;
    if (null == channel) {
      return null;
    } else if (tmp) {
      let obj = { channel, onChannelClick };
      let tmp4Result = tmp4(outer1_16, obj, channel.id);
    } else {
      obj = { channel, guild: stateFromStores, isFirst: 0 === tmp2, isLast: tmp3, forceChecked: result1, onChannelClick };
      tmp4Result = tmp4(outer1_17, obj, channel.id);
    }
  }, items4);
  obj1 = {
    size: "md",
    onChange(arg0) {
      return callback(arg0);
    }
  };
  obj.children = callback2(guildId(onChannelClick[20]).SearchField, obj1);
  const items5 = [callback2(channelBrowserSections, obj), ];
  obj2 = {};
  let tmp16 = null;
  if (!result) {
    obj3 = { style: tmp.nuxCard };
    obj4 = {
      onPress() {
          let obj = guildId(onChannelClick[17]);
          obj = { dismissAction: outer1_11.DISMISS };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX, obj);
        },
      accessibilityRole: "button"
    };
    const intl = guildId(onChannelClick[24]).intl;
    obj4.accessibilityLabel = intl.string(guildId(onChannelClick[24]).t.cpT0Cq);
    obj4.style = tmp.nuxCloseContainer;
    obj4.children = callback2(guildId(onChannelClick[25]).CircleXIcon, {});
    const items6 = [callback2(guildId(onChannelClick[23]).PressableOpacity, obj4), , ];
    obj5 = { source: importDefault(onChannelClick[27]) };
    items6[1] = callback2(importDefault(onChannelClick[26]), obj5);
    obj6 = { style: tmp.nuxHeader };
    const obj7 = { style: tmp.nuxHeaderText };
    const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
    const intl2 = guildId(onChannelClick[24]).intl;
    obj8.children = intl2.string(guildId(onChannelClick[24]).t.utqWEC);
    obj7.children = callback2(guildId(onChannelClick[28]).Text, obj8);
    const items7 = [callback2(channelBrowserSections, obj7), , ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody };
    const intl3 = guildId(onChannelClick[24]).intl;
    obj9.children = intl3.string(guildId(onChannelClick[24]).t["+9etcM"]);
    items7[1] = callback2(guildId(onChannelClick[28]).Text, obj9);
    const obj10 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody };
    const intl4 = guildId(onChannelClick[24]).intl;
    obj10.children = intl4.format(guildId(onChannelClick[24]).t.Z0axjk, {});
    items7[2] = callback2(guildId(onChannelClick[28]).Text, obj10);
    obj6.children = items7;
    items6[2] = callback3(channelBrowserSections, obj6);
    obj3.children = items6;
    tmp16 = callback3(guildId(onChannelClick[22]).Card, obj3);
    const tmp22 = importDefault(onChannelClick[26]);
  }
  obj2.ListHeaderComponent = tmp16;
  const intl5 = guildId(onChannelClick[24]).intl;
  obj2.accessibilityLabel = intl5.string(guildId(onChannelClick[24]).t.et6wav);
  obj2.renderItem = callback;
  obj2.data = memo;
  obj2.contentContainerStyle = { paddingBottom: importDefault(onChannelClick[13])({ includeKeyboardHeight: true }).insets.bottom + importDefault(onChannelClick[12]).space.PX_16, paddingHorizontal: importDefault(onChannelClick[12]).space.PX_16 };
  obj2.keyExtractor = keyExtractor;
  items5[1] = callback2(guildId(onChannelClick[21]).FlashList, obj2);
  obj.children = items5;
  return callback3(channelBrowserSections, obj);
};
