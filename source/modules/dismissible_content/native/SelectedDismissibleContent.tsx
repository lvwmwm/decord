// Module ID: 9678
// Function ID: 75317
// Name: SelectedDismissibleContent
// Dependencies: [57, 31, 33, 5802, 2]
// Exports: SelectedSnowflakeBoundDismissibleContent, SelectedTimeReccuringSnowflakeBoundDismissibleContent, SelectedTimeRecurringDismissibleContent, SelectedVersionedDismissibleContent, default

// Module 9678 (SelectedDismissibleContent)
import _slicedToArray from "_slicedToArray";
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ Fragment: closure_3, jsx: closure_4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentTypes;
  let groupName;
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  let obj = require(5802) /* useSelectedDismissibleContent */;
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
  let obj = require(5802) /* useSelectedDismissibleContent */;
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
  let obj = require(5802) /* useSelectedDismissibleContent */;
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
  let obj = require(5802) /* useSelectedDismissibleContent */;
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
  let obj = require(5802) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
