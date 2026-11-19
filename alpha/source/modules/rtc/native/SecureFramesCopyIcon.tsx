// Module ID: 9613
// Function ID: 9614
// Name: SecureFramesCopyIcon
// Dependencies: [19, 21, 5473, 7426, 7472, 5492, 1113, 2]
// Exports: default

// Module 9613 (SecureFramesCopyIcon)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import ClipboardUtils from "ClipboardUtils" /* 7426 */;
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
