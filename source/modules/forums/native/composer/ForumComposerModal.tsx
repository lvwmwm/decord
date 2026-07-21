// Module ID: 9538
// Function ID: 74286
// Name: clearDraft
// Dependencies: []
// Exports: default

// Module 9538 (clearDraft)
function clearDraft(arg0) {
  importDefault(dependencyMap[13]).clearDraft(arg0, DraftType.ThreadSettings);
  const obj = importDefault(dependencyMap[13]);
  importDefault(dependencyMap[13]).clearDraft(arg0, DraftType.ChannelMessage);
  const obj2 = importDefault(dependencyMap[13]);
  importDefault(dependencyMap[14]).clearAll(arg0, DraftType.ChannelMessage);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[4]).DraftType;
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
let closure_12 = obj.createStyles(obj);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
  let isEdit;
  parentChannelId = parentChannelId.parentChannelId;
  const arg1 = parentChannelId;
  const threadId = parentChannelId.threadId;
  const importDefault = threadId;
  ({ messageId: closure_2, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  const dependencyMap = isEdit;
  let View;
  function handleClose(arg0) {
    let onCancel;
    let onConfirm;
    if (null != stateFromStores) {
      if (arg0) {
        let tmp31Result = tmp31(tmp32[18]);
        const result = tmp31Result.closeCreateForumPostModal();
        callback2(parentChannelId);
      } else {
        tmp31Result = tmp31(tmp32[19]);
        let obj = { type: tmp31(tmp32[20]).KeyboardTypes.SYSTEM };
        tmp31Result.setKeyboardType(obj);
        const draft = store2.getDraft(parentChannelId, ChannelMessage.ChannelMessage);
        let threadSettings = store2.getThreadSettings(parentChannelId);
        if (null == threadSettings) {
          threadSettings = store2.getThreadDraftWithParentMessageId(threadId(isEdit[21]).castChannelIdAsMessageId(parentChannelId));
          const obj3 = threadId(isEdit[21]);
        }
        if (isEdit) {
          const result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          callback2(parentChannelId);
          const obj8 = parentChannelId(isEdit[18]);
        } else {
          if (draft.length <= 0) {
            if (arr2.length <= 0) {
              let name;
              if (null != threadSettings) {
                name = threadSettings.name;
              }
              let str = "";
              if (null != name) {
                str = name;
              }
            }
          }
          obj = {
            onConfirm() {
                    let obj = callback(closure_3[22]);
                    obj = { guildId: closure_4.guild_id, channelId: closure_4.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj);
                    const result1 = callback(closure_3[18]).closeCreateForumPostModal();
                  },
            onCancel() {
                    const result = callback(closure_3[18]).closeCreateForumPostModal();
                    callback2(callback);
                  }
          };
          ({ onConfirm, onCancel } = obj);
          const result2 = callback(isEdit[10]).dismissGlobalKeyboard();
          const obj5 = callback(isEdit[10]);
          const obj1 = {};
          const intl = parentChannelId(isEdit[12]).intl;
          obj1.title = intl.string(parentChannelId(isEdit[12]).t.Fz1512);
          const intl2 = parentChannelId(isEdit[12]).intl;
          obj1.body = intl2.string(parentChannelId(isEdit[12]).t.YBgepz);
          const intl3 = parentChannelId(isEdit[12]).intl;
          obj1.confirmText = intl3.string(parentChannelId(isEdit[12]).t.Rnli6C);
          const intl4 = parentChannelId(isEdit[12]).intl;
          obj1.cancelText = intl4.string(parentChannelId(isEdit[12]).t.3NnH6V);
          obj1.onConfirm = onConfirm;
          obj1.onCancel = onCancel;
          obj1.hideActionSheet = true;
          obj1.isDismissable = true;
          threadId(isEdit[11]).show(obj1);
          const obj6 = threadId(isEdit[11]);
        }
      }
    }
  }
  let closure_5 = handleClose;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => store.getChannel(parentChannelId), items1);
  View = stateFromStores;
  const tmp = callback();
  const items2 = [closure_6];
  const items3 = [threadId];
  const stateFromStores1 = arg1(dependencyMap[16]).useStateFromStores(items2, () => store.getChannel(threadId), items3);
  const tmp3 = importDefault(dependencyMap[17])(parentChannelId);
  const obj3 = arg1(dependencyMap[16]);
  const items4 = [closure_10];
  const stateFromStores2 = arg1(dependencyMap[16]).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != closure_2) {
        firstMessage = message.getMessage(threadId).firstMessage;
      }
    }
    return firstMessage;
  });
  const obj4 = arg1(dependencyMap[16]);
  const items5 = [closure_5];
  const stateFromStores3 = arg1(dependencyMap[16]).useStateFromStores(items5, () => handleClose.isOpen());
  const obj5 = arg1(dependencyMap[16]);
  arg1(dependencyMap[23]).useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp8Result = null;
  if (null != stateFromStores) {
    tmp8Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          obj = { value: importDefault(dependencyMap[15])(parentChannelId.analyticsLocations).analyticsLocations };
          obj = { style: tmp.container };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj.importantForAccessibility = str;
          const obj1 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp3, onClose: handleClose, isEdit };
          obj.children = jsx(importDefault(dependencyMap[24]), obj1);
          obj.children = <View {...obj} />;
          tmp8Result = tmp8(arg1(dependencyMap[15]).AnalyticsLocationProvider, obj);
          const tmp11 = View;
        } else {
          tmp8Result = null;
        }
      } else {
        tmp8Result = null;
      }
    }
  }
  return tmp8Result;
};
