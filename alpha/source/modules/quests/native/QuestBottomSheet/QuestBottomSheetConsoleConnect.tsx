// Module ID: 16506
// Function ID: 16507
// Name: QuestBottomSheetConsoleConnect
// Dependencies: [109, 19, 17, 1087, 21, 587, 4971, 9570, 9605, 9607, 5210, 7490, 16466, 2002, 9573, 9576, 6717, 7801, 6713, 9609, 558, 576, 6903, 1128, 6914, 6987, 9485, 9292, 6905, 2]
// Exports: default

// Module 16506 (QuestBottomSheetConsoleConnect)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import QuestTypes from "QuestTypes" /* 6713 */;
import AdCreativeType from "AdCreativeType" /* 6717 */;
import TableRow3 from "TableRow" /* 6903 */;
import TableRowGroup2 from "TableRowGroup" /* 6987 */;
import openUserSettings from "openUserSettings" /* 7490 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7801 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9292 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9485 */;
import captureAdUserAction3 from "captureAdUserAction" /* 9573 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9576 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9607 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9609 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1087 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let Fragment;
let jsxs;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["onPress"];
const View = react_native.View;
({ PlatformTypes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs, Fragment } = Fragment);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
let obj = { platformButtonsContainer: obj2, platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } };
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function NonInlineConsoleConnection(arg0) {
  let consoles;
  let onConsoleSelect;
  let tmp5;
  let obj = onConsoleSelect(576);
  const cResult = obj.c(7);
  const tmp = onConsoleSelect;
  ({ consoles, onConsoleSelect } = arg0);
  if (cResult[0] === consoles) {
    let tmp4;
    let tmp7;
    if (cResult[1] === onConsoleSelect) {
      tmp4 = cResult[2];
    }
    if (cResult[5] !== tmp4) {
      const obj2 = { hasIcons: true, children: tmp4 };
      const tmp9 = closure_8(tmp(6987).TableRowGroup, obj2);
      cResult[5] = tmp4;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[6];
    }
    return tmp7;
  }
  if (cResult[3] !== onConsoleSelect) {
    const fn = function o(type) {
      const obj = { onPress: onConsoleSelect };
      const merged = Object.assign(type);
      return metroImportAll(closure_10, obj, type.type);
    };
    cResult[3] = onConsoleSelect;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = consoles.map(tmp5);
  cResult[0] = consoles;
  cResult[1] = onConsoleSelect;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : (function NonInlineConsoleConnection(arg0) {
  let consoles;
  let onPress;
  ({ consoles, onConsoleSelect: require } = arg0);
  let obj = {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = { onPress: require };
      const merged = Object.assign(type);
      return metroImportAll(closure_10, obj, type.type);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_8(TableRowGroup, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConsoleRow(onPress) {
  const obj = react2;
  const cResult = obj.c(23);
  if (cResult[0] !== onPress) {
    onPress = onPress.onPress;
    importDefault = onPress;
    const tmp8 = _objectWithoutProperties(onPress, closure_3);
    let closure_0 = tmp8;
    cResult[0] = onPress;
    cResult[1] = tmp8;
    cResult[2] = onPress;
  } else {
    closure_0 = cResult[1];
    importDefault = cResult[2];
  }
  const type = tmp4.type;
  if (metroRequire.PLAYSTATION === type) {
    let tmp26;
    let tmp25;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = metroImportAll(PlaystationNeutralIcon.PlaystationNeutralIcon, {});
      const intl3 = tmp(1128).intl;
      const stringResult = intl3.string(intl5.t.JafL6p);
      cResult[3] = tmp28;
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
      cResult[4] = stringResult;
      tmp26 = stringResult;
      tmp25 = tmp28;
    } else {
      tmp25 = cResult[3];
      tmp26 = cResult[4];
    }
    if (cResult[5] !== tmp4.account) {
      let stringResult1;
      if (null != tmp4.account) {
        const intl4 = tmp(1128).intl;
        stringResult1 = intl4.string(tmp(1128).t["u30/ut"]);
      }
      cResult[5] = tmp4.account;
      cResult[6] = stringResult1;
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
    }
    if (cResult[7] === tmp4) {
      let tmp33;
      if (cResult[8] === tmp5) {
        tmp33 = cResult[9];
      }
      if (cResult[10] === tmp30) {
        let tmp34;
        if (cResult[11] === tmp33) {
          tmp34 = cResult[12];
        }
        return tmp34;
      }
      const obj2 = { arrow: true, icon: tmp25, label: tmp26, subLabel: tmp30, onPress: null };
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
      const tmp36 = metroImportAll(TableRow3.TableRow, obj2);
      cResult[10] = tmp30;
      cResult[11] = tmp33;
      cResult[12] = tmp36;
      tmp34 = tmp36;
    }
    class T {
      constructor() {
        return closure_1(closure_0);
      }
    }
    cResult[7] = tmp4;
    cResult[8] = tmp5;
    cResult[9] = T;
    tmp33 = T;
  } else if (tmp9.XBOX === type) {
    let tmp13;
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = metroImportAll(XboxNeutralIcon.XboxNeutralIcon, {});
      const intl = tmp(1128).intl;
      const stringResult2 = intl.string(intl5.t.Nfvo72);
      cResult[13] = tmp15;
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
      cResult[14] = stringResult2;
      tmp13 = stringResult2;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[13];
      tmp13 = cResult[14];
    }
    if (cResult[15] !== tmp4.account) {
      let stringResult3;
      if (null != tmp4.account) {
        const intl2 = tmp(1128).intl;
        stringResult3 = intl2.string(tmp(1128).t["u30/ut"]);
      }
      cResult[15] = tmp4.account;
      cResult[16] = stringResult3;
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
    }
    if (cResult[17] === tmp4) {
      let tmp20;
      if (cResult[18] === tmp5) {
        tmp20 = cResult[19];
      }
      if (cResult[20] === tmp17) {
        let tmp21;
        if (cResult[21] === tmp20) {
          tmp21 = cResult[22];
        }
        return tmp21;
      }
      const obj3 = { arrow: true, icon: tmp12, label: tmp13, subLabel: tmp17, onPress: null };
      class T {
        constructor() {
          return closure_1(closure_0);
        }
      }
      const tmp23 = metroImportAll(TableRow3.TableRow, obj3);
      cResult[20] = tmp17;
      cResult[21] = tmp20;
      cResult[22] = tmp23;
      tmp21 = tmp23;
    }
    class T {
      constructor() {
        return closure_1(closure_0);
      }
    }
    cResult[17] = tmp4;
    cResult[18] = tmp5;
    cResult[19] = A;
    tmp20 = A;
  } else {
    return null;
  }
}) : (function ConsoleRow(onPress) {
  let intl;
  let intl3;
  let stringResult;
  let stringResult1;
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (metroRequire.PLAYSTATION === type) {
    const obj2 = {
      arrow: true,
      icon: metroImportAll(PlaystationNeutralIcon.PlaystationNeutralIcon, {}),
      label: intl3.string(intl5.t.JafL6p),
      subLabel: stringResult,
      onPress() {
          return onPress(merged);
        }
    };
    const TableRow2 = TableRow3.TableRow;
    intl3 = intl5.intl;
    stringResult = undefined;
    const tmp7 = metroImportAll;
    if (null != merged.account) {
      const intl4 = tmp8(1128).intl;
      stringResult = intl4.string(tmp8(1128).t["u30/ut"]);
    }
    return tmp7(TableRow2, obj2);
  } else if (tmp2.XBOX === type) {
    const obj = {
      arrow: true,
      icon: metroImportAll(XboxNeutralIcon.XboxNeutralIcon, {}),
      label: intl.string(intl5.t.Nfvo72),
      subLabel: stringResult1,
      onPress() {
          return onPress(merged);
        }
    };
    const TableRow = TableRow3.TableRow;
    intl = intl5.intl;
    stringResult1 = undefined;
    const tmp3 = metroImportAll;
    if (null != merged.account) {
      const intl2 = tmp4(1128).intl;
      stringResult1 = intl2.string(tmp4(1128).t["u30/ut"]);
    }
    return tmp3(TableRow, obj);
  } else {
    return null;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  let initialStep;
  let sourceQuestContent;
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { questId: quest.id, initialStep: importDefault, sourceQuestContent: dependencyMap };
    obj.openLazy(asyncRequire(16466, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  let obj = quest(9570);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj2 = quest(9605);
  let closure_4 = obj2.useGetQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj3 = {
    consoles: openQuestBottomSheet.useMemo(() => {
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
        const obj4 = { screen: metroImportDefault.CONNECTIONS };
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
  return closure_8(closure_9, obj3);
};
