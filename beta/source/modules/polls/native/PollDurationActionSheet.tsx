// Module ID: 11683
// Function ID: 11684
// Name: PollDurationActionSheet
// Dependencies: [19, 21, 11682, 4541, 4800, 5997, 1115, 6000, 6618, 2]
// Exports: default

// Module 11683 (PollDurationActionSheet)
import Fragment from "Fragment" /* 21 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 11682 */;
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
  const TableRadioGroup = onChange(5997).TableRadioGroup;
  const intl = onChange(1115).intl;
  const entries = Object.entries(tmp);
  return <TableRadioGroup title={intl.string(onChange(1115).t["0ZStp9"])} hasIcons={false} onChange={callback} defaultValue={selectedDuration}>{entries.map((item) => {
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
