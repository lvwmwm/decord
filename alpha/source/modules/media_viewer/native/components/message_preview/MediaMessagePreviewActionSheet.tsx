// Module ID: 12938
// Function ID: 12939
// Name: MediaMessagePreviewActionSheet
// Dependencies: [19, 21, 558, 576, 2040, 6973, 5054, 1112, 6872, 4765, 7695, 6881, 12675, 1126, 9968, 9507, 6885, 2]

// Module 12938 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1112 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import ReportModals from "ReportModals" /* 7695 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let react = react_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaMessagePreviewActionSheet(channel) {
  let Icon2;
  let Icon3;
  let closeMediaModal;
  let closure_3;
  let items;
  let obj11;
  let obj2;
  let obj7;
  let obj9;
  let tmp20;
  let user;
  let obj = channel(closeMediaModal[3]);
  const cResult = obj.c(27);
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === message) {
    let tmp5;
    let tmp9;
    if (cResult[1] === user) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w() {
        const obj = message(closeMediaModal[6]);
        obj.hideActionSheet();
      };
      cResult[3] = fn;
      tmp9 = fn;
    } else {
      tmp9 = cResult[3];
    }
    react = tmp9;
    if (cResult[4] === channel.guild_id) {
      if (cResult[5] === channel.id) {
        if (cResult[6] === closeMediaModal) {
          let tmp10;
          let tmp14;
          let tmp13;
          let tmp17;
          if (cResult[7] === message.id) {
            tmp10 = cResult[8];
          }
          if (cResult[9] !== message.id) {
            class A {
              constructor() {
                closure_3();
                const obj = ClipboardUtils;
                obj.copy(message.id);
                const obj2 = ToastUtils;
                obj2.presentIdCopied();
              }
            }
            cResult[9] = message.id;
            cResult[10] = A;
          } else {
            class A {
              constructor() {
                closure_3();
                const obj = ClipboardUtils;
                obj.copy(message.id);
                const obj2 = ToastUtils;
                obj2.presentIdCopied();
              }
            }
          }
          if (cResult[11] !== message) {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            cResult[11] = message;
            cResult[12] = M;
          } else {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            const obj4 = { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon };
            const Icon = tmp(tmp2[11]).ActionSheetRow.Icon;
            const tmp15 = closure_4(Icon, obj4);
            const intl = tmp(tmp2[13]).intl;
            const stringResult = intl.string(channel(closeMediaModal[13]).t["+TSRGD"]);
            class R {
              constructor() {
                closure_3();
                closeMediaModal();
                const obj = router_utils;
                obj.transitionToGuild(channel.guild_id, channel.id, message.id);
              }
            }
            cResult[13] = tmp15;
            cResult[14] = stringResult;
            tmp14 = stringResult;
            tmp13 = tmp15;
          } else {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            tmp14 = cResult[14];
          }
          if (cResult[15] !== tmp10) {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            const obj5 = { icon: tmp13, label: tmp14, onPress: tmp10 };
            const tmp18 = closure_4(channel(closeMediaModal[11]).ActionSheetRow, obj5);
            cResult[15] = tmp10;
            class R {
              constructor() {
                closure_3();
                closeMediaModal();
                const obj = router_utils;
                obj.transitionToGuild(channel.guild_id, channel.id, message.id);
              }
            }
            cResult[16] = tmp18;
            tmp17 = tmp18;
          } else {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
          }
          if (cResult[17] === setting) {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            if (cResult[20] === tmp5) {
              class M {
                constructor() {
                  closure_3();
                  const obj = ReportModals;
                  const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                }
              }
              if (cResult[23] === tmp22) {
                class M {
                  constructor() {
                    closure_3();
                    const obj = ReportModals;
                    const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                  }
                }
              }
              const obj6 = { children: closure_5(channel(closeMediaModal[11]).ActionSheetRow.Group, obj7) };
              const ActionSheet = tmp(tmp2[16]).ActionSheet;
              obj7 = { hasIcons: true, children: items };
              items = [, , ];
              class R {
                constructor() {
                  closure_3();
                  closeMediaModal();
                  const obj = router_utils;
                  obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                }
              }
              items[1] = tmp19;
              items[2] = tmp22;
              cResult[23] = tmp22;
              cResult[24] = tmp17;
              cResult[25] = tmp19;
              cResult[26] = closure_4(ActionSheet, obj6);
              const tmp28 = closure_4(ActionSheet, obj6);
            }
            let tmp23 = tmp5;
            if (tmp23) {
              class M {
                constructor() {
                  closure_3();
                  const obj = ReportModals;
                  const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                }
              }
              const obj8 = { icon: closure_4(Icon3, obj9), label: tmp24(channel(closeMediaModal[13]).t["+78Pfm"]), onPress: tmp12, variant: "danger" };
              const ActionSheetRow2 = tmp(tmp2[11]).ActionSheetRow;
              obj9 = { IconComponent: channel(closeMediaModal[15]).FlagIcon };
              Icon3 = tmp(tmp2[11]).ActionSheetRow.Icon;
              const intl3 = tmp(tmp2[13]).intl;
              class R {
                constructor() {
                  closure_3();
                  closeMediaModal();
                  const obj = router_utils;
                  obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                }
              }
              tmp23 = closure_4(ActionSheetRow2, obj8);
            }
            cResult[20] = tmp5;
            cResult[21] = tmp12;
            class R {
              constructor() {
                closure_3();
                closeMediaModal();
                const obj = router_utils;
                obj.transitionToGuild(channel.guild_id, channel.id, message.id);
              }
            }
            cResult[22] = tmp23;
          }
          class R {
            constructor() {
              closure_3();
              closeMediaModal();
              const obj = router_utils;
              obj.transitionToGuild(channel.guild_id, channel.id, message.id);
            }
          }
          if (tmp20) {
            class M {
              constructor() {
                closure_3();
                const obj = ReportModals;
                const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
              }
            }
            const obj10 = { icon: closure_4(Icon2, obj11), label: tmp21(channel(closeMediaModal[13]).t.zBoHlf), onPress: tmp11 };
            const ActionSheetRow = tmp(tmp2[11]).ActionSheetRow;
            obj11 = { IconComponent: channel(closeMediaModal[14]).IdIcon };
            Icon2 = tmp(tmp2[11]).ActionSheetRow.Icon;
            const intl2 = tmp(tmp2[13]).intl;
            class R {
              constructor() {
                closure_3();
                closeMediaModal();
                const obj = router_utils;
                obj.transitionToGuild(channel.guild_id, channel.id, message.id);
              }
            }
            tmp20 = closure_4(ActionSheetRow, obj10);
          }
          cResult[17] = setting;
          cResult[18] = tmp11;
          cResult[19] = tmp20;
        }
      }
    }
    class R {
      constructor() {
        closure_3();
        closeMediaModal();
        const obj = router_utils;
        obj.transitionToGuild(channel.guild_id, channel.id, message.id);
      }
    }
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = closeMediaModal;
    cResult[7] = message.id;
    cResult[8] = R;
    tmp10 = R;
  }
  let canReportUserResult = !user.isNonUserBot();
  user.isNonUserBot();
  if (canReportUserResult) {
    class M {
      constructor() {
        closure_3();
        const obj = ReportModals;
        const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
      }
    }
    canReportUserResult = obj2.canReportUser(user);
  }
  if (canReportUserResult) {
    class M {
      constructor() {
        closure_3();
        const obj = ReportModals;
        const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
      }
    }
    canReportUserResult = obj3.canReportMessage(message);
  }
  cResult[0] = message;
  cResult[1] = user;
  cResult[2] = canReportUserResult;
  tmp5 = canReportUserResult;
}) : (function MediaMessagePreviewActionSheet(channel) {
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
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let canReportUserResult = !user.isNonUserBot();
  user.isNonUserBot();
  if (canReportUserResult) {
    const tmpResult = channel(closeMediaModal[5]);
    canReportUserResult = tmpResult.canReportUser(user);
  }
  if (canReportUserResult) {
    const tmpResult2 = channel(closeMediaModal[5]);
    canReportUserResult = tmpResult2.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    const obj = message(closeMediaModal[6]);
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
  const ActionSheet = tmp(tmp2[16]).ActionSheet;
  const Group = tmp(tmp2[11]).ActionSheetRow.Group;
  let obj = { icon: closure_4(Icon, obj2), label: intl.string(tmp(tmp2[13]).t["+TSRGD"]), onPress: callback1 };
  const ActionSheetRow = tmp(tmp2[11]).ActionSheetRow;
  obj2 = { IconComponent: tmp(tmp2[12]).ChatArrowRightIcon };
  Icon = tmp(tmp2[11]).ActionSheetRow.Icon;
  intl = tmp(tmp2[13]).intl;
  const items3 = [closure_4(ActionSheetRow, obj), , ];
  const tmp11 = closure_5;
  if (setting) {
    const obj3 = { icon: closure_4(Icon2, obj4), label: intl2.string(channel(closeMediaModal[13]).t.zBoHlf), onPress: callback2 };
    const ActionSheetRow2 = tmp(tmp2[11]).ActionSheetRow;
    obj4 = { IconComponent: channel(closeMediaModal[14]).IdIcon };
    Icon2 = tmp(tmp2[11]).ActionSheetRow.Icon;
    intl2 = tmp(tmp2[13]).intl;
    setting = tmp10(ActionSheetRow2, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: closure_4(Icon3, obj6), label: intl3.string(channel(closeMediaModal[13]).t["+78Pfm"]), onPress: callback3, variant: "danger" };
    const ActionSheetRow3 = tmp(tmp2[11]).ActionSheetRow;
    obj6 = { IconComponent: channel(closeMediaModal[15]).FlagIcon };
    Icon3 = tmp(tmp2[11]).ActionSheetRow.Icon;
    intl3 = tmp(tmp2[13]).intl;
    canReportUserResult = tmp10(ActionSheetRow3, obj5);
  }
  items3[2] = canReportUserResult;
  const obj7 = { children: tmp11(Group, { hasIcons: true, children: items3 }) };
  return closure_4(ActionSheet, obj7);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
