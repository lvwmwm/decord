// Module ID: 18087
// Function ID: 18088
// Name: typing_indicators/TypingIndicator
// Dependencies: [19, 17, 21, 5009, 575, 5248, 5016, 1188, 2]
// Exports: TypingIndicator

// Module 18087 (typing_indicators/TypingIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export function TypingIndicator(style) {
  style = style.style;
  const tmp = useThemeDefault();
  const obj = shared;
  const tmp2 = closure_5(obj.isThemeLight(tmp));
  const items = [tmp2.ellipsisWrapper, style];
  return <View style={items}>{null}</View>;
}
