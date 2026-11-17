// Module ID: 15912
// Function ID: 15913
// Name: HideFriendRequestNotesUtils
// Dependencies: [5252, 5135, 10810, 504, 2]
// Exports: useFriendRequestNote, useHideFriendRequestNotes

// Module 15912 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 5135 */;
import useUserIsTeen from "useUserIsTeen" /* 10810 */;
import RelationshipStore from "RelationshipStore" /* 5252 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
}
export function useFriendRequestNote(arg0) {
  let closure_0;
  _require = arg0;
  const HideFriendRequestNotes = require("UserSettings").HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  const obj = require("useUserIsTeen");
  let userIsTeen = obj.useUserIsTeen();
  const tmp = _require;
  if (null != setting) {
    userIsTeen = setting;
  }
  const items = [RelationshipStore];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => RelationshipStore.getNote(closure_0));
  let tmp6 = null;
  if (!userIsTeen) {
    tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if ("" !== stateFromStores) {
        tmp6 = stateFromStores;
      }
    }
  }
  return tmp6;
}
