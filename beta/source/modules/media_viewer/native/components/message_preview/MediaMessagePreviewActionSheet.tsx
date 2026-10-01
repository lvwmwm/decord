// Module ID: 12531
// Function ID: 12532
// Name: MediaMessagePreviewActionSheet
// Dependencies: [19, 21, 2021, 6707, 4800, 1101, 6610, 4527, 8089, 6618, 6620, 11236, 1115, 10092, 8124, 2]

// Module 12531 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1101 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ReportModals from "ReportModals" /* 8089 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(function MediaMessagePreviewActionSheet(channel) {
  let Icon;
  let Icon2;
  let Icon3;
  let closeMediaModal;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj4;
  let obj6;
  let user;
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[2]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let canReportUserResult = !user.isNonUserBot();
  user.isNonUserBot();
  if (canReportUserResult) {
    const tmpResult = channel(closeMediaModal[3]);
    canReportUserResult = tmpResult.canReportUser(user);
  }
  if (canReportUserResult) {
    const tmpResult2 = channel(closeMediaModal[3]);
    canReportUserResult = tmpResult2.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    const obj = message(closeMediaModal[4]);
    obj.hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closeMediaModal();
    const obj = router_utils;
    obj.transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    const obj = ClipboardUtils;
    obj.copy(message.id);
    const obj2 = ToastUtils;
    obj2.presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const obj = ReportModals;
    const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  const ActionSheet = tmp(tmp2[9]).ActionSheet;
  const Group = tmp(tmp2[10]).ActionSheetRow.Group;
  let obj = { icon: closure_4(Icon, obj2), label: intl.string(tmp(tmp2[12]).t["+TSRGD"]), onPress: callback1 };
  const ActionSheetRow = tmp(tmp2[10]).ActionSheetRow;
  obj2 = { IconComponent: tmp(tmp2[11]).ChatArrowRightIcon };
  Icon = tmp(tmp2[10]).ActionSheetRow.Icon;
  intl = tmp(tmp2[12]).intl;
  const items3 = [closure_4(ActionSheetRow, obj), , ];
  const tmp11 = closure_5;
  if (setting) {
    const obj3 = { icon: closure_4(Icon2, obj4), label: intl2.string(channel(closeMediaModal[12]).t.zBoHlf), onPress: callback2 };
    const ActionSheetRow2 = tmp(tmp2[10]).ActionSheetRow;
    obj4 = { IconComponent: channel(closeMediaModal[13]).IdIcon };
    Icon2 = tmp(tmp2[10]).ActionSheetRow.Icon;
    intl2 = tmp(tmp2[12]).intl;
    setting = tmp10(ActionSheetRow2, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: closure_4(Icon3, obj6), label: intl3.string(channel(closeMediaModal[12]).t["+78Pfm"]), onPress: callback3, variant: "danger" };
    const ActionSheetRow3 = tmp(tmp2[10]).ActionSheetRow;
    obj6 = { IconComponent: channel(closeMediaModal[14]).FlagIcon };
    Icon3 = tmp(tmp2[10]).ActionSheetRow.Icon;
    intl3 = tmp(tmp2[12]).intl;
    canReportUserResult = tmp10(ActionSheetRow3, obj5);
  }
  items3[2] = canReportUserResult;
  const obj7 = { children: tmp11(Group, { hasIcons: true, children: items3 }) };
  return closure_4(ActionSheet, obj7);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
