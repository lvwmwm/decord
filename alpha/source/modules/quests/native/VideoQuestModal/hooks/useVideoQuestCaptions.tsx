// Module ID: 17052
// Function ID: 17053
// Name: useVideoQuestCaptions
// Dependencies: [32, 19, 9675, 1283, 17053, 2]
// Exports: useVideoQuestCaptions

// Module 17052 (useVideoQuestCaptions)
import HTTPUtils from "HTTPUtils" /* 1283 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  let captions;
  let closure_2;
  let tmp4;
  let url;
  let obj = url(9675);
  const questAsset = obj.getQuestAsset(quest, url(9675).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  const tmp3 = _slicedToArray(react.useState(constants.NONE), 2);
  [tmp4, dependencyMap] = tmp3;
  [captions, _slicedToArray] = react.useState(null);
  const items = [url];
  const effect = react.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      let obj = { url: tmp, rejectWithError: true };
      const value = HTTP.get(obj);
      const nextPromise = value.then((text) => {
        try {
          const obj = url(dependencyMap[4]);
          closure_1_2(obj.parseVtt(text.text).cues);
          closure_1_1(constants.SUCCESS);
        } catch (err) {
          closure_1_1(constants.ERROR);
        }
      });
      nextPromise.catch(() => {
        closure_1_1(constants.ERROR);
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions, status };
};
