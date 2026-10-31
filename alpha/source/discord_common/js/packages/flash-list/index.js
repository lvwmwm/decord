// Module ID: 7294
// Function ID: 7295
// Name: defaultMVCPConfig
// Dependencies: [19, 17, 21, 1375, 5500, 5095, 5499, 5275, 2]
// Exports: AnimatedFlashList, BottomSheetFlashList, BottomSheetMasonryFlashList, FlashList, MasonryFlashList

// Module 7294 (defaultMVCPConfig)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod5500 from "module_5500" /* 5500 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 5095 */;
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
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(_mod5500.FlashList);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(_mod5500.FlashList);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10048 in _mod5500) {
  exports[key10048] = _mod5500[key10048];
  continue;
}

export { defaultMVCPConfig };
export const FlashList = (ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const FlashList = _mod5500.FlashList;
  const merged1 = Object.assign(merged);
  return <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg0.ref} />;
};
export const AnimatedFlashList = (ref) => {
  let maintainVisibleContentPosition;
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref: ref.ref };
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return <closure_8 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg0.ref} />;
};
export const MasonryFlashList = (ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, ref: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
  const FlashList = _mod5500.FlashList;
  const merged1 = Object.assign(merged);
  return <FlashList ref={arg0.ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
};
export const BottomSheetFlashList = (ref) => {
  let maintainVisibleContentPosition;
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = ref);
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
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
  refreshControl(5499);
  const merged1 = Object.assign(merged);
  return <tmp3 ref={arg0.ref} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={memo} />;
};
export const BottomSheetMasonryFlashList = (ref) => {
  let maintainVisibleContentPosition;
  let memo;
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = ref);
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: preventNativeModalDismiss(5275).BottomSheetScrollView, refreshControl: memo };
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
  return <closure_9 ref={arg0.ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={preventNativeModalDismiss(5275).BottomSheetScrollView} refreshControl={memo} />;
};
