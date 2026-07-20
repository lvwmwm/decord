// Module ID: 11310
// Function ID: 88027
// Name: useTrackPollCreationEvents
// Dependencies: []
// Exports: useTrackPollCreationEvents

// Module 11310 (useTrackPollCreationEvents)
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = function useTrackPollCreationEvents(answers, allowMultiSelect) {
  allowMultiSelect = answers;
  const importDefault = allowMultiSelect;
  const items = [answers, allowMultiSelect];
  return {
    trackPollCreationCancelled: React.useCallback(() => {
      const answers = 0;
      const allowMultiSelect = 0;
      let closure_2 = 0;
      const item = answers.forEach((image) => {
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
      let obj = allowMultiSelect(closure_2[2]);
      obj = { answers_count: answers.length, attachments_count: answers, emojis_count: allowMultiSelect, stickers_count: closure_2, allow_multiselect: allowMultiSelect, layout_type: answers(closure_2[3]).PollLayoutTypes.DEFAULT };
      obj.trackWithMetadata(constants.POLL_CREATION_CANCELLED, obj);
    }, items)
  };
};
