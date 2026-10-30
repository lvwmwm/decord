// Module ID: 12051
// Function ID: 12052
// Name: showConjurePreviewTargetSheet
// Dependencies: [19, 21, 5253, 1114, 3865, 12050, 7360, 7052, 7055, 2]
// Exports: default

// Module 12051 (showConjurePreviewTargetSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

class ConjurePreviewTargetSheet {
  constructor(targets) {
    let obj3;
    targets = targets.targets;
    const onChange = targets.onChange;
    const target = targets.target;
    const intl = targets(1114).intl;
    const stringResult = intl.string(onChange(3865).I2ucou);
    const items = [onChange, targets];
    const callback = react.useCallback((arg0) => {
      let closure_0 = arg0;
      const found = targets.find((item) => {
        const obj = targets(closure_2_2[5]);
        return obj.previewTargetKey(item) === closure_0;
      });
      if (null != found) {
        onChange(found);
      }
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePreviewTarget);
    }, items);
    const ActionSheet = targets(7360).ActionSheet;
    ({
      title: stringResult,
      accessibilityLabel: stringResult,
      hasIcons: false,
      value: obj3.previewTargetKey(target),
      onChange: callback,
      children: targets.map((item) => {
        const obj = targets(dependencyMap[5]);
        const previewTargetKeyResult = obj.previewTargetKey(item);
        const TableRadioRow = targets(dependencyMap[8]).TableRadioRow;
        const obj3 = targets(dependencyMap[5]);
        return <TableRadioRow key={previewTargetKeyResult} label={obj3.getPreviewTargetLabel(arg0)} value={previewTargetKeyResult} />;
      })
    });
    const TableRadioGroup = targets(7052).TableRadioGroup;
    obj3 = targets(12050);
    return <ActionSheet>{null}</ActionSheet>;
  }
}
const jsx = Fragment.jsx;
const ConjurePreviewTarget = "ConjurePreviewTarget";
const result = size.fileFinishedImporting("modules/conjure/preview/native/showConjurePreviewTargetSheet.tsx");

export default function showConjurePreviewTargetSheet(arg0) {
  const obj = { content: null, key: ConjurePreviewTarget };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
export { ConjurePreviewTargetSheet };
