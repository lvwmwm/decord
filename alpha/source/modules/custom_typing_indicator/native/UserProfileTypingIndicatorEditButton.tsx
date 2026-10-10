// Module ID: 14876
// Function ID: 14877
// Name: UserProfileTypingIndicatorEditButton
// Dependencies: [32, 19, 1085, 2062, 21, 558, 576, 1503, 11641, 2049, 7099, 6851, 6878, 1126, 3851, 14851, 11654, 2]

// Module 14876 (UserProfileTypingIndicatorEditButton)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigateResult, tmp, tmp3;

const useCallback = react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  let analyticsLocations;
  let closure_2;
  let tmp6;
  let tmp7;
  let obj = isTryItOut(576);
  const cResult = obj.c(22);
  isTryItOut = isTryItOut.isTryItOut;
  const obj2 = isTryItOut(1503);
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  const obj3 = isTryItOut(11641);
  const currentCustomTypingIndicatorConfig = obj3.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
    const obj4 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj4;
    tmp6 = items;
    tmp7 = obj4;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = isTryItOut(7099);
  const tmp8 = analyticsLocations(tmpResult.useSelectedDismissibleContent(tmp6, tmp7), 2);
  dependencyMap = tmp10;
  const first = tmp8[0];
  const tmp12 = nativeStackNavigation(6851);
  const tmp13 = nativeStackNavigation(6878);
  analyticsLocations = tmp12(isTryItOut ? tmp13.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp13.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === isTryItOut) {
      if (cResult[4] === tmp8[1]) {
        let tmp14;
        let tmp15;
        let tmp17;
        let tmp20;
        let tmp23;
        let tmp26;
        if (cResult[5] === nativeStackNavigation) {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          const tmpResult2 = isTryItOut(11641);
          const stringResult = string(tmpResult2.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
          cResult[7] = currentCustomTypingIndicatorConfig.typingSuggestion;
          cResult[8] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(nativeStackNavigation(3851)["pT+BVM"]);
          cResult[9] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[9];
        }
        const tmp19 = first === isTryItOut(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
        if (cResult[10] !== tmp19) {
          const tmp22 = jsx(isTryItOut(14851).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp19 });
          cResult[10] = tmp19;
          cResult[11] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] !== currentCustomTypingIndicatorConfig) {
          const tmp25 = jsx(nativeStackNavigation(11654), { config: currentCustomTypingIndicatorConfig, size: 24 });
          cResult[12] = currentCustomTypingIndicatorConfig;
          cResult[13] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== tmp15) {
          const obj7 = { text: tmp15 };
          cResult[14] = tmp15;
          cResult[15] = obj7;
          tmp26 = obj7;
        } else {
          tmp26 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp14) {
            if (cResult[18] === tmp20) {
              if (cResult[19] === tmp23) {
                let tmp27;
                if (cResult[20] === tmp26) {
                  tmp27 = cResult[21];
                }
                return tmp27;
              }
            }
          }
        }
        const tmp29 = jsx(isTryItOut(14851).UserProfileEditFormButton, { label: tmp17, labelTrailing: tmp20, leading: tmp23, buttonText: tmp15, accessibilityValue: tmp26, onPress: tmp14 });
        cResult[16] = tmp15;
        cResult[17] = tmp14;
        cResult[18] = tmp20;
        cResult[19] = tmp23;
        cResult[20] = tmp26;
        cResult[21] = tmp29;
        tmp27 = tmp29;
      }
    }
  }
  class C {
    constructor() {
      str = "profile_pending";
      tmp = closure_1;
      navigate = closure_1.navigate;
      TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
      if (isTryItOut) {
        str = "try_it_out";
      }
      obj = { mode: str, analyticsLocations };
      navigateResult = navigate(TYPING_INDICATOR, obj);
      tmp3 = closure_2(ContentDismissActionType.TAKE_ACTION);
      return;
    }
  }
  cResult[2] = analyticsLocations;
  cResult[3] = isTryItOut;
  cResult[4] = tmp8[1];
  cResult[5] = nativeStackNavigation;
  cResult[6] = C;
  tmp14 = C;
}) : (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  let closure_2;
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  let obj = isTryItOut(1503);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const obj2 = isTryItOut(11641);
  const currentCustomTypingIndicatorConfig = obj2.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const useSelectedDismissibleContent = isTryItOut(7099).useSelectedDismissibleContent;
  const items = [];
  isTryItOut(7099);
  items[0] = isTryItOut(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  const tmp6 = analyticsLocations(useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp8;
  const first = tmp6[0];
  const tmp10 = nativeStackNavigation(6851);
  const tmp11 = nativeStackNavigation(6878);
  analyticsLocations = tmp10(isTryItOut ? tmp11.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp11.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  const items1 = [nativeStackNavigation, isTryItOut, tmp6[1], analyticsLocations];
  const tmp12 = useCallback(() => {
    let str = "profile_pending";
    const navigate = nativeStackNavigation.navigate;
    const TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
    if (isTryItOut) {
      str = "try_it_out";
    }
    const obj = { mode: str, analyticsLocations };
    navigate(TYPING_INDICATOR, obj);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const intl = tmp(1126).intl;
  const string = intl.string;
  const tmpResult = isTryItOut(11641);
  const stringResult = string(tmpResult.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const UserProfileEditFormButton = tmp(14851).UserProfileEditFormButton;
  const intl2 = tmp(1126).intl;
  ({ showPremiumIcon: true, showNewBadge: first === isTryItOut(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = tmp(14851).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl2.string(nativeStackNavigation(3851)["pT+BVM"])} labelTrailing={null} leading={null} buttonText={stringResult} accessibilityValue={{ text: stringResult }} onPress={tmp12} />;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default tmp2;
