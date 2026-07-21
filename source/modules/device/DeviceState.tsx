// Module ID: 6987
// Function ID: 55886
// Name: DeviceState
// Dependencies: []
// Exports: logDeviceState

// Module 6987 (DeviceState)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/device/DeviceState.tsx");

export const DeviceState = require(dependencyMap[2]).DeviceState;
export const ThermalState = require(dependencyMap[2]).ThermalState;
export const getDeviceState = require(dependencyMap[0]).getDeviceState;
export const logDeviceState = function logDeviceState(thermalState) {
  if (null !== thermalState) {
    const logger2 = require(dependencyMap[0]).logger;
    logger2.info("Device State Information:");
    const logger3 = require(dependencyMap[0]).logger;
    const _HermesInternal = HermesInternal;
    logger3.info("- Thermal State: " + thermalState.thermalState);
    const logger4 = require(dependencyMap[0]).logger;
    const _HermesInternal2 = HermesInternal;
    logger4.info("- Battery Level: " + 100 * thermalState.batteryLevel + "%");
    const logger5 = require(dependencyMap[0]).logger;
    let str6 = "Disabled";
    if (thermalState.isLowPowerMode) {
      str6 = "Enabled";
    }
    logger5.info(`- Low Power Mode: ${str6}`);
  } else {
    const logger = require(dependencyMap[0]).logger;
    logger.info("Device state not available");
  }
};
