// Module ID: 12609
// Function ID: 12610
// Name: useHideFriendRequestNotes
// Dependencies: [4166, 8771, 2]
// Exports: useHideFriendRequestNotes

// Module 12609 (useHideFriendRequestNotes)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useUserIsTeen from "useUserIsTeen" /* 8771 */;

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
