// Module ID: 11653
// Function ID: 11654
// Name: isRetryableFetchError
// Dependencies: [2]
// Exports: default

// Module 11653 (isRetryableFetchError)
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
