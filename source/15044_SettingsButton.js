// Module ID: 15044
// Function ID: 113261
// Name: SettingsButton
// Dependencies: []
// Exports: ICYMITab

// Module 15044 (SettingsButton)
function SettingsButton() {
  const obj = {
    icon: callback2(arg1(dependencyMap[15]).FiltersHorizontalIcon, { size: "sm" }),
    onPress() {
      callback2(paths[16]).itemInteracted("filters_button", "filters_button", "press_info_button");
      const obj = callback2(paths[16]);
      callback2(paths[16]).feedPageActioned({ actionParameters: {} });
      const obj2 = callback2(paths[16]);
      callback2(paths[17]).openLazy(callback(paths[19])(paths[18], paths.paths), "ICYMISettingsActionSheet", {});
    }
  };
  return callback2(arg1(dependencyMap[14]).IconButton, obj);
}
function InfoButton() {
  const obj = {
    icon: callback2(arg1(dependencyMap[20]).CircleInformationIcon, { size: "sm" }),
    onPress() {
      callback2(closure_2[16]).itemInteracted("info_button", "info_button", "press_info_button");
      const obj = callback2(closure_2[16]);
      callback2(closure_2[16]).feedPageActioned({ actionParameters: {} });
      const obj2 = callback2(closure_2[16]);
      callback(closure_2[21]).pushICYMIInfoModal({ extendedOnboarding: true });
    }
  };
  return callback2(arg1(dependencyMap[14]).IconButton, obj);
}
function ICYMIHeaderTextWrapper() {
  const tmp = callback5();
  return callback2(closure_5, {
    style: callback5().headerText,
    children: importAllResult.useMemo(() => {
      let obj = {};
      obj = { "Bool(false)": null, "Bool(false)": "hidden", "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images" };
      const intl = callback(closure_2[23]).intl;
      obj.children = intl.string(callback(closure_2[23]).t.SY4sdZ);
      const items = [callback2(callback(closure_2[22]).Text, obj), ];
      obj = { style: { marginTop: 4 } };
      const intl2 = callback(closure_2[23]).intl;
      obj.children = intl2.string(callback(closure_2[23]).t.Ac2OZA);
      items[1] = callback2(callback(closure_2[22]).Text, obj);
      obj.children = items;
      return callback3(closure_15, obj);
    }, [])
  });
}
function handleEndReached() {
  arg1(dependencyMap[32]).hydrateNextPage();
}
function ICYMI(inNestedNavigator) {
  let data;
  let handleOnRefresh;
  let height;
  let isRefreshing;
  let loading;
  let stickyHeaderIndices;
  let version;
  let viewabilityConfigCallbackPairs;
  let visibleItemIds;
  let width;
  const tmp = callback5();
  ({ height, width } = importDefault(dependencyMap[33])());
  let obj = arg1(dependencyMap[35]);
  const isFocused = obj.useIsFocused();
  const arg1 = isFocused;
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    isFocused(visibleItemIds[36]).trackAppUIViewed();
  });
  let obj1 = arg1(dependencyMap[37]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  const importDefault = stateFromStores;
  let obj2 = arg1(dependencyMap[37]);
  const items1 = [closure_11];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => lib.notificationItem(), []);
  const items2 = [isFocused];
  const effect = importAllResult.useEffect(() => {
    stateFromStores(visibleItemIds[16]).setTabFocused(isFocused);
  }, items2);
  let obj3 = arg1(dependencyMap[39]);
  const sharedICYMILogic = obj3.useSharedICYMILogic({ showDot: importDefault(dependencyMap[38])().showDot, notificationItem: stateFromStores1 });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const dependencyMap = visibleItemIds;
  const endVisible = sharedICYMILogic.endVisible;
  let callback = endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj4 = arg1(dependencyMap[40]);
  const iCYMIEmptyLoadingAnalytics = obj4.useICYMIEmptyLoadingAnalytics(loading, isFocused);
  let obj5 = arg1(dependencyMap[41]);
  const items3 = [arg1(dependencyMap[42]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp10 = callback(obj5.useGetDismissibleContent(items3), 2);
  const first = tmp10[0];
  let num = 1;
  const tmp12 = tmp10[1];
  let obj6 = arg1(dependencyMap[37]);
  const items4 = [closure_9];
  const stateFromStores2 = obj6.useStateFromStores(items4, () => ref1.getGuildCount());
  closure_7 = stateFromStores2;
  const items5 = [first, tmp12, stateFromStores2];
  const effect1 = importAllResult.useEffect(() => {
    if (null != first) {
      let obj = isFocused(visibleItemIds[21]);
      obj = { extendedOnboarding: stateFromStores2 <= closure_12 };
      obj.pushICYMIInfoModal(obj);
      tmp12(constants.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = importAllResult.useEffect(() => {
    let hasOpenedEnoughTimesResult = endVisible;
    if (endVisible) {
      hasOpenedEnoughTimesResult = lib.hasOpenedEnoughTimes();
    }
    if (hasOpenedEnoughTimesResult) {
      stateFromStores(visibleItemIds[17]).openLazy(isFocused(visibleItemIds[19])(visibleItemIds[43], visibleItemIds.paths), "ICYMIFeedbackSheet", {});
      const obj = stateFromStores(visibleItemIds[17]);
    }
  }, items6);
  const ref = handleOnRefresh.useRef(null);
  let closure_8 = ref;
  obj = {
    scrollToTop() {
      const current = ref.current;
      if (null != current) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    }
  };
  const ref1 = handleOnRefresh.useRef(obj);
  closure_9 = ref1;
  const tmp2 = importDefault(dependencyMap[33])();
  const scrollToTop = arg1(dependencyMap[35]).useScrollToTop(ref1);
  const obj9 = arg1(dependencyMap[35]);
  const items7 = [closure_10];
  const stateFromStores3 = arg1(dependencyMap[37]).useStateFromStores(items7, () => stateFromStores3.getDoubleTapBehavior());
  closure_10 = stateFromStores3;
  const obj10 = arg1(dependencyMap[37]);
  const items8 = [stateFromStores3, arg1(dependencyMap[44]).useNavigation(), stateFromStores];
  const effect3 = importAllResult.useEffect(() => {
    if (stateFromStores3 === isFocused(visibleItemIds[45]).GravityICYMIDoubleTapBehavior.DEFAULT) {
      let obj = {
        scrollToTop() {
            const current = ref.current;
            if (null != current) {
              const obj = { offset: 0, animated: !closure_1 };
              current.scrollToOffset(obj);
            }
          }
      };
      ref1.current = obj;
    } else {
      obj = {
        scrollToTop() {
            let obj = callback2(paths[46]);
            obj = { presentation: "modal" };
            obj.pushLazy(callback(paths[19])(paths[47], paths.paths), {}, "for-later-modal", obj);
          }
      };
      ref1.current = obj;
    }
  }, items8);
  const items9 = [ref, stateFromStores];
  closure_11 = importAllResult.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      const obj = { offset: 0, animated: !stateFromStores };
      current.scrollToOffset(obj);
    }
  }, items9);
  const obj11 = arg1(dependencyMap[44]);
  const items10 = [visibleItemIds, endVisible];
  const mobileQuestDockHeight = arg1(dependencyMap[48]).useMobileQuestDockHeight();
  callback = importAllResult.useCallback((item) => {
    item = item.item;
    const isFocused = item;
    const kind = item.data.kind;
    if ("message" === kind) {
      if (item.channelType === isFocused(visibleItemIds[49]).ChannelTypes.GUILD_ANNOUNCEMENT) {
        let obj = { unread: item.unread, message: item.data.message, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        let tmp41 = callback(stateFromStores(visibleItemIds[50]), obj);
        const tmp45 = stateFromStores(visibleItemIds[50]);
      } else {
        obj = { message: item.data.message, messageContext: item.data.messageContext, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        tmp41 = callback(stateFromStores(visibleItemIds[51]), obj);
        const tmp38 = stateFromStores(visibleItemIds[51]);
      }
    } else {
      if ("contentInventory" === kind) {
        const obj1 = { visible: null != visibleItemIds.find((item) => item.item.id === item.id), content: item.data.content };
        let tmp7 = callback(stateFromStores(visibleItemIds[52]), obj1);
        const tmp30 = stateFromStores(visibleItemIds[52]);
      } else if ("loading" === kind) {
        return callback(isFocused(visibleItemIds[53]).ICYMILoading, {});
      } else if ("bottomLoading" === kind) {
        return callback(isFocused(visibleItemIds[54]).ICYMIBottomLoading, {});
      } else if ("end" === kind) {
        const obj2 = { visible: endVisible };
        return callback(stateFromStores(visibleItemIds[55]), obj2);
      } else if ("guildEvent" === kind) {
        const obj3 = { eventId: item.data.eventId };
        tmp7 = callback(stateFromStores(visibleItemIds[56]), obj3);
      } else if ("recommendedGuilds" === kind) {
        tmp7 = callback(isFocused(visibleItemIds[57]).ICYMIServerRecommendationRow, {});
      } else if ("icymiHeader" === kind) {
        return callback(stateFromStores(visibleItemIds[58]), {});
      } else if ("forumThread" === kind) {
        obj = { message: item.data.message, channel: item.data.threadChannel, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        tmp7 = callback(isFocused(visibleItemIds[59]).ICYMIForumThreadRow, obj);
      } else {
        return null;
      }
      const obj4 = { itemId: item.id, children: tmp7 };
      return callback(isFocused(visibleItemIds[60]).CardHeightMeasurer, obj4);
    }
  }, items10);
  const memo = importAllResult.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = arg1(dependencyMap[48]);
  const clientThemesOverride = arg1(dependencyMap[61]).useClientThemesOverride();
  const obj13 = arg1(dependencyMap[61]);
  const items11 = [closure_11];
  obj = { style: items12 };
  const items12 = [, ];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  const stateFromStores4 = arg1(dependencyMap[37]).useStateFromStores(items11, () => lib.hasNewContent(), []);
  const items13 = [callback2(closure_19, { inNestedNavigator: inNestedNavigator.inNestedNavigator }), ];
  obj1 = { style: items14 };
  const items14 = [tmp.flashListWrapper, , ];
  obj2 = { height: height - importDefault(dependencyMap[34])().top - 32 - 24 - mobileQuestDockHeight, width, marginHorizontal: "auto" };
  items14[1] = obj2;
  items14[2] = clientThemesOverride;
  obj3 = {
    onPress() {
      stateFromStores(visibleItemIds[16]).itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      const obj = stateFromStores(visibleItemIds[16]);
      stateFromStores(visibleItemIds[16]).feedPageActioned({ actionParameters: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } });
      handleOnRefresh();
      lib();
    },
    isRefreshing
  };
  const items15 = [callback2(importDefault(dependencyMap[62]), obj3), , ];
  obj4 = { ref, scrollEnabled: !loading, extraData: { endVisible }, contentContainerStyle: memo };
  const intl = arg1(dependencyMap[23]).intl;
  obj4.accessibilityLabel = intl.string(arg1(dependencyMap[23]).t.OIgYlQ);
  obj4.data = data;
  obj4.refreshing = isRefreshing;
  obj5 = { onRefresh: handleOnRefresh, refreshing: isRefreshing, tintColor: tmp.refreshing.color };
  obj6 = {};
  let num2 = 1;
  if (stateFromStores4) {
    num2 = 0;
  }
  obj6.opacity = num2;
  obj5.style = obj6;
  obj4.refreshControl = callback2(tmp12, obj5);
  obj4.onEndReachedThreshold = 3;
  obj4.onEndReached = handleEndReached;
  obj4.keyExtractor = keyExtractor;
  obj4.renderItem = callback;
  obj4.getItemType = arg1(dependencyMap[32]).itemToType;
  const obj14 = arg1(dependencyMap[37]);
  const tmp26 = closure_16;
  const tmp27 = first;
  const tmp28 = closure_16;
  const tmp29 = first;
  const tmp30 = callback2;
  const tmp31 = callback2;
  const tmp32 = tmp12;
  arg1(dependencyMap[64]).isAndroid();
  obj4.drawDistance = 100;
  obj4.stickyHeaderIndices = stickyHeaderIndices;
  obj4.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
  if (!loading) {
    num = version;
  }
  items15[1] = tmp30(arg1(dependencyMap[63]).FlashList, obj4, "Version-" + num);
  items15[2] = callback2(arg1(dependencyMap[65]).TTIFirstContentfulPaint, { label: "icymi" });
  obj1.children = items15;
  items13[1] = tmp28(tmp29, obj1);
  obj.children = items13;
  return tmp26(tmp27, obj);
}
function keyExtractor(id) {
  return id.id;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, RefreshControl: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).NUM_GUILDS_EXTENDED_ONBOARDING;
const ContentDismissActionType = arg1(dependencyMap[9]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
let closure_17 = arg1(dependencyMap[11]).createStyles((paddingTop) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_8, overflow: "hidden", flex: 1, paddingTop };
  obj.containerOuterTablet = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[11]);
let closure_18 = arg1(dependencyMap[13]).createICYMIStyles((margin) => {
  let obj = { container: {} };
  obj = { 0: 1899393361, 9223372036854775807: -1, 9223372036854775807: 1922261329, 0: 24, borderTopLeftRadius: importDefault(dependencyMap[12]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[12]).radii.sm };
  obj.containerInPanels = obj;
  obj = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
  obj.containerBackground = obj;
  const obj1 = { <string:2071771907>: "isArray", <string:1985397584>: "NOTIFICATION_SETTINGS_MODAL_OPEN", <string:1415599467>: "isArray", backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
  obj.flashListWrapper = obj1;
  obj.refreshing = { color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj3 = { "Null": null, "Null": null, "Null": null, "Null": null, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
  obj.header = obj3;
  obj.headerLeft = { -9223372036854775808: true, filter: true };
  const obj2 = { color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.headerClose = { marginRight: importDefault(dependencyMap[12]).space.PX_16, height: importDefault(dependencyMap[12]).space.PX_32, width: importDefault(dependencyMap[12]).space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: importDefault(dependencyMap[12]).radii.lg };
  obj.headerTitle = { marginHorizontal: margin.margin };
  obj.headerText = {};
  const obj6 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[12]).space.PX_12 };
  obj.headerActions = obj6;
  const obj7 = { <string:1140607356>: null, <string:1751293292>: null, borderRadius: importDefault(dependencyMap[12]).radii.round };
  obj.notificationBadge = obj7;
  const obj8 = { -9223372036854775808: 323420161, 0: -2104950783, paddingTop: importDefault(dependencyMap[12]).space.PX_96 };
  obj.loading = obj8;
  const obj9 = { "Bool(false)": 1375732026, "Bool(false)": 1685942490, "Bool(false)": 1345143057, "Bool(false)": 410124290, "Bool(false)": 402653184, "Bool(false)": 16777216, backgroundColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE };
  obj.headerBorder = obj9;
  return obj;
});
let closure_19 = importAllResult.memo((inNestedNavigator) => {
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = callback5();
  const tmp2 = importDefault(dependencyMap[24])();
  let obj = { top: !tmp2, style: tmp.header };
  obj = {};
  obj = { dark: arg1(dependencyMap[27]).OverlayOpacity.LEVEL_7, light: arg1(dependencyMap[27]).OverlayOpacity.LEVEL_8 };
  obj.mixAmount = obj;
  const items = [callback2(importDefault(dependencyMap[26]), obj), , ];
  const obj1 = { style: tmp.headerTitle };
  const obj2 = { style: tmp.headerLeft };
  if (!tmp2) {
    if (!inNestedNavigator) {
      const items1 = [null, callback2(ICYMIHeaderTextWrapper, {})];
      obj2.children = items1;
      const items2 = [tmp7(tmp8, obj2), ];
      const obj3 = { style: tmp.headerActions };
      const items3 = [callback2(InfoButton, {}), callback2(SettingsButton, {})];
      obj3.children = items3;
      items2[1] = callback3(closure_5, obj3);
      obj1.children = items2;
      items[1] = tmp5(tmp6, obj1);
      const obj4 = { style: tmp.headerBorder };
      items[2] = callback2(closure_5, obj4);
      obj.children = items;
      return callback3(arg1(dependencyMap[25]).SafeAreaPaddingView, obj);
    }
  }
  const obj5 = { style: tmp.headerClose };
  const intl = arg1(dependencyMap[23]).intl;
  obj5.accessibilityLabel = intl.string(arg1(dependencyMap[23]).t.13/7kX);
  obj5.onPress = arg1(dependencyMap[29]).goBack;
  let LeftBackIconWithBadge = arg1;
  if (inNestedNavigator) {
    LeftBackIconWithBadge = LeftBackIconWithBadge(tmp12[30]).LeftBackIconWithBadge;
    const obj6 = { includeNotificationsCount: true };
    let tmp11Result = tmp11(LeftBackIconWithBadge, obj6);
  } else {
    const obj7 = { color: "interactive-text-default" };
    tmp11Result = tmp11(LeftBackIconWithBadge(tmp12[31]).XSmallIcon, obj7);
  }
  obj5.children = tmp11Result;
  callback2(arg1(dependencyMap[28]).PressableOpacity, obj5);
});
const obj3 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[70]).fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = function ICYMITab(route) {
  route = route.route;
  let importDefault;
  let obj = arg1(dependencyMap[37]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp3 = importDefault(dependencyMap[24])();
  const arg1 = tmp3;
  let inNestedNavigator;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  const tmp5 = callback4(importDefault(dependencyMap[34])().top);
  importDefault = tmp5;
  const items1 = [tmp3, tmp5.containerOuterTablet];
  const memo = importAllResult.useMemo(() => {
    let containerOuterTablet;
    if (tmp3) {
      containerOuterTablet = tmp5.containerOuterTablet;
    }
    return containerOuterTablet;
  }, items1);
  if (tmp3) {
    let Fragment = closure_5;
  } else {
    Fragment = importAllResult.Fragment;
  }
  obj = {};
  const tmp = importDefault(dependencyMap[66])();
  const tmp8 = callback2;
  obj = {};
  const obj1 = {};
  if (tmp3) {
    const obj2 = { style: memo };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const items2 = [callback2(importDefault(dependencyMap[26]), { absolute: true }), ];
  const obj4 = { gradient: tmp };
  const obj5 = { inNestedNavigator };
  obj4.children = callback2(ICYMI, obj5, "" + stateFromStores);
  items2[1] = callback2(arg1(dependencyMap[69]).ThemeContextProvider, obj4);
  obj1["children"] = items2;
  obj.children = closure_16(Fragment, obj1);
  obj.children = callback2(arg1(dependencyMap[68]).ICYMIContextProvider, obj);
  return tmp8(importDefault(dependencyMap[67]), obj);
};
