// Module ID: 804
// Function ID: 805
// Name: cleanupSessionDataForTransport
// Dependencies: []
// Exports: cleanupSessionDataForTransport, getClientInfoForTransport, getProtocolVersionForTransport, getSessionDataForTransport, storeSessionDataForTransport, updateSessionDataForTransport

// Module 804 (cleanupSessionDataForTransport)
let set;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
}
export function getClientInfoForTransport(transport) {
  const value = weakMap.get(transport);
  let clientInfo;
  if (value != null) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
}
export function getProtocolVersionForTransport(transport) {
  const value = weakMap.get(transport);
  let protocolVersion;
  if (value != null) {
    protocolVersion = value.protocolVersion;
  }
  return protocolVersion;
}
export function getSessionDataForTransport(transport) {
  return weakMap.get(transport);
}
export function storeSessionDataForTransport(self, result) {
  if (self.sessionId) {
    result = weakMap.set(self, result);
  }
}
export function updateSessionDataForTransport(sessionId, arg1) {
  if (sessionId.sessionId) {
    const obj = {};
    set = weakMap.set;
    const tmp2 = weakMap.get(sessionId) || {};
    const merged = Object.assign(tmp2);
    const merged1 = Object.assign(arg1);
    const result = set(sessionId, obj);
  }
}
