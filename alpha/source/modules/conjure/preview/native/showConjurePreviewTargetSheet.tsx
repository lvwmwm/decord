// Module ID: 17017
// Function ID: 17018
// Name: showConjurePreviewTargetSheet
// Dependencies: [19, 21, 5055, 558, 576, 1126, 3827, 17016, 6266, 6892, 6267, 2]
// Exports: default

// Module 17017 (showConjurePreviewTargetSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

const jsx = Fragment.jsx;
const ConjurePreviewTarget = "ConjurePreviewTarget";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePreviewTargetSheet(targets) {
  let first;
  let onChange;
  let target;
  let obj = targets(576);
  const cResult = obj.c(13);
  targets = targets.targets;
  ({ target, onChange } = targets);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onChange(3827).I2ucou);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onChange) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === targets) {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== target) {
      const tmpResult = targets(17016);
      let previewTargetKeyResult = tmpResult.previewTargetKey(target);
      cResult[4] = target;
      cResult[5] = previewTargetKeyResult;
      tmp8 = previewTargetKeyResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== targets) {
      let tmp11;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(target) {
          const obj = targets(dependencyMap[7]);
          const previewTargetKeyResult = obj.previewTargetKey(target);
          const TableRadioRow = targets(dependencyMap[8]).TableRadioRow;
          const obj3 = targets(dependencyMap[7]);
          return <TableRadioRow key={previewTargetKeyResult} label={obj3.getPreviewTargetLabel(arg0)} value={previewTargetKeyResult} />;
        };
        cResult[8] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[8];
      }
      const mapped = targets.map(tmp11);
      cResult[6] = targets;
      cResult[7] = mapped;
      tmp10 = mapped;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp8) {
        let tmp13;
        if (cResult[11] === tmp10) {
          tmp13 = cResult[12];
        }
        return tmp13;
      }
    }
    const ActionSheet = tmp(6892).ActionSheet;
    let obj3 = { title: first, accessibilityLabel: first, hasIcons: false, value: tmp8, onChange: tmp7, children: tmp10 };
    const tmp15 = <ActionSheet>{null}</ActionSheet>;
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp10;
    cResult[12] = tmp15;
    tmp13 = tmp15;
  }
  const fn = function s(arg0) {
    let closure_0 = arg0;
    const found = targets.find((item) => {
      const obj = targets(closure_2_2[7]);
      return obj.previewTargetKey(item) === closure_0;
    });
    if (null != found) {
      onChange(found);
    }
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjurePreviewTarget);
  };
  cResult[1] = onChange;
  cResult[2] = targets;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function ConjurePreviewTargetSheet(targets) {
  let obj3;
  targets = targets.targets;
  const onChange = targets.onChange;
  const target = targets.target;
  const intl = targets(1126).intl;
  const stringResult = intl.string(onChange(3827).I2ucou);
  const items = [onChange, targets];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = targets.find((item) => {
      const obj = targets(closure_2_2[7]);
      return obj.previewTargetKey(item) === closure_0;
    });
    if (null != found) {
      onChange(found);
    }
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjurePreviewTarget);
  }, items);
  const ActionSheet = targets(6892).ActionSheet;
  ({
    title: stringResult,
    accessibilityLabel: stringResult,
    hasIcons: false,
    value: obj3.previewTargetKey(target),
    onChange: callback,
    children: targets.map((item) => {
      const obj = targets(dependencyMap[7]);
      const previewTargetKeyResult = obj.previewTargetKey(item);
      const TableRadioRow = targets(dependencyMap[8]).TableRadioRow;
      const obj3 = targets(dependencyMap[7]);
      return <TableRadioRow key={previewTargetKeyResult} label={obj3.getPreviewTargetLabel(arg0)} value={previewTargetKeyResult} />;
    })
  });
  const TableRadioGroup = targets(6267).TableRadioGroup;
  obj3 = targets(17016);
  return <ActionSheet>{null}</ActionSheet>;
});
let closure_6 = tmp2;
const result = size.fileFinishedImporting("modules/conjure/preview/native/showConjurePreviewTargetSheet.tsx");

export default function showConjurePreviewTargetSheet(arg0) {
  const obj = { content: null, key: ConjurePreviewTarget };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
export const ConjurePreviewTargetSheet = tmp2;
