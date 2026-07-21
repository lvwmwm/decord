// Module ID: 13934
// Function ID: 105885
// Name: NonInlineConsoleConnection
// Dependencies: []
// Exports: default

// Module 13934 (NonInlineConsoleConnection)
let Fragment;
let jsxs;
function NonInlineConsoleConnection(arg0) {
  let consoles;
  ({ consoles, onConsoleSelect: closure_0 } = arg0);
  const obj = {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj["onPress"] = closure_0;
      return callback(closure_8, obj, type.type);
    })
  };
  return callback(arg1(dependencyMap[21]).TableRowGroup, obj);
}
function ConsoleRow(onPress) {
  const arg1 = onPress.onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  const importDefault = merged;
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    obj = { arrow: true, icon: callback(arg1(dependencyMap[23]).PlaystationNeutralIcon, {}) };
    const intl3 = arg1(dependencyMap[24]).intl;
    obj.label = intl3.string(arg1(dependencyMap[24]).t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = arg1(dependencyMap[24]).intl;
      stringResult = intl4.string(arg1(dependencyMap[24]).t.u30/ut);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return callback(arg1(dependencyMap[22]).TableRow, obj);
  } else if (constants.XBOX === type) {
    obj = { arrow: true, icon: callback(arg1(dependencyMap[25]).XboxNeutralIcon, {}) };
    const intl = arg1(dependencyMap[24]).intl;
    obj.label = intl.string(arg1(dependencyMap[24]).t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = arg1(dependencyMap[24]).intl;
      stringResult1 = intl2.string(arg1(dependencyMap[24]).t.u30/ut);
    }
    obj.subLabel = stringResult1;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return callback(arg1(dependencyMap[22]).TableRow, obj);
  } else {
    return null;
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ PlatformTypes: closure_4, UserSettingsSections: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs, Fragment } = arg1(dependencyMap[3]));
const PLATFORM_XBOX = importDefault(dependencyMap[4]).unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = importDefault(dependencyMap[4]).unsafe_rawColors.PLATFORM_PLAYSTATION;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[4]).space.PX_16 };
obj.platformButtonsContainer = obj;
obj.platformButton = {};
const styles = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  const arg1 = quest;
  ({ step: closure_1, sourceQuestContent: closure_2 } = quest);
  function openQuestBottomSheet(NonInlineConsoleConnection, arg1) {
    let obj = callback(paths[10]);
    obj = { questId: quest.id, initialStep: callback, sourceQuestContent: paths };
    obj.openLazy(quest(paths[13])(paths[12], paths.paths), "QuestBottomSheet", obj);
  }
  let obj = arg1(dependencyMap[6]);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  const React = xboxAndPlaystationAccounts;
  let closure_4 = arg1(dependencyMap[7]).useTrackQuestContentClickedWithImpression();
  const obj2 = arg1(dependencyMap[7]);
  let closure_5 = arg1(dependencyMap[8]).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: React.useMemo(() => {
      const obj = quest(closure_2[9]);
      return quest(closure_2[9]).supportedConsoles(quest).map((type) => ({ type, account: closure_3.find((type) => type.type === type) }));
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(quest(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: quest(closure_2[16]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(closure_2[17]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(closure_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: quest(closure_2[19]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: constants };
          quest(closure_2[15]).captureAdUserAction(obj);
          const obj7 = quest(closure_2[15]);
        } else {
          obj = { questId: quest.id, questContent: quest(closure_2[19]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: quest(closure_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent: closure_2 };
          callback2(obj);
        }
        const obj5 = quest(closure_2[14]);
        callback(closure_2[10]).hideActionSheet();
        const obj9 = callback(closure_2[10]);
        let obj1 = { screen: constants.CONNECTIONS };
        quest(closure_2[11]).openUserSettings(obj1);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(quest(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = quest(closure_2[15]);
          const obj2 = { type: quest(closure_2[16]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(closure_2[17]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(closure_2[18]).QuestContentCTA.CONNECT_CONSOLE, surfaceId: quest(closure_2[19]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: constants };
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: quest.id, questContent: quest(closure_2[19]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: quest(closure_2[18]).QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent: closure_2 };
          callback2(obj);
        }
        const obj3 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        callback(closure_2[20])(obj3);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};
