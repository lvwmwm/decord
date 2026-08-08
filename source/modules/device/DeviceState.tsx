// Module ID: 7209
// Function ID: 7210
// Name: DeviceState
// Dependencies: [7210, 2, 7211]
// Exports: logDeviceState

// Module 7209 (DeviceState)
const result = require("ThermalState").fileFinishedImporting("modules/device/DeviceState.tsx");

export const DeviceState = require("ThermalState").DeviceState;
export const ThermalState = require("ThermalState").ThermalState;
export const getDeviceState = require("_getDeviceState").getDeviceState;
export const logDeviceState = function logDeviceState(thermalState) {
  if (null !== thermalState) {
    const logger2 = require(7210) /* _getDeviceState */.logger;
    logger2.info("Device State Information:");
    const logger3 = require(7210) /* _getDeviceState */.logger;
    const _HermesInternal = HermesInternal;
    logger3.info("- Thermal State: " + thermalState.thermalState);
    const logger4 = require(7210) /* _getDeviceState */.logger;
    const _HermesInternal2 = HermesInternal;
    logger4.info("- Battery Level: " + 100 * thermalState.batteryLevel + "%");
    const logger5 = require(7210) /* _getDeviceState */.logger;
    let str6 = "Disabled";
    if (thermalState.isLowPowerMode) {
      str6 = "Enabled";
    }
    logger5.info(`- Low Power Mode: ${str6}`);
  } else {
    const logger = require(7210) /* _getDeviceState */.logger;
    logger.info("Device state not available");
  }
};
