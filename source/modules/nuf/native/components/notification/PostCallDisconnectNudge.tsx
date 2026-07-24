// Module ID: 15300
// Function ID: 116715
// Name: PostCallDisconnectNudge
// Dependencies: [57, 31, 1906, 4146, 11478, 11479, 33, 15299, 1212, 14363, 11480, 566, 5802, 1334, 11481, 4098, 15300, 1934, 2]
// Exports: default, usePostCallDisconnectNudge

// Module 15300 (PostCallDisconnectNudge)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PermissionPromptType } from "_isNativeReflectConstruct";
import EventActionType from "EventActionType";
import { jsx } from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
({ EventActionLocation: closure_8, NotificationNudgeSurface: closure_9 } = EventActionType);
let closure_11 = { cooldownDurationMs: 604800000 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  let markAsDismissed;
  let onHide;
  ({ markAsDismissed, onHide } = arg0);
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.pJbYq1);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.vegtFT);
  obj.actionLocation = constants.CALL_DISCONNECT;
  obj.surface = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(importDefault(15299), {});
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(14363);
  const canSeePushNotificationNudge = stateFromStores(11480).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(11480);
  const items = [closure_6];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_6.getCurrentClientVoiceChannelId(null));
  const obj3 = stateFromStores(566);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => tmp11.getChannelId());
  const dependencyMap = first.useRef(stateFromStores);
  const tmp4 = callback(first.useState(false), 2);
  callback = tmp4[1];
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
    _slicedToArray(tmp2);
  }, items2);
  const obj4 = stateFromStores(566);
  let prop = null;
  if (tmp4[0]) {
    prop = null;
    if (!obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = stateFromStores(1334).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp9 = callback(stateFromStores(5802).useSelectedTimeRecurringDismissibleContent(prop, closure_11), 2);
  first = tmp9[0];
  _isNativeReflectConstruct = tmp11;
  const items3 = [first, tmp9[1]];
  const effect1 = first.useEffect(() => {
    if (null != first) {
      let obj = stateFromStores(ref[14]);
      const result = obj.setPushPermissionReactivationSeen(outer1_7.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed: _isNativeReflectConstruct };
      stateFromStores1(ref[15]).openLazy(stateFromStores(ref[17])(ref[16], ref.paths), "post-call-disconnect-nudge-key", obj);
      const obj2 = stateFromStores1(ref[15]);
    }
  }, items3);
};
