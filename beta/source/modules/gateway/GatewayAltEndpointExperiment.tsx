// Module ID: 14115
// Function ID: 14116
// Name: GatewayAltEndpointExperiment
// Dependencies: [1441, 558, 576, 2, 14116]

// Module 14115 (GatewayAltEndpointExperiment)
import react from "react" /* 576 */;
import GatewayAltEndpointCache from "GatewayAltEndpointCache" /* 14116 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableAltGateway: false } };
obj2[2] = { enableAltGateway: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enableAltGateway;
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj).enableAltGateway;
});
const result = size.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = GatewayAltEndpointCache.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = tmp2;
