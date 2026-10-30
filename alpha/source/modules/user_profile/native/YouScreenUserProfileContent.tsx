// Module ID: 18820
// Function ID: 18821
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 4850, 6564, 7765, 8746, 7371, 4855, 16389, 21, 9657, 18387, 1376, 8820, 8806, 14904, 14905, 14908, 14931, 5591, 575, 8753, 4842, 14798, 5629, 10212, 6947, 1114, 18821, 18826, 18817, 11416, 18827, 14879, 13681, 7563, 14882, 11376, 14883, 1499, 8749, 11357, 8807, 504, 8792, 8803, 14716, 18828, 14929, 14906, 14944, 14945, 11363, 18829, 14948, 18831, 17634, 14800, 11457, 14951, 18832, 14865, 14956, 14963, 14969, 8971, 5090, 5606, 11359, 9066, 12476, 2]
// Exports: default

// Module 18820 (YouScreenUserProfileContent)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4850 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import Constants from "Constants" /* 7371 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7563 */;
import Constants2 from "Constants" /* 8746 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8806 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8820 */;
import tracking_Tracking from "tracking/Tracking" /* 9657 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11363 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11376 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11416 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11457 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13681 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14800 */;
import UserProfileNoteDefault from "UserProfileNote" /* 14865 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 14879 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 14882 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 14904 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 14905 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14908 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 14931 */;
import UserProfileConnections from "UserProfileConnections" /* 14951 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14956 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14963 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16389 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 17634 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 18387 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 18827 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 18829 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 18831 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 18832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6564 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation;

let closure_14;
let closure_15;
let map1;
function YouAvatar(arg0) {
  const callback = react.useCallback(() => {
    const obj = tracking_Tracking;
    const result = obj.trackYouTabAvatarPress();
    const obj2 = showYouAccountActionSheet;
    const result1 = obj2.showYouAccountActionSheet();
  }, []);
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  let obj2 = { onPress: callback, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: isAndroidResult, accessible: !isAndroidResult && undefined };
  const tmp4 = UserProfileAvatarDefault;
  const merged = Object.assign(arg0);
  return map1(tmp4, obj2);
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
  items1 = [map1(UserProfileWidgetsBoardEditNoticeDefault, {}), map1(ConjureCustomWidgetAddOptionDefault, {}), ];
  const obj2 = { userId, isVisible: activeSection === WIDGETS, cardStyle: items };
  items1[2] = map1(UserProfileWidgetsBoardDefault, obj2);
  return authStore3(View, obj);
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
  const obj = { style: items1, children: map1(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  return map1(View, obj);
}
function EditSection(navigateToProfileCustomization) {
  let Button;
  let closure_4;
  let intl;
  let intl2;
  let isProfileLoaded;
  let items2;
  let markAsDismissed;
  let obj4;
  let tmp14Result;
  let tmp17;
  let visibleContent;
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let trackUserProfileAction;
  react = undefined;
  let tmp4 = navigateToProfileCustomization;
  const tmp3 = markAsDismissed(trackUserProfileAction[15])();
  let obj = navigateToProfileCustomization(trackUserProfileAction[20]);
  const token = obj.useToken(markAsDismissed(trackUserProfileAction[21]).colors.WHITE);
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[22]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  let closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  react = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  let closure_5 = tmp9;
  const items = [navigateToProfileCustomization, trackUserProfileAction, tmp7, tmp8, tmp9, markAsDismissed];
  const items1 = [navigateToProfileCustomization];
  const callback = react.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const obj = tracking_Tracking;
    const result = obj.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    const tmp4 = closure_3 || closure_4 || closure_5;
    if (tmp4) {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items1);
  const obj3 = { style: tmp3.primaryButtons, secondaryButton: closure_13(Button, obj4) };
  obj4 = { ref, variant: "primary", icon: tmp14Result, text: intl.string(tmp4(trackUserProfileAction[28]).t.AAjhgi), onPress: callback, accessibilityValue: tmp17, grow: true };
  const tmp15 = markAsDismissed(trackUserProfileAction[24]);
  Button = navigateToProfileCustomization(trackUserProfileAction[25]).Button;
  const tmp12 = closure_14;
  const tmp13 = closure_15;
  if (isProfileLoaded) {
    const obj5 = { size: "sm", color: token };
    tmp14Result = tmp14(tmp4(tmp2[26]).PencilIcon, obj5);
  } else {
    const obj6 = { size: "small", color: token, accessible: false };
    tmp14Result = tmp14(tmp4(tmp2[27]).ActivityIndicator, obj6);
  }
  intl = tmp4(tmp2[28]).intl;
  tmp17 = undefined;
  if (!isProfileLoaded) {
    const obj7 = { text: intl2.string(tmp4(trackUserProfileAction[28]).t.ZTNur7) };
    intl2 = tmp4(tmp2[28]).intl;
    tmp17 = obj7;
  }
  const obj8 = { children: items2 };
  items2 = [closure_13(tmp15, obj3), closure_13(tmp(trackUserProfileAction[29]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_13(tmp(trackUserProfileAction[30]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_13(tmp(trackUserProfileAction[31]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  return tmp12(tmp13, obj8);
}
function YouScreenPrimaryInfoSection(navigateToProfileCustomization) {
  let canSet;
  let entryPoint;
  let isProfileLoaded;
  let items1;
  let items2;
  let primaryInfoProps;
  let tmp20;
  let tmp21;
  ({ isProfileLoaded, primaryInfoProps } = navigateToProfileCustomization);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = BadgeManagementExperiment;
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp6 = useOwnsAnyBadgeDefault();
  const obj2 = useBadgeDirectoryNuxCoachmarkVariant;
  const badgeDirectoryNuxCoachmarkVariant = obj2.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const obj3 = CustomTypingIndicatorExperiment;
  const customTypingIndicatorConfig = obj3.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const items = [];
  const tmp10 = isProfileLoaded && !tmp9;
  if (tmp10) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp12 = isProfileLoaded && null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp12) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  const tmp15 = isProfileLoaded && isBadgeManagementEnabled && tmp6 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp15) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  const tmp17 = isProfileLoaded && canSet && "profile" === entryPoint && !tmp9 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp17) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = useSelectedDismissibleContent;
  [tmp20, tmp21] = tmp4Result.useSelectedDismissibleContent(items);
  _slicedToArray(tmp4Result.useSelectedDismissibleContent(items), 2);
  const tmp22 = tmp20 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp4Result2 = useBadgeDirectoryNuxEntryPoint;
  const badgeDirectoryNuxEntryPoint = tmp4Result2.useBadgeDirectoryNuxEntryPoint(tmp22, tmp21);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj4 = { style: items1, children: items2 };
  items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  const onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const obj5 = { badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory };
  const tmpResult = UserProfilePrimaryInfoDefault;
  const merged = Object.assign(primaryInfoProps);
  items2 = [map1(tmpResult, obj5), , ];
  let tmp26Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  const tmp24 = authStore3;
  const tmp25 = View;
  if (tmp26Result) {
    const obj6 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp22, markAsDismissed: tmp21 };
    tmp26Result = tmp26(tmp(14883), obj6);
  }
  items2[1] = tmp26Result;
  items2[2] = map1(EditSection, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp20, markAsDismissed: tmp21 });
  return tmp24(tmp25, obj4);
}
let react = react_mod;
let View = react_native.View;
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
const UserProfileSections = Constants2.UserProfileSections;
let UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_12 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let LayerScope;
  let Tabs;
  let activeProfileTabSectionIndex;
  let activityTabIndex;
  let avatarBackground;
  let boardTabIndex;
  let formatToPlainStringResult;
  let handleTabChange;
  let hasCustomProfileTheme;
  let intl2;
  let items;
  let items12;
  let items13;
  let items14;
  let items15;
  let navigateToProfileCustomization;
  let obj20;
  let obj24;
  let obj25;
  let obj8;
  let pageHeights;
  let pronouns;
  let scrollPosition;
  let scrollViewRef;
  let secondaryColor;
  let statusBackground;
  let str;
  let style;
  let theme;
  let tmp17;
  let tmp4Result14;
  let wishlistTabIndex;
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, scrollViewRef, scrollPosition, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let pageWidth;
  let closure_21;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let isVisible;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let tmp = navigateToFriends;
  let tmp2 = navigateToPremium;
  let tmp3 = navigateToFriends(navigateToPremium[15])();
  let closure_5 = tmp3;
  let tmp4 = user;
  let obj = user(navigateToPremium[40]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[22]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[41])(user.id);
  const displayProfile = tmp6;
  let obj3 = user(navigateToPremium[42]);
  const customStatusActivity = obj3.useCustomStatusActivity();
  let tmp8 = navigateToFriends(navigateToPremium[43])(tmp6);
  let obj4 = user(navigateToPremium[44]);
  let items1 = [trackUserProfileAction];
  const stateFromStores = obj4.useStateFromStores(items1, () => trackUserProfileAction.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[45])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  let tmp11 = null != primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[46]);
  const userProfileColors = obj5.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  let obj6 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items2 = [trackUserProfileAction];
  const ref = initialTab.useRef(null);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const obj = showYouAccountActionSheet;
    const result = obj.showYouAccountActionSheet();
  }, items2);
  let obj7 = user(navigateToPremium[47]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[48]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[44]);
  const items3 = [displayProfile];
  const stateFromStores1 = obj10.useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj11 = user(navigateToPremium[49]);
  const displayableBoardWidgets = obj11.useDisplayableBoardWidgets(user.id);
  const obj12 = user(navigateToPremium[50]);
  const tmp20 = displayableBoardWidgets.length > 0 || obj12.useCanConjureCustomWidget("YouScreenUserProfileContent");
  let closure_17 = tmp20;
  let tmp4Result = tmp4(tmp2[51]);
  const isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result8 = tmp4(tmp2[52]);
  const profileTabIndices = tmp4Result8.useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  let MAIN = initialTab;
  if (null != initialTab) {
    MAIN = initialTab;
    const obj13 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    const tmp4Result9 = tmp4(tmp2[52]);
    if (tmp4Result9.getProfileTabSectionIndex(initialTab, obj13) < 0) {
      MAIN = customStatusActivity.MAIN;
    }
  }
  const tmp15Result = tmp15(obj6.useState(0), 2);
  pageWidth = tmp15Result[0];
  closure_21 = tmp15Result[1];
  const items4 = [trackUserProfileAction, navigation, initialTab];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback2 = obj6.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
  }, items4);
  const tmp4Result10 = tmp4(tmp2[52]);
  const profileSectionTabs = tmp4Result10.useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp29;
  const items5 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    const tmp = c14;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    tmp(tmp2);
  }, items5);
  const items6 = [callback3];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items6);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items7 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, tmp11, enabled, user, tmp6, navigateToFriends];
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
    items2[0] = map1(YouExpiringTrialOfferCardDefault, obj3);
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    const tmp = authStore3;
    const tmp2 = View;
    const tmp6 = navigateToPremium;
    if (tmp3Result) {
      const obj4 = { navigateToPremium: tmp6, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(14948), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = map1(CheckpointProfileEntrypointDefault, {});
    items2[3] = enabled && map1(BalanceWidgetMenuDefault, {});
    const obj5 = { user, currentUser: user, style: items };
    enabled && map1(BalanceWidgetMenuDefault, {});
    items2[4] = map1(UserProfileActivityDefault, obj5);
    const obj6 = { userId: user.id, displayProfile };
    items2[5] = map1(UserProfileAboutMeCardDefault, obj6);
    const obj7 = { userId: user.id };
    items2[6] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, obj7);
    const obj8 = { userId: user.id };
    items2[7] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj8);
    const obj9 = { userId: user.id, navigateToFriends };
    items2[8] = map1(UserProfileYourFriendsCardDefault, obj9);
    const obj10 = { userId: user.id };
    items2[9] = map1(UserProfileNoteDefault, obj10);
    return tmp(tmp2, obj2);
  }, items7);
  const items8 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === customStatusActivity.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    let items;
    let tmp15;
    let tmp4;
    let tmp4Result;
    let tmp8;
    const obj = { style: closure_5.profileContent, children: items };
    const tmp = authStore3;
    const tmp2 = View;
    if (null == stateFromStores1) {
      tmp4Result = map1(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp4 = map1;
    } else {
      tmp4 = map1;
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
  }, items8);
  const items9 = [callback4, callback5, tmp20, isRecentActivityMobileEnabled, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj3;
    let obj5;
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: callback4() };
    intl = intl5.intl;
    const items = [obj];
    const tmp3 = closure_17;
    if (tmp3) {
      const push = items.push;
      const obj2 = { id: "board", label: intl2.string(intl5.t.laViwx), page: map1(YouScreenWidgetsBoardContainer, obj3) };
      intl2 = tmp(1114).intl;
      obj3 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj2);
    }
    const tmp11 = isRecentActivityMobileEnabled;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: map1(YouScreenActivityTabContainer, obj5) };
      intl3 = tmp(1114).intl;
      obj5 = { user, containerBackground, containerBorderColor };
      push2(obj4);
    }
    const push3 = items.push;
    const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback5() };
    intl4 = tmp(1114).intl;
    push3(obj6);
    return items;
  }, items9);
  const tmp4Result11 = tmp4(tmp2[65]);
  const measuredTabItems = tmp4Result11.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result12 = tmp4(tmp2[66]);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[21]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result12.useSegmentedControlState(obj14);
  const items10 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items10);
  const items11 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const tmp4Result13 = tmp4(tmp2[40]);
  const focusEffect = tmp4Result13.useFocusEffect(obj6.useCallback(() => {
    let closure_0;
    const tmp2 = undefined !== MAIN && tmp !== activeProfileTabSection;
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(MAIN);
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
  const obj15 = { style, children: enabled(LayerScope, obj25) };
  View = tmp(tmp2[67]).View;
  const obj16 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[68]).LayerScope;
  items13 = [enabled(stateFromStores1, obj17), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: tmp11, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items14 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  items13[1] = enabled(tmp(tmp2[69]), obj18);
  let isLoaded;
  const tmp43 = pageWidth;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj19 = { isProfileLoaded: true === isLoaded, navigateToProfileCustomization, primaryInfoProps: obj20 };
  obj20 = { user, pronouns, badges: tmp8, badgeContainerBackground: containerBackground, onPressDisplayName: callback, displayNameAccessibilityHint: "" + formatToPlainStringResult + ", " + intl2.string(tmp4(tmp2[28]).t.C6COaT), themeType: UserProfileThemeTypes.YOU_SCREEN, showChevron: true, canOpenBadgeDirectory: true };
  pronouns = undefined;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[28]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj21 = { status: tmp4Result14.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[28]).t["er+FRD"];
  tmp4Result14 = tmp4(tmp2[70]);
  formatToPlainStringResult = formatToPlainString(prop, obj21);
  intl2 = tmp4(tmp2[28]).intl;
  items13[2] = enabled(tmp43, obj19);
  const obj22 = { style: { flex: 1 }, onLayout: callback1, children: items15 };
  const obj23 = { style: tmp3.profileTablist, children: enabled(Tabs, obj24) };
  obj24 = { state: segmentedControlState, variant: str };
  str = undefined;
  Tabs = tmp4(tmp2[71]).Tabs;
  if (tmp11) {
    str = "overlay";
  }
  obj25 = { zIndex: 1, children: c14(closure_5, obj16) };
  items15 = [enabled(closure_5, obj23), enabled(tmp(tmp2[65]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  items13[3] = c14(closure_5, obj22);
  return enabled(View, obj15);
};
