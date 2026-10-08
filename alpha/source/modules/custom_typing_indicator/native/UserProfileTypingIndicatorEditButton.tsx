// Module ID: 14714
// Function ID: 14715
// Name: UserProfileTypingIndicatorEditButton
// Dependencies: [32, 19, 1085, 2060, 21, 558, 576, 1502, 11659, 2048, 7090, 6841, 6865, 1126, 3829, 14689, 11672, 2]

// Module 14714 (UserProfileTypingIndicatorEditButton)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
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
  let first;
  let obj = isTryItOut(576);
  const cResult = obj.c(21);
  isTryItOut = isTryItOut.isTryItOut;
  const obj2 = isTryItOut(1502);
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  const obj3 = isTryItOut(11659);
  const currentCustomTypingIndicatorConfig = obj3.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = isTryItOut(7090);
  const tmp7 = analyticsLocations(tmpResult.useSelectedDismissibleContent(first, undefined, true), 2);
  dependencyMap = tmp9;
  const first1 = tmp7[0];
  const tmp11 = nativeStackNavigation(6841);
  const tmp12 = nativeStackNavigation(6865);
  analyticsLocations = tmp11(isTryItOut ? tmp12.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp12.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === isTryItOut) {
      if (cResult[3] === tmp7[1]) {
        let tmp13;
        let tmp14;
        let tmp16;
        let tmp19;
        let tmp22;
        let tmp25;
        if (cResult[4] === nativeStackNavigation) {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          const tmpResult2 = isTryItOut(11659);
          const stringResult = string(tmpResult2.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
          cResult[6] = currentCustomTypingIndicatorConfig.typingSuggestion;
          cResult[7] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(nativeStackNavigation(3829)["pT+BVM"]);
          cResult[8] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[8];
        }
        const tmp18 = first1 === isTryItOut(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
        if (cResult[9] !== tmp18) {
          const tmp21 = jsx(isTryItOut(14689).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp18 });
          cResult[9] = tmp18;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] !== currentCustomTypingIndicatorConfig) {
          const tmp24 = jsx(nativeStackNavigation(11672), { config: currentCustomTypingIndicatorConfig, size: 24 });
          cResult[11] = currentCustomTypingIndicatorConfig;
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] !== tmp14) {
          const obj6 = { text: tmp14 };
          cResult[13] = tmp14;
          cResult[14] = obj6;
          tmp25 = obj6;
        } else {
          tmp25 = cResult[14];
        }
        if (cResult[15] === tmp14) {
          if (cResult[16] === tmp13) {
            if (cResult[17] === tmp19) {
              if (cResult[18] === tmp22) {
                let tmp26;
                if (cResult[19] === tmp25) {
                  tmp26 = cResult[20];
                }
                return tmp26;
              }
            }
          }
        }
        const tmp28 = jsx(isTryItOut(14689).UserProfileEditFormButton, { label: tmp16, labelTrailing: tmp19, leading: tmp22, buttonText: tmp14, accessibilityValue: tmp25, onPress: tmp13 });
        cResult[15] = tmp14;
        cResult[16] = tmp13;
        cResult[17] = tmp19;
        cResult[18] = tmp22;
        cResult[19] = tmp25;
        cResult[20] = tmp28;
        tmp26 = tmp28;
      }
    }
  }
  class O {
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
  cResult[1] = analyticsLocations;
  cResult[2] = isTryItOut;
  cResult[3] = tmp7[1];
  cResult[4] = nativeStackNavigation;
  cResult[5] = O;
  tmp13 = O;
}) : (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  let closure_2;
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  let obj = isTryItOut(1502);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const obj2 = isTryItOut(11659);
  const currentCustomTypingIndicatorConfig = obj2.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const useSelectedDismissibleContent = isTryItOut(7090).useSelectedDismissibleContent;
  const items = [];
  isTryItOut(7090);
  items[0] = isTryItOut(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  const tmp6 = analyticsLocations(useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp8;
  const first = tmp6[0];
  const tmp10 = nativeStackNavigation(6841);
  const tmp11 = nativeStackNavigation(6865);
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
  const tmpResult = isTryItOut(11659);
  const stringResult = string(tmpResult.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const UserProfileEditFormButton = tmp(14689).UserProfileEditFormButton;
  const intl2 = tmp(1126).intl;
  ({ showPremiumIcon: true, showNewBadge: first === isTryItOut(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = tmp(14689).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl2.string(nativeStackNavigation(3829)["pT+BVM"])} labelTrailing={null} leading={null} buttonText={stringResult} accessibilityValue={{ text: stringResult }} onPress={tmp12} />;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default tmp2;
