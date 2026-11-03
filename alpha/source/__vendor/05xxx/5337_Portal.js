// Module ID: 5337
// Function ID: 5338
// Name: Portal
// Dependencies: [5338, 5342, 5344, 5339, 5346]

// Module 5337 (Portal)
import _mod5338 from "module_5338" /* 5338 */;
import _mod5339 from "module_5339" /* 5339 */;
import PortalHost from "PortalHost" /* 5342 */;
import PortalProvider from "PortalProvider" /* 5344 */;
import print from "print" /* 5346 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5338.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5339.usePortal;
export const enableLogging = print.enableLogging;
