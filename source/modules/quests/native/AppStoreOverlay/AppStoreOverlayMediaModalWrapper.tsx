// Module ID: 10742
// Function ID: 10743
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 21, 10741, 9045, 2]
// Exports: default

// Module 10742 (AppStoreOverlayMediaModalWrapper)
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 9045 */;
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
