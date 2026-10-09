// Module ID: 4953
// Function ID: 4954
// Name: Portal
// Dependencies: [4954, 4958, 4960, 4955, 4962]

// Module 4953 (Portal)
import _mod4954 from "module_4954" /* 4954 */;
import _mod4955 from "module_4955" /* 4955 */;
import PortalHost from "PortalHost" /* 4958 */;
import PortalProvider from "PortalProvider" /* 4960 */;
import print from "print" /* 4962 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod4954.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod4955.usePortal;
export const enableLogging = print.enableLogging;
