// Module ID: 11175
// Function ID: 86959
// Name: useForumPostContainerPressedIn
// Dependencies: [31, 27, 33, 4130, 689, 7679, 3991, 10368, 1324, 5167, 2]
// Exports: ForumPostDisabledContainer, ForumPostPressableContainer, useForumPostContainerPressedIn

// Module 11175 (useForumPostContainerPressedIn)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createFakeSharedValue from "createFakeSharedValue";

const require = arg1;
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 } };
obj = { marginBottom: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden" };
obj.disabledContainer = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const context = importAllResult.createContext(createFakeSharedValue.createFakeSharedValue(false));
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

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
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const memo = importAllResult.useMemo(() => ({
    onPressIn() {
      return outer1_0.set(true);
    },
    onPressOut() {
      return outer1_0.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  ({ onTapPost, onLongTapPost } = importDefault(10368)({ threadId }));
  let str = "secondary";
  if (importDefault(1324)("ForumPostContainer")) {
    str = "surface-high";
  }
  obj = { style: tmp.card, children: jsx(sharedValue(5167).Card, obj) };
  obj = { style: items1 };
  items1 = [tmp.childContainer, style];
  obj.variant = str;
  obj.accessibilityRole = "button";
  obj.onPress = onTapPost;
  obj.onPressIn = onPressIn;
  obj.onPressOut = onPressOut;
  obj.onLongPress = onLongTapPost;
  obj.unstable_pressDelay = 130;
  obj.children = children;
  const tmp4 = importDefault(10368)({ threadId });
  return <redux.Provider value={sharedValue}><View style={items1} /></redux.Provider>;
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
  return <View />;
};
