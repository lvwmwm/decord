// Module ID: 11649
// Function ID: 90364
// Name: useNativeProvisionalAccountExplainerText
// Dependencies: []
// Exports: ChatProvisionalAccountExplainerCard, UserProfileProvisionalAccountExplainerCard

// Module 11649 (useNativeProvisionalAccountExplainerText)
function useNativeProvisionalAccountExplainerText(userId) {
  const iconSize = userId.iconSize;
  const arg1 = iconSize;
  const textVariant = userId.textVariant;
  const importDefault = textVariant;
  const items = [iconSize, textVariant];
  const renderApplicationName = React.useCallback((application) => callback(textVariant(closure_2[5]), { application, textVariant, iconSize }, application.id), items);
  return arg1(dependencyMap[6]).useProvisionalAccountExplanationText({ userId: userId.userId, renderApplicationName });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED, gap: importDefault(dependencyMap[4]).space.PX_8 };
  obj.chatContainer = obj;
  obj = { gap: importDefault(dependencyMap[4]).space.PX_4 };
  obj.header = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = function ChatProvisionalAccountExplainerCard(arg0) {
  let iconSize;
  let style;
  let userId;
  ({ style, userId, iconSize } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.chatContainer, style];
  obj = { style: tmp.header };
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.Iyka0U);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj), callback(arg1(dependencyMap[10]).CircleErrorIcon, {})];
  obj.children = items1;
  const items2 = [callback2(View, obj), callback(arg1(dependencyMap[8]).Text, { children: useNativeProvisionalAccountExplainerText({ userId, iconSize, textVariant: "text-sm/semibold" }) })];
  obj.children = items2;
  return callback2(arg1(dependencyMap[7]).Card, obj);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(userId) {
  let obj = { userId: userId.userId, iconSize: userId.iconSize, textVariant: "text-md/semibold" };
  obj = { style: userId.style };
  const tmp = useNativeProvisionalAccountExplainerText(obj);
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.Iyka0U);
  obj.titleIcon = callback(arg1(dependencyMap[10]).CircleErrorIcon, {});
  obj.children = callback(arg1(dependencyMap[8]).Text, { children: tmp });
  return callback(importDefault(dependencyMap[11]), obj);
};
