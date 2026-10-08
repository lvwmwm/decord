// Module ID: 12262
// Function ID: 12263
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: [32, 19, 2060, 558, 576, 12263, 7090, 12265, 5054, 2]

// Module 12262 (useShowGuildPowerupRollbackSheet)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 12265 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowGuildPowerupRollbackSheet(arg0, arg1, arg2) {
  let closure_2;
  let first;
  let modalConfig;
  let ref;
  let shouldShow;
  let tmp = modalConfig;
  let obj = modalConfig(576);
  const cResult = obj.c(9);
  ({ shouldShow, modalConfig } = first(12263)(arg0, arg1));
  const tmp5 = first(12263)(arg0, arg1);
  if (cResult[0] === modalConfig) {
    if (cResult[1] === shouldShow) {
      let tmp6;
      if (cResult[2] === (undefined !== arg2 && arg2)) {
        tmp6 = cResult[3];
      }
      const tmpResult = tmp(7090);
      const tmp11 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp6), 2);
      first = tmp11[0];
      dependencyMap = tmp13;
      _slicedToArray = react.useRef(false);
      const obj3 = react;
      if (cResult[4] === tmp11[1]) {
        if (cResult[5] === modalConfig) {
          let tmp14;
          let tmp15;
          if (cResult[6] === first) {
            tmp14 = cResult[7];
            tmp15 = cResult[8];
          }
          const effect = obj3.useEffect(tmp14, tmp15);
        }
      }
      let fn = function b() {
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
              const obj = first(closure_2[8]);
              obj.hideActionSheet(modalConfig(closure_2[7]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
            };
          }
          tmp8(obj);
        }
      };
      const items = [first, modalConfig, tmp11[1]];
      cResult[4] = tmp11[1];
      cResult[5] = modalConfig;
      cResult[6] = first;
      cResult[7] = fn;
      cResult[8] = items;
      tmp15 = items;
      tmp14 = fn;
    }
  }
  let tmp7 = shouldShow;
  if (tmp7) {
    let tmp8 = null;
    tmp7 = null != modalConfig;
  }
  if (tmp7) {
    tmp7 = !tmp4;
  }
  const items1 = [];
  if (tmp7) {
    items1.push(modalConfig.dismissibleContent);
  }
  cResult[0] = modalConfig;
  cResult[1] = shouldShow;
  cResult[2] = undefined !== arg2 && arg2;
  cResult[3] = items1;
  tmp6 = items1;
}) : (function useShowGuildPowerupRollbackSheet(arg0, arg1) {
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
  ({ shouldShow, modalConfig } = first(12263)(arg0, arg1));
  const tmp2 = first(12263)(arg0, arg1);
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
  let obj = modalConfig(7090);
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
          const obj = first(closure_2[8]);
          obj.hideActionSheet(modalConfig(closure_2[7]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
        };
      }
      tmp8(obj);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default tmp2;
