// Module ID: 10766
// Function ID: 10767
// Name: ForumComposerModal
// Dependencies: [19, 17, 10274, 4892, 8117, 8124, 8119, 21, 5043, 575, 8179, 10062, 6379, 504, 10767, 10765, 1499, 1627, 11, 10768, 8116, 7197, 10769, 2]
// Exports: default

// Module 10766 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1499 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import DraftStore2 from "DraftStore" /* 8117 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8179 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 10062 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10765 */;
import showForumComposerCloseAlertDefault from "showForumComposerCloseAlert" /* 10768 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10274 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8124 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 8119 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;

let obj2;
const View = react_native.View;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
  let isEdit;
  let obj7;
  let obj8;
  let str;
  let tmp12;
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: dependencyMap, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  function handleClose(arg0) {
    if (null != stateFromStores) {
      if (arg0) {
        const tmp35Result = ForumComposerModalActionCreators;
        let result = tmp35Result.closeCreateForumPostModal();
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
                    const obj = parentChannelId(dependencyMap[20]);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                    const obj3 = parentChannelId(dependencyMap[15]);
                    const result1 = obj3.closeCreateForumPostModal();
                  },
            onCancel() {
                    const obj = parentChannelId(dependencyMap[15]);
                    const result = obj.closeCreateForumPostModal();
                    const obj2 = threadId(dependencyMap[10]);
                    obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj3 = threadId(dependencyMap[10]);
                    obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj4 = threadId(dependencyMap[11]);
                    obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                  }
          };
          showForumComposerCloseAlertDefault(obj3);
        }
      }
    }
  }
  const analyticsLocations = parentChannelId.analyticsLocations;
  const tmp = closure_11();
  const analyticsLocations2 = threadId(6379)(analyticsLocations).analyticsLocations;
  let obj = parentChannelId(504);
  const items = [handleClose];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj3 = parentChannelId(504);
  const items2 = [handleClose];
  const items3 = [threadId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  const tmp6 = threadId(10767)(parentChannelId);
  let obj4 = parentChannelId(504);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != dependencyMap) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj5 = parentChannelId(504);
  const items5 = [stateFromStores];
  const stateFromStores3 = obj5.useStateFromStores(items5, () => stateFromStores.isOpen());
  let obj6 = parentChannelId(7197);
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
          obj7 = { style: tmp.container, importantForAccessibility: str, children: tmp11(tmp2(10769), obj8) };
          str = undefined;
          const AnalyticsLocationProvider = tmp4(6379).AnalyticsLocationProvider;
          tmp12 = isEdit;
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
