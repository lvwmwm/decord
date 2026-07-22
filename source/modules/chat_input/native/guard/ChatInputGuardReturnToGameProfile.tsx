// Module ID: 11477
// Function ID: 89391
// Dependencies: []

// Module 11477
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.icon = obj;
let closure_5 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let obj = { type: "simple-action" };
  let tmp4;
  const tmp = callback();
  const tmp2 = jsx;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    obj = { style: tmp.icon, source: arg1(dependencyMap[6]).makeSource(pendingGameProfileReturn.gameIconUrl) };
    tmp4 = <Image {...obj} />;
    const obj3 = arg1(dependencyMap[6]);
  }
  obj.icon = tmp4;
  const intl = arg1(dependencyMap[7]).intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj.message = intl.format(arg1(dependencyMap[7]).t.HRHaSF, obj);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.actionLabel = intl2.string(arg1(dependencyMap[7]).t.DjifDP);
  const obj1 = { color: importDefault(dependencyMap[4]).colors.WHITE };
  obj.actionIcon = jsx(arg1(dependencyMap[8]).ArrowSmallLeftIcon, obj1);
  obj.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return tmp2(importDefault(dependencyMap[5]), obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
