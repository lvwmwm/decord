// Module ID: 18393
// Function ID: 18394
// Name: StandaloneChannelScreen
// Dependencies: [19, 17, 4892, 9006, 1071, 4899, 21, 5043, 575, 1629, 9014, 504, 4917, 11446, 1112, 5219, 9068, 9007, 5621, 11883, 14094, 9017, 18394, 1502, 11968, 7081, 7580, 5252, 5222, 11907, 6968, 9022, 1186, 10592, 18399, 13804, 18416, 18433, 18451, 18924, 18928, 11781, 18940, 18941, 12961, 2]

// Module 18393 (StandaloneChannelScreen)
import nativeDefault from "native" /* 575 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import FavoritesUtils from "FavoritesUtils" /* 4917 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import PressableNavigatorBackIcon2 from "PressableNavigatorBackIcon" /* 9007 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import react_native_mod2 from "react-native" /* 9006 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let constants, navigation;

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
  let isNavigationScreen;
  let items7;
  let measureNavigationTTI;
  let onBackPress;
  let screenIndex;
  let showCreateThread;
  let tmp11;
  let tmp11Result2;
  let tmp11Result3;
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const frame = channelId.frame;
  ({ showCreateThread, onBackPress } = channelId);
  ({ isNavigationScreen, isBackEnabled, measureNavigationTTI } = channelId);
  let tmp = closure_15();
  const headerWrapper = tmp;
  const tmp2 = guildId;
  const top = guildId(frame[9])().top;
  let obj = channelId(frame[10]);
  const gradientTop = obj.useGradientTop();
  let items = [, , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDividerTop: arr[2] } = tmp);
  items[3] = gradientTop;
  items[4] = frame;
  items[5] = top;
  const memo = onBackPress.useMemo(() => {
    let obj;
    const items = [headerWrapper.headerWrapper, gradientTop, , , ];
    let prop;
    if (null != frame) {
      prop = tmp.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp.splitDividerTop;
    }
    items[3] = splitDividerTop;
    if (null != frame) {
      obj = { marginTop: top, minHeight: metroRequire };
      const obj2 = { marginTop: top, minHeight: metroRequire };
    } else {
      obj = { paddingTop: top, minHeight: top + metroRequire };
    }
    items[4] = obj;
    return items;
  }, items);
  let obj2 = channelId(frame[11]);
  const items1 = [top];
  const items2 = [guildId, channelId];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
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
  }, items2);
  const items3 = [stateFromStores];
  const obj3 = {
    IconComponent: channelId(frame[13]).ServerIcon,
    label: intl.string(channelId(frame[14]).t.WYj55Y),
    action() {
      const obj = NavigationRouteUtils;
      const obj2 = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
      obj.navigateToRootTab(obj2);
    }
  };
  const memo1 = onBackPress.useMemo(() => null != stateFromStores && tmp !== React4, items3);
  intl = channelId(frame[14]).intl;
  const items4 = [obj3];
  if (memo1) {
    const obj4 = {
      triggerOnLongPress: true,
      align: "below",
      items: items4,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref, onPress: onBackPress };
          const PressableNavigatorBackIcon = PressableNavigatorBackIcon2.PressableNavigatorBackIcon;
          const merged1 = Object.assign(merged);
          return authStore2(PressableNavigatorBackIcon, obj);
        }
    };
    tmp11Result2 = tmp9(tmp4(tmp3[16]).ContextMenu, obj4);
    tmp11 = tmp9;
  } else {
    const obj5 = { onPress: onBackPress };
    tmp11Result2 = tmp9(tmp4(tmp3[17]).PressableNavigatorBackIcon, obj5);
    tmp11 = tmp9;
  }
  const items5 = [, ];
  const obj6 = { style: tmp.headerBottomBorder };
  items5[0] = tmp11(headerWrapper, obj6);
  const LayerScope = tmp4(tmp3[18]).LayerScope;
  if (!isBackEnabled) {
    const obj7 = { style: tmp.spacer };
    tmp11Result2 = tmp11(tmp14, obj7);
  }
  const items6 = [tmp11Result2, , , ];
  let tmp11Result = null;
  if (!showCreateThread) {
    const obj8 = { channelId };
    tmp11Result = tmp11(tmp4(tmp3[19]).PinotMemberNoticeHeaderArrow, obj8);
  }
  const obj10 = { children: items6 };
  const obj9 = { children: items5 };
  items6[1] = tmp11Result;
  items6[2] = tmp11(tmp2(frame[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  const obj11 = { containerStyle: tmp.actions, channelId, screenIndex, showCreateThread };
  items6[3] = tmp11(tmp2(frame[21]), obj11);
  items5[1] = closure_13(LayerScope, obj10);
  const tmp12Result = closure_13(closure_14, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp12Result };
    tmp11Result3 = tmp11(tmp4(tmp3[22]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp12Result };
    tmp11Result3 = tmp11(tmp14, obj13);
  }
  const obj14 = { children: items7 };
  items7 = [tmp11Result3, frame];
  return closure_13(closure_14, obj14);
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
let obj = { container: { flex: 1 }, onyxContainerBorder: obj2, contentContainer: obj3, containerEmpty: obj4, headerWrapper: obj5, headerBottomBorder: obj6, headerWithFadingFrame: obj7, splitDividerTop: obj8, actions: obj9, spacer: obj10 };
obj2 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj4 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj5 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0, overflow: "visible" };
obj6 = { top: undefined, height: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj8 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj9 = { marginRight: nativeDefault.space.PX_16 };
obj10 = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function StandaloneChannelScreen(frame) {
  let EmptyState;
  let channelId;
  let closure_7;
  let container;
  let guildId;
  let intl;
  let intl2;
  let isNavigationScreen;
  let isNavigationTTIVisible;
  let items10;
  let items11;
  let items12;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj17;
  let obj21;
  let obj29;
  let screenIndex;
  let showCreateThread;
  let subRouteId;
  let tmp40;
  let tmp55;
  ({ guildId, channelId } = frame);
  ({ subRouteId, isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  ({ showCreateThread, screenIndex } = frame);
  let closure_5;
  let isChatBesideChannelList;
  constants = undefined;
  const isActive = frame.isActive;
  let tmp = closure_15();
  react = tmp;
  const obj = channelId(frame[23]);
  navigation = obj.useNavigation();
  const obj2 = channelId(frame[24]);
  const isSwipeToMemberListEnabled = obj2.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[25])(channelId).needSubscriptionToAccess;
  let tmp8 = guildId;
  const useCanSeeOnboardingHome = channelId(frame[26]).useCanSeeOnboardingHome;
  channelId(frame[26]);
  if (guildId == null) {
    tmp8 = closure_8;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp8);
  const ref = react.useRef(null);
  const tmp11 = isNavigationScreen(frame[27])() === constants2.ONYX;
  closure_5 = tmp11;
  const tmp12 = isNavigationScreen(frame[28])();
  isChatBesideChannelList = tmp12.isChatBesideChannelList;
  const isChatLockedOpen = tmp12.isChatLockedOpen;
  let items = [frame, tmp11, isChatBesideChannelList, , ];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = react.useMemo(() => {
    const items = [container.container, ];
    let onyxContainerBorder;
    if (null == frame) {
      if (closure_5) {
        if (!isChatBesideChannelList) {
          onyxContainerBorder = tmp.onyxContainerBorder;
        }
      }
    }
    items[1] = onyxContainerBorder;
    return items;
  }, items);
  const contentContainer = tmp.contentContainer;
  let tmp15 = !isChatLockedOpen;
  const tmp2Result = channelId(frame[29]);
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  const obj3 = react;
  if (isChatLockedOpen) {
    tmp15 = isNavigationScreen;
  }
  if (tmp15) {
    tmp15 = !isForumChannelSearchActive;
  }
  constants = tmp15;
  const items1 = [navigation, isNavigationScreen];
  const callback = obj3.useCallback(() => {
    const tmp = isNavigationScreen;
    if (tmp) {
      navigation.goBack();
    }
  }, items1);
  const items2 = [closure_5];
  const items3 = [channelId];
  const tmp2Result4 = channelId(frame[11]);
  const stateFromStores = tmp2Result4.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  let type;
  const tmp2Result5 = channelId(frame[30]);
  const dMAppChannelApplicationId = tmp2Result5.useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp22 = null;
  const useDismissChannelSecondaryViewChatOnFrameDeepLink = tmp2(tmp3[31]).useDismissChannelSecondaryViewChatOnFrameDeepLink;
  channelId(frame[31]);
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp22 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink = useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp22);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: items4 };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, onBackPress: callback, measureNavigationTTI: false };
            items4 = [closure_12(Header, obj5), ];
            let tmp47Result = null;
            const obj6 = { style: contentContainer, children: items5 };
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp47Result = tmp47(tmp6(tmp3[36]), obj7);
            }
            items5 = [tmp47Result, closure_12(isNavigationScreen(tmp3[35]), {})];
            items4[1] = closure_13(navigation, obj6);
            return closure_13(navigation, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { style: tmp.container, children: items6 };
            items6 = [closure_12(isNavigationScreen(tmp3[33]), { absolute: true }), , ];
            const obj9 = { guildId };
            items6[1] = closure_12(isNavigationScreen(frame[37]), obj9);
            items6[2] = closure_12(isNavigationScreen(frame[35]), {});
            return closure_13(navigation, obj8);
          } else if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
            const obj10 = { guildId, projectId: subRouteId, inline: true, onBack: tmp40 };
            tmp40 = undefined;
            const tmp38 = closure_12;
            const tmp6Result = isNavigationScreen(frame[38]);
            if (tmp15) {
              tmp40 = callback;
            }
            if (subRouteId == null) {
              subRouteId = "";
            }
            const _HermesInternal = HermesInternal;
            return tmp38(tmp6Result, obj10, "" + guildId + ":" + subRouteId);
          } else if (showCreateThread) {
            const obj11 = { style: contentContainer, children: items7 };
            const obj12 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, onBackPress: callback, measureNavigationTTI: false };
            items7 = [closure_12(Header, obj12), ];
            const obj13 = { channelId, screenIndex };
            items7[1] = closure_12(channelId(frame[39]).CreateThreadView, obj13);
            return closure_13(navigation, obj11);
          } else {
            let tmp26Result;
            if (null != stateFromStores) {
              if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
                const obj14 = { style: memo, children: items8 };
                const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, onBackPress: callback, measureNavigationTTI: false };
                items8 = [closure_12(Header, obj15), ];
                const obj16 = { style: contentContainer, children: closure_12(isNavigationScreen(frame[40]), obj17) };
                obj17 = { channel: stateFromStores };
                items8[1] = closure_12(navigation, obj16);
                return closure_13(navigation, obj14);
              }
            }
            const obj18 = { children: items9 };
            const obj19 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, onBackPress: callback, measureNavigationTTI: true };
            items9 = [closure_12(Header, obj19), ];
            const obj20 = { name: "chat_container", tracking: "include", style: contentContainer, children: closure_12(isNavigationScreen(frame[41]), obj21) };
            const NavTTIView = tmp2(tmp3[22]).NavTTIView;
            obj21 = { guildId, channelId, isActive, chatInputRef: ref, screenIndex };
            items9[1] = closure_12(NavTTIView, obj20);
            const tmp28 = closure_13(closure_14, obj18);
            if (isSwipeToMemberListEnabled) {
              const obj22 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp15, children: tmp28 };
              tmp26Result = tmp26(tmp6(tmp3[42]), obj22);
            } else {
              const obj23 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(frame[44]).CHANNEL_NAVIGATION_TTI,
                visibilityMode: "prerendered",
                isVisible: isNavigationTTIVisible,
                descendantTracking: "included",
                accessible: false,
                onAccessibilityEscape() {
                              const tmp = closure_7;
                              if (tmp) {
                                navigation.goBack();
                              }
                            },
                style: memo,
                children: tmp28
              };
              const NavTTISurfaceProvider = tmp2(tmp3[43]).NavTTISurfaceProvider;
              tmp26Result = tmp26(NavTTISurfaceProvider, obj23);
            }
            return tmp26Result;
          }
        }
      }
      const obj24 = { style: memo, children: items10 };
      const obj25 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, onBackPress: callback, measureNavigationTTI: false };
      items10 = [closure_12(Header, obj25), ];
      const obj26 = { style: contentContainer, children: items11 };
      items11 = [closure_12(isNavigationScreen(tmp3[33]), { absolute: true }), , ];
      const obj27 = { guildId, gatedChannelId: tmp55 };
      tmp55 = undefined;
      const tmp6Result2 = isNavigationScreen(frame[34]);
      if (needSubscriptionToAccess) {
        tmp55 = channelId;
      }
      items11[1] = closure_12(tmp6Result2, obj27);
      items11[2] = closure_12(isNavigationScreen(frame[35]), {});
      items10[1] = closure_13(navigation, obj26);
      return closure_13(navigation, obj24);
    }
  }
  const obj28 = { style: items12, children: closure_12(EmptyState, obj29) };
  items12 = [memo, tmp.containerEmpty];
  obj29 = { title: intl.string(channelId(frame[14]).t.ai6Lbr), body: intl2.string(channelId(frame[14]).t["LTr+x9"]) };
  EmptyState = tmp2(tmp3[32]).EmptyState;
  intl = tmp2(tmp3[14]).intl;
  intl2 = tmp2(tmp3[14]).intl;
  return closure_12(navigation, obj28);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
