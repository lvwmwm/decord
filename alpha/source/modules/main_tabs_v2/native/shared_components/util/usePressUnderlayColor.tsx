// Module ID: 19029
// Function ID: 19030
// Name: usePressUnderlayColor
// Dependencies: [19030, 5248, 5591, 575, 5006, 5016, 2]
// Exports: default

// Module 19029 (usePressUnderlayColor)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import useToken from "useToken" /* 5591 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 19030 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      const hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      let num3 = 0.08;
      const tmp3Result2 = shared;
      if (tmp3Result2.isThemeDark(tmp2)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = hexWithOpacity(substr, num3);
    }
  }
  return hexWithOpacityResult;
};
