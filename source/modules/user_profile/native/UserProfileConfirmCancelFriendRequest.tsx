// Module ID: 11681
// Function ID: 90663
// Name: UserProfileConfirmCancelFriendRequest
// Dependencies: [31, 33, 4475, 1212, 4475, 2]
// Exports: default

// Module 11681 (UserProfileConfirmCancelFriendRequest)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  let onConfirm;
  let userDisplayName;
  ({ userDisplayName, onConfirm } = arg0);
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["bTfA//"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["72FwjH"], { name: userDisplayName });
  obj = {};
  obj = { variant: "destructive" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["bTfA//"]);
  obj.onPress = onConfirm;
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "cancel-friend-request"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["eN6+rI"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "nevermind");
  obj.children = items;
  obj.actions = callback2(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
