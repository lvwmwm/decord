// Module ID: 10303
// Function ID: 79527
// Dependencies: []

// Module 10303
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.iconContainer = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let obj = { type: "simple" };
  const intl = arg1(dependencyMap[5]).intl;
  obj.text = intl.string(arg1(dependencyMap[5]).t.Q0x94X);
  const channelId = notification.channelId;
  const arg1 = channelId;
  const messageId = notification.messageId;
  const importDefault = messageId;
  const items = [channelId, messageId];
  const callback = importAllResult.useCallback(() => {
    let obj = channelId(closure_2[6]);
    obj = { jumpType: channelId(closure_2[7]).JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = {};
  obj = { style: callback().iconContainer };
  const obj1 = { size: "md", color: importDefault(dependencyMap[4]).colors.ICON_SUBTLE };
  obj.children = jsx(arg1(dependencyMap[9]).RetryIcon, obj1);
  obj.icon = <View {...obj} />;
  const obj2 = {};
  const intl2 = arg1(dependencyMap[5]).intl;
  obj2.text = intl2.string(arg1(dependencyMap[5]).t.xxRPOT);
  obj.children = jsx(arg1(dependencyMap[10]).SystemMessageText, obj2);
  obj.header = obj;
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(arg1(dependencyMap[8]).NotificationPressable, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;
