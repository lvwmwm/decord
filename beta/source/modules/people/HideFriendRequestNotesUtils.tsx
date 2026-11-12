// Module ID: 15316
// Function ID: 15317
// Name: HideFriendRequestNotesUtils
// Dependencies: [5112, 4995, 8472, 504, 2]
// Exports: useFriendRequestNote, useHideFriendRequestNotes

// Module 15316 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 4995 */;
import useUserIsTeen from "useUserIsTeen" /* 8472 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
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
