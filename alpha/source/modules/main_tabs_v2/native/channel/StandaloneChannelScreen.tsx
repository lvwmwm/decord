// Module ID: 17877
// Function ID: 17878
// Name: StandaloneChannelScreen
// Dependencies: [109, 19, 17, 4821, 9670, 1087, 4828, 21, 4969, 587, 558, 576, 1506, 1633, 9678, 4846, 504, 1128, 9615, 5136, 9731, 9671, 13953, 9681, 5583, 17878, 11170, 5980, 7308, 5191, 5139, 13965, 6793, 9686, 1202, 10595, 17883, 17900, 17918, 11690, 17936, 17940, 10856, 17954, 17955, 12973, 2]

// Module 17877 (StandaloneChannelScreen)
import nativeDefault from "native" /* 587 */;
import ChannelConstants from "ChannelConstants" /* 4828 */;
import FavoritesUtils from "FavoritesUtils" /* 4846 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import PressableNavigatorBackIcon2 from "PressableNavigatorBackIcon" /* 9671 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import react_native_mod2 from "react-native" /* 9670 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let ONYX_BORDER_WIDTH;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let metroImportAll;
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
let unpackModuleId;
let navigation = ["ref"];
let react = react_mod;
let react_native = react_native_mod2;
({ View: metroRequire, StyleSheet } = react_native);
react_native = react_native_mod2;
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroImportAll } = react_native);
({ ChannelTypes: c9, EMPTY_STRING_SNOWFLAKE_ID: c10, ME: unpackModuleId, ThemeTypes: closure_12 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
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
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(channelId) {
  let frame;
  let guildId;
  let headerWithFadingFrame;
  let isBackEnabled;
  let isNavigationScreen;
  let measureNavigationTTI;
  let obj8;
  let screenIndex;
  let showCreateThread;
  let splitDivider;
  let splitDividerTop;
  function action() {
    const obj = NavigationRouteUtils;
    const obj2 = { screen: "guilds", guildId: react, channelId, resetRoot: false, drawerOpen: false };
    obj.navigateToRootTab(obj2);
  }
  let tmp = channelId;
  let obj = channelId(isNavigationScreen[11]);
  const cResult = obj.c(56);
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  isNavigationScreen = channelId.isNavigationScreen;
  ({ frame, showCreateThread, isBackEnabled, measureNavigationTTI } = channelId);
  let obj2 = channelId(isNavigationScreen[12]);
  navigation = obj2.useNavigation();
  const tmp5 = closure_17();
  const top = guildId(isNavigationScreen[13])().top;
  const obj3 = channelId(isNavigationScreen[14]);
  const gradientTop = obj3.useGradientTop();
  if (null != frame) {
    headerWithFadingFrame = tmp5.headerWithFadingFrame;
  }
  if (null != frame) {
    splitDivider = tmp5.splitDivider;
  }
  if (null != frame) {
    splitDividerTop = tmp5.splitDividerTop;
  }
  if (cResult[0] === frame) {
    let tmp7;
    if (cResult[1] === top) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === gradientTop) {
      if (cResult[4] === tmp5.headerWrapper) {
        if (cResult[5] === headerWithFadingFrame) {
          if (cResult[6] === splitDivider) {
            if (cResult[7] === splitDividerTop) {
              if (cResult[10] === isNavigationScreen) {
                let tmp10;
                if (cResult[11] === navigation) {
                  tmp10 = cResult[12];
                }
                const onPress = tmp10;
                class P {
                  constructor() {
                    const tmp = isNavigationScreen;
                    if (tmp) {
                      navigation.goBack();
                    }
                  }
                }
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [];
                  class P {
                    constructor() {
                      const tmp = isNavigationScreen;
                      if (tmp) {
                        navigation.goBack();
                      }
                    }
                  }
                  cResult[13] = items;
                }
                if (cResult[14] === channelId) {
                  tmp(isNavigationScreen[16]);
                  class P {
                    constructor() {
                      const tmp = isNavigationScreen;
                      if (tmp) {
                        navigation.goBack();
                      }
                    }
                  }
                  react = tmp16;
                  const _Symbol2 = Symbol;
                  class M {
                    constructor() {
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
                    }
                  }
                  if (cResult[19] === channelId) {
                    let tmp21;
                    let tmp23Result;
                    if (cResult[20] === tmp16) {
                      tmp21 = cResult[21];
                    }
                    if (cResult[22] === (null != tmp16 && tmp16 !== closure_11)) {
                      if (cResult[23] === tmp10) {
                        let tmp22;
                        if (cResult[24] === tmp21) {
                          tmp22 = cResult[25];
                        }
                        if (cResult[26] !== tmp5.headerBottomBorder) {
                          class P {
                            constructor() {
                              const tmp = isNavigationScreen;
                              if (tmp) {
                                navigation.goBack();
                              }
                            }
                          }
                          tmp28[0] = tmp5.headerBottomBorder;
                          cResult[26] = tmp5.headerBottomBorder;
                          closure_14(closure_6, tmp28);
                          class M {
                            constructor() {
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
                            }
                          }
                        }
                        class P {
                          constructor() {
                            const tmp = isNavigationScreen;
                            if (tmp) {
                              navigation.goBack();
                            }
                          }
                        }
                        let tmp31 = tmp22;
                        if (!isBackEnabled) {
                          class P {
                            constructor() {
                              const tmp = isNavigationScreen;
                              if (tmp) {
                                navigation.goBack();
                              }
                            }
                          }
                          tmp34[0] = tmp5.spacer;
                          tmp31 = closure_14(closure_6, tmp34);
                        }
                        cResult[28] = tmp22;
                        class M {
                          constructor() {
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
                          }
                        }
                        cResult[30] = tmp5.spacer;
                        cResult[31] = tmp31;
                      }
                    }
                    class P {
                      constructor() {
                        const tmp = isNavigationScreen;
                        if (tmp) {
                          navigation.goBack();
                        }
                      }
                    }
                    if (null != tmp16 && tmp16 !== closure_11) {
                      const obj4 = { triggerOnLongPress: true, align: "below", items: tmp21, children: null };
                      class P {
                        constructor() {
                          const tmp = isNavigationScreen;
                          if (tmp) {
                            navigation.goBack();
                          }
                        }
                      }
                      tmp23Result = tmp23(tmp(isNavigationScreen[20]).ContextMenu, obj4);
                    } else {
                      class P {
                        constructor() {
                          const tmp = isNavigationScreen;
                          if (tmp) {
                            navigation.goBack();
                          }
                        }
                      }
                    }
                    cResult[22] = null != tmp16 && tmp16 !== closure_11;
                    cResult[23] = tmp10;
                    class M {
                      constructor() {
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
                      }
                    }
                    cResult[24] = tmp21;
                    cResult[25] = tmp23Result;
                    tmp22 = tmp23Result;
                  }
                  const items1 = [{ IconComponent: tmp(isNavigationScreen[18]).ServerIcon, label: tmp20, action }];
                  cResult[19] = channelId;
                  cResult[20] = tmp16;
                  cResult[21] = items1;
                  tmp21 = items1;
                  const obj6 = { IconComponent: tmp(isNavigationScreen[18]).ServerIcon, label: tmp20, action };
                }
                class M {
                  constructor() {
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
                  }
                }
                const items2 = [guildId, channelId];
                cResult[14] = channelId;
                cResult[15] = guildId;
                cResult[16] = M;
                cResult[17] = items2;
              }
              class P {
                constructor() {
                  const tmp = isNavigationScreen;
                  if (tmp) {
                    navigation.goBack();
                  }
                }
              }
              cResult[10] = isNavigationScreen;
              cResult[11] = navigation;
              tmp10 = P;
            }
          }
        }
      }
    }
    tmp9[0] = tmp5.headerWrapper;
    tmp9[1] = gradientTop;
    tmp9[2] = headerWithFadingFrame;
    tmp9[3] = splitDivider;
    tmp9[4] = splitDividerTop;
    cResult[3] = gradientTop;
    cResult[4] = tmp5.headerWrapper;
    cResult[5] = headerWithFadingFrame;
    cResult[6] = splitDivider;
    cResult[7] = splitDividerTop;
    cResult[8] = tmp7;
    cResult[9] = tmp9;
  }
  if (null != frame) {
    const obj7 = { marginTop: top, minHeight };
    class P {
      constructor() {
        const tmp = isNavigationScreen;
        if (tmp) {
          navigation.goBack();
        }
      }
    }
    obj8 = obj7;
  } else {
    obj8 = { paddingTop: top, minHeight: top + minHeight };
    class P {
      constructor() {
        const tmp = isNavigationScreen;
        if (tmp) {
          navigation.goBack();
        }
      }
    }
  }
  cResult[0] = frame;
  cResult[1] = top;
  cResult[2] = obj8;
  tmp7 = obj8;
}) : (function Header(channelId) {
  let guildId;
  let headerWrapper;
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
  let obj = channelId(isNavigationScreen[12]);
  navigation = obj.useNavigation();
  const tmp4 = closure_17();
  react = tmp4;
  const top = guildId(isNavigationScreen[13])().top;
  let obj2 = channelId(isNavigationScreen[14]);
  const gradientTop = obj2.useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const memo = react.useMemo(() => {
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
      obj = { marginTop: top, minHeight: metroImportAll };
      const obj2 = { marginTop: top, minHeight: metroImportAll };
    } else {
      obj = { paddingTop: top, minHeight: top + metroImportAll };
    }
    items[5] = obj;
    return items;
  }, items);
  const items1 = [navigation, isNavigationScreen];
  const onPress = react.useCallback(() => {
    const tmp = isNavigationScreen;
    if (tmp) {
      navigation.goBack();
    }
  }, items1);
  const items2 = [gradientTop];
  const items3 = [guildId, channelId];
  const obj3 = channelId(isNavigationScreen[16]);
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
    IconComponent: channelId(isNavigationScreen[18]).ServerIcon,
    label: intl.string(channelId(isNavigationScreen[17]).t.WYj55Y),
    action() {
      const obj = NavigationRouteUtils;
      const obj2 = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
      obj.navigateToRootTab(obj2);
    }
  };
  const memo1 = react.useMemo(() => null != stateFromStores && tmp !== unpackModuleId, items4);
  intl = channelId(isNavigationScreen[17]).intl;
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
          return syncedClientThemes(PressableNavigatorBackIcon, obj);
        }
    };
    tmp13Result1 = tmp11(tmp(tmp2[20]).ContextMenu, obj5);
    tmp13 = tmp11;
  } else {
    const obj6 = { onPress };
    tmp13Result1 = tmp11(tmp(tmp2[21]).PressableNavigatorBackIcon, obj6);
    tmp13 = tmp11;
  }
  const items6 = [, ];
  const obj7 = { style: tmp4.headerBottomBorder };
  items6[0] = tmp13(top, obj7);
  const LayerScope = tmp(tmp2[24]).LayerScope;
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result1 = tmp13(tmp16, obj8);
  }
  const obj10 = { children: items7 };
  const obj9 = { children: items6 };
  items7 = [tmp13Result1, tmp13(tmp5(tmp2[22]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), ];
  const obj11 = { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread };
  items7[2] = tmp13(guildId(tmp2[23]), obj11);
  items6[1] = closure_15(LayerScope, obj10);
  const tmp14Result = closure_15(closure_16, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp(tmp2[25]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj13);
  }
  const obj14 = { children: items8 };
  items8 = [tmp13Result, frame];
  return closure_15(closure_16, obj14);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneChannelScreen(frame) {
  let channelId;
  let guildId;
  let isActive;
  let isNavigationScreen;
  let isNavigationTTIVisible;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let tmp = channelId;
  let tmp2 = frame;
  let obj = channelId(frame[11]);
  const cResult = obj.c(106);
  ({ guildId, channelId } = frame);
  ({ isActive, isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  const showCreateThread = frame.showCreateThread;
  const screenIndex = frame.screenIndex;
  const tmp4 = closure_17();
  const obj2 = channelId(frame[12]);
  navigation = obj2.useNavigation();
  const obj3 = channelId(frame[26]);
  const isSwipeToMemberListEnabled = obj3.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[27])(channelId).needSubscriptionToAccess;
  let tmp9 = guildId;
  const useCanSeeOnboardingHome = channelId(frame[28]).useCanSeeOnboardingHome;
  channelId(frame[28]);
  if (guildId == null) {
    tmp9 = closure_10;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp9);
  const ONYX = constants2.ONYX;
  const ref = navigation.useRef(null);
  const tmp12 = isNavigationScreen(tmp2[29])();
  const isChatLockedOpen = isNavigationScreen(tmp2[30])().isChatLockedOpen;
  let onyxContainerBorder;
  isNavigationScreen(tmp2[30])();
  if (null == frame) {
    if (tmp12 === ONYX) {
      if (!tmp14) {
        onyxContainerBorder = tmp4.onyxContainerBorder;
      }
    }
  }
  if (cResult[0] === tmp4.container) {
    let tmp16;
    if (cResult[1] === onyxContainerBorder) {
      tmp16 = cResult[2];
    }
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp4.splitDivider;
    }
    if (cResult[3] === tmp4.contentContainer) {
      let tmp18;
      let tmp22;
      let tmp25;
      let tmp24;
      if (cResult[4] === splitDivider) {
        tmp18 = cResult[5];
      }
      let tmp20 = !isChatLockedOpen;
      const tmpResult = tmp(tmp2[31]);
      const isForumChannelSearchActive = tmpResult.useIsForumChannelSearchActive(channelId);
      if (isChatLockedOpen) {
        tmp20 = isNavigationScreen;
      }
      if (tmp20) {
        tmp20 = !isForumChannelSearchActive;
      }
      const isBackEnabled = tmp20;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [channelId];
        cResult[6] = items;
        tmp22 = items;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] !== channelId) {
        const fn = function j() {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          return channel;
        };
        const items1 = [channelId];
        cResult[7] = channelId;
        cResult[8] = fn;
        cResult[9] = items1;
        tmp25 = items1;
        tmp24 = fn;
      } else {
        tmp24 = cResult[8];
        tmp25 = cResult[9];
      }
      const tmpResult4 = tmp(tmp2[16]);
      const stateFromStores = tmpResult4.useStateFromStores(tmp22, tmp24, tmp25);
      let type;
      const tmpResult5 = tmp(tmp2[32]);
      const dMAppChannelApplicationId = tmpResult5.useDMAppChannelApplicationId(stateFromStores);
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      let tmp32 = null;
      const useDismissChannelSecondaryViewChatOnFrameDeepLink = tmp(tmp2[33]).useDismissChannelSecondaryViewChatOnFrameDeepLink;
      tmp(tmp2[33]);
      if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
        tmp32 = channelId;
      }
      const dismissChannelSecondaryViewChatOnFrameDeepLink = useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp32);
      if (null != channelId) {
        if (null != guildId) {
          if (cResult[16] === frame) {
            if (cResult[17] === channelId) {
              if (cResult[18] === guildId) {
                if (cResult[19] === tmp20) {
                  if (cResult[20] === isNavigationScreen) {
                    if (cResult[21] === screenIndex) {
                      let tmp34;
                      let tmp105;
                      if (cResult[22] === showCreateThread) {
                        tmp34 = cResult[23];
                      }
                      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
                        if (!needSubscriptionToAccess) {
                          if (channelId === StaticChannelRoute.GUILD_HOME) {
                            let tmp90;
                            if (cResult[37] !== tmp34) {
                              const tmp34Result = tmp34();
                              cResult[37] = tmp34;
                              cResult[38] = tmp34Result;
                              tmp90 = tmp34Result;
                            } else {
                              tmp90 = cResult[38];
                            }
                            if (cResult[39] === guildId) {
                              let tmp92;
                              if (cResult[40] === canSeeOnboardingHome) {
                                tmp92 = cResult[41];
                              }
                              if (cResult[42] === tmp18) {
                                let tmp95;
                                if (cResult[43] === tmp92) {
                                  tmp95 = cResult[44];
                                }
                                if (cResult[45] === tmp16) {
                                  if (cResult[46] === tmp95) {
                                    let tmp99;
                                    if (cResult[47] === tmp90) {
                                      tmp99 = cResult[48];
                                    }
                                    return tmp99;
                                  }
                                }
                                const obj4 = { style: tmp16, children: items2 };
                                items2 = [tmp90, tmp95];
                                const tmp102 = closure_15(isBackEnabled, obj4);
                                cResult[45] = tmp16;
                                cResult[46] = tmp95;
                                cResult[47] = tmp90;
                                cResult[48] = tmp102;
                                tmp99 = tmp102;
                              }
                              const obj5 = { style: tmp18, children: tmp92 };
                              const tmp98 = closure_14(isBackEnabled, obj5);
                              cResult[42] = tmp18;
                              cResult[43] = tmp92;
                              cResult[44] = tmp98;
                              tmp95 = tmp98;
                            }
                            let tmp93 = null;
                            if (canSeeOnboardingHome) {
                              const obj6 = { guildId };
                              tmp93 = closure_14(tmp7(tmp2[37]), obj6);
                            }
                            cResult[39] = guildId;
                            cResult[40] = canSeeOnboardingHome;
                            cResult[41] = tmp93;
                            tmp92 = tmp93;
                          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
                            let tmp80;
                            let tmp83;
                            const _Symbol2 = Symbol;
                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                              const tmp82 = closure_14(isNavigationScreen(tmp2[35]), { absolute: true });
                              cResult[49] = tmp82;
                              tmp80 = tmp82;
                            } else {
                              tmp80 = cResult[49];
                            }
                            if (cResult[50] !== guildId) {
                              const obj7 = { guildId };
                              const tmp85 = closure_14(isNavigationScreen(tmp2[38]), obj7);
                              cResult[50] = guildId;
                              cResult[51] = tmp85;
                              tmp83 = tmp85;
                            } else {
                              tmp83 = cResult[51];
                            }
                            if (cResult[52] === tmp4.container) {
                              let tmp86;
                              if (cResult[53] === tmp83) {
                                tmp86 = cResult[54];
                              }
                              return tmp86;
                            }
                            const obj8 = { style: tmp4.container, children: items3 };
                            items3 = [tmp80, tmp83];
                            const tmp89 = closure_15(isBackEnabled, obj8);
                            cResult[52] = tmp4.container;
                            cResult[53] = tmp83;
                            cResult[54] = tmp89;
                            tmp86 = tmp89;
                          } else if (channelId === StaticChannelRoute.CONJURE) {
                            let tmp77;
                            if (cResult[55] !== guildId) {
                              const obj9 = { guildId, inline: true };
                              const tmp79 = closure_14(isNavigationScreen(tmp2[39]), obj9);
                              cResult[55] = guildId;
                              cResult[56] = tmp79;
                              tmp77 = tmp79;
                            } else {
                              tmp77 = cResult[56];
                            }
                            return tmp77;
                          } else if (showCreateThread) {
                            let tmp68;
                            if (cResult[57] !== tmp34) {
                              const tmp34Result5 = tmp34();
                              cResult[57] = tmp34;
                              cResult[58] = tmp34Result5;
                              tmp68 = tmp34Result5;
                            } else {
                              tmp68 = cResult[58];
                            }
                            if (cResult[59] === channelId) {
                              let tmp70;
                              if (cResult[60] === screenIndex) {
                                tmp70 = cResult[61];
                              }
                              if (cResult[62] === tmp18) {
                                if (cResult[63] === tmp70) {
                                  let tmp73;
                                  if (cResult[64] === tmp68) {
                                    tmp73 = cResult[65];
                                  }
                                  return tmp73;
                                }
                              }
                              const obj10 = { style: tmp18, children: items4 };
                              items4 = [tmp68, tmp70];
                              const tmp76 = closure_15(isBackEnabled, obj10);
                              cResult[62] = tmp18;
                              cResult[63] = tmp70;
                              cResult[64] = tmp68;
                              cResult[65] = tmp76;
                              tmp73 = tmp76;
                            }
                            const obj11 = { channelId, screenIndex };
                            const tmp72 = closure_14(tmp(tmp2[40]).CreateThreadView, obj11);
                            cResult[59] = channelId;
                            cResult[60] = screenIndex;
                            cResult[61] = tmp72;
                            tmp70 = tmp72;
                          } else {
                            let tmp36;
                            if (null != stateFromStores) {
                              if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
                                let tmp55;
                                let tmp57;
                                if (cResult[66] !== tmp34) {
                                  const tmp34Result6 = tmp34();
                                  cResult[66] = tmp34;
                                  cResult[67] = tmp34Result6;
                                  tmp55 = tmp34Result6;
                                } else {
                                  tmp55 = cResult[67];
                                }
                                if (cResult[68] !== stateFromStores) {
                                  const obj12 = { channel: stateFromStores };
                                  const tmp59 = closure_14(isNavigationScreen(tmp2[41]), obj12);
                                  cResult[68] = stateFromStores;
                                  cResult[69] = tmp59;
                                  tmp57 = tmp59;
                                } else {
                                  tmp57 = cResult[69];
                                }
                                if (cResult[70] === tmp18) {
                                  let tmp60;
                                  if (cResult[71] === tmp57) {
                                    tmp60 = cResult[72];
                                  }
                                  if (cResult[73] === tmp16) {
                                    if (cResult[74] === tmp60) {
                                      let tmp64;
                                      if (cResult[75] === tmp55) {
                                        tmp64 = cResult[76];
                                      }
                                      return tmp64;
                                    }
                                  }
                                  const obj13 = { style: tmp16, children: items5 };
                                  items5 = [tmp55, tmp60];
                                  const tmp67 = closure_15(isBackEnabled, obj13);
                                  cResult[73] = tmp16;
                                  cResult[74] = tmp60;
                                  cResult[75] = tmp55;
                                  cResult[76] = tmp67;
                                  tmp64 = tmp67;
                                }
                                const obj14 = { style: tmp18, children: tmp57 };
                                const tmp63 = closure_14(isBackEnabled, obj14);
                                cResult[70] = tmp18;
                                cResult[71] = tmp57;
                                cResult[72] = tmp63;
                                tmp60 = tmp63;
                              }
                            }
                            if (cResult[77] !== tmp34) {
                              const tmp34Result7 = tmp34(true);
                              cResult[77] = tmp34;
                              cResult[78] = tmp34Result7;
                              tmp36 = tmp34Result7;
                            } else {
                              tmp36 = cResult[78];
                            }
                            if (cResult[79] === channelId) {
                              if (cResult[80] === guildId) {
                                if (cResult[81] === isActive) {
                                  let tmp38;
                                  if (cResult[82] === screenIndex) {
                                    tmp38 = cResult[83];
                                  }
                                  if (cResult[84] === tmp18) {
                                    let tmp41;
                                    if (cResult[85] === tmp38) {
                                      tmp41 = cResult[86];
                                    }
                                    if (cResult[87] === tmp41) {
                                      let tmp44;
                                      let tmp49;
                                      if (cResult[88] === tmp36) {
                                        tmp44 = cResult[89];
                                      }
                                      if (isSwipeToMemberListEnabled) {
                                        if (cResult[90] === channelId) {
                                          if (cResult[91] === tmp16) {
                                            if (cResult[92] === tmp20) {
                                              if (cResult[93] === isNavigationTTIVisible) {
                                                if (cResult[94] === tmp44) {
                                                  let tmp52;
                                                  if (cResult[95] === screenIndex) {
                                                    tmp52 = cResult[96];
                                                  }
                                                  tmp49 = tmp52;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj15 = { style: tmp16, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp20, children: tmp44 };
                                        const tmp54 = closure_14(isNavigationScreen(tmp2[43]), obj15);
                                        cResult[90] = channelId;
                                        cResult[91] = tmp16;
                                        cResult[92] = tmp20;
                                        cResult[93] = isNavigationTTIVisible;
                                        cResult[94] = tmp44;
                                        cResult[95] = screenIndex;
                                        cResult[96] = tmp54;
                                        tmp52 = tmp54;
                                      } else {
                                        if (cResult[97] === tmp20) {
                                          let tmp48;
                                          if (cResult[98] === navigation) {
                                            tmp48 = cResult[99];
                                          }
                                          class Le {
                                            constructor() {
                                              const tmp = isBackEnabled;
                                              if (tmp) {
                                                navigation.goBack();
                                              }
                                            }
                                          }
                                          const obj16 = { name: "channel_screen", navigationKey: channelId, definition: tmp(tmp2[45]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessible: false, onAccessibilityEscape: tmp48, style: tmp16, children: tmp44 };
                                          const NavTTISurfaceProvider = tmp(tmp2[44]).NavTTISurfaceProvider;
                                          const tmp51 = closure_14(NavTTISurfaceProvider, obj16);
                                          cResult[100] = channelId;
                                          cResult[101] = tmp16;
                                          cResult[102] = isNavigationTTIVisible;
                                          cResult[103] = tmp44;
                                          cResult[104] = tmp48;
                                          cResult[105] = tmp51;
                                          tmp49 = tmp51;
                                        }
                                        class Le {
                                          constructor() {
                                            const tmp = isBackEnabled;
                                            if (tmp) {
                                              navigation.goBack();
                                            }
                                          }
                                        }
                                        cResult[97] = tmp20;
                                        cResult[98] = navigation;
                                        cResult[99] = Le;
                                        tmp48 = Le;
                                      }
                                      return tmp49;
                                    }
                                    const obj17 = { children: items6 };
                                    items6 = [tmp36, tmp41];
                                    const tmp47 = closure_15(closure_16, obj17);
                                    cResult[87] = tmp41;
                                    cResult[88] = tmp36;
                                    cResult[89] = tmp47;
                                    tmp44 = tmp47;
                                  }
                                  const obj18 = { name: "chat_container", tracking: "include", style: tmp18, children: tmp38 };
                                  const tmp43 = closure_14(tmp(tmp2[25]).NavTTIView, obj18);
                                  cResult[84] = tmp18;
                                  cResult[85] = tmp38;
                                  cResult[86] = tmp43;
                                  tmp41 = tmp43;
                                }
                              }
                            }
                            const obj19 = { guildId, channelId, isActive, chatInputRef: ref, screenIndex };
                            const tmp40 = closure_14(isNavigationScreen(tmp2[42]), obj19);
                            cResult[79] = channelId;
                            cResult[80] = guildId;
                            cResult[81] = isActive;
                            cResult[82] = screenIndex;
                            cResult[83] = tmp40;
                            tmp38 = tmp40;
                          }
                        }
                      }
                      if (cResult[24] !== tmp34) {
                        const tmp34Result8 = tmp34();
                        class Le {
                          constructor() {
                            const tmp = isBackEnabled;
                            if (tmp) {
                              navigation.goBack();
                            }
                          }
                        }
                        cResult[24] = tmp34;
                        cResult[25] = tmp34Result8;
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                        class Le {
                          constructor() {
                            const tmp = isBackEnabled;
                            if (tmp) {
                              navigation.goBack();
                            }
                          }
                        }
                        cResult[26] = tmp107;
                        tmp105 = tmp107;
                      } else {
                        tmp105 = cResult[26];
                      }
                      let tmp108;
                      if (needSubscriptionToAccess) {
                        tmp108 = channelId;
                      }
                      if (cResult[27] === guildId) {
                        let tmp109;
                        if (cResult[28] === tmp108) {
                          tmp109 = cResult[29];
                        }
                        class Le {
                          constructor() {
                            const tmp = isBackEnabled;
                            if (tmp) {
                              navigation.goBack();
                            }
                          }
                        }
                        const obj20 = { style: tmp18, children: items7 };
                        items7 = [tmp105, tmp109];
                        cResult[30] = tmp18;
                        cResult[31] = tmp109;
                        cResult[32] = closure_15(isBackEnabled, obj20);
                        const tmp115 = closure_15(isBackEnabled, obj20);
                      }
                      const obj21 = { guildId, gatedChannelId: tmp108 };
                      const tmp111 = closure_14(isNavigationScreen(tmp2[36]), obj21);
                      cResult[27] = guildId;
                      cResult[28] = tmp108;
                      cResult[29] = tmp111;
                      tmp109 = tmp111;
                    }
                  }
                }
              }
            }
          }
          function renderHeader(arg0) {
            let tmp3;
            const obj = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled, measureNavigationTTI: tmp3 };
            tmp3 = undefined !== arg0;
            const tmp = syncedClientThemes;
            const tmp2 = closure_18;
            if (tmp3) {
              tmp3 = arg0;
            }
            return tmp(tmp2, obj);
          }
          cResult[16] = frame;
          cResult[17] = channelId;
          cResult[18] = guildId;
          cResult[19] = tmp20;
          cResult[20] = isNavigationScreen;
          cResult[21] = screenIndex;
          cResult[22] = showCreateThread;
          cResult[23] = renderHeader;
          tmp34 = renderHeader;
        }
      }
      if (cResult[10] === tmp16) {
        let tmp116;
        let tmp117;
        let tmp121;
        if (cResult[11] === tmp4.containerEmpty) {
          tmp116 = cResult[12];
        }
        class Le {
          constructor() {
            const tmp = isBackEnabled;
            if (tmp) {
              navigation.goBack();
            }
          }
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class Le {
            constructor() {
              const tmp = isBackEnabled;
              if (tmp) {
                navigation.goBack();
              }
            }
          }
          const EmptyState = tmp(tmp2[34]).EmptyState;
          const intl = tmp(tmp2[17]).intl;
          tmp119[0] = intl.string(tmp(tmp2[17]).t.ai6Lbr);
          const intl2 = tmp(tmp2[17]).intl;
          tmp119[1] = intl2.string(tmp(tmp2[17]).t["LTr+x9"]);
          const tmp120 = closure_14(EmptyState, tmp119);
          cResult[13] = tmp120;
          tmp117 = tmp120;
        } else {
          tmp117 = cResult[13];
        }
        if (cResult[14] !== tmp116) {
          class Le {
            constructor() {
              const tmp = isBackEnabled;
              if (tmp) {
                navigation.goBack();
              }
            }
          }
          const obj22 = { style: tmp116, children: tmp117 };
          const tmp123 = closure_14(isBackEnabled, obj22);
          cResult[14] = tmp116;
          cResult[15] = tmp123;
          tmp121 = tmp123;
        } else {
          tmp121 = cResult[15];
        }
        return tmp121;
      }
      const items8 = [tmp16, tmp4.containerEmpty];
      cResult[10] = tmp16;
      cResult[11] = tmp4.containerEmpty;
      cResult[12] = items8;
      tmp116 = items8;
    }
    const items9 = [tmp4.contentContainer, splitDivider];
    cResult[3] = tmp4.contentContainer;
    cResult[4] = splitDivider;
    cResult[5] = items9;
    tmp18 = items9;
  }
  const items10 = [tmp4.container, onyxContainerBorder];
  cResult[0] = tmp4.container;
  cResult[1] = onyxContainerBorder;
  cResult[2] = items10;
  tmp16 = items10;
}) : (function StandaloneChannelScreen(isActive) {
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
  let tmp = closure_17();
  dependencyMap = tmp;
  const obj = channelId(1506);
  navigation = obj.useNavigation();
  const obj2 = channelId(11170);
  const isSwipeToMemberListEnabled = obj2.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5980)(channelId).needSubscriptionToAccess;
  let tmp7 = guildId;
  const useCanSeeOnboardingHome = channelId(7308).useCanSeeOnboardingHome;
  channelId(7308);
  if (guildId == null) {
    tmp7 = closure_10;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp7);
  const ref = isChatBesideChannelList.useRef(null);
  const tmp10 = frame(5191)() === constants2.ONYX;
  closure_4 = tmp10;
  const tmp11 = frame(5139)();
  isChatBesideChannelList = tmp11.isChatBesideChannelList;
  const isChatLockedOpen = tmp11.isChatLockedOpen;
  let items = [frame, tmp10, isChatBesideChannelList, , ];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = isChatBesideChannelList.useMemo(() => {
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
  const memo1 = isChatBesideChannelList.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  let tmp15 = !isChatLockedOpen;
  const tmp2Result = channelId(13965);
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp15 = isNavigationScreen;
  }
  if (tmp15) {
    tmp15 = !isForumChannelSearchActive;
  }
  closure_6 = tmp15;
  const items2 = [ChannelStore];
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
  const tmp2Result5 = channelId(6793);
  const dMAppChannelApplicationId = tmp2Result5.useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp21 = null;
  const useDismissChannelSecondaryViewChatOnFrameDeepLink = tmp2(9686).useDismissChannelSecondaryViewChatOnFrameDeepLink;
  channelId(9686);
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
            items4 = [closure_14(closure_18, obj4), ];
            const obj5 = { style: memo1, children: tmp43Result };
            tmp43Result = null;
            const tmp41 = closure_15;
            if (canSeeOnboardingHome) {
              const obj6 = { guildId };
              tmp43Result = tmp43(tmp5(17900), obj6);
            }
            items4[1] = closure_14(closure_6, obj5);
            return tmp41(closure_6, obj3);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj7 = { style: tmp.container, children: items5 };
            items5 = [closure_14(frame(10595), { absolute: true }), ];
            const obj8 = { guildId };
            items5[1] = closure_14(frame(17918), obj8);
            return closure_15(closure_6, obj7);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj9 = { guildId, inline: true };
            return closure_14(frame(11690), obj9);
          } else if (showCreateThread) {
            const obj10 = { style: memo1, children: items6 };
            const obj11 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
            items6 = [closure_14(closure_18, obj11), ];
            const obj12 = { channelId, screenIndex };
            items6[1] = closure_14(channelId(17936).CreateThreadView, obj12);
            return closure_15(closure_6, obj10);
          } else {
            let tmp25Result;
            if (null != stateFromStores) {
              if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
                const obj13 = { style: memo, children: items7 };
                const obj14 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
                items7 = [closure_14(closure_18, obj14), ];
                const obj15 = { style: memo1, children: closure_14(frame(17940), obj16) };
                obj16 = { channel: stateFromStores };
                items7[1] = closure_14(closure_6, obj15);
                return closure_15(closure_6, obj13);
              }
            }
            const obj17 = { children: items8 };
            const obj18 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: true };
            items8 = [closure_14(closure_18, obj18), ];
            const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: closure_14(frame(10856), obj20) };
            const NavTTIView = tmp2(17878).NavTTIView;
            obj20 = { guildId, channelId, isActive, chatInputRef: ref, screenIndex };
            items8[1] = closure_14(NavTTIView, obj19);
            const tmp27 = closure_15(closure_16, obj17);
            if (isSwipeToMemberListEnabled) {
              const obj21 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp15, children: tmp27 };
              tmp25Result = tmp25(tmp5(17954), obj21);
            } else {
              const obj22 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(12973).CHANNEL_NAVIGATION_TTI,
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
              const NavTTISurfaceProvider = tmp2(17955).NavTTISurfaceProvider;
              tmp25Result = tmp25(NavTTISurfaceProvider, obj22);
            }
            return tmp25Result;
          }
        }
      }
      const obj23 = { style: memo, children: items9 };
      const obj24 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
      items9 = [closure_14(closure_18, obj24), ];
      const obj25 = { style: memo1, children: items10 };
      items10 = [closure_14(frame(10595), { absolute: true }), ];
      const obj26 = { guildId, gatedChannelId: tmp51 };
      tmp51 = undefined;
      const tmp48 = closure_14;
      const tmp5Result = frame(17883);
      if (needSubscriptionToAccess) {
        tmp51 = channelId;
      }
      items10[1] = tmp48(tmp5Result, obj26);
      items9[1] = closure_15(closure_6, obj25);
      return closure_15(closure_6, obj23);
    }
  }
  const obj27 = { style: items11, children: closure_14(EmptyState, obj28) };
  items11 = [memo, tmp.containerEmpty];
  obj28 = { title: intl.string(channelId(1128).t.ai6Lbr), body: intl2.string(channelId(1128).t["LTr+x9"]) };
  EmptyState = tmp2(1202).EmptyState;
  intl = tmp2(1128).intl;
  intl2 = tmp2(1128).intl;
  return closure_14(closure_6, obj27);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
