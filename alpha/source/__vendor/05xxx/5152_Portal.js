// Module ID: 5152
// Function ID: 5153
// Name: Portal
// Dependencies: [5153, 5157, 5159, 5154, 5161]

// Module 5152 (Portal)
import _mod5153 from "module_5153" /* 5153 */;
import _mod5154 from "module_5154" /* 5154 */;
import PortalHost from "PortalHost" /* 5157 */;
import PortalProvider from "PortalProvider" /* 5159 */;
import print from "print" /* 5161 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5153.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5154.usePortal;
export const enableLogging = print.enableLogging;
