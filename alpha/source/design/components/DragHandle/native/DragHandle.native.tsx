// Module ID: 7447
// Function ID: 7448
// Name: DragHandle
// Dependencies: [19, 21, 5306, 12, 7448, 1113, 7449, 2]
// Exports: DragHandle

// Module 7447 (DragHandle)
import _mod12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import BaseIconButton2 from "BaseIconButton" /* 7448 */;
import DragIcon from "DragIcon" /* 7449 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = ["onPress", "onPressIn", "onPressOut", "onLongPress"];
let closure_4 = createStyles.createStyles({ stretchButton: { flexDirection: "row", alignItems: "stretch", alignSelf: "stretch" }, stretchPill: { height: "100%", alignSelf: "stretch" } });
const result = size.fileFinishedImporting("design/components/DragHandle/native/DragHandle.native.tsx");

export function DragHandle(variant) {
  let accessibilityLabel;
  let borderRadius;
  let obj3;
  let ref;
  let stretch;
  let style;
  let str = variant.variant;
  ({ ref, style } = variant);
  if (str === undefined) {
    str = "default";
  }
  let str2 = variant.size;
  if (str2 === undefined) {
    str2 = "md";
  }
  ({ stretch, accessibilityLabel, borderRadius } = variant);
  const merged = Object.assign(variant, Object.assign({ ref: 0, style: 0, variant: 0, size: 0, stretch: 0, accessibilityLabel: 0, borderRadius: 0 }));
  const tmp2 = closure_4();
  if (null == borderRadius) {
    obj3 = {};
  } else {
    const obj = _mod12;
    if (obj.isNumber(borderRadius)) {
      obj3 = { borderRadius };
      const obj4 = { borderRadius };
    } else {
      obj3 = { borderTopStartRadius: null, borderTopEndRadius: null, borderBottomStartRadius: null, borderBottomEndRadius: null };
      ({ topStart: obj2.borderTopStartRadius, topEnd: obj2.borderTopEndRadius, bottomStart: obj2.borderBottomStartRadius, bottomEnd: obj2.borderBottomEndRadius } = borderRadius);
    }
  }
  const someResult = closure_3.some((item) => null != merged[item]);
  const BaseIconButton = BaseIconButton2.BaseIconButton;
  const merged1 = Object.assign(merged);
  let stretchButton;
  if (stretch) {
    stretchButton = tmp2.stretchButton;
  }
  const items = [stretchButton, style];
  let stretchPill;
  if (stretch) {
    stretchPill = tmp2.stretchPill;
  }
  const items1 = [stretchPill, obj3];
  let str3 = "none";
  if (someResult) {
    str3 = "button";
  }
  if (accessibilityLabel == null) {
    const intl = tmp7(1113).intl;
    accessibilityLabel = intl.string(tmp7(1113).t["0dOFq+"]);
  }
  let str4 = "icon-only";
  if ("overlay" === str) {
    str4 = "secondary-overlay";
  }
  return <BaseIconButton ref={ref} style={items} pillStyle={items1} accessibilityRole={str3} accessibilityLabel={accessibilityLabel} variant={str4} size={str2} scaleAmountInPx={0} icon={jsx(DragIcon.DragIcon, {})} onPress={merged.onPress} />;
}
