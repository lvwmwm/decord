// Module ID: 7506
// Function ID: 7507
// Name: ThermalState
// Dependencies: [2]

// Module 7506 (ThermalState)
import set from "set" /* 2 */;

let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };
const result = set.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;
