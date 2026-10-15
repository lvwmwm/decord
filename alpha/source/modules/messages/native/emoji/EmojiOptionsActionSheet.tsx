// Module ID: 9774
// Function ID: 9775
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 558, 576, 7105, 4864, 5115, 5097, 1126, 7118, 6485, 6400, 2]

// Module 9774 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4864 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ClipboardUtils from "ClipboardUtils" /* 7105 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiOptionsActionSheet(emojiSrc) {
  let tmp10;
  let tmp4;
  let obj = emojiSrc(576);
  const cResult = obj.c(6);
  emojiSrc = emojiSrc.emojiSrc;
  if (cResult[0] !== emojiSrc) {
    const fn = function t() {
      const obj = ClipboardUtils;
      obj.copy(emojiSrc);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    };
    cResult[0] = emojiSrc;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = jsx(emojiSrc(5097).LinkIcon, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(emojiSrc(1126).t.cIoudn);
    cResult[2] = tmp8;
    cResult[3] = stringResult;
  }
  if (cResult[4] !== tmp4) {
    const ActionSheet = tmp(7118).ActionSheet;
    let obj3 = { hasIcons: true, children: null };
    const TableRowGroup = tmp(6485).TableRowGroup;
    const tmp12 = <ActionSheet>{null}</ActionSheet>;
    cResult[4] = tmp4;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function EmojiOptionsActionSheet(emojiSrc) {
  let intl;
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(emojiSrc);
    const obj2 = ToastUtils;
    const result = obj2.presentCopiedToClipboard();
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const ActionSheet = emojiSrc(7118).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(6485).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1126).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6400).TableRow;
  intl = emojiSrc(1126).intl;
  return <ActionSheet>{null}</ActionSheet>;
});
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default tmp2;
