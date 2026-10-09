// Module ID: 16426
// Function ID: 16427
// Name: typing_indicators/TypingIndicator
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 4992, 4930, 1200, 2]

// Module 16426 (typing_indicators/TypingIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let unsafe_rawColors;
  let unsafe_rawColors2;
  const obj = { ellipsisWrapper: { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, ellipsis: { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 }, ellipsisDot: { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE } };
  ({ zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  unsafe_rawColors = nativeDefault.unsafe_rawColors;
  unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TypingIndicator(style) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  style = style.style;
  const tmp4 = useThemeDefault();
  if (cResult[0] !== tmp4) {
    const tmpResult = shared;
    const isThemeLightResult = tmpResult.isThemeLight(tmp4);
    cResult[0] = tmp4;
    cResult[1] = isThemeLightResult;
    tmp5 = isThemeLightResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_5(tmp5);
  if (cResult[2] === style) {
    let tmp8;
    if (cResult[3] === tmp7.ellipsisWrapper) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp7.ellipsis) {
      let tmp9;
      if (cResult[6] === tmp7.ellipsisDot) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        let tmp12;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
      const tmp15 = <View style={tmp8}>{tmp9}</View>;
      cResult[8] = tmp8;
      cResult[9] = tmp9;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
    ({ ellipsis: obj3.style, ellipsisDot: obj3.dotStyle } = tmp7);
    const tmp11 = jsx(native.Ellipsis, { style: null, dotStyle: null, disableScale: true });
    cResult[5] = tmp7.ellipsis;
    cResult[6] = tmp7.ellipsisDot;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const items = [tmp7.ellipsisWrapper, style];
  cResult[2] = style;
  cResult[3] = tmp7.ellipsisWrapper;
  cResult[4] = items;
  tmp8 = items;
}) : (function TypingIndicator(style) {
  style = style.style;
  const tmp = useThemeDefault();
  const obj = shared;
  const tmp2 = closure_5(obj.isThemeLight(tmp));
  const items = [tmp2.ellipsisWrapper, style];
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = tmp3;
