// Module ID: 15716
// Function ID: 15717
// Name: typing_indicators/TypingIndicator
// Dependencies: [19, 17, 21, 4836, 576, 4767, 4685, 1177, 2]
// Exports: TypingIndicator

// Module 15716 (typing_indicators/TypingIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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

export const TypingIndicator = function TypingIndicator(style) {
  style = style.style;
  const tmp = useThemeDefault();
  const obj = shared;
  const tmp2 = closure_5(obj.isThemeLight(tmp));
  const items = [tmp2.ellipsisWrapper, style];
  const items1 = [tmp2.ellipsis];
  return <View style={items}>{null}</View>;
};
