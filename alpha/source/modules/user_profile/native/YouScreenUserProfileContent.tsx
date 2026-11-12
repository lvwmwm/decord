// Module ID: 19446
// Function ID: 19447
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 5084, 7252, 7288, 8413, 7896, 5089, 16942, 21, 10448, 19009, 1377, 8555, 8540, 15685, 15712, 5839, 575, 8479, 5076, 15588, 5873, 10832, 7354, 1113, 19447, 19452, 19443, 10011, 19454, 19455, 15665, 15359, 15666, 14465, 18218, 9493, 15668, 15353, 19456, 15669, 19457, 1500, 8416, 9462, 8541, 504, 8524, 8535, 15828, 19459, 12184, 15704, 15686, 15725, 7929, 9471, 19460, 15728, 19462, 15590, 15364, 15731, 19466, 15653, 15736, 15742, 15748, 7917, 1652, 5853, 9464, 8352, 13153, 2]
// Exports: default

// Module 19446 (YouScreenUserProfileContent)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 5084 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import Constants from "Constants" /* 7896 */;
import Constants2 from "Constants" /* 8413 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8540 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8555 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 9471 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 9493 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10011 */;
import Tracking from "Tracking" /* 10448 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 14465 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 15353 */;
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile" /* 15359 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 15364 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 15590 */;
import UserProfileNoteDefault from "UserProfileNote" /* 15653 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 15665 */;
import useBadgeDirectoryNuxPopoverVariant from "useBadgeDirectoryNuxPopoverVariant" /* 15666 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 15668 */;
import UserProfileWidgetsBoardTabDefault from "UserProfileWidgetsBoardTab" /* 15685 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 15712 */;
import UserProfileConnections from "UserProfileConnections" /* 15731 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 15736 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15742 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16942 */;
import BalanceWidgetMenu from "BalanceWidgetMenu" /* 18218 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 19009 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 19454 */;
import useIsNitroBadgeAutoUnhiddenDefault from "useIsNitroBadgeAutoUnhidden" /* 19455 */;
import NitroBadgeUnhiddenCoachmarkDefault from "NitroBadgeUnhiddenCoachmark" /* 19456 */;
import OrbWalletProfileIntroductionCoachmarkDefault from "OrbWalletProfileIntroductionCoachmark" /* 19457 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 19460 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 19462 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 19466 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7252 */;
import UserProfileStore from "UserProfileStore" /* 7288 */;
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
  let tmp28;
  let tmp29;
  ({ isProfileLoaded, primaryInfoProps } = arg0);
  ({ orbWalletEntryRowRef, isMainTabActive, navigateToProfileCustomization } = arg0);
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = BadgeManagementExperiment;
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp6 = useOwnsAnyBadgeDefault();
  const tmp7 = useIsNitroBadgeAutoUnhiddenDefault();
  const obj2 = useBadgeDirectoryNuxCoachmarkVariant;
  const badgeDirectoryNuxCoachmarkVariant = obj2.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const obj3 = useCanOpenBadgeDirectoryFromProfile;
  const canOpenBadgeDirectoryFromProfile = obj3.useCanOpenBadgeDirectoryFromProfile({ location: "YouScreenUserProfileContent" });
  const obj4 = useBadgeDirectoryNuxPopoverVariant;
  const obj5 = { currentUserId: id, enabled: isBadgeManagementEnabled, fetchCatalog: !canOpenBadgeDirectoryFromProfile };
  const tmp10 = badgeDirectoryNuxCoachmarkVariant.isPending || obj4.useBadgeDirectoryNuxPopoverState(obj5).isPending;
  const tmp4Result = CustomTypingIndicatorExperiment;
  const customTypingIndicatorConfig = tmp4Result.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp12 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const tmp4Result5 = BalanceWidgetMenu;
  const isOrbWalletEntryRowShown = tmp4Result5.useIsOrbWalletEntryRowShown();
  let tmp14 = isProfileLoaded;
  const tmp4Result6 = BalanceWidgetMenu;
  const openOrbWallet = tmp4Result6.useOpenOrbWalletFromYouScreen().openOrbWallet;
  if (isProfileLoaded) {
    tmp14 = tmp7;
  }
  const items = [];
  if (tmp14) {
    items.push(dismissible_content.DismissibleContent.NITRO_BADGE_UNHIDDEN_NOTICE);
  }
  let tmp16 = !isProfileLoaded;
  if (isProfileLoaded) {
    tmp16 = tmp12;
  }
  if (!tmp16) {
    tmp16 = tmp10;
  }
  if (!tmp16) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp18 = isProfileLoaded && null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp18) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  const tmp21 = isProfileLoaded && isBadgeManagementEnabled && tmp6 && !tmp10;
  if (tmp21) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  const tmp23 = isProfileLoaded && canSet && "profile" === entryPoint && !tmp12 && !tmp10;
  if (tmp23) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp25 = isProfileLoaded && isOrbWalletEntryRowShown && !tmp10;
  if (tmp25) {
    items.push(dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK);
  }
  const tmp4Result7 = useSelectedDismissibleContent;
  [tmp28, tmp29] = tmp4Result7.useSelectedDismissibleContent(items);
  _slicedToArray(tmp4Result7.useSelectedDismissibleContent(items), 2);
  const tmp30 = tmp28 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp4Result8 = useBadgeDirectoryNuxEntryPoint;
  const badgeDirectoryNuxEntryPoint = tmp4Result8.useBadgeDirectoryNuxEntryPoint(tmp30, tmp29);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj6 = { style: items1, children: items2 };
  items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  const onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const obj7 = { badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory };
  const tmpResult = UserProfilePrimaryInfoDefault;
  const merged = Object.assign(primaryInfoProps);
  items2 = [map1(tmpResult, obj7), , , , ];
  const obj8 = { targetRef: entryPointRef, visible: tmp28 === dismissible_content.DismissibleContent.NITRO_BADGE_UNHIDDEN_NOTICE, markAsDismissed: tmp29 };
  const tmpResult3 = NitroBadgeUnhiddenCoachmarkDefault;
  items2[1] = map1(tmpResult3, obj8);
  let tmp34Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  const tmp32 = closure_15;
  const tmp33 = View;
  if (tmp34Result) {
    const obj9 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp30, markAsDismissed: tmp29 };
    tmp34Result = tmp34(tmp(15669), obj9);
  }
  items2[2] = tmp34Result;
  items2[3] = map1(EditSection, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp28, markAsDismissed: tmp29 });
  const obj10 = { targetRef: orbWalletEntryRowRef, visible: tmp28 === dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK && isMainTabActive, markAsDismissed: tmp29, onSeeChallenges: openOrbWallet };
  const tmpResult4 = OrbWalletProfileIntroductionCoachmarkDefault;
  tmp28 === dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK && isMainTabActive;
  items2[4] = map1(tmpResult4, obj10);
  return tmp32(tmp33, obj6);
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
  let statusBackground;
  let str;
  let style;
  let theme;
  let tmp17;
  let tmp4Result12;
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
  let obj = user(navigateToPremium[44]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[20]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[45])(user.id);
  const displayProfile = tmp6;
  let obj3 = user(navigateToPremium[46]);
  const customStatusActivity = obj3.useCustomStatusActivity();
  let tmp8 = navigateToFriends(navigateToPremium[47])(tmp6);
  let obj4 = user(navigateToPremium[48]);
  let items1 = [trackUserProfileAction];
  const stateFromStores = obj4.useStateFromStores(items1, () => trackUserProfileAction.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[49])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[50]);
  const userProfileColors = obj5.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  let obj6 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref1 = initialTab.useRef(null);
  const ref2 = initialTab.useRef(null);
  let items2 = [trackUserProfileAction];
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const obj = showYouAccountActionSheet;
    const result = obj.showYouAccountActionSheet();
  }, items2);
  let obj7 = user(navigateToPremium[51]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c15 = tmp17;
  navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[52]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[48]);
  const items3 = [displayProfile];
  const stateFromStores1 = obj10.useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj11 = user(navigateToPremium[53]);
  let tmp20 = obj11.useDisplayableBoardWidgets(user.id).length > 0;
  const obj12 = user(navigateToPremium[54]);
  const canConjureCustomWidget = obj12.useCanConjureCustomWidget("YouScreenUserProfileContent");
  const obj13 = user(navigateToPremium[55]);
  let isMobileWidgetEditingEnabled = obj13.useIsMobileWidgetEditingEnabled("YouScreenUserProfileContent");
  if (!tmp20) {
    tmp20 = canConjureCustomWidget;
  }
  if (!tmp20) {
    tmp20 = isMobileWidgetEditingEnabled;
  }
  isMobileWidgetEditingEnabled = tmp20;
  let tmp4Result = tmp4(tmp2[56]);
  const profileTabIndices = tmp4Result.useProfileTabIndices(tmp20, true, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  MAIN = initialTab;
  if (null != initialTab) {
    MAIN = initialTab;
    const obj14 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    const tmp4Result7 = tmp4(tmp2[56]);
    if (tmp4Result7.getProfileTabSectionIndex(initialTab, obj14) < 0) {
      MAIN = customStatusActivity.MAIN;
    }
  }
  const tmp25 = tmp(tmp2[57])();
  const width = tmp25.width;
  num = 0;
  ({ ref, onLayout } = tmp25);
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
  const tmp4Result8 = tmp4(tmp2[56]);
  const profileSectionTabs = tmp4Result8.useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp28;
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
      tmp3Result = tmp3(tmp4(15728), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = map1(CheckpointProfileEntrypointDefault, {});
    let tmp3Result2 = enabled;
    if (tmp3Result2) {
      const obj5 = { orbWalletEntryRowRef: ref2 };
      tmp3Result2 = tmp3(tmp4(18218), obj5);
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
  const items9 = [callback3, callback4, tmp20, user, activeProfileTabSection, containerBackground, containerBorderColor];
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
    const push2 = items.push;
    const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: map1(YouScreenActivityTabContainer, obj5) };
    intl3 = tmp(1113).intl;
    obj5 = { user, containerBackground, containerBorderColor };
    push2(obj4);
    const push3 = items.push;
    const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback4() };
    intl4 = tmp(1113).intl;
    push3(obj6);
    return items;
  }, items9);
  const tmp4Result9 = tmp4(tmp2[69]);
  const measuredTabItems = tmp4Result9.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result10 = tmp4(tmp2[70]);
  const obj15 = { pageWidth: num, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[19]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result10.useSegmentedControlState(obj15);
  const items10 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items10);
  const items11 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const tmp4Result11 = tmp4(tmp2[44]);
  const focusEffect = tmp4Result11.useFocusEffect(obj6.useCallback(() => {
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
  View = tmp(tmp2[71]).View;
  const obj17 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj18 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[72]).LayerScope;
  items13 = [ref2(shouldShowExpiringTrialOfferCard, obj18), , , ];
  const obj19 = { ref: ref1, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items14 = [, ];
  ({ customStatusBubble: arr14[0], customStatusBubbleInset: arr14[1] } = tmp3);
  items13[1] = ref2(tmp(tmp2[73]), obj19);
  let isLoaded;
  const tmp42 = num;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj20 = { isProfileLoaded: true === isLoaded, orbWalletEntryRowRef: ref2, isMainTabActive: activeProfileTabSection === MAIN2, navigateToProfileCustomization, primaryInfoProps: obj21 };
  obj21 = { user, pronouns, badges: tmp8, badgeContainerBackground: containerBackground, onPressDisplayName: callback, displayNameAccessibilityHint: "" + formatToPlainStringResult + ", " + intl2.string(tmp4(tmp2[26]).t.C6COaT), themeType: UserProfileThemeTypes.YOU_SCREEN, showChevron: true, canOpenBadgeDirectory: true };
  pronouns = undefined;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[26]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj22 = { status: tmp4Result12.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[26]).t["er+FRD"];
  tmp4Result12 = tmp4(tmp2[74]);
  formatToPlainStringResult = formatToPlainString(prop, obj22);
  intl2 = tmp4(tmp2[26]).intl;
  items13[2] = ref2(tmp42, obj20);
  const obj23 = { style: { flex: 1 }, ref, onLayout, children: items15 };
  const obj24 = { style: tmp3.profileTablist, children: ref2(Tabs, obj25) };
  obj25 = { state: segmentedControlState, variant: str };
  str = undefined;
  Tabs = tmp4(tmp2[75]).Tabs;
  if (null != primaryColor) {
    str = "overlay";
  }
  obj26 = { zIndex: 1, children: c15(closure_5, obj17) };
  items15 = [ref2(closure_5, obj24), ref2(tmp(tmp2[69]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  items13[3] = c15(closure_5, obj23);
  return ref2(View, obj16);
};
