// Module ID: 19090
// Function ID: 19091
// Name: ICYMI
// Dependencies: [32, 19, 17, 5244, 502, 5114, 10140, 10136, 19091, 5089, 21, 5243, 575, 19092, 7922, 13696, 10148, 5489, 19094, 2118, 5974, 19105, 5866, 1113, 7705, 7351, 10202, 5423, 7364, 19041, 17076, 7483, 19123, 1493, 1627, 1500, 8611, 504, 19033, 18877, 19125, 19128, 9494, 5076, 19115, 1499, 10141, 11838, 11839, 17575, 1093, 19129, 19135, 19140, 19151, 19152, 19153, 19154, 19155, 19156, 19157, 19158, 19159, 8993, 19160, 7822, 10147, 1377, 14097, 5425, 19161, 19093, 5314, 2]
// Exports: ICYMITab

// Module 19090 (ICYMI)
import nativeDefault from "native" /* 575 */;
import ChannelTypes from "ChannelTypes" /* 1093 */;
import intl3 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5423 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5425 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5974 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7351 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7705 */;
import IconButton2 from "IconButton" /* 7922 */;
import ICYMITypes from "ICYMITypes" /* 10141 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10148 */;
import ThemedGradientDefault from "ThemedGradient" /* 10202 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 13696 */;
import Notifications from "Notifications" /* 19041 */;
import ICYMIConstants from "ICYMIConstants" /* 19091 */;
import NativeICYMIUtils from "NativeICYMIUtils" /* 19105 */;
import ICYMIStoreUtils from "ICYMIStoreUtils" /* 19123 */;
import AnnouncementMessageRowDefault from "AnnouncementMessageRow" /* 19129 */;
import ICYMIMessageRowDefault from "ICYMIMessageRow" /* 19135 */;
import ContentInventoryEntryRowDefault from "ContentInventoryEntryRow" /* 19140 */;
import ICYMILoading from "ICYMILoading" /* 19151 */;
import ICYMIBottomLoading from "ICYMIBottomLoading" /* 19152 */;
import CaughtUpRowDefault from "CaughtUpRow" /* 19153 */;
import ICYMIGuildEventRowDefault from "ICYMIGuildEventRow" /* 19154 */;
import ICYMIServerRecommendationRow from "ICYMIServerRecommendationRow" /* 19155 */;
import ICYMIWaterwheelsRowDefault from "ICYMIWaterwheelsRow" /* 19156 */;
import ICYMIHeaderDefault from "ICYMIHeader" /* 19157 */;
import ICYMIForumThreadRow2 from "ICYMIForumThreadRow" /* 19158 */;
import CardHeightMeasurer from "CardHeightMeasurer" /* 19159 */;
import AppFreezerDefault from "AppFreezer" /* 19161 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 5114 */;
import ICYMIFiltersStore from "ICYMIFiltersStore" /* 10140 */;
import ICYMIStore from "ICYMIStore" /* 10136 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import createICYMIStyles from "createICYMIStyles" /* 19092 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, containerOuterTablet, importDefault, item;

let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
function SettingsButton() {
  let paths;
  let obj = {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: gesture(FiltersHorizontalIcon.FiltersHorizontalIcon, { size: "sm" }),
    onPress() {
      const obj = require("ICYMIActionCreators");
      obj.itemInteracted("filters_button", "filters_button", "press_info_button");
      const obj2 = require("ICYMIActionCreators");
      obj2.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "settings_button", actionIntentType: "open", actionDestinationType: null } });
      const obj3 = require("ActionSheetActionCreators");
      obj3.openLazy(require("asyncRequire")(paths[18], paths.paths), "ICYMISettingsActionSheet", {});
    }
  };
  const IconButton = IconButton2.IconButton;
  return gesture(IconButton, obj);
}
function InfoButton() {
  let obj = {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: gesture(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
    onPress() {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted("info_button", "info_button", "press_info_button");
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "info_button", actionIntentType: "open", actionDestinationType: null } });
      const obj3 = require("NativeICYMIUtils");
      obj3.pushICYMIInfoModal({ extendedOnboarding: true });
    }
  };
  const IconButton = IconButton2.IconButton;
  return gesture(IconButton, obj);
}
function ICYMIHeaderTextWrapper() {
  const tmp = closure_18();
  let obj = {
    style: tmp.headerText,
    children: react.useMemo(() => {
      let intl;
      let intl2;
      let items;
      const obj = { children: items };
      const obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl.string(require("intl").t.SY4sdZ) };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items = [closure_1_14(Text, obj2), ];
      const obj3 = { color: "text-brand", variant: "body-xs/semibold", style: { marginTop: 4 }, children: intl2.string(require("intl").t.Ac2OZA) };
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      items[1] = closure_1_14(Text2, obj3);
      return closure_1_16(closure_1_15, obj);
    }, [])
  };
  return gesture(hasOwnProperty, obj);
}
function handleEndReached() {
  const obj = ICYMIStoreUtils;
  obj.hydrateNextPage();
}
function ICYMI(inNestedNavigator) {
  let data;
  let handleOnRefresh;
  let height;
  let intl;
  let isRefreshing;
  let items12;
  let items13;
  let items14;
  let items15;
  let loading;
  let num2;
  let obj18;
  let stickyHeaderIndices;
  let tmp33;
  let version;
  let viewabilityConfigCallbackPairs;
  let visibleItemIds;
  let width;
  let isFocused;
  let stateFromStores;
  visibleItemIds = undefined;
  handleOnRefresh = undefined;
  let stateFromStores2;
  let ref1;
  let stateFromStores3;
  let closure_11;
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = closure_18();
  ({ height, width } = stateFromStores(visibleItemIds[33])());
  const tmp3 = stateFromStores(visibleItemIds[33])();
  const top = stateFromStores(visibleItemIds[34])().top;
  let obj = isFocused(visibleItemIds[35]);
  isFocused = obj.useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    const obj = isFocused(visibleItemIds[36]);
    obj.trackAppUIViewed();
  });
  let obj2 = isFocused(visibleItemIds[37]);
  const items = [stateFromStores2];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj3 = isFocused(visibleItemIds[37]);
  const items1 = [closure_11];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => closure_11.notificationItem(), []);
  const items2 = [isFocused];
  const showDot = stateFromStores(visibleItemIds[38])().showDot;
  const effect = handleOnRefresh.useEffect(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.setTabFocused(isFocused);
  }, items2);
  const tmp10 = stateFromStores(visibleItemIds[39])();
  let obj4 = isFocused(visibleItemIds[40]);
  const sharedICYMILogic = obj4.useSharedICYMILogic({ showDot, notificationItem: stateFromStores1, isWaterwheelsCardEligible: tmp10 });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj5 = isFocused(visibleItemIds[41]);
  const iCYMIEmptyLoadingAnalytics = obj5.useICYMIEmptyLoadingAnalytics(loading, isFocused);
  const useGetDismissibleContent = isFocused(visibleItemIds[42]).useGetDismissibleContent;
  const tmp13 = isFocused(visibleItemIds[42]);
  const items3 = [isFocused(visibleItemIds[43]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp14 = endVisible(useGetDismissibleContent(items3), 2);
  const first = tmp14[0];
  let closure_6 = tmp16;
  let obj6 = isFocused(visibleItemIds[37]);
  const items4 = [ref1];
  stateFromStores2 = obj6.useStateFromStores(items4, () => ref1.getGuildCount());
  const items5 = [first, tmp16, stateFromStores2];
  const effect1 = handleOnRefresh.useEffect(() => {
    if (null != first) {
      const obj2 = { extendedOnboarding: stateFromStores2 <= closure_12 };
      const obj = NativeICYMIUtils;
      obj.pushICYMIInfoModal(obj2);
      closure_6(ContentDismissActionType.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = handleOnRefresh.useEffect(() => {
    const hasOpenedEnoughTimesResult = endVisible && ICYMIStore.hasOpenedEnoughTimes();
    if (hasOpenedEnoughTimesResult) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequire(19115, dependencyMap.paths), "ICYMIFeedbackSheet", {});
    }
  }, items6);
  const ref = handleOnRefresh.useRef(null);
  let obj7 = {
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    }
  };
  ref1 = handleOnRefresh.useRef(obj7);
  let obj8 = isFocused(visibleItemIds[35]);
  const scrollToTop = obj8.useScrollToTop(ref1);
  const items7 = [stateFromStores3];
  const obj9 = isFocused(visibleItemIds[37]);
  stateFromStores3 = obj9.useStateFromStores(items7, () => stateFromStores3.getDoubleTapBehavior());
  const items8 = [stateFromStores3, , ];
  const obj10 = isFocused(visibleItemIds[45]);
  items8[1] = obj10.useNavigation();
  items8[2] = stateFromStores;
  const effect3 = handleOnRefresh.useEffect(() => {
    if (stateFromStores3 === ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT) {
      const obj2 = {
        scrollToTop() {
            const current = ref.current;
            if (current != null) {
              const obj = { offset: 0, animated: !stateFromStores };
              current.scrollToOffset(obj);
            }
          }
      };
      ref1.current = obj2;
    } else {
      let obj = {
        scrollToTop() {
            const obj = isFocused(visibleItemIds[47]);
            obj.showForLaterModal(isFocused(visibleItemIds[48]).SavedMessageSortTypes.BOOKMARK);
          }
      };
      ref1.current = obj;
    }
  }, items8);
  const items9 = [ref, stateFromStores];
  closure_11 = handleOnRefresh.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { offset: 0, animated: !stateFromStores };
      current.scrollToOffset(obj);
    }
  }, items9);
  const items10 = [visibleItemIds, endVisible];
  const obj11 = isFocused(visibleItemIds[49]);
  const mobileQuestDockHeight = obj11.useMobileQuestDockHeight();
  const callback = handleOnRefresh.useCallback((item) => {
    let tmp6;
    item = item.item;
    switch (item.data.kind) {
      case "message":
      {
        let tmp43;
        if (item.channelType === ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT) {
          const obj2 = { unread: item.unread, message: item.data.message, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
          const tmp47 = AnnouncementMessageRowDefault;
          tmp43 = gesture(tmp47, obj2);
        } else {
          const obj3 = { message: item.data.message, messageContext: item.data.messageContext, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
          const tmp40 = ICYMIMessageRowDefault;
          tmp43 = gesture(tmp40, obj3);
        }
        tmp6 = tmp43;
        const obj4 = { itemId: item.id, children: tmp6 };
        return gesture(CardHeightMeasurer.CardHeightMeasurer, obj4);
      }
      case "contentInventory":
      {
        const obj5 = { visible: null != visibleItemIds.find((item) => item.item.id === item.id), content: item.data.content };
        const tmp32 = ContentInventoryEntryRowDefault;
        tmp6 = gesture(tmp32, obj5);
        break;
      }
      case "loading":
      {
        return gesture(ICYMILoading.ICYMILoading, {});
      }
      case "bottomLoading":
      {
        return gesture(ICYMIBottomLoading.ICYMIBottomLoading, {});
      }
      case "end":
      {
        const obj6 = { visible: endVisible };
        return gesture(CaughtUpRowDefault, obj6);
      }
      case "guildEvent":
      {
        const obj7 = { eventId: item.data.eventId };
        tmp6 = gesture(ICYMIGuildEventRowDefault, obj7);
        break;
      }
      case "recommendedGuilds":
      {
        tmp6 = gesture(ICYMIServerRecommendationRow.ICYMIServerRecommendationRow, {});
        break;
      }
      case "waterwheelsItem":
      {
        const obj8 = { card: item.data.card };
        tmp6 = gesture(ICYMIWaterwheelsRowDefault, obj8);
        break;
      }
      case "icymiHeader":
      {
        return gesture(ICYMIHeaderDefault, {});
      }
      case "forumThread":
      {
        const obj = { message: item.data.message, channel: item.data.threadChannel, visible: null != visibleItemIds.find((item) => item.item.id === item.id) };
        const ICYMIForumThreadRow = ICYMIForumThreadRow2.ICYMIForumThreadRow;
        tmp6 = gesture(ICYMIForumThreadRow, obj);
        break;
      }
      default:
      {
        return null;
      }
    }
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[63]);
  const clientThemesOverride = obj12.useClientThemesOverride();
  const items11 = [closure_11];
  const obj14 = { style: items12, children: items13 };
  items12 = [, ];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  let tmp32 = closure_14;
  const obj13 = isFocused(visibleItemIds[37]);
  const stateFromStores4 = obj13.useStateFromStores(items11, () => closure_11.hasNewContent(), []);
  items13 = [closure_14(closure_22, { inNestedNavigator }), ];
  const obj15 = { style: items14, children: items15 };
  items14 = [tmp.flashListWrapper, , ];
  size = { height: height - top - 32 - 24 - mobileQuestDockHeight, width, marginHorizontal: "auto" };
  items14[1] = size;
  items14[2] = clientThemesOverride;
  items15 = [, , ];
  const obj16 = {
    onPress() {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "new_content_pill", actionIntentType: "refresh", actionDestinationType: null } });
      handleOnRefresh();
      closure_11();
    },
    isRefreshing
  };
  items15[0] = closure_14(stateFromStores(visibleItemIds[64]), obj16);
  const obj17 = { ref, scrollEnabled: !loading, extraData: { endVisible }, contentContainerStyle: memo, accessibilityLabel: intl.string(isFocused(visibleItemIds[23]).t.OIgYlQ), data, refreshing: isRefreshing, refreshControl: tmp32(tmp33, obj18), onEndReachedThreshold: 3, onEndReached: handleEndReached, keyExtractor, renderItem: callback, getItemType: isFocused(visibleItemIds[66]).itemToType, drawDistance: 100, stickyHeaderIndices, viewabilityConfigCallbackPairs };
  const FlashList = isFocused(visibleItemIds[65]).FlashList;
  intl = isFocused(visibleItemIds[23]).intl;
  let num = 1;
  obj18 = { onRefresh: handleOnRefresh, refreshing: isRefreshing, tintColor: tmp.refreshing.color, style: { opacity: num2 } };
  num2 = 1;
  tmp33 = closure_6;
  if (stateFromStores4) {
    num2 = 0;
  }
  const tmp4Result = isFocused(visibleItemIds[67]);
  tmp4Result.isAndroid();
  if (!loading) {
    num = version;
  }
  items15[1] = tmp32(FlashList, obj17, "Version-" + num);
  items15[2] = tmp32(isFocused(visibleItemIds[68]).TTIFirstContentfulPaint, { label: "icymi" });
  items13[1] = closure_16(first, obj15);
  return closure_16(first, obj14);
}
function keyExtractor(id) {
  return id.id;
}
({ View: hasOwnProperty, RefreshControl: metroRequire } = react_native);
let closure_12 = ICYMIConstants.NUM_GUILDS_EXTENDED_ONBOARDING;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = createStyles.createStyles((paddingTop) => {
  const obj = { containerOuterTablet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, overflow: "hidden", flex: 1, paddingTop } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, overflow: "hidden", flex: 1, paddingTop });
  return obj;
});
let closure_18 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj7;
  let rect;
  let size1;
  const obj = { container: { flex: 1, flexShrink: 1, flexGrow: 1 }, containerInPanels: { flex: 1, flexShrink: 1, flexGrow: 1, overflow: "hidden", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm }, containerBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, flashListWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 }, refreshing: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative", overflow: "hidden", width: "100%" }, headerLeft: { flexDirection: "row", alignItems: "center" }, headerClose: size, headerTitle: obj7, headerText: { flexDirection: "row", alignItems: "center", gap: 4 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, notificationBadge: size1, loading: { flex: 1, justifyContent: "center", paddingTop: nativeDefault.space.PX_96 }, headerBorder: rect };
  ({ flex: 1, flexShrink: 1, flexGrow: 1, overflow: "hidden", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative", overflow: "hidden", width: "100%" });
  size = { marginRight: nativeDefault.space.PX_16, height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg };
  obj7 = { height: 56, marginHorizontal: margin.margin, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 });
  size1 = { height: 18, width: 18, borderRadius: nativeDefault.radii.round };
  ({ flex: 1, justifyContent: "center", paddingTop: nativeDefault.space.PX_96 });
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
  return obj;
});
let closure_22 = react.memo(function Header(inNestedNavigator) {
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let tmp6Result;
  let tmp6Result2;
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = closure_18();
  const tmp3 = useIsWindowLargeDefault();
  const obj = { top: !tmp3, style: tmp.header, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj2 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj3 };
  obj3 = { dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7, light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8 };
  const tmp7 = ThemedGradientDefault;
  items = [gesture(tmp7, obj2), , ];
  const obj4 = { style: tmp.headerTitle, children: items2 };
  const obj5 = { style: tmp.headerLeft, children: items1 };
  if (tmp3) {
    const obj6 = { style: tmp.headerClose, accessibilityLabel: intl.string(intl3.t["13/7kX"]), onPress: Notifications.goBack, children: tmp6Result };
    const PressableOpacity = tmp5(7364).PressableOpacity;
    intl = tmp5(1113).intl;
    if (inNestedNavigator) {
      tmp6Result = tmp6(tmp5(17076).LeftBackIconWithBadge, { includeNotificationsCount: true });
    } else {
      tmp6Result = tmp6(tmp5(7483).XSmallIcon, { color: "interactive-text-default" });
    }
    tmp6Result2 = tmp6(PressableOpacity, obj6);
  } else {
    tmp6Result2 = null;
  }
  items1 = [tmp6Result2, gesture(ICYMIHeaderTextWrapper, {})];
  items2 = [authStore3(hasOwnProperty, obj5), ];
  const obj7 = { style: tmp.headerActions, children: items3 };
  items3 = [gesture(InfoButton, {}), gesture(SettingsButton, {})];
  items2[1] = authStore3(hasOwnProperty, obj7);
  items[1] = authStore3(hasOwnProperty, obj4);
  const obj8 = { style: tmp.headerBorder };
  items[2] = gesture(hasOwnProperty, obj8);
  return authStore3(SafeAreaPaddingView, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export function ICYMITab(route) {
  let closure_0;
  let id;
  let items2;
  let obj3;
  let obj5;
  let obj6;
  route = route.route;
  _require = undefined;
  importDefault = undefined;
  const items = [AuthenticationStore];
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp6 = useIsWindowLargeDefault();
  _require = tmp6;
  let inNestedNavigator;
  const top = useSafeAreaInsetsDefault().top;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  const tmp8 = closure_17(top);
  importDefault = tmp8;
  const items1 = [tmp6, tmp8.containerOuterTablet];
  const memo = react.useMemo(() => {
    containerOuterTablet = undefined;
    if (closure_0) {
      containerOuterTablet = containerOuterTablet.containerOuterTablet;
    }
    return containerOuterTablet;
  }, items1);
  const tmp11 = tmp6 ? closure_5 : react.Fragment;
  const tmpResult = AppFreezerDefault;
  const ICYMIContextProvider = tmp4(19093).ICYMIContextProvider;
  const tmp14 = closure_16;
  if (tmp6) {
    obj3 = { style: memo };
    const obj2 = { style: memo };
  } else {
    obj3 = {};
  }
  const obj4 = { children: closure_14(ICYMIContextProvider, obj5) };
  obj5 = { children: tmp14(tmp11, obj6) };
  obj6 = { children: items2 };
  const merged = Object.assign(obj3);
  items2 = [closure_14(ThemedGradientDefault, { absolute: true }), ];
  const obj7 = { gradient: tmp3, children: closure_14(ICYMI, { inNestedNavigator }, "" + stateFromStores) };
  const ThemeContextProvider = tmp4(5314).ThemeContextProvider;
  items2[1] = closure_14(ThemeContextProvider, obj7);
  return closure_14(tmpResult, obj4);
}
