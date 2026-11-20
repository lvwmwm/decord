// Module ID: 4986
// Function ID: 4987
// Name: Portal
// Dependencies: [4987, 4991, 4993, 4988, 4995]

// Module 4986 (Portal)
import _mod4987 from "module_4987" /* 4987 */;
import _mod4988 from "module_4988" /* 4988 */;
import PortalHost from "PortalHost" /* 4991 */;
import PortalProvider from "PortalProvider" /* 4993 */;
import print from "print" /* 4995 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4987.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4988.usePortal;
export const enableLogging = print.enableLogging;
