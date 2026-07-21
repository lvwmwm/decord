// Module ID: 7511
// Function ID: 60158
// Name: FormRadioRow
// Dependencies: []
// Exports: default

// Module 7511 (FormRadioRow)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  let align;
  let leading;
  let onPress;
  let selected;
  let style;
  let value;
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  let obj = { maxFontSizeMultiplier: true, accessibilityRole: true, variant: true, color: true, tintColor: true, marginRight: true };
  ({ value, style } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const context = React.useContext(arg1(dependencyMap[2]).RedesignCompatContext);
  let obj1 = arg1(dependencyMap[3]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp7Result = tmp7(arg1(dependencyMap[4]).TableRadioRow, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj["style"] = style;
    obj["onPress"] = onPress;
    obj["accessibilityRole"] = tmp5;
    obj["accessibilityState"] = tmp6;
    let tmp14 = null;
    if ("right" === align) {
      obj1 = { selected };
      tmp14 = jsx(importDefault(dependencyMap[6]), obj1);
    }
    obj["trailing"] = tmp14;
    let tmp18 = leading;
    if ("left" === align) {
      const obj2 = { selected };
      tmp18 = jsx(importDefault(dependencyMap[6]), obj2);
    }
    obj["leading"] = tmp18;
    tmp7Result = tmp7(importDefault(dependencyMap[5]), obj);
    const tmp10 = importDefault(dependencyMap[5]);
  }
  return tmp7Result;
};
