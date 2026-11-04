// Module ID: 5338
// Function ID: 5339
// Name: Portal
// Dependencies: [5339, 5343, 5345, 5340, 5347]

// Module 5338 (Portal)
import _mod5339 from "module_5339" /* 5339 */;
import _mod5340 from "module_5340" /* 5340 */;
import PortalHost from "PortalHost" /* 5343 */;
import PortalProvider from "PortalProvider" /* 5345 */;
import print from "print" /* 5347 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5339.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5340.usePortal;
export const enableLogging = print.enableLogging;
