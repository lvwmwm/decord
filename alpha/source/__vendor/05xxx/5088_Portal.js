// Module ID: 5088
// Function ID: 5089
// Name: Portal
// Dependencies: [5089, 5093, 5095, 5090, 5097]

// Module 5088 (Portal)
import _mod5089 from "module_5089" /* 5089 */;
import _mod5090 from "module_5090" /* 5090 */;
import PortalHost from "PortalHost" /* 5093 */;
import PortalProvider from "PortalProvider" /* 5095 */;
import print from "print" /* 5097 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5089.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5090.usePortal;
export const enableLogging = print.enableLogging;
