// Module ID: 11685
// Function ID: 90672
// Name: UserProfileAlertUserReported
// Dependencies: [31, 33, 4475, 1212, 4475, 2]
// Exports: default

// Module 11685 (UserProfileAlertUserReported)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.IwHU3R);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.qxyRaq);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.children = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, {}, "okay");
  obj.actions = jsx(require(4475) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, {});
};
