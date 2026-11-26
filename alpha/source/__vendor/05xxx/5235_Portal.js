// Module ID: 5235
// Function ID: 5236
// Name: Portal
// Dependencies: [5236, 5240, 5242, 5237, 5244]

// Module 5235 (Portal)
import _mod5236 from "module_5236" /* 5236 */;
import _mod5237 from "module_5237" /* 5237 */;
import PortalHost from "PortalHost" /* 5240 */;
import PortalProvider from "PortalProvider" /* 5242 */;
import print from "print" /* 5244 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5236.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5237.usePortal;
export const enableLogging = print.enableLogging;
