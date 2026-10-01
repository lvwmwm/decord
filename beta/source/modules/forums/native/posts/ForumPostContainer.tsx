// Module ID: 11502
// Function ID: 11503
// Name: ForumPostContainer
// Dependencies: [19, 17, 21, 4836, 576, 6495, 4566, 9680, 5919, 2]
// Exports: ForumPostDisabledContainer, ForumPostPressableContainer, useForumPostContainerPressedIn

// Module 11502 (ForumPostContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 9680 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import ReanimatedHelperTypes from "ReanimatedHelperTypes" /* 6495 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 }, disabledContainer: obj2 };
obj2 = { marginBottom: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const createContext = react.createContext;
const redux = createContext(ReanimatedHelperTypes.createFakeSharedValue(false));
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export const useForumPostContainerPressedIn = function useForumPostContainerPressedIn() {
  return react.useContext(redux);
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
  const tmp = closure_6();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const memo = react.useMemo(() => ({
    onPressIn() {
      return sharedValue.set(true);
    },
    onPressOut() {
      return sharedValue.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
  const items1 = [tmp.childContainer, style];
  useNativeForumPostHandlersDefault({ threadId });
  return <redux.Provider value={sharedValue}><View style={tmp.card}>{null}</View></redux.Provider>;
};
export const ForumPostDisabledContainer = function ForumPostDisabledContainer(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_6().disabledContainer, style];
  return <View style={items} pointerEvents="none">{children}</View>;
};
