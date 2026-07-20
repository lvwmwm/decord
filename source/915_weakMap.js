// Module ID: 915
// Function ID: 10029
// Name: weakMap
// Dependencies: []

// Module 915 (weakMap)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
arg5.cleanupSessionDataForTransport = function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
};
arg5.getClientInfoForTransport = function getClientInfoForTransport(transport) {
  const value = weakMap.get(transport);
  let clientInfo;
  if (null != value) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
};
arg5.getProtocolVersionForTransport = function getProtocolVersionForTransport(transport) {
  const value = weakMap.get(transport);
  let protocolVersion;
  if (null != value) {
    protocolVersion = value.protocolVersion;
  }
  return protocolVersion;
};
arg5.getSessionDataForTransport = function getSessionDataForTransport(transport) {
  return weakMap.get(transport);
};
arg5.storeSessionDataForTransport = function storeSessionDataForTransport(self, result) {
  if (self.sessionId) {
    result = weakMap.set(self, result);
  }
};
arg5.updateSessionDataForTransport = function updateSessionDataForTransport(self, result) {
  if (self.sessionId) {
    const _Object = Object;
    result = weakMap.set(self, Object.assign({}, weakMap.get(self) || {}, result));
    const tmp2 = weakMap.get(self) || {};
  }
};
