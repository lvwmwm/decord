// Module ID: 14917
// Function ID: 14918
// Name: useBadgeDirectoryNuxCoachmarkVariant
// Dependencies: [32, 19, 11453, 14918, 2]
// Exports: useBadgeDirectoryNuxCoachmarkVariant

// Module 14917 (useBadgeDirectoryNuxCoachmarkVariant)
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile" /* 11453 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const useBadgeDirectoryNuxPopoverVariant = tmp(14918);
let closure_4 = { variantProps: null, isPending: false };
let closure_5 = { variantProps: null, isPending: true };
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx");

export function useBadgeDirectoryNuxCoachmarkVariant(enabled) {
  let _location;
  let fetchCatalog;
  let isPending;
  let tmp5;
  let tmp6;
  let userId;
  let variantProps;
  enabled = enabled.enabled;
  ({ userId, fetchCatalog, location: _location } = enabled);
  const obj = useCanOpenBadgeDirectoryFromProfile;
  if (enabled) {
    enabled = obj.useCanOpenBadgeDirectoryFromProfile({ location: _location });
  }
  const tmpResult = useBadgeDirectoryNuxPopoverVariant;
  const badgeDirectoryNuxPopoverState = tmpResult.useBadgeDirectoryNuxPopoverState({ currentUserId: userId, enabled, fetchCatalog });
  ({ variantProps, isPending } = badgeDirectoryNuxPopoverState);
  [tmp5, tmp6] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (enabled) {
    if (null != tmp5) {
      return tmp5;
    } else if (isPending) {
      return closure_5;
    } else {
      const obj2 = { variantProps, isPending: false };
      tmp6(obj2);
      return obj2;
    }
  } else {
    if (null != tmp5) {
      tmp6(null);
    }
    return closure_4;
  }
}
