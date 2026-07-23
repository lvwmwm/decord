// Module ID: 11920
// Function ID: 92250
// Name: useEntryActivityAndApplication
// Dependencies: [57, 1347, 11921, 566, 5470, 2]
// Exports: default

// Module 11920 (useEntryActivityAndApplication)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  const _require = extra;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMatchingActivity(closure_0));
  let application_id;
  if (null != stateFromStores) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id, ];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  const tmp5 = callback(first(5470)(items1), 2);
  first = tmp5[0];
  obj = { activity: stateFromStores };
  const tmp2 = first(5470);
  const items2 = [_createForOfIteratorHelperLoose];
  obj.embeddedActivity = _require(566).useStateFromStores(items2, () => {
    let id;
    if (null != first) {
      id = first.id;
    }
    return outer1_4.getEmbeddedActivityForUserId(extra.author_id, id);
  });
  let tmp8 = tmp7;
  if (null != first) {
    tmp8 = first;
  }
  obj.anyMatchingApplication = tmp8;
  obj.activityApplication = first;
  obj.fallbackApplication = tmp5[1];
  return obj;
};
