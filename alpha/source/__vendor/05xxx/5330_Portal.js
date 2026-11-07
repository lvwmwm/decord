// Module ID: 5330
// Function ID: 5331
// Name: Portal
// Dependencies: [5331, 5335, 5337, 5332, 5339]

// Module 5330 (Portal)
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import PortalHost from "PortalHost" /* 5335 */;
import PortalProvider from "PortalProvider" /* 5337 */;
import print from "print" /* 5339 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5331.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5332.usePortal;
export const enableLogging = print.enableLogging;
