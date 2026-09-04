// Module ID: 16450
// Function ID: 16451
// Name: PostCallDisconnectNudge
// Dependencies: [32, 19, 1980, 4500, 12341, 12342, 21, 16449, 1233, 15405, 12343, 586, 7326, 1372, 12344, 4448, 16450, 2008, 2]
// Exports: default, usePostCallDisconnectNudge

// Module 16450 (PostCallDisconnectNudge)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 16449 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;
import closure_6 from "updateVoiceState" /* 4500 */;
import { PermissionPromptType } from "set" /* 12341 */;
import EventActionType from "EventActionType" /* 12342 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ EventActionLocation: closure_8, NotificationNudgeSurface: c9 } = EventActionType);
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
let result = require("set").fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  ({ markAsDismissed, onHide } = arg0);
  const obj = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.pJbYq1);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.vegtFT);
  obj[2] = constants.CALL_DISCONNECT;
  obj[3] = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj[4] = markAsDismissed;
  obj[5] = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(15405);
  let tmp2 = stateFromStores;
  const canSeePushNotificationNudge = stateFromStores(12343).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(12343);
  const items = [closure_6];
  stateFromStores = stateFromStores(586).useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  const obj3 = stateFromStores(586);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores(586).useStateFromStores(items1, () => channelId.getChannelId());
  dependencyMap = first.useRef(stateFromStores);
  const tmp7 = callback(first.useState(false), 2);
  callback = tmp7[1];
  const items2 = [stateFromStores, stateFromStores1];
  const effect = first.useEffect(() => {
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
  const obj4 = stateFromStores(586);
  const obj5 = first;
  const tmp6 = callback;
  let prop = null;
  if (tmp7[0]) {
    prop = null;
    if (!obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = tmp2(1372).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(stateFromStores(7326).useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first = tmp6Result[0];
  closure_5 = tmp12;
  const items3 = [first, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first) {
      let obj = stateFromStores(ref[14]);
      const result = obj.setPushPermissionReactivationSeen(closure_1_7.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed: null };
      obj[0] = closure_5;
      stateFromStores1(ref[15]).openLazy(stateFromStores(ref[17])(ref[16], ref.paths), closure_1_11, obj);
      const obj2 = stateFromStores1(ref[15]);
    }
  }, items3);
};
