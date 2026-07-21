// Module ID: 9081
// Function ID: 71176
// Name: ActionButton
// Dependencies: []
// Exports: default

// Module 9081 (ActionButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = arg1(dependencyMap[3]);
  obj = { style: style.styles };
  obj = {};
  obj.icon = jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" });
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj.variant = str;
  obj.size = "sm";
  obj.children = jsx(arg1(dependencyMap[4]).IconButton, obj);
  return <View {...obj} />;
};
