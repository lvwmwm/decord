// Module ID: 12706
// Function ID: 12707
// Name: CommandListSortActionSheet
// Dependencies: [19, 12690, 21, 1113, 5398, 7460, 12707, 575, 7202, 7205, 2]
// Exports: default

// Module 12706 (CommandListSortActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5398 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7202 */;
import TableRadioRow from "TableRadioRow" /* 7205 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7460 */;
import AppLauncherConstants from "AppLauncherConstants" /* 12690 */;
import ArrowsUpDownIcon2 from "ArrowsUpDownIcon" /* 12707 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  let intl;
  let intl2;
  let intl3;
  let items;
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  sortOrder = sortOrder.sortOrder;
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  ({ leading: null, title: intl.string(intl4.t.yeYaHf) });
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  ({ size: "sm", color: nativeDefault.colors.TEXT_DEFAULT });
  const ArrowsUpDownIcon = ArrowsUpDownIcon2.ArrowsUpDownIcon;
  intl = intl4.intl;
  ({
    hasIcons: false,
    value: sortOrder,
    onChange: function handleSortOptionPress(arg0) {
      importDefault(arg0);
      require();
    },
    children: items.map((label) => {
      const value = label.value;
      return jsx(TableRadioRow.TableRadioRow, { label: label.label, value }, value);
    })
  });
  const obj5 = { label: intl2.string(intl4.t.SzxiqK), value: CommandListSortOrder.POPULAR };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl2 = intl4.intl;
  items = [obj5, ];
  const obj6 = { label: intl3.string(intl4.t.m8xsti), value: CommandListSortOrder.ALPHABETICAL };
  intl3 = intl4.intl;
  items[1] = obj6;
  return <BottomSheet startExpanded header={null}>{null}</BottomSheet>;
};
