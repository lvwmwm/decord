// Module ID: 4952
// Function ID: 4953
// Name: Portal
// Dependencies: [4953, 4957, 4959, 4954, 4961]

// Module 4952 (Portal)
import _mod4953 from "module_4953" /* 4953 */;
import _mod4954 from "module_4954" /* 4954 */;
import PortalHost from "PortalHost" /* 4957 */;
import PortalProvider from "PortalProvider" /* 4959 */;
import print from "print" /* 4961 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4953.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4954.usePortal;
export const enableLogging = print.enableLogging;
