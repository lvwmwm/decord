// Module ID: 4616
// Function ID: 4617
// Dependencies: [19]
// Exports: c

// Module 4616
import _mod19 from "module_19" /* 19 */;

const constants = _mod19.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

export const c = (arg0) => {
  const H = constants.H;
  return H.useMemoCache(arg0);
};
