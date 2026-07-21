// Module ID: 15130
// Function ID: 114181
// Name: PostCallDisconnectNudge
// Dependencies: []
// Exports: default, usePostCallDisconnectNudge

// Module 15130 (PostCallDisconnectNudge)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const PermissionPromptType = arg1(dependencyMap[4]).PermissionPromptType;
({ EventActionLocation: closure_8, NotificationNudgeSurface: closure_9 } = arg1(dependencyMap[5]));
const jsx = arg1(dependencyMap[6]).jsx;
let closure_11 = { cooldownDurationMs: 604800000 };
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  let markAsDismissed;
  let onHide;
  ({ markAsDismissed, onHide } = arg0);
  const obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.pJbYq1);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.body = intl2.string(arg1(dependencyMap[8]).t.vegtFT);
  obj.actionLocation = constants.CALL_DISCONNECT;
  obj.surface = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(importDefault(dependencyMap[7]), obj);
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  const obj = importDefault(closure_2[9]);
  const canSeePushNotificationNudge = arg1(closure_2[10]).useCanSeePushNotificationNudge();
  const obj2 = arg1(closure_2[10]);
  const items = [closure_6];
  const stateFromStores = arg1(closure_2[11]).useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  const arg1 = stateFromStores;
  const obj3 = arg1(closure_2[11]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(closure_2[11]).useStateFromStores(items1, () => tmp11.getChannelId());
  const importDefault = stateFromStores1;
  closure_2 = React.useRef(stateFromStores);
  const tmp4 = callback(React.useState(false), 2);
  const callback = tmp4[1];
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    let tmp2 = null != current;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = current === stateFromStores1;
    }
    closure_3(tmp2);
  }, items2);
  const obj4 = arg1(closure_2[11]);
  let prop = null;
  if (tmp4[0]) {
    prop = null;
    if (!obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = arg1(closure_2[13]).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp9 = callback(arg1(closure_2[12]).useSelectedTimeRecurringDismissibleContent(prop, closure_11), 2);
  const first = tmp9[0];
  const React = first;
  closure_5 = tmp11;
  const items3 = [first, tmp9[1]];
  const effect1 = React.useEffect(() => {
    if (null != first) {
      let obj = stateFromStores(ref[14]);
      const result = obj.setPushPermissionReactivationSeen(constants.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed: tmp11 };
      stateFromStores1(ref[15]).openLazy(stateFromStores(ref[17])(ref[16], ref.paths), "post-call-disconnect-nudge-key", obj);
      const obj2 = stateFromStores1(ref[15]);
    }
  }, items3);
};
