// Module ID: 5203
// Function ID: 5204
// Name: Portal
// Dependencies: [5204, 5208, 5210, 5205, 5212]

// Module 5203 (Portal)
import _mod5204 from "module_5204" /* 5204 */;
import _mod5205 from "module_5205" /* 5205 */;
import PortalHost from "PortalHost" /* 5208 */;
import PortalProvider from "PortalProvider" /* 5210 */;
import print from "print" /* 5212 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5204.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5205.usePortal;
export const enableLogging = print.enableLogging;
