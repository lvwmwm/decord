// Module ID: 19166
// Function ID: 19167
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 5011, 6650, 7871, 8846, 7460, 5016, 16700, 21, 9784, 18732, 1377, 8920, 8906, 15141, 15197, 5754, 575, 8853, 5003, 15042, 5788, 10368, 7040, 1113, 19167, 19172, 19163, 11611, 19173, 15121, 13938, 17974, 7664, 15124, 11572, 15125, 19174, 1500, 8849, 11553, 8907, 504, 8892, 8903, 14960, 19176, 15143, 15160, 15142, 15210, 15211, 9087, 11559, 19177, 15214, 19179, 15044, 11655, 15217, 19183, 15109, 15222, 15228, 15234, 9077, 1652, 5768, 11555, 9183, 12344, 2]
// Exports: default

// Module 19166 (YouScreenUserProfileContent)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 5011 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import Constants from "Constants" /* 7460 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7664 */;
import Constants2 from "Constants" /* 8846 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8906 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8920 */;
import Tracking from "Tracking" /* 9784 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11559 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11572 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11611 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11655 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13938 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 15044 */;
import UserProfileNoteDefault from "UserProfileNote" /* 15109 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 15121 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 15124 */;
import UserProfileWidgetsBoardTabDefault from "UserProfileWidgetsBoardTab" /* 15141 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 15197 */;
import UserProfileConnections from "UserProfileConnections" /* 15217 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 15222 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15228 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16700 */;
import BalanceWidgetMenu from "BalanceWidgetMenu" /* 17974 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 18732 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 19173 */;
import OrbWalletProfileIntroductionCoachmarkDefault from "OrbWalletProfileIntroductionCoachmark" /* 19174 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 19177 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 19179 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 19183 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6650 */;
import UserProfileStore from "UserProfileStore" /* 7871 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation;

let closure_14;
let closure_15;
let map1;
function YouAvatar(arg0) {
  const callback = react.useCallback(() => {
    const obj = Tracking;
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
  let userId;
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items, isCurrentUser: true };
  return map1(UserProfileWidgetsBoardTabDefault, obj);
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
  let obj = navigateToProfileCustomization(trackUserProfileAction[18]);
  const token = obj.useToken(markAsDismissed(trackUserProfileAction[19]).colors.WHITE);
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[20]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  let closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  react = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  let closure_5 = tmp9;
  const items = [navigateToProfileCustomization, trackUserProfileAction, tmp7, tmp8, tmp9, markAsDismissed];
  const items1 = [navigateToProfileCustomization];
  const callback = react.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const obj = Tracking;
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
  obj4 = { ref, variant: "primary", icon: tmp14Result, text: intl.string(tmp4(trackUserProfileAction[26]).t.AAjhgi), onPress: callback, accessibilityValue: tmp17, grow: true };
  const tmp15 = markAsDismissed(trackUserProfileAction[22]);
  Button = navigateToProfileCustomization(trackUserProfileAction[23]).Button;
  const tmp12 = closure_15;
  const tmp13 = closure_14;
  if (isProfileLoaded) {
    const obj5 = { size: "sm", color: token };
    tmp14Result = tmp14(tmp4(tmp2[24]).PencilIcon, obj5);
  } else {
    const obj6 = { size: "small", color: token, accessible: false };
    tmp14Result = tmp14(tmp4(tmp2[25]).ActivityIndicator, obj6);
  }
  intl = tmp4(tmp2[26]).intl;
  tmp17 = undefined;
  if (!isProfileLoaded) {
    const obj7 = { text: intl2.string(tmp4(trackUserProfileAction[26]).t.ZTNur7) };
    intl2 = tmp4(tmp2[26]).intl;
    tmp17 = obj7;
  }
  const obj8 = { children: items2 };
  items2 = [closure_13(tmp15, obj3), closure_13(tmp(trackUserProfileAction[27]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_13(tmp(trackUserProfileAction[28]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_13(tmp(trackUserProfileAction[29]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  return tmp12(tmp13, obj8);
}
function YouScreenPrimaryInfoSection(arg0) {
  let canSet;
  let entryPoint;
  let isMainTabActive;
  let isProfileLoaded;
  let items1;
  let items2;
  let navigateToProfileCustomization;
  let orbWalletEntryRowRef;
  let primaryInfoProps;
  let tmp23;
  let tmp24;
  ({ isProfileLoaded, primaryInfoProps } = arg0);
  ({ orbWalletEntryRowRef, isMainTabActive, navigateToProfileCustomization } = arg0);
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
  const obj4 = BalanceWidgetMenu;
  const isOrbWalletEntryRowShown = obj4.useIsOrbWalletEntryRowShown();
  let tmp11 = isProfileLoaded;
  const obj5 = BalanceWidgetMenu;
  const openOrbWallet = obj5.useOpenOrbWalletFromYouScreen().openOrbWallet;
  if (isProfileLoaded) {
    tmp11 = !tmp9;
  }
  const items = [];
  if (tmp11) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp13 = isProfileLoaded && null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp13) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  const tmp16 = isProfileLoaded && isBadgeManagementEnabled && tmp6 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp16) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  const tmp18 = isProfileLoaded && canSet && "profile" === entryPoint && !tmp9 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp18) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp20 = isProfileLoaded && isOrbWalletEntryRowShown && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp20) {
    items.push(dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK);
  }
  const tmp4Result = useSelectedDismissibleContent;
  [tmp23, tmp24] = tmp4Result.useSelectedDismissibleContent(items);
  _slicedToArray(tmp4Result.useSelectedDismissibleContent(items), 2);
  const tmp25 = tmp23 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp4Result2 = useBadgeDirectoryNuxEntryPoint;
  const badgeDirectoryNuxEntryPoint = tmp4Result2.useBadgeDirectoryNuxEntryPoint(tmp25, tmp24);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj6 = { style: items1, children: items2 };
  items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  const onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const obj7 = { badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory };
  const tmpResult = UserProfilePrimaryInfoDefault;
  const merged = Object.assign(primaryInfoProps);
  items2 = [map1(tmpResult, obj7), , , ];
  let tmp29Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  const tmp27 = closure_15;
  const tmp28 = View;
  if (tmp29Result) {
    const obj8 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp25, markAsDismissed: tmp24 };
    tmp29Result = tmp29(tmp(15125), obj8);
  }
  items2[1] = tmp29Result;
  items2[2] = map1(EditSection, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp23, markAsDismissed: tmp24 });
  const obj9 = { targetRef: orbWalletEntryRowRef, visible: tmp23 === dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK && isMainTabActive, markAsDismissed: tmp24, onSeeChallenges: openOrbWallet };
  const tmpResult2 = OrbWalletProfileIntroductionCoachmarkDefault;
  tmp23 === dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK && isMainTabActive;
  items2[3] = map1(tmpResult2, obj9);
  return tmp27(tmp28, obj6);
}
let react = react_mod;
let View = react_native.View;
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
const UserProfileSections = Constants2.UserProfileSections;
let UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_12 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let LayerScope;
  let Tabs;
  let activeProfileTabSectionIndex;
  let activityTabIndex;
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
  let obj21;
  let obj25;
  let obj26;
  let obj8;
  let onLayout;
  let pageHeights;
  let pronouns;
  let ref;
  let scrollPosition;
  let scrollViewRef;
  let secondaryColor;
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
  let isRecentActivityMobileEnabled;
  let MAIN;
  let num;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let isVisible;
  let callback2;
  let callback3;
  let callback4;
  let segmentedControlState;
  let tmp = navigateToFriends;
  let tmp2 = navigateToPremium;
  let tmp3 = navigateToFriends(navigateToPremium[15])();
  let closure_5 = tmp3;
  let tmp4 = user;
  let obj = user(navigateToPremium[40]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[20]);
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
  const statusBackground = userProfileColors.statusBackground;
  let obj6 = initialTab;
  const avatarBackground = userProfileColors.avatarBackground;
  const ref1 = initialTab.useRef(null);
  const ref2 = initialTab.useRef(null);
  let items2 = [trackUserProfileAction];
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const obj = showYouAccountActionSheet;
    const result = obj.showYouAccountActionSheet();
  }, items2);
  let obj7 = user(navigateToPremium[47]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c15 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[48]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[44]);
  const items3 = [displayProfile];
  const stateFromStores1 = obj10.useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj11 = user(navigateToPremium[49]);
  let tmp20 = obj11.useDisplayableBoardWidgets(user.id).length > 0;
  const obj12 = user(navigateToPremium[50]);
  const canConjureCustomWidget = obj12.useCanConjureCustomWidget("YouScreenUserProfileContent");
  const obj13 = user(navigateToPremium[51]);
  let isMobileWidgetEditingEnabled = obj13.useIsMobileWidgetEditingEnabled("YouScreenUserProfileContent");
  if (!tmp20) {
    tmp20 = canConjureCustomWidget;
  }
  if (!tmp20) {
    tmp20 = isMobileWidgetEditingEnabled;
  }
  isMobileWidgetEditingEnabled = tmp20;
  let tmp4Result = tmp4(tmp2[52]);
  isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result8 = tmp4(tmp2[53]);
  const profileTabIndices = tmp4Result8.useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  MAIN = initialTab;
  if (null != initialTab) {
    MAIN = initialTab;
    const obj14 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    const tmp4Result9 = tmp4(tmp2[53]);
    if (tmp4Result9.getProfileTabSectionIndex(initialTab, obj14) < 0) {
      MAIN = customStatusActivity.MAIN;
    }
  }
  const tmp26 = tmp(tmp2[54])();
  const width = tmp26.width;
  num = 0;
  ({ ref, onLayout } = tmp26);
  if (undefined !== width) {
    num = width;
  }
  const items4 = [trackUserProfileAction, navigation, initialTab];
  const callback1 = obj6.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
  }, items4);
  const tmp4Result10 = tmp4(tmp2[53]);
  const profileSectionTabs = tmp4Result10.useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp29;
  const items5 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const MAIN2 = customStatusActivity.MAIN;
  callback2 = obj6.useCallback(() => {
    let tmp2 = null;
    const tmp = c15;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    tmp(tmp2);
  }, items5);
  const items6 = [callback2];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback2();
    });
  }, items6);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items7 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, tmp11, enabled, user, tmp6, navigateToFriends];
  callback3 = obj6.useCallback(() => {
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
    const tmp = closure_15;
    const tmp2 = View;
    const tmp6 = navigateToPremium;
    if (tmp3Result) {
      const obj4 = { navigateToPremium: tmp6, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(15214), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = map1(CheckpointProfileEntrypointDefault, {});
    let tmp3Result2 = enabled;
    if (tmp3Result2) {
      const obj5 = { orbWalletEntryRowRef: ref2 };
      tmp3Result2 = tmp3(tmp4(17974), obj5);
    }
    items2[3] = tmp3Result2;
    const obj6 = { user, currentUser: user, style: items };
    items2[4] = map1(UserProfileActivityDefault, obj6);
    const obj7 = { userId: user.id, displayProfile };
    items2[5] = map1(UserProfileAboutMeCardDefault, obj7);
    const obj8 = { userId: user.id };
    items2[6] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, obj8);
    const obj9 = { userId: user.id };
    items2[7] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj9);
    const obj10 = { userId: user.id, navigateToFriends };
    items2[8] = map1(UserProfileYourFriendsCardDefault, obj10);
    const obj11 = { userId: user.id };
    items2[9] = map1(UserProfileNoteDefault, obj11);
    return tmp(tmp2, obj2);
  }, items7);
  const items8 = [tmp3.profileContent, stateFromStores1, num, activeProfileTabSection === customStatusActivity.WISHLIST, user.id];
  callback4 = obj6.useCallback(() => {
    let items;
    let tmp15;
    let tmp4;
    let tmp4Result;
    let tmp8;
    const obj = { style: closure_5.profileContent, children: items };
    const tmp = closure_15;
    const tmp2 = View;
    if (null == stateFromStores1) {
      tmp4Result = map1(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp4 = map1;
    } else {
      tmp4 = map1;
      const obj2 = { wishlistId: stateFromStores1, containerWidth: tmp8, isVisible };
      tmp8 = undefined;
      const tmp7 = UserProfileWishlistGridDefault;
      if (0 > 0) {
        tmp8 = num;
      }
      tmp4Result = tmp4(tmp7, obj2);
    }
    items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: tmp15 };
    tmp15 = undefined;
    const tmp14 = UserProfileWishlistSuggestionsGridDefault;
    if (num > 0) {
      tmp15 = num;
    }
    items[1] = tmp4(tmp14, obj3);
    return tmp(tmp2, obj);
  }, items8);
  const items9 = [callback3, callback4, tmp20, isRecentActivityMobileEnabled, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj3;
    let obj5;
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: callback3() };
    intl = intl5.intl;
    const items = [obj];
    const tmp3 = isMobileWidgetEditingEnabled;
    if (tmp3) {
      const push = items.push;
      const obj2 = { id: "board", label: intl2.string(intl5.t.laViwx), page: map1(YouScreenWidgetsBoardContainer, obj3) };
      intl2 = tmp(1113).intl;
      obj3 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj2);
    }
    const tmp11 = isRecentActivityMobileEnabled;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: map1(YouScreenActivityTabContainer, obj5) };
      intl3 = tmp(1113).intl;
      obj5 = { user, containerBackground, containerBorderColor };
      push2(obj4);
    }
    const push3 = items.push;
    const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback4() };
    intl4 = tmp(1113).intl;
    push3(obj6);
    return items;
  }, items9);
  const tmp4Result11 = tmp4(tmp2[66]);
  const measuredTabItems = tmp4Result11.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result12 = tmp4(tmp2[67]);
  const obj15 = { pageWidth: num, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[19]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result12.useSegmentedControlState(obj15);
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
  const obj16 = { style, children: ref2(LayerScope, obj26) };
  View = tmp(tmp2[68]).View;
  const obj17 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj18 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[69]).LayerScope;
  items13 = [ref2(shouldShowExpiringTrialOfferCard, obj18), , , ];
  const obj19 = { ref: ref1, customStatusActivity, hasCustomProfileTheme: tmp11, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items14 = [, ];
  ({ customStatusBubble: arr14[0], customStatusBubbleInset: arr14[1] } = tmp3);
  items13[1] = ref2(tmp(tmp2[70]), obj19);
  let isLoaded;
  const tmp43 = MAIN;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj20 = { isProfileLoaded: true === isLoaded, orbWalletEntryRowRef: ref2, isMainTabActive: activeProfileTabSection === MAIN2, navigateToProfileCustomization, primaryInfoProps: obj21 };
  obj21 = { user, pronouns, badges: tmp8, badgeContainerBackground: containerBackground, profileBackgroundColor: statusBackground, onPressDisplayName: callback, displayNameAccessibilityHint: "" + formatToPlainStringResult + ", " + intl2.string(tmp4(tmp2[26]).t.C6COaT), themeType: UserProfileThemeTypes.YOU_SCREEN, showChevron: true, canOpenBadgeDirectory: true };
  pronouns = undefined;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[26]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj22 = { status: tmp4Result14.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[26]).t["er+FRD"];
  tmp4Result14 = tmp4(tmp2[71]);
  formatToPlainStringResult = formatToPlainString(prop, obj22);
  intl2 = tmp4(tmp2[26]).intl;
  items13[2] = ref2(tmp43, obj20);
  const obj23 = { style: { flex: 1 }, ref, onLayout, children: items15 };
  const obj24 = { style: tmp3.profileTablist, children: ref2(Tabs, obj25) };
  obj25 = { state: segmentedControlState, variant: str };
  str = undefined;
  Tabs = tmp4(tmp2[72]).Tabs;
  if (tmp11) {
    str = "overlay";
  }
  obj26 = { zIndex: 1, children: c15(closure_5, obj17) };
  items15 = [ref2(closure_5, obj24), ref2(tmp(tmp2[66]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  items13[3] = c15(closure_5, obj23);
  return ref2(View, obj16);
};
