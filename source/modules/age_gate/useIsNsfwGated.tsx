// Module ID: 9136
// Function ID: 71520
// Name: useIsNsfwGated
// Dependencies: [4346, 1849, 566, 2]
// Exports: default

// Module 9136 (useIsNsfwGated)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  const _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [closure_3];
  const obj = _require(566);
  const tmp = false === _require(566).useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items1 = [_isNativeReflectConstruct];
  let tmp2 = !_require(566).useStateFromStores(items1, () => outer1_2.didAgree(nsfw.guild_id));
  if (nsfw) {
    if (!tmp2) {
      tmp2 = tmp;
    }
    nsfw = tmp2;
  }
  return nsfw;
};
