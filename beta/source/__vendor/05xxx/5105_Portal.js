// Module ID: 5105
// Function ID: 5106
// Name: Portal
// Dependencies: [5106, 5110, 5112, 5107, 5114]

// Module 5105 (Portal)
import _mod5106 from "module_5106" /* 5106 */;
import _mod5107 from "module_5107" /* 5107 */;
import PortalHost from "PortalHost" /* 5110 */;
import PortalProvider from "PortalProvider" /* 5112 */;
import print from "print" /* 5114 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5106.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5107.usePortal;
export const enableLogging = print.enableLogging;
