// Module ID: 9181
// Function ID: 9182
// Name: SecureFramesCopyIcon
// Dependencies: [19, 21, 4527, 6610, 7363, 4779, 1115, 2]
// Exports: default

// Module 9181 (SecureFramesCopyIcon)
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = noop.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = noop.useCallback(() => {
    const result = ToastUtils.presentCopiedToClipboard();
    ClipboardUtils.copy(memo);
  }, items1);
  let obj = { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" };
  const intl = chunks(memo[6]).intl;
  obj.accessibilityLabel = intl.string(chunks(memo[6]).t.e7GWjQ);
  return jsx(chunks(memo[4]).IconButton, { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" });
};
