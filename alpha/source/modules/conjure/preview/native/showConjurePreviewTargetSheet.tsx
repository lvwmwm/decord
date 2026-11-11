// Module ID: 13055
// Function ID: 13056
// Name: showConjurePreviewTargetSheet
// Dependencies: [19, 21, 5489, 1113, 4079, 13054, 7885, 7679, 7681, 2]
// Exports: default

// Module 13055 (showConjurePreviewTargetSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

class ConjurePreviewTargetSheet {
  constructor(targets) {
    let obj3;
    targets = targets.targets;
    const onChange = targets.onChange;
    const target = targets.target;
    const intl = targets(1113).intl;
    const stringResult = intl.string(onChange(4079).I2ucou);
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
    const ActionSheet = targets(7885).ActionSheet;
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
    const TableRadioGroup = targets(7679).TableRadioGroup;
    obj3 = targets(13054);
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
