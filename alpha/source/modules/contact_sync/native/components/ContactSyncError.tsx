// Module ID: 13510
// Function ID: 13511
// Name: ContactSyncError
// Dependencies: [19, 21, 4792, 1655, 5002, 5383, 2]
// Exports: default

// Module 13510 (ContactSyncError)
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5002 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let num, obj;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "(function ContactSyncErrorTsx1(){let[withTiming,hasError,ERROR_HEIGHT]=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};})" };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  error = error.error;
  const style = error.style;
  let tmp = closure_4();
  const items = [closure_5, , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = timing_timing.withTiming;
  let tmp5 = null != error;
  if (tmp5) {
    tmp5 = "" !== error;
  }
  items[2] = tmp5;
  items[3] = 44;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class ContactSyncErrorTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = closure_2;
      }
      obj = { height: tmp(num) };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  ContactSyncErrorTsx1.__closure = items1;
  ContactSyncErrorTsx1.__workletHash = 13817117600464;
  ContactSyncErrorTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(ContactSyncErrorTsx1);
  const items2 = [tmp.container, style, animatedStyle];
  const View = _modDef1655.View;
  return <View style={items2}>{null}</View>;
};
