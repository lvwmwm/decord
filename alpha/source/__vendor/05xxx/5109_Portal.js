// Module ID: 5109
// Function ID: 5110
// Name: Portal
// Dependencies: [5110, 5114, 5116, 5111, 5118]

// Module 5109 (Portal)
import _mod5110 from "module_5110" /* 5110 */;
import _mod5111 from "module_5111" /* 5111 */;
import PortalHost from "PortalHost" /* 5114 */;
import PortalProvider from "PortalProvider" /* 5116 */;
import print from "print" /* 5118 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5110.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5111.usePortal;
export const enableLogging = print.enableLogging;
