// Module ID: 14101
// Function ID: 108394
// Name: VideoQuestTranscriptActionSheet
// Dependencies: [31, 27, 6943, 33, 4130, 689, 1557, 9494, 9480, 5498, 5186, 1212, 5189, 4541, 4126, 2]
// Exports: default

// Module 14101 (VideoQuestTranscriptActionSheet)
import result from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import _toPropertyKey from "_toPropertyKey";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ FetchStatus: closure_5, useVideoQuestUIStore: closure_6 } = _toPropertyKey);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingSpinner = { height: 100 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_toPropertyKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = callback((transcript) => transcript.transcript);
  const importDefault = tmp2;
  let items = [quest, tmp2];
  const effect = React.useEffect(() => {
    const questAsset = quest(outer1_2[7]).getQuestAsset(quest, quest(outer1_2[7]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    tmp2 = null == tmp2;
    if (!tmp2) {
      tmp2 = tmp2.questId !== quest.id;
    }
    if (!tmp2) {
      tmp2 = tmp2.fetchStatus === outer1_5.NONE;
    }
    if (!tmp2) {
      let tmp9 = tmp2.fetchStatus === outer1_5.SUCCESS;
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
      const videoTranscript = quest(outer1_2[8]).fetchVideoTranscript(quest, true);
      const obj2 = quest(outer1_2[8]);
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
  const intl = quest(1212).intl;
  obj.title = intl.string(quest(1212).t["1YS80z"]);
  obj.header = callback2(quest(5186).BottomSheetTitleHeader, obj);
  obj = { contentContainerStyle: { paddingBottom: importDefault(1557)().bottom } };
  const obj1 = { spacing: 16, style: tmp.content };
  let fetchStatus;
  if (null != tmp2) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp9 = fetchStatus === constants.FETCHING;
  if (tmp9) {
    let obj2 = { style: tmp.loadingSpinner, size: "large" };
    tmp9 = callback2(ActivityIndicator, obj2);
  }
  const items2 = [
    tmp9,
    memo.length > 0 && memo.map((children) => {
      const obj = { variant: "heading-md/normal", color: "text-muted", children };
      return outer1_7(quest(outer1_2[14]).Text, obj, arg1);
    })
  ];
  obj1.children = items2;
  obj.children = closure_8(quest(4541).Stack, obj1);
  obj.children = callback2(quest(5189).BottomSheetScrollView, obj);
  return callback2(quest(5498).ActionSheet, obj);
};
