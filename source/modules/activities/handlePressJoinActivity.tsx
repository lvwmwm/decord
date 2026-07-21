// Module ID: 10508
// Function ID: 82037
// Name: handlePressJoinActivity
// Dependencies: []
// Exports: maybeJoinEmbeddedActivity

// Module 10508 (handlePressJoinActivity)
function handlePressJoinActivity(arg0) {
  let embeddedActivityJoinability;
  let handleCanJoin;
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (arg1(dependencyMap[8]).EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (null != handleCanJoin) {
      handleCanJoin();
    }
  } else if (arg1(dependencyMap[8]).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const result = arg1(dependencyMap[9]).showActivitiesInvalidPermissionsAlert();
    const obj9 = arg1(dependencyMap[9]);
  } else if (arg1(dependencyMap[8]).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    let obj = {};
    const intl7 = arg1(dependencyMap[11]).intl;
    obj.title = intl7.string(arg1(dependencyMap[11]).t.PtobXW);
    const intl8 = arg1(dependencyMap[11]).intl;
    obj.body = intl8.string(arg1(dependencyMap[11]).t.UXoQTp);
    obj.hideActionSheet = false;
    importDefault(dependencyMap[10]).show(obj);
    const obj7 = importDefault(dependencyMap[10]);
  } else if (arg1(dependencyMap[8]).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    obj = {};
    const intl5 = arg1(dependencyMap[11]).intl;
    obj.title = intl5.string(arg1(dependencyMap[11]).t.PtobXW);
    const intl6 = arg1(dependencyMap[11]).intl;
    obj.body = intl6.string(arg1(dependencyMap[11]).t.uGDCcw);
    obj.hideActionSheet = false;
    importDefault(dependencyMap[10]).show(obj);
    const obj5 = importDefault(dependencyMap[10]);
  } else if (arg1(dependencyMap[8]).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    let obj2 = importDefault(dependencyMap[10]);
    const obj1 = {};
    const intl3 = arg1(dependencyMap[11]).intl;
    obj1.title = intl3.string(arg1(dependencyMap[11]).t.PtobXW);
    const intl4 = arg1(dependencyMap[11]).intl;
    obj1.body = intl4.string(arg1(dependencyMap[11]).t.4WuFRE);
    obj1.hideActionSheet = false;
    obj2.show(obj1);
  } else {
    obj = importDefault(dependencyMap[10]);
    obj2 = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj2.title = intl.string(arg1(dependencyMap[11]).t.PtobXW);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj2.body = intl2.string(arg1(dependencyMap[11]).t.FUCQco);
    obj2.hideActionSheet = false;
    obj.show(obj2);
  }
}
function _maybeJoinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeJoinEmbeddedActivity = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity(arg0) {
  return _maybeJoinEmbeddedActivity(...arguments);
};
