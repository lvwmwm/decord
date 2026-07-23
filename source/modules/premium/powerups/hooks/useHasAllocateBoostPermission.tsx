// Module ID: 11545
// Function ID: 89898
// Name: getHasAllocateBoostPermission
// Dependencies: [1838, 3758, 482, 566, 2]
// Exports: default

// Module 11545 (getHasAllocateBoostPermission)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
function getHasAllocateBoostPermission(outer1_9, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != outer1_9.getGuildPermissions(guild)) {
      canResult = outer1_9.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
}
const result = require("sum").fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => outer1_5(outer1_3, outer1_2.getGuild(closure_0)));
};
export { getHasAllocateBoostPermission };
