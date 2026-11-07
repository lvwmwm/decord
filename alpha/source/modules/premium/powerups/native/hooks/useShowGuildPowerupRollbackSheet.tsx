// Module ID: 14327
// Function ID: 14328
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: [32, 19, 4986, 14328, 7641, 14330, 5374, 2]
// Exports: default

// Module 14327 (useShowGuildPowerupRollbackSheet)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 14330 */;
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
  ({ shouldShow, modalConfig } = first(14328)(arg0, arg1));
  const tmp2 = first(14328)(arg0, arg1);
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
  let obj = modalConfig(7641);
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
