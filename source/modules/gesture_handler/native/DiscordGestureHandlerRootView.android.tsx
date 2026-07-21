// Module ID: 13356
// Function ID: 101612
// Name: DiscordGestureHandlerRootView
// Dependencies: []
// Exports: default

// Module 13356 (DiscordGestureHandlerRootView)
importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(arg1(dependencyMap[4]).GestureHandlerRootView, { style, children }) };
  return jsx(importDefault(dependencyMap[3]), obj);
};
