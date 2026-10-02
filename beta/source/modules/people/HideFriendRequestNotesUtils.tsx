// Module ID: 12693
// Function ID: 12694
// Name: HideFriendRequestNotesUtils
// Dependencies: [558, 2027, 8101, 2]

// Module 12693 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2027 */;
import useUserIsTeen from "useUserIsTeen" /* 8101 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
}) : (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
});
const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = tmp2;
