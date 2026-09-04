// Module ID: 15115
// Function ID: 15116
// Dependencies: [19, 17, 502, 21, 4481, 15026, 15016, 15037, 5407, 7661, 4416, 1362, 15015, 15116, 4477, 1233, 5542, 15120, 15121, 15074, 2]

// Module 15115
import useThemeDefault from "useTheme" /* 4416 */;
import _modDef15074 from "module_15074" /* 15074 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ThemeTypes } from "sum" /* 502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const memoResult = importAllResult.memo(function QuestDockUnenrolledHeader() {
  let obj = questCreative(15026);
  const questDockQuest = obj.useQuestDockQuest();
  obj1 = questCreative(15026);
  questCreative = obj1.useQuestCreative(questDockQuest);
  let obj2 = questCreative(15016);
  const items = [questCreative];
  const callback = importAllResult.useCallback(() => {
    let obj = closure_1_1(closure_1_2[7]);
    obj = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: questCreative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE, ctaContent: questCreative(closure_1_2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: questCreative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE };
    obj[2] = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj2.useActionSheetPressHandler(questCreative);
  let obj3 = questCreative(1362);
  if (obj3.isThemeDark(tmp8)) {
    let LIGHT = tmp9.DARK;
    let tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = callback();
  tmp8 = useThemeDefault();
  const questGameLogotypeAssetUrl = questCreative(15015).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  let tmp7Result = tmp7(15116);
  obj = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  obj = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1233).intl;
  obj[3] = intl.string(questCreative(1233).t["3mgEQf"]);
  obj[1] = closure_6(questCreative(4477).Text, obj);
  obj[3] = callback;
  obj[4] = actionSheetPressHandler;
  obj1 = { style: tmp11.primaryContent, children: null };
  tmp7Result = tmp7(5542);
  if (LIGHT === tmp10.DARK) {
    let tmp7Result1 = tmp7(15120);
  } else {
    tmp7Result1 = tmp7(15121);
  }
  obj2 = { source: tmp7Result1, resizeMode: "contain", style: tmp11.wreathImage };
  const items1 = [closure_6(tmp7Result, obj2), ];
  obj3 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  items1[1] = closure_6(_modDef15074, obj3);
  obj1[1] = items1;
  obj[5] = closure_7(View, obj1);
  return closure_6(tmp7Result, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
