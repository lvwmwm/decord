// Module ID: 7555
// Function ID: 60471
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [31, 33, 4475, 1212, 2716, 4475, 2]
// Exports: default

// Module 7555 (AgeVerificationQuestUnsupportedAlertModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(2716).gUqXQN);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(importDefault(2716).yBHwMy);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.children = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, {}, "got-it");
  obj.actions = jsx(require(4475) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, {});
};
