// Module ID: 14060
// Function ID: 108132
// Name: QuestOrbMultiplierPerkPill
// Dependencies: [31, 27, 33, 4130, 689, 4066, 3840, 3834, 3974, 10464, 9466, 1212, 7871, 4126, 4660, 14061, 4554, 2]
// Exports: QuestOrbMultiplierPerkPill

// Module 14060 (QuestOrbMultiplierPerkPill)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { x: 0, y: 0 };
let closure_9 = { x: 1, y: 0 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden", height: 19, backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.fullGradientContainer = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj1["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.round;
_createForOfIteratorHelperLoose.fullGradient = obj1;
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: 4, height: 19 };
_createForOfIteratorHelperLoose.fullGradientContent = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  let orbMultiplierEligibility;
  let require;
  ({ onPress: require, orbMultiplierEligibility } = questId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4066) /* useTheme */;
  const theme = obj.useTheme();
  let obj1 = require(3840) /* isThemeLight */;
  const isThemeDarkResult = obj1.isThemeDark(theme);
  const dependencyMap = isThemeDarkResult;
  let obj2 = require(3834) /* map */;
  const token = obj2.useToken(orbMultiplierEligibility(689).colors.EXPRESSIVE_GRADIENT_PINK_START, "dark");
  let obj3 = require(3834) /* map */;
  const token1 = obj3.useToken(orbMultiplierEligibility(689).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, "dark");
  let obj4 = require(3834) /* map */;
  const token2 = obj4.useToken(orbMultiplierEligibility(689).colors.BACKGROUND_BASE_LOWEST, "dark");
  let obj5 = require(3974) /* hexToRgb */;
  const items = [obj5.hexOpacityToRgba(token, 1), ];
  let obj6 = require(3974) /* hexToRgb */;
  items[1] = obj6.hexOpacityToRgba(token1, 0.5);
  let obj7 = require(3834) /* map */;
  const token3 = obj7.useToken(orbMultiplierEligibility(689).colors.BACKGROUND_BRAND);
  const questOrbRewardMultiplier = require(10464) /* _createForOfIteratorHelperLoose */.useQuestOrbRewardMultiplier(questId.questId);
  const obj9 = require(10464) /* _createForOfIteratorHelperLoose */;
  const result = require(9466) /* items */.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp10 = orbMultiplierEligibility === require(9466) /* items */.QuestOrbMultiplierEligibilityType.CREPE;
  let closure_6 = tmp10;
  const items1 = [tmp10, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require(1212) /* getSystemLocale */.t;
    if (result) {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj);
    } else {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj);
    }
    obj1 = {};
    let tmp15 = !tmp10;
    let tmp16 = tmp15;
    if (!tmp10) {
      tmp16 = questOrbRewardMultiplier(require(7871) /* NitroWheelIcon */.NitroWheelIcon, { size: "xs", color: "white" });
    }
    const items2 = [tmp16, ];
    obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = questOrbRewardMultiplier(require(4126) /* Text */.Text, obj2);
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
      activeOpacity: 0.8,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult
    };
    obj4 = {};
    const items3 = [tmp.fullGradientContainer, ];
    obj5 = { backgroundColor: tmp11 };
    items3[1] = obj5;
    obj4.style = items3;
    if (!tmp10) {
      obj6 = { style: tmp.fullGradient, colors: items, start: closure_8, end: closure_9 };
      tmp15 = questOrbRewardMultiplier(orbMultiplierEligibility(4554), obj6);
    }
    const items4 = [tmp15, ];
    obj7 = { style: tmp.fullGradientContent, children: closure_7(closure_6, obj1) };
    items4[1] = questOrbRewardMultiplier(token3, obj7);
    obj4.children = items4;
    obj3.children = closure_7(token3, obj4);
    return questOrbRewardMultiplier(require(4660) /* PressableBase */.PressableOpacity, obj3);
  }
  const obj10 = require(9466) /* items */;
};
