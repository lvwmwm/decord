// Module ID: 14692
// Function ID: 14693
// Name: QuestBottomSheetConsoleConnect
// Dependencies: [19, 17, 1074, 21, 576, 4836, 10681, 10749, 10711, 10719, 4800, 6800, 14651, 1981, 7153, 7142, 7152, 5763, 7141, 5759, 8528, 5999, 5917, 8349, 1115, 8161, 2]
// Exports: default

// Module 14692 (QuestBottomSheetConsoleConnect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import TableRow3 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction3 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8161 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8349 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8528 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Fragment;
let closure_4;
let hasOwnProperty;
let jsxs;
let metroRequire;
let obj2;
function NonInlineConsoleConnection(arg0) {
  let consoles;
  let onPress;
  ({ consoles, onConsoleSelect: require } = arg0);
  let obj = {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = { onPress: require };
      const merged = Object.assign(type);
      return metroRequire(ConsoleRow, obj, type.type);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_6(TableRowGroup, obj);
}
function ConsoleRow(onPress) {
  let intl;
  let intl3;
  let stringResult;
  let stringResult1;
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    const obj2 = {
      arrow: true,
      icon: metroRequire(PlaystationNeutralIcon.PlaystationNeutralIcon, {}),
      label: intl3.string(intl5.t.JafL6p),
      subLabel: stringResult,
      onPress() {
          return onPress(merged);
        }
    };
    const TableRow2 = TableRow3.TableRow;
    intl3 = intl5.intl;
    stringResult = undefined;
    const tmp7 = metroRequire;
    if (null != merged.account) {
      const intl4 = tmp8(1115).intl;
      stringResult = intl4.string(tmp8(1115).t["u30/ut"]);
    }
    return tmp7(TableRow2, obj2);
  } else if (tmp2.XBOX === type) {
    const obj = {
      arrow: true,
      icon: metroRequire(XboxNeutralIcon.XboxNeutralIcon, {}),
      label: intl.string(intl5.t.Nfvo72),
      subLabel: stringResult1,
      onPress() {
          return onPress(merged);
        }
    };
    const TableRow = TableRow3.TableRow;
    intl = intl5.intl;
    stringResult1 = undefined;
    const tmp3 = metroRequire;
    if (null != merged.account) {
      const intl2 = tmp4(1115).intl;
      stringResult1 = intl2.string(tmp4(1115).t["u30/ut"]);
    }
    return tmp3(TableRow, obj);
  } else {
    return null;
  }
}
const View = react_native.View;
({ PlatformTypes: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs, Fragment } = Fragment);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
let obj = { platformButtonsContainer: obj2, platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } };
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  let initialStep;
  let sourceQuestContent;
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { questId: quest.id, initialStep: importDefault, sourceQuestContent: dependencyMap };
    obj.openLazy(asyncRequire(14651, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  let obj = quest(10681);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj2 = quest(10749);
  let closure_4 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = quest(10711);
  const impressionId = obj3.useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj4 = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      let obj = QuestPlatformUtils;
      const supportedConsolesResult = obj.supportedConsoles(quest);
      return supportedConsolesResult.map((type) => {
        let closure_0 = type;
        const obj = { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
        return obj;
      });
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        const obj4 = AdAnalyticsInterfaceExperiment;
        if (obj4.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId };
          const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction2(obj2);
        } else {
          const obj3 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent: dependencyMap };
          closure_4(obj3);
        }
        const obj7 = ActionSheetActionCreatorsDefault;
        obj7.hideActionSheet();
        const obj5 = { screen: hasOwnProperty.CONNECTIONS };
        const obj8 = openUserSettings;
        obj8.openUserSettings(obj5);
      } else {
        const obj10 = AdAnalyticsInterfaceExperiment;
        if (obj10.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj6 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId };
          const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction(obj6);
        } else {
          const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent: dependencyMap };
          closure_4(obj);
        }
        const obj9 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj9);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj4);
};
