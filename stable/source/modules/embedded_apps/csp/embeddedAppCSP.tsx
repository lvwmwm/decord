// Module ID: 12886
// Function ID: 12887
// Name: embeddedAppCSP
// Dependencies: [2]
// Exports: deriveIframeCSPAttributeFromPolicy

// Module 12886 (embeddedAppCSP)
import size from "module_2" /* 2 */;

let c0 = "object-src 'none'";
const result = size.fileFinishedImporting("modules/embedded_apps/csp/embeddedAppCSP.tsx");

export const EMBEDDED_APP_FRAME_CSP = "object-src 'none'";
export function deriveIframeCSPAttributeFromPolicy(policy) {
  let tmp;
  if (!policy.thirdPartyFrames) {
    tmp = c0;
  }
  return tmp;
}
