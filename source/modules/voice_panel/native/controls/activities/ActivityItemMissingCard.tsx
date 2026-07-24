// Module ID: 15875
// Function ID: 122569
// Name: ActivityItemEmptyCard
// Dependencies: [5, 31, 27, 33, 4130, 689, 10046, 5462, 10548, 10643, 4660, 15876, 15877, 5515, 2]

// Module 15875 (ActivityItemEmptyCard)
import closure_3 from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function ActivityItemEmptyCard(activity) {
  activity = activity.activity;
  const application = activity.application;
  const context = importAllResult.useContext(application(channelId[6]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  const size = layoutManager.getTargetDimensions(undefined);
  const width = size.width;
  const analyticsLocations = application(channelId[7])().analyticsLocations;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [activity.launchId, analyticsLocations, application, channelId];
  const callback = importAllResult.useCallback(analyticsLocations(tmp), items);
  let obj = { applicationId: activity.applicationId, size: width, names: ["embedded_background"] };
  const tmp2 = callback3();
  obj = { activeOpacity: 0.7, onPress: callback, style: tmp2.disabledActivity };
  obj = { imageBackground: application(channelId[9])(obj), aspectRatio: width / size.height };
  const items1 = [callback(application(channelId[11]), obj), callback(application(channelId[12]), { channelId, applicationId: application.id, applicationName: application.name })];
  obj.children = items1;
  return callback2(activity(channelId[10]).PressableOpacity, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.loadingActivity = obj;
_createForOfIteratorHelperLoose = { width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.disabledActivity = _createForOfIteratorHelperLoose;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ActivityItemMissingCard(arg0) {
  let activity;
  let application;
  ({ activity, application } = arg0);
  if (null != activity) {
    if (null != application) {
      let obj = { activity, application };
      let tmp4 = callback(ActivityItemEmptyCard, obj);
    }
    return tmp4;
  }
  obj = { style: callback3().loadingActivity };
  const tmp = callback3();
  obj.children = callback(ActivityIndicator, { size: "large" });
  tmp4 = callback(importDefault(5515), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default memoResult;
