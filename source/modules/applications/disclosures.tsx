// Module ID: 8996
// Function ID: 70818
// Name: _getDisclosures
// Dependencies: [5, 653, 507, 8997, 1212, 2]
// Exports: ackDisclosures, getDisclosures, getTextForDisclosure

// Module 8996 (_getDisclosures)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _getDisclosures() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _ackDisclosures() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = require("_callSuper").ApplicationDisclosureType;
export const getDisclosures = function getDisclosures(client_id) {
  return _getDisclosures(...arguments);
};
export const ackDisclosures = function ackDisclosures(arg0, arg1) {
  return _ackDisclosures(...arguments);
};
export const getTextForDisclosure = function getTextForDisclosure(disclosure) {
  if (require(8997) /* _callSuper */.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["6wPmjo"]);
  } else if (require(8997) /* _callSuper */.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/uOMKZ"]);
  } else {
    return null;
  }
};
