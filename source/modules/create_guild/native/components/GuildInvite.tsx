// Module ID: 11731
// Function ID: 91119
// Name: SeeMoreFooter
// Dependencies: []
// Exports: default

// Module 11731 (SeeMoreFooter)
function SeeMoreFooter(openInviteSheet) {
  let obj = {};
  obj = { style: callback5().friendIcon, children: callback3(arg1(dependencyMap[16]).GroupIcon, { size: "sm" }) };
  obj.icon = callback3(closure_6, obj);
  obj.onPress = openInviteSheet.openInviteSheet;
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.zrLIIz);
  obj.end = true;
  return callback3(arg1(dependencyMap[15]).TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  let suggestions;
  ({ invite: closure_0, suggestions } = openInviteSheet);
  const importDefault = suggestions;
  const tmp = callback5();
  const dependencyMap = tmp;
  [][0] = suggestions;
  let tmp7Result = null;
  if (0 !== suggestions.length) {
    let obj = { style: tmp.suggestionsContainer };
    obj = {
      data: tmp2,
      renderItem(arg0) {
          let index;
          let item;
          ({ item, index } = arg0);
          return callback(suggestions(tmp[18]), { row: item, code: code.code, start: 0 === index });
        },
      contentContainerStyle: tmp.suggestionRowsContainer
    };
    let tmp6 = null;
    if (suggestions.length > 6) {
      obj = { openInviteSheet: openInviteSheet.openInviteSheet };
      tmp6 = callback3(SeeMoreFooter, obj);
    }
    obj.ListFooterComponent = tmp6;
    obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
      return callback(closure_6, { style: tmp.separator });
    };
    obj.keyExtractor = function keyExtractor(item) {
      return item.item.id;
    };
    obj.children = callback3(closure_7, obj);
    tmp7Result = callback3(closure_6, obj);
    const tmp10 = closure_7;
    const tmp7 = callback3;
    const tmp8 = closure_6;
    const tmp9 = callback3;
  }
  return tmp7Result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ Image: closure_5, View: closure_6, FlatList: closure_7 } = tmp2);
let closure_8 = arg1(dependencyMap[3]).useInstantInviteSendStates;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const CreateGuildModalStates = arg1(dependencyMap[8]).CreateGuildModalStates;
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { marginTop: arg1(dependencyMap[12]).NAV_BAR_HEIGHT, flex: 1, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
obj.container = obj;
obj.header = { marginBottom: 8 };
obj.description = {};
obj.headerImage = { marginVertical: 16 };
obj.linkContainer = {};
const tmp4 = arg1(dependencyMap[10]);
obj.linkButton = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xs };
const obj2 = { "Bool(false)": "r", "Bool(false)": "gift_info", tintColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.linkButtonIcon = obj2;
obj.inviteDetail = { marginTop: 8 };
obj.shareButton = { marginVertical: 16 };
obj.suggestionsContainer = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xs };
obj.friendIcon = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xxl };
obj.suggestionRowsContainer = { marginHorizontal: 12 };
const obj3 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xxl };
obj.separator = { height: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE, marginStart: importDefault(dependencyMap[13]).modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_21 = obj.createStyles(obj);
const obj4 = { height: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE, marginStart: importDefault(dependencyMap[13]).modules.mobile.TABLE_ROW_DIVIDER_PADDING };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default function GuildInvite(closeOnEditInviteLink) {
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const arg1 = flag;
  const onClose = closeOnEditInviteLink.onClose;
  const importDefault = onClose;
  let dependencyMap;
  let callback;
  let React;
  let first;
  let closure_6;
  let stateFromStores;
  let callback2;
  let closure_9;
  let closure_10;
  const tmp = callback5();
  let obj = arg1(dependencyMap[19]);
  const navigation = obj.useNavigation();
  dependencyMap = navigation;
  let obj1 = arg1(dependencyMap[20]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  callback = isScreenReaderEnabled;
  const ref = React.useRef(null);
  React = ref;
  const tmp5 = callback(React.useState(false), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let obj2 = arg1(dependencyMap[21]);
  const items = [closure_10];
  stateFromStores = obj2.useStateFromStores(items, () => tmp14Result.getInvite());
  let obj3 = arg1(dependencyMap[21]);
  const items1 = [closure_10, closure_9, closure_11];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const inviteSettings = tmp14Result.getInviteSettings();
    let channelId;
    if (null != inviteSettings) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return tmp10.getChannel(channelId);
    } else {
      const guildId = tmp14Result.getGuildId();
      let defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
  });
  callback2 = stateFromStores1;
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = flag(navigation[22]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items2);
  const first1 = callback(React.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp10 = callback2();
  closure_9 = tmp10;
  importDefault(dependencyMap[23])(() => {
    let obj = flag(navigation[24]);
    obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
  });
  const items3 = [tmp10, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      if (null != tmp10[closure_7.code]) {
        callback(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    const intl = flag(navigation[17]).intl;
    const string = intl.string;
    const t = flag(navigation[17]).t;
    if (first) {
      let stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t.5Wxrcd);
    }
    obj.headerRight = flag(navigation[25]).getHeaderTextButton(stringResult, () => {
      const AccessibilityAnnouncer = callback(closure_2[26]).AccessibilityAnnouncer;
      const intl = callback(closure_2[17]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_2[17]).t.FY/yLY));
      callback2();
      let obj = callback2(closure_2[14]);
      obj = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: !closure_5 };
      obj.track(constants2.USER_FLOW_TRANSITION, obj);
    });
    obj.headerLeft = function headerLeft() {
      return null;
    };
    navigation.setOptions(obj);
  }, items4);
  let code;
  if (null != stateFromStores) {
    code = stateFromStores.code;
  }
  const tmp14Result = importDefault(dependencyMap[27])(code);
  closure_10 = tmp14Result;
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
  let code1;
  callback = React.useCallback(() => {
    if (null != stateFromStores1) {
      const result = onClose(navigation[28]).openGuildInviteScreen(stateFromStores1);
      const obj = onClose(navigation[28]);
    }
  }, items5);
  if (null != stateFromStores) {
    code1 = stateFromStores.code;
  }
  items6[1] = code1;
  items6[2] = tmp14Result;
  const items7 = [stateFromStores, stateFromStores1];
  const callback1 = React.useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      if (null != stateFromStores) {
        code = stateFromStores.code;
      }
      const obj = flag(navigation[29]);
      obj.handleOpenShareSheet(code, stateFromStores1, flag(navigation[29]).getShareMessage(tmp14Result));
      callback(true);
      const obj2 = flag(navigation[29]);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp25 = tmp17;
      if (tmp17) {
        obj = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp22 };
        tmp25 = callback3(GuildInviteSuggestionRows, obj);
      }
      obj = { top: true, style: tmp.container };
      obj1 = { ref, style: tmp.header };
      const intl = arg1(dependencyMap[17]).intl;
      obj1.children = intl.string(arg1(dependencyMap[17]).t.OZ1qhO);
      const items8 = [callback3(arg1(dependencyMap[32]).Text, obj1), , , , ];
      obj2 = { style: tmp.description };
      const intl2 = arg1(dependencyMap[17]).intl;
      obj2.children = intl2.string(arg1(dependencyMap[17]).t.eU2ZaK);
      items8[1] = callback3(arg1(dependencyMap[32]).Text, obj2);
      let tmp31 = !tmp17;
      if (!tmp17) {
        obj3 = { source: importDefault(dependencyMap[33]), resizeMode: "contain", style: tmp.headerImage };
        tmp31 = callback3(first, obj3);
      }
      items8[2] = tmp31;
      const obj4 = { style: tmp.linkContainer };
      const obj5 = { style: tmp.linkButton, accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[17]).intl;
      obj5.accessibilityLabel = intl3.string(arg1(dependencyMap[17]).t.3XVNyt);
      obj5.onPress = function onPress() {
        flag(navigation[29]).handleCopy(stateFromStores.code, stateFromStores1, constants2.GUILD_CREATE);
        callback(true);
      };
      const obj6 = {};
      const obj7 = { flexShrink: 1 };
      obj6.style = obj7;
      obj6.children = tmp14Result;
      const items9 = [callback3(arg1(dependencyMap[32]).Text, obj6), ];
      const obj8 = { source: importDefault(dependencyMap[36]), style: tmp.linkButtonIcon };
      items9[1] = callback3(arg1(dependencyMap[35]).Icon, obj8);
      obj5.children = items9;
      const items10 = [callback4(arg1(dependencyMap[34]).PressableOpacity, obj5), , ];
      const obj9 = { style: tmp.inviteDetail };
      const obj10 = {
        channel: stateFromStores1,
        canEditInvite: true,
        callbackActionSheet: callback,
        onEdit() {
              if (flag) {
                onClose();
              }
            },
        source: constants.GUILD_CREATE
      };
      obj9.children = callback3(importDefault(dependencyMap[37]), obj10);
      items10[1] = callback3(closure_6, obj9);
      const obj11 = { style: tmp.shareButton };
      const obj12 = {};
      const intl4 = arg1(dependencyMap[17]).intl;
      obj12.text = intl4.string(arg1(dependencyMap[17]).t.Ej3B3Y);
      obj12.onPress = callback1;
      obj11.children = callback3(arg1(dependencyMap[38]).Button, obj12);
      items10[2] = callback3(closure_6, obj11);
      obj4.children = items10;
      items8[3] = callback4(closure_6, obj4);
      items8[4] = tmp25;
      obj.children = items8;
      return callback4(arg1(dependencyMap[31]).SafeAreaPaddingView, obj);
    }
  }
  return null;
};
