// Module ID: 14001
// Function ID: 107202
// Name: QuestDockContextMenuActionSheet
// Dependencies: [5, 31, 653, 33, 6963, 10464, 9468, 5500, 5502, 12344, 7495, 10472, 4979, 6969, 4098, 4078, 1212, 14002, 9449, 9450, 9451, 6970, 6959, 10919, 9802, 14004, 5119, 9444, 14007, 8633, 14008, 14010, 14012, 8738, 5796, 5492, 2]
// Exports: default

// Module 14001 (QuestDockContextMenuActionSheet)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import "UndoIcon";
import { UserSettingsSections } from "ME";
import jsxProd from "EyeIcon";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let result = require("ME").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(quest) {
  let UserSettingsSections;
  let _createForOfIteratorHelperLoose;
  let dependencyMap;
  let importDefault;
  quest = quest.quest;
  let obj = quest(6963);
  let isShareableQuestResult = obj.isShareableQuest(quest.config);
  let obj1 = quest(10464);
  const questPreviewActions = obj1.useQuestPreviewActions(quest.id);
  ({ handleComplete: importDefault, handleProgress: dependencyMap, handleResetDismissibilityClick: _createForOfIteratorHelperLoose, handleResetStatusClick: UserSettingsSections } = questPreviewActions);
  let obj2 = quest(9468);
  const externalCtaLabel = obj2.getExternalCtaLabel(quest);
  obj = {};
  obj = { hasIcons: true };
  obj1 = {};
  obj2 = { IconComponent: quest(12344).LinkExternalMediumIcon };
  obj1.icon = callback2(quest(5502).ActionSheetRow.Icon, obj2);
  obj1.label = callback2(quest(7495).FormLabel, { text: externalCtaLabel });
  obj1.onPress = function onPress() {
    let obj = quest(outer1_2[11]);
    obj = { content: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(outer1_2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, sourceQuestContent: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj.openGameLinkDirectly(quest, obj);
    outer1_1(outer1_2[14]).hideActionSheet();
  };
  let items = [callback2(quest(5502).ActionSheetRow, obj1), ];
  if (isShareableQuestResult) {
    const obj3 = {};
    const obj4 = { IconComponent: quest(4078).CopyIcon };
    obj3.icon = callback2(quest(5502).ActionSheetRow.Icon, obj4);
    const obj5 = {};
    const intl = quest(1212).intl;
    obj5.text = intl.string(quest(1212).t.WqhZss);
    obj3.label = callback2(quest(7495).FormLabel, obj5);
    obj3.onPress = function onPress() {
      let obj = quest(outer1_2[6]);
      obj = { content: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(outer1_2[13]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE };
      obj.copyShareLink(quest.id, obj);
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    isShareableQuestResult = callback2(quest(5502).ActionSheetRow, obj3);
  }
  items[1] = isShareableQuestResult;
  obj.children = items;
  const items1 = [callback3(quest(5502).ActionSheetRow.Group, obj), , ];
  let obj6 = { hasIcons: true };
  const obj7 = {};
  const obj8 = { IconComponent: importDefault(14002) };
  obj7.icon = callback2(quest(5502).ActionSheetRow.Icon, obj8);
  const obj9 = {};
  const intl2 = quest(1212).intl;
  obj9.text = intl2.string(quest(1212).t.LLLLPD);
  obj7.label = callback2(quest(7495).FormLabel, obj9);
  obj7.onPress = function onPress() {
    let obj = quest(outer1_2[18]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(outer1_2[18]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      let tmpResult = tmp(tmp2[19]);
      obj = { type: tmp(tmp2[20]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[21]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE, surfaceId: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(tmp2[22]);
      obj = { questId: quest.id, questContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const obj6 = quest(outer1_2[23]);
    obj6.openQuestHome({ scrollToQuestId: quest.id, fromContent: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE });
    const obj1 = { scrollToQuestId: quest.id, fromContent: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE };
    outer1_1(outer1_2[14]).hideActionSheet();
  };
  const items2 = [callback2(quest(5502).ActionSheetRow, obj7), , ];
  const obj10 = {};
  const obj11 = { IconComponent: quest(9802).CircleQuestionIcon };
  obj10.icon = callback2(quest(5502).ActionSheetRow.Icon, obj11);
  const obj12 = {};
  const intl3 = quest(1212).intl;
  obj12.text = intl3.string(quest(1212).t.GcsZKJ);
  obj10.label = callback2(quest(7495).FormLabel, obj12);
  obj10.onPress = function onPress() {
    let obj = outer1_1(outer1_2[25]);
    obj = { quest, isTargetedDisclosure: true };
    obj = { content: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(outer1_2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: quest(outer1_2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
    outer1_1(outer1_2[14]).hideActionSheet();
  };
  items2[1] = callback2(quest(5502).ActionSheetRow, obj10);
  const obj13 = {};
  const obj14 = { IconComponent: quest(5119).XSmallIcon };
  obj13.icon = callback2(quest(5502).ActionSheetRow.Icon, obj14);
  const obj15 = {};
  const intl4 = quest(1212).intl;
  obj15.text = intl4.string(quest(1212).t.NN79E9);
  obj13.label = callback2(quest(7495).FormLabel, obj15);
  const intl5 = quest(1212).intl;
  const stringResult = intl5.string(quest(1212).t.V6htN5);
  obj13.subLabel = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj13.onPress = callback(stringResult);
  items2[2] = callback2(quest(5502).ActionSheetRow, obj13);
  obj6.children = items2;
  items1[1] = callback3(quest(5502).ActionSheetRow.Group, obj6);
  let preview = quest.preview;
  if (preview) {
    const obj16 = {};
    const intl6 = quest(1212).intl;
    obj16.title = intl6.string(quest(1212).t["Ape+mm"]);
    obj16.hasIcons = true;
    const obj17 = {};
    const obj18 = { IconComponent: quest(8633).TrophyIcon };
    obj17.icon = callback2(quest(5502).ActionSheetRow.Icon, obj18);
    const obj19 = {};
    const intl7 = quest(1212).intl;
    obj19.text = intl7.string(quest(1212).t.jQEfRT);
    obj17.label = callback2(quest(7495).FormLabel, obj19);
    obj17.onPress = function onPress() {
      callback();
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    const items3 = [callback2(quest(5502).ActionSheetRow, obj17), , , , , , ];
    const obj20 = {};
    const obj21 = { IconComponent: quest(14008).RedoIcon };
    obj20.icon = callback2(quest(5502).ActionSheetRow.Icon, obj21);
    const obj22 = {};
    const intl8 = quest(1212).intl;
    obj22.text = intl8.string(quest(1212).t.cKSLr4);
    obj20.label = callback2(quest(7495).FormLabel, obj22);
    obj20.onPress = function onPress() {
      callback2(0.9 * Math.random() + 0.03);
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[1] = callback2(quest(5502).ActionSheetRow, obj20);
    const obj23 = {};
    const obj24 = { IconComponent: quest(14010).UndoIcon };
    obj23.icon = callback2(quest(5502).ActionSheetRow.Icon, obj24);
    const obj25 = {};
    const intl9 = quest(1212).intl;
    obj25.text = intl9.string(quest(1212).t.taqkwK);
    obj23.label = callback2(quest(7495).FormLabel, obj25);
    obj23.onPress = function onPress() {
      callback4();
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[2] = callback2(quest(5502).ActionSheetRow, obj23);
    const obj26 = {};
    const obj27 = { IconComponent: quest(14012).UnsendIcon };
    obj26.icon = callback2(quest(5502).ActionSheetRow.Icon, obj27);
    const obj28 = {};
    const intl10 = quest(1212).intl;
    obj28.text = intl10.string(quest(1212).t.JF6W66);
    obj26.label = callback2(quest(7495).FormLabel, obj28);
    obj26.onPress = function onPress() {
      callback3();
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[3] = callback2(quest(5502).ActionSheetRow, obj26);
    const obj29 = {};
    const obj30 = { IconComponent: quest(8738).EyeIcon };
    obj29.icon = callback2(quest(5502).ActionSheetRow.Icon, obj30);
    const obj31 = {};
    const intl11 = quest(1212).intl;
    obj31.text = intl11.string(quest(1212).t["lL6/zF"]);
    obj29.label = callback2(quest(7495).FormLabel, obj31);
    obj29.onPress = function onPress() {
      const items = [quest.id];
      quest(outer1_2[27]).markAdContentUnseen(quest(outer1_2[21]).AdCreativeType.QUEST, items);
      const obj = quest(outer1_2[27]);
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[4] = callback2(quest(5502).ActionSheetRow, obj29);
    const obj32 = {};
    const obj33 = { IconComponent: quest(8738).EyeIcon };
    obj32.icon = callback2(quest(5502).ActionSheetRow.Icon, obj33);
    const obj34 = {};
    const intl12 = quest(1212).intl;
    obj34.text = intl12.string(quest(1212).t.tx5Ax5);
    obj32.label = callback2(quest(7495).FormLabel, obj34);
    obj32.onPress = function onPress() {
      let obj = quest(outer1_2[34]);
      obj = { screen: outer1_4.QUEST_PREVIEW_TOOL_2, params: obj };
      obj = { questId: quest.id };
      obj.openUserSettings(obj);
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[5] = callback2(quest(5502).ActionSheetRow, obj32);
    const obj35 = {};
    const obj36 = { IconComponent: quest(4078).CopyIcon };
    obj35.icon = callback2(quest(5502).ActionSheetRow.Icon, obj36);
    const obj37 = {};
    const intl13 = quest(1212).intl;
    obj37.text = intl13.string(quest(1212).t.oisrFi);
    obj35.label = callback2(quest(7495).FormLabel, obj37);
    obj35.onPress = function onPress() {
      quest(outer1_2[35]).copy(quest.id);
      const obj = quest(outer1_2[35]);
      outer1_1(outer1_2[14]).hideActionSheet();
    };
    items3[6] = callback2(quest(5502).ActionSheetRow, obj35);
    obj16.children = items3;
    preview = callback3(quest(5502).ActionSheetRow.Group, obj16);
  }
  items1[2] = preview;
  obj.children = items1;
  return callback3(quest(5500).ActionSheet, obj);
};
