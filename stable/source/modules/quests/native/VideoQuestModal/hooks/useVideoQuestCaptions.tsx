// Module ID: 15226
// Function ID: 15227
// Name: useVideoQuestCaptions
// Dependencies: [32, 19, 11422, 1270, 15227, 2]
// Exports: useVideoQuestCaptions

// Module 15226 (useVideoQuestCaptions)
import HTTPUtils from "HTTPUtils" /* 1270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  const questAsset = url(11422).getQuestAsset(quest, url(11422).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(11422);
  [tmp4, dependencyMap] = noop.useState(constants.NONE);
  const captions = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = captions[1];
  const items = [url];
  const effect = noop.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      const obj = { url: tmp, rejectWithError: true };
      value = HTTP.get(obj);
      value.then((text) => {
        try {
          closure_1_2(url(15227).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      }).catch(() => {
        dependencyMap(constants.ERROR);
      });
      const nextPromise = value.then((text) => {
        try {
          closure_1_2(url(15227).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};
