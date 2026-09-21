// Module ID: 13275
// Function ID: 13276
// Name: MediaModalSpoilerOverlay
// Dependencies: [32, 19, 17, 21, 4758, 580, 1368, 558, 568, 4462, 13260, 5176, 5301, 4754, 1119, 4497, 2]

// Module 13275 (MediaModalSpoilerOverlay)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 13260 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" }, spoilerOverlayBackground: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
let PlatformUtils = fn(1368);
PlatformUtils = PlatformUtils.isAndroid();
const unsafe_rawColors = nativeDefault.unsafe_rawColors;
obj4.backgroundColor = PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj.spoilerOverlayBackground = obj4;
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  const cResult = c.c(17);
  ({ style, source: spoilerOverlayBackground } = index);
  const tmp4 = closure_8();
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  const tmp7 = _slicedToArray(useMediaItemSpoilerState.useMediaItemSpoilerState(index.index), 2);
  if (tmp7[0]) {
    if (cResult[0] === tmp8) {
      if (cResult[1] === style) {
        let tmp10 = cResult[2];
      }
      if (spoilerOverlayBackground.obscure) {
        let str = "dark";
      } else {
        str = "light";
        const tmpResult = tmp(1368);
      }
      if (cResult[3] === token) {
        if (cResult[4] === str) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] === spoilerOverlayBackground.obscure) {
          if (cResult[7] === tmp4.obscureContentContainer) {
            if (cResult[8] === tmp4.spoilerOverlayBackground) {
              if (cResult[10] === tmp4.spoilerOverlayContainer) {
                if (cResult[11] === tmp16) {
                  let tmp24 = cResult[12];
                }
                if (cResult[13] === tmp10) {
                  if (cResult[14] === tmp12) {
                    if (cResult[15] === tmp24) {
                      let tmp28 = cResult[16];
                    }
                    return tmp28;
                  }
                }
                const obj4 = { style: tmp10, children: null };
                const items = [tmp12, tmp24];
                obj4.children = items;
                const tmp30 = React5(tmp5(4497).View, obj4);
                cResult[13] = tmp10;
                cResult[14] = tmp12;
                cResult[15] = tmp24;
                cResult[16] = tmp30;
                tmp28 = tmp30;
              }
              const obj5 = { style: tmp4.spoilerOverlayContainer, children: cResult[9] };
              const tmp27 = timestampProducer(hasOwnProperty, obj5);
              cResult[10] = tmp4.spoilerOverlayContainer;
              cResult[11] = cResult[9];
              cResult[12] = tmp27;
              tmp24 = tmp27;
            }
          }
        }
        if (spoilerOverlayBackground.obscure) {
          const obj6 = { style: tmp4.obscureContentContainer, children: null };
          const items1 = [timestampProducer(tmp(5301).ImageWarningIcon, { size: "lg", color: "white" }), ];
          const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
          const intl2 = tmp(1119).intl;
          obj7.children = intl2.string(tmp(1119).t.SpxcUR);
          items1[1] = timestampProducer(tmp(4754).Text, obj7);
          obj6.children = items1;
          let tmp19 = React5(hasOwnProperty, obj6);
        } else {
          const obj8 = { style: tmp4.spoilerOverlayBackground, children: null };
          const obj9 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
          const intl = tmp(1119).intl;
          obj9.children = intl.string(tmp(1119).t["F+x38C"]).toUpperCase();
          obj8.children = timestampProducer(tmp(4754).Text, obj9);
          tmp19 = timestampProducer(hasOwnProperty, obj8);
          const str2 = intl.string(tmp(1119).t["F+x38C"]);
        }
        cResult[6] = spoilerOverlayBackground.obscure;
        ({ obscureContentContainer: tmp3[7], spoilerOverlayBackground } = tmp4);
        cResult[8] = spoilerOverlayBackground;
        cResult[9] = tmp19;
      }
      const obj10 = { blurTheme: str, android_fallbackColor: token, style: React4.absoluteFill };
      const tmp15 = timestampProducer(tmp5(5176), obj10);
      cResult[3] = token;
      cResult[4] = str;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    }
    const items2 = [style, React4.absoluteFill, tmp8];
    cResult[0] = tmp8;
    cResult[1] = style;
    cResult[2] = items2;
    tmp10 = items2;
  } else {
    return null;
  }
}) : ((source) => {
  source = source.source;
  ({ style, index } = source);
  let items2 = closure_8();
  let stringResult = dependencyMap;
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  if (!tmp5[0]) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    const items = [style, React4.absoluteFill, tmp6];
    obj3.style = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      str = "light";
      const tmpResult = tmp(1368);
    }
    const obj4 = { blurTheme: str, android_fallbackColor: token, style: React4.absoluteFill };
    const items1 = [timestampProducer(tmp3(5176), obj4), ];
    let obj5 = { style: items2.spoilerOverlayContainer, children: null };
    const obj6 = { style: null, children: null };
    if (source.obscure) {
      obj6.style = items2.obscureContentContainer;
      items2 = [tmp9(tmp(5301).ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl2 = tmp(1119).intl;
      stringResult = intl2.string(tmp(1119).t.SpxcUR);
      obj7.children = stringResult;
      items2[1] = tmp9(tmp(4754).Text, obj7);
      obj6.children = items2;
      let tmp9Result = tmp7(tmp11, obj6);
    } else {
      obj6.style = items2.spoilerOverlayBackground;
      const obj8 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl = tmp(1119).intl;
      obj8.children = intl.string(tmp(1119).t["F+x38C"]).toUpperCase();
      obj6.children = tmp9(tmp(4754).Text, obj8);
      tmp9Result = tmp9(tmp11, obj6);
      const str2 = intl.string(tmp(1119).t["F+x38C"]);
    }
    obj5.children = tmp9Result;
    obj5 = tmp9(tmp11, obj5);
    items1[1] = obj5;
    obj3.children = items1;
    React5(tmp3(4497).View, obj3);
    const tmp3Result = tmp3(5176);
  }
}));
