// Module ID: 7491
// Function ID: 60085
// Name: FormCTA
// Dependencies: []
// Exports: default

// Module 7491 (FormCTA)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Fonts = arg1(dependencyMap[2]).Fonts;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs, paddingVertical: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.form = obj;
obj.title = { fontSize: importDefault(dependencyMap[5]).space.PX_16, lineHeight: 18, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj1 = { fontSize: importDefault(dependencyMap[5]).space.PX_16, lineHeight: 18, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj.description = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
const obj2 = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
obj.icon = { width: importDefault(dependencyMap[5]).space.PX_40, height: importDefault(dependencyMap[5]).space.PX_40 };
obj.completedIcon = { opacity: 0.3 };
const obj3 = { width: importDefault(dependencyMap[5]).space.PX_40, height: importDefault(dependencyMap[5]).space.PX_40 };
obj.completedText = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
let closure_5 = obj.createStyles(obj);
const obj4 = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  let completed;
  let iconContainerStyle;
  let iconSource;
  let iconStyle;
  let onLongPress;
  let onPress;
  let style;
  let subtitle;
  let title;
  let titleStyle;
  let variant;
  ({ title, titleStyle, subtitle, completed } = arg0);
  const arg1 = completed;
  ({ iconSource, trailing: closure_1, onPress, onLongPress, variant } = arg0);
  function renderTrailing() {
    if (completed) {
      const obj = { checked: true };
      let tmp = callback2(completed(closure_2[7]).FormCheckbox, obj);
    } else {
      tmp = callback;
      if (null == callback) {
        tmp = callback2(callback(closure_2[8]).Arrow, {});
      }
    }
    return tmp;
  }
  ({ style, iconStyle, iconContainerStyle } = arg0);
  const tmp = callback();
  let tmp3Result = null;
  if (null != iconSource) {
    let obj = {};
    const items = [iconContainerStyle, ];
    let completedIcon = null;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    items[1] = completedIcon;
    obj.style = items;
    obj = {};
    const items1 = [tmp.icon, iconStyle];
    obj.style = items1;
    obj.source = iconSource;
    obj.size = arg1(dependencyMap[6]).Icon.Sizes.CUSTOM;
    obj.disableColor = true;
    obj.children = jsx(arg1(dependencyMap[6]).Icon, obj);
    tmp3Result = <View {...obj} />;
    const tmp3 = jsx;
    const tmp4 = View;
  }
  let tmp10Result = null;
  if (undefined !== subtitle) {
    obj = {};
    const items2 = [tmp.description, ];
    let completedText = null;
    if (completed) {
      completedText = tmp.completedText;
    }
    items2[1] = completedText;
    obj.style = items2;
    obj.text = subtitle;
    tmp10Result = jsx(importDefault(dependencyMap[8]).SubLabel, obj);
    const tmp10 = jsx;
  }
  if ("row-button" === variant) {
    const obj1 = { arrow: false, onPress, onLongPress };
    const obj2 = { checked: completed };
    obj1.accessibilityState = obj2;
    const obj3 = {};
    const items3 = [tmp.title, , ];
    let completedText1;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    items3[1] = completedText1;
    items3[2] = titleStyle;
    obj3.style = items3;
    obj3.text = title;
    obj1.label = jsx(importDefault(dependencyMap[8]).Label, obj3);
    obj1.subLabel = tmp10Result;
    obj1.trailing = renderTrailing();
    obj1.icon = tmp3Result;
    let tmp21Result = tmp16(arg1(dependencyMap[9]).RowButton, obj1);
  } else {
    const obj4 = { bind: null, cursor: null, variant, onPress, onLongPress };
    const items4 = [tmp.form, style];
    obj4.DEPRECATED_style = items4;
    const obj5 = { checked: completed };
    obj4.accessibilityState = obj5;
    const obj6 = {};
    const items5 = [tmp.title, , ];
    let completedText2;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    items5[1] = completedText2;
    items5[2] = titleStyle;
    obj6.style = items5;
    obj6.text = title;
    obj4.label = jsx(importDefault(dependencyMap[8]).Label, obj6);
    obj4.subLabel = tmp10Result;
    obj4.trailing = renderTrailing();
    obj4.leading = tmp3Result;
    tmp21Result = tmp21(importDefault(dependencyMap[8]), obj4);
    const tmp24 = importDefault(dependencyMap[8]);
  }
  return tmp21Result;
};
