// Module ID: 16008
// Function ID: 16009
// Name: RefreshEmptyState
// Dependencies: [19, 17, 1072, 21, 5014, 6723, 575, 5717, 8194, 5634, 5021, 2]
// Exports: ThemedEmptyState

// Module 16008 (RefreshEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import shared from "shared" /* 5021 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8194 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import TextStyles_mod from "TextStyles" /* 6723 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
class EmptyState {
  constructor(arg0) {
    let body;
    let bodyStyle;
    let callToAction;
    let containerStyle;
    let imageStyle;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj11;
    let source;
    let title;
    let titleStyle;
    ({ source, title, callToAction } = arg0);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = arg0);
    const tmp = closure_6();
    const obj = { style: items, children: items2 };
    items = [tmp.container, containerStyle];
    let tmp4 = null;
    const tmp2 = hasOwnProperty;
    if (null != source) {
      const obj2 = { source, style: items1 };
      items1 = [tmp.image, imageStyle];
      tmp4 = React3(FastImageDefault, obj2);
    }
    items2 = [tmp4, , , ];
    let tmp8 = null;
    if (null != title) {
      const obj3 = { style: items3, children: title };
      items3 = [tmp.title, titleStyle];
      tmp8 = React3(LegacyText_LegacyTextDefault, obj3);
    }
    items2[1] = tmp8;
    const obj4 = { style: items4, children: body };
    items4 = [tmp.body, bodyStyle];
    items2[2] = React3(LegacyText_LegacyTextDefault, obj4);
    let tmp12Result = null;
    if (null != callToAction) {
      const obj5 = { style: tmp.cta, children: React3(components_Button_Button.Button, obj11) };
      obj11 = { shrink: true, text: null, onPress: null, size: "sm" };
      ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
      tmp12Result = tmp12(tmp3, obj5);
    }
    items2[3] = tmp12Result;
    return tmp2(View, obj);
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", justifyContent: "center", padding: 16 }, title: obj2, body: obj3, image: { marginBottom: 32 }, cta: { alignSelf: "center", marginTop: 16 } };
obj2 = { textAlign: "center", marginBottom: 8 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3 = { textAlign: "center" };
TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
const metroRequire = createStyles(obj);
const result = size.fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export function ThemedEmptyState(darkSource) {
  darkSource = darkSource.darkSource;
  const lightSource = darkSource.lightSource;
  const merged = Object.assign(darkSource, Object.assign({ lightSource: 0, darkSource: 0 }));
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  if (obj2.isThemeLight(theme)) {
    darkSource = lightSource;
  }
  const obj3 = { source: darkSource };
  const merged1 = Object.assign(merged);
  return React3(EmptyState, obj3);
}
