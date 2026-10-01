// Module ID: 10105
// Function ID: 10106
// Name: MediaKeyboardBottomSheetActions
// Dependencies: [19, 17, 21, 4836, 576, 1364, 4652, 672, 1613, 4531, 5293, 5435, 4832, 2]

// Module 10105 (MediaKeyboardBottomSheetActions)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import Pressables from "Pressables" /* 5435 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp2;
const Text_Text = tmp2(4832);
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let obj2;
  let obj3;
  let obj7;
  let tmp5;
  let PX_24 = arg0;
  const obj = { wrap: obj2, container: obj3, buttonsContainer: { gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL }, button: { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 }, gradient: obj7 };
  obj2 = { alignItems: "center", top: undefined };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3 = { paddingVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL, marginBottom: PX_24, borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS, backgroundColor: tmp5, paddingHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL, borderWidth: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED };
  const obj4 = PlatformUtils;
  const tmp = absoluteFillObject;
  if (obj4.isIOS()) {
    PX_24 = tmp3(576).space.PX_24;
  }
  tmp5 = arg2;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  const merged1 = Object.assign(tmp3(576).shadows.SHADOW_HIGH);
  ({ gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL });
  obj7 = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  ({ flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 });
  const merged2 = Object.assign(tmp.absoluteFillObject);
  return obj;
});
const memoResult = react.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  let closure_1;
  let closure_2;
  let closure_3;
  let items2;
  let obj6;
  onHeightChange = onHeightChange.onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  importDefault = undefined;
  dependencyMap = undefined;
  react = undefined;
  let variant;
  let tmp = onHeightChange;
  let tmp2 = dependencyMap;
  let obj = onHeightChange(4652);
  const gradientValue = obj.useGradientValue(onHeightChange(4652).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj2 = _modDef672(gradientValue);
    let alphaResult = obj2.alpha(0.95);
    hexResult = alphaResult.hex();
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult = tmp(4531);
  const tmp6 = closure_8(bottom, tmpResult.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER), hexResult);
  importDefault = tmp6;
  const tmpResult4 = tmp(4531);
  dependencyMap = tmpResult4.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  const tmpResult5 = tmp(4531);
  react = tmpResult5.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const tmpResult6 = tmp(4531);
  variant = tmpResult6.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  let items = [tmp6.gradient.color];
  const memo = react.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef672(closure_1.gradient.color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef672(closure_1.gradient.color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items);
  const items1 = [onHeightChange];
  let obj4 = { style: tmp6.gradient, pointerEvents: "none" };
  const obj3 = {
    style: tmp6.wrap,
    pointerEvents: "box-none",
    onLayout: react.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1),
    children: items2
  };
  const tmp8 = LinearGradientDefault;
  const merged = Object.assign(memo);
  items2 = [closure_6(tmp8, obj4), ];
  const obj5 = { style: tmp6.container, children: closure_6(closure_5, obj6) };
  obj6 = {
    style: tmp6.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel, index) => {
      let items;
      let str = "text-muted";
      let str2 = "text-muted";
      const obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: { disabled: accessibilityLabel.disabled }, disabled: accessibilityLabel.disabled, style: closure_1.button, onPress: accessibilityLabel.onPress, children: items };
      const PressableOpacity = Pressables.PressableOpacity;
      const IconComponent = accessibilityLabel.IconComponent;
      const tmp = metroImportDefault;
      if (!accessibilityLabel.disabled) {
        str2 = closure_2;
      }
      items = [metroRequire(IconComponent, { size: "md", color: str2 }), ];
      const obj2 = { lineClamp: 1, variant, color: str, children: accessibilityLabel.text };
      const Text = Text_Text.Text;
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      items[1] = metroRequire(Text, obj2);
      return tmp(PressableOpacity, obj, index);
    })
  };
  items2[1] = closure_6(closure_5, obj5);
  return closure_7(closure_5, obj3);
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default memoResult;
