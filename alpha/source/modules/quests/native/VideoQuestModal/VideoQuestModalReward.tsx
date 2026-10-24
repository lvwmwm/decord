// Module ID: 16491
// Function ID: 16492
// Name: VideoQuestModalReward
// Dependencies: [19, 21, 4971, 558, 576, 16469, 9570, 9567, 16474, 5234, 1128, 5977, 587, 2]

// Module 16491 (VideoQuestModalReward)
import nativeDefault from "native" /* 587 */;
import QuestUtils from "QuestUtils" /* 9567 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 16474 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoQuestModalReward(arg0) {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj6;
  let onTextBlockLayout;
  let quest;
  let style;
  let tmp7;
  let withQuestName;
  let withRewardAvailableCopy;
  let withRewardTileAnimation;
  let obj = quest(576);
  const cResult = obj.c(22);
  ({ style, withQuestName, withRewardAvailableCopy, size, withRewardTileAnimation, onTextBlockLayout } = arg0);
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const tmpResult = quest(16469);
  quest = tmpResult.useVideoQuestModalContext().quest;
  const tmpResult2 = quest(9570);
  const questTaskDetails = tmpResult2.useQuestTaskDetails(quest);
  if (cResult[0] !== quest.id) {
    const fn = function s() {
      const obj = QuestUtils;
      const obj2 = { questId: quest.id };
      const result = obj.openRewardDetailsBottomSheet(obj2);
    };
    cResult[0] = quest.id;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const tmp8 = closure_6();
  if (cResult[2] === tmp7) {
    if (cResult[3] === quest) {
      if (cResult[4] === str) {
        if (cResult[5] === questTaskDetails.percentComplete) {
          let tmp9;
          if (cResult[6] === withRewardTileAnimation) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === quest.config) {
            if (cResult[9] === tmp8) {
              let tmp11;
              let tmp14;
              if (cResult[10] === (undefined === withQuestName || withQuestName)) {
                tmp11 = cResult[11];
              }
              if (cResult[12] !== (undefined === withRewardAvailableCopy || withRewardAvailableCopy)) {
                let tmp15 = tmp5;
                if (tmp15) {
                  let obj2 = { variant: "heading-sm/medium", color: "text-subtle", children: intl2.string(quest(1128).t["1Wvve2"]) };
                  const Text2 = tmp(5234).Text;
                  intl2 = tmp(1128).intl;
                  tmp15 = closure_4(Text2, obj2);
                }
                cResult[12] = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
                cResult[13] = tmp15;
                tmp14 = tmp15;
              } else {
                tmp14 = cResult[13];
              }
              if (cResult[14] === onTextBlockLayout) {
                if (cResult[15] === tmp11) {
                  let tmp17;
                  if (cResult[16] === tmp14) {
                    tmp17 = cResult[17];
                  }
                  if (cResult[18] === style) {
                    if (cResult[19] === tmp9) {
                      let tmp21;
                      if (cResult[20] === tmp17) {
                        tmp21 = cResult[21];
                      }
                      return tmp21;
                    }
                  }
                  const obj3 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style, children: items };
                  const Stack2 = tmp(5977).Stack;
                  items = [tmp9, tmp17];
                  const tmp24 = closure_5(Stack2, obj3);
                  cResult[18] = style;
                  cResult[19] = tmp9;
                  cResult[20] = tmp17;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
              const obj4 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: items1 };
              const Stack = tmp(5977).Stack;
              items1 = [tmp11, tmp14];
              const tmp20 = closure_5(Stack, obj4);
              cResult[14] = onTextBlockLayout;
              cResult[15] = tmp11;
              cResult[16] = tmp14;
              cResult[17] = tmp20;
              tmp17 = tmp20;
            }
          }
          let tmp12 = tmp4;
          if (tmp12) {
            const obj5 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp8.questName, children: intl.formatToPlainString(quest(1128).t.EAYZAr, obj6) };
            const Text = tmp(5234).Text;
            intl = tmp(1128).intl;
            obj6 = { questName: quest.config.messages.questName };
            tmp12 = closure_4(Text, obj5);
          }
          cResult[8] = quest.config;
          cResult[9] = tmp8;
          cResult[10] = undefined === withQuestName || withQuestName;
          cResult[11] = tmp12;
          tmp11 = tmp12;
        }
      }
    }
  }
  const obj7 = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: tmp7, withAnimation: withRewardTileAnimation };
  const tmp10 = closure_4(QuestProgressIndicatorDefault, obj7);
  cResult[2] = tmp7;
  cResult[3] = quest;
  cResult[4] = str;
  cResult[5] = questTaskDetails.percentComplete;
  cResult[6] = withRewardTileAnimation;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : (function VideoQuestModalReward(withQuestName) {
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj7;
  let onTextBlockLayout;
  let quest;
  let withRewardTileAnimation;
  withQuestName = withQuestName.withQuestName;
  let tmp = undefined === withQuestName;
  const style = withQuestName.style;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = withQuestName.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  size = withQuestName.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = withQuestName);
  let obj = quest(16469);
  quest = obj.useVideoQuestModalContext().quest;
  let obj2 = quest(9570);
  const items = [quest.id];
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const callback = react.useCallback(() => {
    const obj = QuestUtils;
    const obj2 = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj2);
  }, items);
  const obj3 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style, children: items1 };
  const tmp7 = closure_6();
  const Stack = quest(5977).Stack;
  items1 = [, ];
  const obj4 = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  items1[0] = closure_4(QuestProgressIndicatorDefault, obj4);
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: items2 };
  const Stack2 = quest(5977).Stack;
  if (tmp) {
    const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: intl.formatToPlainString(quest(1128).t.EAYZAr, obj7) };
    const Text = tmp3(5234).Text;
    intl = tmp3(1128).intl;
    obj7 = { questName: quest.config.messages.questName };
    tmp = tmp9(Text, obj6);
  }
  items2 = [tmp, ];
  if (tmp9Result) {
    const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: intl2.string(quest(1128).t["1Wvve2"]) };
    const Text2 = tmp3(5234).Text;
    intl2 = tmp3(1128).intl;
    tmp9Result = tmp9(Text2, obj8);
  }
  items2[1] = tmp9Result;
  items1[1] = closure_5(Stack2, obj5);
  return closure_5(Stack, obj3);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;
