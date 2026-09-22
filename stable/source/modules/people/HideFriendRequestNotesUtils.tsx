// Module ID: 13258
// Function ID: 13259
// Name: HideFriendRequestNotesUtils
// Dependencies: [1935, 8767, 2]
// Exports: useHideFriendRequestNotes

// Module 13258 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 1935 */;
import useUserIsTeen from "useUserIsTeen" /* 8767 */;
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
