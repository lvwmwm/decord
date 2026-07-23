// Module ID: 11742
// Function ID: 91181
// Name: SeeMoreFooter
// Dependencies: [57, 31, 27, 11743, 1348, 8482, 1907, 10065, 9227, 653, 33, 4130, 5084, 689, 675, 5165, 4646, 1212, 11744, 1456, 4528, 566, 4539, 4559, 10064, 5087, 3976, 7001, 11737, 8481, 4324, 5121, 4126, 11747, 4660, 1273, 10177, 11748, 4543, 2]
// Exports: default

// Module 11742 (SeeMoreFooter)
import _slicedToArray from "_slicedToArray";
import SafeAreaPaddingView from "SafeAreaPaddingView";
import get_ActivityIndicator from "getInviteURL";
import { useInstantInviteSendStates as closure_8 } from "setSendState";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { CreateGuildModalStates } from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function SeeMoreFooter(openInviteSheet) {
  let obj = {};
  obj = { style: _createForOfIteratorHelperLoose().friendIcon, children: callback(require(4646) /* GroupIcon */.GroupIcon, { size: "sm" }) };
  obj.icon = callback(closure_6, obj);
  obj.onPress = openInviteSheet.openInviteSheet;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.zrLIIz);
  obj.end = true;
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  let require;
  let suggestions;
  ({ invite: require, suggestions } = openInviteSheet);
  const tmp = _createForOfIteratorHelperLoose();
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
          return outer1_19(suggestions(tmp[18]), { row: item, code: code.code, start: 0 === index });
        },
      contentContainerStyle: tmp.suggestionRowsContainer
    };
    let tmp6 = null;
    if (suggestions.length > 6) {
      obj = { openInviteSheet: openInviteSheet.openInviteSheet };
      tmp6 = callback(SeeMoreFooter, obj);
    }
    obj.ListFooterComponent = tmp6;
    obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
      return outer1_19(outer1_6, { style: tmp.separator });
    };
    obj.keyExtractor = function keyExtractor(item) {
      return item.item.id;
    };
    obj.children = callback(closure_7, obj);
    tmp7Result = callback(closure_6, obj);
    const tmp10 = closure_7;
    const tmp7 = callback;
    const tmp8 = closure_6;
    const tmp9 = callback;
  }
  return tmp7Result;
}
({ Image: closure_5, View: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.headerImage = { marginVertical: 16 };
_createForOfIteratorHelperLoose.linkContainer = { paddingHorizontal: 16, width: "100%" };
let obj1 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 12, justifyContent: "space-between" };
_createForOfIteratorHelperLoose.linkButton = obj1;
let obj2 = { flexShrink: 0, marginLeft: 8, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.linkButtonIcon = obj2;
_createForOfIteratorHelperLoose.inviteDetail = { marginTop: 8 };
_createForOfIteratorHelperLoose.shareButton = { marginVertical: 16 };
_createForOfIteratorHelperLoose.suggestionsContainer = { width: "100%", flex: 1, alignContent: "flex-start" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl };
_createForOfIteratorHelperLoose.friendIcon = obj3;
_createForOfIteratorHelperLoose.suggestionRowsContainer = { marginHorizontal: 12 };
_createForOfIteratorHelperLoose.separator = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginStart: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_DIVIDER_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginStart: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default function GuildInvite(closeOnEditInviteLink) {
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  let navigation;
  let isScreenReaderEnabled;
  let ref;
  let first;
  let closure_6;
  let stateFromStores;
  let stateFromStores1;
  let c9;
  let c10;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = flag(navigation[19]);
  navigation = obj.useNavigation();
  let obj1 = flag(navigation[20]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = ref.useRef(null);
  const tmp5 = isScreenReaderEnabled(ref.useState(false), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let obj2 = flag(navigation[21]);
  const items = [c10];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.getInvite());
  let obj3 = flag(navigation[21]);
  const items1 = [c10, c9, closure_11];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const inviteSettings = _undefined2.getInviteSettings();
    let channelId;
    if (null != inviteSettings) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return _undefined.getChannel(channelId);
    } else {
      const guildId = _undefined2.getGuildId();
      let defaultChannel = null;
      if (null != guildId) {
        defaultChannel = outer1_11.getDefaultChannel(guildId, true, outer1_17.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
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
  const first1 = isScreenReaderEnabled(ref.useState(() => outer1_12.getInviteSuggestionRows()), 1)[0];
  const tmp10 = stateFromStores1();
  c9 = tmp10;
  onClose(navigation[23])(() => {
    let obj = flag(navigation[24]);
    obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
  });
  const items3 = [tmp10, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != _undefined[stateFromStores.code]) {
        callback(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = ref.useLayoutEffect(() => {
    let obj = {};
    let intl = flag(navigation[17]).intl;
    const string = intl.string;
    const t = flag(navigation[17]).t;
    if (first) {
      let stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    obj.headerRight = flag(navigation[25]).getHeaderTextButton(stringResult, () => {
      const AccessibilityAnnouncer = flag(navigation[26]).AccessibilityAnnouncer;
      const intl = flag(navigation[17]).intl;
      AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
      outer1_1();
      let obj = onClose(navigation[14]);
      obj = { flow_type: outer2_15.GUILD_CREATE_MODAL, from_step: outer2_13.GUILD_INVITE, to_step: "modal_closed", skip: !outer1_5 };
      obj.track(outer2_14.USER_FLOW_TRANSITION, obj);
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
  const tmp14Result = onClose(navigation[27])(code);
  c10 = tmp14Result;
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
  let code1;
  const callback = ref.useCallback(() => {
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
  const callback1 = ref.useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      if (null != stateFromStores) {
        code = stateFromStores.code;
      }
      const obj = flag(navigation[29]);
      obj.handleOpenShareSheet(code, stateFromStores1, flag(navigation[29]).getShareMessage(c10));
      callback(true);
      const obj2 = flag(navigation[29]);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp25 = tmp17;
      if (tmp17) {
        obj = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp22 };
        tmp25 = callback(GuildInviteSuggestionRows, obj);
      }
      obj = { top: true, style: tmp.container };
      obj1 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
      let intl = flag(navigation[17]).intl;
      obj1.children = intl.string(flag(navigation[17]).t.OZ1qhO);
      const items8 = [callback(flag(navigation[32]).Text, obj1), , , , ];
      obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
      const intl2 = flag(navigation[17]).intl;
      obj2.children = intl2.string(flag(navigation[17]).t.eU2ZaK);
      items8[1] = callback(flag(navigation[32]).Text, obj2);
      let tmp31 = !tmp17;
      if (!tmp17) {
        obj3 = { source: onClose(navigation[33]), resizeMode: "contain", style: tmp.headerImage };
        tmp31 = callback(first, obj3);
      }
      items8[2] = tmp31;
      const obj4 = { style: tmp.linkContainer };
      const obj5 = { style: tmp.linkButton, accessibilityRole: "button" };
      const intl3 = flag(navigation[17]).intl;
      obj5.accessibilityLabel = intl3.string(flag(navigation[17]).t["3XVNyt"]);
      obj5.onPress = function onPress() {
        flag(navigation[29]).handleCopy(stateFromStores.code, stateFromStores1, outer1_16.GUILD_CREATE);
        callback(true);
      };
      const obj6 = { variant: "text-sm/medium", color: "mobile-text-heading-primary" };
      const obj7 = { flexShrink: 1 };
      obj6.style = obj7;
      obj6.children = tmp14Result;
      const items9 = [callback(flag(navigation[32]).Text, obj6), ];
      const obj8 = { source: onClose(navigation[36]), style: tmp.linkButtonIcon };
      items9[1] = callback(flag(navigation[35]).Icon, obj8);
      obj5.children = items9;
      const items10 = [callback2(flag(navigation[34]).PressableOpacity, obj5), , ];
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
      obj9.children = callback(onClose(navigation[37]), obj10);
      items10[1] = callback(closure_6, obj9);
      const obj11 = { style: tmp.shareButton };
      const obj12 = {};
      const intl4 = flag(navigation[17]).intl;
      obj12.text = intl4.string(flag(navigation[17]).t.Ej3B3Y);
      obj12.onPress = callback1;
      obj11.children = callback(flag(navigation[38]).Button, obj12);
      items10[2] = callback(closure_6, obj11);
      obj4.children = items10;
      items8[3] = callback2(closure_6, obj4);
      items8[4] = tmp25;
      obj.children = items8;
      return callback2(flag(navigation[31]).SafeAreaPaddingView, obj);
    }
  }
  return null;
};
