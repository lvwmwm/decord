// Module ID: 15284
// Function ID: 15285
// Name: HideFriendRequestNotesUtils
// Dependencies: [5082, 4965, 8439, 504, 2]
// Exports: useFriendRequestNote, useHideFriendRequestNotes

// Module 15284 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 4965 */;
import useUserIsTeen from "useUserIsTeen" /* 8439 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
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
