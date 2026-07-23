// Module ID: 10685
// Function ID: 83282
// Name: useHasVideoPermission
// Dependencies: [1838, 3758, 566, 6967, 2]
// Exports: default, getVideoPermission

// Module 10685 (useHasVideoPermission)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != _private;
    if (tmp) {
      let isPrivateResult = _private.isPrivate();
      if (!isPrivateResult) {
        const obj = _private(outer1_1[3]);
        isPrivateResult = obj.canStreamInChannel(_private, outer1_2, outer1_3, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  }, items1);
};
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = require(6967) /* _createForOfIteratorHelperLoose */;
    isPrivateResult = obj.canStreamInChannel(channel, _createForOfIteratorHelperLoose, _isNativeReflectConstruct, false);
  }
  return isPrivateResult;
};
