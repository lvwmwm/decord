// Module ID: 16740
// Function ID: 16741
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 4255, 712, 5323, 5322, 7767, 4223, 7766, 2]
// Exports: default

// Module 16740 (InviteSelectActionSheet)
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
  obj[1] = jsx(require(5322) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title });
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
  obj[2] = jsx(require(7767) /* context */.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
  return jsx(require(5323) /* Background */.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
};
