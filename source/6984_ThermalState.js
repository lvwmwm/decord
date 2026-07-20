// Module ID: 6984
// Function ID: 55870
// Name: ThermalState
// Dependencies: []

// Module 6984 (ThermalState)
let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: obj.UNKNOWN };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;
