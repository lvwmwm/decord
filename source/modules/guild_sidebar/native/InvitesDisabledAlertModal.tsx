// Module ID: 11447
// Function ID: 11448
// Name: InvitesDisabledAlertModal
// Dependencies: [19, 21, 4533, 1236, 4533, 2]
// Exports: default

// Module 11447 (InvitesDisabledAlertModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.LpUfEt);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.QRXqzO);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(require(4533) /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(require(4533) /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require(4533) /* getAlertModalItemKey */.AlertModal, { text: null });
};
