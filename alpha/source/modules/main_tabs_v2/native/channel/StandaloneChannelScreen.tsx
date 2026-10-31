// Module ID: 18596
// Function ID: 18597
// Name: StandaloneChannelScreen
// Dependencies: [19, 17, 4863, 9813, 1072, 4870, 21, 5014, 575, 1498, 1625, 9821, 504, 4888, 9758, 1113, 5198, 9874, 9814, 5611, 11319, 14558, 9824, 18597, 11537, 6045, 7397, 5253, 5201, 11346, 6878, 9829, 1187, 10736, 18602, 18619, 18636, 12070, 18654, 18658, 11214, 18674, 18675, 13705, 2]

// Module 18596 (StandaloneChannelScreen)
import nativeDefault from "native" /* 575 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import FavoritesUtils from "FavoritesUtils" /* 4888 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import PressableNavigatorBackIcon2 from "PressableNavigatorBackIcon" /* 9814 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import react_native_mod2 from "react-native" /* 9813 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
let metroRequire;
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
  let items8;
  let measureNavigationTTI;
  let screenIndex;
  let tmp13;
  let tmp13Result2;
  let tmp13Result3;
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  let tmp = channelId;
  const tmp2 = isNavigationScreen;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  let obj = channelId(isNavigationScreen[9]);
  navigation = obj.useNavigation();
  const tmp4 = closure_15();
  const headerWrapper = tmp4;
  const top = guildId(isNavigationScreen[10])().top;
  let obj2 = channelId(isNavigationScreen[11]);
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
      obj = { marginTop: top, minHeight: metroRequire };
      const obj2 = { marginTop: top, minHeight: metroRequire };
    } else {
      obj = { paddingTop: top, minHeight: top + metroRequire };
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
  const items2 = [headerWrapper];
  const items3 = [guildId, channelId];
  const obj3 = channelId(isNavigationScreen[12]);
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
    IconComponent: channelId(isNavigationScreen[14]).ServerIcon,
    label: intl.string(channelId(isNavigationScreen[15]).t.WYj55Y),
    action() {
      const obj = NavigationRouteUtils;
      const obj2 = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
      obj.navigateToRootTab(obj2);
    }
  };
  const memo1 = frame.useMemo(() => null != stateFromStores && tmp !== React4, items4);
  intl = channelId(isNavigationScreen[15]).intl;
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
          return authStore2(PressableNavigatorBackIcon, obj);
        }
    };
    tmp13Result2 = tmp11(tmp(tmp2[17]).ContextMenu, obj5);
    tmp13 = tmp11;
  } else {
    const obj6 = { onPress };
    tmp13Result2 = tmp11(tmp(tmp2[18]).PressableNavigatorBackIcon, obj6);
    tmp13 = tmp11;
  }
  const items6 = [, ];
  const obj7 = { style: tmp4.headerBottomBorder };
  items6[0] = tmp13(navigation, obj7);
  const LayerScope = tmp(tmp2[19]).LayerScope;
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result2 = tmp13(tmp16, obj8);
  }
  const items7 = [tmp13Result2, , , ];
  let tmp13Result = null;
  if (!showCreateThread) {
    const obj9 = { channelId };
    tmp13Result = tmp13(tmp(tmp2[20]).PinotMemberNoticeHeaderArrow, obj9);
  }
  const obj10 = { children: items6 };
  const obj11 = { children: items7 };
  items7[1] = tmp13Result;
  items7[2] = tmp13(guildId(tmp2[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  const obj12 = { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread };
  items7[3] = tmp13(guildId(tmp2[22]), obj12);
  items6[1] = closure_13(LayerScope, obj11);
  const tmp14Result = closure_13(closure_14, obj10);
  if (measureNavigationTTI) {
    const obj13 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    tmp13Result3 = tmp13(tmp(tmp2[23]).NavTTIView, obj13);
  } else {
    const obj14 = { style: memo, children: tmp14Result };
    tmp13Result3 = tmp13(tmp16, obj14);
  }
  const obj15 = { children: items8 };
  items8 = [tmp13Result3, frame];
  return closure_13(closure_14, obj15);
}
let react = react_mod;
let react_native = react_native_mod2;
({ View: closure_4, StyleSheet } = react_native);
react_native = react_native_mod2;
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroRequire } = react_native);
({ ChannelTypes: metroImportDefault, EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, ME: c9, ThemeTypes: c10 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, onyxContainerBorder: obj2, contentContainer: obj3, containerEmpty: obj4, headerWrapper: obj5, headerBottomBorder: obj6, headerWithFadingFrame: obj7, splitDivider: obj8, splitDividerTop: obj9, actions: obj10, spacer: obj11 };
obj2 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj4 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj5 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0, overflow: "visible" };
obj6 = { top: undefined, height: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj8 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj9 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj10 = { marginRight: nativeDefault.space.PX_16 };
obj11 = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function StandaloneChannelScreen(isActive) {
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
  let items11;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj16;
  let obj20;
  let obj28;
  let screenIndex;
  let showCreateThread;
  let tmp43Result;
  let tmp51;
  ({ guildId, channelId } = isActive);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = isActive);
  ({ showCreateThread, screenIndex } = isActive);
  let closure_4;
  let isChatBesideChannelList;
  let closure_6;
  isActive = isActive.isActive;
  let tmp = closure_15();
  dependencyMap = tmp;
  const obj = channelId(1498);
  react = obj.useNavigation();
  const obj2 = channelId(11537);
  const isSwipeToMemberListEnabled = obj2.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(6045)(channelId).needSubscriptionToAccess;
  let tmp7 = guildId;
  const useCanSeeOnboardingHome = channelId(7397).useCanSeeOnboardingHome;
  channelId(7397);
  if (guildId == null) {
    tmp7 = closure_8;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp7);
  const ref = react.useRef(null);
  const tmp10 = frame(5253)() === constants2.ONYX;
  closure_4 = tmp10;
  const tmp11 = frame(5201)();
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
  const tmp2Result = channelId(11346);
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp15 = isNavigationScreen;
  }
  if (tmp15) {
    tmp15 = !isForumChannelSearchActive;
  }
  closure_6 = tmp15;
  const items2 = [isChatBesideChannelList];
  const items3 = [channelId];
  const tmp2Result4 = channelId(504);
  const stateFromStores = tmp2Result4.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  let type;
  const tmp2Result5 = channelId(6878);
  const dMAppChannelApplicationId = tmp2Result5.useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp21 = null;
  const useDismissChannelSecondaryViewChatOnFrameDeepLink = tmp2(9829).useDismissChannelSecondaryViewChatOnFrameDeepLink;
  channelId(9829);
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp21 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink = useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp21);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj3 = { style: memo, children: items4 };
            const obj4 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
            items4 = [closure_12(Header, obj4), ];
            const obj5 = { style: memo1, children: tmp43Result };
            tmp43Result = null;
            const tmp41 = closure_13;
            if (canSeeOnboardingHome) {
              const obj6 = { guildId };
              tmp43Result = tmp43(tmp5(18619), obj6);
            }
            items4[1] = closure_12(closure_4, obj5);
            return tmp41(closure_4, obj3);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj7 = { style: tmp.container, children: items5 };
            items5 = [closure_12(frame(10736), { absolute: true }), ];
            const obj8 = { guildId };
            items5[1] = closure_12(frame(18636), obj8);
            return closure_13(closure_4, obj7);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj9 = { guildId, inline: true };
            return closure_12(frame(12070), obj9);
          } else if (showCreateThread) {
            const obj10 = { style: memo1, children: items6 };
            const obj11 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
            items6 = [closure_12(Header, obj11), ];
            const obj12 = { channelId, screenIndex };
            items6[1] = closure_12(channelId(18654).CreateThreadView, obj12);
            return closure_13(closure_4, obj10);
          } else {
            let tmp25Result;
            if (null != stateFromStores) {
              if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
                const obj13 = { style: memo, children: items7 };
                const obj14 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
                items7 = [closure_12(Header, obj14), ];
                const obj15 = { style: memo1, children: closure_12(frame(18658), obj16) };
                obj16 = { channel: stateFromStores };
                items7[1] = closure_12(closure_4, obj15);
                return closure_13(closure_4, obj13);
              }
            }
            const obj17 = { children: items8 };
            const obj18 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: true };
            items8 = [closure_12(Header, obj18), ];
            const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: closure_12(frame(11214), obj20) };
            const NavTTIView = tmp2(18597).NavTTIView;
            obj20 = { guildId, channelId, isActive, chatInputRef: ref, screenIndex };
            items8[1] = closure_12(NavTTIView, obj19);
            const tmp27 = closure_13(closure_14, obj17);
            if (isSwipeToMemberListEnabled) {
              const obj21 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp15, children: tmp27 };
              tmp25Result = tmp25(tmp5(18674), obj21);
            } else {
              const obj22 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(13705).CHANNEL_NAVIGATION_TTI,
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
                children: tmp27
              };
              const NavTTISurfaceProvider = tmp2(18675).NavTTISurfaceProvider;
              tmp25Result = tmp25(NavTTISurfaceProvider, obj22);
            }
            return tmp25Result;
          }
        }
      }
      const obj23 = { style: memo, children: items9 };
      const obj24 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
      items9 = [closure_12(Header, obj24), ];
      const obj25 = { style: memo1, children: items10 };
      items10 = [closure_12(frame(10736), { absolute: true }), ];
      const obj26 = { guildId, gatedChannelId: tmp51 };
      tmp51 = undefined;
      const tmp48 = closure_12;
      const tmp5Result = frame(18602);
      if (needSubscriptionToAccess) {
        tmp51 = channelId;
      }
      items10[1] = tmp48(tmp5Result, obj26);
      items9[1] = closure_13(closure_4, obj25);
      return closure_13(closure_4, obj23);
    }
  }
  const obj27 = { style: items11, children: closure_12(EmptyState, obj28) };
  items11 = [memo, tmp.containerEmpty];
  obj28 = { title: intl.string(channelId(1113).t.ai6Lbr), body: intl2.string(channelId(1113).t["LTr+x9"]) };
  EmptyState = tmp2(1187).EmptyState;
  intl = tmp2(1113).intl;
  intl2 = tmp2(1113).intl;
  return closure_12(closure_4, obj27);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
