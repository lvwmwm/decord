// Module ID: 14727
// Function ID: 14728
// Name: QuestDockEnrolledBody
// Dependencies: [5, 19, 17, 7116, 14622, 5756, 14624, 21, 4836, 576, 14628, 14625, 7715, 14620, 14655, 5759, 14652, 14651, 14653, 14631, 1613, 7137, 2]

// Module 14727 (QuestDockEnrolledBody)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import QuestBottomSheet from "QuestBottomSheet" /* 14651 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 14652 */;
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter" /* 14653 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7116 */;
import QuestDockStore from "QuestDockStore" /* 14622 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2;

let QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP;
let QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
let QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function EnrolledBodyWatchTask(quest) {
  let QuestBottomSheetContent;
  let hasWatchVideoOnMobileTasks;
  let items1;
  let obj4;
  let obj6;
  let obj8;
  let questDockWrapperSpecs;
  let tmp6Result;
  let tmp6Result2;
  quest = quest.quest;
  let tmp = closure_15();
  const tmp3 = quest;
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[10]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[11]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[12])(restingQuestDockMode);
  let closure_3 = tmp7;
  let obj = quest(questDockWrapperSpecs[13]);
  hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks, ];
  let userStatus = quest.userStatus;
  let completedAt;
  const useEffect = hasWatchVideoOnMobileTasks.useEffect;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  items[5] = completedAt;
  const effect = useEffect(() => {
    function maybeOpenVideoQuestModal() {
      return obj(...arguments);
    }
    let obj = function _maybeOpenVideoQuestModal() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let v1;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let tmp11 = c2.get().prevDeltaY < 0 && closure_1_3 === constants.RESET_TO_PREVIOUS && closure_2_7.prevRestingQuestDockMode === constants.EXPANDED;
                if (tmp11) {
                  let tmp15 = !closure_2_6.isQuestAccessSuspended;
                  if (!tmp15) {
                    const userStatus = tmp.userStatus;
                    let completedAt;
                    if (userStatus != null) {
                      completedAt = userStatus.completedAt;
                    }
                    tmp15 = null != completedAt;
                  }
                  tmp11 = tmp15;
                }
                if (tmp11) {
                  const obj4 = { questId: tmp.id, sourceQuestContent: closure_2_0(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
                  const tmp21 = setRestingQuestDockMode(questDockWrapperSpecs[14]);
                  c1 = 1;
                  c2 = 1;
                  const obj5 = { value: tmp21(obj4), done: false };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c1(constants.COLLAPSED);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp24) {
            c2 = 3;
            throw tmp24;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = hasWatchVideoOnMobileTasks;
    if (tmp) {
      maybeOpenVideoQuestModal();
    }
  }, items);
  let obj2 = { children: items1 };
  let obj3 = { style: tmp.headerWrapper, children: closure_12(tmp6Result, obj4) };
  obj4 = { quest, step: tmp3(tmp4[17]).QuestBottomSheetStep.TASK_STATUS, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  tmp6Result = setRestingQuestDockMode(questDockWrapperSpecs[16]);
  items1 = [closure_12(View, obj3), , ];
  let obj5 = { style: tmp.contentWrapper, children: closure_12(QuestBottomSheetContent, obj6) };
  obj6 = { quest, location: constants.QUESTS_BAR_MOBILE, step: tmp3(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: tmp3(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
  QuestBottomSheetContent = tmp3(tmp4[17]).QuestBottomSheetContent;
  items1[1] = closure_12(View, obj5);
  const obj7 = { style: tmp.footerWrapper, children: closure_12(tmp6Result2, obj8) };
  obj8 = { quest, step: tmp3(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, style: tmp.footer, withSafeArea: false, sourceQuestContent: tmp3(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
  tmp6Result2 = setRestingQuestDockMode(questDockWrapperSpecs[18]);
  items1[2] = closure_12(View, obj7);
  return closure_14(closure_13, obj2);
}
function EnrolledBodyPlayStreamTask(quest) {
  let QuestBottomSheetContent;
  let defibrillator;
  let handleTaskSelect;
  let items;
  let obj5;
  let obj7;
  let obj9;
  let showMicrophone;
  let step;
  let stepActions;
  let tmp3;
  quest = quest.quest;
  const tmp = closure_15();
  const obj = QuestBottomSheet;
  const obj2 = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj2);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  const obj3 = { children: items };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const obj4 = { style: tmp.headerWrapper, children: closure_12(QuestBottomSheetHeaderDefault, obj5) };
  obj5 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  items = [closure_12(View, obj4), , ];
  const obj6 = { style: tmp.contentWrapper, children: closure_12(QuestBottomSheetContent, obj7) };
  obj7 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  QuestBottomSheetContent = QuestBottomSheet.QuestBottomSheetContent;
  items[1] = closure_12(View, obj6);
  const obj8 = { style: tmp.footerWrapper, children: closure_12(tmp3, obj9) };
  obj9 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  tmp3 = QuestBottomSheetFooterDefault;
  items[2] = closure_12(View, obj8);
  return authStore2(map1, obj3);
}
const View = react_native.View;
({ QuestDockMode: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QuestDockConstants);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QuestDockConstants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: obj2, contentWrapper: obj3, footer: obj4, footerWrapper: obj5 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
obj5 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function QuestDockEnrolledBody() {
  let items2;
  let minExpandedContentHeight;
  let tmp5Result;
  let obj = minExpandedContentHeight(14631);
  const questDockQuest = obj.useQuestDockQuest();
  const tmp2 = closure_15();
  minExpandedContentHeight = react.useContext(minExpandedContentHeight(14625).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items1 = [minExpandedContentHeight];
  const callback = react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const obj = minExpandedContentHeight;
    if (minExpandedContentHeight.get() !== height) {
      const result = obj.set(height);
    }
  }, items);
  const effect = react.useEffect(() => () => {
    const obj = minExpandedContentHeight;
    if (minExpandedContentHeight.get() !== closure_2_10) {
      const result = obj.set(tmp);
    }
  }, items1);
  const obj2 = { style: items2, onLayout: callback, children: tmp5Result };
  items2 = [tmp2.wrapper, { paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) }];
  ({ paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) });
  const obj4 = minExpandedContentHeight(7137);
  const tmp6 = View;
  if (obj4.hasWatchVideoTasks(questDockQuest)) {
    const obj5 = { quest: questDockQuest };
    tmp5Result = tmp5(EnrolledBodyWatchTask, obj5);
  } else {
    const obj6 = { quest: questDockQuest };
    tmp5Result = tmp5(EnrolledBodyPlayStreamTask, obj6);
  }
  return closure_12(tmp6, obj2);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;
