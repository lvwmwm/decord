// Module ID: 5051
// Function ID: 5052
// Name: Portal
// Dependencies: [5052, 5056, 5058, 5053, 5060]

// Module 5051 (Portal)
import _mod5052 from "module_5052" /* 5052 */;
import _mod5053 from "module_5053" /* 5053 */;
import PortalHost from "PortalHost" /* 5056 */;
import PortalProvider from "PortalProvider" /* 5058 */;
import print from "print" /* 5060 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5052.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5053.usePortal;
export const enableLogging = print.enableLogging;
