// Module ID: 12574
// Function ID: 12575
// Name: useEntryActivityAndApplication
// Dependencies: [32, 2044, 12575, 504, 6589, 2]
// Exports: default

// Module 12574 (useEntryActivityAndApplication)
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ContentInventoryActivityStore from "ContentInventoryActivityStore" /* 12575 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  let activityApplication;
  let items2;
  let tmp10;
  let tmpResult;
  _require = extra;
  const items = [ContentInventoryActivityStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ContentInventoryActivityStore.getMatchingActivity(extra));
  let application_id;
  const tmp = _require;
  const tmp4 = activityApplication(6589);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id, ];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  const tmp7 = _slicedToArray(tmp4(items1), 2);
  activityApplication = tmp7[0];
  const obj2 = {
    activity: stateFromStores,
    embeddedActivity: tmpResult.useStateFromStores(items2, () => {
      let id;
      const getEmbeddedActivityForUserId = EmbeddedActivitiesStore.getEmbeddedActivityForUserId;
      const author_id = extra.author_id;
      if (first != null) {
        id = first.id;
      }
      return getEmbeddedActivityForUserId(author_id, id);
    }),
    anyMatchingApplication: tmp10,
    activityApplication,
    fallbackApplication: tmp7[1]
  };
  items2 = [EmbeddedActivitiesStore];
  tmp10 = activityApplication;
  tmpResult = tmp(504);
  if (activityApplication == null) {
    tmp10 = tmp9;
  }
  return obj2;
};
