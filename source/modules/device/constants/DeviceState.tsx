// Module ID: 6994
// Function ID: 55938
// Name: ThermalState
// Dependencies: [2]

// Module 6994 (ThermalState)
let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: null, batteryLevel: 1, isLowPowerMode: false };
obj.thermalState = obj.UNKNOWN;
const result = require("set").fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;
