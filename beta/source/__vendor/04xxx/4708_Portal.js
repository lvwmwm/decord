// Module ID: 4708
// Function ID: 4709
// Name: Portal
// Dependencies: [4709, 4713, 4715, 4710, 4717]

// Module 4708 (Portal)
import _mod4709 from "module_4709" /* 4709 */;
import _mod4710 from "module_4710" /* 4710 */;
import PortalHost from "PortalHost" /* 4713 */;
import PortalProvider from "PortalProvider" /* 4715 */;
import print from "print" /* 4717 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4709.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4710.usePortal;
export const enableLogging = print.enableLogging;
