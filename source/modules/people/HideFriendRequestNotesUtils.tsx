// Module ID: 12576
// Function ID: 12577
// Name: useHideFriendRequestNotes
// Dependencies: [4136, 8734, 2]
// Exports: useHideFriendRequestNotes

// Module 12576 (useHideFriendRequestNotes)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import useUserIsTeen from "useUserIsTeen" /* 8734 */;

const result = set.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
