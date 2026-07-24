// Module ID: 12748
// Function ID: 99272
// Name: NUFChannelsActionSheet
// Dependencies: [31, 1345, 33, 4098, 5187, 12749, 12750, 1212, 2]
// Exports: default

// Module 12748 (NUFChannelsActionSheet)
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[3]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(outer1_4.UNKNOWN);
    }
  }, items);
  let obj = {
    onDismiss() {
      let tmp;
      if (null != markAsDismissed) {
        tmp = markAsDismissed(outer1_4.UNKNOWN);
      }
      return tmp;
    },
    startExpanded: true
  };
  obj = { illustration: jsx(importDefault(12750), {}) };
  const intl = markAsDismissed(1212).intl;
  obj.title = intl.string(markAsDismissed(1212).t.Ay9424);
  const intl2 = markAsDismissed(1212).intl;
  obj.description = intl2.string(markAsDismissed(1212).t.mufH2P);
  const intl3 = markAsDismissed(1212).intl;
  obj.CTALabel = intl3.string(markAsDismissed(1212).t.BddRzS);
  obj.onCTAPress = callback;
  obj.children = jsx(importDefault(12749), { illustration: jsx(importDefault(12750), {}) });
  return jsx(markAsDismissed(5187).BottomSheet, { illustration: jsx(importDefault(12750), {}) });
};
