// Module ID: 500
// Function ID: 501
// Name: QosToken
// Dependencies: [501, 3, 13688, 1235, 2]
// Exports: buildQosToken

// Module 500 (QosToken)
import LoggerDefault from "Logger" /* 3 */;
import ProtoUtils from "ProtoUtils" /* 1235 */;
import qos_token from "qos_token" /* 13688 */;
import DerivedQosDataStore from "DerivedQosDataStore" /* 501 */;
import size from "module_2" /* 2 */;

function buildQosTokenFromDerivedData(derivedQosData, isActive) {
  let derived;
  const ClientProvidedQosData = qos_token.ClientProvidedQosData;
  const obj = { isActive };
  const obj2 = ClientProvidedQosData.create(obj);
  if (null != derivedQosData) {
    try {
      const tmp2Result = ProtoUtils;
      derived = tmp2Result.b64ToProto(tmp2(13688).DerivedQosData, derivedQosData);
    } catch (tmp5) {
      const _HermesInternal = HermesInternal;
      logger.warn("Failed to decode derived QOS data: " + tmp5);
    }
  }
  const tmp2Result2 = ProtoUtils;
  return tmp2Result2.protoToB64(qos_token.QosToken, { clientProvided: obj2, derived });
}
const tmp2 = new LoggerDefault("QOS");
const logger = tmp2;
const result = size.fileFinishedImporting("modules/gateway/qos/QosToken.tsx");

export { buildQosTokenFromDerivedData };
export const buildQosToken = function buildQosToken(userId, isUserActive) {
  return buildQosTokenFromDerivedData(DerivedQosDataStore.getForUser(userId), isUserActive);
};
