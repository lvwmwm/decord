// Module ID: 13457
// Function ID: 13458
// Name: HideFriendRequestNotesUtils
// Dependencies: [2019, 8954, 2]
// Exports: useHideFriendRequestNotes

// Module 13457 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2019 */;
import useUserIsTeen from "useUserIsTeen" /* 8954 */;
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
