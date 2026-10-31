// Module ID: 5214
// Function ID: 5215
// Name: Portal
// Dependencies: [5215, 5219, 5221, 5216, 5223]

// Module 5214 (Portal)
import _mod5215 from "module_5215" /* 5215 */;
import _mod5216 from "module_5216" /* 5216 */;
import PortalHost from "PortalHost" /* 5219 */;
import PortalProvider from "PortalProvider" /* 5221 */;
import print from "print" /* 5223 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5215.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5216.usePortal;
export const enableLogging = print.enableLogging;
