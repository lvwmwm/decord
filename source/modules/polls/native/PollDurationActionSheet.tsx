// Module ID: 11311
// Function ID: 88006
// Name: PollDurationRadioGroup
// Dependencies: []
// Exports: default

// Module 11311 (PollDurationRadioGroup)
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  const arg1 = onChange;
  const tmp = importDefault(dependencyMap[2])();
  const importDefault = tmp;
  const items = [tmp, onChange];
  const callback = React.useCallback((arg0) => {
    const tmp = onChange(arg0);
    const AccessibilityAnnouncer = onChange(closure_2[3]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(tmp[arg0]);
    tmp(closure_2[4]).hideActionSheet();
  }, items);
  const obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.0ZStp9);
  obj.hasIcons = false;
  obj.onChange = callback;
  obj.defaultValue = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj.children = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { value: parseInt(tmp), label: tmp2 };
    return callback(onChange(closure_2[7]).TableRadioRow, obj, tmp);
  });
  return jsx(arg1(dependencyMap[5]).TableRadioGroup, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  ({ selectedDuration, onChange } = arg0);
  const obj = { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> };
  return jsx(arg1(dependencyMap[8]).ActionSheet, obj);
};
