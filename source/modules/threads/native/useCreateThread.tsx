// Module ID: 9542
// Function ID: 74379
// Name: useCreateThread
// Dependencies: [31, 27, 33, 4126, 689, 4316, 4657, 1212, 5387, 4642, 4124, 4630, 2, 57, 31]
// Exports: default, useCreateForumPost

// Module 9542 (useCreateThread)
import closure_3 from "module_31";
import keys from "keys";
import { DraftType } from "module_33";
import { MessageSendLocation } from "_createForOfIteratorHelperLoose";
import module_31 from "module_31";

const result = module_31.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  let _location;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let useDefaultThreadName;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const arg1 = importDefault(dependencyMap[4])().analyticsLocations;
  let obj = arg1(dependencyMap[5]);
  obj = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload) {
      const analyticsLocations = id;
      let obj = attachmentsToUpload(closure_2[6]);
      obj = {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          let obj = file(closure_2[8]);
          obj = { file, guildId: file.getGuildId(), analyticsLocations: file, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: file.id, uploads: code, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
            code(closure_2[9]).setUploads(obj);
            const obj3 = code(closure_2[9]);
          }
        }
      };
      obj.sendMessage(id.id, attachmentsToUpload(closure_2[7]).parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  let appliedTags;
  let onThreadCreated;
  parentChannel = parentChannel.parentChannel;
  const arg1 = parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let name;
  ({ appliedTags, onThreadCreated } = parentChannel);
  const analyticsLocations = importDefault(dependencyMap[4])().analyticsLocations;
  const importDefault = analyticsLocations;
  const items = [analyticsLocations, parentChannel];
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  let obj = arg1(dependencyMap[5]);
  obj = { parentChannel };
  if (null != threadSettings) {
    name = threadSettings.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.name = str;
  obj.appliedTags = appliedTags;
  obj.analyticsLocations = analyticsLocations;
  obj.onThreadCreated = onThreadCreated;
  obj.upload = callback;
  return obj.useCreateForumPostCommon(obj);
};
