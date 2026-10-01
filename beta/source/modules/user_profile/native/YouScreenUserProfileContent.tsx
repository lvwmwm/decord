// Module ID: 16619
// Function ID: 16620
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 2035, 5591, 7035, 7628, 6629, 2042, 10658, 21, 16607, 16006, 1364, 7702, 7687, 12638, 12639, 8127, 12650, 7635, 9189, 10653, 16620, 11449, 2029, 6806, 12570, 5281, 9713, 576, 1115, 16621, 16624, 16616, 1486, 7631, 8819, 7688, 504, 7673, 7684, 12501, 16625, 12458, 12459, 12640, 12660, 12661, 12662, 10578, 16626, 12665, 15297, 12572, 10777, 8059, 12671, 16628, 12625, 12676, 12681, 9083, 4566, 6577, 10574, 10614, 9060, 12111, 12113, 2]
// Exports: default

// Module 16619 (YouScreenUserProfileContent)
import intl5 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import Constants from "Constants" /* 6629 */;
import Constants2 from "Constants" /* 7628 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 7702 */;
import FormDividerDefault from "FormDivider" /* 8059 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8127 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 10578 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10658 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10777 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 12572 */;
import UserProfileNoteDefault from "UserProfileNote" /* 12625 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 12638 */;
import VibegrationsCustomWidgetAddOptionDefault from "VibegrationsCustomWidgetAddOption" /* 12639 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 12650 */;
import UserProfileConnections from "UserProfileConnections" /* 12671 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 12676 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 12681 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15297 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16006 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16607 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 16626 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 16628 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation;

let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
function YouAvatar(arg0) {
  const callback = react.useCallback(() => {
    const obj = you_tracking_Tracking;
    const result = obj.trackYouTabAvatarPress();
    const obj2 = showYouAccountActionSheet;
    const result1 = obj2.showYouAccountActionSheet();
  }, []);
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  let obj2 = { onPress: callback, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: isAndroidResult, accessible: !isAndroidResult && undefined };
  const tmp4 = UserProfileAvatarDefault;
  const merged = Object.assign(arg0);
  return authStore2(tmp4, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  let activeSection;
  let containerBackground;
  let containerBorderColor;
  let items1;
  let userId;
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const WIDGETS = UserProfileSections.WIDGETS;
  const items = [, ];
  const tmp = UserProfileSharedStylesDefault();
  items[0] = UserProfileSharedStylesDefault().card;
  items[1] = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
  const obj = { style: tmp.profileContent, children: items1 };
  items1 = [authStore2(UserProfileWidgetsBoardEditNoticeDefault, {}), authStore2(VibegrationsCustomWidgetAddOptionDefault, {}), ];
  const obj2 = { userId, isVisible: activeSection === WIDGETS, cardStyle: items };
  items1[2] = authStore2(UserProfileWidgetsBoardDefault, obj2);
  return closure_15(metroRequire, obj);
}
function YouScreenActivityTabContainer(user) {
  let containerBackground;
  let containerBorderColor;
  let items1;
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const items = [, ];
  const tmp = UserProfileSharedStylesDefault();
  items[0] = UserProfileSharedStylesDefault().card;
  items[1] = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
  const obj = { style: items1, children: authStore2(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  return authStore2(metroRequire, obj);
}
function EditSection(navigateToProfileCustomization) {
  let Button;
  let PencilIcon;
  let canSet;
  let closure_3;
  let entryPoint;
  let intl;
  let items3;
  let obj8;
  let obj9;
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let trackUserProfileAction;
  let first;
  _slicedToArray = undefined;
  const tmp3 = trackUserProfileAction(first[15])();
  let obj = navigateToProfileCustomization(first[20]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const obj3 = navigateToProfileCustomization(first[21]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj4 = navigateToProfileCustomization(first[22]);
  const isBadgeManagementEnabled = obj4.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp8 = trackUserProfileAction(first[23])();
  const obj5 = navigateToProfileCustomization(first[24]);
  const customTypingIndicatorConfig = obj5.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(navigateToProfileCustomization(first[25]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const items = [];
  const tmp11 = isProfileLoaded && isDisplayNameStylesFlywheelSettersEnabled && !tmp10;
  if (tmp11) {
    items.push(navigateToProfileCustomization(first[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp13 = isProfileLoaded && isBadgeManagementEnabled && tmp8;
  if (tmp13) {
    items.push(navigateToProfileCustomization(first[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  if (isProfileLoaded) {
    isProfileLoaded = canSet;
  }
  if (isProfileLoaded) {
    isProfileLoaded = "profile" === entryPoint;
  }
  if (isProfileLoaded) {
    isProfileLoaded = !tmp10;
  }
  if (isProfileLoaded) {
    items.push(navigateToProfileCustomization(first[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = navigateToProfileCustomization(first[26]);
  const tmp16 = _slicedToArray(tmp4Result.useSelectedDismissibleContent(items), 2);
  first = tmp16[0];
  _slicedToArray = tmp18;
  const DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK = tmp4(tmp2[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  const BADGE_CUSTOMIZATION_COACHMARK = tmp4(tmp2[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp16[1]];
  const CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK = tmp4(tmp2[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  const items2 = [navigateToProfileCustomization];
  const callback = obj2.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const obj = you_tracking_Tracking;
    const result = obj.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  const obj6 = { children: items3 };
  const callback1 = obj2.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items2);
  const obj7 = { style: tmp3.primaryButtons, secondaryButton: closure_14(Button, obj8) };
  obj8 = { ref, variant: "primary", icon: closure_14(PencilIcon, obj9), text: intl.string(navigateToProfileCustomization(first[31]).t.AAjhgi), onPress: callback, grow: true };
  const tmpResult = trackUserProfileAction(first[27]);
  Button = tmp4(tmp2[28]).Button;
  obj9 = { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE };
  PencilIcon = tmp4(tmp2[29]).PencilIcon;
  intl = tmp4(tmp2[31]).intl;
  items3 = [closure_14(tmpResult, obj7), , , ];
  const obj10 = { targetRef: ref, visible: first === DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[1] = closure_14(trackUserProfileAction(first[32]), obj10);
  const obj11 = { targetRef: ref, visible: first === BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 };
  items3[2] = closure_14(trackUserProfileAction(first[33]), obj11);
  const obj12 = { targetRef: ref, visible: first === CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[3] = closure_14(trackUserProfileAction(first[34]), obj12);
  return closure_15(closure_16, obj6);
}
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
let UserProfileSections = Constants2.UserProfileSections;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_13 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let LayerScope;
  let Tabs;
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let fillHeight;
  let formatToPlainStringResult;
  let handleTabChange;
  let hasCustomProfileTheme;
  let intl2;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let measureFill;
  let navigateToProfileCustomization;
  let obj25;
  let obj26;
  let obj8;
  let pagerRef;
  let pronouns;
  let scrollPosition;
  let secondaryColor;
  let statusBackground;
  let str;
  let style;
  let theme;
  let tmp17;
  let tmp4Result16;
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, scrollPosition, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let callback4;
  let callback5;
  let segmentedControlState;
  let closure_33;
  let tmp = navigateToFriends;
  let tmp2 = navigateToPremium;
  const tmp3 = navigateToFriends(navigateToPremium[15])();
  let closure_5 = tmp3;
  let tmp4 = user;
  let obj = user(navigateToPremium[35]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[20]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[36])(user.id);
  const displayProfile = tmp6;
  let obj3 = user(navigateToPremium[37]);
  const customStatusActivity = obj3.useCustomStatusActivity();
  let tmp8 = navigateToFriends(navigateToPremium[38])(tmp6);
  let obj4 = user(navigateToPremium[39]);
  let items = [displayProfile];
  const stateFromStores = obj4.useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[40])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[41]);
  const userProfileColors = obj5.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  let obj6 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  const ref = initialTab.useRef(null);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const obj = showYouAccountActionSheet;
    const result = obj.showYouAccountActionSheet();
  }, items1);
  let obj7 = user(navigateToPremium[42]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[43]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[39]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = obj10.useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj11 = user(navigateToPremium[44]);
  const displayableBoardWidgets = obj11.useDisplayableBoardWidgets(user.id);
  const obj12 = user(navigateToPremium[45]);
  const isMobileGameCollectionExperimentEnabled = obj12.useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
  const obj13 = user(navigateToPremium[46]);
  const tmp21 = displayableBoardWidgets.length > 0 || obj13.useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
  let closure_17 = tmp21;
  let tmp4Result = tmp4(tmp2[47]);
  const isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result9 = tmp4(tmp2[48]);
  const profileTabIndices = tmp4Result9.useProfileTabIndices(tmp21, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp15Result = tmp15(obj6.useState(0), 2);
  const pageWidth = tmp15Result[0];
  let closure_23 = tmp15Result[1];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_23(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result10 = tmp4(tmp2[49]);
  const pageHeights1 = tmp4Result10.usePageHeights();
  const handlePageContentSize = pageHeights1.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const pageHeights = pageHeights1.pageHeights;
  const callback2 = obj6.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
  }, items3);
  const tmp4Result11 = tmp4(tmp2[48]);
  const profileSectionTabs = tmp4Result11.useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp30;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    const tmp = c14;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    tmp(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items5);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, tmp11, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    let items1;
    let items2;
    const items = [closure_5.card, ];
    const obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
    items[1] = obj;
    const obj2 = { style: items1, children: items2 };
    items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    items2 = [, , , , , , , , , ];
    const obj3 = { navigateToPremium, style: items };
    items2[0] = authStore2(YouExpiringTrialOfferCardDefault, obj3);
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    const tmp = closure_15;
    const tmp2 = metroRequire;
    const tmp6 = navigateToPremium;
    if (tmp3Result) {
      const obj4 = { navigateToPremium: tmp6, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(12665), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = enabled && authStore2(BalanceWidgetMenuDefault, {});
    const obj5 = { user, currentUser: user, style: items };
    enabled && authStore2(BalanceWidgetMenuDefault, {});
    items2[3] = authStore2(UserProfileActivityDefault, obj5);
    const obj6 = { userId: user.id, displayProfile };
    items2[4] = authStore2(UserProfileAboutMeCardDefault, obj6);
    items2[5] = authStore2(FormDividerDefault, {});
    const obj7 = { userId: user.id };
    items2[6] = authStore2(UserProfileConnections.UserProfileAccountConnectionsCard, obj7);
    const obj8 = { userId: user.id };
    items2[7] = authStore2(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj8);
    const obj9 = { userId: user.id, navigateToFriends };
    items2[8] = authStore2(UserProfileYourFriendsCardDefault, obj9);
    const obj10 = { userId: user.id };
    items2[9] = authStore2(UserProfileNoteDefault, obj10);
    return tmp(tmp2, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    let items;
    let tmp15;
    let tmp4;
    let tmp4Result;
    let tmp8;
    const obj = { style: closure_5.profileContent, children: items };
    const tmp = closure_15;
    const tmp2 = metroRequire;
    if (null == stateFromStores1) {
      tmp4Result = authStore2(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp4 = authStore2;
    } else {
      tmp4 = authStore2;
      const obj2 = { wishlistId: stateFromStores1, containerWidth: tmp8, isVisible };
      tmp8 = undefined;
      const tmp7 = UserProfileWishlistGridDefault;
      if (first > 0) {
        tmp8 = first;
      }
      tmp4Result = tmp4(tmp7, obj2);
    }
    items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: tmp15 };
    tmp15 = undefined;
    const tmp14 = UserProfileWishlistSuggestionsGridDefault;
    if (first > 0) {
      tmp15 = first;
    }
    items[1] = tmp4(tmp14, obj3);
    return tmp(tmp2, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp21, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj10;
    let obj2;
    let obj4;
    let obj5;
    let obj7;
    let obj8;
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: authStore2(hasOwnProperty, obj2) };
    intl = intl5.intl;
    const items = [obj];
    obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    const tmp5 = closure_17;
    if (tmp5) {
      const push = items.push;
      const obj3 = { id: "board", label: intl2.string(intl5.t.laViwx), page: authStore2(hasOwnProperty, obj4, boardTabIndex) };
      intl2 = tmp(1115).intl;
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: authStore2(YouScreenWidgetsBoardContainer, obj5)
      };
      obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj3);
    }
    const tmp13 = isRecentActivityMobileEnabled;
    if (tmp13) {
      const push2 = items.push;
      const obj6 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: authStore2(hasOwnProperty, obj7, activityTabIndex) };
      intl3 = tmp(1115).intl;
      obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: authStore2(YouScreenActivityTabContainer, obj8)
      };
      obj8 = { user, containerBackground, containerBorderColor };
      push2(obj6);
    }
    const push3 = items.push;
    const obj9 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: authStore2(hasOwnProperty, obj10, wishlistTabIndex) };
    intl4 = tmp(1115).intl;
    obj10 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    };
    push3(obj9);
    return items;
  }, items8);
  const tmp4Result12 = tmp4(tmp2[62]);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[30]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result12.useSegmentedControlState(obj14);
  const tmp4Result13 = tmp4(tmp2[49]);
  const pagerFillHeight = tmp4Result13.usePagerFillHeight(scrollPosition);
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result14 = tmp4(tmp2[49]);
  const pagesHeightStyle = tmp4Result14.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
  closure_33 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const tmp4Result15 = tmp4(tmp2[35]);
  const focusEffect = tmp4Result15.useFocusEffect(obj6.useCallback(() => {
    let closure_0;
    let ref;
    if (undefined !== initialTab) {
      let num = 0;
      if (tmp === hasCustomProfileTheme.WISHLIST) {
        num = wishlistTabIndex;
      }
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
        ref.current(num, false, true);
        navigation.setParams({ initialTab: "Path" });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      if (!navigation.isFocused()) {
        const parent = obj.getParent();
        let isFocusedResult;
        if (parent != null) {
          isFocusedResult = parent.isFocused();
        }
        if (isFocusedResult) {
          const obj2 = { initialTab: UserProfileSections.MAIN };
          navigation.setParams(obj2);
        }
      }
    };
  }, items11));
  const obj15 = { style, children: c14(LayerScope, obj26) };
  const View = tmp(tmp2[63]).View;
  const obj16 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[64]).LayerScope;
  items13 = [c14(closure_17, obj17), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  items13[1] = c14(tmp(tmp2[65]), obj18);
  const obj19 = { style: items15, children: items16 };
  items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  const obj20 = { user, pronouns, badges: tmp8, badgeContainerBackground: containerBackground, onPressDisplayName: callback, displayNameAccessibilityHint: "" + formatToPlainStringResult + ", " + intl2.string(tmp4(tmp2[31]).t.C6COaT), themeType: containerBackground.YOU_SCREEN, showChevron: true, canOpenBadgeDirectory: true };
  pronouns = undefined;
  const tmpResult = tmp(tmp2[66]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[31]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj21 = { status: tmp4Result16.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[31]).t["er+FRD"];
  tmp4Result16 = tmp4(tmp2[67]);
  formatToPlainStringResult = formatToPlainString(prop, obj21);
  intl2 = tmp4(tmp2[31]).intl;
  items16 = [c14(tmpResult, obj20), ];
  const obj22 = { navigateToProfileCustomization, isProfileLoaded: null != tmp6 };
  items16[1] = c14(activityTabIndex, obj22);
  items13[2] = shouldShowExpiringTrialOfferCard(navigation, obj19);
  const obj23 = { style: { flex: 1 }, onLayout: callback1, children: items17 };
  const obj24 = { style: tmp3.profileTablist, children: c14(Tabs, obj25) };
  obj25 = { state: segmentedControlState, variant: str };
  str = undefined;
  Tabs = tmp4(tmp2[68]).Tabs;
  if (null != primaryColor) {
    str = "overlay";
  }
  obj26 = { zIndex: 1, children: shouldShowExpiringTrialOfferCard(navigation, obj16) };
  items17 = [c14(navigation, obj24), ];
  const obj27 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(tmp4(tmp2[69]).SegmentedControlPages, { state: segmentedControlState }) };
  const View2 = tmp(tmp2[63]).View;
  items17[1] = c14(View2, obj27);
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj23);
  return c14(View, obj15);
};
