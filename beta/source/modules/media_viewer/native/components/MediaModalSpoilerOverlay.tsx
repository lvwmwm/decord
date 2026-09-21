// Module ID: 13272
// Function ID: 13273
// Name: MediaModalSpoilerOverlay
// Dependencies: [32, 19, 17, 21, 4756, 576, 1364, 4457, 13257, 4492, 5174, 5299, 4752, 1115, 2]

// Module 13272 (MediaModalSpoilerOverlay)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 13257 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" }, spoilerOverlayBackground: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
let PlatformUtils = fn(1364);
PlatformUtils = PlatformUtils.isAndroid();
const unsafe_rawColors = nativeDefault.unsafe_rawColors;
obj4.backgroundColor = PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj.spoilerOverlayBackground = obj4;
let closure_8 = createStyles.createStyles(obj);
let obj3 = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default noop.memo(function MediaModalSpoilerOverlay(source) {
  source = source.source;
  ({ style, index } = source);
  let items2 = closure_8();
  let stringResult = dependencyMap;
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  if (!tmp5[0]) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    const items = [style, absoluteFill.absoluteFill, tmp6];
    obj3.style = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      str = "light";
      const tmpResult = tmp(1364);
    }
    const obj4 = { blurTheme: str, android_fallbackColor: token, style: absoluteFill.absoluteFill };
    const items1 = [timestampProducer(tmp3(5174), obj4), ];
    let obj5 = { style: items2.spoilerOverlayContainer, children: null };
    const obj6 = { style: null, children: null };
    if (source.obscure) {
      obj6.style = items2.obscureContentContainer;
      items2 = [tmp9(tmp(5299).ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.SpxcUR);
      obj7.children = stringResult;
      items2[1] = tmp9(tmp(4752).Text, obj7);
      obj6.children = items2;
      let tmp9Result = tmp7(tmp11, obj6);
    } else {
      obj6.style = items2.spoilerOverlayBackground;
      const obj8 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl = tmp(1115).intl;
      obj8.children = intl.string(tmp(1115).t["F+x38C"]).toUpperCase();
      obj6.children = tmp9(tmp(4752).Text, obj8);
      tmp9Result = tmp9(tmp11, obj6);
      const str2 = intl.string(tmp(1115).t["F+x38C"]);
    }
    obj5.children = tmp9Result;
    obj5 = tmp9(tmp11, obj5);
    items1[1] = obj5;
    obj3.children = items1;
    React5(tmp3(4492).View, obj3);
    const tmp3Result = tmp3(5174);
  }
});
