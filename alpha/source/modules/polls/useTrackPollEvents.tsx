// Module ID: 12783
// Function ID: 12784
// Name: useTrackPollEvents
// Dependencies: [19, 1072, 5897, 12773, 2]
// Exports: useTrackPollCreationEvents

// Module 12783 (useTrackPollEvents)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5897 */;
import PollLayoutTypes from "PollLayoutTypes" /* 12773 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_0, closure_1, closure_2, image, stickers_count;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export function useTrackPollCreationEvents(answers, allowMultiSelect) {
  let items;
  let attachments_count = answers;
  let obj = {
    trackPollCreationCancelled: react.useCallback(() => {
      attachments_count = 0;
      allowMultiSelect = 0;
      stickers_count = 0;
      const item = attachments_count.forEach((image) => {
        image = image.image;
        if (null != image) {
          if (null != image.emoji) {
            closure_1 = closure_1 + 1;
          } else if (null != image.stickerId) {
            closure_2 = closure_2 + 1;
          } else if (null != image.mediaAttachmentState) {
            closure_0 = closure_0 + 1;
          }
        }
      });
      const obj = AppAnalyticsUtilsDefault;
      const obj2 = { answers_count: attachments_count.length, attachments_count, emojis_count: allowMultiSelect, stickers_count, allow_multiselect: allowMultiSelect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT };
      obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, obj2);
    }, items)
  };
  items = [answers, allowMultiSelect];
  return obj;
}
