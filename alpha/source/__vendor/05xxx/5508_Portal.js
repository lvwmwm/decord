// Module ID: 5508
// Function ID: 5509
// Name: Portal
// Dependencies: [5509, 5513, 5515, 5510, 5517]

// Module 5508 (Portal)
import _mod5509 from "module_5509" /* 5509 */;
import _mod5510 from "module_5510" /* 5510 */;
import PortalHost from "PortalHost" /* 5513 */;
import PortalProvider from "PortalProvider" /* 5515 */;
import print from "print" /* 5517 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5509.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5510.usePortal;
export const enableLogging = print.enableLogging;
