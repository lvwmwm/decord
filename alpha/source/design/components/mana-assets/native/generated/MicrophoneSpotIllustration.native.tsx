// Module ID: 10873
// Function ID: 10874
// Name: MicrophoneSpotIllustration
// Dependencies: [19, 21, 10874, 10875, 10876, 7357, 5600, 2]
// Exports: MicrophoneSpotIllustration

// Module 10873 (MicrophoneSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef10874 from "module_10874" /* 10874 */;
import _modDef10875 from "module_10875" /* 10875 */;
import _modDef10876 from "module_10876" /* 10876 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10874 };
obj[1] = obj2;
let obj3 = { uri: _modDef10875 };
obj[2] = obj3;
obj[3] = { uri: _modDef10876 };
({ uri: _modDef10876 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MicrophoneSpotIllustration.native.tsx");

export function MicrophoneSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let obj3;
  let resizeMode;
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = react.useMemo(() => {
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
