// Module ID: 9613
// Function ID: 74894
// Name: StickerOptionsActionSheet
// Dependencies: []
// Exports: default

// Module 9613 (StickerOptionsActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const arg1 = stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(closure_2[2]).copy(stickerUrl);
    const obj = stickerUrl(closure_2[2]);
    const result = stickerUrl(closure_2[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(closure_2[3]);
    callback(closure_2[4]).hideActionSheet();
  }, items);
  let obj = {};
  obj = { hasIcons: true };
  obj = { icon: jsx(arg1(dependencyMap[8]).LinkIcon, {}) };
  const intl = arg1(dependencyMap[9]).intl;
  obj.label = intl.string(arg1(dependencyMap[9]).t.B1ubHx);
  obj.onPress = callback;
  obj.children = jsx(arg1(dependencyMap[7]).TableRow, obj);
  obj.children = jsx(arg1(dependencyMap[6]).TableRowGroup, obj);
  return jsx(arg1(dependencyMap[5]).ActionSheet, obj);
};
