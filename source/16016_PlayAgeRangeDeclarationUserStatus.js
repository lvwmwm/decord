// Module ID: 16016
// Function ID: 122926
// Name: PlayAgeRangeDeclarationUserStatus
// Dependencies: []

// Module 16016 (PlayAgeRangeDeclarationUserStatus)
const importDefaultResult = importDefault(dependencyMap[0]);
const obj = { VERIFIED: 0, [0]: "VERIFIED", SUPERVISED: 1, [1]: "SUPERVISED", SUPERVISED_APPROVAL_PENDING: 2, [2]: "SUPERVISED_APPROVAL_PENDING", SUPERVISED_APPROVAL_DENIED: 3, [3]: "SUPERVISED_APPROVAL_DENIED", UNKNOWN: 4, [4]: "UNKNOWN" };

export const PlayAgeRangeDeclarationUserStatus = obj;
export const PlayAgeRangeDeclarationUserStatusString = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, obj.VERIFIED, "VERIFIED"), obj.SUPERVISED, "SUPERVISED"), obj.SUPERVISED_APPROVAL_PENDING, "SUPERVISED_APPROVAL_PENDING"), obj.SUPERVISED_APPROVAL_DENIED, "SUPERVISED_APPROVAL_DENIED"), obj.UNKNOWN, "UNKNOWN");
