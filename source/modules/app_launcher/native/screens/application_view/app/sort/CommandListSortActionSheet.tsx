// Module ID: 11328
// Function ID: 11329
// Name: CommandListSortActionSheet
// Dependencies: [19, 11313, 21, 1236, 6950, 6949, 11329, 712, 8101, 8100, 2]
// Exports: default

// Module 11328 (CommandListSortActionSheet)
import "noop";
import { CommandListSortOrder } from "CommandListSortOrder";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  let importDefault;
  let require;
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  let obj = { startExpanded: true, header: null, children: null };
  obj = { leading: null, title: null };
  obj = { size: "sm", color: null };
  obj[1] = importDefault(712).colors.TEXT_DEFAULT;
  obj[0] = jsx(require(11329) /* ArrowsUpDownIcon */.ArrowsUpDownIcon, { size: "sm", color: null });
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.yeYaHf);
  obj[1] = jsx(require(6949) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { size: "sm", color: null });
  const obj1 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  };
  const obj2 = { label: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl2.string(require(1236) /* getSystemLocale */.t.SzxiqK);
  obj2[1] = CommandListSortOrder.POPULAR;
  const items = [obj2, ];
  const obj3 = { label: null, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl3.string(require(1236) /* getSystemLocale */.t.m8xsti);
  obj3[1] = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj3;
  obj1[3] = items.map((label) => {
    const value = label.value;
    return callback3(callback(table[9]).TableRadioRow, { label: label.label, value }, value);
  });
  obj[2] = jsx(require(8101) /* context */.TableRadioGroup, {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  });
  return jsx(require(6950) /* Background */.BottomSheet, { size: "sm", color: null });
};
