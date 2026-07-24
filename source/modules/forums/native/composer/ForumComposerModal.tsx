// Module ID: 9582
// Function ID: 74560
// Name: clearDraft
// Dependencies: [31, 27, 9583, 1348, 4468, 4467, 5656, 33, 4130, 689, 1820, 4471, 1212, 7018, 8025, 5462, 566, 9584, 9581, 1454, 1555, 21, 7008, 5093, 9585, 2]
// Exports: default

// Module 9582 (clearDraft)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function clearDraft(arg0) {
  importDefault(7018).clearDraft(arg0, DraftType.ThreadSettings);
  const obj = importDefault(7018);
  importDefault(7018).clearDraft(arg0, DraftType.ChannelMessage);
  const obj2 = importDefault(7018);
  importDefault(8025).clearAll(arg0, DraftType.ChannelMessage);
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
  let importAll;
  let isEdit;
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: importAll, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  let stateFromStores;
  function handleClose(arg0) {
    let onCancel;
    let onConfirm;
    if (null != stateFromStores) {
      if (arg0) {
        let tmp31Result = tmp31(tmp32[18]);
        let result = tmp31Result.closeCreateForumPostModal();
        outer1_13(parentChannelId);
      } else {
        tmp31Result = tmp31(tmp32[19]);
        let obj = { type: tmp31(tmp32[20]).KeyboardTypes.SYSTEM };
        tmp31Result.setKeyboardType(obj);
        const draft = outer1_7.getDraft(parentChannelId, outer1_8.ChannelMessage);
        let threadSettings = outer1_7.getThreadSettings(parentChannelId);
        if (null == threadSettings) {
          threadSettings = outer1_7.getThreadDraftWithParentMessageId(threadId(isEdit[21]).castChannelIdAsMessageId(parentChannelId));
          const obj3 = threadId(isEdit[21]);
        }
        if (isEdit) {
          let result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          outer1_13(parentChannelId);
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
                    let obj = parentChannelId(isEdit[22]);
                    obj = { guildId: outer1_4.guild_id, channelId: outer1_4.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj);
                    const result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
                  },
            onCancel() {
                    const result = parentChannelId(isEdit[18]).closeCreateForumPostModal();
                    outer2_13(outer1_0);
                  }
          };
          ({ onConfirm, onCancel } = obj);
          const result2 = outer1_2(isEdit[10]).dismissGlobalKeyboard();
          const obj5 = outer1_2(isEdit[10]);
          const obj1 = {};
          const intl = parentChannelId(isEdit[12]).intl;
          obj1.title = intl.string(parentChannelId(isEdit[12]).t.Fz1512);
          const intl2 = parentChannelId(isEdit[12]).intl;
          obj1.body = intl2.string(parentChannelId(isEdit[12]).t.YBgepz);
          const intl3 = parentChannelId(isEdit[12]).intl;
          obj1.confirmText = intl3.string(parentChannelId(isEdit[12]).t.Rnli6C);
          const intl4 = parentChannelId(isEdit[12]).intl;
          obj1.cancelText = intl4.string(parentChannelId(isEdit[12]).t["3NnH6V"]);
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
  let obj = parentChannelId(isEdit[16]);
  const items = [closure_6];
  const items1 = [parentChannelId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(parentChannelId), items1);
  const tmp = _createForOfIteratorHelperLoose();
  const items2 = [closure_6];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(isEdit[16]).useStateFromStores(items2, () => outer1_6.getChannel(threadId), items3);
  const tmp3 = threadId(isEdit[17])(parentChannelId);
  let obj3 = parentChannelId(isEdit[16]);
  const items4 = [closure_10];
  const stateFromStores2 = parentChannelId(isEdit[16]).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != closure_2) {
        firstMessage = outer1_10.getMessage(threadId).firstMessage;
      }
    }
    return firstMessage;
  });
  const obj4 = parentChannelId(isEdit[16]);
  const items5 = [handleClose];
  const stateFromStores3 = parentChannelId(isEdit[16]).useStateFromStores(items5, () => handleClose.isOpen());
  let obj5 = parentChannelId(isEdit[16]);
  parentChannelId(isEdit[23]).useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp8Result = null;
  if (null != stateFromStores) {
    tmp8Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          obj = { value: threadId(isEdit[15])(parentChannelId.analyticsLocations).analyticsLocations };
          obj = { style: tmp.container };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj.importantForAccessibility = str;
          let obj1 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp3, onClose: handleClose, isEdit };
          obj.children = jsx(threadId(isEdit[24]), { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp3, onClose: handleClose, isEdit });
          obj.children = <stateFromStores style={tmp.container} />;
          tmp8Result = tmp8(parentChannelId(isEdit[15]).AnalyticsLocationProvider, obj);
          const tmp11 = stateFromStores;
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
