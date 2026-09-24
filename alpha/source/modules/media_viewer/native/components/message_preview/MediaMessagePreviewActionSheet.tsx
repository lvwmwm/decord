// Module ID: 13364
// Function ID: 13365
// Name: MediaMessagePreviewActionSheet
// Dependencies: [19, 21, 2020, 7619, 4796, 1101, 7522, 4522, 8987, 7530, 7532, 12077, 1115, 10977, 9022, 2]

// Module 13364 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1101 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import ClipboardUtils from "ClipboardUtils" /* 7522 */;
import ReportModals from "ReportModals" /* 8987 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default noop.memo(function MediaMessagePreviewActionSheet(channel) {
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[2]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    canReportUserResult = tmp(tmp2[3]).canReportUser(user);
    const tmpResult = tmp(tmp2[3]);
  }
  if (canReportUserResult) {
    canReportUserResult = tmp(tmp2[3]).canReportMessage(message);
    const tmpResult2 = tmp(tmp2[3]);
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
    router_utils.transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    ClipboardUtils.copy(message.id);
    ToastUtils.presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const result = ReportModals.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  let obj = { icon: closure_4(channel(closeMediaModal[10]).ActionSheetRow.Icon, { IconComponent: channel(closeMediaModal[11]).ChatArrowRightIcon }), label: null, onPress: null };
  const intl = tmp(tmp2[12]).intl;
  obj.label = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[10]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: null, label: null, onPress: null };
    const obj4 = { IconComponent: tmp(tmp2[13]).IdIcon };
    obj3.icon = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj4);
    const intl2 = tmp(tmp2[12]).intl;
    obj3.label = intl2.string(tmp(tmp2[12]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = tmp10(tmp(tmp2[10]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj6 = { IconComponent: tmp(tmp2[14]).FlagIcon };
    obj5.icon = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj6);
    const intl3 = tmp(tmp2[12]).intl;
    obj5.label = intl3.string(tmp(tmp2[12]).t["+78Pfm"]);
    obj5.onPress = callback3;
    canReportUserResult = tmp10(tmp(tmp2[10]).ActionSheetRow, obj5);
  }
  const obj2 = { IconComponent: channel(closeMediaModal[11]).ChatArrowRightIcon };
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[9]).ActionSheet, { children: closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
});
