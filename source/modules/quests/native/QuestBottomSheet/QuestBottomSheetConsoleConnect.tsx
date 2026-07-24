// Module ID: 14108
// Function ID: 108436
// Name: NonInlineConsoleConnection
// Dependencies: [31, 27, 653, 33, 689, 4130, 10493, 10952, 10497, 10501, 4098, 5796, 14066, 1934, 9485, 9486, 9487, 6969, 6968, 4979, 9009, 5501, 5165, 11884, 1212, 8665, 2]
// Exports: default

// Module 14108 (NonInlineConsoleConnection)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Fragment;
let closure_4;
let closure_5;
let closure_6;
let jsxs;
const require = arg1;
function NonInlineConsoleConnection(arg0) {
  let consoles;
  let require;
  ({ consoles, onConsoleSelect: require } = arg0);
  let obj = {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj["onPress"] = closure_0;
      return outer1_6(outer1_8, obj, type.type);
    })
  };
  return callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    obj = { arrow: true, icon: callback(onPress(11884).PlaystationNeutralIcon, {}) };
    const intl3 = onPress(1212).intl;
    obj.label = intl3.string(onPress(1212).t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = onPress(1212).intl;
      stringResult = intl4.string(onPress(1212).t["u30/ut"]);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5165).TableRow, obj);
  } else if (constants.XBOX === type) {
    obj = { arrow: true, icon: callback(onPress(8665).XboxNeutralIcon, {}) };
    const intl = onPress(1212).intl;
    obj.label = intl.string(onPress(1212).t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = onPress(1212).intl;
      stringResult1 = intl2.string(onPress(1212).t["u30/ut"]);
    }
    obj.subLabel = stringResult1;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5165).TableRow, obj);
  } else {
    return null;
  }
}
({ PlatformTypes: closure_4, UserSettingsSections: closure_5 } = ME);
({ jsx: closure_6, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16, justifyContent: "space-between" };
_createForOfIteratorHelperLoose.platformButtonsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.platformButton = { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  let dependencyMap;
  let importDefault;
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet(NonInlineConsoleConnection, arg1) {
    let obj = outer1_1(outer1_2[10]);
    obj = { questId: quest.id, initialStep: closure_1, sourceQuestContent: closure_2 };
    obj.openLazy(quest(outer1_2[13])(outer1_2[12], outer1_2.paths), "QuestBottomSheet", obj);
  }
  let obj = quest(10493);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  let closure_4 = quest(10952).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(10952);
  let closure_5 = quest(10497).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      const obj = quest(outer1_2[9]);
      return quest(outer1_2[9]).supportedConsoles(quest).map((type) => {
        let closure_0 = type;
        return { type, account: outer1_3.find((type) => type.type === closure_0) };
      });
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(quest(outer1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: quest(outer1_2[16]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(outer1_2[17]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(outer1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: constants };
          quest(outer1_2[15]).captureAdUserAction(obj);
          const obj7 = quest(outer1_2[15]);
        } else {
          obj = { questId: quest.id, questContent: quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: quest(outer1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent: closure_2 };
          callback(obj);
        }
        obj5 = quest(outer1_2[14]);
        outer1_1(outer1_2[10]).hideActionSheet();
        const obj9 = outer1_1(outer1_2[10]);
        let obj1 = { screen: constants.CONNECTIONS };
        quest(outer1_2[11]).openUserSettings(obj1);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(quest(outer1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = quest(outer1_2[15]);
          const obj2 = { type: quest(outer1_2[16]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(outer1_2[17]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(outer1_2[18]).QuestContentCTA.CONNECT_CONSOLE, surfaceId: quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: constants };
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: quest.id, questContent: quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: quest(outer1_2[18]).QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent: closure_2 };
          callback(obj);
        }
        const obj3 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        outer1_1(outer1_2[20])(obj3);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};
