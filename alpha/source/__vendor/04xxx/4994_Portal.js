// Module ID: 4994
// Function ID: 4995
// Name: Portal
// Dependencies: [4995, 4999, 5001, 4996, 5003]

// Module 4994 (Portal)
import _mod4995 from "module_4995" /* 4995 */;
import _mod4996 from "module_4996" /* 4996 */;
import PortalHost from "PortalHost" /* 4999 */;
import PortalProvider from "PortalProvider" /* 5001 */;
import print from "print" /* 5003 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4995.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4996.usePortal;
export const enableLogging = print.enableLogging;
