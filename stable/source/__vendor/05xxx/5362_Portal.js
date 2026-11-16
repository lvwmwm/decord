// Module ID: 5362
// Function ID: 5363
// Name: Portal
// Dependencies: [5363, 5367, 5369, 5364, 5371]

// Module 5362 (Portal)
import _mod5363 from "module_5363" /* 5363 */;
import _mod5364 from "module_5364" /* 5364 */;
import PortalHost from "PortalHost" /* 5367 */;
import PortalProvider from "PortalProvider" /* 5369 */;
import print from "print" /* 5371 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5363.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5364.usePortal;
export const enableLogging = print.enableLogging;
