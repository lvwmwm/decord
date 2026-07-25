// Module ID: 11388
// Function ID: 88490
// Name: InvitesDisabledAlertModal
// Dependencies: [31, 33, 4476, 1212, 4476, 2]
// Exports: default

// Module 11388 (InvitesDisabledAlertModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.LpUfEt);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.QRXqzO);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.children = jsx(require(4476) /* getAlertModalItemKey */.AlertActionButton, {}, "okay");
  obj.actions = jsx(require(4476) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4476) /* getAlertModalItemKey */.AlertModal, {});
};
