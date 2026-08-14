// Module ID: 7884
// Function ID: 7885
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 4710, 1236, 2821, 4710, 2]
// Exports: default

// Module 7884 (AgeVerificationQuestUnsupportedAlertModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(2821).gUqXQN);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(importDefault(2821).yBHwMy);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t["NX+WJN"]);
  obj[0] = jsx(require(4710) /* getAlertModalItemKey */.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(require(4710) /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require(4710) /* getAlertModalItemKey */.AlertModal, { text: null });
};
