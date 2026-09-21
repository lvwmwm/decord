// Module ID: 15359
// Function ID: 15360
// Name: QuestDockContextMenuActionSheet
// Dependencies: [5, 19, 5663, 1078, 21, 558, 568, 15358, 11644, 5670, 10580, 1119, 5666, 7969, 7970, 7971, 7981, 7959, 7445, 13214, 8876, 11620, 4725, 7963, 15360, 11895, 5846, 10564, 15362, 11645, 7449, 11607, 8989, 15363, 15365, 15367, 7211, 7626, 4704, 7436, 11490, 15369, 2]

// Module 15359 (QuestDockContextMenuActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import AdCreativeType from "AdCreativeType" /* 5670 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7969 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7970 */;
import QuestActionCreators from "QuestActionCreators" /* 10564 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10580 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15369 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const QuestsExperimentLocations = fn(5663).QuestsExperimentLocations;
const UserSettingsSections = fn(1078).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(558);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(handleProgress[6]).c(37);
  quest = quest.quest;
  let obj = quest(handleProgress[6]);
  const questPreviewActions = quest(handleProgress[31]).useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[11]).intl;
    const stringResult = intl.string(tmp(tmp2[11]).t["Ape+mm"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { IconComponent: tmp(tmp2[32]).TrophyIcon };
    const tmp9 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { text: null };
    const intl2 = tmp(tmp2[11]).intl;
    obj4.text = intl2.string(tmp(tmp2[11]).t.jQEfRT);
    const tmp12 = closure_6(tmp(tmp2[20]).FormLabel, obj4);
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== handleComplete) {
    const obj5 = {
      icon: tmp7,
      label: tmp10,
      onPress() {
          handleComplete();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp15 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj5);
    cResult[3] = handleComplete;
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { IconComponent: tmp(tmp2[33]).RedoIcon };
    const tmp18 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj6);
    cResult[5] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { text: null };
    const intl3 = tmp(tmp2[11]).intl;
    obj7.text = intl3.string(tmp(tmp2[11]).t.cKSLr4);
    const tmp21 = closure_6(tmp(tmp2[20]).FormLabel, obj7);
    cResult[6] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== handleProgress) {
    const obj8 = {
      icon: tmp16,
      label: tmp19,
      onPress() {
          handleProgress(0.9 * Math.random() + 0.03);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp24 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj8);
    cResult[7] = handleProgress;
    cResult[8] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { IconComponent: tmp(tmp2[34]).UndoIcon };
    const tmp27 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj9);
    cResult[9] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { text: null };
    const intl4 = tmp(tmp2[11]).intl;
    obj10.text = intl4.string(tmp(tmp2[11]).t.taqkwK);
    const tmp30 = closure_6(tmp(tmp2[20]).FormLabel, obj10);
    cResult[10] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[10];
  }
  if (cResult[11] !== handleResetStatusClick) {
    const obj11 = {
      icon: tmp25,
      label: tmp28,
      onPress() {
          handleResetStatusClick();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp33 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj11);
    cResult[11] = handleResetStatusClick;
    cResult[12] = tmp33;
    let tmp31 = tmp33;
  } else {
    tmp31 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = { IconComponent: tmp(tmp2[35]).UnsendIcon };
    const tmp36 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj12);
    cResult[13] = tmp36;
    let tmp34 = tmp36;
  } else {
    tmp34 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { text: null };
    const intl5 = tmp(tmp2[11]).intl;
    obj13.text = intl5.string(tmp(tmp2[11]).t.JF6W66);
    const tmp39 = closure_6(tmp(tmp2[20]).FormLabel, obj13);
    cResult[14] = tmp39;
    let tmp37 = tmp39;
  } else {
    tmp37 = cResult[14];
  }
  if (cResult[15] !== handleResetDismissibilityClick) {
    const obj14 = {
      icon: tmp34,
      label: tmp37,
      onPress() {
          handleResetDismissibilityClick();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp42 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj14);
    cResult[15] = handleResetDismissibilityClick;
    cResult[16] = tmp42;
    let tmp40 = tmp42;
  } else {
    tmp40 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { IconComponent: tmp(tmp2[36]).EyeIcon };
    const tmp45 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj15);
    cResult[17] = tmp45;
    let tmp43 = tmp45;
  } else {
    tmp43 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { text: null };
    const intl6 = tmp(tmp2[11]).intl;
    obj16.text = intl6.string(tmp(tmp2[11]).t["lL6/zF"]);
    const tmp48 = closure_6(tmp(tmp2[20]).FormLabel, obj16);
    cResult[18] = tmp48;
    let tmp46 = tmp48;
  } else {
    tmp46 = cResult[18];
  }
  if (cResult[19] !== quest.id) {
    const obj17 = {
      icon: tmp43,
      label: tmp46,
      onPress() {
          const items = [quest.id];
          QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp51 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj17);
    cResult[19] = quest.id;
    cResult[20] = tmp51;
    let tmp49 = tmp51;
  } else {
    tmp49 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const obj18 = { IconComponent: tmp(tmp2[36]).EyeIcon };
    const tmp54 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj18);
    cResult[21] = tmp54;
    let tmp52 = tmp54;
  } else {
    tmp52 = cResult[21];
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj19 = { text: null };
    const intl7 = tmp(tmp2[11]).intl;
    obj19.text = intl7.string(tmp(tmp2[11]).t.tx5Ax5);
    const tmp57 = closure_6(tmp(tmp2[20]).FormLabel, obj19);
    cResult[22] = tmp57;
    let tmp55 = tmp57;
  } else {
    tmp55 = cResult[22];
  }
  if (cResult[23] !== quest.id) {
    const obj20 = {
      icon: tmp52,
      label: tmp55,
      onPress() {
          const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
          openUserSettings.openUserSettings(obj2);
          const obj3 = { questId: quest.id };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp60 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj20);
    cResult[23] = quest.id;
    cResult[24] = tmp60;
    let tmp58 = tmp60;
  } else {
    tmp58 = cResult[24];
  }
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    const obj21 = { IconComponent: tmp(tmp2[38]).CopyIcon };
    const tmp63 = closure_6(tmp(tmp2[18]).ActionSheetRow.Icon, obj21);
    cResult[25] = tmp63;
    let tmp61 = tmp63;
  } else {
    tmp61 = cResult[25];
  }
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const obj22 = { text: null };
    const intl8 = tmp(tmp2[11]).intl;
    obj22.text = intl8.string(tmp(tmp2[11]).t.oisrFi);
    const tmp66 = closure_6(tmp(tmp2[20]).FormLabel, obj22);
    cResult[26] = tmp66;
    let tmp64 = tmp66;
  } else {
    tmp64 = cResult[26];
  }
  if (cResult[27] !== quest.id) {
    const obj23 = {
      icon: tmp61,
      label: tmp64,
      onPress() {
          ClipboardUtils.copy(quest.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp69 = closure_6(tmp(tmp2[18]).ActionSheetRow, obj23);
    cResult[27] = quest.id;
    cResult[28] = tmp69;
    let tmp67 = tmp69;
  } else {
    tmp67 = cResult[28];
  }
  if (cResult[29] === tmp31) {
    if (cResult[30] === tmp40) {
      if (cResult[31] === tmp49) {
        if (cResult[32] === tmp58) {
          if (cResult[33] === tmp67) {
            if (cResult[34] === tmp13) {
              if (cResult[35] === tmp22) {
                let tmp70 = cResult[36];
              }
              return tmp70;
            }
          }
        }
      }
    }
  }
  const obj24 = { title: first, hasIcons: true, children: null };
  let items = [tmp13, tmp22, tmp31, tmp40, tmp49, tmp58, tmp67];
  obj24.children = items;
  const tmp71 = closure_7(quest(handleProgress[18]).ActionSheetRow.Group, obj24);
  cResult[29] = tmp31;
  cResult[30] = tmp40;
  cResult[31] = tmp49;
  cResult[32] = tmp58;
  cResult[33] = tmp67;
  cResult[34] = tmp13;
  cResult[35] = tmp22;
  cResult[36] = tmp71;
  tmp70 = tmp71;
}) : ((quest) => {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  const questPreviewActions = quest(11607).useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = { title: null, hasIcons: true, children: null };
  const intl = quest(1119).intl;
  obj2.title = intl.string(quest(1119).t["Ape+mm"]);
  let obj3 = { icon: null, label: null, onPress: null };
  let obj = quest(11607);
  obj3.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(8989).TrophyIcon });
  const obj5 = { text: null };
  const intl2 = quest(1119).intl;
  obj5.text = intl2.string(quest(1119).t.jQEfRT);
  obj3.label = closure_6(quest(8876).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_6(quest(7445).ActionSheetRow, obj3), , , , , , ];
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(8989).TrophyIcon };
  obj6.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(15363).RedoIcon });
  const obj8 = { text: null };
  const intl3 = quest(1119).intl;
  obj8.text = intl3.string(quest(1119).t.cKSLr4);
  obj6.label = closure_6(quest(8876).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_6(quest(7445).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(15363).RedoIcon };
  obj9.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(15365).UndoIcon });
  const obj11 = { text: null };
  const intl4 = quest(1119).intl;
  obj11.text = intl4.string(quest(1119).t.taqkwK);
  obj9.label = closure_6(quest(8876).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_6(quest(7445).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(15365).UndoIcon };
  obj12.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(15367).UnsendIcon });
  const obj14 = { text: null };
  const intl5 = quest(1119).intl;
  obj14.text = intl5.string(quest(1119).t.JF6W66);
  obj12.label = closure_6(quest(8876).FormLabel, obj14);
  obj12.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(quest(7445).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(15367).UnsendIcon };
  obj15.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(7211).EyeIcon });
  const obj17 = { text: null };
  const intl6 = quest(1119).intl;
  obj17.text = intl6.string(quest(1119).t["lL6/zF"]);
  obj15.label = closure_6(quest(8876).FormLabel, obj17);
  obj15.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_6(quest(7445).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(7211).EyeIcon };
  obj18.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(7211).EyeIcon });
  const obj20 = { text: null };
  const intl7 = quest(1119).intl;
  obj20.text = intl7.string(quest(1119).t.tx5Ax5);
  obj18.label = closure_6(quest(8876).FormLabel, obj20);
  obj18.onPress = function onPress() {
    const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
    openUserSettings.openUserSettings(obj2);
    const obj3 = { questId: quest.id };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_6(quest(7445).ActionSheetRow, obj18);
  const obj21 = { icon: null, label: null, onPress: null };
  const obj19 = { IconComponent: quest(7211).EyeIcon };
  obj21.icon = closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(4704).CopyIcon });
  const obj23 = { text: null };
  const intl8 = quest(1119).intl;
  obj23.text = intl8.string(quest(1119).t.oisrFi);
  obj21.label = closure_6(quest(8876).FormLabel, obj23);
  obj21.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_6(quest(7445).ActionSheetRow, obj21);
  obj2.children = items;
  return closure_7(quest(7445).ActionSheetRow.Group, obj2);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(568).c(4);
  quest = quest.quest;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { IconComponent: tmp(4704).CopyIcon };
    const tmp6 = closure_6(tmp(7445).ActionSheetRow.Icon, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { text: null };
    const intl = tmp(1119).intl;
    obj3.text = intl.string(tmp(1119).t.WqhZss);
    const tmp9 = closure_6(tmp(8876).FormLabel, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== quest.id) {
    const obj4 = {
      icon: first,
      label: tmp7,
      onPress() {
          const obj = QuestCopyUtils;
          obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
          const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp12 = closure_6(tmp(7445).ActionSheetRow, obj4);
    cResult[2] = quest.id;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : ((quest) => {
  quest = quest.quest;
  let obj = { icon: closure_6(quest(7445).ActionSheetRow.Icon, { IconComponent: quest(4704).CopyIcon }), label: null, onPress: null };
  const obj3 = { text: null };
  const intl = quest(1119).intl;
  obj3.text = intl.string(quest(1119).t.WqhZss);
  obj.label = closure_6(quest(8876).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj = QuestCopyUtils;
    obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(quest(7445).ActionSheetRow, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((creative) => {
  const cResult = creative(568).c(4);
  creative = creative.creative;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { IconComponent: tmp(11490).CircleQuestionIcon };
    const tmp6 = closure_6(tmp(7445).ActionSheetRow.Icon, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { text: null };
    const intl = tmp(1119).intl;
    obj3.text = intl.string(tmp(1119).t.GcsZKJ);
    const tmp9 = closure_6(tmp(8876).FormLabel, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== creative) {
    const obj4 = {
      icon: first,
      label: tmp7,
      onPress() {
          const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
          const obj = QuestDisclosureModalActionCreatorsDefault;
          obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          obj.showModal(obj2);
          const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp12 = closure_6(tmp(7445).ActionSheetRow, obj4);
    cResult[2] = creative;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : ((creative) => {
  creative = creative.creative;
  let obj = { icon: closure_6(creative(7445).ActionSheetRow.Icon, { IconComponent: creative(11490).CircleQuestionIcon }), label: null, onPress: null };
  let obj3 = { text: null };
  const intl = creative(1119).intl;
  obj3.text = intl.string(creative(1119).t.GcsZKJ);
  obj.label = closure_6(creative(8876).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
    const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(creative(7445).ActionSheetRow, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((creative) => {
  const cResult = creative(568).c(59);
  creative = creative.creative;
  const impressionId = creative.impressionId;
  if (cResult[0] !== creative) {
    const creativeAnalyticsParams = tmp(15358).getCreativeAnalyticsParams(creative);
    cResult[0] = creative;
    cResult[1] = creativeAnalyticsParams;
    let tmp4 = creativeAnalyticsParams;
    let tmpResult = tmp(15358);
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  const QuestHomeBountiesFeatureGateExperiment = tmp(11644).QuestHomeBountiesFeatureGateExperiment;
  creative.type === creative(5670).AdCreativeType.BOUNTY && !QuestHomeBountiesFeatureGateExperiment.useConfig(tmp6).enabled;
  let type = creative.type;
  if (creative(5670).AdCreativeType.QUEST === type) {
    if (cResult[3] !== creative.quest) {
      const externalCtaLabel = tmp(10580).getExternalCtaLabel(creative.quest);
      cResult[3] = creative.quest;
      cResult[4] = externalCtaLabel;
      let tmpResult2 = tmp(10580);
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult = intl2.string(tmp(1119).t.LLLLPD);
      cResult[5] = stringResult;
    }
  } else {
    let buttonLabel;
    if (tmp(5670).AdCreativeType.BOUNTY === type) {
      const _Symbol3 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult1 = intl.string(tmp(1119).t.QUe9zz);
        cResult[6] = stringResult1;
      }
      buttonLabel = creative.bounty.cta.buttonLabel;
    }
    if (cResult[7] !== impressionId) {
      let obj3 = { content: tmp(5666).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(7969).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId, sourceQuestContent: tmp(5666).QuestContent.QUEST_BAR_MOBILE };
      cResult[7] = impressionId;
      cResult[8] = obj3;
      let tmp19 = obj3;
    } else {
      tmp19 = cResult[8];
    }
    dependencyMap = tmp19;
    if (cResult[9] !== tmp4) {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
      cResult[9] = tmp4;
      cResult[10] = B;
      const tmp20 = B;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
    }
    B = tmp20;
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
      let obj4 = { IconComponent: tmp(13214).LinkExternalMediumIcon };
      const tmp22 = closure_6(tmp(7445).ActionSheetRow.Icon, obj4);
      cResult[11] = tmp22;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
    }
    if (cResult[12] !== buttonLabel) {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
      let obj5 = { text: buttonLabel };
      const tmp24 = closure_6(tmp(8876).FormLabel, obj5);
      cResult[12] = buttonLabel;
      cResult[13] = tmp24;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
    }
    if (cResult[14] === creative.bounty) {
      class B {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[14]);
          if (obj.shouldMigrateToAdAnalyticsInterface(closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
            tmpResult = tmp(tmp2[15]);
            obj1 = { type: null };
            obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
            tmp6 = closure_1;
            tmp7 = obj1;
            merged = Object.assign(closure_1);
            obj1.questContentCTA = creative;
            obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
            captureAdUserActionResult = tmpResult.captureAdUserAction(obj1);
          } else {
            tmp3 = closure_1;
            if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
              tmpResult1 = tmp(tmp2[17]);
              obj8 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj8.questId = tmp3.adCreativeId;
              obj8.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj8.questContentCTA = creative;
              obj8.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result = tmpResult1.trackQuestContentClicked(obj8);
            } else {
              tmpResult2 = tmp(tmp2[17]);
              obj9 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
              obj9.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj9.questContentCTA = creative;
              obj9.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              result1 = tmpResult2.trackAdContentClicked(obj9);
            }
          }
          return;
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_0;
        type = closure_0.type;
        tmp2 = closure_0;
        tmp3 = closure_2;
        if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
          tmp2Result = tmp2(tmp3[21]);
          tmp4 = closure_2;
          openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
        } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
          tmp2Result1 = tmp2(tmp3[21]);
          obj1 = { adContentId: null, adCreativeType: null, cta: null };
          obj1.adContentId = tmp.bounty.id;
          obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
          obj1.cta = tmp.bounty.cta;
          tmp7 = closure_2;
          result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
        }
        obj2 = closure_1(tmp3[22]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    cResult[14] = creative.bounty;
    cResult[15] = creative.quest;
    cResult[16] = creative.type;
    cResult[17] = tmp19;
    cResult[18] = N;
  }
}) : ((creative) => {
  creative = creative.creative;
  let obj3;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      const obj2 = { type: tmp(7981).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(adCreativeType);
      obj2.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj2.surfaceId = tmp(5666).QuestContent.QUEST_BAR_MOBILE;
      obj2.sourceQuestContent = tmp(5666).QuestContent.QUEST_BAR_MOBILE;
      tmp(7971).captureAdUserAction(obj2);
      const tmpResult = tmp(7971);
    } else if (adCreativeType.adCreativeType === tmp(5670).AdCreativeType.QUEST) {
      const obj4 = { questId: tmp3.adCreativeId, questContent: tmp(5666).QuestContent.QUEST_BAR_MOBILE, questContentCTA: CONTEXT_MENU_HIDE_CONTENT, sourceQuestContent: tmp(5666).QuestContent.QUEST_BAR_MOBILE };
      const result = tmp(7959).trackQuestContentClicked(obj4);
      const tmpResult3 = tmp(7959);
    } else {
      const obj5 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
      obj5.questContent = tmp(5666).QuestContent.QUEST_BAR_MOBILE;
      obj5.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj5.sourceQuestContent = tmp(5666).QuestContent.QUEST_BAR_MOBILE;
      const result1 = tmp(7959).trackAdContentClicked(obj5);
      const tmpResult4 = tmp(7959);
    }
  }
  importDefault = creative(obj3[7]).getCreativeAnalyticsParams(creative);
  const QuestHomeBountiesFeatureGateExperiment = creative(obj3[8]).QuestHomeBountiesFeatureGateExperiment;
  const tmp3 = creative.type === creative(obj3[9]).AdCreativeType.BOUNTY && !QuestHomeBountiesFeatureGateExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).enabled;
  let type = creative.type;
  if (creative(obj3[9]).AdCreativeType.QUEST === type) {
    let buttonLabel = tmp(tmp2[10]).getExternalCtaLabel(creative.quest);
    const intl = tmp(tmp2[11]).intl;
    let stringResult = intl.string(tmp(tmp2[11]).t.LLLLPD);
    let tmpResult = tmp(tmp2[10]);
  } else if (tmp(tmp2[9]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl4 = tmp(tmp2[11]).intl;
    stringResult = intl4.string(tmp(tmp2[11]).t.QUe9zz);
  }
  obj3 = { content: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
  let obj4 = { icon: null, label: null, onPress: null };
  let obj = creative(obj3[7]);
  let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  obj4.icon = closure_6(creative(obj3[18]).ActionSheetRow.Icon, { IconComponent: creative(obj3[19]).LinkExternalMediumIcon });
  obj4.label = closure_6(creative(obj3[20]).FormLabel, { text: buttonLabel });
  obj4.onPress = function onPress() {
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      tmp2(11620).openGameLinkDirectly(tmp.quest, obj3);
      const tmp2Result = tmp2(11620);
    } else if (tmp2(5670).AdCreativeType.BOUNTY === type) {
      const obj = { adContentId: tmp.bounty.id, adCreativeType: tmp2(5670).AdCreativeType.BOUNTY, cta: tmp.bounty.cta };
      const result = tmp2(11620).openAdGameLinkDirectly(obj, obj3);
      const tmp2Result2 = tmp2(11620);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let obj5 = { IconComponent: creative(obj3[19]).LinkExternalMediumIcon };
  const items = [closure_6(creative(obj3[18]).ActionSheetRow, obj4), ];
  let tmp5Result = null;
  if (creative.type === creative(obj3[9]).AdCreativeType.QUEST) {
    tmp5Result = null;
    if (tmpResult2.isShareableQuest(creative.quest.config)) {
      let obj6 = { quest: creative.quest };
      tmp5Result = tmp5(closure_9, obj6);
    }
    tmpResult2 = tmp(tmp2[23]);
  }
  items[1] = tmp5Result;
  const children = [closure_7(creative(obj3[18]).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  let tmp5Result3 = null;
  if (!tmp3) {
    let obj7 = { icon: null, label: null, onPress: null };
    const obj8 = { IconComponent: require("WreathIcon") };
    obj7.icon = tmp5(tmp(tmp2[18]).ActionSheetRow.Icon, obj8);
    let obj9 = { text: stringResult };
    obj7.label = tmp5(tmp(tmp2[20]).FormLabel, obj9);
    obj7.onPress = function onPress() {
      trackInternalClick(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        const obj = { scrollToQuestId: creative.quest.id, fromContent: tmp(5666).QuestContent.QUEST_BAR_MOBILE };
        tmp(11895).openQuestHome(obj);
        const tmpResult = tmp(11895);
      } else if (tmp(5670).AdCreativeType.BOUNTY === type) {
        const obj2 = { fromContent: tmp(5666).QuestContent.QUEST_BAR_MOBILE };
        tmp(11895).openQuestHome(obj2);
        const tmpResult2 = tmp(11895);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    tmp5Result3 = tmp5(tmp(tmp2[18]).ActionSheetRow, obj7);
  }
  const items2 = [tmp5Result3, closure_6(closure_10, { creative }), ];
  let obj10 = { icon: null, label: null, subLabel: null, onPress: null };
  const tmp6 = closure_6(creative(obj3[18]).ActionSheetRow, obj4);
  obj10.icon = closure_6(creative(obj3[18]).ActionSheetRow.Icon, { IconComponent: creative(obj3[26]).XSmallIcon });
  const obj12 = { text: null };
  const intl2 = tmp(tmp2[11]).intl;
  obj12.text = intl2.string(creative(obj3[11]).t.NN79E9);
  obj10.label = closure_6(creative(obj3[20]).FormLabel, obj12);
  let stringResult1;
  if (!tmp3) {
    const intl3 = tmp(tmp2[11]).intl;
    stringResult1 = intl3.string(tmp(tmp2[11]).t.V6htN5);
  }
  const obj13 = { hasIcons: true, children: null };
  obj10.subLabel = stringResult1;
  obj10.onPress = trackInternalClick(function*(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            trackInternalClick(tmp2(7969).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(5670).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(10564);
              const dismissQuestContentResult = tmp2(10564).dismissQuestContent(tmp36.quest.id, tmp2(5666).QuestContent.QUEST_BAR_MOBILE);
              v2(4725).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              const obj9 = { value: dismissQuestContentResult, done: false };
              return obj9;
            } else if (tmp2(5670).AdCreativeType.BOUNTY === type) {
              const obj4 = tmp2(11645);
              const dismissAdContentResult = tmp2(11645).dismissAdContent(closure_1, tmp2(5666).QuestContent.QUEST_BAR_MOBILE);
              v2(4725).hideActionSheet();
              v2 = 2;
              dependencyMap = 1;
              const obj10 = { value: dismissAdContentResult, done: false };
              return obj10;
            } else {
              dependencyMap = 3;
            }
            tmp36 = creative;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = tmp2(15362).displayQuestDismissalToast();
            const obj2 = tmp2(15362);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        }
        dependencyMap = 3;
        const obj11 = { value, done: true };
        return obj11;
      } catch (tmp27) {
        dependencyMap = tmp;
        throw tmp27;
      }
    }
  });
  items2[2] = closure_6(creative(obj3[18]).ActionSheetRow, obj10);
  obj13.children = items2;
  children[1] = closure_7(creative(obj3[18]).ActionSheetRow.Group, obj13);
  let tmp5Result4 = null;
  if (creative.type === creative(obj3[9]).AdCreativeType.QUEST) {
    tmp5Result4 = null;
    if (creative.quest.preview) {
      const obj14 = { quest: creative.quest };
      tmp5Result4 = tmp5(closure_8, obj14);
    }
  }
  children[2] = tmp5Result4;
  return closure_7(creative(obj3[30]).ActionSheet, { children });
});
