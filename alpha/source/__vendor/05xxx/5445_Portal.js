// Module ID: 5445
// Function ID: 5446
// Name: Portal
// Dependencies: [5446, 5450, 5452, 5447, 5454]

// Module 5445 (Portal)
import _mod5446 from "module_5446" /* 5446 */;
import _mod5447 from "module_5447" /* 5447 */;
import PortalHost from "PortalHost" /* 5450 */;
import PortalProvider from "PortalProvider" /* 5452 */;
import print from "print" /* 5454 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5446.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5447.usePortal;
export const enableLogging = print.enableLogging;
