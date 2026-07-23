// Module ID: 15259
// Function ID: 116435
// Name: Header
// Dependencies: [31, 27, 9123, 653, 1355, 33, 4130, 689, 1457, 1557, 8829, 9009, 1212, 3981, 9302, 9124, 5449, 10111, 9131, 10093, 4574, 5607, 4066, 1324, 8303, 10123, 3984, 1273, 4662, 15260, 15277, 15295, 15312, 10386, 15316, 2]

// Module 15259 (Header)
import importAllResult from "StandaloneMembersView";
import get_ActivityIndicator from "Button";
import MIN_HEADER_HEIGHT from "MIN_HEADER_HEIGHT";
import ME from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "module_10386";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let MIDNIGHT_BORDER_WIDTH;
let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Header(channelId) {
  let guildId;
  let screenIndex;
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const isMIDNIGHTTheme = channelId.isMIDNIGHTTheme;
  const isChatInputFloating = channelId.isChatInputFloating;
  const showCreateThread = channelId.showCreateThread;
  let obj = channelId(isNavigationScreen[8]);
  const navigation = obj.useNavigation();
  const tmp2 = callback2();
  let closure_7 = tmp2;
  const top = guildId(isNavigationScreen[9])().top;
  let obj1 = channelId(isNavigationScreen[10]);
  const gradientTop = obj1.useGradientTop();
  let items = [, , , , , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3], headerWithFadingFrameMidnight: arr[4] } = tmp2);
  items[5] = gradientTop;
  items[6] = frame;
  items[7] = isMIDNIGHTTheme;
  items[8] = isChatInputFloating;
  items[9] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [tmp2.headerWrapper, gradientTop, , , , , ];
    let prop;
    if (null != frame) {
      prop = tmp2.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp2.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp2.splitDividerTop;
    }
    items[4] = splitDividerTop;
    let prop1;
    if (null != frame) {
      if (isMIDNIGHTTheme) {
        if (!isChatInputFloating) {
          prop1 = tmp2.headerWithFadingFrameMidnight;
        }
      }
    }
    items[5] = prop1;
    if (null != frame) {
      let obj = { marginTop: top, minHeight: navigation };
    } else {
      obj = { paddingTop: top, minHeight: top + navigation };
    }
    items[6] = obj;
    return items;
  }, items);
  const callback = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  const items2 = [guildId];
  obj = {};
  const memo1 = frame.useMemo(() => {
    let tmp = null != guildId;
    if (tmp) {
      tmp = guildId !== top;
    }
    return tmp;
  }, items2);
  obj.IconComponent = channelId(isNavigationScreen[11]).ServerIcon;
  const intl = channelId(isNavigationScreen[12]).intl;
  obj.label = intl.string(channelId(isNavigationScreen[12]).t.WYj55Y);
  obj.action = function action() {
    let obj = channelId(isNavigationScreen[13]);
    obj = { screen: "guilds", guildId, channelId, resetRoot: false, drawerOpen: false };
    obj.navigateToRootTab(obj);
  };
  const items3 = [obj];
  if (memo1) {
    obj = {
      triggerOnLongPress: true,
      align: "below",
      items: items3,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj["onPress"] = callback;
          return outer1_11(channelId(isNavigationScreen[15]).PressableNavigatorBackIcon, obj);
        }
    };
    let tmp7Result = tmp7(tmp8(tmp9[14]).ContextMenu, obj);
  } else {
    obj1 = { onPress: callback };
    tmp7Result = tmp7(tmp8(tmp9[15]).PressableNavigatorBackIcon, obj1);
  }
  const obj2 = {};
  let tmp13 = null;
  if (null != frame) {
    tmp13 = null;
    if (isMIDNIGHTTheme) {
      tmp13 = null;
      if (!isChatInputFloating) {
        const obj3 = {};
        const items4 = [tmp2.midnightFrameCover, ];
        const obj4 = { height: top + isChatInputFloating };
        items4[1] = obj4;
        obj3.style = items4;
        tmp13 = callback(isMIDNIGHTTheme, obj3);
      }
    }
  }
  const items5 = [tmp13, , ];
  const obj5 = { style: memo };
  const items6 = [callback(isMIDNIGHTTheme, { style: tmp2.headerBottomBorder }), ];
  const obj7 = {};
  if (!channelId.isBackEnabled) {
    const obj8 = { style: tmp2.spacer };
    tmp7Result = callback(isMIDNIGHTTheme, obj8);
  }
  const items7 = [tmp7Result, callback(guildId(isNavigationScreen[17]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), callback(guildId(isNavigationScreen[18]), { containerStyle: tmp2.actions, channelId, screenIndex, showCreateThread })];
  obj7.children = items7;
  items6[1] = closure_12(channelId(isNavigationScreen[16]).LayerScope, obj7);
  obj5.children = items6;
  items5[1] = closure_12(isMIDNIGHTTheme, obj5);
  items5[2] = frame;
  obj2.children = items5;
  return closure_12(closure_13, obj2);
}
const View = get_ActivityIndicator.View;
({ HEADER_CORNER_RADIUS: closure_5, MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_6 } = MIN_HEADER_HEIGHT);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, ME: closure_8, ThemeTypes: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let obj = { container: { flex: 1 } };
obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj.midnightContainerBorder = obj;
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.contentContainer = _createForOfIteratorHelperLoose;
obj.midnightContentContainerBorder = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
let obj2 = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
obj.containerEmpty = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { zIndex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj.headerWrapper = obj4;
let obj5 = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj5["top"] = undefined;
obj5["height"] = 1;
obj5["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj5;
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWithFadingFrame = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj6 = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
let obj7 = { borderLeftWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
let obj8 = { borderTopWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER };
obj.headerWithFadingFrameMidnight = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderTopColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
let obj9 = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderTopColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
obj.midnightFrameCover = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
let obj10 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
obj.actions = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj11 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.spacer = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj12 = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function StandaloneChannelScreen(arg0) {
  let channelId;
  let frame;
  let guildId;
  let isNavigationScreen;
  let screenIndex;
  let showCreateThread;
  ({ guildId, channelId, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  let importAllResult;
  let chatInputFloating;
  let orientation;
  let c6;
  const tmp = callback2();
  const importDefault = tmp;
  let obj = frame(1457);
  const dependencyMap = obj.useNavigation();
  let obj1 = frame(10093);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = importDefault(4574)(channelId).needSubscriptionToAccess;
  let obj2 = frame(5607);
  let tmp3 = guildId;
  if (null == guildId) {
    tmp3 = closure_7;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp3);
  const tmp6 = importDefault(4066)() === constants.MIDNIGHT;
  importAllResult = tmp6;
  let obj3 = frame(1324);
  chatInputFloating = obj3.useMobileVisualRefreshConfig({ location: "StandaloneChannelScreen" }).chatInputFloating;
  let obj4 = frame(8303);
  orientation = obj4.useOrientation();
  let items = [frame, tmp6, chatInputFloating, orientation, , ];
  ({ container: arr[4], midnightContainerBorder: arr[5] } = tmp);
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.container, ];
    let prop;
    if (null == frame) {
      if (c3) {
        if (!chatInputFloating) {
          prop = tmp.midnightContainerBorder;
        }
      }
    }
    items[1] = prop;
    return items;
  }, items);
  const items1 = [frame, tmp6, chatInputFloating, , , ];
  ({ contentContainer: arr2[3], splitDivider: arr2[4], midnightContentContainerBorder: arr2[5] } = tmp);
  const memo1 = importAllResult.useMemo(() => {
    const items = [tmp.contentContainer, , ];
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[1] = splitDivider;
    let prop;
    if (null != frame) {
      if (c3) {
        if (!chatInputFloating) {
          prop = tmp.midnightContentContainerBorder;
        }
      }
    }
    items[2] = prop;
    return items;
  }, items1);
  let obj5 = frame(10123);
  const isForumChannelSearchActive = obj5.useIsForumChannelSearchActive(channelId);
  const tmp11 = (!importDefault(3984)().isChatLockedOpen || isNavigationScreen) && !isForumChannelSearchActive;
  c6 = tmp11;
  if (null != channelId) {
    if (null != guildId) {
      obj = { channelId, frame, guildId, isNavigationScreen, screenIndex, isMIDNIGHTTheme: tmp6, isChatInputFloating: chatInputFloating, showCreateThread, isBackEnabled: tmp11 };
      const tmp52 = callback(Header, obj);
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            obj = { style: memo };
            const items2 = [tmp52, ];
            obj1 = { style: memo1 };
            let tmp36 = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId };
              tmp36 = callback(importDefault(15277), obj2);
            }
            obj1.children = tmp36;
            items2[1] = callback(chatInputFloating, obj1);
            obj.children = items2;
            return closure_12(chatInputFloating, obj);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            obj3 = { guildId };
            return callback(importDefault(15295), obj3);
          } else if (showCreateThread) {
            obj4 = { style: memo1 };
            const items3 = [tmp52, ];
            obj5 = { channelId, screenIndex };
            items3[1] = callback(frame(15312).CreateThreadView, obj5);
            obj4.children = items3;
            return tmp55(chatInputFloating, obj4);
          } else {
            const obj6 = {};
            const items4 = [tmp52, ];
            const obj7 = { style: memo1 };
            const obj8 = { guildId, channelId, chatInputRef: ref, screenIndex };
            obj7.children = callback(importDefault(10386), obj8);
            items4[1] = callback(chatInputFloating, obj7);
            obj6.children = items4;
            const tmp55Result = tmp55(closure_13, obj6);
            if (isSwipeToMemberListEnabled) {
              const obj9 = { style: memo, channelId, screenIndex, isBackEnabled: tmp11, children: tmp55Result };
              let tmp20Result = tmp20(importDefault(15316), obj9);
            } else {
              const obj10 = {
                style: memo,
                accessible: false,
                onAccessibilityEscape() {
                              if (c6) {
                                navigation.goBack();
                              }
                            },
                children: tmp55Result
              };
              tmp20Result = tmp20(chatInputFloating, obj10);
            }
            return tmp20Result;
          }
        }
      }
      const obj11 = { style: memo };
      const items5 = [tmp52, ];
      const obj12 = { style: memo1 };
      const obj13 = { absolute: true };
      const items6 = [callback(importDefault(4662), obj13), ];
      const obj14 = { guildId };
      let tmp49;
      if (needSubscriptionToAccess) {
        tmp49 = channelId;
      }
      obj14.gatedChannelId = tmp49;
      items6[1] = callback(importDefault(15260), obj14);
      obj12.children = items6;
      items5[1] = closure_12(chatInputFloating, obj12);
      obj11.children = items5;
      return closure_12(chatInputFloating, obj11);
    }
  }
  const obj15 = { style: items7 };
  items7 = [memo, tmp.containerEmpty];
  const obj16 = {};
  const intl = frame(1212).intl;
  obj16.title = intl.string(frame(1212).t.ai6Lbr);
  const intl2 = frame(1212).intl;
  obj16.body = intl2.string(frame(1212).t["LTr+x9"]);
  obj15.children = callback(frame(1273).EmptyState, obj16);
  return callback(chatInputFloating, obj15);
});
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
