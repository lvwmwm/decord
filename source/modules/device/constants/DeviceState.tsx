// Module ID: 6988
// Function ID: 55881
// Name: ThermalState
// Dependencies: [284214097]

// Module 6988 (ThermalState)
let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: obj.UNKNOWN };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;
