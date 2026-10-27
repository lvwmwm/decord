// Module ID: 5167
// Function ID: 5168
// Name: Portal
// Dependencies: [5168, 5172, 5174, 5169, 5176]

// Module 5167 (Portal)
import _mod5168 from "module_5168" /* 5168 */;
import _mod5169 from "module_5169" /* 5169 */;
import PortalHost from "PortalHost" /* 5172 */;
import PortalProvider from "PortalProvider" /* 5174 */;
import print from "print" /* 5176 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5168.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5169.usePortal;
export const enableLogging = print.enableLogging;
