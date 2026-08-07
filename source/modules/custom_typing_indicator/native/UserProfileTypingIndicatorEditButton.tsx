// Module ID: 13877
// Function ID: 13878
// Name: UserProfileTypingIndicatorEditButton
// Dependencies: [32, 19, 676, 1369, 21, 1480, 5962, 1358, 13856, 1236, 3354, 2]
// Exports: default

// Module 13877 (UserProfileTypingIndicatorEditButton)
import _slicedToArray from "_slicedToArray";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
require("noop").useCallback;
const result = require("ME").fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton() {
  let obj = nativeStackNavigation(1480);
  nativeStackNavigation = obj.useNativeStackNavigation();
  const items = [nativeStackNavigation(1358).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp2 = callback(nativeStackNavigation(5962).useSelectedDismissibleContent(items, undefined, true), 2);
  const importDefault = tmp3;
  const items1 = [nativeStackNavigation, tmp2[1]];
  const obj2 = nativeStackNavigation(5962);
  obj = { label: null, labelTrailing: null, buttonText: null, onPress: null };
  const intl = nativeStackNavigation(1236).intl;
  obj[0] = intl.string(importDefault(3354)["pT+BVM"]);
  obj = { showPremiumIcon: true, showNewBadge: null };
  obj[1] = tmp2[0] === nativeStackNavigation(1358).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  obj[1] = jsx(nativeStackNavigation(13856).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: null });
  const intl2 = nativeStackNavigation(1236).intl;
  obj[2] = intl2.string(nativeStackNavigation(1236).t.PoWNfe);
  obj[3] = useCallback(() => {
    nativeStackNavigation.navigate(outer1_5.TYPING_INDICATOR);
    tmp3(outer1_6.TAKE_ACTION);
  }, items1);
  return jsx(nativeStackNavigation(13856).UserProfileEditFormButton, { showPremiumIcon: true, showNewBadge: null });
};
