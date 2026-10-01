// Module ID: 14113
// Function ID: 14114
// Name: GatewayAltEndpointExperiment
// Dependencies: [1435, 2, 14114]
// Exports: useShouldUseAltGateway

// Module 14113 (GatewayAltEndpointExperiment)
import GatewayAltEndpointCache from "GatewayAltEndpointCache" /* 14114 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableAltGateway: false } };
obj2[2] = { enableAltGateway: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = GatewayAltEndpointCache.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  const obj = { location: App };
  return closure_0.useConfig(obj).enableAltGateway;
};
