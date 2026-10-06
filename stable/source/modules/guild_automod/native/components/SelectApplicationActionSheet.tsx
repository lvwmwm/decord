// Module ID: 17334
// Function ID: 17335
// Name: SelectApplicationActionSheet
// Dependencies: [19, 21, 558, 576, 1127, 4801, 6571, 5994, 9000, 6624, 5995, 2]

// Module 17334 (SelectApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1127 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import TableRadioRow2 from "TableRadioRow" /* 5994 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5995 */;
import ActionSheet2 from "ActionSheet" /* 6624 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applications;
  let first;
  let onSelectApplication;
  let selectedApplicationId;
  let tmp10;
  let tmp6;
  let tmp7;
  let obj = onSelectApplication(576);
  const cResult = obj.c(11);
  ({ applications, selectedApplicationId, onSelectApplication } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(onSelectApplication(1127).t.FKSiso);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onSelectApplication) {
    const fn = function h(dependencyMap) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSelectApplication(dependencyMap);
    };
    cResult[1] = onSelectApplication;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = jsx(onSelectApplication(6571).BottomSheetTitleHeader, { title: first });
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== applications) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v(application) {
        const TableRadioRow = onSelectApplication(dependencyMap[7]).TableRadioRow;
        return <TableRadioRow key={arg0.id} value={arg0.id} label={arg0.name} icon={null} />;
      };
      cResult[6] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
    }
    const mapped = applications.map(tmp11);
    cResult[4] = applications;
    cResult[5] = mapped;
    tmp10 = mapped;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[7] === tmp6) {
    if (cResult[8] === selectedApplicationId) {
      let tmp13;
      if (cResult[9] === tmp10) {
        tmp13 = cResult[10];
      }
      return tmp13;
    }
  }
  const ActionSheet = tmp(6624).ActionSheet;
  const tmp14 = <ActionSheet header={tmp7}>{null}</ActionSheet>;
  cResult[7] = tmp6;
  cResult[8] = selectedApplicationId;
  cResult[9] = tmp10;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : ((arg0) => {
  let TableRadioGroup;
  let applications;
  let obj2;
  let selectedApplicationId;
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.FKSiso);
  let obj = { header: null, children: tmp2(TableRadioGroup, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return <TableRadioRow key={arg0.id} value={arg0.id} label={arg0.name} icon={null} />;
    })
  };
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return jsx(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default tmp3;
