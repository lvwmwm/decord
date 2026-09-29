// Module ID: 15433
// Function ID: 15434
// Name: QuestBottomSheetConsoleConnect
// Dependencies: [19, 17, 1074, 21, 576, 4788, 11767, 12056, 11770, 11780, 4755, 7656, 15390, 1980, 7997, 7998, 8008, 5700, 7996, 5696, 9373, 5936, 5854, 9195, 1115, 9011, 2]
// Exports: default

// Module 15433 (QuestBottomSheetConsoleConnect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import QuestTypes from "QuestTypes" /* 5696 */;
import AdCreativeType from "AdCreativeType" /* 5700 */;
import TableRow from "TableRow" /* 5854 */;
import TableRowGroup from "TableRowGroup" /* 5936 */;
import openUserSettings from "openUserSettings" /* 7656 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7996 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7997 */;
import captureAdUserAction from "captureAdUserAction" /* 7998 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 8008 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9011 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9195 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9373 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11780 */;
import noop from "module_19" /* 19 */;

require = fn;
function NonInlineConsoleConnection(arg0) {
  ({ consoles, onConsoleSelect: require } = arg0);
  return closure_6(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj.onPress = onPress;
      return timestampProducer(ConsoleRow, obj, type.type);
    })
  });
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    const obj2 = { arrow: true, icon: timestampProducer(PlaystationNeutralIcon.PlaystationNeutralIcon, {}), label: null, subLabel: null, onPress: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = tmp8(1115).intl;
      stringResult = intl4.string(tmp8(1115).t["u30/ut"]);
    }
    obj2.subLabel = stringResult;
    obj2.onPress = function onPress() {
      return onPress(merged);
    };
    return timestampProducer(TableRow.TableRow, obj2);
  } else if (tmp2.XBOX === type) {
    const obj = { arrow: true, icon: timestampProducer(XboxNeutralIcon.XboxNeutralIcon, {}), label: null, subLabel: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = tmp4(1115).intl;
      stringResult1 = intl2.string(tmp4(1115).t["u30/ut"]);
    }
    obj.subLabel = stringResult1;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return timestampProducer(TableRow.TableRow, obj);
  } else {
    return null;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ PlatformTypes: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
const createStyles = fn(4788);
let obj2 = { platformButtonsContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" }, platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15390, dependencyMap.paths), "QuestBottomSheet", { questId: quest.id, initialStep, sourceQuestContent });
  }
  const xboxAndPlaystationAccounts = quest(11767).useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj = quest(11767);
  closure_4 = quest(12056).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(12056);
  const impressionId = quest(11770).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj3 = quest(11770);
  return openQuestBottomSheet(NonInlineConsoleConnection, {
    consoles: xboxAndPlaystationAccounts.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).map((type) => {
      closure_0 = type;
      return { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
    }), items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId };
          captureAdUserAction.captureAdUserAction(obj3);
        } else {
          const obj4 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent };
          closure_4(obj4);
        }
        obj5 = AdAnalyticsInterfaceExperiment;
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj6 = { screen: constants2.CONNECTIONS };
        openUserSettings.openUserSettings(obj6);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj8 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId };
          captureAdUserAction.captureAdUserAction(obj8);
        } else {
          const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent };
          closure_4(obj);
        }
        const obj11 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj11);
      }
    }
  });
};
