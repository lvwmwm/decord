// Module ID: 17127
// Function ID: 17128
// Name: QuestOrbMultiplierPerkPill
// Dependencies: [19, 17, 1072, 21, 5014, 575, 5253, 5036, 5596, 5011, 9681, 9703, 1113, 9528, 5624, 6980, 17128, 5587, 2]
// Exports: QuestOrbMultiplierPerkPill

// Module 17127 (QuestOrbMultiplierPerkPill)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import themes from "themes" /* 5036 */;
import useTheme from "useTheme" /* 5253 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9681 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9703 */;
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet" /* 17128 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
let createStyles = createStyles_mod;
let obj = { fullGradientContainer: obj2, fullGradient: obj3, fullGradientContent: obj4 };
obj2 = { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export function QuestOrbMultiplierPerkPill(questId) {
  let c2;
  let items2;
  let items3;
  let items4;
  let obj16;
  let orbMultiplierEligibility;
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let questOrbRewardMultiplier;
  questId = questId.questId;
  let tmp = closure_11();
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = themes;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  const obj3 = useToken;
  const token = obj3.useToken(orbMultiplierEligibility(575).colors.EXPRESSIVE_GRADIENT_PINK_START, questOrbRewardMultiplier.DARK);
  const obj4 = useToken;
  const token1 = obj4.useToken(orbMultiplierEligibility(575).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, questOrbRewardMultiplier.DARK);
  const obj5 = useToken;
  const token2 = obj5.useToken(orbMultiplierEligibility(575).colors.BACKGROUND_BASE_LOWEST, questOrbRewardMultiplier.DARK);
  const items = [, ];
  const obj6 = ColorUtils;
  items[0] = obj6.hexOpacityToRgba(token, 1);
  const obj7 = ColorUtils;
  items[1] = obj7.hexOpacityToRgba(token1, 0.5);
  const obj8 = useToken;
  const token3 = obj8.useToken(orbMultiplierEligibility(575).colors.BACKGROUND_BRAND);
  const obj9 = hooks_QuestHooks;
  questOrbRewardMultiplier = obj9.useQuestOrbRewardMultiplier(questId);
  const obj10 = QuestOrbMultiplierUtils;
  const result = obj10.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
  let closure_6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  const tmp6 = orbMultiplierEligibility;
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    let formatToPlainStringResult;
    const intl = tmp2(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1113).t;
    if (result) {
      const obj11 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj11);
    } else {
      const obj12 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj12);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    const tmp17 = closure_7;
    if (!tmp13) {
      tmp19 = closure_6(tmp2(9528).NitroWheelIcon, { size: "xs", color: "white" });
    }
    const obj13 = { children: items2 };
    items2 = [tmp19, ];
    const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = closure_6(Text_Text.Text, obj14);
    const obj15 = {
      onPress: function handlePress() {
          if (null != questOrbRewardMultiplier) {
            openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
            if (require != null) {
              require();
            }
          }
        },
      activeOpacity: 0.8,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult,
      children: closure_8(token3, obj16)
    };
    obj16 = { style: items3, children: items4 };
    items3 = [tmp.fullGradientContainer, ];
    const obj17 = { backgroundColor: tmp14 };
    items3[1] = obj17;
    const tmp16Result = closure_8(tmp17, obj13);
    const PressableOpacity = tmp2(6980).PressableOpacity;
    if (!tmp13) {
      const obj18 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(tmp6(5587), obj18);
    }
    items4 = [tmp21Result, ];
    const obj19 = { style: tmp.fullGradientContent, children: tmp16Result };
    items4[1] = closure_6(token3, obj19);
    return closure_6(PressableOpacity, obj15);
  }
}
