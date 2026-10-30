// Module ID: 5209
// Function ID: 5210
// Name: Portal
// Dependencies: [5210, 5214, 5216, 5211, 5218]

// Module 5209 (Portal)
import _mod5210 from "module_5210" /* 5210 */;
import _mod5211 from "module_5211" /* 5211 */;
import PortalHost from "PortalHost" /* 5214 */;
import PortalProvider from "PortalProvider" /* 5216 */;
import print from "print" /* 5218 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5210.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5211.usePortal;
export const enableLogging = print.enableLogging;
