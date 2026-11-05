// Module ID: 7433
// Function ID: 7434
// Name: defaultMVCPConfig
// Dependencies: [19, 17, 21, 1377, 5638, 1652, 5637, 5402, 2]
// Exports: AnimatedFlashList, BottomSheetFlashList, BottomSheetMasonryFlashList, FlashList, MasonryFlashList

// Module 7433 (defaultMVCPConfig)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod5638 from "module_5638" /* 5638 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import module_1652_mod from "module_1652" /* 1652 */;
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
let module_1652 = module_1652_mod;
let closure_8 = module_1652.createAnimatedComponent(_mod5638.FlashList);
module_1652 = module_1652_mod;
let closure_9 = module_1652.createAnimatedComponent(_mod5638.FlashList);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10048 in _mod5638) {
  exports[key10048] = _mod5638[key10048];
  continue;
}

export { defaultMVCPConfig };
export const FlashList = (ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const FlashList = _mod5638.FlashList;
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
  const FlashList = _mod5638.FlashList;
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
  refreshControl(5637);
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
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: preventNativeModalDismiss(5402).BottomSheetScrollView, refreshControl: memo };
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
  return <closure_9 ref={arg0.ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={preventNativeModalDismiss(5402).BottomSheetScrollView} refreshControl={memo} />;
};
