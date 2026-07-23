// Module ID: 15716
// Function ID: 121213
// Name: contextMenuButton
// Dependencies: [5, 31, 27, 6942, 4976, 10226, 33, 4130, 689, 566, 10929, 4979, 7771, 8969, 1212, 4663, 5470, 6965, 10614, 10464, 10926, 14018, 10483, 4098, 10919, 8332, 9468, 5187, 5085, 4554, 668, 10922, 12167, 14048, 4541, 4126, 4543, 2]
// Exports: default

// Module 15716 (contextMenuButton)
import ActivityPanelModes from "ActivityPanelModes";
import QuestRewardTile from "QuestRewardTile";
import get_ActivityIndicator from "Background";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "renderDefaultButton";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["icon"] = importDefault(8969);
  obj["variant"] = "secondary-overlay";
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["accessibilityLabel"] = intl.string(require(1212) /* getSystemLocale */.t["UKOtz+"]);
  obj["size"] = "sm";
  return callback2(require(7771) /* IconButton */.IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  let claim;
  let isClaiming;
  quest = quest.quest;
  claim = undefined;
  let obj = quest(4663);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp2 = callback4(isScreenLandscape);
  let obj1 = quest(5470);
  let obj2 = quest(6965);
  const getOrFetchApplication = obj1.useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  obj = {};
  let id;
  if (null != getOrFetchApplication) {
    id = getOrFetchApplication.id;
  }
  obj.applicationId = id;
  obj.size = 600;
  obj.names = ["embedded_cover"];
  const url = claim(10614)(obj).url;
  let obj4 = quest(10464);
  const questTaskDetails = obj4.useQuestTaskDetails(quest);
  const intl = quest(1212).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp4 = claim(10614);
  let obj6 = quest(10926);
  obj1 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: quest(4979).QuestContent.RUNNING_ACTIVITY };
  const userStatus = quest.userStatus;
  let completedAt;
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj1);
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp10 = null != completedAt;
  if (tmp10) {
    const userStatus2 = quest.userStatus;
    let claimedAt;
    if (null != userStatus2) {
      claimedAt = userStatus2.claimedAt;
    }
    tmp10 = null == claimedAt;
  }
  let obj8 = quest(14018);
  obj2 = { quest, questContent: quest(4979).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: quest(4979).QuestContent.RUNNING_ACTIVITY };
  const questRewardClaimHandler = obj8.useQuestRewardClaimHandler(obj2);
  ({ isClaiming, claim } = questRewardClaimHandler);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [claim];
  const items1 = [quest.id];
  callback = React.useCallback(callback(questRewardClaimHandler), items);
  let callback1 = React.useCallback(() => {
    let obj = claim(outer1_2[23]);
    obj.hideActionSheet();
    claim(outer1_2[22]).updateFramePanelMode(outer1_9.PIP);
    const obj2 = claim(outer1_2[22]);
    obj = { scrollToQuestId: quest.id, fromContent: quest(outer1_2[11]).QuestContent.QUEST_BOTTOM_SHEET };
    quest(outer1_2[24]).openQuestHome(obj);
  }, items1);
  const items2 = [quest.id];
  const callback2 = React.useCallback(() => {
    let obj = claim(outer1_2[23]);
    obj.hideActionSheet();
    obj = {};
    const obj2 = quest(outer1_2[25]);
    obj.message = quest(outer1_2[26]).getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj);
  }, items2);
  const callback3 = React.useCallback(() => {
    claim(outer1_2[23]).hideActionSheet();
  }, []);
  const obj3 = { handleDisabled: true, startExpanded: true };
  obj4 = { style: tmp2.heroContainer };
  let tmp20 = null != url;
  if (tmp20) {
    const obj5 = {};
    obj6 = { uri: url };
    obj5.source = obj6;
    obj5.style = tmp2.heroImg;
    tmp20 = callback2(claim(5085), obj5);
  }
  const items3 = [tmp20, , , ];
  const obj7 = { style: tmp2.heroGradient };
  const formatToPlainStringResult = intl.formatToPlainString(quest(1212).t.EAYZAr, obj);
  const tmp17 = callback3;
  const tmp18 = callback3;
  const tmp19 = closure_5;
  obj7.start = quest(668).VerticalGradient.START;
  obj7.end = quest(668).VerticalGradient.END;
  const items4 = ["rgba(0, 0, 0, 0)", callback5().gradientEnd];
  obj7.colors = items4;
  items3[1] = callback2(claim(4554), obj7);
  obj8 = { style: tmp2.gameTileContainer };
  const obj9 = { quest };
  let num2 = 80;
  let num3 = 80;
  const tmp24 = claim(4554);
  const tmp25 = callback2;
  const tmp26 = closure_5;
  const tmp27 = callback2;
  if (isScreenLandscape) {
    num3 = 56;
  }
  obj9.height = num3;
  if (isScreenLandscape) {
    num2 = 56;
  }
  obj9.width = num2;
  obj8.children = tmp27(claim(10922), obj9);
  items3[2] = tmp25(tmp26, obj8);
  const obj10 = { style: tmp2.contextMenuContainer };
  const obj11 = { icon: claim(12167), onPress: callback2, variant: "secondary-overlay", size: "sm" };
  const intl2 = quest(1212).intl;
  obj11.accessibilityLabel = intl2.string(quest(1212).t.RDE0Sc);
  const items5 = [callback2(quest(7771).IconButton, obj11), ];
  const obj12 = { quest, showShareLink: true, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET };
  const tmp28 = claim(10922);
  obj12.sourceQuestContent = quest(4979).QuestContent.RUNNING_ACTIVITY;
  obj12.children = contextMenuButton;
  items5[1] = callback2(claim(14048), obj12);
  obj10.children = items5;
  items3[3] = callback3(closure_5, obj10);
  obj4.children = items3;
  const items6 = [tmp18(tmp19, obj4), ];
  const obj13 = { style: tmp2.contentContainer };
  const obj14 = { direction: "vertical", spacing: claim(689).space.PX_8, style: tmp2.textContainer };
  const obj15 = {};
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  obj15.variant = str;
  obj15.color = "mobile-text-heading-primary";
  obj15.children = formatToPlainStringResult;
  const items7 = [callback2(quest(4126).Text, obj15), ];
  const obj16 = { style: tmp2.questDescription };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj16.variant = str2;
  obj16.color = "text-muted";
  obj16.children = questsInstructionsToWinReward;
  items7[1] = callback2(quest(4126).Text, obj16);
  obj14.children = items7;
  const items8 = [callback3(quest(4541).Stack, obj14), ];
  const obj17 = { direction: "vertical", spacing: claim(689).space.PX_12, style: tmp2.buttonsContainer };
  const obj18 = { size: "lg" };
  const intl3 = quest(1212).intl;
  const t = quest(1212).t;
  obj18.text = intl3.string(tmp10 ? t.cfY4PE : t.LLLLPD);
  if (tmp10) {
    callback1 = callback;
  }
  obj18.onPress = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  obj18.loading = isClaiming;
  obj18.grow = true;
  const items9 = [callback2(quest(4543).Button, obj18), ];
  const obj19 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
  const intl4 = quest(1212).intl;
  obj19.text = intl4.string(quest(1212).t.cpT0Cq);
  obj19.onPress = callback3;
  items9[1] = callback2(quest(4543).Button, obj19);
  obj17.children = items9;
  items8[1] = callback3(quest(4541).Stack, obj17);
  obj13.children = items8;
  items6[1] = callback3(closure_5, obj13);
  obj3.children = items6;
  return tmp17(quest(5187).BottomSheet, obj3);
}
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { display: "flex", paddingHorizontal: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16 };
  obj.contentContainer = obj;
  obj = {};
  let num = 140;
  if (arg0) {
    num = 125;
  }
  obj.height = num;
  obj.position = "relative";
  let num2 = 0;
  if (!arg0) {
    num2 = 52 + importDefault(689).space.PX_8;
  }
  obj.marginBottom = num2;
  obj.heroContainer = obj;
  const obj1 = { resizeMode: "cover" };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj1["borderTopLeftRadius"] = importDefault(689).radii.lg;
  obj1["borderTopRightRadius"] = importDefault(689).radii.lg;
  obj.heroImg = obj1;
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2["borderTopLeftRadius"] = importDefault(689).radii.lg;
  obj2["borderTopRightRadius"] = importDefault(689).radii.lg;
  obj.heroGradient = obj2;
  const obj3 = { position: "absolute", bottom: null, left: 0, right: 0, alignItems: "center" };
  let num4 = -52;
  if (arg0) {
    num4 = importDefault(689).space.PX_12;
  }
  obj3.bottom = num4;
  obj.gameTileContainer = obj3;
  const obj4 = { position: "absolute", top: importDefault(689).space.PX_16, right: importDefault(689).space.PX_16, display: "flex", flexDirection: "row", gap: importDefault(689).space.PX_16, alignItems: "center" };
  obj.contextMenuContainer = obj4;
  const obj5 = { alignItems: "center" };
  let PX_16;
  if (!arg0) {
    PX_16 = importDefault(689).space.PX_16;
  }
  obj5.paddingTop = PX_16;
  obj5.gap = importDefault(689).space.PX_8;
  obj5.marginBottom = importDefault(689).space.PX_16;
  obj5.textAlign = "center";
  obj.textContainer = obj5;
  obj.questDescription = { textAlign: "center" };
  const obj6 = {};
  let PX_161;
  if (!arg0) {
    PX_161 = importDefault(689).space.PX_16;
  }
  obj6.paddingTop = PX_161;
  obj.buttonsContainer = obj6;
  return obj;
});
let closure_13 = _createForOfIteratorHelperLoose.createStyleProperties(() => ({ gradientEnd: importDefault(689).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT }));
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let obj = questId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getQuest(questId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: questId(4979).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: questId(4979).QuestContent.RUNNING_ACTIVITY,
      children() {
          return outer1_10(outer1_15, { quest: stateFromStores });
        }
    };
    tmp2 = callback2(questId(10929).QuestContentImpressionTrackerNative, obj);
  }
  return tmp2;
};
