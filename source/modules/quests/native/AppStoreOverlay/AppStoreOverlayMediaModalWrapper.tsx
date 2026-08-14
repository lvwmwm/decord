// Module ID: 10575
// Function ID: 10576
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 21, 10574, 8923, 2]
// Exports: default

// Module 10575 (AppStoreOverlayMediaModalWrapper)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useMediaModalFooterActionStore").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(arg0) {
  const effect = React.useEffect(() => () => {
    const result = callback(table[2]).clearMediaModalFooterAction();
  }, []);
  const merged = Object.assign(arg0);
  return jsx(importDefault(8923), {});
};
