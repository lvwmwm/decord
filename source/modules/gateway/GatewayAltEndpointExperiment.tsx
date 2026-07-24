// Module ID: 13527
// Function ID: 104103
// Name: USE_ALT_GATEWAY_KEY
// Dependencies: [1428, 2, 13528]
// Exports: useShouldUseAltGateway

// Module 13527 (USE_ALT_GATEWAY_KEY)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: { [1]: { enableAltGateway: false }, [2]: { enableAltGateway: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("USE_ALT_GATEWAY_KEY").fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = require("USE_ALT_GATEWAY_KEY").USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};
