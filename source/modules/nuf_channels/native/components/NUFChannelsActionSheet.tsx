// Module ID: 13044
// Function ID: 13045
// Name: NUFChannelsActionSheet
// Dependencies: [19, 1388, 21, 4271, 5397, 13045, 13046, 1236, 2]
// Exports: default

// Module 13044 (NUFChannelsActionSheet)
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[3]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(outer1_4.UNKNOWN);
    }
  }, items);
  let obj = {
    onDismiss() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(outer1_4.UNKNOWN);
      }
      return tmpResult;
    },
    startExpanded: true,
    children: null
  };
  obj = { illustration: null, title: null, description: null, CTALabel: null, onCTAPress: null };
  obj[0] = jsx(importDefault(13046), {});
  const intl = markAsDismissed(1236).intl;
  obj[1] = intl.string(markAsDismissed(1236).t.Ay9424);
  const intl2 = markAsDismissed(1236).intl;
  obj[2] = intl2.string(markAsDismissed(1236).t.mufH2P);
  const intl3 = markAsDismissed(1236).intl;
  obj[3] = intl3.string(markAsDismissed(1236).t.BddRzS);
  obj[4] = callback;
  obj[2] = jsx(importDefault(13045), { illustration: null, title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(5397).BottomSheet, { illustration: null, title: null, description: null, CTALabel: null, onCTAPress: null });
};
