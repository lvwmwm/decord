// Module ID: 9294
// Function ID: 9295
// Name: GameActivityIcon
// Dependencies: [19, 17, 21, 5014, 575, 5080, 8143, 5021, 5717, 1409, 2]

// Module 9294 (GameActivityIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import shared from "shared" /* 5021 */;
import native from "native" /* 5080 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function GameActivityIcon(style) {
  let colors;
  let game;
  let isThemeDarkResult;
  let items1;
  let onShown;
  let tmp10;
  let tmp13Result;
  ({ game, size, onShown } = style);
  style = style.style;
  const fallback = style.fallback;
  const tmp = closure_6();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  const iconURL = game.getIconURL(size);
  const size1 = { width: size, height: size };
  const items = [iconURL, onShown];
  const effect = react.useEffect(() => {
    if (null != iconURL) {
      if (onShown != null) {
        tmp();
      }
    }
  }, items);
  if (null == iconURL) {
    if ("none" === fallback) {
      return null;
    } else {
      const obj2 = { size: "custom", style: items1, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
      items1 = [tmp.icon, size1];
      const UnknownGameIcon = tmp2(8143).UnknownGameIcon;
      const tmp2Result = shared;
      isThemeDarkResult = tmp2Result.isThemeDark(theme);
      colors = nativeDefault.colors;
      tmp13Result = tmp13(UnknownGameIcon, obj2);
      tmp10 = tmp13;
    }
  } else {
    FastImageDefault;
    const items2 = [tmp.icon, size1];
    tmp13Result = <tmp8 source={AvatarUtils.makeSource(iconURL)} style={items2} />;
    tmp10 = jsx;
    const tmp2Result2 = AvatarUtils;
  }
  let tmp10Result = tmp13Result;
  if (null != style) {
    const obj4 = { style, children: tmp13Result };
    tmp10Result = tmp10(View, obj4);
  }
  return tmp10Result;
});
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default memoResult;
