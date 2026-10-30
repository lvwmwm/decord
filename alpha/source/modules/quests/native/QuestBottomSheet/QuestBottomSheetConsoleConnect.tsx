// Module ID: 17067
// Function ID: 17068
// Name: QuestBottomSheetConsoleConnect
// Dependencies: [19, 17, 1072, 21, 575, 5009, 9661, 9697, 9699, 5253, 7557, 17027, 1995, 9664, 9667, 6782, 7864, 6778, 9700, 7054, 6969, 9567, 1114, 9342, 2]
// Exports: default

// Module 17067 (QuestBottomSheetConsoleConnect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import TableRow3 from "TableRow" /* 6969 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9342 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9567 */;
import captureAdUserAction3 from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9699 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9700 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
      const intl4 = tmp8(1114).intl;
      stringResult = intl4.string(tmp8(1114).t["u30/ut"]);
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
      const intl2 = tmp4(1114).intl;
      stringResult1 = intl2.string(tmp4(1114).t["u30/ut"]);
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
    obj.openLazy(asyncRequire(17027, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  let obj = quest(9661);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj2 = quest(9697);
  let closure_4 = obj2.useGetQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj3 = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      let obj = QuestPlatformUtils;
      const supportedConsolesResult = obj.supportedConsoles(quest);
      return supportedConsolesResult.map((type) => {
        let closure_0 = type;
        const obj = { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
        return obj;
      });
    }, items),
    onConsoleSelect: function handleConsoleSelect(account) {
      if (null != account.account) {
        const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId: closure_4() };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction(obj);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        const obj4 = { screen: hasOwnProperty.CONNECTIONS };
        const obj3 = openUserSettings;
        obj3.openUserSettings(obj4);
      } else {
        const obj5 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId: closure_4() };
        const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction2(obj5);
        const obj6 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj6);
      }
    }
  };
  return closure_6(NonInlineConsoleConnection, obj3);
};
