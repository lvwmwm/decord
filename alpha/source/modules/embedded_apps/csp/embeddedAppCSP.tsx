// Module ID: 11492
// Function ID: 11493
// Name: embeddedAppCSP
// Dependencies: [2]
// Exports: deriveIframeCSPAttributeFromPolicy

// Module 11492 (embeddedAppCSP)
import size from "module_2" /* 2 */;

let c0 = "object-src 'none'";
const result = size.fileFinishedImporting("modules/embedded_apps/csp/embeddedAppCSP.tsx");

export const EMBEDDED_APP_FRAME_CSP = "object-src 'none'";
export const deriveIframeCSPAttributeFromPolicy = function deriveIframeCSPAttributeFromPolicy(policy) {
  let tmp;
  if (!policy.thirdPartyFrames) {
    tmp = c0;
  }
  return tmp;
};
