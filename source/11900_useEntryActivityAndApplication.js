// Module ID: 11900
// Function ID: 92148
// Name: useEntryActivityAndApplication
// Dependencies: []
// Exports: default

// Module 11900 (useEntryActivityAndApplication)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  const arg1 = extra;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => matchingActivity.getMatchingActivity(arg0));
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
  const tmp5 = callback(importDefault(dependencyMap[4])(items1), 2);
  const first = tmp5[0];
  const importDefault = first;
  obj = { activity: stateFromStores };
  const tmp2 = importDefault(dependencyMap[4]);
  const items2 = [closure_4];
  obj.embeddedActivity = arg1(dependencyMap[3]).useStateFromStores(items2, () => {
    let id;
    if (null != first) {
      id = first.id;
    }
    return embeddedActivityForUserId.getEmbeddedActivityForUserId(arg0.author_id, id);
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
