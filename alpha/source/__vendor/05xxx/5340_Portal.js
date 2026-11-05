// Module ID: 5340
// Function ID: 5341
// Name: Portal
// Dependencies: [5341, 5345, 5347, 5342, 5349]

// Module 5340 (Portal)
import _mod5341 from "module_5341" /* 5341 */;
import _mod5342 from "module_5342" /* 5342 */;
import PortalHost from "PortalHost" /* 5345 */;
import PortalProvider from "PortalProvider" /* 5347 */;
import print from "print" /* 5349 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5341.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5342.usePortal;
export const enableLogging = print.enableLogging;
