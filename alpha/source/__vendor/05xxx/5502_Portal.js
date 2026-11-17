// Module ID: 5502
// Function ID: 5503
// Name: Portal
// Dependencies: [5503, 5507, 5509, 5504, 5511]

// Module 5502 (Portal)
import _mod5503 from "module_5503" /* 5503 */;
import _mod5504 from "module_5504" /* 5504 */;
import PortalHost from "PortalHost" /* 5507 */;
import PortalProvider from "PortalProvider" /* 5509 */;
import print from "print" /* 5511 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5503.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5504.usePortal;
export const enableLogging = print.enableLogging;
