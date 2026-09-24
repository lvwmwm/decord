// Module ID: 13307
// Function ID: 13308
// Name: MediaMessagePreviewActionSheet
// Dependencies: [19, 21, 558, 568, 2023, 7565, 4757, 1105, 7468, 4489, 8937, 7477, 11900, 1119, 10961, 8972, 7481, 2]

// Module 13307 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1105 */;
import ToastUtils from "ToastUtils" /* 4489 */;
import ClipboardUtils from "ClipboardUtils" /* 7468 */;
import ReportModals from "ReportModals" /* 8937 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(closeMediaModal[3]).c(27);
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === message) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[3] = R;
      const tmp7 = R;
    } else {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    R = tmp7;
    if (cResult[4] === channel.guild_id) {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const fn = function _() {
      R();
      closeMediaModal();
      router_utils.transitionToGuild(channel.guild_id, channel.id, message.id);
    };
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = closeMediaModal;
    cResult[7] = message.id;
    cResult[8] = fn;
  }
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    class R {
      constructor() {
        obj = message(closeMediaModal[6]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    canReportUserResult = obj2.canReportUser(user);
  }
  if (canReportUserResult) {
    class R {
      constructor() {
        obj = message(closeMediaModal[6]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    canReportUserResult = obj3.canReportMessage(message);
  }
  cResult[0] = message;
  cResult[1] = user;
  cResult[2] = canReportUserResult;
}) : ((channel) => {
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    canReportUserResult = tmp(tmp2[5]).canReportUser(user);
    const tmpResult = tmp(tmp2[5]);
  }
  if (canReportUserResult) {
    canReportUserResult = tmp(tmp2[5]).canReportMessage(message);
    const tmpResult2 = tmp(tmp2[5]);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[6]).hideActionSheet();
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
  let obj = { icon: closure_4(channel(closeMediaModal[11]).ActionSheetRow.Icon, { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon }), label: null, onPress: null };
  const intl = tmp(tmp2[13]).intl;
  obj.label = intl.string(channel(closeMediaModal[13]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[11]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: null, label: null, onPress: null };
    const obj4 = { IconComponent: tmp(tmp2[14]).IdIcon };
    obj3.icon = tmp10(tmp(tmp2[11]).ActionSheetRow.Icon, obj4);
    const intl2 = tmp(tmp2[13]).intl;
    obj3.label = intl2.string(tmp(tmp2[13]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = tmp10(tmp(tmp2[11]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj6 = { IconComponent: tmp(tmp2[15]).FlagIcon };
    obj5.icon = tmp10(tmp(tmp2[11]).ActionSheetRow.Icon, obj6);
    const intl3 = tmp(tmp2[13]).intl;
    obj5.label = intl3.string(tmp(tmp2[13]).t["+78Pfm"]);
    obj5.onPress = callback3;
    canReportUserResult = tmp10(tmp(tmp2[11]).ActionSheetRow, obj5);
  }
  const obj2 = { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon };
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[16]).ActionSheet, { children: closure_5(channel(closeMediaModal[11]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
}));
