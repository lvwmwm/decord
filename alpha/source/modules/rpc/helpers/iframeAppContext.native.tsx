// Module ID: 15894
// Function ID: 15895
// Name: iframeAppContext
// Dependencies: [1071, 2]
// Exports: getAppContextForIframeId

// Module 15894 (iframeAppContext)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const AppContext = Constants.AppContext;
const result = size.fileFinishedImporting("modules/rpc/helpers/iframeAppContext.native.tsx");

export function getAppContextForIframeId() {
  return AppContext.APP;
}
