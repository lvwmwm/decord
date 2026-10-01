// Module ID: 12007
// Function ID: 12008
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: [32, 19, 2042, 12008, 6806, 12010, 4800, 2]
// Exports: default

// Module 12007 (useShowGuildPowerupRollbackSheet)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 12010 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let closure_2;
  let first;
  let modalConfig;
  let ref;
  let shouldShow;
  let tmp7;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = dependencyMap;
  ({ shouldShow, modalConfig } = first(12008)(arg0, arg1));
  const tmp2 = first(12008)(arg0, arg1);
  if (shouldShow) {
    shouldShow = null != modalConfig;
  }
  if (shouldShow) {
    shouldShow = !flag;
  }
  const items = [];
  if (shouldShow) {
    items.push(modalConfig.dismissibleContent);
  }
  let obj = modalConfig(6806);
  [first, tmp7] = obj.useSelectedDismissibleContent(items);
  dependencyMap = tmp7;
  _slicedToArray = react.useRef(false);
  const items1 = [first, modalConfig, tmp7];
  const effect = react.useEffect(() => {
    let bodies;
    let fn;
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = null == modalConfig;
    }
    if (!current) {
      current = first !== modalConfig.dismissibleContent;
    }
    if (!current) {
      tmp.current = true;
      let obj = {
        header: null,
        body: bodies.join("\n\n"),
        ctaText: modalConfig.primaryButtonText,
        onCtaPress: fn,
        onDismiss() {
            closure_1_2(constants.USER_DISMISS);
          }
      };
      ({ header: obj.header, bodies } = modalConfig);
      fn = undefined;
      const tmp8 = openGuildPowerupRollbackSheetDefault;
      if (null != modalConfig.primaryButtonText) {
        fn = () => {
          closure_1_2(constants.TAKE_ACTION);
          const obj = first(closure_2[6]);
          obj.hideActionSheet(modalConfig(closure_2[5]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
        };
      }
      tmp8(obj);
    }
  }, items1);
};
