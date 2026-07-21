// Module ID: 13351
// Function ID: 101565
// Name: USE_ALT_GATEWAY_KEY
// Dependencies: []
// Exports: useShouldUseAltGateway

// Module 13351 (USE_ALT_GATEWAY_KEY)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enableAltGateway: false }, variations: { [1]: { enableAltGateway: false }, [2]: { enableAltGateway: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = require(dependencyMap[2]).USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};
