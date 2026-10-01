// Module ID: 8055
// Function ID: 8056
// Name: RowButton
// Dependencies: [19, 21, 4836, 576, 5923, 5917, 4566, 5919, 8056, 2]

// Module 8055 (RowButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import TableRow from "TableRow" /* 5917 */;
import Card_Card from "Card/Card" /* 5919 */;
import TableRowIcon from "TableRowIcon" /* 5923 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp3;
const BackgroundBlurView = tmp3(8056);
class RowButton {
  constructor(arrow) {
    let experimental_withBlurBackground;
    let icon;
    let flag = arrow.arrow;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = arrow.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let str = arrow.variant;
    if (str === undefined) {
      str = "secondary";
    }
    ({ icon, experimental_withBlurBackground } = arrow);
    const onPress = arrow.onPress;
    const merged = Object.assign(arrow, Object.assign({ arrow: 0, disabled: 0, variant: 0, icon: 0, onPress: 0, experimental_withBlurBackground: 0 }));
    let tmp2 = icon;
    if (null != icon) {
      tmp2 = icon;
      if (!react.isValidElement(icon)) {
        let str2 = "translucent";
        if (!experimental_withBlurBackground) {
          let str3 = "secondary";
          if ("primary" === str) {
            str3 = "default";
          }
          str2 = str3;
        }
        tmp2 = jsx(TableRowIcon.TableRowIcon, { source: icon, variant: str2 });
      }
    }
    const merged1 = Object.assign(merged);
    const TableRowInner = TableRow.TableRowInner;
    const merged2 = Object.assign(merged);
    return <RowButtonWrapper experimental_withBlurBackground={experimental_withBlurBackground} onPress={onPress} disabled={flag2}><TableRowInner icon={tmp2} arrow={flag} disabled={flag2} borderRadius={nativeDefault.radii.xl} /></RowButtonWrapper>;
  }
}
function RowButtonWrapper(experimental_withBlurBackground) {
  let children;
  let disabled;
  let items2;
  let obj3;
  let obj4;
  let onPress;
  ({ onPress, disabled, children } = experimental_withBlurBackground);
  experimental_withBlurBackground = experimental_withBlurBackground.experimental_withBlurBackground;
  const merged = Object.assign(experimental_withBlurBackground, Object.assign({ experimental_withBlurBackground: 0, onPress: 0, disabled: 0, children: 0 }));
  const tmp2 = closure_5();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  let closure_2 = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  let closure_3 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  const InternalCard = Card_Card.InternalCard;
  if (experimental_withBlurBackground) {
    const obj2 = {
      shadow: "none",
      border: "none",
      start: true,
      end: true,
      onPress,
      onPressIn(arg0) {
          const onPressIn = merged.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
          closure_2();
        },
      onPressOut(arg0) {
          const onPressOut = merged.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
          closure_3();
        },
      style: items2,
      disabled,
      variant: "transparent",
      children: jsx(BackgroundBlurView.BackgroundBlurView, obj3)
    };
    items2 = [, ];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp2);
    const merged1 = Object.assign(merged);
    obj4 = obj2;
    obj3 = { pressed: sharedValue, children };
  } else {
    obj4 = { shadow: "low", start: true, end: true, onPress, style: tmp2.card, disabled, variant: "control-secondary", border: "control-secondary", children };
    const merged2 = Object.assign(merged);
  }
  return <InternalCard {...obj4} />;
}
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  let obj2;
  const obj = { card: obj2, cardWithBlur: { overflow: "hidden" } };
  obj2 = { padding: "y", borderTopStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
  return obj;
});
RowButton.Icon = TableRowIcon.TableRowIcon;
let result = size.fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = TableRowIcon.TableRowIconProps;
export { RowButton };
