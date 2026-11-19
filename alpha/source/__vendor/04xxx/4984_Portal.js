// Module ID: 4984
// Function ID: 4985
// Name: Portal
// Dependencies: [4985, 4989, 4991, 4986, 4993]

// Module 4984 (Portal)
import _mod4985 from "module_4985" /* 4985 */;
import _mod4986 from "module_4986" /* 4986 */;
import PortalHost from "PortalHost" /* 4989 */;
import PortalProvider from "PortalProvider" /* 4991 */;
import print from "print" /* 4993 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4985.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4986.usePortal;
export const enableLogging = print.enableLogging;
