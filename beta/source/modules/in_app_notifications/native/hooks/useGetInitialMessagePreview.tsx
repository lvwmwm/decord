// Module ID: 9596
// Function ID: 9597
// Name: useGetInitialMessagePreview
// Dependencies: [19, 4480, 6720, 2]
// Exports: useGetInitialMessagePreview

// Module 9596 (useGetInitialMessagePreview)
import MessageRecord2 from "MessageRecord" /* 4480 */;
import isForwardMessageDefault from "isForwardMessage" /* 6720 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MessageRecord = MessageRecord2;

const MessageSnapshotRecord = MessageRecord2.MessageSnapshotRecord;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return react.useMemo(() => {
    let tmp = message;
    const tmp2 = new MessageRecord(message);
    tmp2.attachments = [];
    tmp2.stickerItems = [];
    if (tmp2.embeds.length > 0) {
      const embeds = tmp2.embeds;
      tmp2.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
    }
    if (isForwardMessageDefault(tmp)) {
      const messageSnapshots = tmp2.messageSnapshots;
      tmp2.messageSnapshots = messageSnapshots.map((message) => {
        const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
        message = message.message;
        const tmp = new closure_1_4(obj);
        return tmp;
      });
    }
    return tmp2;
  }, items);
};
