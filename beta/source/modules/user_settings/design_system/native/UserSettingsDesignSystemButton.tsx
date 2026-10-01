// Module ID: 15359
// Function ID: 15360
// Name: UserSettingsDesignSystemButton
// Dependencies: [32, 19, 17, 1074, 1229, 21, 15360, 5281, 15361, 7363, 6799, 9345, 13975, 7391, 13977, 9614, 13976, 9141, 4836, 576, 1485, 4800, 15362, 1981, 5279, 4832, 10115, 9335, 9341, 9343, 9342, 9340, 9339, 5745, 4540, 1092, 5293, 5919, 5437, 8377, 2]
// Exports: default

// Module 15359 (UserSettingsDesignSystemButton)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import IconButton4 from "IconButton" /* 7363 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7391 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9141 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9335 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9339 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9340 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9341 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9342 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9343 */;
import ImageButton2 from "ImageButton" /* 9345 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9614 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 10115 */;
import ToggleButton2 from "ToggleButton" /* 13975 */;
import useToggleButtonProps from "useToggleButtonProps" /* 13976 */;
import ToggleIconButton2 from "ToggleIconButton" /* 13977 */;
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15360 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1229 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
let unpackModuleId;
const AssetRegistryDefault = tmp(6799);
const AssetRegistryDefault12 = tmp(15361);
function ExampleButton(arg0) {
  let buttonScale;
  let buttonSize;
  let closure_2;
  let first;
  let grow;
  let iconPosition;
  let showDisabled;
  let showIcon;
  let text;
  let tmpResult;
  let variant;
  ({ variant, text, grow } = arg0);
  closure_2 = undefined;
  let tmp = importDefault;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp3);
  let closure_1 = react.useRef(null);
  [first, closure_2] = react.useState(false);
  const items = [enableLoadingState];
  const callback = react.useCallback(() => {
    const tmp = enableLoadingState;
    if (tmp) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      closure_2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_2(false);
      }, 5000);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    closure_2(true);
    ref.current = setTimeout(() => {
      closure_1_2(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: first, variant, text, grow, size: buttonSize, icon: tmpResult, iconPosition, scaleAmountInPx: buttonScale };
  const Button = components_Button_Button.Button;
  const tmp8 = authStore;
  if (text == null) {
    text = variant;
  }
  if (text == null) {
    text = "";
  }
  if (grow == null) {
    grow = false;
  }
  tmpResult = undefined;
  if (showIcon) {
    tmpResult = AssetRegistryDefault12;
  }
  return tmp8(Button, obj);
}
function ExampleIconButton(arg0) {
  let c2;
  let obj;
  let showLabel;
  let str;
  let str2;
  let tmp5;
  let variant;
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  let tmp = importDefault;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  const showDisabled = tmp3.showDisabled;
  const buttonSize = tmp3.buttonSize;
  let closure_1 = react.useRef(null);
  [tmp5, c2] = _slicedToArray(react.useState(false), 2);
  const items = [enableLoadingState];
  const tmp4 = _slicedToArray(react.useState(false), 2);
  let closure_3 = react.useCallback(() => {
    const tmp = enableLoadingState;
    if (tmp) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  const IconButton = IconButton4.IconButton;
  const tmp6 = authStore;
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label: str2,
      grow: true,
      loading: tmp5,
      variant,
      icon: AssetRegistryDefault
    };
    str2 = variant;
    if (variant == null) {
      str2 = "";
    }
    obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: str,
      loading: tmp5,
      variant,
      size: buttonSize,
      icon: AssetRegistryDefault
    };
    str = variant;
    if (variant == null) {
      str = "";
    }
  }
  return tmp6(IconButton, obj);
}
function ExampleImageButton(arg0) {
  let c2;
  let image;
  let label;
  let obj;
  let showLabel;
  let tmp3;
  function onPress() {
    return closure_3();
  }
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  let tmp = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp.enableLoadingState;
  const showDisabled = tmp.showDisabled;
  const buttonSize = tmp.buttonSize;
  let closure_1 = react.useRef(null);
  [tmp3, c2] = _slicedToArray(react.useState(false), 2);
  const items = [enableLoadingState];
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_3 = react.useCallback(() => {
    const tmp = enableLoadingState;
    if (tmp) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  const ImageButton = ImageButton2.ImageButton;
  const tmp4 = authStore;
  if (showLabel) {
    obj = { disabled: showDisabled, onPress, label, grow: true, loading: tmp3, image };
    const obj2 = { disabled: showDisabled, onPress, label, grow: true, loading: tmp3, image };
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: label,
      loading: tmp3,
      size: buttonSize,
      image
    };
  }
  return tmp4(ImageButton, obj);
}
function ExampleToggleButton() {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(false);
  const obj = {
    text: "Notifications",
    icon: AssetRegistryDefault2,
    pressed: first,
    onPress() {
      return closure_1(!first);
    },
    size: "md"
  };
  const ToggleButton = ToggleButton2.ToggleButton;
  return authStore(ToggleButton, obj);
}
function ExampleToggleIconButton(variant) {
  let closure_1;
  let first;
  variant = variant.variant;
  first = undefined;
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  const obj = {
    accessibilityLabel: "" + variant + " notifications",
    icon: AssetRegistryDefault2,
    selectedIcon: AssetRegistryDefault10,
    pressed: first,
    onPress() {
      return closure_1(!first);
    },
    variant,
    size: "md"
  };
  const ToggleIconButton = ToggleIconButton2.ToggleIconButton;
  return authStore(ToggleIconButton, obj);
}
function ExampleCustomIconToggleButton() {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(false);
  const obj = { on: { variant: "destructive", accessibilityLabel: "Mute", icon: AssetRegistryDefault3 }, off: { variant: "secondary", accessibilityLabel: "Mute", icon: AssetRegistryDefault3 } };
  const useToggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps;
  ({ variant: "destructive", accessibilityLabel: "Mute", icon: AssetRegistryDefault3 });
  ({ variant: "secondary", accessibilityLabel: "Mute", icon: AssetRegistryDefault3 });
  const toggleIconButtonProps = useToggleIconButtonProps(obj, first);
  const obj4 = {
    onPress() {
      closure_1(!first);
    },
    size: "md"
  };
  const IconButton = IconButton4.IconButton;
  const merged = Object.assign(toggleIconButtonProps);
  return authStore(IconButton, obj4);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: metroImportAll, DARK_BACKGROUND_GRADIENT_PRESETS: c9 } = ClientThemesConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = ["primary", "secondary", "tertiary"];
let closure_14 = ["primary-overlay", "secondary-overlay"];
let closure_15 = ["destructive", "active"];
let closure_16 = ["expressive"];
let closure_17 = ["experimental_premium-primary", "experimental_premium-secondary"];
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3, toggleIconButtonRow: obj4, overlayButtonContainer: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_24 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  let Button;
  let Button2;
  let Button3;
  let Button4;
  let Card;
  let Card2;
  let Icon;
  let Icon2;
  let Stack;
  let Stack28;
  let Stack29;
  let Stack32;
  let Stack33;
  let Stack38;
  let Stack41;
  let Stack44;
  let Stack47;
  let closure_0;
  let items;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items2;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let items29;
  let items3;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let items35;
  let items36;
  let items37;
  let items38;
  let items39;
  let items4;
  let items40;
  let items41;
  let items42;
  let items43;
  let items44;
  let items45;
  let items46;
  let items47;
  let items48;
  let items49;
  let items5;
  let items50;
  let items51;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj100;
  let obj101;
  let obj102;
  let obj103;
  let obj104;
  let obj108;
  let obj109;
  let obj112;
  let obj113;
  let obj114;
  let obj118;
  let obj119;
  let obj122;
  let obj123;
  let obj124;
  let obj25;
  let obj26;
  let obj28;
  let obj29;
  let obj34;
  let obj36;
  let obj38;
  let obj40;
  let obj5;
  let obj60;
  let obj62;
  let obj64;
  let obj68;
  let obj70;
  let obj77;
  let obj82;
  let obj92;
  let obj93;
  let obj94;
  let obj95;
  let obj96;
  let onPress;
  let paths;
  let tmp3;
  let tmp4;
  const tmp = closure_24();
  _require = tmp;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  importDefault = react.useCallback(() => {
    const obj = onPress(paths[21]);
    obj.openLazy(closure_0(paths[23])(paths[22], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  let obj2 = {
    headerRight() {
      const obj = { onPress, icon: AssetRegistryDefault, size: "sm", variant: "secondary", accessibilityLabel: "Settings" };
      const IconButton = IconButton4.IconButton;
      return authStore(IconButton, obj);
    }
  };
  navigation.setOptions(obj2);
  const obj3 = { children: items51 };
  const obj4 = { children: closure_11(Stack, obj5) };
  obj5 = { spacing: 24, children: items1 };
  Stack = require("Stack/Stack").Stack;
  const obj6 = { children: items };
  const Stack2 = require("Stack/Stack").Stack;
  const obj7 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  const Stack3 = require("Stack/Stack").Stack;
  items = [closure_10(Stack3, obj7), ];
  const obj8 = {
    children: closure_13.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items[1] = closure_10(closure_5, obj8);
  items1 = [closure_11(Stack2, obj6), , , , , , , , , , , , , , , , , , , ];
  const obj9 = { children: items2 };
  const Stack4 = require("Stack/Stack").Stack;
  const obj10 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  const Stack5 = require("Stack/Stack").Stack;
  items2 = [closure_10(Stack5, obj10), ];
  const obj11 = {
    children: closure_15.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items2[1] = closure_10(closure_5, obj11);
  items1[1] = closure_11(Stack4, obj9);
  const obj12 = { children: items3 };
  const Stack6 = require("Stack/Stack").Stack;
  const obj13 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  const Stack7 = require("Stack/Stack").Stack;
  items3 = [closure_10(Stack7, obj13), ];
  const obj14 = {
    children: closure_16.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items3[1] = closure_10(closure_5, obj14);
  items1[2] = closure_11(Stack6, obj12);
  const obj15 = { children: items4 };
  const Stack8 = require("Stack/Stack").Stack;
  const obj16 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  const Stack9 = require("Stack/Stack").Stack;
  items4 = [closure_10(Stack9, obj16), ];
  const obj17 = {
    children: closure_17.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items4[1] = closure_10(closure_5, obj17);
  items1[3] = closure_11(Stack8, obj15);
  const obj18 = { children: items6 };
  const Stack10 = require("Stack/Stack").Stack;
  const obj19 = { style: tmp.container, children: items5 };
  const Stack11 = require("Stack/Stack").Stack;
  items5 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  items6 = [closure_11(Stack11, obj19), ];
  const obj20 = {
    children: closure_14.map((variant) => {
      let items;
      let obj2;
      const obj = { style: items, children: authStore(ExampleButton, obj2) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_10(closure_5, obj20);
  items1[4] = closure_11(Stack10, obj18);
  const obj21 = { children: items8 };
  const Stack12 = require("Stack/Stack").Stack;
  const obj22 = { style: tmp.container, children: items7 };
  const Stack13 = require("Stack/Stack").Stack;
  items7 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  items8 = [closure_11(Stack13, obj22), ];
  const obj23 = { children: items9 };
  const obj24 = { style: tmp.buttonContainer, children: closure_10(Button, obj25) };
  obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md",
    icon: closure_10(Icon, obj26)
  };
  Button = require("components/Button/Button").Button;
  obj26 = { source: AssetRegistryDefault11 };
  Icon = require("components/Button/Button").Button.Icon;
  items9 = [closure_10(closure_5, obj24), ];
  const obj27 = { style: tmp.buttonContainer, children: closure_10(Button2, obj28) };
  obj28 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: closure_10(Icon2, obj29)
  };
  Button2 = require("components/Button/Button").Button;
  obj29 = { variant: "entity", source: AssetRegistryDefault4 };
  Icon2 = require("components/Button/Button").Button.Icon;
  items9[1] = closure_10(closure_5, obj27);
  items8[1] = closure_11(closure_5, obj23);
  items1[5] = closure_11(Stack12, obj21);
  const obj30 = { children: items10 };
  const Stack14 = require("Stack/Stack").Stack;
  const obj31 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  const Stack15 = require("Stack/Stack").Stack;
  items10 = [closure_10(Stack15, obj31), ];
  const obj32 = { children: items11 };
  const obj33 = { style: tmp.buttonContainer, children: closure_10(Button3, obj34) };
  obj34 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: AssetRegistryDefault11
  };
  Button3 = require("components/Button/Button").Button;
  items11 = [closure_10(closure_5, obj33), , , ];
  const obj35 = { style: tmp.buttonContainer, children: closure_10(Button4, obj36) };
  obj36 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: AssetRegistryDefault11,
    iconPosition: "end"
  };
  Button4 = require("components/Button/Button").Button;
  items11[1] = closure_10(closure_5, obj35);
  const obj37 = { style: tmp.buttonContainer, children: closure_10(require("components/Button/Button").Button, obj38) };
  obj38 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  items11[2] = closure_10(closure_5, obj37);
  const obj39 = { style: tmp.buttonContainer, children: closure_10(require("components/Button/Button").Button, obj40) };
  obj40 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  items11[3] = closure_10(closure_5, obj39);
  items10[1] = closure_11(closure_5, obj32);
  items1[6] = closure_11(Stack14, obj30);
  const obj41 = { children: items13 };
  const Stack16 = require("Stack/Stack").Stack;
  const obj42 = { style: tmp.container, children: items12 };
  const Stack17 = require("Stack/Stack").Stack;
  items12 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use ToggleButton for a controlled labeled toggle and ToggleIconButton for a controlled icon-only toggle. Use the lower-level toggle prop hooks when a custom control needs complete prop bags per state." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "These APIs apply the selected presentation and add the accessibility attributes required for a toggle button." })];
  items13 = [closure_11(Stack17, obj42), ];
  const obj43 = { children: items14 };
  items14 = [, , ];
  const obj44 = { style: tmp.buttonContainer, children: closure_10(ExampleToggleButton, {}) };
  items14[0] = closure_10(closure_5, obj44);
  const obj45 = { style: items15, children: items16 };
  items15 = [, ];
  ({ buttonContainer: arr16[0], toggleIconButtonRow: arr16[1] } = tmp);
  items16 = [closure_10(ExampleToggleIconButton, { variant: "default" }), closure_10(ExampleToggleIconButton, { variant: "critical" }), closure_10(ExampleToggleIconButton, { variant: "icon-only" })];
  items14[1] = closure_11(closure_5, obj45);
  const obj46 = { style: tmp.buttonContainer, children: closure_10(ExampleCustomIconToggleButton, {}) };
  items14[2] = closure_10(closure_5, obj46);
  items13[1] = closure_11(closure_5, obj43);
  items1[7] = closure_11(Stack16, obj41);
  const obj47 = { children: items18 };
  const Stack18 = require("Stack/Stack").Stack;
  const obj48 = { style: tmp.container, children: items17 };
  const Stack19 = require("Stack/Stack").Stack;
  items17 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  items18 = [closure_11(Stack19, obj48), ];
  const obj49 = {
    children: closure_13.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleIconButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items18[1] = closure_10(closure_5, obj49);
  items1[8] = closure_11(Stack18, obj47);
  const obj50 = { children: items19 };
  const Stack20 = require("Stack/Stack").Stack;
  const obj51 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  const Stack21 = require("Stack/Stack").Stack;
  items19 = [closure_10(Stack21, obj51), ];
  const obj52 = {
    children: closure_15.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(ExampleIconButton, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items19[1] = closure_10(closure_5, obj52);
  items1[9] = closure_11(Stack20, obj50);
  const obj53 = { children: items20 };
  const Stack22 = require("Stack/Stack").Stack;
  const obj54 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  const Stack23 = require("Stack/Stack").Stack;
  items20 = [closure_10(Stack23, obj54), ];
  const obj55 = {
    children: closure_14.map((variant) => {
      let items;
      let obj2;
      const obj = { style: items, children: authStore(ExampleIconButton, obj2) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items20[1] = closure_10(closure_5, obj55);
  items1[10] = closure_11(Stack22, obj53);
  const obj56 = { children: items22 };
  const Stack24 = require("Stack/Stack").Stack;
  const obj57 = { style: tmp.container, children: items21 };
  const Stack25 = require("Stack/Stack").Stack;
  items21 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  items22 = [closure_11(Stack25, obj57), ];
  const obj58 = { children: items24 };
  const obj59 = { style: items23, children: closure_10(ExampleImageButton, obj60) };
  items23 = [tmp.buttonContainer];
  obj60 = { image: AssetRegistryDefault7, label: "Telegram" };
  items24 = [closure_10(closure_5, obj59), , ];
  const obj61 = { style: items25, children: closure_10(ExampleImageButton, obj62) };
  items25 = [tmp.buttonContainer];
  obj62 = { image: AssetRegistryDefault9, label: "WhatsApp" };
  items24[1] = closure_10(closure_5, obj61);
  const obj63 = { style: items26, children: closure_10(ExampleImageButton, obj64) };
  items26 = [tmp.buttonContainer];
  obj64 = { image: AssetRegistryDefault8, label: "Twitter" };
  items24[2] = closure_10(closure_5, obj63);
  items22[1] = closure_11(closure_5, obj58);
  items1[11] = closure_11(Stack24, obj56);
  const obj65 = { spacing: 24, children: items28 };
  const Stack26 = require("Stack/Stack").Stack;
  const obj66 = { style: tmp.container, children: items27 };
  const Stack27 = require("Stack/Stack").Stack;
  items27 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  items28 = [closure_11(Stack27, obj66), , ];
  const obj67 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_10(Stack28, obj68) };
  obj68 = {
    direction: "horizontal",
    justify: "center",
    style: tmp.buttonContainer,
    children: closure_13.map((variant) => {
      const obj = { variant, showLabel: true };
      return closure_1_10(ExampleIconButton, obj, variant);
    })
  };
  Stack28 = require("Stack/Stack").Stack;
  items28[1] = closure_10(closure_6, obj67);
  const obj69 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack29, obj70) };
  obj70 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items29 };
  Stack29 = require("Stack/Stack").Stack;
  const obj71 = {
    variant: "secondary",
    icon: AssetRegistryDefault,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  let IconButton = require("IconButton").IconButton;
  items29 = [closure_10(IconButton, obj71), , ];
  const obj72 = {
    variant: "secondary",
    icon: AssetRegistryDefault,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const IconButton2 = require("IconButton").IconButton;
  items29[1] = closure_10(IconButton2, obj72);
  const obj73 = {
    variant: "secondary",
    icon: AssetRegistryDefault,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const IconButton3 = require("IconButton").IconButton;
  items29[2] = closure_10(IconButton3, obj73);
  items28[2] = closure_10(closure_6, obj69);
  items1[12] = closure_11(Stack26, obj65);
  const obj74 = { spacing: 24, children: items30 };
  const Stack30 = require("Stack/Stack").Stack;
  const obj75 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const Stack31 = require("Stack/Stack").Stack;
  items30 = [closure_10(Stack31, obj75), , ];
  const obj76 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack32, obj77) };
  obj77 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items31 };
  const obj78 = { image: AssetRegistryDefault6, label: "Label", showLabel: true };
  Stack32 = require("Stack/Stack").Stack;
  items31 = [closure_10(ExampleImageButton, obj78), , ];
  const obj79 = { image: AssetRegistryDefault4, label: "Label", showLabel: true };
  items31[1] = closure_10(ExampleImageButton, obj79);
  const obj80 = { image: AssetRegistryDefault5, label: "Label", showLabel: true };
  items31[2] = closure_10(ExampleImageButton, obj80);
  items30[1] = closure_10(closure_6, obj76);
  const obj81 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack33, obj82) };
  obj82 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items32 };
  const obj83 = { image: AssetRegistryDefault7, label: "Supercalifragilisticexpialidocious", showLabel: true };
  Stack33 = require("Stack/Stack").Stack;
  items32 = [closure_10(ExampleImageButton, obj83), , ];
  const obj84 = { image: AssetRegistryDefault9, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[1] = closure_10(ExampleImageButton, obj84);
  const obj85 = { image: AssetRegistryDefault8, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[2] = closure_10(ExampleImageButton, obj85);
  items30[2] = closure_10(closure_6, obj81);
  items1[13] = closure_11(Stack30, obj74);
  const obj86 = { spacing: 24, children: items33 };
  const Stack34 = require("Stack/Stack").Stack;
  const obj87 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const Stack35 = require("Stack/Stack").Stack;
  items33 = [closure_10(Stack35, obj87), ];
  const obj88 = { direction: "horizontal", style: tmp.container, children: items34 };
  const ButtonGroup = require("ButtonGroup").ButtonGroup;
  items34 = [closure_10(ExampleButton, { variant: "secondary", text: "Search", grow: true }), closure_10(ExampleIconButton, { variant: "secondary" })];
  items33[1] = closure_11(ButtonGroup, obj88);
  items1[14] = closure_11(Stack34, obj86);
  const obj89 = { children: items36 };
  const Stack36 = require("Stack/Stack").Stack;
  const obj90 = { style: tmp.container, children: items35 };
  const Stack37 = require("Stack/Stack").Stack;
  items35 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  items36 = [closure_11(Stack37, obj90), ];
  const obj91 = { theme: ThemeTypes.LIGHT, primaryColor: obj93.hex2int("#ffae70"), secondaryColor: obj94.hex2int("#cc2300"), children: closure_10(tmp3, obj92) };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  obj93 = require("utils/ColorUtils");
  obj94 = require("utils/ColorUtils");
  obj92 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: closure_10(Card, obj95) };
  obj95 = { children: closure_11(Stack38, obj96) };
  tmp3 = LinearGradientDefault;
  Card = require("Card/Card").Card;
  obj96 = { spacing: 16, children: items37 };
  Stack38 = require("Stack/Stack").Stack;
  items37 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    })
  ];
  items36[1] = closure_10(ThemeContextProvider, obj91);
  items1[15] = closure_11(Stack36, obj89);
  const obj97 = { children: items39 };
  const Stack39 = require("Stack/Stack").Stack;
  const obj98 = { style: tmp.container, children: items38 };
  const Stack40 = require("Stack/Stack").Stack;
  items38 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  items39 = [closure_11(Stack40, obj98), ];
  const obj99 = { theme: ThemeTypes.DARK, primaryColor: obj101.hex2int("#490000"), secondaryColor: obj102.hex2int("#cc2300"), children: closure_10(tmp4, obj100) };
  const ThemeContextProvider2 = require("native").ThemeContextProvider;
  obj101 = require("utils/ColorUtils");
  obj102 = require("utils/ColorUtils");
  obj100 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: closure_10(Card2, obj103) };
  obj103 = { children: closure_11(Stack41, obj104) };
  tmp4 = LinearGradientDefault;
  Card2 = require("Card/Card").Card;
  obj104 = { spacing: 16, children: items40 };
  Stack41 = require("Stack/Stack").Stack;
  items40 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    })
  ];
  items39[1] = closure_10(ThemeContextProvider2, obj99);
  items1[16] = closure_11(Stack39, obj97);
  const obj105 = { children: items42 };
  const Stack42 = require("Stack/Stack").Stack;
  const obj106 = { style: tmp.container, children: items41 };
  const Stack43 = require("Stack/Stack").Stack;
  items41 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  items42 = [closure_11(Stack43, obj106), ];
  const obj107 = { theme: closure_8[0].theme, gradient: closure_8[0], flags: obj109.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED), children: closure_11(closure_5, obj108) };
  const ThemeContextProvider3 = require("native").ThemeContextProvider;
  obj108 = { style: { position: "relative", padding: 16 }, children: items43 };
  items43 = [, ];
  obj109 = require("native");
  const obj110 = { absolute: true, gradient: closure_8[0] };
  items43[0] = closure_10(require("ThemedGradient").Gradient, obj110);
  const obj111 = { style: obj112, children: closure_11(Stack44, obj113) };
  obj112 = { backgroundColor: obj114.setColorOpacity("white", 0.7), padding: 16, borderRadius: 16 };
  obj113 = { spacing: 16, children: items44 };
  obj114 = require("native");
  Stack44 = require("Stack/Stack").Stack;
  items44 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    })
  ];
  items43[1] = closure_10(closure_5, obj111);
  items42[1] = closure_10(ThemeContextProvider3, obj107);
  items1[17] = closure_11(Stack42, obj105);
  const obj115 = { children: items46 };
  const Stack45 = require("Stack/Stack").Stack;
  const obj116 = { style: tmp.container, children: items45 };
  const Stack46 = require("Stack/Stack").Stack;
  items45 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  items46 = [closure_11(Stack46, obj116), ];
  const obj117 = { theme: closure_9[0].theme, gradient: closure_9[0], flags: obj119.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED), children: closure_11(closure_5, obj118) };
  const ThemeContextProvider4 = require("native").ThemeContextProvider;
  obj118 = { style: { position: "relative", padding: 16 }, children: items47 };
  items47 = [, ];
  obj119 = require("native");
  const obj120 = { absolute: true, gradient: closure_9[0] };
  items47[0] = closure_10(require("ThemedGradient").Gradient, obj120);
  const obj121 = { style: obj122, children: closure_11(Stack47, obj123) };
  obj122 = { backgroundColor: obj124.setColorOpacity("black", 0.7), padding: 16, borderRadius: 16 };
  obj123 = { spacing: 16, children: items48 };
  obj124 = require("native");
  Stack47 = require("Stack/Stack").Stack;
  items48 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(ExampleButton, obj, variant);
    })
  ];
  items47[1] = closure_10(closure_5, obj121);
  items46[1] = closure_10(ThemeContextProvider4, obj117);
  items1[18] = closure_11(Stack45, obj115);
  const obj125 = { children: items50 };
  const Stack48 = require("Stack/Stack").Stack;
  const obj126 = { style: tmp.container, children: items49 };
  const Stack49 = require("Stack/Stack").Stack;
  items49 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  items50 = [closure_11(Stack49, obj126), closure_10(closure_5, { style: { padding: 48 } })];
  items1[19] = closure_11(Stack48, obj125);
  items51 = [closure_10(closure_6, obj4), ];
  const obj127 = {
    icon: AssetRegistryDefault,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  };
  const FloatingActionButton = require("FloatingActionButton").FloatingActionButton;
  items51[1] = closure_10(FloatingActionButton, obj127);
  return closure_11(closure_12, obj3);
};
