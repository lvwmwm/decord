// Module ID: 13428
// Function ID: 13429
// Name: HideFriendRequestNotesUtils
// Dependencies: [2019, 8922, 2]
// Exports: useHideFriendRequestNotes

// Module 13428 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2019 */;
import useUserIsTeen from "useUserIsTeen" /* 8922 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
