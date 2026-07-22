// Module ID: 13928
// Function ID: 105860
// Name: useVideoQuestCaptions
// Dependencies: []
// Exports: useVideoQuestCaptions

// Module 13928 (useVideoQuestCaptions)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  let tmp4;
  const questAsset = arg1(dependencyMap[2]).getQuestAsset(quest, arg1(dependencyMap[2]).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  let url;
  if (null != questAsset) {
    url = questAsset.url;
  }
  const arg1 = url;
  const obj = arg1(dependencyMap[2]);
  [tmp4, closure_1] = callback(React.useState(constants.NONE), 2);
  const captions = callback(React.useState(null), 2);
  const callback = captions[1];
  const items = [url];
  const effect = React.useEffect(() => {
    if (null != url) {
      const HTTP = url(callback[3]).HTTP;
      const obj = { url, rejectWithError: true };
      const value = HTTP.get(obj);
      value.then((text) => {
        callback3(callback(callback2[4]).parseVtt(text.text).cues);
        callback2(constants.SUCCESS);
      }).catch(() => {
        callback2(constants.ERROR);
      });
      const nextPromise = value.then((text) => {
        callback3(callback(callback2[4]).parseVtt(text.text).cues);
        callback2(constants.SUCCESS);
      });
    } else {
      callback(constants.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};
