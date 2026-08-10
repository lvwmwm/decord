// Module ID: 11982
// Function ID: 11983
// Name: UserProfileAlertUserReported
// Dependencies: [19, 21, 4647, 1236, 4647, 2]
// Exports: default

// Module 11982 (UserProfileAlertUserReported)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.IwHU3R);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.qxyRaq);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(require(4647) /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(require(4647) /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require(4647) /* getAlertModalItemKey */.AlertModal, { text: null });
};
