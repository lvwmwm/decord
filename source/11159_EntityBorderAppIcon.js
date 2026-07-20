// Module ID: 11159
// Function ID: 86795
// Name: EntityBorderAppIcon
// Dependencies: []
// Exports: default

// Module 11159 (EntityBorderAppIcon)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const sm = importDefault(dependencyMap[2]).radii.sm;
const _module = require(dependencyMap[3]);
let closure_5 = _module.createStyles((width, borderRadius) => {
  let obj = { appIcon: obj };
  obj = { width, height: width, borderRadius };
  obj = { backgroundColor: importDefault(dependencyMap[2]).colors.BORDER_SUBTLE, borderRadius: borderRadius + 1 };
  obj.entityWrapper = obj;
  return obj;
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

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
  const tmp = callback(num, iconBorderRadius);
  const items = [tmp.entityWrapper, wrapperStyle];
  const items1 = [tmp.appIcon, iconStyle];
  return <View style={items}>{jsx(importDefault(dependencyMap[4]), { style: items1, source: iconSource })}</View>;
};
