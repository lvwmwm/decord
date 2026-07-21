// Module ID: 10348
// Function ID: 79844
// Name: MessageNotificationDetachedContent
// Dependencies: []
// Exports: MessageNotificationDetachedContent

// Module 10348 (MessageNotificationDetachedContent)
let closure_3 = importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
const DEFAULT_ANIMATION_TIMING = arg1(dependencyMap[2]).DEFAULT_ANIMATION_TIMING;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ expandFooterContainer: {} });
let closure_10 = { code: "function MessageNotificationDetachedContentTsx1(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationDetachedContent.tsx");

export const MessageNotificationDetachedContent = function MessageNotificationDetachedContent(notification) {
  let confirmation;
  let isExpanded;
  let setConfirmation;
  let showReplyInput;
  let obj = arg1(dependencyMap[5]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  const expandedSV = inAppNotificationContext.expandedSV;
  const arg1 = expandedSV;
  const setActionTaken = inAppNotificationContext.setActionTaken;
  const importDefault = setActionTaken;
  const setExpanded = inAppNotificationContext.setExpanded;
  const dependencyMap = setExpanded;
  const setAutoDismissing = inAppNotificationContext.setAutoDismissing;
  const React = setAutoDismissing;
  ({ confirmation, setConfirmation } = inAppNotificationContext);
  const Keyboard = setConfirmation;
  const items = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
  ({ isExpanded, showReplyInput } = inAppNotificationContext);
  const callback = React.useCallback(() => {
    setConfirmation.dismiss();
    setActionTaken(true);
    setExpanded(false);
    setAutoDismissing(true);
    const obj = { 0: false, 0: false };
    const intl = expandedSV(setExpanded[6]).intl;
    obj.message = intl.string(expandedSV(setExpanded[6]).t.b/4dOF);
    setConfirmation(obj);
  }, items);
  let obj1 = arg1(dependencyMap[7]);
  const fn = function _() {
    let obj = {};
    let num = 0;
    if (expandedSV.get()) {
      num = 1;
    }
    obj.opacity = expandedSV(setExpanded[8]).withTiming(num, closure_5);
    obj = {};
    const obj2 = expandedSV(setExpanded[8]);
    let num2 = 0.8;
    if (expandedSV.get()) {
      num2 = 1;
    }
    obj.scale = expandedSV(setExpanded[8]).withTiming(num2, closure_5);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING };
  fn.__closure = obj;
  fn.__workletHash = 16391347485958;
  fn.__initData = closure_10;
  obj = {};
  let tmp7 = null;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  if (null != confirmation) {
    obj1 = {};
    ({ message: obj5.message, reaction: obj5.reaction } = confirmation);
    tmp7 = callback(arg1(dependencyMap[9]).ConfirmationToast, obj1);
  }
  const items1 = [tmp7, ];
  let tmp11 = null;
  if (isExpanded) {
    tmp11 = null;
    if (showReplyInput) {
      const obj2 = {};
      const items2 = [tmp.expandFooterContainer, animatedStyle];
      obj2.style = items2;
      const obj3 = { notification: notification.notification, onMessageSent: callback };
      obj2.children = callback(arg1(dependencyMap[10]).MessageReplyInput, obj3);
      tmp11 = callback(importDefault(dependencyMap[7]).View, obj2);
    }
  }
  items1[1] = tmp11;
  obj.children = items1;
  return closure_8(closure_7, obj);
};
