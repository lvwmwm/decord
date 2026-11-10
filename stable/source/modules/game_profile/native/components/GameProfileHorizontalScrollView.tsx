// Module ID: 9386
// Function ID: 9387
// Name: GameProfileHorizontalScrollView
// Dependencies: [19, 17, 21, 5303, 2]
// Exports: default

// Module 9386 (GameProfileHorizontalScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default function GameProfileHorizontalScrollView(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
};
