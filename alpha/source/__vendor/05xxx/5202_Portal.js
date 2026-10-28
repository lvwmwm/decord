// Module ID: 5202
// Function ID: 5203
// Name: Portal
// Dependencies: [5203, 5207, 5209, 5204, 5211]

// Module 5202 (Portal)
import _mod5203 from "module_5203" /* 5203 */;
import _mod5204 from "module_5204" /* 5204 */;
import PortalHost from "PortalHost" /* 5207 */;
import PortalProvider from "PortalProvider" /* 5209 */;
import print from "print" /* 5211 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5203.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5204.usePortal;
export const enableLogging = print.enableLogging;
