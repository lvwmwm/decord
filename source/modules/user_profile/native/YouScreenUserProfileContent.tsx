// Module ID: 15535
// Function ID: 119534
// Name: YouAvatar
// Dependencies: [57, 31, 27, 1340, 4810, 6855, 8308, 5510, 1345, 33, 15528, 15147, 477, 8307, 8282, 12013, 12014, 8310, 8560, 1334, 5802, 11943, 4543, 9142, 689, 1212, 15536, 1457, 7974, 8283, 8298, 566, 1324, 8280, 8284, 12241, 15537, 12127, 12133, 12134, 11929, 15538, 12137, 14714, 11945, 11914, 7191, 12143, 15540, 12000, 12148, 12155, 8404, 3991, 5449, 11925, 8557, 8494, 11676, 8797, 2]
// Exports: default

// Module 15535 (YouAvatar)
import getStatusLabel from "getStatusLabel";
import initialize from "initialize";
import get_ActivityIndicator from "Link";
import { useIsContentShown } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "useProfileTheme";

let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
const require = arg1;
function YouAvatar(arg0) {
  const callback = React.useCallback(() => {
    const result = outer1_0(outer1_2[10]).trackYouTabAvatarPress();
    const obj = outer1_0(outer1_2[10]);
    const result1 = outer1_0(outer1_2[11]).showYouAccountActionSheet();
  }, []);
  let obj = require(477) /* set */;
  const isAndroidResult = obj.isAndroid();
  obj = {};
  const merged = Object.assign(arg0);
  obj["onPress"] = callback;
  obj["importantForAccessibility"] = "no-hide-descendants";
  obj["accessibilityElementsHidden"] = isAndroidResult;
  obj["accessible"] = !isAndroidResult && undefined;
  return closure_13(importDefault(8307), obj);
}
function YouScreenWidgetsBoardContainer(containerBackground) {
  let activeSection;
  let containerBorderColor;
  let isRefreshEnabled;
  let userId;
  containerBackground = containerBackground.containerBackground;
  ({ userId, activeSection, isRefreshEnabled, containerBorderColor } = containerBackground);
  const tmp = importDefault(8282)();
  const items = [tmp.card, ];
  if (isRefreshEnabled) {
    let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
    items[1] = obj;
    let tmp2 = items;
  } else {
    obj = { backgroundColor: containerBackground };
    items[1] = obj;
    tmp2 = items;
  }
  obj = { style: tmp.profileContent };
  const items1 = [callback2(importDefault(12013), {}), ];
  const obj1 = { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp2 };
  items1[1] = callback2(importDefault(12014), obj1);
  obj.children = items1;
  return callback3(closure_6, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let dependencyMap;
  let callback;
  let obj = navigateToProfileCustomization(8310);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = React.useRef(null);
  let obj1 = navigateToProfileCustomization(8560);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const tmp = trackUserProfileAction(8282)();
  navigateToProfileCustomization(5802);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    if (!tmp4) {
      let items = [navigateToProfileCustomization(1334).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK];
    }
    const tmp10 = callback(tmp6(items), 2);
    dependencyMap = tmp11;
    const tmp14 = tmp10[0] === navigateToProfileCustomization(1334).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
    callback = tmp14;
    const items1 = [navigateToProfileCustomization, trackUserProfileAction, tmp14, tmp10[1]];
    obj = {};
    callback = React.useCallback(() => {
      trackUserProfileAction({ action: "EDIT_PROFILE" });
      const result = navigateToProfileCustomization(_undefined[10]).trackYouTabEditProfilePress();
      navigateToProfileCustomization();
      if (c3) {
        _undefined(outer1_12.TAKE_ACTION);
      }
    }, items1);
    obj = { style: tmp.primaryButtons };
    obj1 = { ref, variant: "primary" };
    const obj2 = { size: "sm", color: trackUserProfileAction(689).colors.WHITE };
    obj1.icon = callback2(navigateToProfileCustomization(9142).PencilIcon, obj2);
    const intl = navigateToProfileCustomization(1212).intl;
    obj1.text = intl.string(navigateToProfileCustomization(1212).t.AAjhgi);
    obj1.onPress = callback;
    obj1.grow = true;
    obj.secondaryButton = callback2(navigateToProfileCustomization(4543).Button, obj1);
    const items2 = [callback2(trackUserProfileAction(11943), obj), ];
    const obj3 = { targetRef: ref, visible: tmp14, markAsDismissed: tmp10[1] };
    items2[1] = callback2(trackUserProfileAction(15536), obj3);
    obj.children = items2;
    return callback3(closure_15, obj);
  }
  items = [];
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let fillHeight;
  let handleTabChange;
  let measureFill;
  let navigateToProfileCustomization;
  let pagerRef;
  let secondaryColor;
  let statusBackground;
  let style;
  let theme;
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let c5;
  let navigation;
  let trackUserProfileAction;
  let c8;
  let customStatusActivity;
  let UserProfileSections;
  let UserProfileThemeTypes;
  let containerBackground;
  let containerBorderColor;
  let enabled;
  let c15;
  let shouldShowExpiringTrialOfferCard;
  let stateFromStores1;
  let c18;
  let boardTabIndex;
  let wishlistTabIndex;
  let first1;
  let closure_22;
  let handlePageContentSize;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let c27;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let closure_32;
  const tmp = navigateToFriends(navigateToPremium[14])();
  c5 = tmp;
  let obj = user(navigateToPremium[27]);
  navigation = obj.useNavigation();
  let obj1 = user(navigateToPremium[17]);
  trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp3 = navigateToFriends(navigateToPremium[28])(user.id);
  c8 = tmp3;
  let obj2 = user(navigateToPremium[29]);
  customStatusActivity = obj2.useCustomStatusActivity();
  let obj3 = user(navigateToPremium[31]);
  let items = [c8];
  const stateFromStores = obj3.useStateFromStores(items, () => _undefined2.getStatus());
  let tmp7 = navigateToFriends(navigateToPremium[32])("YouScreenUserProfileContent");
  UserProfileSections = tmp7;
  const tmp8 = navigateToFriends(navigateToPremium[33])({ user, displayProfile: tmp3 });
  const primaryColor = tmp8.primaryColor;
  UserProfileThemeTypes = tmp9;
  ({ theme, secondaryColor } = tmp8);
  let obj4 = user(navigateToPremium[34]);
  const userProfileColors = obj4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let tmp5 = navigateToFriends(navigateToPremium[30])(tmp3);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = user(navigateToPremium[11]).showYouAccountActionSheet();
  }, items1);
  let obj5 = user(navigateToPremium[35]);
  enabled = obj5.useVirtualCurrencyMobileEnabled().enabled;
  const tmp13 = navigateToShop(initialTab.useState(null), 2);
  const first = tmp13[0];
  c15 = tmp14;
  let obj7 = user(navigateToPremium[36]);
  shouldShowExpiringTrialOfferCard = obj7.useShouldShowExpiringTrialOfferCard();
  let obj8 = user(navigateToPremium[31]);
  let items2 = [customStatusActivity];
  stateFromStores1 = obj8.useStateFromStores(items2, () => customStatusActivity.getFirstWishlistId(user.id));
  let obj9 = user(navigateToPremium[37]);
  let tmp17 = obj9.useDisplayableBoardWidgets(user.id).length > 0;
  c18 = tmp17;
  let obj10 = user(navigateToPremium[38]);
  const profileTabIndices = obj10.useProfileTabIndices(tmp17, true);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  let tmp19 = navigateToShop(initialTab.useState(0), 2);
  first1 = tmp19[0];
  closure_22 = tmp19[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj11 = user(navigateToPremium[39]);
  const pageHeights = obj11.usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const ref = initialTab.useRef(null);
  const profileSectionTabs = user(navigateToPremium[38]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  c27 = tmp25;
  const items4 = [customStatusActivity, tmp13[1]];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = initialTab.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = navigateToFriends(navigateToPremium[40])();
    }
    c15(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = initialTab.useEffect(() => {
    setImmediate(() => {
      outer1_28();
    });
  }, items5);
  let labelResult;
  if (null != first) {
    labelResult = first.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp7, tmp, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp3, navigateToFriends];
  callback4 = initialTab.useCallback(() => {
    const items = [_undefined.card, ];
    if (c10) {
      let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
      items[1] = obj;
      let tmp2 = items;
    } else {
      obj = { backgroundColor: containerBackground };
      items[1] = obj;
      tmp2 = items;
    }
    obj = { style: items1 };
    items1 = [_undefined.cards, _undefined.profileContent];
    const obj1 = { navigateToPremium, style: tmp2 };
    const items2 = [containerBorderColor(navigateToFriends(navigateToPremium[41]), obj1), , , , , , , , , ];
    let tmp7 = !shouldShowExpiringTrialOfferCard;
    if (tmp7) {
      const obj2 = { navigateToPremium, navigateToShop, hasCustomProfileTheme: c11 };
      tmp7 = containerBorderColor(navigateToFriends(navigateToPremium[42]), obj2);
    }
    items2[1] = tmp7;
    let tmp14 = enabled;
    if (enabled) {
      const obj3 = { style: tmp2 };
      tmp14 = containerBorderColor(navigateToFriends(navigateToPremium[43]), obj3);
    }
    items2[2] = tmp14;
    const obj4 = { user, currentUser: user, style: tmp2 };
    items2[3] = containerBorderColor(navigateToFriends(navigateToPremium[44]), obj4);
    const obj5 = { userId: user.id, displayProfile: c8 };
    let tmp20;
    if (!c10) {
      tmp20 = tmp2;
    }
    obj5.style = tmp20;
    items2[4] = containerBorderColor(navigateToFriends(navigateToPremium[45]), obj5);
    let tmp21 = c10;
    if (c10) {
      tmp21 = containerBorderColor(navigateToFriends(navigateToPremium[46]), {});
    }
    items2[5] = tmp21;
    const obj6 = { userId: user.id };
    let tmp26;
    if (!c10) {
      tmp26 = tmp2;
    }
    obj6.style = tmp26;
    items2[6] = containerBorderColor(user(navigateToPremium[47]).UserProfileAccountConnectionsCard, obj6);
    const obj7 = { userId: user.id };
    let tmp28;
    if (!c10) {
      tmp28 = tmp2;
    }
    obj7.style = tmp28;
    items2[7] = containerBorderColor(user(navigateToPremium[47]).UserProfileApplicationRoleConnectionsCard, obj7);
    const obj8 = { userId: user.id, navigateToFriends, style: tmp2 };
    items2[8] = containerBorderColor(navigateToFriends(navigateToPremium[48]), obj8);
    const obj9 = { userId: user.id };
    let tmp31;
    const tmp18 = containerBorderColor;
    const tmp19 = navigateToFriends(navigateToPremium[45]);
    const tmp25 = containerBorderColor;
    const tmp27 = containerBorderColor;
    const tmp29 = containerBorderColor;
    const tmp5 = enabled;
    const tmp6 = navigation;
    if (!c10) {
      tmp31 = tmp2;
    }
    obj9.style = tmp31;
    items2[9] = tmp29(navigateToFriends(navigateToPremium[49]), obj9);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }, items6);
  const items7 = [tmp.profileContent, stateFromStores1, first1, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = initialTab.useCallback(() => {
    let obj = { style: _undefined.profileContent };
    if (null == stateFromStores1) {
      let tmp3Result = containerBorderColor(user(navigateToPremium[50]).WishlistEmptyState, {});
    } else {
      obj = { wishlistId: stateFromStores1 };
      let tmp9;
      if (first1 > 0) {
        tmp9 = first1;
      }
      obj.containerWidth = tmp9;
      obj.isVisible = c27;
      tmp3Result = containerBorderColor(navigateToFriends(navigateToPremium[50]), obj);
      const tmp3 = containerBorderColor;
      const tmp6 = navigateToFriends(navigateToPremium[50]);
    }
    const items = [tmp3Result, ];
    obj = { userId: user.id, wishlistId: stateFromStores1 };
    let tmp17;
    if (first1 > 0) {
      tmp17 = first1;
    }
    obj.containerWidth = tmp17;
    items[1] = containerBorderColor(navigateToFriends(navigateToPremium[51]), obj);
    obj.children = items;
    return enabled(navigation, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp17, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection, tmp7, containerBackground, containerBorderColor];
  const memo = initialTab.useMemo(() => {
    let obj = { id: "main" };
    const intl = user(navigateToPremium[25]).intl;
    obj.label = intl.string(user(navigateToPremium[25]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return outer1_23(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = containerBorderColor(c5, obj);
    const items = [obj];
    if (c18) {
      obj = { id: "board" };
      const intl2 = user(navigateToPremium[25]).intl;
      obj.label = intl2.string(user(navigateToPremium[25]).t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return outer1_23(outer1_19, arg0, arg1);
          }
      };
      const obj2 = { userId: user.id, activeSection: activeProfileTabSection, isRefreshEnabled: c10, containerBackground, containerBorderColor };
      obj1.children = containerBorderColor(stateFromStores1, obj2);
      obj.page = containerBorderColor(c5, obj1, boardTabIndex);
      items.push(obj);
    }
    const obj3 = { id: "wishlist" };
    const intl3 = user(navigateToPremium[25]).intl;
    obj3.label = intl3.string(user(navigateToPremium[25]).t["7lZ31J"]);
    obj3.page = containerBorderColor(c5, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return outer1_23(outer1_20, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj3);
    return items;
  }, items8);
  const obj13 = user(navigateToPremium[38]);
  obj = { pageWidth: first1, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[24]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = user(navigateToPremium[52]).useSegmentedControlState(obj);
  const obj14 = user(navigateToPremium[52]);
  const pagerFillHeight = user(navigateToPremium[39]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = initialTab.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj16 = user(navigateToPremium[39]);
  const pagesHeightStyle = user(navigateToPremium[39]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_32 = initialTab.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = initialTab.useEffect(() => {
    closure_32.current = segmentedControlState.setActiveIndex;
  }, items10);
  const obj17 = user(navigateToPremium[39]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[27]).useFocusEffect(initialTab.useCallback(() => {
    if (undefined !== initialTab) {
      let num = 0;
      if (initialTab === _undefined3.WISHLIST) {
        num = wishlistTabIndex;
      }
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (outer1_4 === constants.WISHLIST) {
          let MAIN = constants.WISHLIST;
        } else {
          MAIN = constants.MAIN;
        }
        outer1_25(MAIN);
        outer1_32.current(num, false, true);
        outer1_6.setParams({ initialTab: undefined });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0);
      }
      if (!outer1_6.isFocused()) {
        const parent = outer1_6.getParent();
        if (tmp5) {
          const obj = { initialTab: constants.MAIN };
          outer1_6.setParams(obj);
        }
        tmp5 = null != parent && parent.isFocused();
      }
    };
  }, items11));
  obj = { style };
  obj1 = {};
  obj2 = { style: items12 };
  items12 = [tmp.profileContentWrapper, { paddingTop: 0 }];
  obj3 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const items13 = [containerBorderColor(shouldShowExpiringTrialOfferCard, obj3), , , ];
  obj4 = { ref, customStatusActivity, hasCustomProfileTheme: tmp9, style: items14, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true };
  items14 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp);
  obj4.placeholderText = labelResult;
  obj4.prompt = first;
  items13[1] = containerBorderColor(navigateToFriends(navigateToPremium[55]), obj4);
  obj5 = { style: items15 };
  items15 = [, ];
  ({ primaryInfo: arr16[0], profileContent: arr16[1] } = tmp);
  let obj6 = { user };
  let pronouns;
  const obj18 = user(navigateToPremium[27]);
  const tmp38 = containerBorderColor;
  const tmp39 = containerBorderColor;
  const tmp40 = enabled;
  const tmp41 = navigation;
  const tmp42 = enabled;
  const tmp43 = navigation;
  const tmp44 = containerBorderColor;
  if (null != tmp3) {
    pronouns = tmp3.pronouns;
  }
  obj6.pronouns = pronouns;
  obj6.badges = tmp5;
  obj6.badgeContainerBackground = containerBackground;
  obj6.onPressDisplayName = callback;
  let intl = user(navigateToPremium[25]).intl;
  obj7 = {};
  const tmp45 = navigateToFriends(navigateToPremium[56]);
  obj7.status = user(navigateToPremium[57]).getStatusLabel(stateFromStores);
  const obj27 = user(navigateToPremium[57]);
  let intl2 = user(navigateToPremium[25]).intl;
  obj6.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[25]).t["er+FRD"], obj7) + ", " + intl2.string(user(navigateToPremium[25]).t.C6COaT);
  obj6.themeType = UserProfileThemeTypes.YOU_SCREEN;
  obj6.showChevron = true;
  const items16 = [tmp44(tmp45, obj6), containerBorderColor(c18, { navigateToProfileCustomization })];
  obj5.children = items16;
  items13[2] = tmp42(tmp43, obj5);
  obj8 = { style: { flex: 1 }, onLayout: callback1 };
  obj9 = { style: tmp.profileTablist };
  obj10 = { state: segmentedControlState };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj10.variant = str;
  obj9.children = containerBorderColor(user(navigateToPremium[58]).Tabs, obj10);
  const items17 = [containerBorderColor(navigation, obj9), ];
  obj11 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: containerBorderColor(user(navigateToPremium[59]).SegmentedControlPages, { state: segmentedControlState }) };
  items17[1] = containerBorderColor(navigateToFriends(navigateToPremium[53]).View, obj11);
  obj8.children = items17;
  items13[3] = enabled(navigation, obj8);
  obj2.children = items13;
  obj1.children = tmp40(tmp41, obj2);
  obj.children = tmp39(user(navigateToPremium[54]).LayerScope, obj1);
  return tmp38(navigateToFriends(navigateToPremium[53]).View, obj);
};
