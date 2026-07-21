// Module ID: 9634
// Function ID: 75037
// Name: SelectedDismissibleContent
// Dependencies: []
// Exports: SelectedSnowflakeBoundDismissibleContent, SelectedTimeReccuringSnowflakeBoundDismissibleContent, SelectedTimeRecurringDismissibleContent, SelectedVersionedDismissibleContent, default

// Module 9634 (SelectedDismissibleContent)
let closure_2 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Fragment: closure_3, jsx: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentTypes;
  let groupName;
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(obj.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let latestVersion;
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(contentType.contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let timeRecurringConfig;
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(obj.useSelectedTimeRecurringDismissibleContent(contentType.contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(obj.useSelectedSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let timeRecurringConfig;
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
