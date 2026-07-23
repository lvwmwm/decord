// Module ID: 15177
// Function ID: 115531
// Name: SettingsButton
// Dependencies: [57, 31, 27, 4122, 1194, 1838, 8318, 8306, 15178, 1345, 33, 4130, 689, 15179, 7771, 13902, 8321, 4098, 15181, 1934, 4086, 15192, 4126, 1212, 8133, 5121, 4662, 3941, 4660, 15128, 15130, 5119, 8320, 1450, 1557, 1457, 6707, 566, 15118, 15212, 15215, 5803, 1334, 15202, 1456, 7087, 9914, 9533, 13990, 669, 15216, 15222, 15227, 15240, 15241, 15242, 15243, 15244, 15245, 15246, 15247, 8829, 15248, 7879, 477, 10025, 3977, 15249, 15180, 3842, 2]
// Exports: ICYMITab

// Module 15177 (SettingsButton)
import CutoutGuildBanner from "CutoutGuildBanner";
import importAllResult from "XSmallIcon";
import get_ActivityIndicator from "colorToHex";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { NUM_GUILDS_EXTENDED_ONBOARDING as closure_12 } from "NUM_GUILDS_EXTENDED_ONBOARDING";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "useWindowDimensions";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createICYMIStyles from "createICYMIStyles";

let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let require = arg1;
function SettingsButton() {
  let obj = {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: callback(require(13902) /* FiltersHorizontalIcon */.FiltersHorizontalIcon, { size: "sm" }),
    onPress() {
      outer1_1(outer1_2[16]).itemInteracted("filters_button", "filters_button", "press_info_button");
      const obj = outer1_1(outer1_2[16]);
      outer1_1(outer1_2[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "settings_button", actionIntentType: "open", actionDestinationType: null } });
      const obj2 = outer1_1(outer1_2[16]);
      outer1_1(outer1_2[17]).openLazy(outer1_0(outer1_2[19])(outer1_2[18], outer1_2.paths), "ICYMISettingsActionSheet", {});
    }
  };
  return callback(require(7771) /* IconButton */.IconButton, obj);
}
function InfoButton() {
  let obj = {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, { size: "sm" }),
    onPress() {
      outer1_1(outer1_2[16]).itemInteracted("info_button", "info_button", "press_info_button");
      const obj = outer1_1(outer1_2[16]);
      outer1_1(outer1_2[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "info_button", actionIntentType: "open", actionDestinationType: null } });
      const obj2 = outer1_1(outer1_2[16]);
      outer1_0(outer1_2[21]).pushICYMIInfoModal({ extendedOnboarding: true });
    }
  };
  return callback(require(7771) /* IconButton */.IconButton, obj);
}
function ICYMIHeaderTextWrapper() {
  const tmp = callback4();
  return callback(closure_5, {
    style: callback4().headerText,
    children: importAllResult.useMemo(() => {
      let obj = {};
      obj = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header" };
      const intl = outer1_0(outer1_2[23]).intl;
      obj.children = intl.string(outer1_0(outer1_2[23]).t.SY4sdZ);
      const items = [outer1_14(outer1_0(outer1_2[22]).Text, obj), ];
      obj = { color: "text-brand", variant: "text-xs/bold", style: { marginTop: 4 } };
      const intl2 = outer1_0(outer1_2[23]).intl;
      obj.children = intl2.string(outer1_0(outer1_2[23]).t.Ac2OZA);
      items[1] = outer1_14(outer1_0(outer1_2[22]).Text, obj);
      obj.children = items;
      return outer1_16(outer1_15, obj);
    }, [])
  });
}
function handleEndReached() {
  require(8320) /* generateHydrationId */.hydrateNextPage();
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
  const tmp = callback4();
  ({ height, width } = stateFromStores(visibleItemIds[33])());
  let obj = isFocused(visibleItemIds[35]);
  isFocused = obj.useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    isFocused(visibleItemIds[36]).trackAppUIViewed();
  });
  let obj1 = isFocused(visibleItemIds[37]);
  const items = [stateFromStores2];
  stateFromStores = obj1.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj2 = isFocused(visibleItemIds[37]);
  const items1 = [closure_11];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => lib.notificationItem(), []);
  const items2 = [isFocused];
  const effect = handleOnRefresh.useEffect(() => {
    stateFromStores(visibleItemIds[16]).setTabFocused(isFocused);
  }, items2);
  let obj3 = isFocused(visibleItemIds[39]);
  const sharedICYMILogic = obj3.useSharedICYMILogic({ showDot: stateFromStores(visibleItemIds[38])().showDot, notificationItem: stateFromStores1 });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj4 = isFocused(visibleItemIds[40]);
  const iCYMIEmptyLoadingAnalytics = obj4.useICYMIEmptyLoadingAnalytics(loading, isFocused);
  let obj5 = isFocused(visibleItemIds[41]);
  const items3 = [isFocused(visibleItemIds[42]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp10 = endVisible(obj5.useGetDismissibleContent(items3), 2);
  const first = tmp10[0];
  let num = 1;
  let closure_6 = tmp12;
  let obj6 = isFocused(visibleItemIds[37]);
  const items4 = [ref1];
  stateFromStores2 = obj6.useStateFromStores(items4, () => ref1.getGuildCount());
  const items5 = [first, tmp10[1], stateFromStores2];
  const effect1 = handleOnRefresh.useEffect(() => {
    if (null != first) {
      let obj = isFocused(visibleItemIds[21]);
      obj = { extendedOnboarding: stateFromStores2 <= outer1_12 };
      obj.pushICYMIInfoModal(obj);
      tmp12(outer1_13.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = handleOnRefresh.useEffect(() => {
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
  obj = {
    scrollToTop() {
      const current = ref.current;
      if (null != current) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    }
  };
  ref1 = handleOnRefresh.useRef(obj);
  const tmp2 = stateFromStores(visibleItemIds[33])();
  const scrollToTop = isFocused(visibleItemIds[35]).useScrollToTop(ref1);
  const obj9 = isFocused(visibleItemIds[35]);
  const items7 = [stateFromStores3];
  stateFromStores3 = isFocused(visibleItemIds[37]).useStateFromStores(items7, () => stateFromStores3.getDoubleTapBehavior());
  const obj10 = isFocused(visibleItemIds[37]);
  const items8 = [stateFromStores3, isFocused(visibleItemIds[44]).useNavigation(), stateFromStores];
  const effect3 = handleOnRefresh.useEffect(() => {
    if (stateFromStores3 === isFocused(visibleItemIds[45]).GravityICYMIDoubleTapBehavior.DEFAULT) {
      let obj = {
        scrollToTop() {
            const current = outer1_8.current;
            if (null != current) {
              const obj = { offset: 0, animated: !outer1_1 };
              current.scrollToOffset(obj);
            }
          }
      };
      ref1.current = obj;
    } else {
      obj = {
        scrollToTop() {
            isFocused(visibleItemIds[46]).showForLaterModal(isFocused(visibleItemIds[47]).SavedMessageSortTypes.BOOKMARK);
          }
      };
      ref1.current = obj;
    }
  }, items8);
  const items9 = [ref, stateFromStores];
  closure_11 = handleOnRefresh.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      const obj = { offset: 0, animated: !stateFromStores };
      current.scrollToOffset(obj);
    }
  }, items9);
  const obj11 = isFocused(visibleItemIds[44]);
  const items10 = [visibleItemIds, endVisible];
  const mobileQuestDockHeight = isFocused(visibleItemIds[48]).useMobileQuestDockHeight();
  const callback = handleOnRefresh.useCallback((item) => {
    item = item.item;
    const kind = item.data.kind;
    if ("message" === kind) {
      if (item.channelType === isFocused(visibleItemIds[49]).ChannelTypes.GUILD_ANNOUNCEMENT) {
        let obj = { unread: item.unread, message: item.data.message, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        let tmp41 = outer1_14(stateFromStores(visibleItemIds[50]), obj);
        const tmp45 = stateFromStores(visibleItemIds[50]);
      } else {
        obj = { message: item.data.message, messageContext: item.data.messageContext, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        tmp41 = outer1_14(stateFromStores(visibleItemIds[51]), obj);
        const tmp38 = stateFromStores(visibleItemIds[51]);
      }
    } else {
      if ("contentInventory" === kind) {
        const obj1 = { visible: null != visibleItemIds.find((item) => item.item.id === item.id), content: item.data.content };
        let tmp7 = outer1_14(stateFromStores(visibleItemIds[52]), obj1);
        const tmp30 = stateFromStores(visibleItemIds[52]);
      } else if ("loading" === kind) {
        return outer1_14(isFocused(visibleItemIds[53]).ICYMILoading, {});
      } else if ("bottomLoading" === kind) {
        return outer1_14(isFocused(visibleItemIds[54]).ICYMIBottomLoading, {});
      } else if ("end" === kind) {
        const obj2 = { visible: endVisible };
        return outer1_14(stateFromStores(visibleItemIds[55]), obj2);
      } else if ("guildEvent" === kind) {
        const obj3 = { eventId: item.data.eventId };
        tmp7 = outer1_14(stateFromStores(visibleItemIds[56]), obj3);
      } else if ("recommendedGuilds" === kind) {
        tmp7 = outer1_14(isFocused(visibleItemIds[57]).ICYMIServerRecommendationRow, {});
      } else if ("icymiHeader" === kind) {
        return outer1_14(stateFromStores(visibleItemIds[58]), {});
      } else if ("forumThread" === kind) {
        obj = { message: item.data.message, channel: item.data.threadChannel, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        tmp7 = outer1_14(isFocused(visibleItemIds[59]).ICYMIForumThreadRow, obj);
      } else {
        return null;
      }
      const obj4 = { itemId: item.id, children: tmp7 };
      return outer1_14(isFocused(visibleItemIds[60]).CardHeightMeasurer, obj4);
    }
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[48]);
  const clientThemesOverride = isFocused(visibleItemIds[61]).useClientThemesOverride();
  const obj13 = isFocused(visibleItemIds[61]);
  const items11 = [closure_11];
  obj = { style: items12 };
  items12 = [, ];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  const stateFromStores4 = isFocused(visibleItemIds[37]).useStateFromStores(items11, () => lib.hasNewContent(), []);
  const items13 = [callback(closure_19, { inNestedNavigator: inNestedNavigator.inNestedNavigator }), ];
  obj1 = { style: items14 };
  items14 = [tmp.flashListWrapper, , ];
  obj2 = { height: height - stateFromStores(visibleItemIds[34])().top - 32 - 24 - mobileQuestDockHeight, width, marginHorizontal: "auto" };
  items14[1] = obj2;
  items14[2] = clientThemesOverride;
  obj3 = {
    onPress() {
      stateFromStores(visibleItemIds[16]).itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      const obj = stateFromStores(visibleItemIds[16]);
      stateFromStores(visibleItemIds[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "new_content_pill", actionIntentType: "refresh", actionDestinationType: null } });
      handleOnRefresh();
      lib();
    },
    isRefreshing
  };
  const items15 = [callback(stateFromStores(visibleItemIds[62]), obj3), , ];
  obj4 = { ref, scrollEnabled: !loading, extraData: { endVisible }, contentContainerStyle: memo };
  const intl = isFocused(visibleItemIds[23]).intl;
  obj4.accessibilityLabel = intl.string(isFocused(visibleItemIds[23]).t.OIgYlQ);
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
  obj4.refreshControl = callback(closure_6, obj5);
  obj4.onEndReachedThreshold = 3;
  obj4.onEndReached = handleEndReached;
  obj4.keyExtractor = keyExtractor;
  obj4.renderItem = callback;
  obj4.getItemType = isFocused(visibleItemIds[32]).itemToType;
  const obj14 = isFocused(visibleItemIds[37]);
  const tmp26 = closure_16;
  const tmp27 = first;
  const tmp28 = closure_16;
  const tmp29 = first;
  let tmp30 = callback;
  const tmp31 = callback;
  const tmp32 = closure_6;
  isFocused(visibleItemIds[64]).isAndroid();
  obj4.drawDistance = 100;
  obj4.stickyHeaderIndices = stickyHeaderIndices;
  obj4.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
  if (!loading) {
    num = version;
  }
  items15[1] = tmp30(isFocused(visibleItemIds[63]).FlashList, obj4, "Version-" + num);
  items15[2] = callback(isFocused(visibleItemIds[65]).TTIFirstContentfulPaint, { label: "icymi" });
  obj1.children = items15;
  items13[1] = tmp28(tmp29, obj1);
  obj.children = items13;
  return tmp26(tmp27, obj);
}
function keyExtractor(id) {
  return id.id;
}
({ View: closure_5, RefreshControl: closure_6 } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = _createForOfIteratorHelperLoose.createStyles((paddingTop) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: importDefault(689).space.PX_8, overflow: "hidden", flex: 1, paddingTop };
  obj.containerOuterTablet = obj;
  return obj;
});
let closure_18 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { container: { flex: 1, flexShrink: 1, flexGrow: 1 } };
  obj = { flex: 1, flexShrink: 1, flexGrow: 1, overflow: "hidden", borderTopLeftRadius: importDefault(689).radii.sm, borderTopRightRadius: importDefault(689).radii.sm };
  obj.containerInPanels = obj;
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.containerBackground = obj;
  const obj1 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 };
  obj.flashListWrapper = obj1;
  obj.refreshing = { color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj3 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, position: "relative", overflow: "hidden", width: "100%" };
  obj.header = obj3;
  obj.headerLeft = { flexDirection: "row", alignItems: "center" };
  const obj2 = { color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.headerClose = { marginRight: importDefault(689).space.PX_16, height: importDefault(689).space.PX_32, width: importDefault(689).space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.lg };
  const obj5 = { height: 56, marginHorizontal: margin.margin, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  obj.headerTitle = obj5;
  obj.headerText = { flexDirection: "row", alignItems: "center", gap: 4 };
  const obj6 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_12 };
  obj.headerActions = obj6;
  const obj7 = { height: 18, width: 18, borderRadius: importDefault(689).radii.round };
  obj.notificationBadge = obj7;
  const obj8 = { flex: 1, justifyContent: "center", paddingTop: importDefault(689).space.PX_96 };
  obj.loading = obj8;
  const obj9 = { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, height: 1 };
  obj.headerBorder = obj9;
  return obj;
});
let closure_19 = importAllResult.memo((inNestedNavigator) => {
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = callback4();
  const tmp2 = importDefault(8133)();
  let obj = { top: !tmp2, style: tmp.header };
  obj = { absolute: true, wide: true, tall: true, mix: true };
  obj = { dark: require(3941) /* colorToHex */.OverlayOpacity.LEVEL_7, light: require(3941) /* colorToHex */.OverlayOpacity.LEVEL_8 };
  obj.mixAmount = obj;
  const items = [callback(importDefault(4662), obj), , ];
  const obj1 = { style: tmp.headerTitle };
  const obj2 = { style: tmp.headerLeft };
  if (!tmp2) {
    if (!inNestedNavigator) {
      const items1 = [null, callback(ICYMIHeaderTextWrapper, {})];
      obj2.children = items1;
      const items2 = [tmp7(tmp8, obj2), ];
      const obj3 = { style: tmp.headerActions };
      const items3 = [callback(InfoButton, {}), callback(SettingsButton, {})];
      obj3.children = items3;
      items2[1] = callback2(closure_5, obj3);
      obj1.children = items2;
      items[1] = tmp5(tmp6, obj1);
      const obj4 = { style: tmp.headerBorder };
      items[2] = callback(closure_5, obj4);
      obj.children = items;
      return callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    }
  }
  const obj5 = { style: tmp.headerClose };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj5.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj5.onPress = require(15128) /* goBack */.goBack;
  let LeftBackIconWithBadge = require;
  if (inNestedNavigator) {
    LeftBackIconWithBadge = LeftBackIconWithBadge(15130).LeftBackIconWithBadge;
    const obj6 = { includeNotificationsCount: true };
    let tmp11Result = tmp11(LeftBackIconWithBadge, obj6);
  } else {
    const obj7 = { color: "interactive-text-default" };
    tmp11Result = tmp11(LeftBackIconWithBadge(5119).XSmallIcon, obj7);
  }
  obj5.children = tmp11Result;
  callback(require(4660) /* PressableBase */.PressableOpacity, obj5);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = function ICYMITab(route) {
  route = route.route;
  let importDefault;
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getId());
  const tmp3 = importDefault(8133)();
  require = tmp3;
  let inNestedNavigator;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  const tmp5 = callback3(importDefault(1557)().top);
  importDefault = tmp5;
  const items1 = [tmp3, tmp5.containerOuterTablet];
  const memo = importAllResult.useMemo(() => {
    let containerOuterTablet;
    if (closure_0) {
      containerOuterTablet = _undefined.containerOuterTablet;
    }
    return containerOuterTablet;
  }, items1);
  if (tmp3) {
    let Fragment = closure_5;
  } else {
    Fragment = importAllResult.Fragment;
  }
  obj = {};
  const tmp = importDefault(3977)();
  const tmp8 = callback;
  obj = {};
  const obj1 = {};
  if (tmp3) {
    const obj2 = { style: memo };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const items2 = [callback(importDefault(4662), { absolute: true }), ];
  const obj4 = { gradient: tmp };
  const obj5 = { inNestedNavigator };
  obj4.children = callback(ICYMI, obj5, "" + stateFromStores);
  items2[1] = callback(require(3842) /* ManaContext */.ThemeContextProvider, obj4);
  obj1["children"] = items2;
  obj.children = closure_16(Fragment, obj1);
  obj.children = callback(require(15180) /* useICYMIContextConstructor */.ICYMIContextProvider, obj);
  return tmp8(importDefault(15249), obj);
};
