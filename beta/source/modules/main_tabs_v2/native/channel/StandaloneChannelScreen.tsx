// Module ID: 16174
// Function ID: 16175
// Name: StandaloneChannelScreen
// Dependencies: [19, 17, 12827, 2045, 7289, 1074, 2052, 21, 4836, 576, 1486, 1613, 7297, 504, 2070, 8587, 1115, 4692, 7358, 7290, 6577, 12840, 7300, 16175, 11004, 5314, 6643, 4767, 4695, 12852, 5370, 1177, 5437, 16184, 16201, 16219, 16236, 16427, 16431, 10882, 16435, 16436, 16437, 2]

// Module 16174 (StandaloneChannelScreen)
import nativeDefault from "native" /* 576 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import PressableNavigatorBackIcon2 from "PressableNavigatorBackIcon" /* 7290 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12827 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import react_native_mod2 from "react-native" /* 7289 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let ONYX_BORDER_WIDTH;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let map1;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function Header(channelId) {
  let guildId;
  let intl;
  let isBackEnabled;
  let items7;
  let items8;
  let measureNavigationTTI;
  let screenIndex;
  let tmp13;
  let tmp13Result;
  let tmp13Result1;
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  let tmp = channelId;
  const tmp2 = isNavigationScreen;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  let obj = channelId(isNavigationScreen[10]);
  navigation = obj.useNavigation();
  const tmp4 = closure_15();
  const headerWrapper = tmp4;
  const top = guildId(isNavigationScreen[11])().top;
  let obj2 = channelId(isNavigationScreen[12]);
  const gradientTop = obj2.useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const memo = frame.useMemo(() => {
    let obj;
    const items = [headerWrapper.headerWrapper, gradientTop, , , , ];
    let prop;
    if (null != frame) {
      prop = tmp.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp.splitDividerTop;
    }
    items[4] = splitDividerTop;
    if (null != frame) {
      obj = { marginTop: top, minHeight: metroImportDefault };
      const obj2 = { marginTop: top, minHeight: metroImportDefault };
    } else {
      obj = { paddingTop: top, minHeight: top + metroImportDefault };
    }
    items[5] = obj;
    return items;
  }, items);
  const items1 = [navigation, isNavigationScreen];
  const onPress = frame.useCallback(() => {
    const tmp = isNavigationScreen;
    if (tmp) {
      navigation.goBack();
    }
  }, items1);
  const items2 = [top];
  const items3 = [guildId, channelId];
  const obj3 = channelId(isNavigationScreen[13]);
  const stateFromStores = obj3.useStateFromStores(items2, () => {
    let tmp = guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp = guild_id;
    }
    return tmp;
  }, items3);
  const items4 = [stateFromStores];
  const obj4 = {
    IconComponent: channelId(isNavigationScreen[15]).ServerIcon,
    label: intl.string(channelId(isNavigationScreen[16]).t.WYj55Y),
    action() {
      const obj = NavigationRouteUtils;
      const obj2 = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
      obj.navigateToRootTab(obj2);
    }
  };
  const memo1 = frame.useMemo(() => null != stateFromStores && tmp !== React4, items4);
  intl = channelId(isNavigationScreen[16]).intl;
  const items5 = [obj4];
  if (memo1) {
    const obj5 = {
      triggerOnLongPress: true,
      align: "below",
      items: items5,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref, onPress };
          const PressableNavigatorBackIcon = PressableNavigatorBackIcon2.PressableNavigatorBackIcon;
          const merged1 = Object.assign(merged);
          return closure_12(PressableNavigatorBackIcon, obj);
        }
    };
    tmp13Result1 = tmp11(tmp(tmp2[18]).ContextMenu, obj5);
    tmp13 = tmp11;
  } else {
    const obj6 = { onPress };
    tmp13Result1 = tmp11(tmp(tmp2[19]).PressableNavigatorBackIcon, obj6);
    tmp13 = tmp11;
  }
  const items6 = [, ];
  const obj7 = { style: tmp4.headerBottomBorder };
  items6[0] = tmp13(navigation, obj7);
  const LayerScope = tmp(tmp2[20]).LayerScope;
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result1 = tmp13(tmp16, obj8);
  }
  const obj10 = { children: items7 };
  const obj9 = { children: items6 };
  items7 = [tmp13Result1, tmp13(tmp5(tmp2[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), ];
  const obj11 = { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread };
  items7[2] = tmp13(guildId(tmp2[22]), obj11);
  items6[1] = closure_13(LayerScope, obj10);
  const tmp14Result = closure_13(closure_14, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp(tmp2[23]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj13);
  }
  const obj14 = { children: items8 };
  items8 = [tmp13Result, frame];
  return closure_13(closure_14, obj14);
}
let react = react_mod;
let react_native = react_native_mod2;
({ View: closure_4, StyleSheet } = react_native);
react_native = react_native_mod2;
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroImportDefault } = react_native);
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, ME: c9, ThemeTypes: c10 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, onyxContainerBorder: obj2, contentContainer: obj3, containerEmpty: obj4, headerWrapper: obj5, headerBottomBorder: obj6, headerWithFadingFrame: obj7, splitDivider: obj8, splitDividerTop: obj9, actions: obj10, spacer: obj11 };
obj2 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj4 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj5 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj6 = { top: undefined, height: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj8 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj9 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj10 = { marginRight: nativeDefault.space.PX_16 };
obj11 = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function StandaloneChannelScreen(arg0) {
  let EmptyState;
  let channelId;
  let closure_2;
  let frame;
  let guildId;
  let intl;
  let intl2;
  let isNavigationScreen;
  let isNavigationTTIVisible;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj19;
  let obj27;
  let screenIndex;
  let showCreateThread;
  let tmp33Result;
  let tmp41;
  ({ guildId, channelId } = arg0);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  let closure_4;
  let isChatBesideChannelList;
  let closure_6;
  let tmp = closure_15();
  dependencyMap = tmp;
  const obj = channelId(1486);
  react = obj.useNavigation();
  const obj2 = channelId(11004);
  const isSwipeToMemberListEnabled = obj2.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5314)(channelId).needSubscriptionToAccess;
  let tmp7 = guildId;
  const useCanSeeOnboardingHome = channelId(6643).useCanSeeOnboardingHome;
  channelId(6643);
  if (guildId == null) {
    tmp7 = closure_8;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp7);
  const ref = react.useRef(null);
  const tmp10 = frame(4767)() === constants.ONYX;
  closure_4 = tmp10;
  const tmp11 = frame(4695)();
  isChatBesideChannelList = tmp11.isChatBesideChannelList;
  const isChatLockedOpen = tmp11.isChatLockedOpen;
  let items = [frame, tmp10, isChatBesideChannelList, , ];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = react.useMemo(() => {
    const items = [closure_2.container, ];
    let onyxContainerBorder;
    if (null == frame) {
      if (closure_4) {
        if (!isChatBesideChannelList) {
          onyxContainerBorder = tmp.onyxContainerBorder;
        }
      }
    }
    items[1] = onyxContainerBorder;
    return items;
  }, items);
  const items1 = [frame, , ];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = react.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  let tmp15 = !isChatLockedOpen;
  const tmp2Result = channelId(12852);
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp15 = isNavigationScreen;
  }
  if (tmp15) {
    tmp15 = !isForumChannelSearchActive;
  }
  closure_6 = tmp15;
  const items2 = [closure_6];
  const items3 = [channelId];
  const tmp2Result4 = channelId(504);
  const stateFromStores = tmp2Result4.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  const tmp2Result5 = channelId(5370);
  const isVibegrationsChannelCandidate = tmp2Result5.useIsVibegrationsChannelCandidate(stateFromStores, "StandaloneChannelScreen");
  channelId(504);
  [][0] = channelId;
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj3 = { style: memo, children: items4 };
            const obj4 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
            items4 = [closure_12(Header, obj4), ];
            const obj5 = { style: memo1, children: tmp33Result };
            tmp33Result = null;
            const tmp31 = closure_13;
            if (canSeeOnboardingHome) {
              const obj6 = { guildId };
              tmp33Result = tmp33(tmp5(16201), obj6);
            }
            items4[1] = closure_12(closure_4, obj5);
            return tmp31(closure_4, obj3);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj7 = { guildId };
            return closure_12(frame(16219), obj7);
          } else if (channelId === StaticChannelRoute.VIBEGRATIONS) {
            const obj8 = { guildId };
            return closure_12(frame(16236), obj8);
          } else {
            if (isVibegrationsChannelCandidate) {
              if (!tmp19) {
                if (null != stateFromStores) {
                  const obj10 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
                  const obj9 = { style: memo, children: items5 };
                  items5 = [closure_12(Header, obj10), ];
                  const obj11 = { style: memo1, children: closure_12(frame(16427), obj12) };
                  obj12 = { channel: stateFromStores };
                  items5[1] = closure_12(closure_4, obj11);
                  return closure_13(closure_4, obj9);
                }
              }
            }
            if (showCreateThread) {
              const obj13 = { style: memo1, children: items6 };
              const obj14 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
              items6 = [closure_12(Header, obj14), ];
              const obj15 = { channelId, screenIndex };
              items6[1] = closure_12(channelId(16431).CreateThreadView, obj15);
              return closure_13(closure_4, obj13);
            } else {
              let tmp22Result;
              const obj16 = { children: items7 };
              const obj17 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: true };
              items7 = [closure_12(Header, obj17), ];
              const obj18 = { name: "chat_container", tracking: "include", style: memo1, children: closure_12(frame(10882), obj19) };
              const NavTTIView = tmp2(16175).NavTTIView;
              obj19 = { guildId, channelId, chatInputRef: ref, screenIndex };
              items7[1] = closure_12(NavTTIView, obj18);
              const tmp20Result = closure_13(closure_14, obj16);
              if (isSwipeToMemberListEnabled) {
                const obj20 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp15, children: tmp20Result };
                tmp22Result = tmp22(tmp5(16435), obj20);
              } else {
                const obj21 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: channelId(16437).CHANNEL_NAVIGATION_TTI,
                  visibilityMode: "prerendered",
                  isVisible: isNavigationTTIVisible,
                  descendantTracking: "included",
                  accessible: false,
                  onAccessibilityEscape() {
                                  const tmp = closure_6;
                                  if (tmp) {
                                    navigation.goBack();
                                  }
                                },
                  style: memo,
                  children: tmp20Result
                };
                const NavTTISurfaceProvider = tmp2(16436).NavTTISurfaceProvider;
                tmp22Result = tmp22(NavTTISurfaceProvider, obj21);
              }
              return tmp22Result;
            }
          }
        }
      }
      const obj22 = { style: memo, children: items8 };
      const obj23 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
      items8 = [closure_12(Header, obj23), ];
      const obj24 = { style: memo1, children: items9 };
      items9 = [closure_12(frame(5437), { absolute: true }), ];
      const obj25 = { guildId, gatedChannelId: tmp41 };
      tmp41 = undefined;
      const tmp38 = closure_12;
      const tmp5Result = frame(16184);
      if (needSubscriptionToAccess) {
        tmp41 = channelId;
      }
      items9[1] = tmp38(tmp5Result, obj25);
      items8[1] = closure_13(closure_4, obj24);
      return closure_13(closure_4, obj22);
    }
  }
  const obj26 = { style: items10, children: closure_12(EmptyState, obj27) };
  items10 = [memo, tmp.containerEmpty];
  obj27 = { title: intl.string(channelId(1115).t.ai6Lbr), body: intl2.string(channelId(1115).t["LTr+x9"]) };
  EmptyState = tmp2(1177).EmptyState;
  intl = tmp2(1115).intl;
  intl2 = tmp2(1115).intl;
  return closure_12(closure_4, obj26);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
