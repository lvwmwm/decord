// Module ID: 8950
// Function ID: 70562
// Name: _getDisclosures
// Dependencies: []
// Exports: ackDisclosures, getDisclosures, getTextForDisclosure

// Module 8950 (_getDisclosures)
function _getDisclosures() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getDisclosures = obj;
  return obj(...arguments);
}
function _ackDisclosures() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _ackDisclosures = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = arg1(dependencyMap[3]).ApplicationDisclosureType;
export const getDisclosures = function getDisclosures(client_id) {
  return _getDisclosures(...arguments);
};
export const ackDisclosures = function ackDisclosures(arg0, arg1) {
  return _ackDisclosures(...arguments);
};
export const getTextForDisclosure = function getTextForDisclosure(disclosure) {
  if (arg1(dependencyMap[3]).ApplicationDisclosureType.IP_LOCATION === disclosure) {
    const intl2 = arg1(dependencyMap[4]).intl;
    return intl2.string(arg1(dependencyMap[4]).t.6wPmjo);
  } else if (arg1(dependencyMap[3]).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t./uOMKZ);
  } else {
    return null;
  }
};
