// Module ID: 9586
// Function ID: 74653
// Name: useCreateThread
// Dependencies: [5, 31, 4468, 4123, 5462, 8022, 6691, 6923, 8026, 8025, 7080, 4711, 4670, 8027, 2]
// Exports: default, useCreateForumPost

// Module 9586 (useCreateThread)
import getIsPrivate from "getIsPrivate";
import result from "result";
import { DraftType } from "_isNativeReflectConstruct";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  let _location;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let useDefaultThreadName;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = importDefault(5462)().analyticsLocations;
  let obj = analyticsLocations(8022);
  obj = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload) {
      let closure_0 = id;
      let closure_1 = attachmentsToUpload;
      let obj = outer1_1(outer1_2[6]);
      obj = {
        location: outer1_6.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          let obj = analyticsLocations(outer2_2[8]);
          obj = { file, guildId: guildId.getGuildId(), analyticsLocations: guildId, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: guildId.id, uploads: closure_1, draftType: outer2_5.FirstThreadMessage, resetState: true };
            outer2_1(outer2_2[9]).setUploads(obj);
            const obj3 = outer2_1(outer2_2[9]);
          }
        }
      };
      obj.sendMessage(id.id, outer1_1(outer1_2[7]).parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  let appliedTags;
  let onThreadCreated;
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let name;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
  const items = [analyticsLocations, parentChannel];
  const callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  let obj = parentChannel(8022);
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
