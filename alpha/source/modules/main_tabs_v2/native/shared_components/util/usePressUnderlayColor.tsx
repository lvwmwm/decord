// Module ID: 17055
// Function ID: 17056
// Name: usePressUnderlayColor
// Dependencies: [17056, 4776, 4560, 576, 4712, 4714, 2]
// Exports: default

// Module 17055 (usePressUnderlayColor)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4560 */;
import useThemeDefault from "useTheme" /* 4776 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 17056 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      const tmp3Result = tmp3(4712);
      let num3 = 0.08;
      if (tmp3Result2.isThemeDark(tmp2)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = tmp3Result.hexWithOpacity(substr, num3);
      tmp3Result2 = tmp3(4714);
    }
  }
  return hexWithOpacityResult;
};
