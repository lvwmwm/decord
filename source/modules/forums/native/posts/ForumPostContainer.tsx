// Module ID: 11135
// Function ID: 86640
// Name: useForumPostContainerPressedIn
// Dependencies: []
// Exports: ForumPostDisabledContainer, ForumPostPressableContainer, useForumPostContainerPressedIn

// Module 11135 (useForumPostContainerPressedIn)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = { childContainer: {}, card: { marginBottom: 12 } };
obj = { marginBottom: 12, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[4]).radii.md, overflow: "hidden" };
obj.disabledContainer = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const context = importAllResult.createContext(arg1(dependencyMap[5]).createFakeSharedValue(false));
const obj5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export const useForumPostContainerPressedIn = function useForumPostContainerPressedIn() {
  return importAllResult.useContext(closure_7);
};
export const ForumPostPressableContainer = function ForumPostPressableContainer(arg0) {
  let children;
  let onLongTapPost;
  let onPressIn;
  let onPressOut;
  let onTapPost;
  let style;
  let threadId;
  ({ threadId, children, style } = arg0);
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(false);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const memo = importAllResult.useMemo(() => ({
    onPressIn() {
      return store.set(true);
    },
    onPressOut() {
      return store.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  ({ onTapPost, onLongTapPost } = importDefault(dependencyMap[7])({ threadId }));
  let str = "secondary";
  if (importDefault(dependencyMap[8])("ForumPostContainer")) {
    str = "surface-high";
  }
  obj = { style: tmp.card, children: jsx(arg1(dependencyMap[9]).Card, obj) };
  obj = { style: items1 };
  const items1 = [tmp.childContainer, style];
  obj.variant = str;
  obj.accessibilityRole = "button";
  obj.onPress = onTapPost;
  obj.onPressIn = onPressIn;
  obj.onPressOut = onPressOut;
  obj.onLongPress = onLongTapPost;
  obj.unstable_pressDelay = 130;
  obj.children = children;
  const tmp4 = importDefault(dependencyMap[7])({ threadId });
  return <redux.Provider value={sharedValue}><View {...obj} /></redux.Provider>;
};
export const ForumPostDisabledContainer = function ForumPostDisabledContainer(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = {};
  const items = [callback().disabledContainer, style];
  obj.style = items;
  obj.pointerEvents = "none";
  obj.children = children;
  return <View {...obj} />;
};
