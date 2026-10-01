// Module ID: 8054
// Function ID: 8055
// Name: FormCTA
// Dependencies: [19, 17, 1085, 21, 4836, 576, 1177, 5929, 6558, 8055, 2]
// Exports: default

// Module 8054 (FormCTA)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1177 */;
import FormCheckbox from "FormCheckbox" /* 5929 */;
import FormRowDefault from "FormRow" /* 6558 */;
import RowButton2 from "RowButton" /* 8055 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { form: obj2, title: obj3, description: obj4, icon: size, completedIcon: { opacity: 0.3 }, completedText: obj5 };
obj2 = { borderRadius: nativeDefault.radii.xs, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { fontSize: nativeDefault.space.PX_16, lineHeight: 18, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj4 = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj5 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  let completed;
  let iconContainerStyle;
  let iconSource;
  let iconStyle;
  let items1;
  let items4;
  let obj5;
  let obj8;
  let onLongPress;
  let onPress;
  let style;
  let subtitle;
  let title;
  let titleStyle;
  let tmp22Result;
  let tmp22Result1;
  let trailing;
  let variant;
  ({ title, titleStyle, subtitle, completed, iconSource, trailing, onPress, onLongPress, variant } = arg0);
  ({ style, iconStyle, iconContainerStyle } = arg0);
  const tmp = closure_5();
  let tmp3Result = null;
  if (null != iconSource) {
    const items = [iconContainerStyle, ];
    let completedIcon = null;
    const tmp4 = View;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    const obj = { style: items, children: null };
    items[1] = completedIcon;
    ({ style: items1, source: iconSource, size: native.Icon.Sizes.CUSTOM, disableColor: true });
    items1 = [tmp.icon, iconStyle];
    const Icon = native.Icon;
    tmp3Result = tmp3(tmp4, obj);
  }
  let tmp9Result = null;
  if (undefined !== subtitle) {
    const items2 = [tmp.description, ];
    let completedText = null;
    const SubLabel = FormRowDefault.SubLabel;
    const tmp9 = jsx;
    if (completed) {
      completedText = tmp.completedText;
    }
    const obj3 = { style: items2, text: subtitle };
    items2[1] = completedText;
    tmp9Result = tmp9(SubLabel, obj3);
  }
  if ("row-button" === variant) {
    const obj4 = { arrow: false, onPress, onLongPress, accessibilityState: obj5, label: null, subLabel: tmp9Result, trailing, icon: tmp3Result };
    obj5 = { checked: completed };
    const RowButton = RowButton2.RowButton;
    const items3 = [tmp.title, , ];
    let completedText1;
    const Label = FormRowDefault.Label;
    const tmp18 = require;
    const tmp20 = importDefault;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    items3[1] = completedText1;
    items3[2] = titleStyle;
    if (completed) {
      trailing = tmp17(tmp18(5929).FormCheckbox, { checked: true });
    } else if (trailing == null) {
      trailing = tmp17(tmp20(6558).Arrow, {});
    }
    tmp22Result1 = tmp17(RowButton, obj4);
  } else {
    const obj7 = { start: true, end: true, variant, onPress, onLongPress, DEPRECATED_style: items4, accessibilityState: obj8, label: null, subLabel: tmp9Result, trailing: tmp22Result, leading: tmp3Result };
    items4 = [tmp.form, style];
    const items5 = [tmp.title, , ];
    let completedText2;
    obj8 = { checked: completed };
    const tmp25 = FormRowDefault;
    const Label2 = FormRowDefault.Label;
    const tmp23 = importDefault;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    items5[1] = completedText2;
    items5[2] = titleStyle;
    if (completed) {
      tmp22Result = tmp22(FormCheckbox.FormCheckbox, { checked: true });
    } else {
      tmp22Result = trailing;
      if (trailing == null) {
        tmp22Result = tmp22(tmp23(6558).Arrow, {});
      }
    }
    tmp22Result1 = tmp22(tmp25, obj7);
  }
  return tmp22Result1;
};
