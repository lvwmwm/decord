// Module ID: 13870
// Function ID: 104951
// Name: QuestDockContextMenuActionSheet
// Dependencies: []
// Exports: default

// Module 13870 (QuestDockContextMenuActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const UserSettingsSections = arg1(dependencyMap[2]).UserSettingsSections;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(quest) {
  quest = quest.quest;
  const arg1 = quest;
  let obj = arg1(dependencyMap[4]);
  let isShareableQuestResult = obj.isShareableQuest(quest.config);
  let obj1 = arg1(dependencyMap[5]);
  const questPreviewActions = obj1.useQuestPreviewActions(quest.id);
  ({ handleComplete: closure_1, handleProgress: closure_2, handleResetDismissibilityClick: closure_3, handleResetStatusClick: closure_4 } = questPreviewActions);
  let obj2 = arg1(dependencyMap[6]);
  const externalCtaLabel = obj2.getExternalCtaLabel(quest);
  obj = {};
  obj = { hasIcons: true };
  obj1 = {};
  obj2 = { IconComponent: arg1(dependencyMap[9]).LinkExternalMediumIcon };
  obj1.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj2);
  obj1.label = callback2(arg1(dependencyMap[10]).FormLabel, { text: externalCtaLabel });
  obj1.onPress = function onPress() {
    let obj = quest(closure_2[11]);
    obj = { content: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(closure_2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, sourceQuestContent: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj.openGameLinkDirectly(quest, obj);
    callback(closure_2[14]).hideActionSheet();
  };
  const items = [callback2(arg1(dependencyMap[8]).ActionSheetRow, obj1), ];
  if (isShareableQuestResult) {
    const obj3 = {};
    const obj4 = { IconComponent: arg1(dependencyMap[15]).CopyIcon };
    obj3.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj4);
    const obj5 = {};
    const intl = arg1(dependencyMap[16]).intl;
    obj5.text = intl.string(arg1(dependencyMap[16]).t.WqhZss);
    obj3.label = callback2(arg1(dependencyMap[10]).FormLabel, obj5);
    obj3.onPress = function onPress() {
      let obj = quest(closure_2[6]);
      obj = { content: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(closure_2[13]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE };
      obj.copyShareLink(quest.id, obj);
      callback(closure_2[14]).hideActionSheet();
    };
    isShareableQuestResult = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj3);
  }
  items[1] = isShareableQuestResult;
  obj.children = items;
  const items1 = [callback3(arg1(dependencyMap[8]).ActionSheetRow.Group, obj), , ];
  const obj6 = { hasIcons: true };
  const obj7 = {};
  const obj8 = { IconComponent: importDefault(dependencyMap[17]) };
  obj7.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj8);
  const obj9 = {};
  const intl2 = arg1(dependencyMap[16]).intl;
  obj9.text = intl2.string(arg1(dependencyMap[16]).t.LLLLPD);
  obj7.label = callback2(arg1(dependencyMap[10]).FormLabel, obj9);
  obj7.onPress = function onPress() {
    let obj = quest(closure_2[18]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(closure_2[18]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      let tmpResult = tmp(tmp2[19]);
      obj = { type: tmp(tmp2[20]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[21]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE, surfaceId: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(tmp2[22]);
      obj = { questId: quest.id, questContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const obj6 = quest(closure_2[23]);
    obj6.openQuestHome({ scrollToQuestId: quest.id, fromContent: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE });
    const obj1 = { scrollToQuestId: quest.id, fromContent: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE };
    callback(closure_2[14]).hideActionSheet();
  };
  const items2 = [callback2(arg1(dependencyMap[8]).ActionSheetRow, obj7), , ];
  const obj10 = {};
  const obj11 = { IconComponent: arg1(dependencyMap[24]).CircleQuestionIcon };
  obj10.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj11);
  const obj12 = {};
  const intl3 = arg1(dependencyMap[16]).intl;
  obj12.text = intl3.string(arg1(dependencyMap[16]).t.GcsZKJ);
  obj10.label = callback2(arg1(dependencyMap[10]).FormLabel, obj12);
  obj10.onPress = function onPress() {
    let obj = callback(closure_2[25]);
    obj = { quest, isTargetedDisclosure: true };
    obj = { content: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(closure_2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: quest(closure_2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
    callback(closure_2[14]).hideActionSheet();
  };
  items2[1] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj10);
  const obj13 = {};
  const obj14 = { IconComponent: arg1(dependencyMap[26]).XSmallIcon };
  obj13.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj14);
  const obj15 = {};
  const intl4 = arg1(dependencyMap[16]).intl;
  obj15.text = intl4.string(arg1(dependencyMap[16]).t.NN79E9);
  obj13.label = callback2(arg1(dependencyMap[10]).FormLabel, obj15);
  const intl5 = arg1(dependencyMap[16]).intl;
  const stringResult = intl5.string(arg1(dependencyMap[16]).t.V6htN5);
  obj13.subLabel = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj13.onPress = callback(stringResult);
  items2[2] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj13);
  obj6.children = items2;
  items1[1] = callback3(arg1(dependencyMap[8]).ActionSheetRow.Group, obj6);
  let preview = quest.preview;
  if (preview) {
    const obj16 = {};
    const intl6 = arg1(dependencyMap[16]).intl;
    obj16.title = intl6.string(arg1(dependencyMap[16]).t.Ape+mm);
    obj16.hasIcons = true;
    const obj17 = {};
    const obj18 = { IconComponent: arg1(dependencyMap[29]).TrophyIcon };
    obj17.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj18);
    const obj19 = {};
    const intl7 = arg1(dependencyMap[16]).intl;
    obj19.text = intl7.string(arg1(dependencyMap[16]).t.jQEfRT);
    obj17.label = callback2(arg1(dependencyMap[10]).FormLabel, obj19);
    obj17.onPress = function onPress() {
      callback();
      callback(closure_2[14]).hideActionSheet();
    };
    const items3 = [callback2(arg1(dependencyMap[8]).ActionSheetRow, obj17), , , , , , ];
    const obj20 = {};
    const obj21 = { IconComponent: arg1(dependencyMap[30]).RedoIcon };
    obj20.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj21);
    const obj22 = {};
    const intl8 = arg1(dependencyMap[16]).intl;
    obj22.text = intl8.string(arg1(dependencyMap[16]).t.cKSLr4);
    obj20.label = callback2(arg1(dependencyMap[10]).FormLabel, obj22);
    obj20.onPress = function onPress() {
      callback2(0.9 * Math.random() + 0.03);
      callback(callback2[14]).hideActionSheet();
    };
    items3[1] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj20);
    const obj23 = {};
    const obj24 = { IconComponent: arg1(dependencyMap[31]).UndoIcon };
    obj23.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj24);
    const obj25 = {};
    const intl9 = arg1(dependencyMap[16]).intl;
    obj25.text = intl9.string(arg1(dependencyMap[16]).t.taqkwK);
    obj23.label = callback2(arg1(dependencyMap[10]).FormLabel, obj25);
    obj23.onPress = function onPress() {
      lib();
      callback(closure_2[14]).hideActionSheet();
    };
    items3[2] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj23);
    const obj26 = {};
    const obj27 = { IconComponent: arg1(dependencyMap[32]).UnsendIcon };
    obj26.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj27);
    const obj28 = {};
    const intl10 = arg1(dependencyMap[16]).intl;
    obj28.text = intl10.string(arg1(dependencyMap[16]).t.JF6W66);
    obj26.label = callback2(arg1(dependencyMap[10]).FormLabel, obj28);
    obj26.onPress = function onPress() {
      callback3();
      callback(closure_2[14]).hideActionSheet();
    };
    items3[3] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj26);
    const obj29 = {};
    const obj30 = { IconComponent: arg1(dependencyMap[33]).EyeIcon };
    obj29.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj30);
    const obj31 = {};
    const intl11 = arg1(dependencyMap[16]).intl;
    obj31.text = intl11.string(arg1(dependencyMap[16]).t.lL6/zF);
    obj29.label = callback2(arg1(dependencyMap[10]).FormLabel, obj31);
    obj29.onPress = function onPress() {
      const items = [quest.id];
      quest(closure_2[27]).markAdContentUnseen(quest(closure_2[21]).AdCreativeType.QUEST, items);
      const obj = quest(closure_2[27]);
      callback(closure_2[14]).hideActionSheet();
    };
    items3[4] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj29);
    const obj32 = {};
    const obj33 = { IconComponent: arg1(dependencyMap[33]).EyeIcon };
    obj32.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj33);
    const obj34 = {};
    const intl12 = arg1(dependencyMap[16]).intl;
    obj34.text = intl12.string(arg1(dependencyMap[16]).t.tx5Ax5);
    obj32.label = callback2(arg1(dependencyMap[10]).FormLabel, obj34);
    obj32.onPress = function onPress() {
      let obj = quest(closure_2[34]);
      obj = { screen: lib.QUEST_PREVIEW_TOOL_2, params: obj };
      obj = { questId: quest.id };
      obj.openUserSettings(obj);
      callback(closure_2[14]).hideActionSheet();
    };
    items3[5] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj32);
    const obj35 = {};
    const obj36 = { IconComponent: arg1(dependencyMap[15]).CopyIcon };
    obj35.icon = callback2(arg1(dependencyMap[8]).ActionSheetRow.Icon, obj36);
    const obj37 = {};
    const intl13 = arg1(dependencyMap[16]).intl;
    obj37.text = intl13.string(arg1(dependencyMap[16]).t.oisrFi);
    obj35.label = callback2(arg1(dependencyMap[10]).FormLabel, obj37);
    obj35.onPress = function onPress() {
      quest(closure_2[35]).copy(quest.id);
      const obj = quest(closure_2[35]);
      callback(closure_2[14]).hideActionSheet();
    };
    items3[6] = callback2(arg1(dependencyMap[8]).ActionSheetRow, obj35);
    obj16.children = items3;
    preview = callback3(arg1(dependencyMap[8]).ActionSheetRow.Group, obj16);
  }
  items1[2] = preview;
  obj.children = items1;
  return callback3(arg1(dependencyMap[7]).ActionSheet, obj);
};
