// Module ID: 13937
// Function ID: 105915
// Name: VideoQuestTranscriptActionSheet
// Dependencies: []
// Exports: default

// Module 13937 (VideoQuestTranscriptActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
({ FetchStatus: closure_5, useVideoQuestUIStore: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.content = obj;
obj.loadingSpinner = { height: 100 };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const tmp = callback3();
  const tmp2 = callback((transcript) => transcript.transcript);
  const importDefault = tmp2;
  const items = [quest, tmp2];
  const effect = React.useEffect(() => {
    const questAsset = quest(closure_2[7]).getQuestAsset(quest, quest(closure_2[7]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp2 = null == tmp2;
    if (!tmp2) {
      tmp2 = tmp2.questId !== quest.id;
    }
    if (!tmp2) {
      tmp2 = tmp2.fetchStatus === constants.NONE;
    }
    if (!tmp2) {
      let tmp9 = tmp2.fetchStatus === constants.SUCCESS;
      if (tmp9) {
        let url;
        if (null != questAsset) {
          url = questAsset.url;
        }
        tmp9 = url !== tmp2.url;
      }
      tmp2 = tmp9;
    }
    if (tmp2) {
      const videoTranscript = quest(closure_2[8]).fetchVideoTranscript(quest, true);
      const obj2 = quest(closure_2[8]);
    }
  }, items);
  let text;
  if (null != tmp2) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = React.useMemo(() => {
    let text;
    if (null != tmp2) {
      text = tmp2.text;
    }
    if (null == text) {
      let items = [];
    } else {
      const parts = tmp2.text.split("\n");
      const mapped = parts.map((str) => str.trim());
      items = mapped.filter((arg0) => arg0.length > 0);
      const str = tmp2.text;
    }
    return items;
  }, items1);
  let obj = { scrollable: true };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.1YS80z);
  obj.header = callback2(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj);
  obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[6])().bottom } };
  const obj1 = { spacing: 16, style: tmp.content };
  let fetchStatus;
  if (null != tmp2) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp9 = fetchStatus === constants.FETCHING;
  if (tmp9) {
    const obj2 = { style: tmp.loadingSpinner, size: "large" };
    tmp9 = callback2(ActivityIndicator, obj2);
  }
  const items2 = [
    tmp9,
    memo.length > 0 && memo.map((children) => {
      const obj = { cachedAt: "tappableDots", edpbxy: "getQuestOrbMultiplierSource", children };
      return callback(quest(closure_2[14]).Text, obj, arg1);
    })
  ];
  obj1.children = items2;
  obj.children = closure_8(arg1(dependencyMap[13]).Stack, obj1);
  obj.children = callback2(arg1(dependencyMap[12]).BottomSheetScrollView, obj);
  return callback2(arg1(dependencyMap[9]).ActionSheet, obj);
};
