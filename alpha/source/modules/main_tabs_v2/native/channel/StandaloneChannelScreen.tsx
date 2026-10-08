// Module ID: 16778
// Function ID: 16779
// Name: StandaloneChannelScreen
// Dependencies: [109, 19, 17, 2063, 9233, 1085, 2070, 21, 5090, 587, 558, 576, 1503, 1630, 9241, 2089, 504, 1126, 9182, 4936, 9297, 9234, 12838, 9244, 6835, 16779, 11260, 5409, 6911, 4991, 4939, 12850, 9249, 1200, 10211, 16784, 16801, 16819, 16837, 17073, 17082, 10342, 17086, 17087, 11644, 2]

// Module 16778 (StandaloneChannelScreen)
import nativeDefault from "native" /* 587 */;
import ChannelConstants from "ChannelConstants" /* 2070 */;
import FavoritesUtils from "FavoritesUtils" /* 2089 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import PressableNavigatorBackIcon2 from "PressableNavigatorBackIcon" /* 9234 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import react_native_mod2 from "react-native" /* 9233 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, tmp3;

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
          return authStore2(PressableNavigatorBackIcon, obj);
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
  let intl;
  let intl2;
  let isNavigationScreen;
  let isNavigationTTIVisible;
  let tmp = channelId;
  let tmp2 = frame;
  let obj = channelId(frame[11]);
  const cResult = obj.c(101);
  ({ guildId, channelId } = frame);
  ({ isNavigationTTIVisible, isNavigationScreen } = frame);
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
  navigation.useRef(null);
  const ONYX = constants2.ONYX;
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
      let tmp22;
      let tmp25;
      let tmp24;
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
        const items = [ChannelStore];
        cResult[6] = items;
        tmp22 = items;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] !== channelId) {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        const items1 = [channelId];
        cResult[7] = channelId;
        cResult[8] = Y;
        cResult[9] = items1;
        tmp25 = items1;
        tmp24 = Y;
      } else {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        tmp25 = cResult[9];
      }
      const tmpResult3 = tmp(tmp2[16]);
      const stateFromStores = tmpResult3.useStateFromStores(tmp22, tmp24, tmp25);
      tmp(tmp2[32]);
      if (null != channelId) {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      if (cResult[10] === tmp16) {
        let tmp29;
        let tmp31;
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
          const obj4 = { title: intl.string(tmp(tmp2[17]).t.ai6Lbr), body: intl2.string(tmp(tmp2[17]).t["LTr+x9"]) };
          const EmptyState = tmp(tmp2[33]).EmptyState;
          intl = tmp(tmp2[17]).intl;
          intl2 = tmp(tmp2[17]).intl;
          const tmp30 = closure_14(EmptyState, obj4);
          cResult[13] = tmp30;
          tmp29 = tmp30;
        } else {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
        }
        if (cResult[14] !== tmp28) {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
          const obj5 = { style: tmp28, children: tmp29 };
          const tmp33 = closure_14(isBackEnabled, obj5);
          cResult[14] = tmp28;
          cResult[15] = tmp33;
          tmp31 = tmp33;
        } else {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
        }
        return tmp31;
      }
      const items2 = [tmp16, tmp4.containerEmpty];
      cResult[10] = tmp16;
      cResult[11] = tmp4.containerEmpty;
      cResult[12] = items2;
    }
    const items3 = [tmp4.contentContainer, splitDivider];
    cResult[3] = tmp4.contentContainer;
    cResult[4] = splitDivider;
    cResult[5] = items3;
  }
  const items4 = [tmp4.container, onyxContainerBorder];
  cResult[0] = tmp4.container;
  cResult[1] = onyxContainerBorder;
  cResult[2] = items4;
  tmp16 = items4;
}) : (function StandaloneChannelScreen(arg0) {
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
  let tmp38Result;
  let tmp46;
  ({ guildId, channelId } = arg0);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  let closure_4;
  let isChatBesideChannelList;
  let closure_6;
  let tmp = closure_17();
  dependencyMap = tmp;
  const obj = channelId(1503);
  navigation = obj.useNavigation();
  const obj2 = channelId(11260);
  const isSwipeToMemberListEnabled = obj2.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5409)(channelId).needSubscriptionToAccess;
  let tmp7 = guildId;
  const useCanSeeOnboardingHome = channelId(6911).useCanSeeOnboardingHome;
  channelId(6911);
  if (guildId == null) {
    tmp7 = closure_10;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(tmp7);
  const ref = isChatBesideChannelList.useRef(null);
  const tmp10 = frame(4991)() === constants2.ONYX;
  closure_4 = tmp10;
  const tmp11 = frame(4939)();
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
  const tmp2Result = channelId(12850);
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
  const tmp2Result3 = channelId(504);
  const stateFromStores = tmp2Result3.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  channelId(9249);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj3 = { style: memo, children: items4 };
            const obj4 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
            items4 = [closure_14(closure_18, obj4), ];
            const obj5 = { style: memo1, children: tmp38Result };
            tmp38Result = null;
            const tmp36 = closure_15;
            if (canSeeOnboardingHome) {
              const obj6 = { guildId };
              tmp38Result = tmp38(tmp5(16801), obj6);
            }
            items4[1] = closure_14(closure_6, obj5);
            return tmp36(closure_6, obj3);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj7 = { guildId };
            return closure_14(frame(16819), obj7);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj8 = { guildId };
            return closure_14(frame(16837), obj8);
          } else {
            let type;
            if (stateFromStores != null) {
              type = stateFromStores.type;
            }
            if (type === constants.GUILD_APP) {
              if (!tmp18) {
                const obj10 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
                const obj9 = { style: memo, children: items5 };
                items5 = [closure_14(closure_18, obj10), ];
                const obj11 = { style: memo1, children: closure_14(frame(17073), obj12) };
                obj12 = { channel: stateFromStores };
                items5[1] = closure_14(closure_6, obj11);
                return closure_15(closure_6, obj9);
              }
            }
            if (showCreateThread) {
              const obj13 = { style: memo1, children: items6 };
              const obj14 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
              items6 = [closure_14(closure_18, obj14), ];
              const obj15 = { channelId, screenIndex };
              items6[1] = closure_14(channelId(17082).CreateThreadView, obj15);
              return closure_15(closure_6, obj13);
            } else {
              let tmp27Result;
              const obj16 = { children: items7 };
              const obj17 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: true };
              items7 = [closure_14(closure_18, obj17), ];
              const obj18 = { name: "chat_container", tracking: "include", style: memo1, children: closure_14(frame(10342), obj19) };
              const NavTTIView = tmp2(16779).NavTTIView;
              obj19 = { guildId, channelId, chatInputRef: ref, screenIndex };
              items7[1] = closure_14(NavTTIView, obj18);
              const tmp25Result = closure_15(closure_16, obj16);
              if (isSwipeToMemberListEnabled) {
                const obj20 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp15, children: tmp25Result };
                tmp27Result = tmp27(tmp5(17086), obj20);
              } else {
                const obj21 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: channelId(11644).CHANNEL_NAVIGATION_TTI,
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
                  children: tmp25Result
                };
                const NavTTISurfaceProvider = tmp2(17087).NavTTISurfaceProvider;
                tmp27Result = tmp27(NavTTISurfaceProvider, obj21);
              }
              return tmp27Result;
            }
          }
        }
      }
      const obj22 = { style: memo, children: items8 };
      const obj23 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp15, measureNavigationTTI: false };
      items8 = [closure_14(closure_18, obj23), ];
      const obj24 = { style: memo1, children: items9 };
      items9 = [closure_14(frame(10211), { absolute: true }), ];
      const obj25 = { guildId, gatedChannelId: tmp46 };
      tmp46 = undefined;
      const tmp43 = closure_14;
      const tmp5Result = frame(16784);
      if (needSubscriptionToAccess) {
        tmp46 = channelId;
      }
      items9[1] = tmp43(tmp5Result, obj25);
      items8[1] = closure_15(closure_6, obj24);
      return closure_15(closure_6, obj22);
    }
  }
  const obj26 = { style: items10, children: closure_14(EmptyState, obj27) };
  items10 = [memo, tmp.containerEmpty];
  obj27 = { title: intl.string(channelId(1126).t.ai6Lbr), body: intl2.string(channelId(1126).t["LTr+x9"]) };
  EmptyState = tmp2(1200).EmptyState;
  intl = tmp2(1126).intl;
  intl2 = tmp2(1126).intl;
  return closure_14(closure_6, obj26);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
