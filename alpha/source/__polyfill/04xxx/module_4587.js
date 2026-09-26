// Module ID: 4587
// Function ID: 4588
// Dependencies: [19]
// Exports: c

// Module 4587
import _mod19 from "module_19" /* 19 */;

const constants = _mod19.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

export const c = (arg0) => {
  const H = constants.H;
  return H.useMemoCache(arg0);
};
