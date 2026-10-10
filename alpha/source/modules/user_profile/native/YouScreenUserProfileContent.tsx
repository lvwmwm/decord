// Module ID: 17495
// Function ID: 17496
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 2057, 5759, 7320, 8307, 6904, 2062, 14816, 21, 558, 576, 9166, 16805, 1382, 8381, 8367, 13209, 13210, 13227, 13356, 4818, 587, 8314, 2049, 9723, 6153, 1126, 5379, 13110, 17496, 17501, 17492, 14847, 10571, 17502, 13184, 11639, 7099, 13187, 10531, 13188, 1504, 8310, 10512, 8368, 504, 8353, 8364, 13038, 17503, 13354, 13211, 13366, 13367, 13368, 10519, 17504, 13371, 16046, 13112, 10612, 8583, 13374, 17506, 13171, 13379, 13384, 8529, 10513, 8650, 12357, 10600, 4850, 6845, 2]

// Module 17495 (YouScreenUserProfileContent)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2057 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import Constants from "Constants" /* 6904 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7099 */;
import Constants2 from "Constants" /* 8307 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8367 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8381 */;
import FormDividerDefault from "FormDivider" /* 8583 */;
import tracking_Tracking from "tracking/Tracking" /* 9166 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 10519 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10531 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10571 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10612 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11639 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13112 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13171 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 13184 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 13187 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13209 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 13210 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 13227 */;
import UserProfileConnections from "UserProfileConnections" /* 13374 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13379 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13384 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 14816 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14847 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 16046 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16805 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 17502 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 17504 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 17506 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelfPresenceStore_mod from "SelfPresenceStore" /* 5759 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation, obj1, setParamsResult;

let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
let tmp;
let tmp3;
const PlatformUtils = tmp(1382);
const UserProfileActivityTabDefault = tmp3(13356);
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
let SelfPresenceStore = SelfPresenceStore_mod;
let UserProfileSections = Constants2.UserProfileSections;
let UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_13 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouAvatar(arg0) {
  let first;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
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
    const tmp8Result = syncedClientThemes(tmp10, obj2);
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
  return syncedClientThemes(tmp4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouScreenCardStyle(backgroundColor, borderColor) {
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
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenWidgetsBoardContainer(userId) {
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
  const tmp5 = closure_18(containerBackground, containerBorderColor);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = syncedClientThemes(UserProfileWidgetsBoardEditNoticeDefault, {});
    const tmp10 = syncedClientThemes(ConjureCustomWidgetAddOptionDefault, {});
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
      const tmp17 = authStore3(metroRequire, obj2);
      cResult[6] = tmp4.profileContent;
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = syncedClientThemes(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp5 });
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
  const tmp2 = closure_18(containerBackground, containerBorderColor);
  items[0] = syncedClientThemes(UserProfileWidgetsBoardEditNoticeDefault, {});
  items[1] = syncedClientThemes(ConjureCustomWidgetAddOptionDefault, {});
  const obj2 = { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp2 };
  items[2] = syncedClientThemes(UserProfileWidgetsBoardDefault, obj2);
  return authStore3(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenActivityTabContainer(arg0) {
  let containerBackground;
  let containerBorderColor;
  let user;
  const obj = react2;
  const cResult = obj.c(9);
  ({ user, containerBackground, containerBorderColor } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_18(containerBackground, containerBorderColor);
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
      const tmp13 = syncedClientThemes(metroRequire, obj2);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { user, currentUser: user, cardStyle: tmp5 };
    const tmp9 = syncedClientThemes(UserProfileActivityTabDefault, obj3);
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
  const obj = { style: items, children: syncedClientThemes(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: tmp2 }) };
  items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = UserProfileSharedStylesDefault());
  UserProfileSharedStylesDefault();
  tmp2 = closure_18(containerBackground, containerBorderColor);
  return syncedClientThemes(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditSection(navigateToProfileCustomization) {
  let closure_4;
  let intl2;
  let isProfileLoaded;
  let items;
  let markAsDismissed;
  let trackUserProfileAction;
  let visibleContent;
  let obj = navigateToProfileCustomization(trackUserProfileAction[12]);
  const cResult = obj.c(37);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let tmp4 = markAsDismissed;
  const tmp5 = markAsDismissed(trackUserProfileAction[17])();
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[22]);
  const token = obj2.useToken(markAsDismissed(trackUserProfileAction[23]).colors.WHITE);
  const obj3 = navigateToProfileCustomization(trackUserProfileAction[24]);
  trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  let closure_3 = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  react = tmp9;
  const tmp10 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  let closure_5 = tmp10;
  if (cResult[0] === markAsDismissed) {
    if (cResult[1] === navigateToProfileCustomization) {
      if (cResult[2] === tmp9) {
        if (cResult[3] === tmp10) {
          if (cResult[4] === tmp8) {
            let tmp11;
            let tmp12;
            let tmp15Result;
            if (cResult[5] === trackUserProfileAction) {
              tmp11 = cResult[6];
            }
            if (cResult[7] !== navigateToProfileCustomization) {
              const fn2 = function _() {
                navigateToProfileCustomization(constants.BADGES);
              };
              cResult[7] = navigateToProfileCustomization;
              cResult[8] = fn2;
              tmp12 = fn2;
            } else {
              tmp12 = cResult[8];
            }
            if (cResult[9] === token) {
              let tmp14;
              let tmp18;
              let tmp20;
              if (cResult[10] === isProfileLoaded) {
                tmp14 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[28]).intl;
                const stringResult = intl.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.AAjhgi);
                cResult[12] = stringResult;
                tmp18 = stringResult;
              } else {
                tmp18 = cResult[12];
              }
              if (cResult[13] !== isProfileLoaded) {
                let tmp21;
                if (!isProfileLoaded) {
                  const obj4 = { text: intl2.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.ZTNur7) };
                  intl2 = tmp(tmp2[28]).intl;
                  tmp21 = obj4;
                }
                cResult[13] = isProfileLoaded;
                cResult[14] = tmp21;
                tmp20 = tmp21;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp11) {
                if (cResult[16] === tmp14) {
                  let tmp22;
                  if (cResult[17] === tmp20) {
                    tmp22 = cResult[18];
                  }
                  if (cResult[19] === tmp5.primaryButtons) {
                    let tmp25;
                    if (cResult[20] === tmp22) {
                      tmp25 = cResult[21];
                    }
                    if (cResult[22] === markAsDismissed) {
                      let tmp28;
                      if (cResult[23] === tmp8) {
                        tmp28 = cResult[24];
                      }
                      if (cResult[25] === markAsDismissed) {
                        if (cResult[26] === tmp12) {
                          let tmp31;
                          if (cResult[27] === tmp9) {
                            tmp31 = cResult[28];
                          }
                          if (cResult[29] === markAsDismissed) {
                            let tmp34;
                            if (cResult[30] === tmp10) {
                              tmp34 = cResult[31];
                            }
                            if (cResult[32] === tmp31) {
                              if (cResult[33] === tmp34) {
                                if (cResult[34] === tmp25) {
                                  let tmp37;
                                  if (cResult[35] === tmp28) {
                                    tmp37 = cResult[36];
                                  }
                                  return tmp37;
                                }
                              }
                            }
                            const obj5 = { children: items };
                            items = [tmp25, tmp28, tmp31, tmp34];
                            const tmp40 = closure_15(closure_16, obj5);
                            cResult[32] = tmp31;
                            cResult[33] = tmp34;
                            cResult[34] = tmp25;
                            cResult[35] = tmp28;
                            cResult[36] = tmp40;
                            tmp37 = tmp40;
                          }
                          const obj6 = { targetRef: ref, visible: tmp10, markAsDismissed };
                          const tmp36 = closure_14(tmp4(trackUserProfileAction[33]), obj6);
                          cResult[29] = markAsDismissed;
                          cResult[30] = tmp10;
                          cResult[31] = tmp36;
                          tmp34 = tmp36;
                        }
                      }
                      const obj7 = { targetRef: ref, visible: tmp9, markAsDismissed, onTryItOut: tmp12 };
                      const tmp33 = closure_14(tmp4(trackUserProfileAction[32]), obj7);
                      cResult[25] = markAsDismissed;
                      cResult[26] = tmp12;
                      cResult[27] = tmp9;
                      cResult[28] = tmp33;
                      tmp31 = tmp33;
                    }
                    const obj8 = { targetRef: ref, visible: tmp8, markAsDismissed };
                    const tmp30 = closure_14(tmp4(trackUserProfileAction[31]), obj8);
                    cResult[22] = markAsDismissed;
                    cResult[23] = tmp8;
                    cResult[24] = tmp30;
                    tmp28 = tmp30;
                  }
                  const obj9 = { style: tmp13, secondaryButton: tmp22 };
                  const tmp27 = closure_14(tmp4(trackUserProfileAction[30]), obj9);
                  cResult[19] = tmp5.primaryButtons;
                  cResult[20] = tmp22;
                  cResult[21] = tmp27;
                  tmp25 = tmp27;
                }
              }
              const obj10 = { ref, variant: "primary", icon: tmp14, text: tmp18, onPress: tmp11, accessibilityValue: tmp20, grow: true };
              const tmp24 = closure_14(navigateToProfileCustomization(trackUserProfileAction[29]).Button, obj10);
              cResult[15] = tmp11;
              cResult[16] = tmp14;
              cResult[17] = tmp20;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            if (isProfileLoaded) {
              const obj11 = { size: "sm", color: token };
              tmp15Result = tmp15(tmp(tmp2[26]).PencilIcon, obj11);
            } else {
              const obj12 = { size: "small", color: token, accessible: false };
              tmp15Result = tmp15(tmp(tmp2[27]).ActivityIndicator, obj12);
            }
            cResult[9] = token;
            cResult[10] = isProfileLoaded;
            cResult[11] = tmp15Result;
            tmp14 = tmp15Result;
          }
        }
      }
    }
  }
  const fn = function o() {
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
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = tmp8;
  cResult[5] = trackUserProfileAction;
  cResult[6] = fn;
  tmp11 = fn;
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
  const obj3 = { style: tmp3.primaryButtons, secondaryButton: closure_14(Button, obj4) };
  obj4 = { ref, variant: "primary", icon: tmp14Result, text: intl.string(tmp4(trackUserProfileAction[28]).t.AAjhgi), onPress: callback, accessibilityValue: tmp17, grow: true };
  const tmp15 = markAsDismissed(trackUserProfileAction[30]);
  Button = navigateToProfileCustomization(trackUserProfileAction[29]).Button;
  const tmp12 = closure_15;
  const tmp13 = closure_16;
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
  items2 = [closure_14(tmp15, obj3), closure_14(tmp(trackUserProfileAction[31]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_14(tmp(trackUserProfileAction[32]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_14(tmp(trackUserProfileAction[33]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  return tmp12(tmp13, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenPrimaryInfoSection(arg0) {
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
                                      const tmp49 = authStore3(metroRequire, obj5);
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
                                const tmp45 = syncedClientThemes(closure_21, obj6);
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
                          tmp40 = syncedClientThemes(tmp4(13188), obj7);
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
                    const tmp37 = syncedClientThemes(tmp4Result, obj8);
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
  items2 = [syncedClientThemes(tmpResult, obj6), , ];
  let tmp27Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  const tmp25 = authStore3;
  const tmp26 = metroRequire;
  if (tmp27Result) {
    const obj7 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp23, markAsDismissed: tmp22 };
    tmp27Result = tmp27(tmp(13188), obj7);
  }
  items2[1] = tmp27Result;
  items2[2] = syncedClientThemes(closure_21, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp21, markAsDismissed: tmp22 });
  return tmp25(tmp26, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenUserProfileContent(user) {
  let avatarBackground;
  let backgroundColor;
  let closure_14;
  let displayProfile;
  let hasCustomProfileTheme;
  let isVisible;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let statusBackground;
  let style;
  let tmp11;
  let tmp12;
  let tmp = user;
  let tmp2 = navigateToPremium;
  let obj = user(navigateToPremium[12]);
  const cResult = obj.c(182);
  user = user.user;
  ({ style, navigateToProfileCustomization, navigateToFriends } = user);
  navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  const animateAvatar = user.animateAvatar;
  let tmp4 = undefined === animateAvatar || animateAvatar;
  let tmp6 = navigateToFriends(tmp2[17])();
  let closure_5 = tmp6;
  const tmpResult = tmp(tmp2[43]);
  navigation = tmpResult.useNavigation();
  const tmpResult13 = tmp(tmp2[24]);
  const trackUserProfileAction = tmpResult13.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp8 = navigateToFriends(tmp2[44])(user.id);
  SelfPresenceStore = tmp8;
  const tmpResult14 = tmp(tmp2[45]);
  const customStatusActivity = tmpResult14.useCustomStatusActivity();
  const tmp10 = navigateToFriends(tmp2[46])(tmp8);
  const tmp5 = navigateToFriends;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    class S {
      constructor() {
        return closure_8.getStatus();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp11 = items;
    tmp12 = S;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult15 = tmp(tmp2[47]);
  const stateFromStores = tmpResult15.useStateFromStores(tmp11, tmp12);
  if (cResult[2] === tmp8) {
    let tmp15;
    if (cResult[3] === user) {
      tmp15 = cResult[4];
    }
    const tmp16 = tmp5(tmp2[48])(tmp15);
    const theme = tmp16.theme;
    class S {
      constructor() {
        return closure_8.getStatus();
      }
    }
    const secondaryColor = tmp16.secondaryColor;
    UserProfileSections = null != tmp17;
    if (cResult[5] === tmp17) {
      if (cResult[6] === secondaryColor) {
        let tmp19;
        let tmp27;
        let tmp28;
        if (cResult[7] === theme) {
          tmp19 = cResult[8];
        }
        const tmpResult16 = tmp(tmp2[49]);
        const userProfileColors = tmpResult16.useUserProfileColors(tmp19);
        class S {
          constructor() {
            return closure_8.getStatus();
          }
        }
        UserProfileThemeTypes = tmp21;
        const containerBorderColor = userProfileColors.containerBorderColor;
        ({ avatarBackground, statusBackground } = userProfileColors);
        let obj9 = initialTab;
        initialTab.useRef(null);
        if (cResult[9] !== trackUserProfileAction) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[9] = trackUserProfileAction;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[10] = Z;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult17 = tmp(tmp2[50]);
        const enabled = tmpResult17.useVirtualCurrencyMobileEnabled().enabled;
        [r10110, closure_14] = navigateToShop(obj9.useState(null), 2);
        navigateToShop(obj9.useState(null), 2);
        const tmpResult18 = tmp(tmp2[51]);
        const shouldShowExpiringTrialOfferCard = tmpResult18.useShouldShowExpiringTrialOfferCard();
        const _Symbol = Symbol;
        const tmp24 = navigateToShop;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          let items1 = [customStatusActivity];
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[11] = items1;
          tmp27 = items1;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        if (cResult[12] !== user.id) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[12] = user.id;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[13] = tmp29;
          tmp28 = tmp29;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult19 = tmp(tmp2[47]);
        const stateFromStores1 = tmpResult19.useStateFromStores(tmp27, tmp28);
        const tmpResult20 = tmp(tmp2[52]);
        const displayableBoardWidgets = tmpResult20.useDisplayableBoardWidgets(user.id);
        const tmpResult21 = tmp(tmp2[53]);
        const tmp31 = displayableBoardWidgets.length > 0 || tmpResult21.useCanConjureCustomWidget("YouScreenUserProfileContent");
        const tmpResult22 = tmp(tmp2[54]);
        const isRecentActivityMobileEnabled = tmpResult22.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
        const tmpResult23 = tmp(tmp2[55]);
        const profileTabIndices = tmpResult23.useProfileTabIndices(tmp31, isRecentActivityMobileEnabled, true);
        const boardTabIndex = profileTabIndices.boardTabIndex;
        const activityTabIndex = profileTabIndices.activityTabIndex;
        const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        let MAIN = initialTab;
        if (null != initialTab) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          let obj2 = { wishlistTabIndex, boardTabIndex: null, activityTabIndex };
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          MAIN = initialTab;
          if (obj17.getProfileTabSectionIndex(initialTab, obj2) < 0) {
            class Z {
              constructor() {
                tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
                obj = closure_0(closure_2[14]);
                result = obj.showYouAccountActionSheet();
                return;
              }
            }
            MAIN = UserProfileSections.MAIN;
          }
        }
        const tmp24Result = tmp24(obj9.useState(0), 2);
        closure_21 = tmp24Result[0];
        closure_22 = tmp24Result[1];
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[14] = tmp36;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult24 = tmp(tmp2[56]);
        const pageHeights = tmpResult24.usePageHeights();
        const handlePageContentSize = pageHeights.handlePageContentSize;
        if (cResult[15] === initialTab) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        class Ae {
          constructor(arg0) {
            obj = { action: "PRESS_SECTION", section: user };
            tmp = trackUserProfileAction(obj);
            if (user !== initialTab) {
              tmp2 = closure_6;
              obj1 = { initialTab: null };
              obj1.initialTab = user;
              setParamsResult = closure_6.setParams(obj1);
            }
            return;
          }
        }
        cResult[15] = initialTab;
        cResult[16] = navigation;
        cResult[17] = trackUserProfileAction;
        cResult[18] = Ae;
      }
    }
    let obj3 = { theme, primaryColor: tmp17, secondaryColor };
    cResult[5] = tmp17;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj3;
    tmp19 = obj3;
  }
  let obj4 = { user, displayProfile: tmp8 };
  cResult[2] = tmp8;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp15 = obj4;
}) : (function YouScreenUserProfileContent(user) {
  let LayerScope;
  let Tabs;
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let fillHeight;
  let formatToPlainStringResult;
  let handleTabChange;
  let hasCustomProfileTheme;
  let intl2;
  let items11;
  let items12;
  let items13;
  let items14;
  let measureFill;
  let navigateToProfileCustomization;
  let obj20;
  let obj24;
  let obj25;
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
  let tmp4Result18;
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
  let pageWidth;
  let closure_24;
  let handlePageContentSize;
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
  const tmp3 = navigateToFriends(navigateToPremium[17])();
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
  let items = [displayProfile];
  const stateFromStores = obj4.useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[48])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[49]);
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
  let obj7 = user(navigateToPremium[50]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[51]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[47]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = obj10.useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj11 = user(navigateToPremium[52]);
  const displayableBoardWidgets = obj11.useDisplayableBoardWidgets(user.id);
  const obj12 = user(navigateToPremium[53]);
  const tmp20 = displayableBoardWidgets.length > 0 || obj12.useCanConjureCustomWidget("YouScreenUserProfileContent");
  closure_17 = tmp20;
  let tmp4Result = tmp4(tmp2[54]);
  const isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result10 = tmp4(tmp2[55]);
  const profileTabIndices = tmp4Result10.useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  let MAIN = initialTab;
  if (null != initialTab) {
    MAIN = initialTab;
    const obj13 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    const tmp4Result11 = tmp4(tmp2[55]);
    if (tmp4Result11.getProfileTabSectionIndex(initialTab, obj13) < 0) {
      MAIN = UserProfileSections.MAIN;
    }
  }
  const tmp15Result = tmp15(obj6.useState(0), 2);
  pageWidth = tmp15Result[0];
  closure_24 = tmp15Result[1];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_24(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result12 = tmp4(tmp2[56]);
  const pageHeights1 = tmp4Result12.usePageHeights();
  handlePageContentSize = pageHeights1.handlePageContentSize;
  const items3 = [trackUserProfileAction, navigation, initialTab];
  const pageHeights = pageHeights1.pageHeights;
  const callback2 = obj6.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
  }, items3);
  const tmp4Result13 = tmp4(tmp2[55]);
  const profileSectionTabs = tmp4Result13.useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp30;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = obj6.useCallback(() => {
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
    items2[0] = syncedClientThemes(YouExpiringTrialOfferCardDefault, obj3);
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    const tmp = authStore3;
    const tmp2 = metroRequire;
    const tmp6 = navigateToPremium;
    if (tmp3Result) {
      const obj4 = { navigateToPremium: tmp6, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(13371), obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = enabled && syncedClientThemes(BalanceWidgetMenuDefault, {});
    const obj5 = { user, currentUser: user, style: items };
    enabled && syncedClientThemes(BalanceWidgetMenuDefault, {});
    items2[3] = syncedClientThemes(UserProfileActivityDefault, obj5);
    const obj6 = { userId: user.id, displayProfile };
    items2[4] = syncedClientThemes(UserProfileAboutMeCardDefault, obj6);
    items2[5] = syncedClientThemes(FormDividerDefault, {});
    const obj7 = { userId: user.id };
    items2[6] = syncedClientThemes(UserProfileConnections.UserProfileAccountConnectionsCard, obj7);
    const obj8 = { userId: user.id };
    items2[7] = syncedClientThemes(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj8);
    const obj9 = { userId: user.id, navigateToFriends };
    items2[8] = syncedClientThemes(UserProfileYourFriendsCardDefault, obj9);
    const obj10 = { userId: user.id };
    items2[9] = syncedClientThemes(UserProfileNoteDefault, obj10);
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
    const tmp = authStore3;
    const tmp2 = metroRequire;
    if (null == stateFromStores1) {
      tmp4Result = syncedClientThemes(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp4 = syncedClientThemes;
    } else {
      tmp4 = syncedClientThemes;
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
  const items8 = [callback4, callback5, handlePageContentSize, tmp20, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
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
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: syncedClientThemes(hasOwnProperty, obj2) };
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
      const obj3 = { id: "board", label: intl2.string(intl5.t.laViwx), page: syncedClientThemes(hasOwnProperty, obj4, boardTabIndex) };
      intl2 = tmp(1126).intl;
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: syncedClientThemes(closure_19, obj5)
      };
      obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj3);
    }
    const tmp13 = isRecentActivityMobileEnabled;
    if (tmp13) {
      const push2 = items.push;
      const obj6 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: syncedClientThemes(hasOwnProperty, obj7, activityTabIndex) };
      intl3 = tmp(1126).intl;
      obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: syncedClientThemes(closure_20, obj8)
      };
      obj8 = { user, containerBackground, containerBorderColor };
      push2(obj6);
    }
    const push3 = items.push;
    const obj9 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: syncedClientThemes(hasOwnProperty, obj10, wishlistTabIndex) };
    intl4 = tmp(1126).intl;
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
  const tmp4Result14 = tmp4(tmp2[69]);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[23]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result14.useSegmentedControlState(obj14);
  const tmp4Result15 = tmp4(tmp2[56]);
  const pagerFillHeight = tmp4Result15.usePagerFillHeight(scrollPosition);
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result16 = tmp4(tmp2[56]);
  const pagesHeightStyle = tmp4Result16.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
  const items10 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const tmp4Result17 = tmp4(tmp2[43]);
  const focusEffect = tmp4Result17.useFocusEffect(obj6.useCallback(() => {
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
  }, items10));
  const obj15 = { style, children: c14(LayerScope, obj25) };
  const View = tmp(tmp2[74]).View;
  const obj16 = { style: items11, children: items12 };
  items11 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[75]).LayerScope;
  items12 = [c14(closure_17, obj17), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: items13, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  items13 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  items12[1] = c14(tmp(tmp2[70]), obj18);
  let isLoaded;
  const tmp45 = MAIN;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj19 = { isProfileLoaded: true === isLoaded, navigateToProfileCustomization, primaryInfoProps: obj20 };
  obj20 = { user, pronouns, badges: tmp8, badgeContainerBackground: containerBackground, onPressDisplayName: callback, displayNameAccessibilityHint: "" + formatToPlainStringResult + ", " + intl2.string(tmp4(tmp2[28]).t.C6COaT), themeType: containerBackground.YOU_SCREEN, showChevron: true, canOpenBadgeDirectory: true };
  pronouns = undefined;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[28]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj21 = { status: tmp4Result18.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[28]).t["er+FRD"];
  tmp4Result18 = tmp4(tmp2[71]);
  formatToPlainStringResult = formatToPlainString(prop, obj21);
  intl2 = tmp4(tmp2[28]).intl;
  items12[2] = c14(tmp45, obj19);
  const obj22 = { style: { flex: 1 }, onLayout: callback1, children: items14 };
  const obj23 = { style: tmp3.profileTablist, children: c14(Tabs, obj24) };
  obj24 = { state: segmentedControlState, variant: str };
  str = undefined;
  Tabs = tmp4(tmp2[72]).Tabs;
  if (null != primaryColor) {
    str = "overlay";
  }
  obj25 = { zIndex: 1, children: shouldShowExpiringTrialOfferCard(navigation, obj16) };
  items14 = [c14(navigation, obj23), ];
  const obj26 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(tmp4(tmp2[73]).SegmentedControlPages, { state: segmentedControlState }) };
  const View2 = tmp(tmp2[74]).View;
  items14[1] = c14(View2, obj26);
  items12[3] = shouldShowExpiringTrialOfferCard(navigation, obj22);
  return c14(View, obj15);
});
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default tmp4;
