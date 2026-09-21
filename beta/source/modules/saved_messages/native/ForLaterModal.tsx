// Module ID: 8111
// Function ID: 8112
// Name: ForLaterModal
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 1616, 1119, 8109, 8112, 1368, 5839, 4961, 5848, 13593, 2]

// Module 8111 (ForLaterModal)
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import HeaderShared from "HeaderShared" /* 8112 */;
import ForLaterScreenDefault from "ForLaterScreen" /* 13593 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4758);
let obj2 = { modal: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" }, headerLeftContainer: null, headerRightContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = require("c").c(19);
  type = type.type;
  const tmp4 = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== type) {
    const intl = tmp(1119).intl;
    if (type === tmp(8109).SavedMessageSortTypes.REMINDER) {
      let aUXxzT = tmp(1119).t.aUXxzT;
    } else {
      aUXxzT = tmp(1119).t["2pAkDA"];
    }
    const stringResult = intl.string(aUXxzT);
    cResult[0] = type;
    cResult[1] = stringResult;
  } else {
    _require = tmp6;
    if (cResult[2] !== cResult[1]) {
      const fn = function u() {
        return React4(HeaderShared.GenericHeaderTitle, { title });
      };
      cResult[2] = tmp6;
      cResult[3] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== top) {
      let num5 = 0;
      if (!tmpResult.isIOS()) {
        num5 = top;
      }
      cResult[4] = top;
      cResult[5] = num5;
      let tmp11 = num5;
      tmpResult = tmp(1368);
    } else {
      tmp11 = cResult[5];
    }
    const sum = tmp11 + tmp5(580).space.PX_8;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const headerCloseButton = tmp(5839).getHeaderCloseButton(tmp5(4961).pop);
      cResult[6] = headerCloseButton;
      let tmp14 = headerCloseButton;
      const tmpResult2 = tmp(5839);
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp4.headerLeftContainer) {
      if (cResult[8] === tmp4.headerRightContainer) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === sum) {
            if (cResult[11] === tmp6) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] !== type) {
              const obj2 = { type, onClose: tmp5(4961).pop };
              const tmp22 = closure_4(tmp5(13593), obj2, type);
              cResult[13] = type;
              cResult[14] = tmp22;
              let tmp19 = tmp22;
              const tmp5Result = tmp5(13593);
            } else {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp4.modal) {
              if (cResult[16] === tmp16) {
                if (cResult[17] === tmp19) {
                  let tmp23 = cResult[18];
                }
                return tmp23;
              }
            }
            const obj3 = { style: tmp4.modal, children: null };
            const items = [tmp16, tmp19];
            obj3.children = items;
            const tmp26 = closure_5(View, obj3);
            cResult[15] = tmp4.modal;
            cResult[16] = tmp16;
            cResult[17] = tmp19;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          }
        }
      }
    }
    const obj5 = { title: cResult[1], headerTitle: tmp10, headerTitleAlign: "center", headerStatusBarHeight: sum, headerLeft: tmp14, headerLeftContainerStyle: null, headerRightContainerStyle: null };
    ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp4);
    const tmp18 = closure_4(tmp(5848).Header, obj5);
    cResult[7] = tmp4.headerLeftContainer;
    cResult[8] = tmp4.headerRightContainer;
    cResult[9] = tmp10;
    cResult[10] = sum;
    cResult[11] = cResult[1];
    cResult[12] = tmp18;
    tmp16 = tmp18;
  }
}) : ((type) => {
  type = type.type;
  _require = undefined;
  const tmp = closure_6();
  const intl = require("util").intl;
  if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp4(1119).t.aUXxzT;
  } else {
    aUXxzT = tmp4(1119).t["2pAkDA"];
  }
  const stringResult = intl.string(aUXxzT);
  _require = stringResult;
  const obj = { style: tmp.modal, children: null };
  const obj3 = {
    title: stringResult,
    headerTitle() {
      return React4(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  let num = 0;
  if (!tmp4Result.isIOS()) {
    num = useSafeAreaInsetsDefault().top;
  }
  obj3.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  tmp4Result = require("PlatformUtils");
  const tmp7 = closure_5;
  const tmp8 = View;
  obj3.headerLeft = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  const items = [closure_4(require("module_5848").Header, obj3), ];
  const obj4 = { type, onClose: null };
  const tmp4Result2 = require("NavigatorHeader");
  obj4.onClose = ModalActionCreatorsDefault.pop;
  items[1] = closure_4(ForLaterScreenDefault, obj4, type);
  obj.children = items;
  return tmp7(tmp8, obj);
});
