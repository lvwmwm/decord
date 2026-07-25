// Module ID: 6710
// Function ID: 59238
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [31, 33, 4476, 1212, 2717, 4476, 2]
// Exports: default

// Module 6710 (AgeVerificationQuestUnsupportedAlertModal)
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
  obj.children = jsx(require(4476) /* getAlertModalItemKey */.AlertActionButton, {}, "got-it");
  obj.actions = jsx(require(4476) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4476) /* getAlertModalItemKey */.AlertModal, {});
};
