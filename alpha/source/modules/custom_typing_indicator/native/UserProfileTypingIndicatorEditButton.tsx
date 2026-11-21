// Module ID: 15904
// Function ID: 15905
// Name: UserProfileTypingIndicatorEditButton
// Dependencies: [32, 19, 1071, 4759, 21, 1500, 12835, 9080, 4746, 7520, 7539, 1112, 15869, 4192, 12848, 2]
// Exports: default

// Module 15904 (UserProfileTypingIndicatorEditButton)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const useCallback = react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  let closure_2;
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  let obj = isTryItOut(1500);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const obj2 = isTryItOut(12835);
  const currentCustomTypingIndicatorConfig = obj2.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const useSelectedDismissibleContent = isTryItOut(9080).useSelectedDismissibleContent;
  const items = [];
  isTryItOut(9080);
  items[0] = isTryItOut(4746).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  const tmp6 = analyticsLocations(useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp8;
  const first = tmp6[0];
  const tmp10 = nativeStackNavigation(7520);
  const tmp11 = nativeStackNavigation(7539);
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
  const intl = tmp(1112).intl;
  const string = intl.string;
  const tmpResult = isTryItOut(12835);
  const stringResult = string(tmpResult.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const UserProfileEditFormButton = tmp(15869).UserProfileEditFormButton;
  const intl2 = tmp(1112).intl;
  ({ showPremiumIcon: true, showNewBadge: first === isTryItOut(4746).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = tmp(15869).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl2.string(nativeStackNavigation(4192)["pT+BVM"])} labelTrailing={null} leading={null} buttonText={stringResult} accessibilityValue={{ text: stringResult }} onPress={tmp12} />;
};
