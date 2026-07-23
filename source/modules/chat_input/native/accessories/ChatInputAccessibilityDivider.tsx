// Module ID: 11367
// Function ID: 88383
// Name: ChatInputAccessibilityDivider
// Dependencies: [31, 27, 33, 4528, 477, 1212, 2]

// Module 11367 (ChatInputAccessibilityDivider)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

let closure_2;
let closure_3;
const require = arg1;
({ StyleSheet: closure_2, View: closure_3 } = get_ActivityIndicator);
const memoResult = require("result").memo(() => {
  let obj = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  let tmp = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp = null;
    if (!obj2.isAndroid()) {
      obj = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, ];
      obj = { height: 1 };
      items[1] = obj;
      obj.style = items;
      tmp = <closure_3 height={1} />;
    }
    obj2 = require(477) /* set */;
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
