// Module ID: 10183
// Function ID: 10184
// Name: ForumComposerModal
// Dependencies: [19, 17, 10184, 4858, 7694, 8200, 7452, 21, 5009, 575, 1889, 5954, 1114, 8335, 9757, 7320, 504, 10185, 10182, 1496, 1624, 11, 8196, 6998, 10186, 2]
// Exports: default

// Module 10183 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1496 */;
import KeyboardTypes from "KeyboardTypes" /* 1624 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1889 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import DraftStore2 from "DraftStore" /* 7694 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8335 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9757 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10182 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10184 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8200 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7452 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;

let obj2;
const View = react_native.View;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
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
    let intl;
    let intl2;
    let intl3;
    let intl4;
    if (null != stateFromStores) {
      if (arg0) {
        const tmp55Result = ForumComposerModalActionCreators;
        let result = tmp55Result.closeCreateForumPostModal();
        const obj10 = DraftActionCreatorsDefault;
        obj10.clearDraft(parentChannelId, DraftType.ThreadSettings);
        const obj11 = DraftActionCreatorsDefault;
        obj11.clearDraft(parentChannelId, DraftType.ChannelMessage);
        const obj12 = UploadAttachmentActionCreatorsDefault;
        obj12.clearAll(parentChannelId, DraftType.ChannelMessage);
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
          const obj5 = ForumComposerModalActionCreators;
          let result1 = obj5.closeCreateForumPostModal();
          const obj6 = DraftActionCreatorsDefault;
          obj6.clearDraft(parentChannelId, DraftType.ThreadSettings);
          const obj7 = DraftActionCreatorsDefault;
          obj7.clearDraft(parentChannelId, DraftType.ChannelMessage);
          const obj8 = UploadAttachmentActionCreatorsDefault;
          obj8.clearAll(parentChannelId, DraftType.ChannelMessage);
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
          let obj3 = KeyboardManagerUtilsAll;
          const result2 = obj3.dismissGlobalKeyboard();
          let obj4 = {
            title: intl.string(intl5.t.Fz1512),
            body: intl2.string(intl5.t.YBgepz),
            confirmText: intl3.string(intl5.t.Rnli6C),
            cancelText: intl4.string(intl5.t["3NnH6V"]),
            onConfirm() {
                    const obj = parentChannelId(isEdit[22]);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                    const obj3 = parentChannelId(isEdit[18]);
                    const result1 = obj3.closeCreateForumPostModal();
                  },
            onCancel() {
                    const obj = parentChannelId(isEdit[18]);
                    const result = obj.closeCreateForumPostModal();
                    const obj2 = threadId(isEdit[13]);
                    obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj3 = threadId(isEdit[13]);
                    obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj4 = threadId(isEdit[14]);
                    obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                  },
            hideActionSheet: true,
            isDismissable: true
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl5.intl;
          intl2 = intl5.intl;
          intl3 = intl5.intl;
          intl4 = intl5.intl;
          show(obj4);
        }
      }
    }
  }
  const analyticsLocations = parentChannelId.analyticsLocations;
  const tmp = closure_12();
  const analyticsLocations2 = threadId(isEdit[15])(analyticsLocations).analyticsLocations;
  let obj = parentChannelId(isEdit[16]);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj3 = parentChannelId(isEdit[16]);
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  const tmp6 = threadId(isEdit[17])(parentChannelId);
  let obj4 = parentChannelId(isEdit[16]);
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
  let obj5 = parentChannelId(isEdit[16]);
  const items5 = [handleClose];
  const stateFromStores3 = obj5.useStateFromStores(items5, () => handleClose.isOpen());
  let obj6 = parentChannelId(isEdit[23]);
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
          obj7 = { style: tmp.container, importantForAccessibility: str, children: tmp11(tmp2(tmp3[24]), obj8) };
          str = undefined;
          const AnalyticsLocationProvider = tmp4(tmp3[15]).AnalyticsLocationProvider;
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
};
