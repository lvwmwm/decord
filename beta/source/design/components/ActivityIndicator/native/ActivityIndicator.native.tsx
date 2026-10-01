// Module ID: 5889
// Function ID: 5890
// Name: ActivityIndicator/ActivityIndicator
// Dependencies: [17, 21, 4531, 576, 2]
// Exports: ActivityIndicator

// Module 5889 (ActivityIndicator/ActivityIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken2 from "useToken" /* 4531 */;
import size from "module_2" /* 2 */;

const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");
const ActivityIndicator_export = function ActivityIndicator(size) {
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
};

export { ActivityIndicator_export as ActivityIndicator };
