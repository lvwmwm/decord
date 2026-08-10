// Module ID: 14361
// Function ID: 14362
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 4271, 14360, 7733, 1236, 4714, 2]
// Exports: default

// Module 14361 (QuestAccessSuspendedBottomSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    callback2(4271).hideActionSheet(callback(14360).ACTION_SHEET_KEY);
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WfwodX);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
  obj[4] = callback;
  obj[2] = jsx(require(4714) /* Button */.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(require(7733) /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
