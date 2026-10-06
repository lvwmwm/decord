// Module ID: 4710
// Function ID: 4711
// Name: Portal
// Dependencies: [4711, 4715, 4717, 4712, 4719]

// Module 4710 (Portal)
import _mod4711 from "module_4711" /* 4711 */;
import _mod4712 from "module_4712" /* 4712 */;
import PortalHost from "PortalHost" /* 4715 */;
import PortalProvider from "PortalProvider" /* 4717 */;
import print from "print" /* 4719 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4711.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4712.usePortal;
export const enableLogging = print.enableLogging;
