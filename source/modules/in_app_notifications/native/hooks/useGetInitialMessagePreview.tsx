// Module ID: 10306
// Function ID: 79559
// Name: useGetInitialMessagePreview
// Dependencies: [31, 3768, 5679, 2]
// Exports: useGetInitialMessagePreview

// Module 10306 (useGetInitialMessagePreview)
import result from "result";
import _callSuper from "_callSuper";
import { MessageSnapshotRecord } from "_callSuper";

const result = require("isForwardMessage").fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return React.useMemo(() => {
    const tmp = new outer1_3(message);
    tmp.attachments = [];
    tmp.stickerItems = [];
    if (tmp.embeds.length > 0) {
      const embeds = tmp.embeds;
      tmp.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
    }
    if (message(outer1_1[2])(message)) {
      const messageSnapshots = tmp.messageSnapshots;
      tmp.messageSnapshots = messageSnapshots.map((message) => {
        message = message.message;
        const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
        return new outer2_4({ message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) });
      });
    }
    return tmp;
  }, items);
};
