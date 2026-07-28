// Module ID: 11695
// Function ID: 90574
// Name: UserProfileConfirmThreadRemove
// Dependencies: [31, 33, 4004, 4510, 1212, 4510, 2]
// Exports: default

// Module 11695 (UserProfileConfirmThreadRemove)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("conceal").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  let onConfirm;
  let user;
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  let obj = importDefault(4004);
  const name = obj.useName(user);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  obj.title = intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const t2 = require(1212) /* getSystemLocale */.t;
  obj.content = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  obj = {};
  const obj1 = { variant: "destructive" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl3.string(require(1212) /* getSystemLocale */.t.N86XcP);
  obj1.onPress = onConfirm;
  const items = [callback(require(4510) /* getAlertModalItemKey */.AlertActionButton, obj1, "remove-user-from-thread"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl4.string(require(1212) /* getSystemLocale */.t.yNbnce);
  items[1] = callback(require(4510) /* getAlertModalItemKey */.AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj.children = items;
  obj.actions = callback2(require(4510) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4510) /* getAlertModalItemKey */.AlertModal, obj);
};
