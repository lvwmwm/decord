// Module ID: 14673
// Function ID: 14674
// Name: VideoQuestTranscriptActionSheet
// Dependencies: [19, 17, 7122, 21, 4837, 588, 1619, 9771, 9765, 6624, 6571, 1127, 6038, 5280, 4833, 2]
// Exports: default

// Module 14673 (VideoQuestTranscriptActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import AssetUtils from "AssetUtils" /* 9771 */;
import react from "react" /* 19 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7122 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const QuestActionCreators = tmp(9765);
const ActivityIndicator = react_native.ActivityIndicator;
({ FetchStatus: hasOwnProperty, useVideoQuestUIStore: metroRequire } = VideoQuestUIStore);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { content: obj2, loadingSpinner: { height: 100 } };
obj2 = { paddingBottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Stack;
  let intl;
  let items2;
  let obj2;
  let obj3;
  let obj4;
  let tmp8;
  const f117796 = (children, index) => {
    const obj = { variant: "heading-md/normal", color: "text-muted", children };
    return closure_1_7(quest(dependencyMap[14]).Text, obj, index);
  };
  quest = quest.quest;
  let tmp = closure_9();
  const tmp2 = closure_6((transcript) => transcript.transcript);
  importDefault = tmp2;
  const tmp3 = dependencyMap;
  let items = [quest, tmp2];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const effect = react.useEffect(() => {
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == importDefault || tmp5.questId !== tmp3.id;
    if (!tmp6) {
      tmp6 = tmp5.fetchStatus === hasOwnProperty.NONE;
    }
    if (!tmp6) {
      let tmp9 = tmp5.fetchStatus === hasOwnProperty.SUCCESS;
      if (tmp9) {
        let url;
        if (questAsset != null) {
          url = questAsset.url;
        }
        tmp9 = url !== tmp5.url;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      const tmpResult = QuestActionCreators;
      const videoTranscript = tmpResult.fetchVideoTranscript(tmp3, true);
    }
  }, items);
  let text;
  const useMemo = react.useMemo;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = useMemo(() => {
    let items;
    text = undefined;
    if (text != null) {
      text = tmp.text;
    }
    if (null == text) {
      items = [];
    } else {
      const str = text.text;
      const parts = str.split("\n");
      const mapped = parts.map((item) => item.trim());
      items = mapped.filter((item) => item.length > 0);
    }
    return items;
  }, items1);
  let obj = { scrollable: true, header: closure_7(BottomSheetTitleHeader, obj2), children: tmp7(BottomSheetScrollView, obj3) };
  const ActionSheet = quest(6624).ActionSheet;
  obj2 = { title: intl.string(quest(1127).t["1YS80z"]) };
  BottomSheetTitleHeader = quest(6571).BottomSheetTitleHeader;
  intl = quest(1127).intl;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: tmp8(Stack, obj4) };
  BottomSheetScrollView = quest(6038).BottomSheetScrollView;
  let fetchStatus;
  obj4 = { spacing: 16, style: tmp.content, children: items2 };
  Stack = quest(5280).Stack;
  tmp8 = closure_8;
  if (tmp2 != null) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp7Result = fetchStatus === constants.FETCHING;
  if (tmp7Result) {
    const obj5 = { style: tmp.loadingSpinner, size: "large" };
    tmp7Result = tmp7(ActivityIndicator, obj5);
  }
  items2 = [tmp7Result, memo.length > 0 && memo.map(f117796)];
  memo.length > 0 && memo.map(f117796);
  return closure_7(ActionSheet, obj);
};
