// Module ID: 16621
// Function ID: 16622
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 2041, 5592, 7039, 7632, 6630, 2048, 10647, 21, 558, 576, 16609, 16007, 1370, 7706, 7691, 12640, 12641, 8124, 12652, 7639, 9166, 10642, 16622, 11325, 2035, 6807, 9829, 588, 1127, 5282, 12572, 16623, 16626, 16618, 1492, 7635, 8814, 7692, 504, 7677, 7688, 12503, 16627, 12456, 12457, 12642, 12662, 12663, 12664, 10591, 16628, 12667, 15285, 12574, 10741, 8063, 12673, 16630, 12627, 12678, 12683, 9060, 10587, 9038, 10603, 12021, 12023, 4570, 6578, 2]

// Module 16621 (YouScreenUserProfileContent)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1127 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2041 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Constants from "Constants" /* 6630 */;
import Constants2 from "Constants" /* 7632 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7691 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 7706 */;
import FormDividerDefault from "FormDivider" /* 8063 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8124 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 10591 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10647 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10741 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 12574 */;
import UserProfileNoteDefault from "UserProfileNote" /* 12627 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 12640 */;
import VibegrationsCustomWidgetAddOptionDefault from "VibegrationsCustomWidgetAddOption" /* 12641 */;
import UserProfileConnections from "UserProfileConnections" /* 12673 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 12678 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 12683 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15285 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16007 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16609 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 16628 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 16630 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5592 */;
import UserProfileStore from "UserProfileStore" /* 7039 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let navigation;

let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
let tmp;
let tmp3;
const PlatformUtils = tmp(1370);
const UserProfileActivityTabDefault = tmp3(12652);
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const useIsContentShown = DismissibleContentShownStateStore.useIsContentShown;
let UserProfileSections = Constants2.UserProfileSections;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const constants = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = require("you/tracking/Tracking");
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
    const tmp8Result = authStore2(tmp10, obj2);
    cResult[2] = arg0;
    cResult[3] = tmp8Result;
    tmp7 = tmp8Result;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : ((arg0) => {
  const callback = react.useCallback(() => {
    const obj = require("you/tracking/Tracking");
    const result = obj.trackYouTabAvatarPress();
    const obj2 = require("showYouAccountActionSheet");
    const result1 = obj2.showYouAccountActionSheet();
  }, []);
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  let obj2 = { onPress: callback, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: isAndroidResult, accessible: !isAndroidResult && undefined };
  const tmp4 = UserProfileAvatarDefault;
  const merged = Object.assign(arg0);
  return authStore2(tmp4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor, borderColor) => {
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
}) : ((backgroundColor, borderColor) => {
  const items = [UserProfileSharedStylesDefault().card, ];
  const obj = { backgroundColor, borderColor, borderWidth: 1 };
  items[1] = obj;
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
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
    const tmp9 = authStore2(UserProfileWidgetsBoardEditNoticeDefault, {});
    const tmp10 = authStore2(VibegrationsCustomWidgetAddOptionDefault, {});
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
      const tmp17 = closure_15(metroRequire, obj2);
      cResult[6] = tmp4.profileContent;
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = authStore2(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = activeSection === WIDGETS;
  cResult[4] = userId;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
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
  items[0] = authStore2(UserProfileWidgetsBoardEditNoticeDefault, {});
  items[1] = authStore2(VibegrationsCustomWidgetAddOptionDefault, {});
  const obj2 = { userId, isVisible: activeSection === WIDGETS, cardStyle: tmp2 };
  items[2] = authStore2(UserProfileWidgetsBoardDefault, obj2);
  return closure_15(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      const tmp13 = authStore2(metroRequire, obj2);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { user, currentUser: user, cardStyle: tmp5 };
    const tmp9 = authStore2(UserProfileActivityTabDefault, obj3);
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
  let containerBackground;
  let containerBorderColor;
  let items;
  let tmp2;
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const obj = { style: items, children: authStore2(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: tmp2 }) };
  items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = UserProfileSharedStylesDefault());
  UserProfileSharedStylesDefault();
  tmp2 = closure_18(containerBackground, containerBorderColor);
  return authStore2(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToProfileCustomization) => {
  let canSet;
  let closure_3;
  let entryPoint;
  let first;
  let first1;
  let trackUserProfileAction;
  let obj = navigateToProfileCustomization(first1[12]);
  const cResult = obj.c(38);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  const isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  const tmp5 = trackUserProfileAction(first1[17])();
  const obj2 = navigateToProfileCustomization(first1[22]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const obj3 = navigateToProfileCustomization(first1[23]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "YouScreenUserProfileContent" };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  const tmpResult = navigateToProfileCustomization(first1[24]);
  const isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(first);
  const tmp10 = trackUserProfileAction(first1[25])();
  const tmpResult3 = navigateToProfileCustomization(first1[26]);
  const customTypingIndicatorConfig = tmpResult3.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp12 = useIsContentShown(navigateToProfileCustomization(first1[27]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  if (cResult[1] === entryPoint) {
    if (cResult[2] === tmp12) {
      if (cResult[3] === isBadgeManagementEnabled) {
        if (cResult[4] === canSet) {
          if (cResult[5] === isDisplayNameStylesFlywheelSettersEnabled) {
            if (cResult[6] === isProfileLoaded) {
              let tmp13;
              if (cResult[7] === tmp10) {
                tmp13 = cResult[8];
              }
              const tmpResult4 = navigateToProfileCustomization(first1[28]);
              const tmp24 = _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp13), 2);
              first1 = tmp24[0];
              _slicedToArray = tmp26;
              const DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK = tmp(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
              const BADGE_CUSTOMIZATION_COACHMARK = tmp(tmp2[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
              if (cResult[9] === tmp24[1]) {
                if (cResult[10] === navigateToProfileCustomization) {
                  if (cResult[11] === trackUserProfileAction) {
                    let tmp27;
                    let tmp29;
                    let tmp30;
                    if (cResult[12] === first1) {
                      tmp27 = cResult[13];
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
                    const primaryButtons = tmp5.primaryButtons;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      const obj5 = { size: "sm", color: trackUserProfileAction(first1[30]).colors.WHITE };
                      const PencilIcon = tmp(tmp2[29]).PencilIcon;
                      const tmp31 = closure_14(PencilIcon, obj5);
                      const intl = tmp(tmp2[31]).intl;
                      cResult[16] = tmp31;
                      cResult[17] = intl.string(navigateToProfileCustomization(first1[31]).t.AAjhgi);
                      intl.string(navigateToProfileCustomization(first1[31]).t.AAjhgi);
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
                      tmp29 = tmp31;
                    } else {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      tmp30 = cResult[17];
                    }
                    if (cResult[18] !== tmp27) {
                      class Y {
                        constructor() {
                          tmp = closure_0(closure_13.BADGES);
                          return;
                        }
                      }
                      const obj6 = { ref, variant: "primary", icon: tmp29, text: tmp30, onPress: tmp27, grow: true };
                      cResult[18] = tmp27;
                      cResult[19] = closure_14(navigateToProfileCustomization(first1[32]).Button, obj6);
                      const tmp34 = closure_14(navigateToProfileCustomization(first1[32]).Button, obj6);
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
                      const tmp38 = first1 === DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
                      if (cResult[23] === tmp24[1]) {
                        class Y {
                          constructor() {
                            tmp = closure_0(closure_13.BADGES);
                            return;
                          }
                        }
                        if (cResult[26] === tmp24[1]) {
                          class Y {
                            constructor() {
                              tmp = closure_0(closure_13.BADGES);
                              return;
                            }
                          }
                        }
                        const obj7 = { targetRef: ref, visible: first1 === BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp24[1], onTryItOut: tmp28 };
                        cResult[26] = tmp24[1];
                        const tmp45 = closure_14(trackUserProfileAction(first1[35]), obj7);
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
                        cResult[28] = first1 === BADGE_CUSTOMIZATION_COACHMARK;
                        cResult[29] = tmp45;
                      }
                      const obj8 = { targetRef: ref, visible: tmp38, markAsDismissed: tmp24[1] };
                      cResult[23] = tmp24[1];
                      const tmp41 = closure_14(trackUserProfileAction(first1[34]), obj8);
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
            }
          }
        }
      }
    }
  }
  const items = [];
  const tmp14 = isProfileLoaded && isDisplayNameStylesFlywheelSettersEnabled && !tmp12;
  if (tmp14) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp15(navigateToProfileCustomization(first1[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp17 = isProfileLoaded && isBadgeManagementEnabled && tmp10;
  if (tmp17) {
    class Y {
      constructor() {
        tmp = closure_0(closure_13.BADGES);
        return;
      }
    }
    tmp18(navigateToProfileCustomization(first1[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp20 = isProfileLoaded && canSet;
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
    tmp21(navigateToProfileCustomization(first1[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
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
  const tmp3 = trackUserProfileAction(first[17])();
  let obj = navigateToProfileCustomization(first[22]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(null);
  const obj3 = navigateToProfileCustomization(first[23]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj4 = navigateToProfileCustomization(first[24]);
  const isBadgeManagementEnabled = obj4.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp8 = trackUserProfileAction(first[25])();
  const obj5 = navigateToProfileCustomization(first[26]);
  const customTypingIndicatorConfig = obj5.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(navigateToProfileCustomization(first[27]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const items = [];
  const tmp11 = isProfileLoaded && isDisplayNameStylesFlywheelSettersEnabled && !tmp10;
  if (tmp11) {
    items.push(navigateToProfileCustomization(first[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  const tmp13 = isProfileLoaded && isBadgeManagementEnabled && tmp8;
  if (tmp13) {
    items.push(navigateToProfileCustomization(first[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
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
    items.push(navigateToProfileCustomization(first[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = navigateToProfileCustomization(first[28]);
  const tmp16 = _slicedToArray(tmp4Result.useSelectedDismissibleContent(items), 2);
  first = tmp16[0];
  _slicedToArray = tmp18;
  const DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK = tmp4(tmp2[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  const BADGE_CUSTOMIZATION_COACHMARK = tmp4(tmp2[27]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp16[1]];
  const CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK = tmp4(tmp2[27]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
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
  const tmpResult = trackUserProfileAction(first[33]);
  Button = tmp4(tmp2[32]).Button;
  obj9 = { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE };
  PencilIcon = tmp4(tmp2[29]).PencilIcon;
  intl = tmp4(tmp2[31]).intl;
  items3 = [closure_14(tmpResult, obj7), , , ];
  const obj10 = { targetRef: ref, visible: first === DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[1] = closure_14(trackUserProfileAction(first[34]), obj10);
  const obj11 = { targetRef: ref, visible: first === BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 };
  items3[2] = closure_14(trackUserProfileAction(first[35]), obj11);
  const obj12 = { targetRef: ref, visible: first === CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[3] = closure_14(trackUserProfileAction(first[36]), obj12);
  return closure_15(closure_16, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let avatarBackground;
  let closure_14;
  let isVisible;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let primaryColor;
  let secondaryColor;
  let setActiveIndex;
  let statusBackground;
  let style;
  let theme;
  let tmp11;
  let tmp12;
  let tmp = user;
  let tmp2 = navigateToPremium;
  let obj = user(navigateToPremium[12]);
  const cResult = obj.c(190);
  user = user.user;
  ({ style, navigateToProfileCustomization, navigateToFriends } = user);
  navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  const animateAvatar = user.animateAvatar;
  let tmp4 = undefined === animateAvatar || animateAvatar;
  let tmp6 = navigateToFriends(tmp2[17])();
  let closure_5 = tmp6;
  const tmpResult = tmp(tmp2[37]);
  navigation = tmpResult.useNavigation();
  const tmpResult14 = tmp(tmp2[22]);
  const trackUserProfileAction = tmpResult14.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp8 = navigateToFriends(tmp2[38])(user.id);
  const displayProfile = tmp8;
  const tmpResult15 = tmp(tmp2[39]);
  const customStatusActivity = tmpResult15.useCustomStatusActivity();
  const tmp10 = navigateToFriends(tmp2[40])(tmp8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [displayProfile];
    const fn = function f() {
      return displayProfile.getStatus();
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult16 = tmp(tmp2[41]);
  const stateFromStores = tmpResult16.useStateFromStores(tmp11, tmp12);
  if (cResult[2] === tmp8) {
    let tmp15;
    if (cResult[3] === user) {
      tmp15 = cResult[4];
    }
    ({ theme, primaryColor, secondaryColor } = navigateToFriends(tmp2[42])(tmp15));
    const hasCustomProfileTheme = null != primaryColor;
    navigateToFriends(tmp2[42])(tmp15);
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        let tmp18;
        let tmp25;
        let tmp26;
        if (cResult[7] === theme) {
          tmp18 = cResult[8];
        }
        const tmpResult17 = tmp(tmp2[43]);
        const userProfileColors = tmpResult17.useUserProfileColors(tmp18);
        const containerBackground = userProfileColors.containerBackground;
        const containerBorderColor = userProfileColors.containerBorderColor;
        ({ avatarBackground, statusBackground } = userProfileColors);
        let obj9 = initialTab;
        const ref = initialTab.useRef(null);
        if (cResult[9] !== trackUserProfileAction) {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[9] = trackUserProfileAction;
          cResult[10] = X;
        } else {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        const tmpResult18 = tmp(tmp2[44]);
        const enabled = tmpResult18.useVirtualCurrencyMobileEnabled().enabled;
        [r10110, closure_14] = navigateToShop(obj9.useState(null), 2);
        navigateToShop(obj9.useState(null), 2);
        const tmpResult19 = tmp(tmp2[45]);
        const shouldShowExpiringTrialOfferCard = tmpResult19.useShouldShowExpiringTrialOfferCard();
        const _Symbol = Symbol;
        const tmp22 = navigateToShop;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          let items1 = [customStatusActivity];
          cResult[11] = items1;
          tmp25 = items1;
        } else {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        if (cResult[12] !== user.id) {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[12] = user.id;
          cResult[13] = tmp27;
          tmp26 = tmp27;
        } else {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        const tmpResult20 = tmp(tmp2[41]);
        const stateFromStores1 = tmpResult20.useStateFromStores(tmp25, tmp26);
        const tmpResult21 = tmp(tmp2[46]);
        const displayableBoardWidgets = tmpResult21.useDisplayableBoardWidgets(user.id);
        const tmpResult22 = tmp(tmp2[47]);
        const isMobileGameCollectionExperimentEnabled = tmpResult22.useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
        const tmpResult23 = tmp(tmp2[48]);
        const tmp30 = displayableBoardWidgets.length > 0 || tmpResult23.useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
        const tmpResult24 = tmp(tmp2[49]);
        const isRecentActivityMobileEnabled = tmpResult24.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
        const tmpResult25 = tmp(tmp2[50]);
        const profileTabIndices = tmpResult25.useProfileTabIndices(tmp30, isRecentActivityMobileEnabled, true);
        const boardTabIndex = profileTabIndices.boardTabIndex;
        const activityTabIndex = profileTabIndices.activityTabIndex;
        const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        const tmp22Result = tmp22(obj9.useState(0), 2);
        closure_20 = tmp22Result[0];
        closure_21 = tmp22Result[1];
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
          cResult[14] = tmp36;
        } else {
          class X {
            constructor() {
              trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              const obj = showYouAccountActionSheet;
              const result = obj.showYouAccountActionSheet();
            }
          }
        }
        const tmpResult26 = tmp(tmp2[51]);
        const pageHeights1 = tmpResult26.usePageHeights();
        const handlePageContentSize = pageHeights1.handlePageContentSize;
        const pageHeights = pageHeights1.pageHeights;
        if (cResult[15] !== trackUserProfileAction) {
          class Ee {
            constructor(section) {
              const obj = { action: "PRESS_SECTION", section };
              trackUserProfileAction(obj);
            }
          }
          cResult[15] = trackUserProfileAction;
          cResult[16] = Ee;
        } else {
          class Ee {
            constructor(section) {
              const obj = { action: "PRESS_SECTION", section };
              trackUserProfileAction(obj);
            }
          }
        }
        if (cResult[17] === activityTabIndex) {
          class Ee {
            constructor(section) {
              const obj = { action: "PRESS_SECTION", section };
              trackUserProfileAction(obj);
            }
          }
        }
        let obj2 = { initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: tmp38 };
        cResult[17] = activityTabIndex;
        cResult[18] = boardTabIndex;
        cResult[19] = initialTab;
        cResult[20] = tmp38;
        cResult[21] = wishlistTabIndex;
        cResult[22] = obj2;
      }
    }
    let obj3 = { theme, primaryColor, secondaryColor };
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj3;
    tmp18 = obj3;
  }
  let obj4 = { user, displayProfile: tmp8 };
  cResult[2] = tmp8;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp15 = obj4;
}) : ((user) => {
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
  const tmp3 = navigateToFriends(navigateToPremium[17])();
  let closure_5 = tmp3;
  let tmp4 = user;
  let obj = user(navigateToPremium[37]);
  navigation = obj.useNavigation();
  let obj2 = user(navigateToPremium[22]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[38])(user.id);
  const displayProfile = tmp6;
  let obj3 = user(navigateToPremium[39]);
  const customStatusActivity = obj3.useCustomStatusActivity();
  let tmp8 = navigateToFriends(navigateToPremium[40])(tmp6);
  let obj4 = user(navigateToPremium[41]);
  let items = [displayProfile];
  const stateFromStores = obj4.useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[42])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj5 = user(navigateToPremium[43]);
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
  let obj7 = user(navigateToPremium[44]);
  const enabled = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  let c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  let obj9 = user(navigateToPremium[45]);
  const shouldShowExpiringTrialOfferCard = obj9.useShouldShowExpiringTrialOfferCard();
  let obj10 = user(navigateToPremium[41]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = obj10.useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj11 = user(navigateToPremium[46]);
  const displayableBoardWidgets = obj11.useDisplayableBoardWidgets(user.id);
  const obj12 = user(navigateToPremium[47]);
  const isMobileGameCollectionExperimentEnabled = obj12.useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
  const obj13 = user(navigateToPremium[48]);
  const tmp21 = displayableBoardWidgets.length > 0 || obj13.useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
  closure_17 = tmp21;
  let tmp4Result = tmp4(tmp2[49]);
  const isRecentActivityMobileEnabled = tmp4Result.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const tmp4Result9 = tmp4(tmp2[50]);
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
  const tmp4Result10 = tmp4(tmp2[51]);
  const pageHeights1 = tmp4Result10.usePageHeights();
  const handlePageContentSize = pageHeights1.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const pageHeights = pageHeights1.pageHeights;
  const callback2 = obj6.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
  }, items3);
  const tmp4Result11 = tmp4(tmp2[50]);
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
      tmp3Result = tmp3(tmp4(12667), obj4);
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
      intl2 = tmp(1127).intl;
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: authStore2(closure_19, obj5)
      };
      obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      push(obj3);
    }
    const tmp13 = isRecentActivityMobileEnabled;
    if (tmp13) {
      const push2 = items.push;
      const obj6 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: authStore2(hasOwnProperty, obj7, activityTabIndex) };
      intl3 = tmp(1127).intl;
      obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: authStore2(closure_20, obj8)
      };
      obj8 = { user, containerBackground, containerBorderColor };
      push2(obj6);
    }
    const push3 = items.push;
    const obj9 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: authStore2(hasOwnProperty, obj10, wishlistTabIndex) };
    intl4 = tmp(1127).intl;
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
  const tmp4Result12 = tmp4(tmp2[64]);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[30]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result12.useSegmentedControlState(obj14);
  const tmp4Result13 = tmp4(tmp2[51]);
  const pagerFillHeight = tmp4Result13.usePagerFillHeight(scrollPosition);
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result14 = tmp4(tmp2[51]);
  const pagesHeightStyle = tmp4Result14.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
  closure_33 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const tmp4Result15 = tmp4(tmp2[37]);
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
        navigation.setParams({ initialTab: "r" });
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
  const View = tmp(tmp2[70]).View;
  const obj16 = { style: items12, children: items13 };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  LayerScope = tmp4(tmp2[71]).LayerScope;
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
  const tmpResult = tmp(tmp2[67]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  let intl = tmp4(tmp2[31]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj21 = { status: tmp4Result16.getStatusLabel(stateFromStores) };
  const prop = tmp4(tmp2[31]).t["er+FRD"];
  tmp4Result16 = tmp4(tmp2[66]);
  formatToPlainStringResult = formatToPlainString(prop, obj21);
  intl2 = tmp4(tmp2[31]).intl;
  items16 = [c14(tmpResult, obj20), ];
  const obj22 = { navigateToProfileCustomization, isProfileLoaded: null != tmp6 };
  items16[1] = c14(wishlistTabIndex, obj22);
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
  const View2 = tmp(tmp2[70]).View;
  items17[1] = c14(View2, obj27);
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj23);
  return c14(View, obj15);
});
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default tmp4;
