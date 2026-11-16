// Module ID: 19643
// Function ID: 19644
// Name: useDockBoxShadow
// Dependencies: [19, 5231, 5167, 2]
// Exports: default

// Module 19643 (useDockBoxShadow)
import ColorUtils from "ColorUtils" /* 5167 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useDockBoxShadow.tsx");

export default function useDockBoxShadow(arg0) {
  let shadowOffset;
  let shadowRadius;
  let obj = shadowOffset(shadowRadius[1]);
  const nativeStyles = arg0[obj.useThemeContext(obj).theme].nativeStyles;
  shadowOffset = nativeStyles.shadowOffset;
  shadowRadius = nativeStyles.shadowRadius;
  const shadowColor = nativeStyles.shadowColor;
  const shadowOpacity = nativeStyles.shadowOpacity;
  let items = [shadowOffset, shadowRadius, shadowColor, shadowOpacity];
  return shadowColor.useMemo(() => {
    let obj2;
    const obj = { offsetX: shadowOffset.width, offsetY: shadowOffset.height, blurRadius: shadowRadius, color: obj2.hexWithOpacity(shadowColor, shadowOpacity) };
    const items = [obj];
    obj2 = ColorUtils;
    return items;
  }, items);
};
