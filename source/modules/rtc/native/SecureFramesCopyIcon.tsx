// Module ID: 8953
// Function ID: 70552
// Name: SecureFramesCopyIcon
// Dependencies: [31, 33, 3830, 5490, 7533, 4078, 1212, 2]
// Exports: default

// Module 8953 (SecureFramesCopyIcon)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("presentAddedFriendToast").fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = React.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = React.useCallback(() => {
    const result = chunks(memo[2]).presentCopiedToClipboard();
    const obj = chunks(memo[2]);
    chunks(memo[3]).copy(memo);
  }, items1);
  let obj = { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback };
  const intl = chunks(memo[6]).intl;
  obj.accessibilityLabel = intl.string(chunks(memo[6]).t.e7GWjQ);
  obj.size = "sm";
  return jsx(chunks(memo[4]).IconButton, { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback });
};
