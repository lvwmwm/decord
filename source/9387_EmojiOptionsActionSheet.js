// Module ID: 9387
// Function ID: 73180
// Name: EmojiOptionsActionSheet
// Dependencies: []
// Exports: default

// Module 9387 (EmojiOptionsActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const arg1 = emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(closure_2[2]).copy(emojiSrc);
    const obj = emojiSrc(closure_2[2]);
    const result = emojiSrc(closure_2[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(closure_2[3]);
    callback(closure_2[4]).hideActionSheet();
  }, items);
  let obj = {};
  obj = { hasIcons: true };
  obj = { icon: jsx(arg1(dependencyMap[8]).LinkIcon, {}) };
  const intl = arg1(dependencyMap[9]).intl;
  obj.label = intl.string(arg1(dependencyMap[9]).t.cIoudn);
  obj.onPress = callback;
  obj.children = jsx(arg1(dependencyMap[7]).TableRow, obj);
  obj.children = jsx(arg1(dependencyMap[6]).TableRowGroup, obj);
  return jsx(arg1(dependencyMap[5]).ActionSheet, obj);
};
