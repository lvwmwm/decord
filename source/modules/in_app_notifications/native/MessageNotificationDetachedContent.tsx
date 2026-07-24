// Module ID: 10388
// Function ID: 80110
// Name: MessageNotificationDetachedContent
// Dependencies: [31, 27, 10267, 33, 4130, 10307, 1212, 3991, 4131, 10389, 10390, 2]
// Exports: MessageNotificationDetachedContent

// Module 10388 (MessageNotificationDetachedContent)
import result from "result";
import { Keyboard } from "get ActivityIndicator";
import { DEFAULT_ANIMATION_TIMING } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ expandFooterContainer: { position: "absolute", bottom: 4, left: 0, right: 0 } });
let closure_10 = { code: "function MessageNotificationDetachedContentTsx1(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}" };
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationDetachedContent.tsx");

export const MessageNotificationDetachedContent = function MessageNotificationDetachedContent(notification) {
  let confirmation;
  let isExpanded;
  let setConfirmation;
  let showReplyInput;
  let obj = expandedSV(setExpanded[5]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  expandedSV = inAppNotificationContext.expandedSV;
  const setActionTaken = inAppNotificationContext.setActionTaken;
  setExpanded = inAppNotificationContext.setExpanded;
  const setAutoDismissing = inAppNotificationContext.setAutoDismissing;
  ({ confirmation, setConfirmation } = inAppNotificationContext);
  let items = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
  ({ isExpanded, showReplyInput } = inAppNotificationContext);
  const callback = setAutoDismissing.useCallback(() => {
    setConfirmation.dismiss();
    setActionTaken(true);
    setExpanded(false);
    setAutoDismissing(true);
    const obj = { type: "message", reaction: null };
    const intl = expandedSV(setExpanded[6]).intl;
    obj.message = intl.string(expandedSV(setExpanded[6]).t["b/4dOF"]);
    setConfirmation(obj);
  }, items);
  let obj1 = expandedSV(setExpanded[7]);
  const fn = function _() {
    let obj = {};
    let num = 0;
    if (expandedSV.get()) {
      num = 1;
    }
    obj.opacity = expandedSV(setExpanded[8]).withTiming(num, outer1_5);
    obj = {};
    const obj2 = expandedSV(setExpanded[8]);
    let num2 = 0.8;
    if (expandedSV.get()) {
      num2 = 1;
    }
    obj.scale = expandedSV(setExpanded[8]).withTiming(num2, outer1_5);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: expandedSV(setExpanded[8]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING };
  fn.__closure = obj;
  fn.__workletHash = 16391347485958;
  fn.__initData = closure_10;
  obj = {};
  let tmp7 = null;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  if (null != confirmation) {
    obj1 = {};
    ({ message: obj5.message, reaction: obj5.reaction } = confirmation);
    tmp7 = callback(expandedSV(setExpanded[9]).ConfirmationToast, obj1);
  }
  const items1 = [tmp7, ];
  let tmp11 = null;
  if (isExpanded) {
    tmp11 = null;
    if (showReplyInput) {
      let obj2 = {};
      const items2 = [tmp.expandFooterContainer, animatedStyle];
      obj2.style = items2;
      const obj3 = { notification: notification.notification, onMessageSent: callback };
      obj2.children = callback(expandedSV(setExpanded[10]).MessageReplyInput, obj3);
      tmp11 = callback(setActionTaken(setExpanded[7]).View, obj2);
    }
  }
  items1[1] = tmp11;
  obj.children = items1;
  return closure_8(closure_7, obj);
};
