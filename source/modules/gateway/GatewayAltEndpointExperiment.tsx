// Module ID: 13814
// Function ID: 13815
// Name: USE_ALT_GATEWAY_KEY
// Dependencies: [1452, 2, 13815]
// Exports: useShouldUseAltGateway

// Module 13814 (USE_ALT_GATEWAY_KEY)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enableAltGateway: false } };
obj[2] = { enableAltGateway: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: obj });
const result = require("USE_ALT_GATEWAY_KEY").fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = require("USE_ALT_GATEWAY_KEY").USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};
