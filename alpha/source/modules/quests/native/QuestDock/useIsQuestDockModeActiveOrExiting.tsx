// Module ID: 17524
// Function ID: 17525
// Name: useIsQuestDockModeActiveOrExiting
// Dependencies: [19, 17420, 17421, 1652, 5763, 8921, 2]
// Exports: default

// Module 17524 (useIsQuestDockModeActiveOrExiting)
import _mod1652 from "module_1652" /* 1652 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8921 */;
import QuestDockConstants from "QuestDockConstants" /* 17420 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17421 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2, _undefined3;

let tmp;
const spring_spring = tmp(5763);
let closure_4 = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
let closure_5 = { code: "(function useIsQuestDockModeActiveOrExitingTsx1(){let[activeQuestDockMode,mode]=this.__closure;return activeQuestDockMode.get()===mode;})" };
let closure_6 = { code: "(function useIsQuestDockModeActiveOrExitingTsx2(finished){let[activeQuestDockMode,mode,isActiveOrExiting]=this.__closure;if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}})" };
let closure_7 = { code: "(function useIsQuestDockModeActiveOrExitingTsx3(isActive,wasActive){let[isActiveOrExiting,transitionProgress,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,_worklet_1770169018036_init_data,activeQuestDockMode,mode]=this.__closure;if(isActive===wasActive)return;if(wasActive==null&&isActiveOrExiting.get()===isActive)return;if(isActive){isActiveOrExiting.set(true);return;}transitionProgress.set(0);transitionProgress.set(withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS,'respect-motion-settings',function useIsQuestDockModeActiveOrExitingTsx2Factory([_worklet_1770169018036_init_data,activeQuestDockMode,mode,isActiveOrExiting]){const useIsQuestDockModeActiveOrExitingTsx2=function(finished){if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}};useIsQuestDockModeActiveOrExitingTsx2.__closure=[activeQuestDockMode,mode,isActiveOrExiting];useIsQuestDockModeActiveOrExitingTsx2.__workletHash=1770169018036;useIsQuestDockModeActiveOrExitingTsx2.__initData=_worklet_1770169018036_init_data;return useIsQuestDockModeActiveOrExitingTsx2;}([_worklet_1770169018036_init_data,activeQuestDockMode,mode,isActiveOrExiting])));})" };
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockModeActiveOrExiting.tsx");

export default function useIsQuestDockModeActiveOrExiting(arg0) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = dependencyMap;
  let tmp = require;
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(activeQuestDockMode.get() === arg0);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(0);
  const tmp5 = _mod1652;
  let items = [closure_5, activeQuestDockMode, arg0];
  [tmp6, tmp7, tmp8] = items;
  function useIsQuestDockModeActiveOrExitingTsx1() {
    return _undefined.get() === c1;
  }
  let items1 = [tmp7, tmp8];
  useIsQuestDockModeActiveOrExitingTsx1.__closure = items1;
  useIsQuestDockModeActiveOrExitingTsx1.__workletHash = 8163696877118;
  useIsQuestDockModeActiveOrExitingTsx1.__initData = tmp6;
  const items2 = [closure_7, sharedValue, sharedValue1, , , , , ];
  const useAnimatedReaction = tmp5.useAnimatedReaction;
  items2[3] = spring_spring.withSpring;
  items2[4] = closure_4;
  items2[5] = closure_6;
  items2[6] = activeQuestDockMode;
  items2[7] = arg0;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  function useIsQuestDockModeActiveOrExitingTsx3(arg0, arg1) {
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    if (arg0 !== arg1) {
      let tmp2 = null == arg1;
      if (tmp2) {
        let tmp = _undefined;
        tmp2 = _undefined.get() === arg0;
      }
      if (!tmp2) {
        if (arg0) {
          let result = _undefined.set(true);
        } else {
          const result1 = _undefined2.set(0);
          const items = [c4, c5, c6, _undefined];
          _undefined = undefined;
          _undefined2 = undefined;
          _undefined3 = undefined;
          [tmp11, tmp12, tmp13, tmp14] = items;
          function useIsQuestDockModeActiveOrExitingTsx2(arg0) {
            const tmp = true === arg0 && _undefined.get() !== c1;
            if (tmp) {
              const result = _undefined2.set(false);
            }
          }
          const items1 = [tmp12, tmp13, tmp14];
          useIsQuestDockModeActiveOrExitingTsx2.__closure = items1;
          useIsQuestDockModeActiveOrExitingTsx2.__workletHash = 1770169018036;
          useIsQuestDockModeActiveOrExitingTsx2.__initData = tmp11;
          const result2 = _undefined2.set(_undefined3(1, tmp5, "respect-motion-settings", useIsQuestDockModeActiveOrExitingTsx2));
        }
      }
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  useIsQuestDockModeActiveOrExitingTsx3.__closure = items3;
  useIsQuestDockModeActiveOrExitingTsx3.__workletHash = 14421846937413;
  useIsQuestDockModeActiveOrExitingTsx3.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(useIsQuestDockModeActiveOrExitingTsx1, useIsQuestDockModeActiveOrExitingTsx3);
  return useStateFromSharedValueDefault(sharedValue);
};
