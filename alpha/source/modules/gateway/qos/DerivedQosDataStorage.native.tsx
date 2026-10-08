// Module ID: 14275
// Function ID: 14276
// Name: DerivedQosDataStorage
// Dependencies: [3, 14274, 2]
// Exports: setDerivedQosData

// Module 14275 (DerivedQosDataStorage)
import LoggerDefault from "Logger" /* 3 */;
import react_nativeDefault from "react-native" /* 14274 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("DerivedQosDataStorage");
const tmp2 = new LoggerDefault("DerivedQosDataStorage");
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  const obj = { userId: id, dataPresent: null != qosToken };
  logger.info("setDerivedQosData: userId: ", obj);
  if (null != id) {
    const obj2 = react_nativeDefault;
    obj2.setDerivedQosData(id, qosToken);
  }
};
