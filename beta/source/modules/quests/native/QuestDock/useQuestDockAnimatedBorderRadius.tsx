// Module ID: 17478
// Function ID: 17479
// Name: useQuestDockAnimatedBorderRadius
// Dependencies: [19, 17397, 1652, 2]
// Exports: default

// Module 17478 (useQuestDockAnimatedBorderRadius)
import _mod1652 from "module_1652" /* 1652 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 17397 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function useQuestDockAnimatedBorderRadiusTsx1(){let[interpolate,questDockOffset,minBorder,maxBorder,Extrapolation]=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);})" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default function useQuestDockAnimatedBorderRadius(arg0) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const questDockOffset = react.useContext(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContext).questDockOffset;
  let items = [closure_3, , , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  _mod1652;
  items[1] = _mod1652.interpolate;
  items[2] = questDockOffset;
  items[3] = num;
  items[4] = arg0;
  items[5] = _mod1652.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function useQuestDockAnimatedBorderRadiusTsx1() {
    const items = [c2, c3];
    return _undefined(_undefined2.get(), [0, 50], items, _undefined3.CLAMP);
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  useQuestDockAnimatedBorderRadiusTsx1.__closure = items1;
  useQuestDockAnimatedBorderRadiusTsx1.__workletHash = 16041776927081;
  useQuestDockAnimatedBorderRadiusTsx1.__initData = tmp2;
  return useDerivedValue(useQuestDockAnimatedBorderRadiusTsx1);
};
