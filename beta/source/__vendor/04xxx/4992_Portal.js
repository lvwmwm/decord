// Module ID: 4992
// Function ID: 4993
// Name: Portal
// Dependencies: [4993, 4997, 4999, 4994, 5001]

// Module 4992 (Portal)
import _mod4993 from "module_4993" /* 4993 */;
import _mod4994 from "module_4994" /* 4994 */;
import PortalHost from "PortalHost" /* 4997 */;
import PortalProvider from "PortalProvider" /* 4999 */;
import print from "print" /* 5001 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4993.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4994.usePortal;
export const enableLogging = print.enableLogging;
