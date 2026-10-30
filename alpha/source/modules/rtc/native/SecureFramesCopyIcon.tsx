// Module ID: 9263
// Function ID: 9264
// Name: SecureFramesCopyIcon
// Dependencies: [19, 21, 5706, 7352, 8020, 5726, 1114, 2]
// Exports: default

// Module 9263 (SecureFramesCopyIcon)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = react.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = react.useCallback(() => {
    const obj = ToastUtils;
    const result = obj.presentCopiedToClipboard();
    const obj2 = ClipboardUtils;
    obj2.copy(memo);
  }, items1);
  const IconButton = chunks(memo[4]).IconButton;
  const intl = chunks(memo[6]).intl;
  return <IconButton icon={null} variant="secondary" onPress={callback} accessibilityLabel={intl.string(chunks(memo[6]).t.e7GWjQ)} size="sm" />;
};
