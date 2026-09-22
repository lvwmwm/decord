// Module ID: 16876
// Function ID: 16877
// Name: StandaloneChannelScreen
// Dependencies: [109, 19, 17, 13561, 2045, 8113, 1078, 2052, 21, 4758, 580, 558, 568, 1489, 1616, 8121, 2070, 504, 1119, 9398, 4616, 8182, 8114, 13574, 8124, 7403, 16877, 11592, 5221, 7469, 4693, 4619, 13586, 5276, 1181, 5343, 16886, 16903, 16921, 16938, 17087, 17091, 10331, 17095, 17096, 17097, 2]

// Module 16876 (StandaloneChannelScreen)
import nativeDefault from "native" /* 580 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 8114 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13561 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
let navigation = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(8113);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_9 } = MainTabsV2Constants);
const Constants = fn(1078);
({ EMPTY_STRING_SNOWFLAKE_ID: c10, ME: closure_11, ThemeTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4758);
let obj = { container: { flex: 1 }, onyxContainerBorder: { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" }, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
let obj3 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
obj.contentContainer = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj5 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj7 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.top = undefined;
obj7.height = 1;
obj7.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj7;
let obj6 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj8 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj9 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj10 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj11 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(isNavigationScreen[12]).c(56);
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  isNavigationScreen = channelId.isNavigationScreen;
  ({ frame, showCreateThread, isBackEnabled, measureNavigationTTI } = channelId);
  let obj = channelId(isNavigationScreen[12]);
  navigation = channelId(isNavigationScreen[13]).useNavigation();
  const tmp5 = closure_17();
  const top = guildId(isNavigationScreen[14])().top;
  const obj2 = channelId(isNavigationScreen[13]);
  const gradientTop = channelId(isNavigationScreen[15]).useGradientTop();
  if (null != frame) {
    const headerWithFadingFrame = tmp5.headerWithFadingFrame;
  }
  if (null != frame) {
    const splitDivider = tmp5.splitDivider;
  }
  if (null != frame) {
    const splitDividerTop = tmp5.splitDividerTop;
  }
  if (cResult[0] === frame) {
    if (cResult[1] === top) {
      if (cResult[3] === gradientTop) {
        if (cResult[4] === tmp5.headerWrapper) {
          if (cResult[5] === headerWithFadingFrame) {
            if (cResult[6] === splitDivider) {
              if (cResult[7] === splitDividerTop) {
                if (cResult[10] === isNavigationScreen) {
                  if (cResult[11] === navigation) {
                    let tmp10 = cResult[12];
                  }
                  const onPress = tmp10;
                  class F {
                    constructor() {
                      if (isNavigationScreen) {
                        tmp = closure_3;
                        goBackResult = closure_3.goBack();
                      }
                      return;
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [];
                    class F {
                      constructor() {
                        if (isNavigationScreen) {
                          tmp = closure_3;
                          goBackResult = closure_3.goBack();
                        }
                        return;
                      }
                    }
                    cResult[13] = items;
                  }
                  if (cResult[14] === channelId) {
                    tmp(tmp2[17]);
                    class F {
                      constructor() {
                        if (isNavigationScreen) {
                          tmp = closure_3;
                          goBackResult = closure_3.goBack();
                        }
                        return;
                      }
                    }
                    noop = tmp16;
                    let tmp17 = null != tmp16;
                    if (tmp17) {
                      tmp17 = tmp16 !== closure_11;
                    }
                    const _Symbol2 = Symbol;
                    class M {
                      constructor() {
                        obj = closure_0(closure_2[16]);
                        tmp = guildId;
                        if (obj.isFavoritesGuildId(guildId)) {
                          tmp2 = closure_8;
                          tmp3 = channelId;
                          channel = closure_8.getChannel(channelId);
                          tmp5 = null;
                          guild_id = undefined;
                          if (channel != null) {
                            guild_id = channel.guild_id;
                          }
                          tmp = guild_id;
                        }
                        return tmp;
                      }
                    }
                    if (cResult[19] === channelId) {
                      if (cResult[20] === tmp16) {
                        let tmp21 = cResult[21];
                      }
                      if (cResult[22] === tmp17) {
                        if (cResult[23] === tmp10) {
                          if (cResult[24] === tmp21) {
                            if (cResult[26] !== tmp5.headerBottomBorder) {
                              class F {
                                constructor() {
                                  if (isNavigationScreen) {
                                    tmp = closure_3;
                                    goBackResult = closure_3.goBack();
                                  }
                                  return;
                                }
                              }
                              tmp29[0] = tmp5.headerBottomBorder;
                              cResult[26] = tmp5.headerBottomBorder;
                              class M {
                                constructor() {
                                  obj = closure_0(closure_2[16]);
                                  tmp = guildId;
                                  if (obj.isFavoritesGuildId(guildId)) {
                                    tmp2 = closure_8;
                                    tmp3 = channelId;
                                    channel = closure_8.getChannel(channelId);
                                    tmp5 = null;
                                    guild_id = undefined;
                                    if (channel != null) {
                                      guild_id = channel.guild_id;
                                    }
                                    tmp = guild_id;
                                  }
                                  return tmp;
                                }
                              }
                              const tmp30 = closure_14(closure_6, tmp29);
                            }
                            class F {
                              constructor() {
                                if (isNavigationScreen) {
                                  tmp = closure_3;
                                  goBackResult = closure_3.goBack();
                                }
                                return;
                              }
                            }
                            let tmp32 = tmp22;
                            if (!isBackEnabled) {
                              class F {
                                constructor() {
                                  if (isNavigationScreen) {
                                    tmp = closure_3;
                                    goBackResult = closure_3.goBack();
                                  }
                                  return;
                                }
                              }
                              tmp35[0] = tmp5.spacer;
                              tmp32 = closure_14(closure_6, tmp35);
                            }
                            cResult[28] = cResult[25];
                            class M {
                              constructor() {
                                obj = closure_0(closure_2[16]);
                                tmp = guildId;
                                if (obj.isFavoritesGuildId(guildId)) {
                                  tmp2 = closure_8;
                                  tmp3 = channelId;
                                  channel = closure_8.getChannel(channelId);
                                  tmp5 = null;
                                  guild_id = undefined;
                                  if (channel != null) {
                                    guild_id = channel.guild_id;
                                  }
                                  tmp = guild_id;
                                }
                                return tmp;
                              }
                            }
                            cResult[30] = tmp5.spacer;
                            cResult[31] = tmp32;
                          }
                        }
                      }
                      class F {
                        constructor() {
                          if (isNavigationScreen) {
                            tmp = closure_3;
                            goBackResult = closure_3.goBack();
                          }
                          return;
                        }
                      }
                      if (tmp17) {
                        const obj4 = { triggerOnLongPress: true, align: "below", items: tmp21, children: null };
                        class F {
                          constructor() {
                            if (isNavigationScreen) {
                              tmp = closure_3;
                              goBackResult = closure_3.goBack();
                            }
                            return;
                          }
                        }
                        const tmp23Result = tmp23(tmp(tmp2[21]).ContextMenu, obj4);
                      } else {
                        { onPress: null }.onPress = tmp10;
                        class F {
                          constructor() {
                            if (isNavigationScreen) {
                              tmp = closure_3;
                              goBackResult = closure_3.goBack();
                            }
                            return;
                          }
                        }
                        const obj5 = { onPress: null };
                      }
                      cResult[22] = tmp17;
                      cResult[23] = tmp10;
                      class M {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          tmp = guildId;
                          if (obj.isFavoritesGuildId(guildId)) {
                            tmp2 = closure_8;
                            tmp3 = channelId;
                            channel = closure_8.getChannel(channelId);
                            tmp5 = null;
                            guild_id = undefined;
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
                    }
                    const obj6 = {
                      IconComponent: tmp(tmp2[19]).ServerIcon,
                      label: tmp20,
                      action() {
                                          NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId, channelId, resetRoot: false, drawerOpen: false });
                                        }
                    };
                    const items1 = [obj6];
                    cResult[19] = channelId;
                    cResult[20] = tmp16;
                    cResult[21] = items1;
                    tmp21 = items1;
                  }
                  class M {
                    constructor() {
                      obj = closure_0(closure_2[16]);
                      tmp = guildId;
                      if (obj.isFavoritesGuildId(guildId)) {
                        tmp2 = closure_8;
                        tmp3 = channelId;
                        channel = closure_8.getChannel(channelId);
                        tmp5 = null;
                        guild_id = undefined;
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
                class F {
                  constructor() {
                    if (isNavigationScreen) {
                      tmp = closure_3;
                      goBackResult = closure_3.goBack();
                    }
                    return;
                  }
                }
                cResult[10] = isNavigationScreen;
                cResult[11] = navigation;
                tmp10 = F;
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
      cResult[8] = cResult[2];
      cResult[9] = tmp9;
    }
  }
  if (null != frame) {
    const obj7 = { marginTop: top, minHeight: null };
    class F {
      constructor() {
        if (isNavigationScreen) {
          tmp = closure_3;
          goBackResult = closure_3.goBack();
        }
        return;
      }
    }
    obj7.minHeight = minHeight;
    let obj8 = obj7;
  } else {
    obj8 = { paddingTop: top, minHeight: null };
    class F {
      constructor() {
        if (isNavigationScreen) {
          tmp = closure_3;
          goBackResult = closure_3.goBack();
        }
        return;
      }
    }
    obj8.minHeight = top + minHeight;
  }
  cResult[0] = frame;
  cResult[1] = top;
  cResult[2] = obj8;
}) : ((channelId) => {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  navigation = channelId(isNavigationScreen[13]).useNavigation();
  const tmp4 = closure_17();
  noop = tmp4;
  const top = guildId(isNavigationScreen[14])().top;
  let obj = channelId(isNavigationScreen[13]);
  const gradientTop = channelId(isNavigationScreen[15]).useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const memo = noop.useMemo(() => {
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
      const obj2 = { marginTop: top, minHeight };
      let obj = obj2;
    } else {
      obj = { paddingTop: top, minHeight: top + minHeight };
    }
    items[5] = obj;
    return items;
  }, items);
  const items1 = [navigation, isNavigationScreen];
  const onPress = noop.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[15]);
  const items2 = [onPress];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[17]).useStateFromStores(items2, () => {
    let tmp = guildId;
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
  const obj4 = { IconComponent: null, label: null, action: null };
  const memo1 = noop.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== closure_2_11;
    }
    return tmp2;
  }, items4);
  obj4.IconComponent = channelId(isNavigationScreen[19]).ServerIcon;
  const intl = channelId(isNavigationScreen[18]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[18]).t.WYj55Y);
  obj4.action = function action() {
    NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false });
  };
  const items5 = [obj4];
  if (memo1) {
    const obj5 = {
      triggerOnLongPress: true,
      align: "below",
      items: items5,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.onPress = onPress;
          return state(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
        }
    };
    let tmp13Result1 = tmp11(tmp(tmp2[21]).ContextMenu, obj5);
    let tmp13 = tmp11;
  } else {
    const obj6 = { onPress };
    tmp13Result1 = tmp11(tmp(tmp2[22]).PressableNavigatorBackIcon, obj6);
    tmp13 = tmp11;
  }
  const items6 = [tmp13(top, { style: tmp4.headerBottomBorder }), ];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result1 = tmp13(tmp16, obj8);
  }
  const obj9 = { children: null };
  const obj10 = { children: null };
  const items7 = [tmp13Result1, tmp13(guildId(isNavigationScreen[23]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[24]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj10.children = items7;
  items6[1] = closure_15(channelId(isNavigationScreen[25]).LayerScope, obj10);
  obj9.children = items6;
  const tmp14Result = closure_15(closure_16, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    let tmp13Result = tmp13(tmp(tmp2[26]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj13);
  }
  const obj14 = { children: null };
  const items8 = [tmp13Result, frame];
  obj14.children = items8;
  return closure_15(closure_16, obj14);
});
ReactCompilerGating = fn(558);
let obj12 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = channelId(frame[12]).c(105);
  ({ guildId, channelId } = frame);
  ({ isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  const showCreateThread = frame.showCreateThread;
  const screenIndex = frame.screenIndex;
  const tmp4 = closure_17();
  let obj = channelId(frame[12]);
  navigation = channelId(frame[13]).useNavigation();
  const obj2 = channelId(frame[13]);
  const isSwipeToMemberListEnabled = channelId(frame[27]).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[28])(channelId).needSubscriptionToAccess;
  const obj3 = channelId(frame[27]);
  let tmp8 = guildId;
  if (guildId == null) {
    tmp8 = closure_10;
  }
  const canSeeOnboardingHome = channelId(frame[29]).useCanSeeOnboardingHome(tmp8);
  navigation.useRef(null);
  const obj4 = channelId(frame[29]);
  const tmp11 = isNavigationScreen(frame[30])();
  const isChatLockedOpen = isNavigationScreen(frame[31])().isChatLockedOpen;
  let onyxContainerBorder;
  if (null == frame) {
    if (tmp11 === constants.ONYX) {
      if (!tmp13) {
        onyxContainerBorder = tmp4.onyxContainerBorder;
      }
    }
  }
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === onyxContainerBorder) {
      let tmp15 = cResult[2];
    }
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp4.splitDivider;
    }
    if (cResult[3] === tmp4.contentContainer) {
      let tmp19 = !isChatLockedOpen;
      const isForumChannelSearchActive = tmp(tmp2[32]).useIsForumChannelSearchActive(channelId);
      if (isChatLockedOpen) {
        tmp19 = isNavigationScreen;
      }
      if (tmp19) {
        tmp19 = !isForumChannelSearchActive;
      }
      const isBackEnabled = tmp19;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[6] = items;
        let tmp21 = items;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] !== channelId) {
        class U {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_8;
              channel = closure_8.getChannel(tmp);
            }
            return channel;
          }
        }
        const items1 = [channelId];
        cResult[7] = channelId;
        cResult[8] = U;
        cResult[9] = items1;
        let tmp24 = items1;
        const tmp23 = U;
      } else {
        class U {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_8;
              channel = closure_8.getChannel(tmp);
            }
            return channel;
          }
        }
        tmp24 = cResult[9];
      }
      const tmpResult = tmp(tmp2[32]);
      const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp21, tmp23, tmp24);
      const tmpResult4 = tmp(tmp2[17]);
      const _Symbol2 = Symbol;
      const isVibegrationsChannelCandidate = tmp(tmp2[33]).useIsVibegrationsChannelCandidate(stateFromStores, "StandaloneChannelScreen");
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_8;
              channel = closure_8.getChannel(tmp);
            }
            return channel;
          }
        }
        const items2 = [VibegrationsAppChannelsStore];
        cResult[10] = items2;
      } else {
        class U {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_8;
              channel = closure_8.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      if (cResult[11] !== channelId) {
        class Q {
          constructor() {
            isChatOpenResult = null != channelId;
            if (isChatOpenResult) {
              tmp3 = closure_7;
              isChatOpenResult = closure_7.isChatOpen(tmp);
            }
            return isChatOpenResult;
          }
        }
        const items3 = [channelId];
        cResult[11] = channelId;
        cResult[12] = items3;
        cResult[13] = Q;
      } else {
        class Q {
          constructor() {
            isChatOpenResult = null != channelId;
            if (isChatOpenResult) {
              tmp3 = closure_7;
              isChatOpenResult = closure_7.isChatOpen(tmp);
            }
            return isChatOpenResult;
          }
        }
      }
      tmp(tmp2[17]);
      if (null != channelId) {
        class Q {
          constructor() {
            isChatOpenResult = null != channelId;
            if (isChatOpenResult) {
              tmp3 = closure_7;
              isChatOpenResult = closure_7.isChatOpen(tmp);
            }
            return isChatOpenResult;
          }
        }
      }
      if (cResult[14] === tmp15) {
        class Q {
          constructor() {
            isChatOpenResult = null != channelId;
            if (isChatOpenResult) {
              tmp3 = closure_7;
              isChatOpenResult = closure_7.isChatOpen(tmp);
            }
            return isChatOpenResult;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              isChatOpenResult = null != channelId;
              if (isChatOpenResult) {
                tmp3 = closure_7;
                isChatOpenResult = closure_7.isChatOpen(tmp);
              }
              return isChatOpenResult;
            }
          }
          const obj5 = { title: null, body: null };
          const intl = tmp(tmp2[18]).intl;
          obj5.title = intl.string(tmp(tmp2[18]).t.ai6Lbr);
          const intl2 = tmp(tmp2[18]).intl;
          obj5.body = intl2.string(tmp(tmp2[18]).t["LTr+x9"]);
          const tmp33 = closure_14(tmp(tmp2[34]).EmptyState, obj5);
          cResult[17] = tmp33;
          const tmp32 = tmp33;
        } else {
          class Q {
            constructor() {
              isChatOpenResult = null != channelId;
              if (isChatOpenResult) {
                tmp3 = closure_7;
                isChatOpenResult = closure_7.isChatOpen(tmp);
              }
              return isChatOpenResult;
            }
          }
        }
        if (cResult[18] !== tmp31) {
          class Q {
            constructor() {
              isChatOpenResult = null != channelId;
              if (isChatOpenResult) {
                tmp3 = closure_7;
                isChatOpenResult = closure_7.isChatOpen(tmp);
              }
              return isChatOpenResult;
            }
          }
          const obj6 = { style: tmp31, children: tmp32 };
          const tmp36 = closure_14(isBackEnabled, obj6);
          cResult[18] = tmp31;
          cResult[19] = tmp36;
          const tmp34 = tmp36;
        } else {
          class Q {
            constructor() {
              isChatOpenResult = null != channelId;
              if (isChatOpenResult) {
                tmp3 = closure_7;
                isChatOpenResult = closure_7.isChatOpen(tmp);
              }
              return isChatOpenResult;
            }
          }
        }
        return tmp34;
      }
      const items4 = [tmp15, tmp4.containerEmpty];
      cResult[14] = tmp15;
      cResult[15] = tmp4.containerEmpty;
      cResult[16] = items4;
      const tmpResult5 = tmp(tmp2[33]);
    }
    const items5 = [tmp4.contentContainer, splitDivider];
    cResult[3] = tmp4.contentContainer;
    cResult[4] = splitDivider;
    cResult[5] = items5;
  }
  const items6 = [tmp4.container, onyxContainerBorder];
  cResult[0] = tmp4.container;
  cResult[1] = onyxContainerBorder;
  cResult[2] = items6;
  tmp15 = items6;
}) : ((arg0) => {
  ({ guildId, channelId } = arg0);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_17();
  dependencyMap = tmp;
  navigation = channelId(1489).useNavigation();
  const obj = channelId(1489);
  const isSwipeToMemberListEnabled = channelId(11592).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5221)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11592);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_10;
  }
  const canSeeOnboardingHome = channelId(7469).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7469);
  const tmp9 = frame(4693)() === constants.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(4619)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, , ];
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
  const ref = isChatBesideChannelList.useRef(null);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(13586).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(13586);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  const tmp2Result4 = channelId(504);
  const isVibegrationsChannelCandidate = channelId(5276).useIsVibegrationsChannelCandidate(stateFromStores, "StandaloneChannelScreen");
  channelId(504);
  [][0] = channelId;
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === tmp41.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
            const items4 = [closure_14(closure_18, obj5), ];
            const obj6 = { style: memo1, children: null };
            let tmp32Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp32Result = tmp32(tmp5(16903), obj7);
            }
            obj6.children = tmp32Result;
            items4[1] = closure_14(closure_6, obj6);
            obj4.children = items4;
            return closure_15(closure_6, obj4);
          } else if (channelId === tmp41.MEMBER_SAFETY) {
            const obj8 = { guildId };
            return closure_14(tmp5(16921), obj8);
          } else if (channelId === tmp41.VIBEGRATIONS) {
            const obj9 = { guildId };
            return closure_14(tmp5(16938), obj9);
          } else {
            if (isVibegrationsChannelCandidate) {
              if (!tmp18) {
                if (null != stateFromStores) {
                  const obj10 = { style: memo, children: null };
                  const obj11 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
                  const items5 = [closure_14(closure_18, obj11), ];
                  const obj12 = { style: memo1, children: null };
                  const obj13 = { channel: stateFromStores };
                  obj12.children = closure_14(tmp5(17087), obj13);
                  items5[1] = closure_14(closure_6, obj12);
                  obj10.children = items5;
                  return closure_15(closure_6, obj10);
                }
              }
            }
            if (showCreateThread) {
              const obj14 = { style: memo1, children: null };
              const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
              const items6 = [closure_14(closure_18, obj15), ];
              const obj16 = { channelId, screenIndex };
              items6[1] = closure_14(tmp2(17091).CreateThreadView, obj16);
              obj14.children = items6;
              return tmp19(closure_6, obj14);
            } else {
              const obj17 = { children: null };
              const obj18 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: true };
              const items7 = [closure_14(closure_18, obj18), ];
              const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: null };
              const obj20 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj19.children = closure_14(tmp5(10331), obj20);
              items7[1] = closure_14(tmp2(16877).NavTTIView, obj19);
              obj17.children = items7;
              const tmp19Result = tmp19(closure_16, obj17);
              if (isSwipeToMemberListEnabled) {
                const obj21 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp14, children: tmp19Result };
                let tmp21Result = tmp21(tmp5(17095), obj21);
              } else {
                const obj22 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: tmp2(17097).CHANNEL_NAVIGATION_TTI,
                  visibilityMode: "prerendered",
                  isVisible: isNavigationTTIVisible,
                  descendantTracking: "included",
                  accessible: false,
                  onAccessibilityEscape() {
                                  if (closure_6) {
                                    navigation.goBack();
                                  }
                                },
                  style: memo,
                  children: tmp19Result
                };
                tmp21Result = tmp21(tmp2(17096).NavTTISurfaceProvider, obj22);
              }
              return tmp21Result;
            }
          }
        }
      }
      const obj23 = { style: memo, children: null };
      const obj24 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
      const items8 = [closure_14(closure_18, obj24), ];
      const obj25 = { style: memo1, children: null };
      const items9 = [closure_14(tmp5(5343), { absolute: true }), ];
      const obj26 = { guildId, gatedChannelId: null };
      let tmp40;
      if (needSubscriptionToAccess) {
        tmp40 = channelId;
      }
      obj26.gatedChannelId = tmp40;
      items9[1] = closure_14(tmp5(16886), obj26);
      obj25.children = items9;
      items8[1] = closure_15(closure_6, obj25);
      obj23.children = items8;
      return closure_15(closure_6, obj23);
    }
  }
  const obj27 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj27.style = items10;
  const obj28 = { title: null, body: null };
  const intl = tmp2(1119).intl;
  obj28.title = intl.string(channelId(1119).t.ai6Lbr);
  const intl2 = tmp2(1119).intl;
  obj28.body = intl2.string(channelId(1119).t["LTr+x9"]);
  obj27.children = closure_14(channelId(1181).EmptyState, obj28);
  return closure_14(closure_6, obj27);
}));
