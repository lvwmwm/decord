// Module ID: 18952
// Function ID: 18953
// Name: ConsoleConnectionActionSheet
// Dependencies: [19, 18953, 1072, 21, 5037, 7104, 6937, 1113, 7464, 7426, 7259, 6956, 6599, 9805, 9699, 2]
// Exports: default

// Module 18952 (ConsoleConnectionActionSheet)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import PlatformsDefault from "Platforms" /* 6599 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 6937 */;
import TableRow3 from "TableRow" /* 6956 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 7104 */;
import TableRowGroup2 from "TableRowGroup" /* 7259 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7426 */;
import ActionSheet2 from "ActionSheet" /* 7464 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9699 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9805 */;
import ConsoleConnectionCoachmarkConstants from "ConsoleConnectionCoachmarkConstants" /* 18953 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function connectPlayStation() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = PlayStationLinkModalActionCreatorsDefault;
  obj2.showModal(items, PlatformTypes.PLAYSTATION, { startAtSignIn: true });
}
function connectXbox() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = XboxLinkModalActionCreatorsDefault;
  obj2.showModal(items, { startAtSignIn: true });
}
const CONSOLE_CONNECTION_COACHMARK_ANALYTICS_LOCATION = ConsoleConnectionCoachmarkConstants.CONSOLE_CONNECTION_COACHMARK_ANALYTICS_LOCATION;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let items = [CONSOLE_CONNECTION_COACHMARK_ANALYTICS_LOCATION];
const result = size.fileFinishedImporting("modules/connections/console_coachmark/native/ConsoleConnectionActionSheet.tsx");

export default function ConsoleConnectionActionSheet() {
  let Icon;
  let Icon2;
  let TableRowGroup;
  let intl2;
  let obj2;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  const intl = intl3.intl;
  const stringResult = intl.string(intl3.t.ZCib6v);
  const obj = { header: React3(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), dismissAccessibilityLabel: "" + intl2.string(intl3.t.Xvtztt) + ": " + stringResult, children: hasOwnProperty(TableRowGroup, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  intl2 = intl3.intl;
  obj2 = { hasIcons: true, children: items };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj3 = { label: obj4.get(PlatformTypes.PLAYSTATION).name, icon: React3(Icon, obj5), trailing: React3(TableRow3.TableRow.Arrow, {}), onPress: connectPlayStation };
  const TableRow = TableRow3.TableRow;
  obj4 = PlatformsDefault;
  obj5 = { IconComponent: PlaystationNeutralIcon.PlaystationNeutralIcon };
  Icon = TableRow3.TableRow.Icon;
  items = [React3(TableRow, obj3), ];
  const obj6 = { label: obj7.get(PlatformTypes.XBOX).name, icon: React3(Icon2, obj8), trailing: React3(TableRow3.TableRow.Arrow, {}), onPress: connectXbox };
  const TableRow2 = TableRow3.TableRow;
  obj7 = PlatformsDefault;
  obj8 = { IconComponent: XboxNeutralIcon.XboxNeutralIcon };
  Icon2 = TableRow3.TableRow.Icon;
  items[1] = React3(TableRow2, obj6);
  return React3(ActionSheet, obj);
};
