// Module ID: 11321
// Function ID: 88056
// Name: PollDurationRadioGroup
// Dependencies: [31, 33, 11320, 3843, 4098, 7519, 1212, 7518, 5500, 2]
// Exports: default

// Module 11321 (PollDurationRadioGroup)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  let tmp = importDefault(11320)();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = React.useCallback((arg0) => {
    const tmp = onChange(arg0);
    const AccessibilityAnnouncer = onChange(outer1_2[3]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(tmp[arg0]);
    tmp(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = {};
  const intl = onChange(1212).intl;
  obj.title = intl.string(onChange(1212).t["0ZStp9"]);
  obj.hasIcons = false;
  obj.onChange = callback;
  obj.defaultValue = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj.children = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { value: parseInt(tmp), label: tmp2 };
    return outer1_4(onChange(outer1_2[7]).TableRadioRow, obj, tmp);
  });
  return jsx(onChange(7519).TableRadioGroup, {});
}
const result = require("usePollDurationOptions").fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  ({ selectedDuration, onChange } = arg0);
  const obj = { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> };
  return jsx(require(5500) /* ActionSheet */.ActionSheet, { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> });
};
