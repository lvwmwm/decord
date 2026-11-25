// Module ID: 5204
// Function ID: 5205
// Name: Portal
// Dependencies: [5205, 5209, 5211, 5206, 5213]

// Module 5204 (Portal)
import _mod5205 from "module_5205" /* 5205 */;
import _mod5206 from "module_5206" /* 5206 */;
import PortalHost from "PortalHost" /* 5209 */;
import PortalProvider from "PortalProvider" /* 5211 */;
import print from "print" /* 5213 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5205.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5206.usePortal;
export const enableLogging = print.enableLogging;
