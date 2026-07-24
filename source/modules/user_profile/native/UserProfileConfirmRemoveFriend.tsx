// Module ID: 11682
// Function ID: 90665
// Name: UserProfileConfirmRemoveFriend
// Dependencies: [31, 33, 4475, 1212, 4475, 2]
// Exports: default

// Module 11682 (UserProfileConfirmRemoveFriend)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  userDisplayName = userDisplayName.userDisplayName;
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.fPLvZd, { name: userDisplayName });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.l5FFq6, { name: userDisplayName });
  obj = {};
  obj = { variant: "destructive" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.cvSt1J);
  obj.onPress = userDisplayName.onConfirm;
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["eN6+rI"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "nevermind");
  obj.children = items;
  obj.actions = callback2(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
