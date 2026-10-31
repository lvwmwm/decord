// Module ID: 19256
// Function ID: 19257
// Name: ActivityItemMissingCard
// Dependencies: [5, 19, 17, 21, 5014, 575, 11222, 7326, 11792, 11841, 6980, 19257, 19258, 6960, 2]

// Module 19256 (ActivityItemMissingCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c1;

let metroImportDefault;
let metroRequire;
let size;
let size1;
function ActivityItemEmptyCard(activity) {
  let height;
  let items1;
  let width;
  activity = activity.activity;
  const application = activity.application;
  let channelId;
  const tmp = closure_8();
  const context = react.useContext(application(channelId[6]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  const targetDimensions = layoutManager.getTargetDimensions(undefined);
  ({ width, height } = targetDimensions);
  const analyticsLocations = application(channelId[7])().analyticsLocations;
  const items = [activity.launchId, analyticsLocations, application, channelId];
  const callback = react.useCallback(analyticsLocations(function*(arg0, value) {
    let v3;
    if (activity === 2) {
      activity = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        activity = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            activity = 3;
            throw value;
          } else if (arg0 === 2) {
            activity = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { channelId, applicationId: application.id, launchId: activity.launchId, inputApplication: application, analyticsLocations };
            c1 = 1;
            const obj5 = activity(channelId[8]);
            activity = 1;
            const obj6 = { value: obj5.maybeJoinEmbeddedActivity(obj4), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          activity = 3;
          throw value;
        } else if (arg0 === 2) {
          activity = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          activity = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp4) {
        activity = 3;
        throw tmp4;
      }
    }
  }), items);
  let obj = { applicationId: activity.applicationId, size: width, names: ["embedded_background"] };
  let obj2 = { activeOpacity: 0.7, onPress: callback, style: tmp.disabledActivity, children: items1 };
  const tmp5 = application(channelId[9])(obj);
  const PressableOpacity = activity(channelId[10]).PressableOpacity;
  let obj3 = { imageBackground: tmp5, aspectRatio: width / height };
  items1 = [closure_6(application(channelId[11]), obj3), ];
  let obj4 = { channelId, applicationId: application.id, applicationName: application.name };
  items1[1] = closure_6(application(channelId[12]), obj4);
  return closure_7(PressableOpacity, obj2);
}
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingActivity: size, disabledActivity: size1 };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function ActivityItemMissingCard(arg0) {
  let activity;
  let application;
  ({ activity, application } = arg0);
  const tmp = closure_8();
  if (null != activity) {
    let tmp4;
    if (null != application) {
      const obj = { activity, application };
      tmp4 = metroRequire(ActivityItemEmptyCard, obj);
    }
    return tmp4;
  }
  const obj2 = { style: tmp.loadingActivity, children: metroRequire(ActivityIndicator, { size: "large" }) };
  const tmp5 = NativeViewDefault;
  tmp4 = metroRequire(tmp5, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default memoResult;
