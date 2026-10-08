// Module ID: 11928
// Function ID: 11929
// Name: PollDurationActionSheet
// Dependencies: [32, 19, 21, 558, 576, 11927, 4788, 5054, 1126, 6264, 6265, 6885, 2]

// Module 11928 (PollDurationActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4788 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 11927 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp;
const ActionSheet2 = tmp(6885);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PollDurationRadioGroup(arg0) {
  let closure_1;
  let onChange;
  let selectedDuration;
  const tmp = onChange;
  let obj = onChange(576);
  const cResult = obj.c(10);
  ({ selectedDuration, onChange } = arg0);
  const tmp4 = usePollDurationOptionsDefault();
  importDefault = tmp4;
  if (cResult[0] === onChange) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["0ZStp9"]);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const _Object = Object;
      const entries = Object.entries(tmp4);
      const mapped = entries.map((item) => {
        let first;
        let tmp3;
        [first, tmp3] = item;
        const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
        return <TableRadioRow key={first} value={parseInt(first)} label={tmp3} />;
      });
      cResult[4] = tmp4;
      cResult[5] = mapped;
      tmp9 = mapped;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === selectedDuration) {
        let tmp11;
        if (cResult[8] === tmp9) {
          tmp11 = cResult[9];
        }
        return tmp11;
      }
    }
    const tmp13 = jsx(tmp(6265).TableRadioGroup, { title: tmp7, hasIcons: false, onChange: tmp5, defaultValue: selectedDuration, children: tmp9 });
    cResult[6] = tmp5;
    cResult[7] = selectedDuration;
    cResult[8] = tmp9;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const fn = function l(arg0) {
    onChange(arg0);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_1[arg0]);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  };
  cResult[0] = onChange;
  cResult[1] = tmp4;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function PollDurationRadioGroup(onChange) {
  let closure_1;
  onChange = onChange.onChange;
  const selectedDuration = onChange.selectedDuration;
  const tmp = usePollDurationOptionsDefault();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = react.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_1[arg0]);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const TableRadioGroup = onChange(6265).TableRadioGroup;
  const intl = onChange(1126).intl;
  const entries = Object.entries(tmp);
  return <TableRadioGroup title={intl.string(onChange(1126).t["0ZStp9"])} hasIcons={false} onChange={callback} defaultValue={selectedDuration}>{entries.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
    return <TableRadioRow key={tmp} value={parseInt(tmp)} label={tmp2} />;
  })}</TableRadioGroup>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  const obj = react2;
  const cResult = obj.c(3);
  ({ selectedDuration, onChange } = arg0);
  if (cResult[0] === onChange) {
    let tmp4;
    if (cResult[1] === selectedDuration) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const ActionSheet = ActionSheet2.ActionSheet;
  const tmp5 = <ActionSheet>{null}</ActionSheet>;
  cResult[0] = onChange;
  cResult[1] = selectedDuration;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  ({ selectedDuration, onChange } = arg0);
  const ActionSheet = ActionSheet2.ActionSheet;
  return <ActionSheet>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default tmp2;
