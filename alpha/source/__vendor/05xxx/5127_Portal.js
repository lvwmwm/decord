// Module ID: 5127
// Function ID: 5128
// Name: Portal
// Dependencies: [5128, 5132, 5134, 5129, 5136]

// Module 5127 (Portal)
import _mod5128 from "module_5128" /* 5128 */;
import _mod5129 from "module_5129" /* 5129 */;
import PortalHost from "PortalHost" /* 5132 */;
import PortalProvider from "PortalProvider" /* 5134 */;
import print from "print" /* 5136 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5128.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5129.usePortal;
export const enableLogging = print.enableLogging;
