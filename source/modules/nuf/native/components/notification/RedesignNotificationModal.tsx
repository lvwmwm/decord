// Module ID: 14651
// Function ID: 110509
// Name: RedesignNotificationModal
// Dependencies: []
// Exports: RedesignNotificationScreen

// Module 14651 (RedesignNotificationModal)
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    arg1 = onComplete;
    tmp = closure_11();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = importAll.useCallback(() => {
      const pushNotificationPermission = onComplete(closure_2[8]).requestPushNotificationPermission(constants3.ALLOW_TO_REQUEST, constants2.ALERT, () => {
        if (null != callback) {
          callback();
        }
      });
    }, items);
    obj = { style: tmp.container };
    callback1 = importAll.useCallback(() => {
      let obj = callback(closure_2[9]);
      obj = { action_type: constants3.SKIP_STEP, action_location: constants2.ALERT };
      obj.track(constants4.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = onComplete(closure_2[10]).setPushPermissionState(constants.PROMPT_SKIPPED);
      const obj3 = onComplete(closure_2[10]);
      const result1 = onComplete(closure_2[8]).enableProvisionalPushNotification();
      if (null != onComplete) {
        onComplete(true);
      }
    }, items1);
    obj = { onAllow: callback, onDontAllow: callback1 };
    obj1 = { resizeMode: "contain", style: tmp.notificationHeaderImage };
    tmp4 = importDefault(dependencyMap[11]);
    obj1.source = importDefault(dependencyMap[12]);
    obj.header = jsx(Image, obj1);
    intl = arg1(dependencyMap[13]).intl;
    obj.title = intl.string(arg1(dependencyMap[13]).t.3nx0b5);
    intl2 = arg1(dependencyMap[13]).intl;
    obj.subtitle = intl2.string(arg1(dependencyMap[13]).t.Gf7U1T);
    obj.children = jsx(tmp4, obj);
    return jsx(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const PermissionStateType = arg1(dependencyMap[2]).PermissionStateType;
const tmp2 = arg1(dependencyMap[1]);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, marginTop: -importDefault(dependencyMap[7]).space.PX_48 };
obj.container = obj;
obj.notificationHeaderImage = { "Null": "message", "Null": "Array", "Null": "construct", "Null": "y", "Null": "isArray", "Null": "isArray" };
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
