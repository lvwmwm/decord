// Module ID: 12674
// Function ID: 12675
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: [32, 19, 2042, 558, 568, 12675, 7632, 12677, 4725, 2]

// Module 12674 (useShowGuildPowerupRollbackSheet)
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 12677 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const cResult = modalConfig(568).c(9);
  let obj = modalConfig(568);
  const tmp = modalConfig;
  ({ shouldShow, modalConfig } = first(12675)(arg0, arg1));
  if (cResult[0] === modalConfig) {
    if (cResult[1] === shouldShow) {
      if (cResult[2] === tmp4) {
        let tmp6 = cResult[3];
      }
      const tmp11 = _slicedToArray(tmp(7632).useSelectedDismissibleContent(tmp6), 2);
      first = tmp11[0];
      dependencyMap = tmp13;
      _slicedToArray = noop.useRef(false);
      if (cResult[4] === tmp11[1]) {
        if (cResult[5] === modalConfig) {
          if (cResult[6] === first) {
            let tmp14 = cResult[7];
            let tmp15 = cResult[8];
          }
          const effect = obj3.useEffect(tmp14, tmp15);
        }
      }
      let fn = function f() {
        let current = ref.current;
        if (!current) {
          current = null == modalConfig;
        }
        if (!current) {
          current = first !== modalConfig.dismissibleContent;
        }
        if (!current) {
          ref.current = true;
          const obj = { header: null, body: null, ctaText: null, onCtaPress: null, onDismiss: null };
          ({ header: obj.header, bodies } = modalConfig);
          obj.body = bodies.join("\n\n");
          obj.ctaText = modalConfig.primaryButtonText;
          let fn;
          if (null != modalConfig.primaryButtonText) {
            fn = () => {
              dependencyMap(constants.TAKE_ACTION);
              first(4725).hideActionSheet(modalConfig(12677).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
            };
          }
          obj.onCtaPress = fn;
          obj.onDismiss = function onDismiss() {
            dependencyMap(constants.USER_DISMISS);
          };
          openGuildPowerupRollbackSheetDefault(obj);
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
      obj3 = noop;
      const tmpResult = tmp(7632);
    }
  }
  let tmp7 = shouldShow;
  if (shouldShow) {
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
}) : ((arg0, arg1) => {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ shouldShow, modalConfig } = first(12675)(arg0, arg1));
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
  const tmp2 = first(12675)(arg0, arg1);
  const tmp5 = _slicedToArray(modalConfig(7632).useSelectedDismissibleContent(items), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  _slicedToArray = noop.useRef(false);
  const items1 = [first, modalConfig, tmp5[1]];
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == modalConfig;
    }
    if (!current) {
      current = first !== modalConfig.dismissibleContent;
    }
    if (!current) {
      ref.current = true;
      const obj = { header: null, body: null, ctaText: null, onCtaPress: null, onDismiss: null };
      ({ header: obj.header, bodies } = modalConfig);
      obj.body = bodies.join("\n\n");
      obj.ctaText = modalConfig.primaryButtonText;
      let fn;
      if (null != modalConfig.primaryButtonText) {
        fn = () => {
          dependencyMap(constants.TAKE_ACTION);
          first(4725).hideActionSheet(modalConfig(12677).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
        };
      }
      obj.onCtaPress = fn;
      obj.onDismiss = function onDismiss() {
        dependencyMap(constants.USER_DISMISS);
      };
      openGuildPowerupRollbackSheetDefault(obj);
    }
  }, items1);
});
