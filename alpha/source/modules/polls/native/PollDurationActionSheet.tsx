// Module ID: 13175
// Function ID: 13176
// Name: PollDurationActionSheet
// Dependencies: [19, 21, 13174, 5052, 5257, 7251, 1112, 7253, 7546, 2]
// Exports: default

// Module 13175 (PollDurationActionSheet)
import Fragment from "Fragment" /* 21 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5052 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ActionSheet2 from "ActionSheet" /* 7546 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 13174 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

function PollDurationRadioGroup(onChange) {
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
  const TableRadioGroup = onChange(7251).TableRadioGroup;
  const intl = onChange(1112).intl;
  const entries = Object.entries(tmp);
  return <TableRadioGroup title={intl.string(onChange(1112).t["0ZStp9"])} hasIcons={false} onChange={callback} defaultValue={selectedDuration}>{entries.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const TableRadioRow = onChange(dependencyMap[7]).TableRadioRow;
    return <TableRadioRow key={tmp} value={parseInt(tmp)} label={tmp2} />;
  })}</TableRadioGroup>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  ({ selectedDuration, onChange } = arg0);
  const ActionSheet = ActionSheet2.ActionSheet;
  return <ActionSheet>{null}</ActionSheet>;
};
