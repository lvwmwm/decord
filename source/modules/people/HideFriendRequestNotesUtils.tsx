// Module ID: 13053
// Function ID: 13054
// Name: useHideFriendRequestNotes
// Dependencies: [4166, 8574, 2]
// Exports: useHideFriendRequestNotes

// Module 13053 (useHideFriendRequestNotes)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useUserIsTeen from "useUserIsTeen" /* 8574 */;

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
