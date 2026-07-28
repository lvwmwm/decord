// Module ID: 6746
// Function ID: 59328
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [31, 33, 4510, 1212, 2717, 4510, 2]
// Exports: default

// Module 6746 (AgeVerificationQuestUnsupportedAlertModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(2717).gUqXQN);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(importDefault(2717).yBHwMy);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.children = jsx(require(4510) /* getAlertModalItemKey */.AlertActionButton, {}, "got-it");
  obj.actions = jsx(require(4510) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4510) /* getAlertModalItemKey */.AlertModal, {});
};
