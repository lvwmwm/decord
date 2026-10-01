// Module ID: 10088
// Function ID: 10089
// Name: SelectedDismissibleContent
// Dependencies: [32, 19, 21, 6806, 2]
// Exports: SelectedSnowflakeBoundDismissibleContent, SelectedTimeReccuringSnowflakeBoundDismissibleContent, SelectedTimeRecurringDismissibleContent, SelectedVersionedDismissibleContent, default

// Module 10088 (SelectedDismissibleContent)
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Fragment: c3, jsx: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentTypes;
  let groupName;
  let obj3;
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
};
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let latestVersion;
  let obj3;
  contentType = contentType.contentType;
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let obj3;
  let timeRecurringConfig;
  contentType = contentType.contentType;
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let obj3;
  contentType = contentType.contentType;
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let obj3;
  let timeRecurringConfig;
  contentType = contentType.contentType;
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
};
