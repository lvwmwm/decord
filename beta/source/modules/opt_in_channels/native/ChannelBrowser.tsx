// Module ID: 11051
// Function ID: 11052
// Name: ChannelBrowser
// Dependencies: [32, 19, 17, 6952, 6532, 4467, 2067, 5017, 1074, 2042, 21, 4836, 576, 6402, 11052, 504, 11054, 4654, 2029, 11050, 6471, 8179, 5919, 5435, 1115, 6034, 5899, 11056, 4832, 4989, 4548, 5999, 5929, 4531, 5335, 5916, 5923, 1177, 4823, 2]
// Exports: default

// Module 11051 (ChannelBrowser)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 6952 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6532 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let closure_14;
let items;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, header: obj2, categoryContainer: obj3, categoryTitle: { marginBottom: 0 }, channelTitle: { flexDirection: "row", alignItems: "center" }, selectAllContainer: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexShrink: 0 }, selectAllCheckbox: obj4, newBadge: { fontFamily: Fonts.DISPLAY_EXTRABOLD }, nuxCard: obj5, nuxCloseContainer: rect, nuxHeader: obj6, nuxHeaderText: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, nuxBody: { textAlign: "center", marginBottom: 4 } };
obj2 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
obj4 = { marginRight: nativeDefault.space.PX_4, transform: items };
items = [{ scale: 0.75 }];
obj5 = { position: "relative", padding: 0, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, marginBottom: 0, borderRadius: nativeDefault.radii.md, alignItems: "center" };
rect = { position: "absolute", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj6 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", padding: 16, borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
let closure_15 = createStyles(obj);
let closure_17 = react.memo((channel) => {
  let accessibilityState;
  let intl;
  let items1;
  let items2;
  let obj7;
  let str;
  let tmp11;
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = closure_15();
  const items = [UserGuildSettingsStore];
  const tmp3 = onChannelClick(4989)(channel);
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id));
  const obj2 = channel(4548);
  const checkboxA11yNative = obj2.useCheckboxA11yNative({ checked: stateFromStores });
  const obj3 = {
    style: tmp.categoryContainer,
    onPress() {
      return onChannelClick(channel.guild_id, channel.id, channel.id);
    },
    accessibilityRole: str,
    accessibilityState,
    children: closure_13(tmp11, { children: items1 })
  };
  str = "text";
  const PressableOpacity = channel(5435).PressableOpacity;
  if ("null" !== channel.id) {
    str = checkboxA11yNative.accessibilityRole;
  }
  accessibilityState = undefined;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  items1 = [, ];
  const obj4 = { style: tmp.categoryTitle, title: tmp3, lineClamp: 1 };
  items1[0] = closure_12(channel(5999).TableRowGroupTitle, obj4);
  let tmp10Result = null;
  tmp11 = closure_14;
  if ("null" !== channel.id) {
    const obj5 = { style: tmp.selectAllContainer, children: items2 };
    const obj6 = { style: tmp.selectAllCheckbox, children: closure_12(channel(5929).FormCheckbox, obj7) };
    obj7 = { checked: stateFromStores };
    items2 = [closure_12(View, obj6), ];
    const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: intl.string(channel(1115).t.mSQwnW) };
    const Text = tmp4(4832).Text;
    intl = tmp4(1115).intl;
    items2[1] = closure_12(Text, obj8);
    tmp10Result = tmp10(View, obj5);
  }
  items1[1] = tmp10Result;
  return closure_12(PressableOpacity, obj3);
});
let closure_18 = react.memo((channel) => {
  let TextBadge;
  let _undefined;
  let c3;
  let forceChecked;
  let intl;
  let isFirst;
  let isLast;
  let items4;
  let items5;
  let obj12;
  let obj13;
  let obj7;
  let obj8;
  let parseTopicResult;
  let tmp19;
  let tmp3;
  channel = channel.channel;
  const guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  _slicedToArray = undefined;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = closure_15();
  [tmp3, c3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items = [UserGuildSettingsStore];
  const obj2 = channel(onChannelClick[15]);
  let stateFromStores = obj2.useStateFromStores(items, () => UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id));
  const items1 = [NewChannelsStore];
  const items2 = [channel.id, guild];
  const obj3 = channel(onChannelClick[15]);
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let id;
    const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
    if (guild != null) {
      id = guild.id;
    }
    return shouldIndicateNewChannel(id, channel.id);
  }, items2);
  const items3 = [UserGuildSettingsStore];
  const obj4 = channel(onChannelClick[15]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    const isChannelOptedInResult = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const obj = react;
  const tmp10 = guild(onChannelClick[29])(channel);
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    const tmp4Result = channel(onChannelClick[16]);
    topic = tmp4Result.getActiveAgoTimestamp(channel.id);
  }
  const callback = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result5 = channel(onChannelClick[33]);
  const token = tmp4Result5.useToken(tmp9(tmp5[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[33]);
  if (null == guild) {
    return null;
  } else {
    const tmp4Result7 = channel(onChannelClick[34]);
    const channelIconWithGuild = tmp4Result7.getChannelIconWithGuild(channel, guild);
    let rulesChannelId;
    const getChannelIconComponent = channel(onChannelClick[34]).getChannelIconComponent;
    channel(onChannelClick[34]);
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj5 = { isRulesChannel: rulesChannelId === channel.id };
    const channelIconComponent = getChannelIconComponent(channel, obj5);
    const obj6 = {
      start: isFirst,
      end: isLast,
      disabled: stateFromStores2,
      icon: closure_12(channel(onChannelClick[36]).TableRowIcon, obj7),
      label: tmp19(View, obj8),
      subLabel: parseTopicResult,
      subLabelLineClamp: 1,
      onPress() {
          return onChannelClick(guild.id, channel.id, channel.parent_id);
        },
      checked: stateFromStores
    };
    const TableCheckboxRow = tmp4(tmp5[35]).TableCheckboxRow;
    let tmp21;
    obj7 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj8 = { style: tmp.channelTitle, children: items5 };
    const Text = tmp4(tmp5[28]).Text;
    tmp19 = closure_13;
    if (stateFromStores1) {
      tmp21 = { marginRight: tmp3 + 8 };
      const obj9 = { marginRight: tmp3 + 8 };
    }
    const obj10 = { lineClamp: 1, style: items4, variant: token, color: tmp15, children: tmp10 };
    items4 = [tmp21];
    items5 = [closure_12(Text, obj10), ];
    if (stateFromStores1) {
      const obj11 = { style: obj12, onLayout: callback, children: closure_12(TextBadge, obj13) };
      obj12 = { marginLeft: -tmp3 };
      obj13 = { color: channel(onChannelClick[37]).BadgeColors.BRAND, text: intl.string(channel(onChannelClick[24]).t.y2b7CA), textStyle: tmp.newBadge };
      TextBadge = tmp4(tmp5[37]).TextBadge;
      intl = tmp4(tmp5[24]).intl;
      stateFromStores1 = tmp18(tmp20, obj11);
    }
    items5[1] = stateFromStores1;
    parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj14 = { channelId: channel.id, shouldCloseModal: true };
        const tmp9Result = guild(onChannelClick[38]);
        parseTopicResult = tmp9Result.parseTopic(topic, true, obj14);
      }
    }
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    return closure_12(TableCheckboxRow, obj6);
  }
});
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  let Text;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj16;
  guildId = guildId.guildId;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  let tmp = closure_15();
  let tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  let tmp4 = importDefault;
  const tmp5 = onChannelClick;
  const first = tmp2[0];
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  let obj = guildId(onChannelClick[15]);
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(onChannelClick[15]);
  const items1 = [GuildCategoryStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildCategoryStore.getCategories(guildId));
  const items2 = [GuildChannelStore];
  const obj3 = guildId(onChannelClick[15]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildChannelStore.getChannels(guildId));
  const obj4 = guildId(onChannelClick[16]);
  filterCategoriesByQuery = obj4.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, first);
  const obj5 = guildId(onChannelClick[17]);
  let result = obj5.useIsDismissibleContentDismissed_UNSAFE(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX);
  const obj6 = guildId(onChannelClick[16]);
  const channelBrowserSections = obj6.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount, section) => {
      let channel1;
      let tmp2;
      if (rowCount.rowCount > 0) {
        let num;
        const channel = filterCategoriesByQuery._categories[section].channel;
        const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
        items.push(obj2);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          let obj = { isSection: false, section, row: num, channel: channel1, isLast: num >= tmp2[channel.id].length - 1 };
          let tmp3 = filterCategoriesByQuery[channel.id][num];
          channel1 = undefined;
          let push = items.push;
          tmp2 = filterCategoriesByQuery;
          if (tmp3 != null) {
            channel1 = tmp3.channel;
          }
          let arr2 = push(obj);
        }
      }
    });
    return items;
  }, items3);
  const obj7 = guildId(onChannelClick[19]);
  const result1 = obj7.hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    const obj = guildId(onChannelClick[17]);
    const obj2 = { dismissAction: constants.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, obj2);
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  const obj8 = { style: tmp.container, children: items5 };
  const obj9 = { style: tmp.header, children: closure_12(guildId(onChannelClick[20]).SearchField, obj10) };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    const channel = item.item.channel;
    let tmp4 = null;
    if (null != channel) {
      let tmp5Result;
      if (tmp) {
        const obj2 = { channel, onChannelClick };
        tmp5Result = tmp5(closure_17, obj2, channel.id);
      } else {
        const obj = { channel, guild: stateFromStores, isFirst: 0 === tmp2, isLast: tmp3, forceChecked: result1, onChannelClick };
        tmp5Result = tmp5(closure_18, obj, channel.id);
      }
      tmp4 = tmp5Result;
    }
    return tmp4;
  }, items4);
  obj10 = {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    }
  };
  items5 = [closure_12(channelBrowserSections, obj9), ];
  let tmp17Result = null;
  const FlashList = guildId(onChannelClick[21]).FlashList;
  if (!result) {
    const obj11 = { style: tmp.nuxCard, children: items6 };
    const Card = tmp6(tmp5[22]).Card;
    const obj12 = {
      onPress() {
          const obj = guildId(onChannelClick[17]);
          const obj2 = { dismissAction: constants.DISMISS };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX, obj2);
        },
      accessibilityRole: "button",
      accessibilityLabel: intl.string(guildId(tmp5[24]).t.cpT0Cq),
      style: tmp.nuxCloseContainer,
      children: closure_12(guildId(tmp5[25]).CircleXIcon, {})
    };
    const PressableOpacity = tmp6(tmp5[23]).PressableOpacity;
    intl = tmp6(tmp5[24]).intl;
    items6 = [closure_12(PressableOpacity, obj12), , ];
    const obj13 = { source: tmp4(tmp5[27]) };
    const tmp4Result = tmp4(tmp5[26]);
    items6[1] = closure_12(tmp4Result, obj13);
    const obj14 = { style: tmp.nuxHeader, children: items7 };
    const obj15 = { style: tmp.nuxHeaderText, children: closure_12(Text, obj16) };
    obj16 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl2.string(guildId(tmp5[24]).t.utqWEC) };
    Text = tmp6(tmp5[28]).Text;
    intl2 = tmp6(tmp5[24]).intl;
    items7 = [closure_12(channelBrowserSections, obj15), , ];
    const obj17 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: intl3.string(guildId(tmp5[24]).t["+9etcM"]) };
    const Text2 = tmp6(tmp5[28]).Text;
    intl3 = tmp6(tmp5[24]).intl;
    items7[1] = closure_12(Text2, obj17);
    const obj18 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: intl4.format(guildId(tmp5[24]).t.Z0axjk, {}) };
    const Text3 = tmp6(tmp5[28]).Text;
    intl4 = tmp6(tmp5[24]).intl;
    items7[2] = closure_12(Text3, obj18);
    items6[2] = closure_13(channelBrowserSections, obj14);
    tmp17Result = tmp17(Card, obj11);
  }
  const obj19 = { ListHeaderComponent: tmp17Result, accessibilityLabel: intl5.string(guildId(tmp5[24]).t.et6wav), renderItem: callback, data: memo, contentContainerStyle: { paddingBottom: insets.bottom + tmp4(tmp5[12]).space.PX_16, paddingHorizontal: tmp4(tmp5[12]).space.PX_16 }, keyExtractor };
  intl5 = tmp6(tmp5[24]).intl;
  ({ paddingBottom: insets.bottom + tmp4(tmp5[12]).space.PX_16, paddingHorizontal: tmp4(tmp5[12]).space.PX_16 });
  items5[1] = closure_12(FlashList, obj19);
  return closure_13(channelBrowserSections, obj8);
};
