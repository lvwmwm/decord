// Module ID: 14470
// Function ID: 110504
// Name: ExampleButton
// Dependencies: [57, 31, 27, 3943, 33, 14471, 4543, 14472, 7533, 5792, 12223, 13129, 10233, 7727, 8914, 4130, 689, 1456, 4098, 14473, 1934, 4541, 4126, 9704, 12214, 12219, 12221, 12220, 12218, 12217, 4965, 3842, 665, 4554, 5167, 4662, 8423, 2]
// Exports: default

// Module 14470 (ExampleButton)
import _slicedToArray from "_slicedToArray";
import ManaContext from "ManaContext";
import get_ActivityIndicator from "registerAsset";
import items1 from "items1";
import jsxProd from "LinearGradient";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function ExampleButton(arg0) {
  let buttonScale;
  let buttonSize;
  let grow;
  let iconPosition;
  let showDisabled;
  let showIcon;
  let text;
  let variant;
  ({ variant, text, grow } = arg0);
  const tmp = importDefault(14471)();
  const enableLoadingState = tmp.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp);
  importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const dependencyMap = tmp2[1];
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        outer1_2(false);
      }, 5000);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    callback(true);
    closure_1.current = setTimeout(() => {
      outer1_2(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: tmp2[0], variant };
  if (null != text) {
    variant = text;
  }
  let str = "";
  if (null != variant) {
    str = variant;
  }
  obj.text = str;
  obj.grow = null != grow && grow;
  obj.size = buttonSize;
  let tmp6;
  if (showIcon) {
    tmp6 = importDefault(14472);
  }
  obj.icon = tmp6;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return closure_9(enableLoadingState(4543).Button, obj);
}
function ExampleIconButton(arg0) {
  let buttonSize;
  let showDisabled;
  let showLabel;
  let variant;
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  let enableLoadingState;
  let importDefault;
  let dependencyMap;
  let callback;
  const tmp = importDefault(14471)();
  enableLoadingState = tmp.enableLoadingState;
  ({ buttonSize, showDisabled } = tmp);
  importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        outer1_2(false);
      }, 5000);
    }
  }, items);
  const obj = { disabled: showDisabled };
  if (showLabel) {
    obj.onPress = function onPress() {
      return callback2();
    };
    let str2 = "";
    if (null != variant) {
      str2 = variant;
    }
    obj.label = str2;
    obj.grow = true;
    obj.loading = first;
    obj.variant = variant;
    obj.icon = importDefault(5792);
    let tmp7 = obj;
  } else {
    obj.onPress = function onPress() {
      return callback2();
    };
    let str = "";
    if (null != variant) {
      str = variant;
    }
    obj.accessibilityLabel = str;
    obj.loading = first;
    obj.variant = variant;
    obj.size = buttonSize;
    obj.icon = importDefault(5792);
    tmp7 = obj;
  }
  return closure_9(enableLoadingState(7533).IconButton, tmp7);
}
function ExampleImageButton(arg0) {
  let buttonSize;
  let image;
  let label;
  let showDisabled;
  let showLabel;
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  let enableLoadingState;
  let importDefault;
  let dependencyMap;
  let callback;
  const tmp = importDefault(14471)();
  enableLoadingState = tmp.enableLoadingState;
  ({ buttonSize, showDisabled } = tmp);
  importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        outer1_2(false);
      }, 5000);
    }
  }, items);
  const obj = { disabled: showDisabled };
  if (showLabel) {
    obj.onPress = function onPress() {
      return callback2();
    };
    obj.label = label;
    obj.grow = true;
    obj.loading = first;
    obj.image = image;
    let tmp5 = obj;
  } else {
    obj.onPress = function onPress() {
      return callback2();
    };
    obj.accessibilityLabel = label;
    obj.loading = first;
    obj.size = buttonSize;
    obj.image = image;
    tmp5 = obj;
  }
  return closure_9(enableLoadingState(12223).ImageButton, tmp5);
}
function ExampleToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  let obj = first(13129);
  obj = {};
  obj = { text: "Unfollow", icon: importDefault(10233) };
  obj.on = obj;
  obj.off = { text: "Follow", icon: importDefault(7727) };
  const toggleButtonProps = obj.useToggleButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleButtonProps);
  obj2["onPress"] = function onPress() {
    callback(!first);
  };
  obj2["variant"] = "secondary";
  obj2["size"] = "md";
  return callback2(first(4543).Button, obj2);
}
function ExampleIconToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  let obj = first(13129);
  obj = {};
  obj = { variant: "destructive", accessibilityLabel: "Mute", icon: importDefault(8914) };
  obj.on = obj;
  const obj1 = { variant: "secondary", accessibilityLabel: "Mute", icon: importDefault(8914) };
  obj.off = obj1;
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj2["onPress"] = function onPress() {
    callback(!first);
  };
  obj2["size"] = "md";
  return callback2(first(7533).IconButton, obj2);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_7, DARK_BACKGROUND_GRADIENT_PRESETS: closure_8 } = items1);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = ["primary", "secondary", "tertiary"];
let closure_13 = ["primary-overlay", "secondary-overlay"];
let closure_14 = ["destructive", "active"];
let closure_15 = ["expressive"];
let closure_16 = ["experimental_premium-primary", "experimental_premium-secondary"];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.overlayButtonContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_48 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const importDefault = React.useCallback(() => {
    callback(outer1_2[18]).openLazy(tmp(outer1_2[20])(outer1_2[19], outer1_2.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  obj = {
    headerRight() {
      const obj = { onPress: callback, icon: callback(outer1_2[9]), size: "sm", variant: "secondary", accessibilityLabel: "Settings" };
      return outer1_9(tmp(outer1_2[8]).IconButton, obj);
    }
  };
  navigation.setOptions(obj);
  obj = {};
  const obj1 = {};
  const obj2 = { spacing: 24 };
  const obj3 = {};
  const obj4 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  let items = [
    callback2(require(4541) /* Stack */.Stack, obj4),
    callback2(closure_5, {
      children: closure_12.map((variant) => {
        obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
        obj = { variant };
        return outer1_9(outer1_5, obj, variant);
      })
    })
  ];
  obj3.children = items;
  const items1 = [callback3(require(4541) /* Stack */.Stack, obj3), , , , , , , , , , , , , , , , , , , ];
  const obj6 = {};
  const obj7 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  const items2 = [callback2(require(4541) /* Stack */.Stack, obj7), ];
  const obj5 = {
    children: closure_12.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items2[1] = callback2(closure_5, {
    children: closure_14.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj6.children = items2;
  items1[1] = callback3(require(4541) /* Stack */.Stack, obj6);
  const obj9 = {};
  const obj10 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  const items3 = [callback2(require(4541) /* Stack */.Stack, obj10), ];
  const obj8 = {
    children: closure_14.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items3[1] = callback2(closure_5, {
    children: closure_15.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj9.children = items3;
  items1[2] = callback3(require(4541) /* Stack */.Stack, obj9);
  const obj12 = {};
  const obj13 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  const items4 = [callback2(require(4541) /* Stack */.Stack, obj13), ];
  const obj11 = {
    children: closure_15.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items4[1] = callback2(closure_5, {
    children: closure_16.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj12.children = items4;
  items1[3] = callback3(require(4541) /* Stack */.Stack, obj12);
  const obj15 = {};
  const obj16 = { style: tmp.container };
  const items5 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj16.children = items5;
  const items6 = [callback3(require(4541) /* Stack */.Stack, obj16), ];
  const obj14 = {
    children: closure_16.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_18, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items6[1] = callback2(closure_5, {
    children: closure_13.map((variant) => {
      obj = { style: items, children: outer1_9(outer1_18, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj15.children = items6;
  items1[4] = callback3(require(4541) /* Stack */.Stack, obj15);
  const obj18 = {};
  const obj19 = { style: tmp.container };
  const items7 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Custom color icons" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj19.children = items7;
  const items8 = [callback3(require(4541) /* Stack */.Stack, obj19), ];
  const obj20 = {};
  const obj21 = { style: tmp.buttonContainer };
  const obj22 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md"
  };
  const obj23 = { source: importDefault(9704) };
  obj22.icon = callback2(require(4543) /* Button */.Button.Icon, obj23);
  obj21.children = callback2(require(4543) /* Button */.Button, obj22);
  const items9 = [callback2(closure_5, obj21), ];
  const obj24 = { style: tmp.buttonContainer };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md"
  };
  const obj26 = { variant: "entity", source: importDefault(12214) };
  obj25.icon = callback2(require(4543) /* Button */.Button.Icon, obj26);
  obj24.children = callback2(require(4543) /* Button */.Button, obj25);
  items9[1] = callback2(closure_5, obj24);
  obj20.children = items9;
  items8[1] = callback3(closure_5, obj20);
  obj18.children = items8;
  items1[5] = callback3(require(4541) /* Stack */.Stack, obj18);
  const obj27 = {};
  const obj28 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  const items10 = [callback2(require(4541) /* Stack */.Stack, obj28), ];
  const obj29 = {};
  const obj30 = { style: tmp.buttonContainer };
  const obj31 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: importDefault(9704)
  };
  obj30.children = callback2(require(4543) /* Button */.Button, obj31);
  const items11 = [callback2(closure_5, obj30), , , ];
  const obj32 = { style: tmp.buttonContainer };
  const obj33 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: importDefault(9704),
    iconPosition: "end"
  };
  obj32.children = callback2(require(4543) /* Button */.Button, obj33);
  items11[1] = callback2(closure_5, obj32);
  const obj17 = {
    children: closure_13.map((variant) => {
      obj = { style: items, children: outer1_9(outer1_18, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  const obj35 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  items11[2] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(require(4543) /* Button */.Button, obj35) });
  const obj34 = { style: tmp.buttonContainer, children: callback2(require(4543) /* Button */.Button, obj35) };
  const obj37 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  items11[3] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(require(4543) /* Button */.Button, obj37) });
  obj29.children = items11;
  items10[1] = callback3(closure_5, obj29);
  obj27.children = items10;
  items1[6] = callback3(require(4541) /* Stack */.Stack, obj27);
  const obj38 = {};
  const obj39 = { style: tmp.container };
  const items12 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Toggling button states" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states." }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "This hook changes the button presentation and adds some important accessibility attributes for a toggle button." })];
  obj39.children = items12;
  const items13 = [callback3(require(4541) /* Stack */.Stack, obj39), ];
  const obj40 = {};
  const obj36 = { style: tmp.buttonContainer, children: callback2(require(4543) /* Button */.Button, obj37) };
  const items14 = [callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) }), ];
  const obj41 = { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) };
  items14[1] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) });
  obj40.children = items14;
  items13[1] = callback3(closure_5, obj40);
  obj38.children = items13;
  items1[7] = callback3(require(4541) /* Stack */.Stack, obj38);
  const obj43 = {};
  const obj44 = { style: tmp.container };
  const items15 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj44.children = items15;
  const items16 = [callback3(require(4541) /* Stack */.Stack, obj44), ];
  const obj42 = { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) };
  items16[1] = callback2(closure_5, {
    children: closure_12.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_19, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj43.children = items16;
  items1[8] = callback3(require(4541) /* Stack */.Stack, obj43);
  const obj46 = {};
  const obj47 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  const items17 = [callback2(require(4541) /* Stack */.Stack, obj47), ];
  const obj45 = {
    children: closure_12.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_19, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items17[1] = callback2(closure_5, {
    children: closure_14.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_19, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj46.children = items17;
  items1[9] = callback3(require(4541) /* Stack */.Stack, obj46);
  const obj49 = {};
  const obj50 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  const items18 = [callback2(require(4541) /* Stack */.Stack, obj50), ];
  const obj48 = {
    children: closure_14.map((variant) => {
      obj = { style: tmp.buttonContainer, children: outer1_9(outer1_19, obj) };
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  items18[1] = callback2(closure_5, {
    children: closure_13.map((variant) => {
      obj = { style: items, children: outer1_9(outer1_19, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  });
  obj49.children = items18;
  items1[10] = callback3(require(4541) /* Stack */.Stack, obj49);
  const obj52 = {};
  const obj53 = { style: tmp.container };
  const items19 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Image buttons" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj53.children = items19;
  const items20 = [callback3(require(4541) /* Stack */.Stack, obj53), ];
  const obj54 = {};
  const obj55 = { style: items21 };
  items21 = [tmp.buttonContainer];
  const obj51 = {
    children: closure_13.map((variant) => {
      obj = { style: items, children: outer1_9(outer1_19, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant };
      return outer1_9(outer1_5, obj, variant);
    })
  };
  obj55.children = callback2(ExampleImageButton, { image: importDefault(12219), label: "Telegram" });
  const items22 = [callback2(closure_5, obj55), , ];
  const obj57 = { style: items23 };
  items23 = [tmp.buttonContainer];
  const obj56 = { image: importDefault(12219), label: "Telegram" };
  obj57.children = callback2(ExampleImageButton, { image: importDefault(12221), label: "WhatsApp" });
  items22[1] = callback2(closure_5, obj57);
  const obj59 = { style: items24 };
  items24 = [tmp.buttonContainer];
  const obj58 = { image: importDefault(12221), label: "WhatsApp" };
  obj59.children = callback2(ExampleImageButton, { image: importDefault(12220), label: "Twitter" });
  items22[2] = callback2(closure_5, obj59);
  obj54.children = items22;
  items20[1] = callback3(closure_5, obj54);
  obj52.children = items20;
  items1[11] = callback3(require(4541) /* Stack */.Stack, obj52);
  const obj61 = { spacing: 24 };
  const obj62 = { style: tmp.container };
  const items25 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj62.children = items25;
  const items26 = [callback3(require(4541) /* Stack */.Stack, obj62), , ];
  const obj63 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj64 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((variant) => outer1_9(outer1_19, { variant, showLabel: true }, variant)) };
  obj63.children = callback2(require(4541) /* Stack */.Stack, obj64);
  items26[1] = callback2(closure_6, obj63);
  const obj65 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj66 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer };
  const obj67 = {
    variant: "secondary",
    icon: importDefault(5792),
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items27 = [callback2(require(7533) /* IconButton */.IconButton, obj67), , ];
  const obj68 = {
    variant: "secondary",
    icon: importDefault(5792),
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[1] = callback2(require(7533) /* IconButton */.IconButton, obj68);
  const obj69 = {
    variant: "secondary",
    icon: importDefault(5792),
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[2] = callback2(require(7533) /* IconButton */.IconButton, obj69);
  obj66.children = items27;
  obj65.children = callback3(require(4541) /* Stack */.Stack, obj66);
  items26[2] = callback2(closure_6, obj65);
  obj61.children = items26;
  items1[12] = callback3(require(4541) /* Stack */.Stack, obj61);
  const obj70 = { spacing: 24 };
  const obj71 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items28 = [callback2(require(4541) /* Stack */.Stack, obj71), , ];
  const obj72 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj73 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer };
  const obj74 = { image: importDefault(12218), label: "Label", showLabel: true };
  const items29 = [callback2(ExampleImageButton, obj74), , ];
  const obj75 = { image: importDefault(12214), label: "Label", showLabel: true };
  items29[1] = callback2(ExampleImageButton, obj75);
  const obj76 = { image: importDefault(12217), label: "Label", showLabel: true };
  items29[2] = callback2(ExampleImageButton, obj76);
  obj73.children = items29;
  obj72.children = callback3(require(4541) /* Stack */.Stack, obj73);
  items28[1] = callback2(closure_6, obj72);
  const obj77 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj78 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer };
  const obj79 = { image: importDefault(12219), label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items30 = [callback2(ExampleImageButton, obj79), , ];
  const obj80 = { image: importDefault(12221), label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[1] = callback2(ExampleImageButton, obj80);
  const obj81 = { image: importDefault(12220), label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[2] = callback2(ExampleImageButton, obj81);
  obj78.children = items30;
  obj77.children = callback3(require(4541) /* Stack */.Stack, obj78);
  items28[2] = callback2(closure_6, obj77);
  obj70.children = items28;
  items1[13] = callback3(require(4541) /* Stack */.Stack, obj70);
  const obj82 = { spacing: 24 };
  const obj83 = { style: tmp.container, children: callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const items31 = [callback2(require(4541) /* Stack */.Stack, obj83), ];
  const obj84 = { direction: "horizontal", style: tmp.container };
  const items32 = [callback2(ExampleButton, { variant: "secondary", text: "Search", grow: true }), callback2(ExampleIconButton, { variant: "secondary" })];
  obj84.children = items32;
  items31[1] = callback3(require(4965) /* ButtonGroup */.ButtonGroup, obj84);
  obj82.children = items31;
  items1[14] = callback3(require(4541) /* Stack */.Stack, obj82);
  const obj85 = {};
  const obj86 = { style: tmp.container };
  const items33 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj86.children = items33;
  const items34 = [callback3(require(4541) /* Stack */.Stack, obj86), ];
  const obj87 = { theme: "light" };
  let obj91 = require(665) /* pad2 */;
  obj87.primaryColor = obj91.hex2int("#ffae70");
  let obj92 = require(665) /* pad2 */;
  obj87.secondaryColor = obj92.hex2int("#cc2300");
  const obj88 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"] };
  const obj60 = { image: importDefault(12220), label: "Twitter" };
  const obj89 = {};
  const obj90 = { spacing: 16 };
  const items35 = [closure_12.map((variant) => outer1_9(outer1_18, { variant }, variant)), closure_14.map((variant) => outer1_9(outer1_18, { variant }, variant))];
  obj90.children = items35;
  obj89.children = callback3(require(4541) /* Stack */.Stack, obj90);
  obj88.children = callback2(require(5167) /* getCardBackgroundToken */.Card, obj89);
  obj87.children = callback2(importDefault(4554), obj88);
  items34[1] = callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj87);
  obj85.children = items34;
  items1[15] = callback3(require(4541) /* Stack */.Stack, obj85);
  obj91 = {};
  obj92 = { style: tmp.container };
  const items36 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj92.children = items36;
  const items37 = [callback3(require(4541) /* Stack */.Stack, obj92), ];
  const obj93 = { theme: "dark" };
  obj = require(665) /* pad2 */;
  obj93.primaryColor = obj.hex2int("#490000");
  obj = require(665) /* pad2 */;
  obj93.secondaryColor = obj.hex2int("#cc2300");
  obj = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"] };
  const tmp3 = importDefault(4554);
  obj = {};
  obj = { spacing: 16 };
  const items38 = [closure_12.map((variant) => outer1_9(outer1_18, { variant }, variant)), closure_14.map((variant) => outer1_9(outer1_18, { variant }, variant))];
  obj.children = items38;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  obj.children = callback2(require(5167) /* getCardBackgroundToken */.Card, obj);
  obj93.children = callback2(importDefault(4554), obj);
  items37[1] = callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj93);
  obj91.children = items37;
  items1[16] = callback3(require(4541) /* Stack */.Stack, obj91);
  obj = {};
  obj = { style: tmp.container };
  const items39 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj.children = items39;
  const items40 = [callback3(require(4541) /* Stack */.Stack, obj), ];
  obj = { theme: 57.theme, gradient: 57 };
  obj = require(3842) /* ManaContext */;
  obj.flags = obj.setThemeFlag(0, require(3842) /* ManaContext */.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  obj = { style: { position: "relative", padding: 16 } };
  obj = { absolute: true, gradient: 57 };
  const items41 = [callback2(require(4662) /* getThemeMixColor */.Gradient, obj), ];
  obj = {};
  obj = { backgroundColor: null, padding: 16, borderRadius: 16 };
  obj = require(3842) /* ManaContext */;
  obj.backgroundColor = obj.setColorOpacity("white", 0.7);
  obj.style = obj;
  obj = { spacing: 16 };
  const items42 = [closure_12.map((variant) => outer1_9(outer1_18, { variant }, variant)), closure_14.map((variant) => outer1_9(outer1_18, { variant }, variant))];
  obj.children = items42;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  items41[1] = callback2(closure_5, obj);
  obj.children = items41;
  obj.children = callback3(closure_5, obj);
  items40[1] = callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj);
  obj.children = items40;
  items1[17] = callback3(require(4541) /* Stack */.Stack, obj);
  obj = {};
  obj = { style: tmp.container };
  const items43 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj.children = items43;
  const items44 = [callback3(require(4541) /* Stack */.Stack, obj), ];
  obj = { theme: 57.theme, gradient: 57 };
  obj = require(3842) /* ManaContext */;
  obj.flags = obj.setThemeFlag(0, require(3842) /* ManaContext */.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  obj = { style: { position: "relative", padding: 16 } };
  obj = { absolute: true, gradient: 57 };
  const items45 = [callback2(require(4662) /* getThemeMixColor */.Gradient, obj), ];
  obj = {};
  obj = { backgroundColor: null, padding: 16, borderRadius: 16 };
  obj = require(3842) /* ManaContext */;
  obj.backgroundColor = obj.setColorOpacity("black", 0.7);
  obj.style = obj;
  obj = { spacing: 16 };
  const items46 = [closure_12.map((variant) => outer1_9(outer1_18, { variant }, variant)), closure_14.map((variant) => outer1_9(outer1_18, { variant }, variant))];
  obj.children = items46;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  items45[1] = callback2(closure_5, obj);
  obj.children = items45;
  obj.children = callback3(closure_5, obj);
  items44[1] = callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj);
  obj.children = items44;
  items1[18] = callback3(require(4541) /* Stack */.Stack, obj);
  obj = {};
  obj = { style: tmp.container };
  const items47 = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj.children = items47;
  const items48 = [callback3(require(4541) /* Stack */.Stack, obj), callback2(closure_5, { style: { padding: 48 } })];
  obj.children = items48;
  items1[19] = callback3(require(4541) /* Stack */.Stack, obj);
  obj2.children = items1;
  obj1.children = callback3(require(4541) /* Stack */.Stack, obj2);
  const items49 = [callback2(closure_6, obj1), ];
  obj = {
    icon: importDefault(5792),
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  };
  items49[1] = callback2(require(8423) /* styles */.FloatingActionButton, obj);
  obj.children = items49;
  return callback3(closure_11, obj);
};
