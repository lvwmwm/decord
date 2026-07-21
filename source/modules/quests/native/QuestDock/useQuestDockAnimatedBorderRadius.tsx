// Module ID: 13957
// Function ID: 106103
// Name: useQuestDockAnimatedBorderRadius
// Dependencies: []
// Exports: default

// Module 13957 (useQuestDockAnimatedBorderRadius)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = { code: "function useQuestDockAnimatedBorderRadiusTsx1(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default function useQuestDockAnimatedBorderRadius(maxBorder) {
  let num = arg1;
  const arg1 = maxBorder;
  if (arg1 === undefined) {
    num = 0;
  }
  const dependencyMap = num;
  let React;
  const questDockOffset = React.useContext(arg1(dependencyMap[1]).QuestDockExternalCoordinationContext).questDockOffset;
  React = questDockOffset;
  let obj = arg1(dependencyMap[2]);
  const fn = function u() {
    const value = questDockOffset.get();
    const items = [num, arg0];
    return arg0(num[2]).interpolate(value, ["<string:3573412790>", "<string:826270072>"], items, arg0(num[2]).Extrapolation.CLAMP);
  };
  obj = { interpolate: arg1(dependencyMap[2]).interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: arg1(dependencyMap[2]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 17005846780112;
  fn.__initData = closure_3;
  return obj.useDerivedValue(fn);
};
