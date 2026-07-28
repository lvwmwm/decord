// Module ID: 11303
// Function ID: 87678
// Name: CommandListSortActionSheet
// Dependencies: [31, 11288, 33, 1212, 5221, 5220, 11304, 689, 7632, 7631, 2]
// Exports: default

// Module 11303 (CommandListSortActionSheet)
import "result";
import { CommandListSortOrder } from "CommandListSortOrder";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  let importDefault;
  let require;
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  let obj = { startExpanded: true };
  obj = {};
  obj = { size: "sm", color: importDefault(689).colors.TEXT_DEFAULT };
  obj.leading = jsx(require(11304) /* ArrowsUpDownIcon */.ArrowsUpDownIcon, { size: "sm", color: importDefault(689).colors.TEXT_DEFAULT });
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.yeYaHf);
  obj.header = jsx(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { size: "sm", color: importDefault(689).colors.TEXT_DEFAULT });
  const obj1 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    }
  };
  const obj2 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl2.string(require(1212) /* getSystemLocale */.t.SzxiqK);
  obj2.value = CommandListSortOrder.POPULAR;
  const items = [obj2, ];
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl3.string(require(1212) /* getSystemLocale */.t.m8xsti);
  obj3.value = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj3;
  obj1.children = items.map((label) => {
    const value = label.value;
    return outer1_4(outer1_0(outer1_2[9]).TableRadioRow, { label: label.label, value }, value);
  });
  obj.children = jsx(require(7632) /* context */.TableRadioGroup, {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    }
  });
  return jsx(require(5221) /* Background */.BottomSheet, { size: "sm", color: importDefault(689).colors.TEXT_DEFAULT });
};
