// Module ID: 12272
// Function ID: 95840
// Dependencies: [31, 33, 3803, 5667, 4098, 1198, 5490, 3830, 7689, 5498, 5500, 9958, 1212, 7609, 9453, 2]

// Module 12272
import importAllResult from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = importAllResult.memo(function MediaMessagePreviewActionSheet(channel) {
  let closeMediaModal;
  let user;
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[2]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let canReportUserResult = !user.isNonUserBot();
  if (canReportUserResult) {
    let obj = channel(closeMediaModal[3]);
    canReportUserResult = obj.canReportUser(user);
  }
  if (canReportUserResult) {
    let obj1 = channel(closeMediaModal[3]);
    canReportUserResult = obj1.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[4]).hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closeMediaModal();
    channel(closeMediaModal[5]).transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    channel(closeMediaModal[6]).copy(message.id);
    const obj = channel(closeMediaModal[6]);
    channel(closeMediaModal[7]).presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const result = channel(closeMediaModal[8]).showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  obj = {};
  obj = { hasIcons: true };
  obj1 = {};
  const obj2 = { IconComponent: channel(closeMediaModal[11]).ChatArrowRightIcon };
  obj1.icon = callback(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj2);
  const intl = channel(closeMediaModal[12]).intl;
  obj1.label = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj1.onPress = callback1;
  const items3 = [callback(channel(closeMediaModal[10]).ActionSheetRow, obj1), , ];
  if (setting) {
    const obj3 = {};
    const obj4 = { IconComponent: channel(closeMediaModal[13]).IdIcon };
    obj3.icon = callback(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj4);
    const intl2 = channel(closeMediaModal[12]).intl;
    obj3.label = intl2.string(channel(closeMediaModal[12]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = callback(channel(closeMediaModal[10]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = {};
    const obj6 = { IconComponent: channel(closeMediaModal[14]).FlagIcon };
    obj5.icon = callback(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj6);
    const intl3 = channel(closeMediaModal[12]).intl;
    obj5.label = intl3.string(channel(closeMediaModal[12]).t["+78Pfm"]);
    obj5.onPress = callback3;
    obj5.variant = "danger";
    canReportUserResult = callback(channel(closeMediaModal[10]).ActionSheetRow, obj5);
  }
  items3[2] = canReportUserResult;
  obj.children = items3;
  obj.children = closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, obj);
  return callback(channel(closeMediaModal[9]).ActionSheet, obj);
});
let result = require("explicitContentFromProto").fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
