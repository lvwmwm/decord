// Module ID: 12074
// Function ID: 12075
// Name: openUserProfileAddTagActionSheet
// Dependencies: [502, 8413, 6210, 8480, 5489, 12075, 2118, 2]
// Exports: default

// Module 12074 (openUserProfileAddTagActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import react_nativeDefault from "react-native" /* 6210 */;
import Constants from "Constants" /* 8413 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const constants = Constants.TrackUserProfileEditActions;
const UserProfileAddTagActionSheet = "UserProfileAddTagActionSheet";
let result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddTagActionSheet.tsx");

export default function openUserProfileAddTagActionSheet(widgetEdited) {
  react_nativeDefault();
  const obj = UserProfileAnalyticsUtils;
  const obj2 = { userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_TAG, widgetEdited: widgetEdited.widgetType };
  const result = obj.trackUserProfileEditAction(obj2);
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(12075, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
