// Module ID: 12535
// Function ID: 12536
// Name: MediaModalSpoilerOverlay
// Dependencies: [32, 19, 17, 21, 4836, 576, 1364, 4531, 12520, 4566, 5269, 5395, 4832, 1115, 2]

// Module 12535 (MediaModalSpoilerOverlay)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5395 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12520 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let PlatformUtils;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unsafe_rawColors;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: obj2, spoilerOverlayBackground: obj3 };
obj2 = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
unsafe_rawColors = nativeDefault.unsafe_rawColors;
let closure_8 = createStyles(obj);
const memoResult = react.memo(function MediaModalSpoilerOverlay(source) {
  let index;
  let intl2;
  let items;
  let items1;
  let str2;
  let style;
  let tmp11Result;
  source = source.source;
  ({ style, index } = source);
  const tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  let tmp9Result2 = null;
  const obj2 = useMediaItemSpoilerState;
  const tmp6 = _slicedToArray(obj2.useMediaItemSpoilerState(index), 2);
  if (tmp6[0]) {
    let str;
    const obj3 = { style: items, children: items1 };
    items = [style, absoluteFill.absoluteFill, tmp7];
    const View = tmp4(4566).View;
    const tmp10 = absoluteFill;
    const tmp4Result = VisualEffectViewDefault;
    if (source.obscure) {
      str = "dark";
    } else {
      str = "light";
      PlatformUtils;
    }
    const obj4 = { blurTheme: str, android_fallbackColor: token, style: tmp10.absoluteFill };
    items1 = [metroRequire(tmp4Result, obj4), ];
    const obj6 = { style: null, children: null };
    const obj5 = { style: tmp.spoilerOverlayContainer, children: tmp11Result };
    if (source.obscure) {
      obj6.style = tmp.obscureContentContainer;
      const items2 = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: intl2.string(intl3.t.SpxcUR) };
      const Text2 = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items2[1] = metroRequire(Text2, obj7);
      obj6.children = items2;
      tmp11Result = tmp9(tmp13, obj6);
    } else {
      obj6.style = tmp.spoilerOverlayBackground;
      const obj8 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: str2.toUpperCase() };
      const Text = tmp2(4832).Text;
      const intl = tmp2(1115).intl;
      str2 = intl.string(intl3.t["F+x38C"]);
      obj6.children = metroRequire(Text, obj8);
      tmp11Result = tmp11(tmp13, obj6);
    }
    items1[1] = metroRequire(hasOwnProperty, obj5);
    tmp9Result2 = tmp9(View, obj3);
  }
  return tmp9Result2;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default memoResult;
