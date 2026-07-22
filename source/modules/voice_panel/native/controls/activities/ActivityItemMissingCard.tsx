// Module ID: 15711
// Function ID: 120074
// Name: ActivityItemEmptyCard
// Dependencies: []

// Module 15711 (ActivityItemEmptyCard)
function ActivityItemEmptyCard(activity) {
  activity = activity.activity;
  const arg1 = activity;
  const application = activity.application;
  const importDefault = application;
  const context = importAllResult.useContext(importDefault(dependencyMap[6]));
  const channelId = context.channelId;
  const dependencyMap = channelId;
  const layoutManager = context.layoutManager;
  const size = layoutManager.getTargetDimensions(undefined);
  const width = size.width;
  const analyticsLocations = importDefault(dependencyMap[7])().analyticsLocations;
  let callback = analyticsLocations;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [activity.launchId, analyticsLocations, application, channelId];
  callback = importAllResult.useCallback(callback(tmp), items);
  let obj = { applicationId: activity.applicationId, size: width, names: [240518194] };
  const tmp2 = callback4();
  obj = { activeOpacity: 0.7, onPress: callback, style: tmp2.disabledActivity };
  obj = { imageBackground: importDefault(dependencyMap[9])(obj), aspectRatio: width / size.height };
  const items1 = [callback2(importDefault(dependencyMap[11]), obj), callback2(importDefault(dependencyMap[12]), { channelId, applicationId: application.id, applicationName: application.name })];
  obj.children = items1;
  return callback3(arg1(dependencyMap[10]).PressableOpacity, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const ActivityIndicator = arg1(dependencyMap[2]).ActivityIndicator;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.loadingActivity = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.disabledActivity = obj1;
let closure_8 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function ActivityItemMissingCard(arg0) {
  let activity;
  let application;
  ({ activity, application } = arg0);
  if (null != activity) {
    if (null != application) {
      let obj = { activity, application };
      let tmp4 = callback2(ActivityItemEmptyCard, obj);
    }
    return tmp4;
  }
  obj = { style: callback4().loadingActivity };
  const tmp = callback4();
  obj.children = callback2(ActivityIndicator, { size: "large" });
  tmp4 = callback2(importDefault(dependencyMap[13]), obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default memoResult;
