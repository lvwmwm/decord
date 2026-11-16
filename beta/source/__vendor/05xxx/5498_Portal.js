// Module ID: 5498
// Function ID: 5499
// Name: Portal
// Dependencies: [5499, 5503, 5505, 5500, 5507]

// Module 5498 (Portal)
import _mod5499 from "module_5499" /* 5499 */;
import _mod5500 from "module_5500" /* 5500 */;
import PortalHost from "PortalHost" /* 5503 */;
import PortalProvider from "PortalProvider" /* 5505 */;
import print from "print" /* 5507 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5499.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5500.usePortal;
export const enableLogging = print.enableLogging;
