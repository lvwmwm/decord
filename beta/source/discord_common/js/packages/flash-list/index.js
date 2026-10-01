// Module ID: 8179
// Function ID: 8180
// Name: defaultMVCPConfig
// Dependencies: [19, 17, 21, 1364, 6270, 4566, 6269, 6045, 2]

// Module 8179 (defaultMVCPConfig)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod6270 from "module_6270" /* 6270 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

let obj;

const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
function noop() {

}
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let maintainVisibleContentPosition;
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const FlashList = _mod6270.FlashList;
  const merged = Object.assign(arg0);
  return <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg1} />;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(_mod6270.FlashList);
const forwardRefResult1 = react.forwardRef((arg0, ref) => {
  let maintainVisibleContentPosition;
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg1} />;
});
const forwardRefResult2 = react.forwardRef((arg0, ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
  const FlashList = _mod6270.FlashList;
  const merged1 = Object.assign(merged);
  return <FlashList ref={arg1} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
});
ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(_mod6270.FlashList);
const forwardRefResult3 = react.forwardRef((arg0, ref) => {
  let maintainVisibleContentPosition;
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  const memo = react.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        tmp2 = tmp;
        obj = PlatformUtils;
        if (obj.isIOS()) {
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, refreshControl: memo };
  refreshControl(6269);
  const merged1 = Object.assign(merged);
  return <tmp3 ref={arg1} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={memo} />;
});
const forwardRefResult4 = react.forwardRef((arg0, ref) => {
  let maintainVisibleContentPosition;
  let memo;
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: preventNativeModalDismiss(6045).BottomSheetScrollView, refreshControl: memo };
  memo = react.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        tmp2 = tmp;
        obj = PlatformUtils;
        if (obj.isIOS()) {
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  const merged1 = Object.assign(merged);
  return <closure_9 ref={arg1} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={preventNativeModalDismiss(6045).BottomSheetScrollView} refreshControl={memo} />;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in _mod6270) {
  exports[key10063] = _mod6270[key10063];
  continue;
}
const FlashList_export = forwardRefResult;

export { defaultMVCPConfig };
export { FlashList_export as FlashList };
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = forwardRefResult4;
