// Module ID: 9193
// Function ID: 9194
// Name: GameActivityIcon
// Dependencies: [19, 17, 21, 4829, 576, 4537, 8013, 4682, 5894, 1397, 2]

// Module 9193 (GameActivityIcon)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5894 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj = { icon: { borderRadius: nativeDefault.radii.xs } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default noop.memo(function GameActivityIcon(style) {
  ({ game, size, onShown } = style);
  style = style.style;
  const tmp = closure_6();
  const iconURL = game.getIconURL(size);
  const size1 = { width: size, height: size };
  const items = [iconURL, onShown];
  const effect = noop.useEffect(() => {
    if (null != iconURL) {
      if (onShown != null) {
        tmp();
      }
    }
  }, items);
  if (null == iconURL) {
    if ("none" === style.fallback) {
      return null;
    } else {
      const obj2 = { size: "custom", style: null, color: null };
      const items1 = [tmp.icon, size1];
      obj2.style = items1;
      const tmp2Result = tmp2(4682);
      const colors = nativeDefault.colors;
      obj2.color = tmp2(4682).isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
      jsx(tmp2(8013).UnknownGameIcon, { size: "custom", style: null, color: null });
      const isThemeDarkResult = tmp2(4682).isThemeDark(obj.useThemeContext().theme);
    }
  } else {
    const obj3 = { source: null, style: null };
    const tmp6 = jsx;
    obj3.source = tmp2(1397).makeSource(iconURL);
    const items2 = [tmp.icon, size1];
    obj3.style = items2;
    const tmp9 = <tmp8 source={null} style={null} />;
    let tmp6Result = tmp9;
    if (null != style) {
      const obj4 = { style, children: tmp9 };
      tmp6Result = tmp6(View, obj4);
    }
    return tmp6Result;
  }
});
