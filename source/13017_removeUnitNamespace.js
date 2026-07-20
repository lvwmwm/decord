// Module ID: 13017
// Function ID: 99198
// Name: removeUnitNamespace
// Dependencies: []

// Module 13017 (removeUnitNamespace)
function removeUnitNamespace(arr) {
  return arr.slice(arr.indexOf("-") + 1);
}
SANCTIONED_UNITS.SANCTIONED_UNITS = undefined;
SANCTIONED_UNITS.SIMPLE_UNITS = undefined;
SANCTIONED_UNITS.removeUnitNamespace = removeUnitNamespace;
SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier = function IsSanctionedSimpleUnitIdentifier(arg0) {
  const SIMPLE_UNITS = arg5.SIMPLE_UNITS;
  return SIMPLE_UNITS.indexOf(arg0) > -1;
};
SANCTIONED_UNITS.SANCTIONED_UNITS = [];
SANCTIONED_UNITS = SANCTIONED_UNITS.SANCTIONED_UNITS;
SANCTIONED_UNITS.SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
