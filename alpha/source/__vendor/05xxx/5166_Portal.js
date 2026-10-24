// Module ID: 5166
// Function ID: 5167
// Name: Portal
// Dependencies: [5167, 5171, 5173, 5168, 5175]

// Module 5166 (Portal)
import _mod5167 from "module_5167" /* 5167 */;
import _mod5168 from "module_5168" /* 5168 */;
import PortalHost from "PortalHost" /* 5171 */;
import PortalProvider from "PortalProvider" /* 5173 */;
import print from "print" /* 5175 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5167.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5168.usePortal;
export const enableLogging = print.enableLogging;
