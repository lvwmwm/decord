// Module ID: 17009
// Function ID: 17010
// Name: QuestDockContextMenuActionSheet
// Dependencies: [5, 19, 6775, 1072, 21, 17008, 14638, 6782, 9685, 1114, 6778, 7864, 9664, 9667, 7362, 15133, 8169, 9699, 5253, 7360, 7859, 17010, 9658, 7048, 9662, 17012, 14639, 9661, 9358, 17013, 12483, 17015, 7131, 7557, 5726, 7352, 14464, 17017, 2]
// Exports: default

// Module 17009 (QuestDockContextMenuActionSheet)
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9685 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9699 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17017 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
function QuestDockPreviewTools(quest) {
  let FormLabel;
  let FormLabel2;
  let FormLabel3;
  let FormLabel4;
  let FormLabel5;
  let FormLabel6;
  let FormLabel7;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let Icon7;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c1;
  let c2;
  let c3;
  let c4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj22;
  let obj23;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let obj = quest(9661);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = { title: intl.string(quest(1114).t["Ape+mm"]), hasIcons: true, children: items };
  const Group = quest(7362).ActionSheetRow.Group;
  intl = quest(1114).intl;
  let obj3 = {
    icon: closure_6(Icon, obj4),
    label: closure_6(FormLabel, obj5),
    onPress() {
      _undefined();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const ActionSheetRow = quest(7362).ActionSheetRow;
  obj4 = { IconComponent: quest(9358).TrophyIcon };
  Icon = quest(7362).ActionSheetRow.Icon;
  obj5 = { text: intl2.string(quest(1114).t.jQEfRT) };
  FormLabel = quest(8169).FormLabel;
  intl2 = quest(1114).intl;
  items = [closure_6(ActionSheetRow, obj3), , , , , , ];
  const obj6 = {
    icon: closure_6(Icon2, obj7),
    label: closure_6(FormLabel2, obj8),
    onPress() {
      _undefined2(0.9 * Math.random() + 0.03);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const ActionSheetRow2 = quest(7362).ActionSheetRow;
  obj7 = { IconComponent: quest(17013).RedoIcon };
  Icon2 = quest(7362).ActionSheetRow.Icon;
  obj8 = { text: intl3.string(quest(1114).t.cKSLr4) };
  FormLabel2 = quest(8169).FormLabel;
  intl3 = quest(1114).intl;
  items[1] = closure_6(ActionSheetRow2, obj6);
  const obj9 = {
    icon: closure_6(Icon3, obj10),
    label: closure_6(FormLabel3, obj11),
    onPress() {
      _undefined4();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const ActionSheetRow3 = quest(7362).ActionSheetRow;
  obj10 = { IconComponent: quest(12483).UndoIcon };
  Icon3 = quest(7362).ActionSheetRow.Icon;
  obj11 = { text: intl4.string(quest(1114).t.taqkwK) };
  FormLabel3 = quest(8169).FormLabel;
  intl4 = quest(1114).intl;
  items[2] = closure_6(ActionSheetRow3, obj9);
  const obj12 = {
    icon: closure_6(Icon4, obj13),
    label: closure_6(FormLabel4, obj14),
    onPress() {
      _undefined3();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const ActionSheetRow4 = quest(7362).ActionSheetRow;
  obj13 = { IconComponent: quest(17015).UnsendIcon };
  Icon4 = quest(7362).ActionSheetRow.Icon;
  obj14 = { text: intl5.string(quest(1114).t.JF6W66) };
  FormLabel4 = quest(8169).FormLabel;
  intl5 = quest(1114).intl;
  items[3] = closure_6(ActionSheetRow4, obj12);
  const obj15 = {
    icon: closure_6(Icon5, obj16),
    label: closure_6(FormLabel5, obj17),
    onPress() {
      const items = [quest.id];
      const obj = QuestActionCreators;
      obj.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  const ActionSheetRow5 = quest(7362).ActionSheetRow;
  obj16 = { IconComponent: quest(7131).EyeIcon };
  Icon5 = quest(7362).ActionSheetRow.Icon;
  obj17 = { text: intl6.string(quest(1114).t["lL6/zF"]) };
  FormLabel5 = quest(8169).FormLabel;
  intl6 = quest(1114).intl;
  items[4] = closure_6(ActionSheetRow5, obj15);
  const obj18 = {
    icon: closure_6(Icon6, obj19),
    label: closure_6(FormLabel6, obj20),
    onPress() {
      let obj3;
      const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: obj3 };
      obj3 = { questId: quest.id };
      const obj = openUserSettings;
      obj.openUserSettings(obj2);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet();
    }
  };
  const ActionSheetRow6 = quest(7362).ActionSheetRow;
  obj19 = { IconComponent: quest(7131).EyeIcon };
  Icon6 = quest(7362).ActionSheetRow.Icon;
  obj20 = { text: intl7.string(quest(1114).t.tx5Ax5) };
  FormLabel6 = quest(8169).FormLabel;
  intl7 = quest(1114).intl;
  items[5] = closure_6(ActionSheetRow6, obj18);
  const obj21 = {
    icon: closure_6(Icon7, obj22),
    label: closure_6(FormLabel7, obj23),
    onPress() {
      const obj = ClipboardUtils;
      obj.copy(quest.id);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  const ActionSheetRow7 = quest(7362).ActionSheetRow;
  obj22 = { IconComponent: quest(5726).CopyIcon };
  Icon7 = quest(7362).ActionSheetRow.Icon;
  obj23 = { text: intl8.string(quest(1114).t.oisrFi) };
  FormLabel7 = quest(8169).FormLabel;
  intl8 = quest(1114).intl;
  items[6] = closure_6(ActionSheetRow7, obj21);
  return closure_7(Group, obj2);
}
function QuestDockShareRow(quest) {
  let FormLabel;
  let Icon;
  let intl;
  let obj2;
  let obj3;
  quest = quest.quest;
  let obj = {
    icon: closure_6(Icon, obj2),
    label: closure_6(FormLabel, obj3),
    onPress() {
      const obj = QuestCopyUtils;
      const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      obj.copyShareLink(quest.id, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  };
  const ActionSheetRow = quest(7362).ActionSheetRow;
  obj2 = { IconComponent: quest(5726).CopyIcon };
  Icon = quest(7362).ActionSheetRow.Icon;
  obj3 = { text: intl.string(quest(1114).t.WqhZss) };
  FormLabel = quest(8169).FormLabel;
  intl = quest(1114).intl;
  return closure_6(ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  let FormLabel;
  let Icon;
  let intl;
  let obj2;
  let obj3;
  creative = creative.creative;
  let obj = {
    icon: closure_6(Icon, obj2),
    label: closure_6(FormLabel, obj3),
    onPress() {
      const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
      const obj = QuestDisclosureModalActionCreatorsDefault;
      ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
      obj.showModal(obj2);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet();
    }
  };
  const ActionSheetRow = creative(7362).ActionSheetRow;
  obj2 = { IconComponent: creative(14464).CircleQuestionIcon };
  Icon = creative(7362).ActionSheetRow.Icon;
  obj3 = { text: intl.string(creative(1114).t.GcsZKJ) };
  FormLabel = creative(8169).FormLabel;
  intl = creative(1114).intl;
  return closure_6(ActionSheetRow, obj);
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(creative) {
  let FormLabel;
  let Icon;
  let Icon2;
  let Icon3;
  let buttonLabel;
  let closure_1;
  let intl3;
  let obj11;
  let obj12;
  let obj5;
  let obj8;
  let obj9;
  let stringResult;
  let stringResult1;
  creative = creative.creative;
  let obj3;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    const tmp = captureAdUserAction2;
    const captureAdUserAction = tmp.captureAdUserAction;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: CONTEXT_MENU_HIDE_CONTENT, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const merged = Object.assign(closure_1);
    captureAdUserAction(obj);
  }
  let tmp = creative;
  const impressionId = creative.impressionId;
  let obj = creative(obj3[5]);
  importDefault = obj.getCreativeAnalyticsParams(creative);
  const QuestHomeBountiesFeatureGateExperiment = creative(obj3[6]).QuestHomeBountiesFeatureGateExperiment;
  let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  let tmp3 = creative.type !== creative(obj3[7]).AdCreativeType.QUEST && !QuestHomeBountiesFeatureGateExperiment.useConfig(obj2).enabled;
  let type = creative.type;
  if (tmp(obj3[7]).AdCreativeType.QUEST === type) {
    const tmpResult = tmp(tmp2[8]);
    buttonLabel = tmpResult.getExternalCtaLabel(creative.quest);
    const intl2 = tmp(tmp2[9]).intl;
    stringResult = intl2.string(tmp(tmp2[9]).t.LLLLPD);
  } else if (tmp(obj3[7]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl = tmp(tmp2[9]).intl;
    stringResult = intl.string(tmp(tmp2[9]).t.QUe9zz);
  } else if (tmp(obj3[7]).AdCreativeType.PLAYABLE === type) {
    buttonLabel = creative.playable.cta.buttonLabel;
    const intl5 = tmp(tmp2[9]).intl;
    stringResult = intl5.string(tmp(tmp2[9]).t.QUe9zz);
  }
  obj3 = { content: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[11]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId, sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE };
  let obj4 = {
    icon: closure_6(Icon, obj5),
    label: closure_6(tmp(tmp2[16]).FormLabel, { text: buttonLabel }),
    onPress() {
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        const tmp2Result = QuestPlatformUtils;
        tmp2Result.openGameLinkDirectly(creative.quest, obj3);
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        const obj = { adContentId: creative.bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: creative.bounty.cta };
        const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
        QuestPlatformUtils;
        const result = openAdGameLinkDirectly(obj, obj3);
      } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
        const obj2 = { adContentId: creative.playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: creative.playable.cta };
        const openAdGameLinkDirectly2 = QuestPlatformUtils.openAdGameLinkDirectly;
        QuestPlatformUtils;
        const result1 = openAdGameLinkDirectly2(obj2, obj3);
      }
      obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  };
  const ActionSheetRow = tmp(tmp2[14]).ActionSheetRow;
  obj5 = { IconComponent: tmp(tmp2[15]).LinkExternalMediumIcon };
  Icon = tmp(tmp2[14]).ActionSheetRow.Icon;
  let tmp6 = closure_6(ActionSheetRow, obj4);
  const ActionSheet = tmp(tmp2[19]).ActionSheet;
  const items = [tmp6, ];
  const Group = tmp(tmp2[14]).ActionSheetRow.Group;
  let tmp5Result = null;
  if (creative.type === tmp(obj3[7]).AdCreativeType.QUEST) {
    const tmpResult2 = tmp(tmp2[20]);
    tmp5Result = null;
    if (tmpResult2.isShareableQuest(creative.quest.config)) {
      let obj6 = { quest: creative.quest };
      tmp5Result = tmp5(QuestDockShareRow, obj6);
    }
  }
  items[1] = tmp5Result;
  const children = [tmp7(Group, { hasIcons: true, children: items }), , ];
  let tmp5Result3 = null;
  const Group2 = tmp(tmp2[14]).ActionSheetRow.Group;
  if (!tmp3) {
    let obj7 = {
      icon: tmp5(Icon2, obj8),
      label: tmp5(tmp(tmp2[16]).FormLabel, obj9),
      onPress() {
          const CONTEXT_MENU_LEARN_MORE = AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE;
          const tmp3 = captureAdUserAction2;
          const captureAdUserAction = tmp3.captureAdUserAction;
          const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: CONTEXT_MENU_LEARN_MORE, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          const merged = Object.assign(closure_1);
          captureAdUserAction(obj);
          const type = creative.type;
          const tmp6 = creative;
          if (AdCreativeType.AdCreativeType.QUEST === type) {
            const obj2 = { scrollToQuestId: tmp6.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
            const openQuestHome2 = QuestUtils.openQuestHome;
            QuestUtils;
            openQuestHome2(obj2);
          } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
            obj3 = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
            const openQuestHome = QuestUtils.openQuestHome;
            QuestUtils;
            openQuestHome(obj3);
          }
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        }
    };
    const ActionSheetRow2 = tmp(tmp2[14]).ActionSheetRow;
    obj8 = { IconComponent: require("WreathIcon") };
    Icon2 = tmp(tmp2[14]).ActionSheetRow.Icon;
    obj9 = { text: stringResult };
    tmp5Result3 = tmp5(ActionSheetRow2, obj7);
  }
  const items2 = [tmp5Result3, tmp5(QuestDockDisclosureRow, { creative }), ];
  let obj10 = {
    icon: tmp5(Icon3, obj11),
    label: tmp5(FormLabel, obj12),
    subLabel: stringResult1,
    onPress: trackInternalClick(function*(arg0, value) {
      let closure_0;
      let v2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              trackInternalClick(tmp(c2[11]).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
              const type = creative.type;
              const tmp36 = creative;
              if (tmp(c2[7]).AdCreativeType.QUEST === type) {
                const obj7 = tmp(c2[24]);
                const dismissQuestContentResult = obj7.dismissQuestContent(tmp36.quest.id, tmp(c2[10]).QuestContent.QUEST_BAR_MOBILE);
                const obj8 = c1(c2[18]);
                obj8.hideActionSheet();
                c1 = 1;
                c2 = 1;
                const obj9 = { value: dismissQuestContentResult, done: false };
                return obj9;
              } else {
                const obj4 = tmp(c2[26]);
                const dismissAdContentResult = obj4.dismissAdContent(closure_1, tmp(c2[10]).QuestContent.QUEST_BAR_MOBILE);
                const obj5 = c1(c2[18]);
                obj5.hideActionSheet();
                c1 = 2;
                c2 = 1;
                const obj10 = { value: dismissAdContentResult, done: false };
                return obj10;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const obj2 = tmp(c2[25]);
              const result = obj2.displayQuestDismissalToast();
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp28) {
          c2 = 3;
          throw tmp28;
        }
      }
    })
  };
  const ActionSheetRow3 = tmp(tmp2[14]).ActionSheetRow;
  obj11 = { IconComponent: tmp(tmp2[23]).XSmallIcon };
  Icon3 = tmp(tmp2[14]).ActionSheetRow.Icon;
  obj12 = { text: intl3.string(tmp(obj3[9]).t.NN79E9) };
  FormLabel = tmp(tmp2[16]).FormLabel;
  intl3 = tmp(tmp2[9]).intl;
  stringResult1 = undefined;
  if (!tmp3) {
    const intl4 = tmp(tmp2[9]).intl;
    stringResult1 = intl4.string(tmp(tmp2[9]).t.V6htN5);
  }
  const obj13 = { hasIcons: true, children: items2 };
  items2[2] = closure_6(ActionSheetRow3, obj10);
  children[1] = closure_7(Group2, obj13);
  let tmp5Result4 = null;
  if (creative.type === tmp(obj3[7]).AdCreativeType.QUEST) {
    tmp5Result4 = null;
    if (creative.quest.preview) {
      const obj14 = { quest: creative.quest };
      tmp5Result4 = tmp5(QuestDockPreviewTools, obj14);
    }
  }
  children[2] = tmp5Result4;
  return closure_7(ActionSheet, { children });
};
