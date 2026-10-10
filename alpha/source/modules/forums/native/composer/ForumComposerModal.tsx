// Module ID: 9692
// Function ID: 9693
// Name: ForumComposerModal
// Dependencies: [19, 17, 9693, 2065, 7243, 7907, 6978, 21, 5092, 587, 1894, 5300, 1126, 7918, 9262, 558, 576, 6851, 504, 9694, 9691, 1501, 1629, 11, 7903, 6206, 9695, 2]

// Module 9692 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1894 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import DraftStore2 from "DraftStore" /* 7243 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7918 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9262 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 9691 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9693 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7907 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6978 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;

let obj2;
function showForumComposerCloseAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  const obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = { title: intl.string(intl5.t.Fz1512), body: intl2.string(intl5.t.YBgepz), confirmText: intl3.string(intl5.t.Rnli6C), cancelText: intl4.string(intl5.t["3NnH6V"]), onConfirm, onCancel, hideActionSheet: true, isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  show(obj2);
}
const View = react_native.View;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumComposerModal(parentChannelId) {
  let first;
  let isEdit;
  let open;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp9;
  const tmp = parentChannelId;
  let obj = parentChannelId(isEdit[16]);
  const cResult = obj.c(34);
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  const messageId = parentChannelId.messageId;
  isEdit = parentChannelId.isEdit;
  let tmp4 = undefined !== isEdit;
  const analyticsLocations = parentChannelId.analyticsLocations;
  if (tmp4) {
    tmp4 = isEdit;
  }
  isEdit = tmp4;
  let tmp5 = closure_12();
  const tmp6 = threadId;
  const analyticsLocations2 = threadId(tmp2[17])(analyticsLocations).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentChannelId) {
    const fn = function y() {
      return ChannelStore.getChannel(parentChannelId);
    };
    const items1 = [parentChannelId];
    cResult[1] = parentChannelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(isEdit[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp13 = ChannelStore;
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== threadId) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const items3 = [threadId];
    cResult[5] = threadId;
    cResult[6] = L;
    cResult[7] = items3;
    tmp15 = items3;
    tmp14 = L;
  } else {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult4 = tmp(isEdit[18]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp14, tmp15);
  tmp6(isEdit[19])(parentChannelId);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const items4 = [ForumPostMessagesStore];
    cResult[8] = items4;
    tmp18 = items4;
  } else {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
  }
  if (cResult[9] === messageId) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const tmpResult5 = tmp(isEdit[18]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, K);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
      const items5 = [NativeMenuStore];
      class O {
        constructor() {
          return open.isOpen();
        }
      }
      cResult[12] = items5;
      cResult[13] = O;
    } else {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
    }
    tmp(isEdit[18]);
    if (cResult[14] === tmp4) {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
    }
    function handleClose(arg0) {
      if (null != stateFromStores) {
        if (arg0) {
          const tmp34Result = ForumComposerModalActionCreators;
          let result = tmp34Result.closeCreateForumPostModal();
          const obj9 = DraftActionCreatorsDefault;
          obj9.clearDraft(parentChannelId, DraftType.ThreadSettings);
          const obj10 = DraftActionCreatorsDefault;
          obj10.clearDraft(parentChannelId, DraftType.ChannelMessage);
          const obj11 = UploadAttachmentActionCreatorsDefault;
          obj11.clearAll(parentChannelId, DraftType.ChannelMessage);
        } else {
          let obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
          const setKeyboardType = KeyboardUIStore.setKeyboardType;
          KeyboardUIStore;
          setKeyboardType(obj);
          const draft = DraftStore.getDraft(parentChannelId, DraftType.ChannelMessage);
          let threadSettings = DraftStore.getThreadSettings(parentChannelId);
          const tmp5 = DraftStore;
          if (threadSettings == null) {
            const getThreadDraftWithParentMessageId = tmp5.getThreadDraftWithParentMessageId;
            let obj2 = SnowflakeUtilsDefault;
            threadSettings = getThreadDraftWithParentMessageId(obj2.castChannelIdAsMessageId(tmp6));
          }
          const tmp13 = isEdit;
          if (tmp13) {
            let obj4 = ForumComposerModalActionCreators;
            let result1 = obj4.closeCreateForumPostModal();
            const obj5 = DraftActionCreatorsDefault;
            obj5.clearDraft(parentChannelId, DraftType.ThreadSettings);
            const obj6 = DraftActionCreatorsDefault;
            obj6.clearDraft(parentChannelId, DraftType.ChannelMessage);
            const obj7 = UploadAttachmentActionCreatorsDefault;
            obj7.clearAll(parentChannelId, DraftType.ChannelMessage);
          } else {
            if (draft.length <= 0) {
              if (arr2.length <= 0) {
                let str;
                if (threadSettings != null) {
                  str = threadSettings.name;
                }
                if (str == null) {
                  str = "";
                }
              }
            }
            let obj3 = {
              onConfirm() {
                      const obj = parentChannelId(isEdit[24]);
                      const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                      const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                      const obj3 = parentChannelId(isEdit[20]);
                      const result1 = obj3.closeCreateForumPostModal();
                    },
              onCancel() {
                      const obj = parentChannelId(isEdit[20]);
                      const result = obj.closeCreateForumPostModal();
                      const obj2 = threadId(isEdit[13]);
                      obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                      const obj3 = threadId(isEdit[13]);
                      obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                      const obj4 = threadId(isEdit[14]);
                      obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                    }
            };
            showForumComposerCloseAlert(obj3);
          }
        }
      }
    }
    cResult[14] = tmp4;
    cResult[15] = stateFromStores;
    cResult[16] = parentChannelId;
    cResult[17] = handleClose;
  }
  class K {
    constructor() {
      let firstMessage = null;
      if (null != threadId) {
        firstMessage = null;
        if (null != messageId) {
          firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
        }
      }
      return firstMessage;
    }
  }
  cResult[9] = messageId;
  cResult[10] = threadId;
  cResult[11] = K;
}) : (function ForumComposerModal(parentChannelId) {
  let isEdit;
  let obj7;
  let obj8;
  let str;
  let tmp12;
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: importAll, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  function handleClose(arg0) {
    if (null != stateFromStores) {
      if (arg0) {
        const tmp34Result = ForumComposerModalActionCreators;
        let result = tmp34Result.closeCreateForumPostModal();
        const obj9 = DraftActionCreatorsDefault;
        obj9.clearDraft(parentChannelId, DraftType.ThreadSettings);
        const obj10 = DraftActionCreatorsDefault;
        obj10.clearDraft(parentChannelId, DraftType.ChannelMessage);
        const obj11 = UploadAttachmentActionCreatorsDefault;
        obj11.clearAll(parentChannelId, DraftType.ChannelMessage);
      } else {
        let obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
        const setKeyboardType = KeyboardUIStore.setKeyboardType;
        KeyboardUIStore;
        setKeyboardType(obj);
        const draft = DraftStore.getDraft(parentChannelId, DraftType.ChannelMessage);
        let threadSettings = DraftStore.getThreadSettings(parentChannelId);
        const tmp5 = DraftStore;
        if (threadSettings == null) {
          const getThreadDraftWithParentMessageId = tmp5.getThreadDraftWithParentMessageId;
          let obj2 = SnowflakeUtilsDefault;
          threadSettings = getThreadDraftWithParentMessageId(obj2.castChannelIdAsMessageId(tmp6));
        }
        const tmp13 = isEdit;
        if (tmp13) {
          let obj4 = ForumComposerModalActionCreators;
          let result1 = obj4.closeCreateForumPostModal();
          const obj5 = DraftActionCreatorsDefault;
          obj5.clearDraft(parentChannelId, DraftType.ThreadSettings);
          const obj6 = DraftActionCreatorsDefault;
          obj6.clearDraft(parentChannelId, DraftType.ChannelMessage);
          const obj7 = UploadAttachmentActionCreatorsDefault;
          obj7.clearAll(parentChannelId, DraftType.ChannelMessage);
        } else {
          if (draft.length <= 0) {
            if (arr2.length <= 0) {
              let str;
              if (threadSettings != null) {
                str = threadSettings.name;
              }
              if (str == null) {
                str = "";
              }
            }
          }
          let obj3 = {
            onConfirm() {
                    const obj = parentChannelId(isEdit[24]);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                    const obj3 = parentChannelId(isEdit[20]);
                    const result1 = obj3.closeCreateForumPostModal();
                  },
            onCancel() {
                    const obj = parentChannelId(isEdit[20]);
                    const result = obj.closeCreateForumPostModal();
                    const obj2 = threadId(isEdit[13]);
                    obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj3 = threadId(isEdit[13]);
                    obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj4 = threadId(isEdit[14]);
                    obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                  }
          };
          showForumComposerCloseAlert(obj3);
        }
      }
    }
  }
  const analyticsLocations = parentChannelId.analyticsLocations;
  const tmp = closure_12();
  const analyticsLocations2 = threadId(isEdit[17])(analyticsLocations).analyticsLocations;
  let obj = parentChannelId(isEdit[18]);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj3 = parentChannelId(isEdit[18]);
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  const tmp6 = threadId(isEdit[19])(parentChannelId);
  let obj4 = parentChannelId(isEdit[18]);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != importAll) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj5 = parentChannelId(isEdit[18]);
  const items5 = [handleClose];
  const stateFromStores3 = obj5.useStateFromStores(items5, () => handleClose.isOpen());
  let obj6 = parentChannelId(isEdit[25]);
  obj6.useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp11Result = null;
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  if (null != stateFromStores) {
    tmp11Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          let obj2 = { value: analyticsLocations2, children: tmp11(tmp12, obj7) };
          obj7 = { style: tmp.container, importantForAccessibility: str, children: tmp11(tmp2(tmp3[26]), obj8) };
          str = undefined;
          const AnalyticsLocationProvider = tmp4(tmp3[17]).AnalyticsLocationProvider;
          tmp12 = stateFromStores;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj8 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit };
          tmp11Result = tmp11(AnalyticsLocationProvider, obj2);
        } else {
          tmp11Result = null;
        }
      } else {
        tmp11Result = null;
      }
    }
  }
  return tmp11Result;
});
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default tmp3;
