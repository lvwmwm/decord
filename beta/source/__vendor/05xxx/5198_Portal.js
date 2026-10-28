// Module ID: 5198
// Function ID: 5199
// Name: Portal
// Dependencies: [5199, 5203, 5205, 5200, 5207]

// Module 5198 (Portal)
import _mod5199 from "module_5199" /* 5199 */;
import _mod5200 from "module_5200" /* 5200 */;
import PortalHost from "PortalHost" /* 5203 */;
import PortalProvider from "PortalProvider" /* 5205 */;
import print from "print" /* 5207 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5199.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5200.usePortal;
export const enableLogging = print.enableLogging;
