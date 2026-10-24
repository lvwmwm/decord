// Module ID: 11316
// Function ID: 11317
// Name: isRetryableFetchError
// Dependencies: [2]
// Exports: default

// Module 11316 (isRetryableFetchError)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/isRetryableFetchError.tsx");

export default function isRetryableFetchError(status) {
  status = status.status;
  let tmp = null != status;
  if (tmp) {
    let tmp2 = 429 === status;
    if (!tmp2) {
      tmp2 = status >= 500 && 503 !== status;
      const tmp3 = status >= 500 && 503 !== status;
    }
    tmp = tmp2;
  }
  return tmp;
};
