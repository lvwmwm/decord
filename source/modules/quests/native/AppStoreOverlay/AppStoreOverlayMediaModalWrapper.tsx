// Module ID: 10703
// Function ID: 10704
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 21, 10702, 9008, 2]
// Exports: default

// Module 10703 (AppStoreOverlayMediaModalWrapper)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useMediaModalFooterActionStore").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(arg0) {
  const effect = React.useEffect(() => () => {
    const result = callback(table[2]).clearMediaModalFooterAction();
  }, []);
  const merged = Object.assign(arg0);
  return jsx(importDefault(9008), {});
};
