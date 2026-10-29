// Module ID: 18761
// Function ID: 18762
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 4849, 6557, 7760, 8712, 7364, 4854, 16336, 21, 558, 576, 9632, 18328, 1381, 8786, 8772, 14868, 14869, 14872, 14894, 5289, 587, 8719, 4841, 10187, 6940, 1125, 5281, 14763, 18762, 18767, 18758, 16366, 11211, 18768, 14843, 13532, 7555, 14846, 11171, 14847, 1504, 8715, 11150, 8773, 504, 8758, 8769, 14683, 18769, 14892, 14870, 14904, 14905, 11157, 18770, 14908, 17580, 14765, 11252, 14911, 18772, 14830, 14916, 14920, 14926, 8938, 11151, 9054, 12315, 5634, 5086, 2]

// Module 18761 (YouScreenUserProfileContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1125 */;
import dismissible_content from "dismissible_content" /* 4841 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4849 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import Constants from "Constants" /* 7364 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7555 */;
import Constants2 from "Constants" /* 8712 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8772 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8786 */;
import tracking_Tracking from "tracking/Tracking" /* 9632 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11157 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11171 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11211 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11252 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13532 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14765 */;
import UserProfileNoteDefault from "UserProfileNote" /* 14830 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 14843 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 14846 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 14868 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 14869 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14872 */;
import UserProfileConnections from "UserProfileConnections" /* 14911 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14916 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14920 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16336 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 16366 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 17580 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 18328 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 18768 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 18770 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 18772 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6557 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation;

let closure_14;
let closure_15;
let map1;
let tmp;
let tmp3;
const PlatformUtils = tmp(1381);
const UserProfileActivityTabDefault = tmp3(14894);
let react = react_mod;
let View = react_native.View;
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
const UserProfileSections = Constants2.UserProfileSections;
let UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const constants = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouAvatar(arg0) {
  let first;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = require("tracking/Tracking");
      const result = obj.trackYouTabAvatarPress();
      const obj2 = require("showYouAccountActionSheet");
      const result1 = obj2.showYouAccountActionSheet();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    cResult[1] = isAndroidResult;
    tmp5 = isAndroidResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    let obj2 = { onPress: first, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: tmp5, accessible: !tmp5 && undefined };
    const tmp10 = UserProfileAvatarDefault;
    const merged = Object.assign(arg0);
    const tmp8Result = map1(tmp10, obj2);
    cResult[2] = arg0;
    cResult[3] = tmp8Result;
    tmp7 = tmp8Result;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function YouAvatar(arg0) {
  const callback = react.useCallback(() => {
    const obj = require("tracking/Tracking");
    const result = obj.trackYouTabAvatarPress();
    const obj2 = require("showYouAccountActionSheet");
    const result1 = obj2.showYouAccountActionSheet();
  }, []);
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  let obj2 = { onPress: callback, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: isAndroidResult, accessible: !isAndroidResult && undefined };
  const tmp4 = UserProfileAvatarDefault;
  const merged = Object.assign(arg0);
  return map1(tmp4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouScreenCardStyle(backgroundColor, borderColor) {
  const obj = react2;
  const cResult = obj.c(6);
  const tmp2 = UserProfileSharedStylesDefault();
  if (cResult[0] === backgroundColor) {
    let tmp3;
    if (cResult[1] === borderColor) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === tmp2.card) {
      let tmp4;
      if (cResult[4] === tmp3) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const items = [tmp2.card, tmp3];
    cResult[3] = tmp2.card;
    cResult[4] = tmp3;
    cResult[5] = items;
    tmp4 = items;
  }
  const obj2 = { backgroundColor, borderColor, borderWidth: 1 };
  cResult[0] = backgroundColor;
  cResult[1] = borderColor;
  cResult[2] = obj2;
  tmp3 = obj2;
}) : (function useYouScreenCardStyle(backgroundColor, borderColor) {
  const items = [UserProfileSharedStylesDefault().card, ];
  const obj = { backgroundColor, borderColor, borderWidth: 1 };
  items[1] = obj;
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenWidgetsBoardContainer(userId) {
  let activeSection;
  let containerBackground;
  let containerBorderColor;
  let items;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  userId = userId.userId;
  ({ activeSection, containerBackground, containerBorderColor } = userId);
  const tmp4 = UserProfileSharedStylesDefault();
  const WIDGETS = UserProfileSections.WIDGETS;
  const tmp5 = closure_17(containerBackground, containerBorderColor);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = map1(UserProfileWidgetsBoardEditNoticeDefault, {});
    const tmp10 = map1(ConjureCustomWidgetAddOptionDefault, {});
    cResult[0] = tmp9;
    cResult[1] = tmp10;
    tmp6 = tmp9;
    tmp7 = tmp10;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === activeSection === WIDGETS) {
      let tmp12;
      if (cResult[4] === userId) {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.profileContent) {
        let tmp14;
        if (cResult[7] === tmp12) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
      const obj2 = { style: tmp4.profileContent, children: items };
      items = [tmp6, tmp7, tmp12];
      const tmp17 = syncedClientThemes(View, obj2);
      cResult[6] = tmp4.profileContent;
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = map1(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = activeSection === WIDGETS;
  cResult[4] = userId;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function YouScreenWidgetsBoardContainer(arg0) {
  let activeSection;
  let containerBackground;
  let containerBorderColor;
  let items;
  let userId;
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const WIDGETS = UserProfileSections.WIDGETS;
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: items };
  items = [, , ];
  const tmp2 = closure_17(containerBackground, containerBorderColor);
  items[0] = map1(UserProfileWidgetsBoardEditNoticeDefault, {});
  items[1] = map1(ConjureCustomWidgetAddOptionDefault, {});
  const obj2 = { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp2 };
  items[2] = map1(UserProfileWidgetsBoardDefault, obj2);
  return syncedClientThemes(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenActivityTabContainer(arg0) {
  let containerBackground;
  let containerBorderColor;
  let user;
  const obj = react2;
  const cResult = obj.c(9);
  ({ user, containerBackground, containerBorderColor } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_17(containerBackground, containerBorderColor);
  if (cResult[0] === tmp4.cards) {
    let tmp6;
    if (cResult[1] === tmp4.profileContent) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp7;
      if (cResult[4] === user) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj2 = { style: tmp6, children: tmp7 };
      const tmp13 = map1(View, obj2);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { user, currentUser: user, cardStyle: tmp5 };
    const tmp9 = map1(UserProfileActivityTabDefault, obj3);
    cResult[3] = tmp5;
    cResult[4] = user;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = tmp4);
  cResult[0] = tmp4.cards;
  cResult[1] = tmp4.profileContent;
  cResult[2] = items;
  tmp6 = items;
}) : (function YouScreenActivityTabContainer(user) {
  let containerBackground;
  let containerBorderColor;
  let items;
  let tmp2;
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const obj = { style: items, children: map1(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: tmp2 }) };
  items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = UserProfileSharedStylesDefault());
  UserProfileSharedStylesDefault();
  tmp2 = closure_17(containerBackground, containerBorderColor);
  return map1(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditSection(navigateToProfileCustomization) {
  let closure_4;
  let isProfileLoaded;
  let markAsDismissed;
  let trackUserProfileAction;
  let visibleContent;
  let obj = navigateToProfileCustomization(trackUserProfileAction[12]);
  const cResult = obj.c(37);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let tmp4 = markAsDismissed(trackUserProfileAction[17])();
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[22]);
  const token = obj2.useToken(markAsDismissed(trackUserProfileAction[23]).colors.WHITE);
  const obj3 = navigateToProfileCustomization(trackUserProfileAction[24]);
  trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  let closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  react = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  let closure_5 = tmp9;
  if (cResult[0] === markAsDismissed) {
    if (cResult[1] === navigateToProfileCustomization) {
      if (cResult[2] === tmp8) {
        if (cResult[3] === tmp9) {
          if (cResult[4] === tmp7) {
            let tmp10;
            let tmp13Result;
            if (cResult[5] === trackUserProfileAction) {
              tmp10 = cResult[6];
            }
            if (cResult[7] !== navigateToProfileCustomization) {
              class E {
                constructor() {
                  navigateToProfileCustomization(constants.BADGES);
                }
              }
              cResult[7] = navigateToProfileCustomization;
              cResult[8] = E;
            } else {
              class E {
                constructor() {
                  navigateToProfileCustomization(constants.BADGES);
                }
              }
            }
            if (cResult[9] === token) {
              let tmp18;
              class E {
                constructor() {
                  navigateToProfileCustomization(constants.BADGES);
                }
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                class E {
                  constructor() {
                    navigateToProfileCustomization(constants.BADGES);
                  }
                }
                const stringResult = obj4.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.AAjhgi);
                cResult[12] = stringResult;
                tmp18 = stringResult;
              } else {
                class E {
                  constructor() {
                    navigateToProfileCustomization(constants.BADGES);
                  }
                }
              }
              if (cResult[13] !== isProfileLoaded) {
                class E {
                  constructor() {
                    navigateToProfileCustomization(constants.BADGES);
                  }
                }
                if (!isProfileLoaded) {
                  class E {
                    constructor() {
                      navigateToProfileCustomization(constants.BADGES);
                    }
                  }
                  const intl = tmp(tmp2[28]).intl;
                  tmp22[0] = intl.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.ZTNur7);
                }
                cResult[13] = isProfileLoaded;
                cResult[14] = tmp21;
              } else {
                class E {
                  constructor() {
                    navigateToProfileCustomization(constants.BADGES);
                  }
                }
              }
              if (cResult[15] === tmp10) {
                class E {
                  constructor() {
                    navigateToProfileCustomization(constants.BADGES);
                  }
                }
              }
              const obj5 = { ref, variant: "primary", icon: tmp12, text: tmp18, onPress: tmp10, accessibilityValue: tmp20, grow: true };
              cResult[15] = tmp10;
              cResult[16] = tmp12;
              cResult[17] = tmp20;
              cResult[18] = closure_13(navigateToProfileCustomization(trackUserProfileAction[29]).Button, obj5);
              const tmp25 = closure_13(navigateToProfileCustomization(trackUserProfileAction[29]).Button, obj5);
            }
            if (isProfileLoaded) {
              class E {
                constructor() {
                  navigateToProfileCustomization(constants.BADGES);
                }
              }
              tmp16[1] = token;
              tmp13Result = tmp13(tmp(tmp2[26]).PencilIcon, tmp16);
            } else {
              class E {
                constructor() {
                  navigateToProfileCustomization(constants.BADGES);
                }
              }
              tmp14[1] = token;
              tmp13Result = tmp13(tmp(tmp2[27]).ActivityIndicator, tmp14);
            }
            cResult[9] = token;
            cResult[10] = isProfileLoaded;
            cResult[11] = tmp13Result;
          }
        }
      }
    }
  }
  const fn = function n() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const obj = tracking_Tracking;
    const result = obj.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    const tmp4 = closure_3 || closure_4 || closure_5;
    if (tmp4) {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    }
  };
  cResult[0] = markAsDismissed;
  cResult[1] = navigateToProfileCustomization;
  cResult[2] = tmp8;
  cResult[3] = tmp9;
  cResult[4] = tmp7;
  cResult[5] = trackUserProfileAction;
  cResult[6] = fn;
  tmp10 = fn;
}) : (function EditSection(navigateToProfileCustomization) {
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
  const tmp3 = markAsDismissed(trackUserProfileAction[17])();
  let obj = navigateToProfileCustomization(trackUserProfileAction[22]);
  const token = obj.useToken(markAsDismissed(trackUserProfileAction[23]).colors.WHITE);
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[24]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  let closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  react = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
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
  const tmp15 = markAsDismissed(trackUserProfileAction[30]);
  Button = navigateToProfileCustomization(trackUserProfileAction[29]).Button;
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
  items2 = [closure_13(tmp15, obj3), closure_13(tmp(trackUserProfileAction[31]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_13(tmp(trackUserProfileAction[32]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_13(tmp(trackUserProfileAction[33]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  return tmp12(tmp13, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenPrimaryInfoSection(arg0) {
  let canSet;
  let entryPoint;
  let entryPointRef;
  let first;
  let isProfileLoaded;
  let items;
  let navigateToProfileCustomization;
  let onOpenBadgeDirectory;
  let primaryInfoProps;
  let tmp10;
  let tmp26;
  let tmp27;
  const obj = react2;
  const cResult = obj.c(36);
  ({ isProfileLoaded, navigateToProfileCustomization, primaryInfoProps } = arg0);
  const tmp5 = UserProfileSharedStylesDefault();
  const id = primaryInfoProps.user.id;
  const obj2 = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "YouScreenUserProfileContent" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmpResult = BadgeManagementExperiment;
  const isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(first);
  const tmp9 = useOwnsAnyBadgeDefault();
  if (cResult[1] !== id) {
    const obj4 = { userId: id, enabled: true, location: "YouScreenUserProfileContent" };
    cResult[1] = id;
    cResult[2] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult5 = useBadgeDirectoryNuxCoachmarkVariant;
  const badgeDirectoryNuxCoachmarkVariant = tmpResult5.useBadgeDirectoryNuxCoachmarkVariant(tmp10);
  const tmpResult6 = CustomTypingIndicatorExperiment;
  const customTypingIndicatorConfig = tmpResult6.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp13 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  if (cResult[3] === badgeDirectoryNuxCoachmarkVariant.isPending) {
    if (cResult[4] === badgeDirectoryNuxCoachmarkVariant.variantProps) {
      if (cResult[5] === entryPoint) {
        if (cResult[6] === tmp13) {
          if (cResult[7] === isBadgeManagementEnabled) {
            if (cResult[8] === canSet) {
              if (cResult[9] === isDisplayNameStylesFlywheelSettersEnabled) {
                if (cResult[10] === isProfileLoaded) {
                  let tmp14;
                  if (cResult[11] === tmp9) {
                    tmp14 = cResult[12];
                  }
                  const tmpResult7 = useSelectedDismissibleContent;
                  [tmp26, tmp27] = tmpResult7.useSelectedDismissibleContent(tmp14);
                  _slicedToArray(tmpResult7.useSelectedDismissibleContent(tmp14), 2);
                  const tmp28 = tmp26 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
                  const tmpResult8 = useBadgeDirectoryNuxEntryPoint;
                  const badgeDirectoryNuxEntryPoint = tmpResult8.useBadgeDirectoryNuxEntryPoint(tmp28, tmp27);
                  ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
                  if (cResult[13] === tmp5.primaryInfo) {
                    let tmp30;
                    if (cResult[14] === tmp5.profileContent) {
                      tmp30 = cResult[15];
                    }
                    if (cResult[16] === entryPointRef) {
                      if (cResult[17] === onOpenBadgeDirectory) {
                        let tmp31;
                        if (cResult[18] === primaryInfoProps) {
                          tmp31 = cResult[19];
                        }
                        if (cResult[20] === badgeDirectoryNuxCoachmarkVariant.variantProps) {
                          if (cResult[21] === entryPointRef) {
                            if (cResult[22] === tmp28) {
                              if (cResult[23] === tmp27) {
                                let tmp38;
                                if (cResult[24] === id) {
                                  tmp38 = cResult[25];
                                }
                                if (cResult[26] === isProfileLoaded) {
                                  if (cResult[27] === tmp27) {
                                    if (cResult[28] === navigateToProfileCustomization) {
                                      let tmp42;
                                      if (cResult[29] === tmp26) {
                                        tmp42 = cResult[30];
                                      }
                                      if (cResult[31] === tmp30) {
                                        if (cResult[32] === tmp31) {
                                          if (cResult[33] === tmp38) {
                                            let tmp46;
                                            if (cResult[34] === tmp42) {
                                              tmp46 = cResult[35];
                                            }
                                            return tmp46;
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp30, children: items };
                                      items = [tmp31, tmp38, tmp42];
                                      const tmp49 = syncedClientThemes(View, obj5);
                                      cResult[31] = tmp30;
                                      cResult[32] = tmp31;
                                      cResult[33] = tmp38;
                                      cResult[34] = tmp42;
                                      cResult[35] = tmp49;
                                      tmp46 = tmp49;
                                    }
                                  }
                                }
                                const obj6 = { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp26, markAsDismissed: tmp27 };
                                const tmp45 = map1(closure_20, obj6);
                                cResult[26] = isProfileLoaded;
                                cResult[27] = tmp27;
                                cResult[28] = navigateToProfileCustomization;
                                cResult[29] = tmp26;
                                cResult[30] = tmp45;
                                tmp42 = tmp45;
                              }
                            }
                          }
                        }
                        let tmp40 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
                        if (tmp40) {
                          const obj7 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp28, markAsDismissed: tmp27 };
                          tmp40 = map1(tmp4(14847), obj7);
                        }
                        cResult[20] = badgeDirectoryNuxCoachmarkVariant.variantProps;
                        cResult[21] = entryPointRef;
                        cResult[22] = tmp28;
                        cResult[23] = tmp27;
                        cResult[24] = id;
                        cResult[25] = tmp40;
                        tmp38 = tmp40;
                      }
                    }
                    const obj8 = { badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory };
                    const tmp4Result = UserProfilePrimaryInfoDefault;
                    const merged = Object.assign(primaryInfoProps);
                    const tmp37 = map1(tmp4Result, obj8);
                    cResult[16] = entryPointRef;
                    cResult[17] = onOpenBadgeDirectory;
                    cResult[18] = primaryInfoProps;
                    cResult[19] = tmp37;
                    tmp31 = tmp37;
                  }
                  const items1 = [, ];
                  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp5);
                  cResult[13] = tmp5.primaryInfo;
                  cResult[14] = tmp5.profileContent;
                  cResult[15] = items1;
                  tmp30 = items1;
                }
              }
            }
          }
        }
      }
    }
  }
  const items2 = [];
  const tmp15 = isProfileLoaded && isDisplayNameStylesFlywheelSettersEnabled && !tmp13;
  if (tmp15) {
    items2.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp17 = isProfileLoaded && null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp17) {
    items2.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  const tmp20 = isProfileLoaded && isBadgeManagementEnabled && tmp9 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp20) {
    items2.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  const tmp22 = isProfileLoaded && canSet && "profile" === entryPoint && !tmp13 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp22) {
    items2.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  cResult[3] = badgeDirectoryNuxCoachmarkVariant.isPending;
  cResult[4] = badgeDirectoryNuxCoachmarkVariant.variantProps;
  cResult[5] = entryPoint;
  cResult[6] = tmp13;
  cResult[7] = isBadgeManagementEnabled;
  cResult[8] = canSet;
  cResult[9] = isDisplayNameStylesFlywheelSettersEnabled;
  cResult[10] = isProfileLoaded;
  cResult[11] = tmp9;
  cResult[12] = items2;
  tmp14 = items2;
}) : (function YouScreenPrimaryInfoSection(navigateToProfileCustomization) {
  let canSet;
  let entryPoint;
  let isProfileLoaded;
  let items1;
  let items2;
  let primaryInfoProps;
  let tmp21;
  let tmp22;
  ({ isProfileLoaded, primaryInfoProps } = navigateToProfileCustomization);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj2 = BadgeManagementExperiment;
  const isBadgeManagementEnabled = obj2.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp7 = useOwnsAnyBadgeDefault();
  const obj3 = useBadgeDirectoryNuxCoachmarkVariant;
  const badgeDirectoryNuxCoachmarkVariant = obj3.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const obj4 = CustomTypingIndicatorExperiment;
  const customTypingIndicatorConfig = obj4.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const items = [];
  const tmp11 = isProfileLoaded && isDisplayNameStylesFlywheelSettersEnabled && !tmp10;
  if (tmp11) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp13 = isProfileLoaded && null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp13) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  const tmp16 = isProfileLoaded && isBadgeManagementEnabled && tmp7 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp16) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  const tmp18 = isProfileLoaded && canSet && "profile" === entryPoint && !tmp10 && !badgeDirectoryNuxCoachmarkVariant.isPending;
  if (tmp18) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = useSelectedDismissibleContent;
  [tmp21, tmp22] = tmp4Result.useSelectedDismissibleContent(items);
  _slicedToArray(tmp4Result.useSelectedDismissibleContent(items), 2);
  const tmp23 = tmp21 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp4Result2 = useBadgeDirectoryNuxEntryPoint;
  const badgeDirectoryNuxEntryPoint = tmp4Result2.useBadgeDirectoryNuxEntryPoint(tmp23, tmp22);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj5 = { style: items1, children: items2 };
  items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  const onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const obj6 = { badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory };
  const tmpResult = UserProfilePrimaryInfoDefault;
  const merged = Object.assign(primaryInfoProps);
  items2 = [map1(tmpResult, obj6), , ];
  let tmp27Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  const tmp25 = syncedClientThemes;
  const tmp26 = View;
  if (tmp27Result) {
    const obj7 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp23, markAsDismissed: tmp22 };
    tmp27Result = tmp27(tmp(14847), obj7);
  }
  items2[1] = tmp27Result;
  items2[2] = map1(closure_20, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp21, markAsDismissed: tmp22 });
  return tmp25(tmp26, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenUserProfileContent(user) {
  let activityTabIndex;
  let avatarBackground;
  let boardTabIndex;
  let closure_14;
  let isVisible;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let primaryColor;
  let scrollPosition;
  let scrollViewRef;
  let secondaryColor;
  let statusBackground;
  let style;
  let theme;
  let tmp10;
  let tmp11;
  let wishlistTabIndex;
  let tmp = user;
  let tmp2 = navigateToPremium;
  let obj = user(navigateToPremium[12]);
  const cResult = obj.c(150);
  user = user.user;
  ({ style, scrollViewRef, scrollPosition, navigateToProfileCustomization, navigateToFriends } = user);
  navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  const animateAvatar = user.animateAvatar;
  let tmp4 = navigateToFriends;
  let closure_5 = navigateToFriends(tmp2[17])();
  const tmp5 = navigateToFriends(tmp2[17])();
  const tmpResult = tmp(tmp2[43]);
  navigation = tmpResult.useNavigation();
  const tmpResult12 = tmp(tmp2[24]);
  const trackUserProfileAction = tmpResult12.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp7 = navigateToFriends(tmp2[44])(user.id);
  const displayProfile = tmp7;
  const tmpResult13 = tmp(tmp2[45]);
  const customStatusActivity = tmpResult13.useCustomStatusActivity();
  navigateToFriends(tmp2[46])(tmp7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [trackUserProfileAction];
    const fn = function f() {
      return trackUserProfileAction.getStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult14 = tmp(tmp2[47]);
  const stateFromStores = tmpResult14.useStateFromStores(tmp10, tmp11);
  if (cResult[2] === tmp7) {
    let tmp14;
    if (cResult[3] === user) {
      tmp14 = cResult[4];
    }
    let tmp15 = tmp4(tmp2[48])(tmp14);
    ({ theme, primaryColor, secondaryColor } = tmp15);
    const hasCustomProfileTheme = null != primaryColor;
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        let tmp17;
        let tmp24;
        let tmp25;
        if (cResult[7] === theme) {
          tmp17 = cResult[8];
        }
        const tmpResult15 = tmp(tmp2[49]);
        const userProfileColors = tmpResult15.useUserProfileColors(tmp17);
        const containerBackground = userProfileColors.containerBackground;
        const containerBorderColor = userProfileColors.containerBorderColor;
        ({ avatarBackground, statusBackground } = userProfileColors);
        let obj9 = initialTab;
        initialTab.useRef(null);
        if (cResult[9] !== trackUserProfileAction) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[9] = trackUserProfileAction;
          cResult[10] = Z;
        } else {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        const tmpResult16 = tmp(tmp2[50]);
        const enabled = tmpResult16.useVirtualCurrencyMobileEnabled().enabled;
        [r10111, closure_14] = navigateToShop(obj9.useState(null), 2);
        navigateToShop(obj9.useState(null), 2);
        const tmpResult17 = tmp(tmp2[51]);
        const shouldShowExpiringTrialOfferCard = tmpResult17.useShouldShowExpiringTrialOfferCard();
        const _Symbol = Symbol;
        const tmp21 = navigateToShop;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          let items1 = [displayProfile];
          cResult[11] = items1;
          tmp24 = items1;
        } else {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        if (cResult[12] !== user.id) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[12] = user.id;
          cResult[13] = tmp26;
          tmp25 = tmp26;
        } else {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        const tmpResult18 = tmp(tmp2[47]);
        const stateFromStores1 = tmpResult18.useStateFromStores(tmp24, tmp25);
        const tmpResult19 = tmp(tmp2[52]);
        const displayableBoardWidgets = tmpResult19.useDisplayableBoardWidgets(user.id);
        const tmpResult20 = tmp(tmp2[53]);
        const tmp28 = displayableBoardWidgets.length > 0 || tmpResult20.useCanConjureCustomWidget("YouScreenUserProfileContent");
        const tmpResult21 = tmp(tmp2[54]);
        const isRecentActivityMobileEnabled = tmpResult21.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
        const tmpResult22 = tmp(tmp2[55]);
        const profileTabIndices = tmpResult22.useProfileTabIndices(tmp28, isRecentActivityMobileEnabled, true);
        ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
        let MAIN = initialTab;
        if (null != initialTab) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          let obj2 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
          MAIN = initialTab;
          if (obj17.getProfileTabSectionIndex(initialTab, obj2) < 0) {
            class Z {
              constructor() {
                trackUserProfileAction({ action: "PRESS_SET_STATUS" });
                const obj = showYouAccountActionSheet;
                const result = obj.showYouAccountActionSheet();
              }
            }
            MAIN = customStatusActivity.MAIN;
          }
        }
        const tmp21Result = tmp21(obj9.useState(0), 2);
        closure_18 = tmp21Result[0];
        closure_19 = tmp21Result[1];
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[14] = tmp34;
        } else {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        if (cResult[15] === initialTab) {
          class Z {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        function _e(section) {
          const obj = { action: "PRESS_SECTION", section };
          trackUserProfileAction(obj);
          if (section !== initialTab) {
            const obj2 = { initialTab: section };
            navigation.setParams(obj2);
          }
        }
        cResult[15] = initialTab;
        cResult[16] = navigation;
        cResult[17] = trackUserProfileAction;
        cResult[18] = _e;
      }
    }
    let obj3 = { theme, primaryColor, secondaryColor };
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj3;
    tmp17 = obj3;
  }
  let obj4 = { user, displayProfile: tmp7 };
  cResult[2] = tmp7;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp14 = obj4;
}) : (function YouScreenUserProfileContent(user) {
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
  closure_21 = undefined;
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
  let tmp3 = navigateToFriends(navigateToPremium[17])();
  let closure_5 = tmp3;
  let tmp4 = user;
  let obj = user(navigateToPremium[43]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[24]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[44])(user.id);
  const displayProfile = tmp6;
  let obj3 = user(navigateToPremium[45]);
  const customStatusActivity = obj3.useCustomStatusActivity();
  let tmp8 = navigateToFriends(navigateToPremium[46])(tmp6);
  let obj4 = user(navigateToPremium[47]);
  let items1 = [trackUserProfileAction];
  const stateFromStores = obj4.useStateFromStores(items1, () => trackUserProfileAction.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[48])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  let tmp11 = null != primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[49]);
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
  let obj7 = user(navigateToPremium[50]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[51]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[47]);
  const items3 = [displayProfile];
  const stateFromStores1 = obj10.useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj11 = user(navigateToPremium[52]);
  const displayableBoardWidgets = obj11.useDisplayableBoardWidgets(user.id);
  const obj12 = user(navigateToPremium[53]);
  const tmp20 = displayableBoardWidgets.length > 0 || obj12.useCanConjureCustomWidget("YouScreenUserProfileContent");
  closure_17 = tmp20;
  let tmp4Result = tmp4(tmp2[54]);
  const isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result8 = tmp4(tmp2[55]);
  const profileTabIndices = tmp4Result8.useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  let MAIN = initialTab;
  if (null != initialTab) {
    MAIN = initialTab;
    const obj13 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    const tmp4Result9 = tmp4(tmp2[55]);
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
  const tmp4Result10 = tmp4(tmp2[55]);
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
    items2 = [, , , , , , , , ];
    const obj3 = { navigateToPremium, style: items };
    items2[0] = map1(YouExpiringTrialOfferCardDefault, obj3);
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    const tmp = syncedClientThemes;
    const tmp2 = View;
    const tmp6 = navigateToPremium;
    if (tmp3Result) {
      const obj4 = { navigateToPremium: tmp6, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(14908), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = enabled && map1(BalanceWidgetMenuDefault, {});
    const obj5 = { user, currentUser: user, style: items };
    enabled && map1(BalanceWidgetMenuDefault, {});
    items2[3] = map1(UserProfileActivityDefault, obj5);
    const obj6 = { userId: user.id, displayProfile };
    items2[4] = map1(UserProfileAboutMeCardDefault, obj6);
    const obj7 = { userId: user.id };
    items2[5] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, obj7);
    const obj8 = { userId: user.id };
    items2[6] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj8);
    const obj9 = { userId: user.id, navigateToFriends };
    items2[7] = map1(UserProfileYourFriendsCardDefault, obj9);
    const obj10 = { userId: user.id };
    items2[8] = map1(UserProfileNoteDefault, obj10);
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
    const tmp = syncedClientThemes;
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
      const obj2 = { id: "board", label: intl2.string(intl5.t.laViwx), page: map1(closure_18, obj3) };
      intl2 = tmp(1125).intl;
      obj3 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj2);
    }
    const tmp11 = isRecentActivityMobileEnabled;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: map1(closure_19, obj5) };
      intl3 = tmp(1125).intl;
      obj5 = { user, containerBackground, containerBorderColor };
      push2(obj4);
    }
    const push3 = items.push;
    const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback5() };
    intl4 = tmp(1125).intl;
    push3(obj6);
    return items;
  }, items9);
  const tmp4Result11 = tmp4(tmp2[67]);
  const measuredTabItems = tmp4Result11.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result12 = tmp4(tmp2[68]);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[23]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result12.useSegmentedControlState(obj14);
  const items10 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items10);
  const items11 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const tmp4Result13 = tmp4(tmp2[43]);
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
  View = tmp(tmp2[73]).View;
  const obj16 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[72]).LayerScope;
  items13 = [enabled(stateFromStores1, obj17), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: tmp11, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items14 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  items13[1] = enabled(tmp(tmp2[69]), obj18);
  let isLoaded;
  const tmp43 = closure_21;
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
  items15 = [enabled(closure_5, obj23), enabled(tmp(tmp2[67]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  items13[3] = c14(closure_5, obj22);
  return enabled(View, obj15);
});
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default tmp3;
