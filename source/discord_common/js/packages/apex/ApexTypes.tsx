// Module ID: 1191
// Function ID: 13649
// Name: UnitType
// Dependencies: []

// Module 1191 (UnitType)
const obj = { User: 1, [1]: "User", Installation: 2, [2]: "Installation", Guild: 3, [3]: "Guild" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/apex/ApexTypes.tsx");

export const UnitType = obj;
export const UnitTypeToKind = { [obj.User]: "user", [obj.Installation]: "installation", [obj.Guild]: "guild" };
export const ExperimentFlags = { IsOverride: 1, [1]: "IsOverride", ExposureTrackingEnabled: 2, [2]: "ExposureTrackingEnabled", DependentExperiment: 4, [4]: "DependentExperiment", UseAsEligibility: 8, [8]: "UseAsEligibility" };
export const LOGGED_OUT_USER_ID_SENTINEL = require(dependencyMap[0]).LOGGED_OUT_USER_ID_SENTINEL;
