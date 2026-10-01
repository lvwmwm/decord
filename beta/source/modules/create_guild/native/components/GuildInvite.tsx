// Module ID: 12227
// Function ID: 12228
// Name: GuildInvite
// Dependencies: [32, 19, 17, 9349, 2045, 9276, 4467, 9288, 6399, 1074, 21, 4836, 5994, 576, 1241, 5917, 5403, 1115, 9348, 1485, 5266, 504, 5275, 5298, 9302, 5936, 4685, 7178, 12205, 9275, 5016, 6544, 4832, 12228, 5435, 1177, 9315, 9346, 5281, 2]
// Exports: default

// Module 12227 (GuildInvite)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import react_native from "react-native" /* 5275 */;
import GroupIcon from "GroupIcon" /* 5403 */;
import TableRow2 from "TableRow" /* 5917 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9302 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9348 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9349 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12205 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9276 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9288 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let defaultChannel, navigation;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function SeeMoreFooter(openInviteSheet) {
  let intl;
  let obj2;
  openInviteSheet = openInviteSheet.openInviteSheet;
  const obj = { icon: closure_19(metroRequire, obj2), onPress: openInviteSheet, label: intl.string(intl5.t.zrLIIz), end: true };
  obj2 = { style: closure_21().friendIcon, children: closure_19(GroupIcon.GroupIcon, { size: "sm" }) };
  const TableRow = TableRow2.TableRow;
  intl = intl5.intl;
  return closure_19(TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  let code;
  let obj3;
  let suggestions;
  let tmp6Result;
  let tmp8;
  ({ invite: require, suggestions } = openInviteSheet);
  openInviteSheet = openInviteSheet.openInviteSheet;
  const tmp = closure_21();
  const separator = tmp;
  [][0] = suggestions;
  let tmp6Result2 = null;
  if (0 !== suggestions.length) {
    const obj2 = { style: tmp.suggestionsContainer, children: closure_19(tmp8, obj3) };
    obj3 = {
      data: tmp2,
      renderItem(arg0) {
          let index;
          let item;
          ({ item, index } = arg0);
          const obj = { row: item, code: require.code, start: 0 === index };
          return closure_19(InstantInviteRowDefault, obj);
        },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: tmp6Result,
      ItemSeparatorComponent() {
          const obj = { style: separator.separator };
          return closure_19(metroRequire, obj);
        },
      keyExtractor(item) {
          return item.item.id;
        }
    };
    tmp6Result = null;
    const tmp7 = closure_6;
    tmp8 = closure_7;
    if (suggestions.length > 6) {
      let obj = { openInviteSheet };
      tmp6Result = tmp6(SeeMoreFooter, obj);
    }
    tmp6Result2 = tmp6(tmp7, obj2);
  }
  return tmp6Result2;
}
({ Image: hasOwnProperty, View: metroRequire, FlatList: metroImportDefault, StyleSheet } = react_native2);
let closure_8 = InstantInviteSendStateStore.useInstantInviteSendStates;
const CreateGuildModalStates = CreateGuildConstants.CreateGuildModalStates;
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = Constants);
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" }, headerImage: { marginVertical: 16 }, linkContainer: { paddingHorizontal: 16, width: "100%" }, linkButton: obj3, linkButtonIcon: obj4, inviteDetail: { marginTop: 8 }, shareButton: { marginVertical: 16 }, suggestionsContainer: { width: "100%", flex: 1, alignContent: "flex-start" }, friendIcon: size, suggestionRowsContainer: { marginHorizontal: 12 }, separator: obj5 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
obj4 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj5 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_21 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default function GuildInvite(closeOnEditInviteLink) {
  let Button;
  let constants4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let inviteSuggestionRows;
  let items10;
  let items8;
  let items9;
  let obj15;
  let obj17;
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  navigation = undefined;
  let ref;
  let channel;
  let closure_10;
  let tmp = closure_21();
  let tmp2 = flag;
  let tmp3 = navigation;
  let obj = flag(navigation[19]);
  navigation = obj.useNavigation();
  let obj2 = flag(navigation[20]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = ref;
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  let closure_6 = tmp7[1];
  let obj4 = flag(navigation[21]);
  const items = [closure_10];
  const stateFromStores = obj4.useStateFromStores(items, () => closure_10.getInvite());
  const items1 = [closure_10, channel, GuildChannelStore];
  const obj5 = flag(navigation[21]);
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    const inviteSettings = closure_10.getInviteSettings();
    let channelId;
    const obj = closure_10;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return channel.getChannel(channelId);
    } else {
      const guildId = obj.getGuildId();
      defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = stateFromStores1();
  channel = tmp12;
  onClose(navigation[23])(() => {
    const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
    InviteSuggestionsActionCreators;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
  });
  const items3 = [tmp12, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != channel[tmp.code]) {
        closure_6(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = ref.useLayoutEffect(() => {
    let stringResult;
    const setOptions = navigation.setOptions;
    const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
    let intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    if (first) {
      stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    let obj = {
      headerRight: getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[26]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = flag(navigation[17]).intl;
        announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        const tmp3 = !first;
        const obj = onClose(navigation[14]);
        const obj2 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: tmp3 };
        obj.track(constants2.USER_FLOW_TRANSITION, obj2);
      }),
      headerLeft() {
        return null;
      }
    };
    setOptions(obj);
  }, items4);
  let code;
  const tmp17 = onClose(navigation[27]);
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const tmp17Result = tmp17(code);
  closure_10 = tmp17Result;
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
  let code1;
  const callback = obj3.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = CreateGuildModalActionCreatorsDefault;
      const result = obj.openGuildInviteScreen(tmp);
    }
  }, items5);
  const useCallback = obj3.useCallback;
  if (stateFromStores != null) {
    code1 = stateFromStores.code;
  }
  items6[1] = code1;
  items6[2] = tmp17Result;
  const items7 = [stateFromStores, stateFromStores1];
  const callback1 = useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      const handleOpenShareSheet = instant_invite_InstantInviteUtils.handleOpenShareSheet;
      instant_invite_InstantInviteUtils;
      const tmp2 = require;
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const tmp2Result = tmp2(9275);
      handleOpenShareSheet(code, tmp, tmp2Result.getShareMessage(closure_10));
      closure_6(true);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp27 = tmp20;
      if (tmp27) {
        const obj6 = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp24 };
        tmp27 = closure_19(GuildInviteSuggestionRows, obj6);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: items8 };
      const SafeAreaPaddingView = tmp2(tmp3[31]).SafeAreaPaddingView;
      const obj7 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[17]).t.OZ1qhO) };
      const Text = tmp2(tmp3[32]).Text;
      intl = tmp2(tmp3[17]).intl;
      items8 = [closure_19(Text, obj7), , , , ];
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp2(tmp3[17]).t.eU2ZaK) };
      const Text2 = tmp2(tmp3[32]).Text;
      intl2 = tmp2(tmp3[17]).intl;
      items8[1] = closure_19(Text2, obj8);
      let tmp29Result = !tmp20;
      if (tmp29Result) {
        const obj9 = { source: onClose(tmp3[33]), resizeMode: "contain", style: tmp.headerImage };
        tmp29Result = tmp29(first, obj9);
      }
      items8[2] = tmp29Result;
      const obj10 = { style: tmp.linkContainer, children: items10 };
      const obj11 = {
        style: tmp.linkButton,
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(tmp2(tmp3[17]).t["3XVNyt"]),
        onPress() {
              const obj = instant_invite_InstantInviteUtils;
              obj.handleCopy(stateFromStores.code, stateFromStores1, constants.GUILD_CREATE);
              closure_6(true);
            },
        children: items9
      };
      const PressableOpacity = tmp2(tmp3[34]).PressableOpacity;
      intl3 = tmp2(tmp3[17]).intl;
      const obj12 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: tmp17Result };
      items9 = [closure_19(tmp2(tmp3[32]).Text, obj12), ];
      const obj13 = { source: onClose(tmp3[36]), style: tmp.linkButtonIcon };
      const Icon = tmp2(tmp3[35]).Icon;
      items9[1] = closure_19(Icon, obj13);
      items10 = [closure_20(PressableOpacity, obj11), , ];
      const obj14 = { style: tmp.inviteDetail, children: closure_19(onClose(tmp3[37]), obj15) };
      obj15 = {
        channel: stateFromStores1,
        canEditInvite: true,
        callbackActionSheet: callback,
        onEdit() {
              const tmp = flag;
              if (tmp) {
                onClose();
              }
            },
        source: constants2.GUILD_CREATE
      };
      items10[1] = closure_19(closure_6, obj14);
      const obj16 = { style: tmp.shareButton, children: closure_19(Button, obj17) };
      obj17 = { text: intl4.string(tmp2(tmp3[17]).t.Ej3B3Y), onPress: callback1 };
      Button = tmp2(tmp3[38]).Button;
      intl4 = tmp2(tmp3[17]).intl;
      items10[2] = closure_19(closure_6, obj16);
      items8[3] = closure_20(closure_6, obj10);
      items8[4] = tmp27;
      return closure_20(SafeAreaPaddingView, rect);
    }
  }
  return null;
};
