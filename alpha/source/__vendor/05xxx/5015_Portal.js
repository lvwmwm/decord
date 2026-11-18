// Module ID: 5015
// Function ID: 5016
// Name: Portal
// Dependencies: [5016, 5020, 5022, 5017, 5024]

// Module 5015 (Portal)
import _mod5016 from "module_5016" /* 5016 */;
import _mod5017 from "module_5017" /* 5017 */;
import PortalHost from "PortalHost" /* 5020 */;
import PortalProvider from "PortalProvider" /* 5022 */;
import print from "print" /* 5024 */;

const PortalHost_export = PortalHost.PortalHost;
const PortalProvider_export = PortalProvider.PortalProvider;

export const Portal = _mod5016.Portal;
export { PortalHost_export as PortalHost };
export { PortalProvider_export as PortalProvider };
export const usePortal = _mod5017.usePortal;
export const enableLogging = print.enableLogging;
