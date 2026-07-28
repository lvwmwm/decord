// Module ID: 14148
// Function ID: 108644
// Name: useVideoQuestCaptions
// Dependencies: [57, 31, 9455, 507, 14149, 2]
// Exports: useVideoQuestCaptions

// Module 14148 (useVideoQuestCaptions)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_4 = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = require("resolveAsset").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  let dependencyMap;
  let tmp4;
  const questAsset = url(9455).getQuestAsset(quest, url(9455).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (null != questAsset) {
    url = questAsset.url;
  }
  let obj = url(9455);
  [tmp4, dependencyMap] = callback(React.useState(constants.NONE), 2);
  const captions = callback(React.useState(null), 2);
  callback = captions[1];
  const items = [url];
  const effect = React.useEffect(() => {
    if (null != url) {
      const HTTP = url(outer1_1[3]).HTTP;
      const obj = { url, rejectWithError: true };
      const value = HTTP.get(obj);
      value.then((text) => {
        outer1_2(url(outer2_1[4]).parseVtt(text.text).cues);
        outer1_1(outer2_4.SUCCESS);
      }).catch(() => {
        outer1_1(outer2_4.ERROR);
      });
      const nextPromise = value.then((text) => {
        outer1_2(url(outer2_1[4]).parseVtt(text.text).cues);
        outer1_1(outer2_4.SUCCESS);
      });
    } else {
      callback(outer1_4.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};
