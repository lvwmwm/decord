// Module ID: 5164
// Function ID: 5165
// Name: Portal
// Dependencies: [5165, 5169, 5171, 5166, 5173]

// Module 5164 (Portal)
import _mod5165 from "module_5165" /* 5165 */;
import _mod5166 from "module_5166" /* 5166 */;
import PortalHost from "PortalHost" /* 5169 */;
import PortalProvider from "PortalProvider" /* 5171 */;
import print from "print" /* 5173 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5165.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5166.usePortal;
export const enableLogging = print.enableLogging;
