// Module ID: 16877
// Function ID: 16878
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 4303, 712, 5397, 5396, 7985, 4271, 7984, 2]
// Exports: default

// Module 16877 (InviteSelectActionSheet)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { content: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  let options;
  let require;
  let title;
  let value;
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: createCacheKey().content, header: null, children: null };
  obj[1] = jsx(require(5396) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title });
  obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  };
  obj[3] = options.map((value) => callback2(callback(table[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value));
  obj[2] = jsx(require(7985) /* context */.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
  return jsx(require(5397) /* Background */.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
};
