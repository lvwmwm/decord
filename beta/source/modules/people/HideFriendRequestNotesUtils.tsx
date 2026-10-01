// Module ID: 12692
// Function ID: 12693
// Name: HideFriendRequestNotesUtils
// Dependencies: [2021, 8104, 2]
// Exports: useHideFriendRequestNotes

// Module 12692 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2021 */;
import useUserIsTeen from "useUserIsTeen" /* 8104 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
