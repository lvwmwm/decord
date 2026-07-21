// Module ID: 9968
// Function ID: 77017
// Name: keyExtractor
// Dependencies: []
// Exports: default

// Module 9968 (keyExtractor)
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const ContentDismissActionType = arg1(dependencyMap[9]).ContentDismissActionType;
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = { container: { flex: 1 } };
obj = { marginTop: importDefault(dependencyMap[12]).space.PX_12, marginHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
obj.header = obj;
obj1 = { bottom: "<string:3435973836>", left: "<string:1903247380>", padding: "r", paddingTop: importDefault(dependencyMap[12]).space.PX_24, paddingBottom: importDefault(dependencyMap[12]).space.PX_8, borderRadius: importDefault(dependencyMap[12]).radii.md };
obj.categoryContainer = obj1;
obj.categoryTitle = { marginBottom: 0 };
obj.channelTitle = {};
obj.selectAllContainer = { 0: "<string:1358954976>", -9223372036854775808: "<string:4282510908>", 9223372036854775807: "<string:1392509361>", 0: "<string:2889329719>", 0: "<string:3865160759>" };
const tmp2 = arg1(dependencyMap[10]);
const items = [{ scale: 0.75 }];
obj.selectAllCheckbox = { marginRight: importDefault(dependencyMap[12]).space.PX_4, transform: items };
obj.newBadge = { fontFamily: arg1(dependencyMap[8]).Fonts.DISPLAY_EXTRABOLD };
const obj2 = { marginRight: importDefault(dependencyMap[12]).space.PX_4, transform: items };
obj.nuxCard = { marginTop: importDefault(dependencyMap[12]).space.PX_16, paddingTop: importDefault(dependencyMap[12]).space.PX_16, borderRadius: importDefault(dependencyMap[12]).radii.md };
const obj4 = { 814779987: "/assets/images/native/icons", 1377348501: 24, -1897888830: 24, 131209936: null, color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.nuxCloseContainer = obj4;
const obj3 = { marginTop: importDefault(dependencyMap[12]).space.PX_16, paddingTop: importDefault(dependencyMap[12]).space.PX_16, borderRadius: importDefault(dependencyMap[12]).radii.md };
obj.nuxHeader = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_SUBTLE, borderBottomLeftRadius: importDefault(dependencyMap[12]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[12]).radii.lg };
obj.nuxHeaderText = { "Null": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", "Bool(true)": true };
obj.nuxBody = { collapsable: "/assets/design/components/Illustration/native/redesign/generated/images", preventClipping: 160 };
let closure_15 = obj1.createStyles(obj);
let closure_16 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.onChannelClick;
  const tmp = callback4();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => channelOptedIn.isChannelOptedIn(channel.guild_id, channel.id));
  let obj1 = arg1(dependencyMap[30]);
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
  obj1 = { style: tmp.categoryTitle, title: importDefault(dependencyMap[29])(channel), lineClamp: 1 };
  const items1 = [callback2(arg1(dependencyMap[31]).TableRowGroupTitle, obj1), ];
  let tmp10 = null;
  if ("null" !== channel.id) {
    const obj2 = { style: tmp.selectAllContainer };
    ({ accessibilityRole: obj6.accessibilityRole, accessibilityState: obj6.accessibilityState } = checkboxA11yNative);
    const obj3 = { style: tmp.selectAllCheckbox };
    const obj4 = { checked: stateFromStores };
    obj3.children = callback2(arg1(dependencyMap[32]).FormCheckbox, obj4);
    const items2 = [callback2(View, obj3), ];
    const obj5 = {};
    const intl = arg1(dependencyMap[24]).intl;
    obj5.children = intl.string(arg1(dependencyMap[24]).t.mSQwnW);
    items2[1] = callback2(arg1(dependencyMap[28]).Text, obj5);
    obj2.children = items2;
    tmp10 = callback3(View, obj2);
  }
  items1[1] = tmp10;
  obj.children = items1;
  obj.children = callback3(closure_14, obj);
  return callback2(arg1(dependencyMap[23]).PressableOpacity, obj);
});
let closure_17 = importAllResult.memo((channel) => {
  let forceChecked;
  let isFirst;
  let isLast;
  channel = channel.channel;
  const arg1 = channel;
  const guild = channel.guild;
  const importDefault = guild;
  const dependencyMap = channel.onChannelClick;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  let obj = arg1(dependencyMap[15]);
  const items = [closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => closure_10.isChannelOptedIn(channel.guild_id, channel.id));
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_6];
  const items2 = [channel.id, guild];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    return closure_6.shouldIndicateNewChannel(id, channel.id);
  }, items2);
  let obj2 = arg1(dependencyMap[15]);
  const items3 = [closure_10];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = closure_10.isChannelOptedIn(channel.guild_id, channel.parent_id);
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
    let obj3 = arg1(dependencyMap[16]);
    topic = obj3.getActiveAgoTimestamp(channel.id);
  }
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj4 = arg1(dependencyMap[33]);
  const token = obj4.useToken(importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  arg1(dependencyMap[33]);
  if (null == guild) {
    return null;
  } else {
    const channelIconWithGuild = arg1(dependencyMap[34]).getChannelIconWithGuild(channel, guild);
    const obj16 = arg1(dependencyMap[34]);
    obj = {};
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj.isRulesChannel = rulesChannelId === channel.id;
    const channelIconComponent = arg1(dependencyMap[34]).getChannelIconComponent(channel, obj);
    obj = { start: isFirst, end: isLast, disabled: stateFromStores2 };
    obj1 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj.icon = callback2(arg1(dependencyMap[36]).TableRowIcon, obj1);
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
    const items5 = [callback2(arg1(dependencyMap[28]).Text, obj3), ];
    if (stateFromStores1) {
      const obj5 = {};
      const obj6 = { marginLeft: -first };
      obj5.style = obj6;
      obj5.onLayout = callback;
      const obj7 = { color: arg1(dependencyMap[37]).BadgeColors.BRAND };
      const intl = arg1(dependencyMap[24]).intl;
      obj7.text = intl.string(arg1(dependencyMap[24]).t.y2b7CA);
      obj7.textStyle = tmp.newBadge;
      obj5.children = callback2(arg1(dependencyMap[37]).TextBadge, obj7);
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
        parseTopicResult = importDefault(dependencyMap[38]).parseTopic(topic, true, obj8);
        const obj14 = importDefault(dependencyMap[38]);
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
    return callback2(arg1(dependencyMap[35]).TableCheckboxRow, obj);
  }
  const tmp7 = importDefault(dependencyMap[29])(channel);
});
const obj5 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_SUBTLE, borderBottomLeftRadius: importDefault(dependencyMap[12]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[12]).radii.lg };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(""), 2);
  const importDefault = tmp2[1];
  const onChannelClick = importDefault(dependencyMap[14])(guildId).onChannelClick;
  const dependencyMap = onChannelClick;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let callback = stateFromStores;
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => categories.getCategories(guildId));
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => channels.getChannels(guildId));
  let obj3 = arg1(dependencyMap[16]);
  const filterCategoriesByQuery = obj3.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, tmp2[0]);
  let obj4 = arg1(dependencyMap[17]);
  const result = obj4.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[18]).DismissibleContent.CHANNEL_BROWSER_NUX);
  let obj5 = arg1(dependencyMap[16]);
  const channelBrowserSections = obj5.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const View = channelBrowserSections;
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const guildId = items;
    const item = channelBrowserSections.forEach((rowCount, section) => {
      if (rowCount.rowCount > 0) {
        let channel = _categories._categories[section].channel;
        let obj = { section, channel };
        items.push(obj);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          obj = { isSection: false, section, row: num };
          let tmp2 = _categories;
          let tmp3 = _categories[channel.id][num];
          channel = undefined;
          let tmp = items;
          if (null != tmp3) {
            channel = tmp3.channel;
          }
          obj.channel = channel;
          let tmp5 = _categories;
          obj.isLast = num >= _categories[channel.id].length - 1;
          let arr = items.push(obj);
        }
      }
    });
    return items;
  }, items3);
  let obj6 = arg1(dependencyMap[19]);
  const result1 = obj6.hasNotSetUpChannelOptIn(guildId);
  let closure_6 = result1;
  const effect = importAllResult.useEffect(() => {
    let obj = guildId(onChannelClick[17]);
    obj = { dismissAction: constants.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, obj);
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  obj = { style: tmp.container };
  obj = { style: tmp.header };
  callback = importAllResult.useCallback((item) => {
    const channel = item.item.channel;
    if (null == channel) {
      return null;
    } else if (tmp) {
      let obj = { channel, onChannelClick };
      let tmp4Result = tmp4(closure_16, obj, channel.id);
    } else {
      obj = { channel, guild: stateFromStores, isFirst: 0 === tmp2, isLast: tmp3, forceChecked: result1, onChannelClick };
      tmp4Result = tmp4(closure_17, obj, channel.id);
    }
  }, items4);
  obj1 = {
    size: "md",
    onChange(arg0) {
      return callback(arg0);
    }
  };
  obj.children = callback2(arg1(dependencyMap[20]).SearchField, obj1);
  const items5 = [callback2(View, obj), ];
  obj2 = {};
  let tmp16 = null;
  if (!result) {
    obj3 = { style: tmp.nuxCard };
    obj4 = {
      onPress() {
          let obj = guildId(onChannelClick[17]);
          obj = { dismissAction: constants.DISMISS };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX, obj);
        },
      accessibilityRole: "button"
    };
    const intl = arg1(dependencyMap[24]).intl;
    obj4.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.cpT0Cq);
    obj4.style = tmp.nuxCloseContainer;
    obj4.children = callback2(arg1(dependencyMap[25]).CircleXIcon, {});
    const items6 = [callback2(arg1(dependencyMap[23]).PressableOpacity, obj4), , ];
    obj5 = { source: importDefault(dependencyMap[27]) };
    items6[1] = callback2(importDefault(dependencyMap[26]), obj5);
    obj6 = { style: tmp.nuxHeader };
    const obj7 = { style: tmp.nuxHeaderText };
    const obj8 = {};
    const intl2 = arg1(dependencyMap[24]).intl;
    obj8.children = intl2.string(arg1(dependencyMap[24]).t.utqWEC);
    obj7.children = callback2(arg1(dependencyMap[28]).Text, obj8);
    const items7 = [callback2(View, obj7), , ];
    const obj9 = { style: tmp.nuxBody };
    const intl3 = arg1(dependencyMap[24]).intl;
    obj9.children = intl3.string(arg1(dependencyMap[24]).t.+9etcM);
    items7[1] = callback2(arg1(dependencyMap[28]).Text, obj9);
    const obj10 = { style: tmp.nuxBody };
    const intl4 = arg1(dependencyMap[24]).intl;
    obj10.children = intl4.format(arg1(dependencyMap[24]).t.Z0axjk, {});
    items7[2] = callback2(arg1(dependencyMap[28]).Text, obj10);
    obj6.children = items7;
    items6[2] = callback3(View, obj6);
    obj3.children = items6;
    tmp16 = callback3(arg1(dependencyMap[22]).Card, obj3);
    const tmp22 = importDefault(dependencyMap[26]);
  }
  obj2.ListHeaderComponent = tmp16;
  const intl5 = arg1(dependencyMap[24]).intl;
  obj2.accessibilityLabel = intl5.string(arg1(dependencyMap[24]).t.et6wav);
  obj2.renderItem = callback;
  obj2.data = memo;
  obj2.contentContainerStyle = { paddingBottom: importDefault(dependencyMap[13])({ includeKeyboardHeight: true }).insets.bottom + importDefault(dependencyMap[12]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
  obj2.keyExtractor = keyExtractor;
  items5[1] = callback2(arg1(dependencyMap[21]).FlashList, obj2);
  obj.children = items5;
  return callback3(View, obj);
};
