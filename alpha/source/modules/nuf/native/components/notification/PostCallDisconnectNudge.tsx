// Module ID: 18587
// Function ID: 18588
// Name: PostCallDisconnectNudge
// Dependencies: [32, 19, 4917, 5679, 13958, 13959, 21, 18586, 1113, 17464, 13960, 504, 7569, 4847, 13961, 5258, 18587, 1994, 2]
// Exports: default, usePostCallDisconnectNudge

// Module 18587 (PostCallDisconnectNudge)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13958 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 13961 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 18586 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13959 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
const PermissionPromptType = PushNotificationPermissionStore.PermissionPromptType;
({ EventActionLocation: metroImportAll, NotificationNudgeSurface: c9 } = NotificationPermissionConstants);
const jsx = Fragment.jsx;
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  let markAsDismissed;
  let onHide;
  ({ markAsDismissed, onHide } = arg0);
  NotificationNudgeBottomSheetDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <tmp title={intl.string(intl3.t.pJbYq1)} body={intl2.string(intl3.t.vegtFT)} actionLocation={metroImportAll.CALL_DISCONNECT} surface={c9.CALL_DISCONNECT_BOTTOM_SHEET} markAsDismissed={markAsDismissed} onHide={onHide} />;
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export function usePostCallDisconnectNudge() {
  let closure_3;
  let currentClientVoiceChannelId;
  let first;
  let first1;
  let markAsDismissed;
  let ref;
  let stateFromStores;
  let stateFromStores1;
  let tmp = dependencyMap;
  let obj = stateFromStores1(17464);
  const inHoldout = obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout;
  let tmp2 = stateFromStores;
  let obj2 = stateFromStores(13960);
  const canSeePushNotificationNudge = obj2.useCanSeePushNotificationNudge();
  let obj3 = stateFromStores(504);
  const items = [VoiceStateStore];
  stateFromStores = obj3.useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  const items1 = [markAsDismissed];
  const obj4 = stateFromStores(504);
  stateFromStores1 = obj4.useStateFromStores(items1, () => markAsDismissed.getChannelId());
  dependencyMap = first1.useRef(stateFromStores);
  const tmp6 = _slicedToArray;
  [first, _slicedToArray] = first1.useState(false);
  const items2 = [stateFromStores, stateFromStores1];
  const effect = first1.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    let tmp2 = null != current;
    const tmp = closure_3;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = current === stateFromStores1;
    }
    tmp(tmp2);
  }, items2);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = stateFromStores(7569).useSelectedTimeRecurringDismissibleContent;
  stateFromStores(7569);
  const obj5 = first1;
  if (first) {
    prop = null;
    if (!inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = tmp2(4847).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first1 = tmp6Result[0];
  markAsDismissed = tmp14;
  const items3 = [first1, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first1) {
      const obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.CALL_DISCONNECT_BOTTOM_SHEET);
      const obj3 = { markAsDismissed };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(18587, dependencyMap.paths), c11, obj3);
    }
  }, items3);
}
