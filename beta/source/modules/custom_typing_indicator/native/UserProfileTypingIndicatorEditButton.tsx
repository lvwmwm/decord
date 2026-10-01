// Module ID: 14196
// Function ID: 14197
// Name: UserProfileTypingIndicatorEditButton
// Dependencies: [32, 19, 1074, 2042, 21, 1485, 11453, 6806, 2029, 1115, 14175, 3717, 11463, 2]
// Exports: default

// Module 14196 (UserProfileTypingIndicatorEditButton)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
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
  let obj = isTryItOut(1485);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const obj2 = isTryItOut(11453);
  const currentCustomTypingIndicatorConfig = obj2.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const useSelectedDismissibleContent = isTryItOut(6806).useSelectedDismissibleContent;
  const items = [];
  isTryItOut(6806);
  items[0] = isTryItOut(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  const tmp4 = _slicedToArray(useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp6;
  const items1 = [nativeStackNavigation, isTryItOut, tmp4[1]];
  const first = tmp4[0];
  const tmp7 = useCallback(() => {
    let str2;
    let str = "profile_pending";
    const navigate = nativeStackNavigation.navigate;
    const TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
    if (isTryItOut) {
      str = "try_it_out";
    }
    const obj = { mode: str, source: str2 };
    str2 = "profile_row";
    if (isTryItOut) {
      str2 = "profile_row_try_it_out";
    }
    navigate(TYPING_INDICATOR, obj);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const intl = isTryItOut(1115).intl;
  const string = intl.string;
  const obj3 = isTryItOut(11453);
  const stringResult = string(obj3.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const UserProfileEditFormButton = isTryItOut(14175).UserProfileEditFormButton;
  const intl2 = isTryItOut(1115).intl;
  ({ showPremiumIcon: true, showNewBadge: first === isTryItOut(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = isTryItOut(14175).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl2.string(nativeStackNavigation(3717)["pT+BVM"])} labelTrailing={null} leading={null} buttonText={stringResult} accessibilityValue={{ text: stringResult }} onPress={tmp7} />;
};
