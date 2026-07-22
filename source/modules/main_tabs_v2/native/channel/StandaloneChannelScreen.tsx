// Module ID: 15144
// Function ID: 114266
// Name: Header
// Dependencies: []

// Module 15144 (Header)
let MIDNIGHT_BORDER_WIDTH;
function Header(channelId) {
  let guildId;
  let screenIndex;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ screenIndex, guildId } = channelId);
  const importDefault = guildId;
  const isNavigationScreen = channelId.isNavigationScreen;
  const dependencyMap = isNavigationScreen;
  const frame = channelId.frame;
  const isMIDNIGHTTheme = channelId.isMIDNIGHTTheme;
  const View = isMIDNIGHTTheme;
  const isChatInputFloating = channelId.isChatInputFloating;
  const showCreateThread = channelId.showCreateThread;
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const tmp2 = callback2();
  const top = importDefault(dependencyMap[9])().top;
  let obj1 = arg1(dependencyMap[10]);
  const gradientTop = obj1.useGradientTop();
  const items = [, , , , , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3], headerWithFadingFrameMidnight: arr[4] } = tmp2);
  items[5] = gradientTop;
  items[6] = frame;
  items[7] = isMIDNIGHTTheme;
  items[8] = isChatInputFloating;
  items[9] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = importAllResult.useMemo(() => {
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
  const callback = importAllResult.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  const StaticChannelRoute = callback;
  const items2 = [guildId];
  obj = {};
  const memo1 = importAllResult.useMemo(() => {
    let tmp = null != guildId;
    if (tmp) {
      tmp = guildId !== top;
    }
    return tmp;
  }, items2);
  obj.IconComponent = arg1(dependencyMap[11]).ServerIcon;
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.string(arg1(dependencyMap[12]).t.WYj55Y);
  obj.action = function action() {
    let obj = channelId(isNavigationScreen[13]);
    obj = { "Bool(false)": 1094738768, "Bool(false)": 159802, "Null": "black", "Null": "0.1", "Null": "M248.055 0.225335H85.0491V154.266H248.055V0.225335Z", guildId, channelId };
    obj.navigateToRootTab(obj);
  };
  const items3 = [obj];
  if (memo1) {
    obj = {
      addWindow: "/assets/design/components/Icon/native/redesign/generated/images",
      for: 24,
      items: items3,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj["onPress"] = callback;
          return callback(channelId(isNavigationScreen[15]).PressableNavigatorBackIcon, obj);
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
        tmp13 = callback(View, obj3);
      }
    }
  }
  const items5 = [tmp13, , ];
  const obj5 = { style: memo };
  const items6 = [callback(View, { style: tmp2.headerBottomBorder }), ];
  const obj7 = {};
  if (!channelId.isBackEnabled) {
    const obj8 = { style: tmp2.spacer };
    tmp7Result = callback(View, obj8);
  }
  const items7 = [tmp7Result, callback(importDefault(dependencyMap[17]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), callback(importDefault(dependencyMap[18]), { containerStyle: tmp2.actions, channelId, screenIndex, showCreateThread })];
  obj7.children = items7;
  items6[1] = closure_12(arg1(dependencyMap[16]).LayerScope, obj7);
  obj5.children = items6;
  items5[1] = closure_12(View, obj5);
  items5[2] = frame;
  obj2.children = items5;
  return closure_12(closure_13, obj2);
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ HEADER_CORNER_RADIUS: closure_5, MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, ME: closure_8, ThemeTypes: closure_9 } = arg1(dependencyMap[3]));
const StaticChannelRoute = arg1(dependencyMap[4]).StaticChannelRoute;
const tmp4 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { container: { flex: 1 } };
obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj.midnightContainerBorder = obj;
obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.contentContainer = obj1;
const tmp5 = arg1(dependencyMap[5]);
obj.midnightContentContainerBorder = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
const obj2 = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
obj.containerEmpty = { backgroundColor: importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
const obj3 = { backgroundColor: importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { backgroundColor: importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
const obj5 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj5["top"] = undefined;
obj5["height"] = 1;
obj5["backgroundColor"] = importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj5;
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWithFadingFrame = { borderTopLeftRadius: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const obj6 = { borderTopLeftRadius: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
const obj7 = { borderLeftWidth: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
const obj8 = { borderTopWidth: importDefault(dependencyMap[7]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER };
obj.headerWithFadingFrameMidnight = { borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER, borderTopColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
const obj9 = { borderLeftColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER, borderTopColor: importDefault(dependencyMap[7]).colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
obj.midnightFrameCover = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
const obj10 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
obj.actions = { marginRight: importDefault(dependencyMap[7]).space.PX_16 };
const obj11 = { marginRight: importDefault(dependencyMap[7]).space.PX_16 };
obj.spacer = { width: importDefault(dependencyMap[7]).space.PX_16 };
let closure_14 = obj1.createStyles(obj);
const obj12 = { width: importDefault(dependencyMap[7]).space.PX_16 };
const memoResult = importAllResult.memo(function StandaloneChannelScreen(arg0) {
  let channelId;
  let frame;
  let guildId;
  let isNavigationScreen;
  let screenIndex;
  let showCreateThread;
  ({ guildId, channelId, isNavigationScreen, frame } = arg0);
  const arg1 = frame;
  ({ showCreateThread, screenIndex } = arg0);
  let importAllResult;
  let View;
  let orientation;
  let tmp11;
  const tmp = callback2();
  const importDefault = tmp;
  let obj = arg1(closure_2[8]);
  closure_2 = obj.useNavigation();
  let obj1 = arg1(closure_2[19]);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = importDefault(closure_2[20])(channelId).needSubscriptionToAccess;
  let obj2 = arg1(closure_2[21]);
  let tmp3 = guildId;
  if (null == guildId) {
    tmp3 = closure_7;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp3);
  const tmp6 = importDefault(closure_2[22])() === constants.MIDNIGHT;
  importAllResult = tmp6;
  let obj3 = arg1(closure_2[23]);
  const chatInputFloating = obj3.useMobileVisualRefreshConfig({ location: "StandaloneChannelScreen" }).chatInputFloating;
  View = chatInputFloating;
  let obj4 = arg1(closure_2[24]);
  orientation = obj4.useOrientation();
  const items = [frame, tmp6, chatInputFloating, orientation, , ];
  ({ container: arr[4], midnightContainerBorder: arr[5] } = tmp);
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.container, ];
    let prop;
    if (null == frame) {
      if (tmp6) {
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
      if (tmp6) {
        if (!chatInputFloating) {
          prop = tmp.midnightContentContainerBorder;
        }
      }
    }
    items[2] = prop;
    return items;
  }, items1);
  let obj5 = arg1(closure_2[25]);
  const isForumChannelSearchActive = obj5.useIsForumChannelSearchActive(channelId);
  tmp11 = (!importDefault(closure_2[26])().isChatLockedOpen || isNavigationScreen) && !isForumChannelSearchActive;
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
              tmp36 = callback(importDefault(closure_2[30]), obj2);
            }
            obj1.children = tmp36;
            items2[1] = callback(View, obj1);
            obj.children = items2;
            return closure_12(View, obj);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            obj3 = { guildId };
            return callback(importDefault(closure_2[31]), obj3);
          } else if (showCreateThread) {
            obj4 = { style: memo1 };
            const items3 = [tmp52, ];
            obj5 = { channelId, screenIndex };
            items3[1] = callback(arg1(closure_2[32]).CreateThreadView, obj5);
            obj4.children = items3;
            return tmp55(View, obj4);
          } else {
            const obj6 = {};
            const items4 = [tmp52, ];
            const obj7 = { style: memo1 };
            const obj8 = { guildId, channelId, chatInputRef: ref, screenIndex };
            obj7.children = callback(importDefault(closure_2[33]), obj8);
            items4[1] = callback(View, obj7);
            obj6.children = items4;
            const tmp55Result = tmp55(closure_13, obj6);
            if (isSwipeToMemberListEnabled) {
              const obj9 = { style: memo, channelId, screenIndex, isBackEnabled: tmp11, children: tmp55Result };
              let tmp20Result = tmp20(importDefault(closure_2[34]), obj9);
            } else {
              const obj10 = {
                style: memo,
                accessible: false,
                onAccessibilityEscape() {
                              if (tmp11) {
                                navigation.goBack();
                              }
                            },
                children: tmp55Result
              };
              tmp20Result = tmp20(View, obj10);
            }
            return tmp20Result;
          }
        }
      }
      const obj11 = { style: memo };
      const items5 = [tmp52, ];
      const obj12 = { style: memo1 };
      const obj13 = { absolute: true };
      const items6 = [callback(importDefault(closure_2[28]), obj13), ];
      const obj14 = { guildId };
      let tmp49;
      if (needSubscriptionToAccess) {
        tmp49 = channelId;
      }
      obj14.gatedChannelId = tmp49;
      items6[1] = callback(importDefault(closure_2[29]), obj14);
      obj12.children = items6;
      items5[1] = closure_12(View, obj12);
      obj11.children = items5;
      return closure_12(View, obj11);
    }
  }
  const obj15 = { style: items7 };
  const items7 = [memo, tmp.containerEmpty];
  const obj16 = {};
  const intl = arg1(closure_2[12]).intl;
  obj16.title = intl.string(arg1(closure_2[12]).t.ai6Lbr);
  const intl2 = arg1(closure_2[12]).intl;
  obj16.body = intl2.string(arg1(closure_2[12]).t.LTr+x9);
  obj15.children = callback(arg1(closure_2[27]).EmptyState, obj16);
  return callback(View, obj15);
});
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;
