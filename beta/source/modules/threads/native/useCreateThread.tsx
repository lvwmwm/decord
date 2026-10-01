// Module ID: 9718
// Function ID: 9719
// Name: useCreateThread
// Dependencies: [5, 19, 5200, 4829, 6583, 8606, 6876, 7095, 8610, 8608, 7258, 5446, 5474, 8611, 2]
// Exports: default, useCreateForumPost

// Module 9718 (useCreateThread)
import MessageConstants from "MessageConstants" /* 4829 */;
import DraftStore from "DraftStore" /* 5200 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import MessageParserDefault from "MessageParser" /* 7095 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 8610 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let files;

const DraftType = DraftStore.DraftType;
const MessageSendLocation = MessageConstants.MessageSendLocation;
const result = size.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  let _location;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let useDefaultThreadName;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj = analyticsLocations(8606);
  let obj2 = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload, arg2) {
      const guildId = id;
      const uploads = attachmentsToUpload;
      id = id.id;
      const sendMessage = MessageActionCreatorsDefault.sendMessage;
      let obj = MessageParserDefault;
      let obj2 = {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          const obj = handleUploadAttachmentErrors;
          const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations, code, reason };
          const tmp2 = guildId;
          if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
            const obj4 = { channelId: tmp2.id, uploads, draftType: DraftType.FirstThreadMessage, resetState: true };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.setUploads(obj4);
          }
        }
      };
      sendMessage(id, obj.parse(id, arg2), undefined, obj2);
    }
  };
  return obj.useCreateThreadCommon(obj2);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  let appliedTags;
  let onThreadCreated;
  let str;
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let FirstThreadMessage;
    let closure_1;
    const guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0, value) {
      const self = this;
      const self2 = this;
      const obj7 = new analyticsLocations(closure_2_2[10])();
      const obj8 = guildId(closure_2_2[11]);
      const maxFileSizeResult = obj8.maxFileSize(guildId.getGuildId());
      const obj9 = guildId(closure_2_2[12]);
      const effectiveUploadLimit = obj9.getEffectiveUploadLimit(maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_3) {
          obj7.cancel();
          const obj2 = { channelId: guildId.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          const obj = obj7(baseMaxSize[9]);
          obj.setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: guildId.getGuildId(), analyticsLocations };
          const tmp10 = obj7(baseMaxSize[13]);
          tmp10(obj3);
        }
      });
      await obj7.uploadFiles(guildId);
      files = value;
      let obj = { uploaderFile: obj7._file, files };
      return obj;
    })();
  });
  const items = [analyticsLocations, parentChannel];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const tmp2 = parentChannel(8606);
  let obj = { parentChannel, name: str, appliedTags, analyticsLocations, onThreadCreated, upload: callback };
  str = undefined;
  const useCreateForumPostCommon = tmp2.useCreateForumPostCommon;
  if (threadSettings != null) {
    str = threadSettings.name;
  }
  if (str == null) {
    str = "";
  }
  return useCreateForumPostCommon(obj);
};
