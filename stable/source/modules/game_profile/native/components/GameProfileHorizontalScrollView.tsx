// Module ID: 8845
// Function ID: 8846
// Name: GameProfileHorizontalScrollView
// Dependencies: [19, 17, 21, 6756, 2]

// Module 8845 (GameProfileHorizontalScrollView)
import LegacyBaseButton from "LegacyBaseButton" /* 6756 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default noop.forwardRef((arg0, ref) => {
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { ref };
  const merged = Object.assign(arg0);
  obj3.horizontal = true;
  obj3.nestedScrollEnabled = true;
  obj2.children = <ScrollView ref={arg1} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
});
