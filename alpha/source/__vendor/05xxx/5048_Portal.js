// Module ID: 5048
// Function ID: 5049
// Name: Portal
// Dependencies: [5049, 5053, 5055, 5050, 5057]

// Module 5048 (Portal)
import _mod5049 from "module_5049" /* 5049 */;
import _mod5050 from "module_5050" /* 5050 */;
import PortalHost from "PortalHost" /* 5053 */;
import PortalProvider from "PortalProvider" /* 5055 */;
import print from "print" /* 5057 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5049.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5050.usePortal;
export const enableLogging = print.enableLogging;
