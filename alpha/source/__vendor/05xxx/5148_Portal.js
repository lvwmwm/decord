// Module ID: 5148
// Function ID: 5149
// Name: Portal
// Dependencies: [5149, 5153, 5155, 5150, 5157]

// Module 5148 (Portal)
import _mod5149 from "module_5149" /* 5149 */;
import _mod5150 from "module_5150" /* 5150 */;
import PortalHost from "PortalHost" /* 5153 */;
import PortalProvider from "PortalProvider" /* 5155 */;
import print from "print" /* 5157 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5149.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5150.usePortal;
export const enableLogging = print.enableLogging;
