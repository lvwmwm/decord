// Module ID: 7418
// Function ID: 7419
// Name: ActivityIndicator/ActivityIndicator
// Dependencies: [17, 21, 5902, 575, 2]
// Exports: ActivityIndicator

// Module 7418 (ActivityIndicator/ActivityIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken2 from "useToken" /* 5902 */;
import size from "module_2" /* 2 */;

const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export function ActivityIndicator(size) {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(size, Object.assign({ size: 0, animating: 0 }));
  const useToken = useToken2.useToken;
  let color = merged.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  const merged1 = Object.assign(merged);
  return <ActivityIndicator size={str} animating={flag} color={color} />;
}
