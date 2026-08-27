// Module ID: 11023
// Function ID: 11024
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 21, 11022, 8515, 2]
// Exports: default

// Module 11023 (AppStoreOverlayMediaModalWrapper)
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 8515 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(arg0) {
  const effect = React.useEffect(() => () => {
    const result = callback(table[2]).clearMediaModalFooterAction();
  }, []);
  const merged = Object.assign(arg0);
  return jsx(MediaModalSheetWrapperDefault, {});
};
