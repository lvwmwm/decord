// Module ID: 11538
// Function ID: 11539
// Name: EntityBorderAppIcon
// Dependencies: [17, 21, 576, 4836, 5899, 2]
// Exports: default

// Module 11538 (EntityBorderAppIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const sm = nativeDefault.radii.sm;
let closure_5 = createStyles.createStyles((width, borderRadius) => {
  const obj = { appIcon: { width, height: width, borderRadius }, entityWrapper: { padding: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 } };
  ({ padding: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 });
  return obj;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

export default function EntityBorderAppIcon(iconSize) {
  let iconSource;
  let iconStyle;
  let wrapperStyle;
  let num = iconSize.iconSize;
  ({ iconSource, wrapperStyle, iconStyle } = iconSize);
  if (num === undefined) {
    num = 32;
  }
  let iconBorderRadius = iconSize.iconBorderRadius;
  if (iconBorderRadius === undefined) {
    iconBorderRadius = sm;
  }
  const tmp = closure_5(num, iconBorderRadius);
  const items = [tmp.entityWrapper, wrapperStyle];
  const items1 = [tmp.appIcon, iconStyle];
  return <View style={items}>{null}</View>;
};
