// Module ID: 5360
// Function ID: 5361
// Name: Portal
// Dependencies: [5361, 5365, 5367, 5362, 5369]

// Module 5360 (Portal)
import _mod5361 from "module_5361" /* 5361 */;
import _mod5362 from "module_5362" /* 5362 */;
import PortalHost from "PortalHost" /* 5365 */;
import PortalProvider from "PortalProvider" /* 5367 */;
import print from "print" /* 5369 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5361.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5362.usePortal;
export const enableLogging = print.enableLogging;
