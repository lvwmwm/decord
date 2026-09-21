// Module ID: 17270
// Function ID: 17271
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 2037, 5498, 7862, 8457, 7455, 2042, 11451, 21, 558, 568, 17263, 16710, 1368, 8530, 8515, 13360, 13361, 8943, 13372, 8464, 9975, 11446, 17271, 12097, 2031, 7632, 10626, 580, 1119, 5188, 13292, 17272, 17273, 17259, 1489, 8460, 9626, 8516, 504, 8501, 8512, 13241, 17274, 13194, 13195, 13362, 13382, 13383, 13384, 11395, 17275, 13387, 15998, 13294, 11461, 8882, 13393, 17277, 13347, 13398, 13404, 9868, 11391, 9846, 11407, 12778, 12780, 4497, 7403, 2]

// Module 17270 (YouScreenUserProfileContent)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8515 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8530 */;
import FormDividerDefault from "FormDivider" /* 8882 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8943 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11395 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11461 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13294 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13347 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13360 */;
import VibegrationsCustomWidgetAddOptionDefault from "VibegrationsCustomWidgetAddOption" /* 13361 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13372 */;
import UserProfileConnections from "UserProfileConnections" /* 13393 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13398 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13404 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16710 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 17263 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 17275 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 17277 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5498 */;
import UserProfileStore from "UserProfileStore" /* 7862 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(2037).useIsContentShown;
let UserProfileSections = fn(8457).UserProfileSections;
const UserProfileThemeTypes = fn(7455).UserProfileThemeTypes;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const constants = fn(11451).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const result = require("you/tracking/Tracking").trackYouTabAvatarPress();
      const obj = require("you/tracking/Tracking");
      const result1 = require("showYouAccountActionSheet").showYouAccountActionSheet();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const isAndroidResult = PlatformUtils.isAndroid();
    cResult[1] = isAndroidResult;
    let tmp5 = isAndroidResult;
    const tmpResult = PlatformUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.onPress = first;
    obj2.importantForAccessibility = "no-hide-descendants";
    obj2.accessibilityElementsHidden = tmp5;
    obj2.accessible = !tmp5;
    const tmp8Result = state(UserProfileAvatarDefault, obj2);
    cResult[2] = arg0;
    cResult[3] = tmp8Result;
    let tmp7 = tmp8Result;
    const tmp14 = !tmp5;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : ((arg0) => {
  const callback = noop.useCallback(() => {
    const result = require("you/tracking/Tracking").trackYouTabAvatarPress();
    const obj = require("you/tracking/Tracking");
    const result1 = require("showYouAccountActionSheet").showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const tmp3 = state;
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return tmp3(UserProfileAvatarDefault, obj2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor, borderColor) => {
  const cResult = c.c(6);
  const tmp2 = UserProfileSharedStylesDefault();
  if (cResult[0] === backgroundColor) {
    if (cResult[1] === borderColor) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === tmp2.card) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
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
}) : ((backgroundColor, borderColor) => {
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor, borderColor, borderWidth: 1 }];
  return items;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = c.c(9);
  userId = userId.userId;
  ({ activeSection, containerBackground, containerBorderColor } = userId);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_18(containerBackground, containerBorderColor);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = state(tmp3(13360), {});
    const tmp10 = state(tmp3(13361), {});
    cResult[0] = tmp9;
    cResult[1] = tmp10;
    tmp6 = tmp9;
    tmp7 = tmp10;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === userId) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.profileContent) {
        if (cResult[7] === tmp12) {
          let tmp14 = cResult[8];
        }
        return tmp14;
      }
      const obj2 = { style: tmp4.profileContent, children: null };
      const items = [tmp6, tmp7, tmp12];
      obj2.children = items;
      const tmp17 = closure_1_15(timestampProducer, obj2);
      cResult[6] = tmp4.profileContent;
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = state(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = activeSection === UserProfileSections.WIDGETS;
  cResult[4] = userId;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const tmp = UserProfileSharedStylesDefault();
  const items = [state(UserProfileWidgetsBoardEditNoticeDefault, {}), state(VibegrationsCustomWidgetAddOptionDefault, {}), ];
  const tmp2 = closure_18(containerBackground, containerBorderColor);
  items[2] = state(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: closure_18(containerBackground, containerBorderColor) });
  obj.children = items;
  return closure_1_15(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ user, containerBackground, containerBorderColor } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_18(containerBackground, containerBorderColor);
  if (cResult[0] === tmp4.cards) {
    if (cResult[1] === tmp4.profileContent) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === user) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj2 = { style: tmp6, children: tmp7 };
      const tmp13 = state(timestampProducer, obj2);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { user, currentUser: user, cardStyle: tmp5 };
    const tmp9 = state(UserProfileActivityTabDefault, obj3);
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
}) : ((user) => {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const obj = { style: null, children: null };
  const items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = UserProfileSharedStylesDefault());
  obj.style = items;
  const tmp = UserProfileSharedStylesDefault();
  obj.children = state(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: closure_18(containerBackground, containerBorderColor) });
  return state(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToProfileCustomization) => {
  const cResult = navigateToProfileCustomization(first1[12]).c(38);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  const isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  const tmp5 = trackUserProfileAction(first1[17])();
  const obj = navigateToProfileCustomization(first1[12]);
  trackUserProfileAction = navigateToProfileCustomization(first1[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const obj2 = navigateToProfileCustomization(first1[22]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigateToProfileCustomization(first1[23]).useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "YouScreenUserProfileContent" };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const obj3 = navigateToProfileCustomization(first1[23]);
  const isBadgeManagementEnabled = navigateToProfileCustomization(first1[24]).useIsBadgeManagementEnabled(first);
  const tmp10 = trackUserProfileAction(first1[25])();
  const tmpResult = navigateToProfileCustomization(first1[24]);
  const customTypingIndicatorConfig = navigateToProfileCustomization(first1[26]).useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp12 = useIsContentShown(navigateToProfileCustomization(first1[27]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  if (cResult[1] === entryPoint) {
    if (cResult[2] === tmp12) {
      if (cResult[3] === isBadgeManagementEnabled) {
        if (cResult[4] === canSet) {
          if (cResult[5] === isDisplayNameStylesFlywheelSettersEnabled) {
            if (cResult[6] === isProfileLoaded) {
              if (cResult[7] === tmp10) {
                let tmp13 = cResult[8];
              }
              const tmp24 = _slicedToArray(tmp(tmp2[28]).useSelectedDismissibleContent(tmp13), 2);
              first1 = tmp24[0];
              _slicedToArray = tmp26;
              if (cResult[9] === tmp24[1]) {
                if (cResult[10] === navigateToProfileCustomization) {
                  if (cResult[11] === trackUserProfileAction) {
                    if (cResult[12] === first1) {
                      let tmp27 = cResult[13];
                    }
                    if (cResult[14] !== navigateToProfileCustomization) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      cResult[14] = navigateToProfileCustomization;
                      cResult[15] = Y;
                    } else {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                    }
                    const _Symbol = Symbol;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      const obj5 = { size: "sm", color: tmp4(tmp2[30]).colors.WHITE };
                      const tmp31 = closure_14(tmp(tmp2[29]).PencilIcon, obj5);
                      const intl = tmp(tmp2[31]).intl;
                      cResult[16] = tmp31;
                      cResult[17] = intl.string(tmp(tmp2[31]).t.AAjhgi);
                      class L {
                        constructor() {
                          tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
                          obj = closure_0(closure_2[13]);
                          result = obj.trackYouTabEditProfilePress();
                          tmp3 = closure_0();
                          if (null != closure_2) {
                            tmp4 = closure_3;
                            tmp5 = ContentDismissActionType;
                            tmp6 = closure_3(ContentDismissActionType.TAKE_ACTION);
                          }
                          return;
                        }
                      }
                      const stringResult = intl.string(tmp(tmp2[31]).t.AAjhgi);
                      const tmp29 = tmp31;
                    } else {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      const tmp30 = cResult[17];
                    }
                    if (cResult[18] !== tmp27) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      const obj6 = { ref, variant: "primary", icon: tmp29, text: tmp30, onPress: tmp27, grow: true };
                      const tmp34 = closure_14(tmp(tmp2[32]).Button, obj6);
                      cResult[18] = tmp27;
                      cResult[19] = tmp34;
                    } else {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                    }
                    if (cResult[20] === tmp5.primaryButtons) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      if (cResult[23] === tmp26) {
                        class Y {
                          constructor() {
                            tmp = closure_0(closure_13.BADGES);
                            return;
                          }
                        }
                        const tmp42 = first1 === tmp(tmp2[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
                        if (cResult[26] === tmp26) {
                          class Y {
                            constructor() {
                              tmp = closure_0(closure_13.BADGES);
                              return;
                            }
                          }
                        }
                        const obj7 = { targetRef: ref, visible: tmp42, markAsDismissed: tmp26, onTryItOut: tmp28 };
                        const tmp45 = closure_14(tmp4(tmp2[35]), obj7);
                        cResult[26] = tmp26;
                        class L {
                          constructor() {
                            tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
                            obj = closure_0(closure_2[13]);
                            result = obj.trackYouTabEditProfilePress();
                            tmp3 = closure_0();
                            if (null != closure_2) {
                              tmp4 = closure_3;
                              tmp5 = ContentDismissActionType;
                              tmp6 = closure_3(ContentDismissActionType.TAKE_ACTION);
                            }
                            return;
                          }
                        }
                        cResult[27] = tmp28;
                        cResult[28] = tmp42;
                        cResult[29] = tmp45;
                      }
                      const obj8 = { targetRef: ref, visible: first1 === tmp(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp26 };
                      const tmp41 = closure_14(tmp4(tmp2[34]), obj8);
                      cResult[23] = tmp26;
                      class L {
                        constructor() {
                          tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
                          obj = closure_0(closure_2[13]);
                          result = obj.trackYouTabEditProfilePress();
                          tmp3 = closure_0();
                          if (null != closure_2) {
                            tmp4 = closure_3;
                            tmp5 = ContentDismissActionType;
                            tmp6 = closure_3(ContentDismissActionType.TAKE_ACTION);
                          }
                          return;
                        }
                      }
                      cResult[25] = tmp41;
                      const tmp38 = first1 === tmp(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
                    }
                    const obj9 = { style: tmp5.primaryButtons, secondaryButton: tmp33 };
                    class L {
                      constructor() {
                        tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
                        obj = closure_0(closure_2[13]);
                        result = obj.trackYouTabEditProfilePress();
                        tmp3 = closure_0();
                        if (null != closure_2) {
                          tmp4 = closure_3;
                          tmp5 = ContentDismissActionType;
                          tmp6 = closure_3(ContentDismissActionType.TAKE_ACTION);
                        }
                        return;
                      }
                    }
                    cResult[20] = tmp5.primaryButtons;
                    cResult[21] = tmp33;
                    cResult[22] = tmp37;
                  }
                }
              }
              class L {
                constructor() {
                  tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
                  obj = closure_0(closure_2[13]);
                  result = obj.trackYouTabEditProfilePress();
                  tmp3 = closure_0();
                  if (null != closure_2) {
                    tmp4 = closure_3;
                    tmp5 = ContentDismissActionType;
                    tmp6 = closure_3(ContentDismissActionType.TAKE_ACTION);
                  }
                  return;
                }
              }
              cResult[9] = tmp24[1];
              cResult[10] = navigateToProfileCustomization;
              cResult[11] = trackUserProfileAction;
              cResult[12] = first1;
              cResult[13] = L;
              tmp27 = L;
              const tmpResult4 = tmp(tmp2[28]);
            }
          }
        }
      }
    }
  }
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  const items = [];
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp15(tmp(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp18(tmp(tmp2[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp20 = isProfileLoaded;
  if (isProfileLoaded) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  if (tmp20) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp20 = "profile" === entryPoint;
  }
  if (tmp20) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
  }
  if (tmp20) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp21(tmp(tmp2[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  cResult[1] = entryPoint;
  cResult[2] = tmp12;
  cResult[3] = isBadgeManagementEnabled;
  cResult[4] = canSet;
  cResult[5] = isDisplayNameStylesFlywheelSettersEnabled;
  cResult[6] = isProfileLoaded;
  cResult[7] = tmp10;
  cResult[8] = items;
  tmp13 = items;
}) : ((navigateToProfileCustomization) => {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let trackUserProfileAction;
  let first;
  _slicedToArray = undefined;
  const tmp3 = trackUserProfileAction(first[17])();
  trackUserProfileAction = navigateToProfileCustomization(first[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const obj = navigateToProfileCustomization(first[22]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigateToProfileCustomization(first[23]).useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj3 = navigateToProfileCustomization(first[23]);
  const isBadgeManagementEnabled = navigateToProfileCustomization(first[24]).useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const obj4 = navigateToProfileCustomization(first[24]);
  const tmp8 = trackUserProfileAction(first[25])();
  const customTypingIndicatorConfig = navigateToProfileCustomization(first[26]).useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(navigateToProfileCustomization(first[27]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp11 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp11 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp11) {
    tmp11 = !tmp10;
  }
  const items = [];
  if (tmp11) {
    items.push(tmp4(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp13 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp13 = isBadgeManagementEnabled;
  }
  if (tmp13) {
    tmp13 = tmp8;
  }
  if (tmp13) {
    items.push(tmp4(tmp2[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
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
    items.push(tmp4(tmp2[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const obj5 = navigateToProfileCustomization(first[26]);
  const tmp16 = _slicedToArray(navigateToProfileCustomization(first[28]).useSelectedDismissibleContent(items), 2);
  first = tmp16[0];
  _slicedToArray = tmp18;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp16[1]];
  const items2 = [navigateToProfileCustomization];
  const callback = obj2.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  const obj6 = { children: null };
  const callback1 = obj2.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items2);
  const obj7 = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[28]);
  const obj8 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmpResult = trackUserProfileAction(first[33]);
  obj8.icon = closure_14(navigateToProfileCustomization(first[29]).PencilIcon, { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE });
  const intl = tmp4(tmp2[31]).intl;
  obj8.text = intl.string(navigateToProfileCustomization(first[31]).t.AAjhgi);
  obj8.onPress = callback;
  obj7.secondaryButton = closure_14(navigateToProfileCustomization(first[32]).Button, obj8);
  const items3 = [closure_14(tmpResult, obj7), , , ];
  const obj9 = { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE };
  items3[1] = closure_14(trackUserProfileAction(first[34]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] });
  const obj10 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[2] = closure_14(trackUserProfileAction(first[35]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 });
  const obj11 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 };
  items3[3] = closure_14(trackUserProfileAction(first[36]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] });
  obj6.children = items3;
  return closure_15(closure_16, obj6);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(navigateToPremium[12]).c(190);
  user = user.user;
  ({ style, navigateToProfileCustomization, navigateToFriends } = user);
  navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  const animateAvatar = user.animateAvatar;
  let obj = user(navigateToPremium[12]);
  let tmp4 = navigateToFriends;
  closure_5 = navigateToFriends(navigateToPremium[17])();
  const tmp5 = navigateToFriends(navigateToPremium[17])();
  const navigation = user(navigateToPremium[37]).useNavigation();
  const tmpResult = user(navigateToPremium[37]);
  const trackUserProfileAction = user(navigateToPremium[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp7 = navigateToFriends(navigateToPremium[38])(user.id);
  const displayProfile = tmp7;
  const tmpResult14 = user(navigateToPremium[22]);
  const customStatusActivity = user(navigateToPremium[39]).useCustomStatusActivity();
  navigateToFriends(navigateToPremium[40])(tmp7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [displayProfile];
    const fn = function f() {
      return displayProfile.getStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult15 = user(navigateToPremium[39]);
  const stateFromStores = user(navigateToPremium[41]).useStateFromStores(tmp10, tmp11);
  if (cResult[2] === tmp7) {
    if (cResult[3] === user) {
      let tmp14 = cResult[4];
    }
    ({ theme, primaryColor, secondaryColor } = tmp4(tmp2[42])(tmp14));
    const hasCustomProfileTheme = null != primaryColor;
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        if (cResult[7] === theme) {
          let tmp17 = cResult[8];
        }
        const userProfileColors = tmp(tmp2[43]).useUserProfileColors(tmp17);
        const containerBackground = userProfileColors.containerBackground;
        const containerBorderColor = userProfileColors.containerBorderColor;
        ({ avatarBackground, statusBackground } = userProfileColors);
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
        const tmpResult17 = tmp(tmp2[43]);
        const enabled = tmp(tmp2[44]).useVirtualCurrencyMobileEnabled().enabled;
        const tmp21 = navigateToShop;
        const tmpResult18 = tmp(tmp2[44]);
        [r10109, closure_14] = navigateToShop(initialTab.useState(null), 2);
        const tmp22 = navigateToShop(initialTab.useState(null), 2);
        const shouldShowExpiringTrialOfferCard = tmp(tmp2[45]).useShouldShowExpiringTrialOfferCard();
        const _Symbol = Symbol;
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
          cResult[11] = items1;
          const tmp24 = items1;
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
          cResult[13] = tmp26;
          const tmp25 = tmp26;
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
        const tmpResult19 = tmp(tmp2[45]);
        const stateFromStores1 = tmp(tmp2[41]).useStateFromStores(tmp24, tmp25);
        const tmpResult20 = tmp(tmp2[41]);
        const displayableBoardWidgets = tmp(tmp2[46]).useDisplayableBoardWidgets(user.id);
        const tmpResult21 = tmp(tmp2[46]);
        const isMobileGameCollectionExperimentEnabled = tmp(tmp2[47]).useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
        const tmpResult22 = tmp(tmp2[47]);
        const tmp29 = displayableBoardWidgets.length > 0 || tmp(tmp2[48]).useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
        const tmpResult23 = tmp(tmp2[48]);
        const isRecentActivityMobileEnabled = tmp(tmp2[49]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
        const tmpResult24 = tmp(tmp2[49]);
        const profileTabIndices = tmp(tmp2[50]).useProfileTabIndices(tmp29, isRecentActivityMobileEnabled, true);
        const boardTabIndex = profileTabIndices.boardTabIndex;
        const activityTabIndex = profileTabIndices.activityTabIndex;
        const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        const tmp21Result = tmp21(initialTab.useState(0), 2);
        closure_20 = tmp21Result[0];
        closure_21 = tmp21Result[1];
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
          cResult[14] = tmp35;
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
        const tmpResult25 = tmp(tmp2[50]);
        const pageHeights1 = tmp(tmp2[51]).usePageHeights();
        const handlePageContentSize = pageHeights1.handlePageContentSize;
        const pageHeights = pageHeights1.pageHeights;
        if (cResult[15] !== trackUserProfileAction) {
          class Ae {
            constructor(arg0) {
              obj = { action: "PRESS_SECTION", section: user };
              tmp = trackUserProfileAction(obj);
              return;
            }
          }
          cResult[15] = trackUserProfileAction;
          cResult[16] = Ae;
        } else {
          class Ae {
            constructor(arg0) {
              obj = { action: "PRESS_SECTION", section: user };
              tmp = trackUserProfileAction(obj);
              return;
            }
          }
        }
        if (cResult[17] === activityTabIndex) {
          class Ae {
            constructor(arg0) {
              obj = { action: "PRESS_SECTION", section: user };
              tmp = trackUserProfileAction(obj);
              return;
            }
          }
        }
        let obj2 = { initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: tmp37 };
        cResult[17] = activityTabIndex;
        cResult[18] = boardTabIndex;
        cResult[19] = initialTab;
        cResult[20] = tmp37;
        cResult[21] = wishlistTabIndex;
        cResult[22] = obj2;
        const tmpResult26 = tmp(tmp2[51]);
      }
    }
    let obj3 = { theme, primaryColor, secondaryColor };
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj3;
    tmp17 = obj3;
    let tmp15 = tmp4(tmp2[42])(tmp14);
  }
  let obj4 = { user, displayProfile: tmp7 };
  cResult[2] = tmp7;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp14 = obj4;
}) : ((user) => {
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
  let callback4;
  let callback5;
  let segmentedControlState;
  closure_33 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[17])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[37]).useNavigation();
  let obj = user(navigateToPremium[37]);
  const trackUserProfileAction = user(navigateToPremium[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[38])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[22]);
  const customStatusActivity = user(navigateToPremium[39]).useCustomStatusActivity();
  let obj3 = user(navigateToPremium[39]);
  let tmp8 = navigateToFriends(navigateToPremium[40])(tmp6);
  let items = [displayProfile];
  const stateFromStores = user(navigateToPremium[41]).useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[42])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[41]);
  const userProfileColors = user(navigateToPremium[43]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[43]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[44]).useVirtualCurrencyMobileEnabled().enabled;
  let obj7 = user(navigateToPremium[44]);
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[45]).useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[45]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = user(navigateToPremium[41]).useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[41]);
  const displayableBoardWidgets = user(navigateToPremium[46]).useDisplayableBoardWidgets(user.id);
  const obj11 = user(navigateToPremium[46]);
  const isMobileGameCollectionExperimentEnabled = user(navigateToPremium[47]).useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
  const obj12 = user(navigateToPremium[47]);
  const tmp21 = displayableBoardWidgets.length > 0 || user(navigateToPremium[48]).useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
  closure_17 = tmp21;
  const obj13 = user(navigateToPremium[48]);
  const isRecentActivityMobileEnabled = user(navigateToPremium[49]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let tmp4Result = user(navigateToPremium[49]);
  const profileTabIndices = user(navigateToPremium[50]).useProfileTabIndices(tmp21, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp15Result = tmp15(initialTab.useState(0), 2);
  const pageWidth = tmp15Result[0];
  closure_23 = tmp15Result[1];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_23(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result9 = user(navigateToPremium[50]);
  const pageHeights = user(navigateToPremium[51]).usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = obj6.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const tmp4Result10 = user(navigateToPremium[51]);
  const profileSectionTabs = user(navigateToPremium[50]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp30;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
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
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    const items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [state(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(13387), obj4);
    }
    items2[1] = tmp3Result;
    let tmp3Result2 = enabled;
    if (enabled) {
      tmp3Result2 = tmp3(tmp4(15998), {});
    }
    items2[2] = tmp3Result2;
    items2[3] = state(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = state(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = state(FormDividerDefault, {});
    items2[6] = state(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = state(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = state(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends });
    items2[9] = state(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return closure_2_15(timestampProducer, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = state(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = state;
    } else {
      tmp4 = state;
      const obj2 = { wishlistId: tmp3, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj2.containerWidth = tmp8;
      obj2.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj3.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj3);
    obj.children = items;
    return closure_2_15(timestampProducer, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp21, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = state(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_17) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = tmp(1119).intl;
      obj3.label = intl2.string(tmp(1119).t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj4.children = tmp3(closure_19, obj5);
      obj3.page = tmp3(tmp4, obj4, boardTabIndex);
      items.push(obj3);
    }
    if (isRecentActivityMobileEnabled) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = tmp(1119).intl;
      obj6.label = intl3.string(tmp(1119).t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj8 = { user, containerBackground, containerBorderColor };
      obj7.children = tmp3(closure_20, obj8);
      obj6.page = tmp3(tmp4, obj7, activityTabIndex);
      items.push(obj6);
    }
    const obj9 = { id: "wishlist", label: null, page: null };
    const intl4 = tmp(1119).intl;
    obj9.label = intl4.string(util.t["7lZ31J"]);
    const obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj9.page = state(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj9);
    return items;
  }, items8);
  const tmp4Result11 = user(navigateToPremium[50]);
  const tmp4Result12 = user(navigateToPremium[64]);
  segmentedControlState = tmp4Result12.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[30]).space.PX_24, items: memo, onPageChange: handleTabChange });
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[30]).space.PX_24, items: memo, onPageChange: handleTabChange };
  const pagerFillHeight = user(navigateToPremium[51]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result13 = user(navigateToPremium[51]);
  const pagesHeightStyle = user(navigateToPremium[51]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_33 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result14 = user(navigateToPremium[51]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[37]).useFocusEffect(obj6.useCallback(() => {
    if (undefined !== initialTab) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
        ref.current(num, false, true);
        navigation.setParams({ initialTab: "emoji" });
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
          obj.setParams(obj2);
        }
      }
    };
  }, items11));
  const obj15 = { style, children: null };
  const obj16 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj16.style = items12;
  const items13 = [c14(closure_17, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj18.style = items14;
  items13[1] = c14(navigateToFriends(navigateToPremium[65]), obj18);
  const obj19 = { style: null, children: null };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj19.style = items15;
  const obj20 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true, canOpenBadgeDirectory: true };
  let pronouns;
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp4Result15 = user(navigateToPremium[37]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj20.pronouns = pronouns;
  obj20.badges = tmp8;
  obj20.badgeContainerBackground = containerBackground;
  obj20.onPressDisplayName = callback;
  let intl = tmp4(tmp2[31]).intl;
  const obj21 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[67]);
  obj21.status = user(navigateToPremium[66]).getStatusLabel(stateFromStores);
  const tmp4Result16 = user(navigateToPremium[66]);
  let intl2 = tmp4(tmp2[31]).intl;
  obj20.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[31]).t["er+FRD"], obj21) + ", " + intl2.string(user(navigateToPremium[31]).t.C6COaT);
  obj20.themeType = containerBackground.YOU_SCREEN;
  const items16 = [c14(tmpResult, obj20), c14(wishlistTabIndex, { navigateToProfileCustomization, isProfileLoaded: null != tmp6 })];
  obj19.children = items16;
  items13[2] = shouldShowExpiringTrialOfferCard(navigation, obj19);
  const obj23 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj24 = { style: tmp3.profileTablist, children: null };
  const obj25 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "overlay";
  }
  const obj26 = { children: null };
  obj25.variant = str;
  obj24.children = c14(user(navigateToPremium[68]).Tabs, obj25);
  const items17 = [c14(navigation, obj24), ];
  const formatToPlainStringResult = intl.formatToPlainString(user(navigateToPremium[31]).t["er+FRD"], obj21);
  const obj22 = { navigateToProfileCustomization, isProfileLoaded: null != tmp6 };
  items17[1] = c14(navigateToFriends(navigateToPremium[70]).View, { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(user(navigateToPremium[69]).SegmentedControlPages, { state: segmentedControlState }) });
  obj23.children = items17;
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj23);
  obj16.children = items13;
  obj26.children = shouldShowExpiringTrialOfferCard(navigation, obj16);
  obj15.children = c14(user(navigateToPremium[71]).LayerScope, obj26);
  return c14(navigateToFriends(navigateToPremium[70]).View, obj15);
});
