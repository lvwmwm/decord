// Module ID: 12127
// Function ID: 93423
// Dependencies: []

// Module 12127
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function MediaMessagePreviewActionSheet(channel) {
  let closeMediaModal;
  let user;
  channel = channel.channel;
  const arg1 = channel;
  const message = channel.message;
  const importDefault = message;
  ({ user, closeMediaModal } = channel);
  const dependencyMap = closeMediaModal;
  let importAllResult;
  const DeveloperMode = arg1(dependencyMap[2]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let canReportUserResult = !user.isNonUserBot();
  if (canReportUserResult) {
    let obj = arg1(dependencyMap[3]);
    canReportUserResult = obj.canReportUser(user);
  }
  if (canReportUserResult) {
    let obj1 = arg1(dependencyMap[3]);
    canReportUserResult = obj1.canReportMessage(message);
  }
  const callback = importAllResult.useCallback(() => {
    message(closeMediaModal[4]).hideActionSheet();
  }, []);
  importAllResult = callback;
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = importAllResult.useCallback(() => {
    callback();
    closeMediaModal();
    channel(closeMediaModal[5]).transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = importAllResult.useCallback(() => {
    callback();
    channel(closeMediaModal[6]).copy(message.id);
    const obj = channel(closeMediaModal[6]);
    channel(closeMediaModal[7]).presentIdCopied();
  }, items1);
  const callback3 = importAllResult.useCallback(() => {
    callback();
    const result = channel(closeMediaModal[8]).showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  obj = {};
  obj = { hasIcons: true };
  obj1 = {};
  const obj2 = { IconComponent: arg1(dependencyMap[11]).ChatArrowRightIcon };
  obj1.icon = callback(arg1(dependencyMap[10]).ActionSheetRow.Icon, obj2);
  const intl = arg1(dependencyMap[12]).intl;
  obj1.label = intl.string(arg1(dependencyMap[12]).t.+TSRGD);
  obj1.onPress = callback1;
  const items3 = [callback(arg1(dependencyMap[10]).ActionSheetRow, obj1), , ];
  if (setting) {
    const obj3 = {};
    const obj4 = { IconComponent: arg1(dependencyMap[13]).IdIcon };
    obj3.icon = callback(arg1(dependencyMap[10]).ActionSheetRow.Icon, obj4);
    const intl2 = arg1(dependencyMap[12]).intl;
    obj3.label = intl2.string(arg1(dependencyMap[12]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = callback(arg1(dependencyMap[10]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = {};
    const obj6 = { IconComponent: arg1(dependencyMap[14]).FlagIcon };
    obj5.icon = callback(arg1(dependencyMap[10]).ActionSheetRow.Icon, obj6);
    const intl3 = arg1(dependencyMap[12]).intl;
    obj5.label = intl3.string(arg1(dependencyMap[12]).t.+78Pfm);
    obj5.onPress = callback3;
    obj5.variant = "danger";
    canReportUserResult = callback(arg1(dependencyMap[10]).ActionSheetRow, obj5);
  }
  items3[2] = canReportUserResult;
  obj.children = items3;
  obj.children = closure_5(arg1(dependencyMap[10]).ActionSheetRow.Group, obj);
  return callback(arg1(dependencyMap[9]).ActionSheet, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
