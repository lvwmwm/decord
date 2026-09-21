// Module ID: 13414
// Function ID: 13415
// Name: HideFriendRequestNotesUtils
// Dependencies: [558, 2023, 8920, 2]

// Module 13414 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2023 */;
import useUserIsTeen from "useUserIsTeen" /* 8920 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
}) : (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
});
