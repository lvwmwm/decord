// Module ID: 13939
// Function ID: 105936
// Name: QuestOrbMultiplierPerkPill
// Dependencies: []
// Exports: QuestOrbMultiplierPerkPill

// Module 13939 (QuestOrbMultiplierPerkPill)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = {};
let closure_9 = {};
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { style: null, pointerEvents: "80a1b67e775ddb8de80fde27e63a5302", accessibilityElementsHidden: "CircleQuestionIcon-secondary", importantForAccessibility: "png", borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.fullGradientContainer = obj;
const obj1 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj1["borderRadius"] = importDefault(dependencyMap[4]).radii.round;
obj.fullGradient = obj1;
const obj2 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8 };
obj.fullGradientContent = obj2;
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  let orbMultiplierEligibility;
  ({ onPress: closure_0, orbMultiplierEligibility } = questId);
  const importDefault = orbMultiplierEligibility;
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  const theme = obj.useTheme();
  let obj1 = arg1(dependencyMap[6]);
  const isThemeDarkResult = obj1.isThemeDark(theme);
  const dependencyMap = isThemeDarkResult;
  let obj2 = arg1(dependencyMap[7]);
  const token = obj2.useToken(importDefault(dependencyMap[4]).colors.EXPRESSIVE_GRADIENT_PINK_START, "dark");
  let obj3 = arg1(dependencyMap[7]);
  const token1 = obj3.useToken(importDefault(dependencyMap[4]).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, "dark");
  let obj4 = arg1(dependencyMap[7]);
  const token2 = obj4.useToken(importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, "dark");
  let closure_3 = token2;
  let obj5 = arg1(dependencyMap[8]);
  const items = [obj5.hexOpacityToRgba(token, 1), ];
  let obj6 = arg1(dependencyMap[8]);
  items[1] = obj6.hexOpacityToRgba(token1, 0.5);
  let obj7 = arg1(dependencyMap[7]);
  const token3 = obj7.useToken(importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND);
  const View = token3;
  const questOrbRewardMultiplier = arg1(dependencyMap[9]).useQuestOrbRewardMultiplier(questId.questId);
  const obj9 = arg1(dependencyMap[9]);
  const result = arg1(dependencyMap[10]).shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp10 = orbMultiplierEligibility === arg1(dependencyMap[10]).QuestOrbMultiplierEligibilityType.CREPE;
  const items1 = [tmp10, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    const intl = arg1(dependencyMap[11]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = arg1(dependencyMap[11]).t;
    if (result) {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj);
    } else {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t.G+mKoo, obj);
    }
    obj1 = {};
    let tmp15 = !tmp10;
    let tmp16 = tmp15;
    if (!tmp10) {
      tmp16 = questOrbRewardMultiplier(arg1(dependencyMap[12]).NitroWheelIcon, {});
    }
    const items2 = [tmp16, ];
    obj2 = { children: formatToPlainStringResult };
    items2[1] = questOrbRewardMultiplier(arg1(dependencyMap[13]).Text, obj2);
    obj1.children = items2;
    obj3 = {
      onPress() {
          if (null != questOrbRewardMultiplier) {
            orbMultiplierEligibility(isThemeDarkResult[15])(questOrbRewardMultiplier, orbMultiplierEligibility);
            if (null != callback) {
              callback();
            }
          }
        },
      accessibilityLabel: formatToPlainStringResult
    };
    obj4 = {};
    const items3 = [tmp.fullGradientContainer, ];
    obj5 = { backgroundColor: tmp11 };
    items3[1] = obj5;
    obj4.style = items3;
    if (!tmp10) {
      obj6 = { style: tmp.fullGradient, colors: items, start: closure_8, end: closure_9 };
      tmp15 = questOrbRewardMultiplier(importDefault(dependencyMap[16]), obj6);
    }
    const items4 = [tmp15, ];
    obj7 = { style: tmp.fullGradientContent, children: closure_7(tmp10, obj1) };
    items4[1] = questOrbRewardMultiplier(View, obj7);
    obj4.children = items4;
    obj3.children = closure_7(View, obj4);
    return questOrbRewardMultiplier(arg1(dependencyMap[14]).PressableOpacity, obj3);
  }
  const obj10 = arg1(dependencyMap[10]);
};
