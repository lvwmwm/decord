// Module ID: 14480
// Function ID: 14481
// Name: DerivedQosDataStorage
// Dependencies: [3, 13910, 2]
// Exports: setDerivedQosData

// Module 14480 (DerivedQosDataStorage)
import LoggerDefault from "Logger" /* 3 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13910 */;

const logger = new LoggerDefault("DerivedQosDataStorage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  logger.info("setDerivedQosData: userId: ", { userId: id, dataPresent: null != qosToken });
  if (null != id) {
    NativeFastConnectModuleDefault.setDerivedQosData(id, qosToken);
  }
};
