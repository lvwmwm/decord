// Module ID: 12833
// Function ID: 12834
// Name: useHideFriendRequestNotes
// Dependencies: [4166, 8786, 2]
// Exports: useHideFriendRequestNotes

// Module 12833 (useHideFriendRequestNotes)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useUserIsTeen from "useUserIsTeen" /* 8786 */;

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
