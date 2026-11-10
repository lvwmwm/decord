// Module ID: 5332
// Function ID: 5333
// Name: Portal
// Dependencies: [5333, 5337, 5339, 5334, 5341]

// Module 5332 (Portal)
import _mod5333 from "module_5333" /* 5333 */;
import _mod5334 from "module_5334" /* 5334 */;
import PortalHost from "PortalHost" /* 5337 */;
import PortalProvider from "PortalProvider" /* 5339 */;
import print from "print" /* 5341 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5333.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5334.usePortal;
export const enableLogging = print.enableLogging;
