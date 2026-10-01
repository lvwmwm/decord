// Module ID: 8180
// Function ID: 8181
// Name: GameProfileHorizontalScrollView
// Dependencies: [19, 17, 21, 6073, 2]

// Module 8180 (GameProfileHorizontalScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(arg0);
  return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default forwardRefResult;
