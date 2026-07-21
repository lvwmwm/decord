// Module ID: 14295
// Function ID: 107953
// Name: ExampleButton
// Dependencies: []
// Exports: default

// Module 14295 (ExampleButton)
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
  const tmp = importDefault(closure_2[5])();
  const enableLoadingState = tmp.enableLoadingState;
  const arg1 = enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp);
  const importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  closure_2 = tmp2[1];
  const items = [enableLoadingState];
  const callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 5000);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    callback(true);
    closure_1.current = setTimeout(() => {
      callback(false);
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
    tmp6 = importDefault(closure_2[7]);
  }
  obj.icon = tmp6;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return closure_9(arg1(closure_2[6]).Button, obj);
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
  let arg1;
  let importDefault;
  let closure_2;
  let callback;
  const tmp = importDefault(closure_2[5])();
  const enableLoadingState = tmp.enableLoadingState;
  arg1 = enableLoadingState;
  ({ buttonSize, showDisabled } = tmp);
  importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
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
        callback(false);
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
    obj.icon = importDefault(closure_2[9]);
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
    obj.icon = importDefault(closure_2[9]);
    tmp7 = obj;
  }
  return closure_9(arg1(closure_2[8]).IconButton, tmp7);
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
  let arg1;
  let importDefault;
  let closure_2;
  let callback;
  const tmp = importDefault(closure_2[5])();
  const enableLoadingState = tmp.enableLoadingState;
  arg1 = enableLoadingState;
  ({ buttonSize, showDisabled } = tmp);
  importDefault = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
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
        callback(false);
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
  return closure_9(arg1(closure_2[10]).ImageButton, tmp5);
}
function ExampleToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp[1];
  let obj = arg1(dependencyMap[11]);
  obj = {};
  obj = { text: "Unfollow", icon: importDefault(dependencyMap[12]) };
  obj.on = obj;
  obj.off = { text: "Follow", icon: importDefault(dependencyMap[13]) };
  const toggleButtonProps = obj.useToggleButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleButtonProps);
  obj2["onPress"] = function onPress() {
    callback(!first);
  };
  obj2["variant"] = "secondary";
  obj2["size"] = "md";
  return callback2(arg1(dependencyMap[6]).Button, obj2);
}
function ExampleIconToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp[1];
  let obj = arg1(dependencyMap[11]);
  obj = {};
  obj = { "Bool(false)": 80410, "Bool(false)": 1984034657, icon: importDefault(dependencyMap[14]) };
  obj.on = obj;
  const obj1 = { "Bool(false)": false, "Bool(false)": false, icon: importDefault(dependencyMap[14]) };
  obj.off = obj1;
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj2["onPress"] = function onPress() {
    callback(!first);
  };
  obj2["size"] = "md";
  return callback2(arg1(dependencyMap[8]).IconButton, obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_7, DARK_BACKGROUND_GRADIENT_PRESETS: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
let closure_12 = [];
let closure_13 = [null, null];
let closure_14 = [true, true];
let closure_15 = [null];
let closure_16 = [];
let obj = arg1(dependencyMap[15]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[16]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.buttonContainer = { paddingHorizontal: importDefault(dependencyMap[16]).space.PX_16, paddingVertical: importDefault(dependencyMap[16]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[16]).space.PX_16, paddingVertical: importDefault(dependencyMap[16]).space.PX_8 };
obj.overlayButtonContainer = { backgroundColor: importDefault(dependencyMap[16]).unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: importDefault(dependencyMap[16]).space.PX_48 };
let closure_17 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[16]).unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: importDefault(dependencyMap[16]).space.PX_48 };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[17]);
  const navigation = obj.useNavigation();
  const importDefault = React.useCallback(() => {
    callback(paths[18]).openLazy(tmp(paths[20])(paths[19], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  obj = {
    headerRight() {
      const obj = { <string:523784712>: "text-lg/bold", <string:2925635169>: "Mixed Buttons Example", <string:1649013585>: "text-md/medium", <string:2925664643>: "text-subtle", <string:2050445697>: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout.", onPress: callback, icon: callback(closure_2[9]) };
      return callback2(tmp(closure_2[8]).IconButton, obj);
    }
  };
  navigation.setOptions(obj);
  obj = {};
  const obj1 = {};
  const obj2 = { spacing: 24 };
  const obj3 = {};
  const obj4 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": "r", "Null": "isArray" }) };
  const items = [
    callback2(arg1(dependencyMap[21]).Stack, obj4),
    callback2(closure_5, {
      children: closure_12.map((variant) => {
        let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
        obj = { variant };
        return callback2(closure_5, obj, variant);
      })
    })
  ];
  obj3.children = items;
  const items1 = [callback3(arg1(dependencyMap[21]).Stack, obj3), , , , , , , , , , , , , , , , , , , ];
  const obj6 = {};
  const obj7 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": true, "Null": true }) };
  const items2 = [callback2(arg1(dependencyMap[21]).Stack, obj7), ];
  const obj5 = {
    children: closure_12.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items2[1] = callback2(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj6.children = items2;
  items1[1] = callback3(arg1(dependencyMap[21]).Stack, obj6);
  const obj9 = {};
  const obj10 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": "r", "Null": "isArray" }) };
  const items3 = [callback2(arg1(dependencyMap[21]).Stack, obj10), ];
  const obj8 = {
    children: closure_14.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items3[1] = callback2(closure_5, {
    children: closure_15.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj9.children = items3;
  items1[2] = callback3(arg1(dependencyMap[21]).Stack, obj9);
  const obj12 = {};
  const obj13 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": "_handleGuildMembersChunkBatch", "Null": "<string:2794603008>" }) };
  const items4 = [callback2(arg1(dependencyMap[21]).Stack, obj13), ];
  const obj11 = {
    children: closure_15.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items4[1] = callback2(closure_5, {
    children: closure_16.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj12.children = items4;
  items1[3] = callback3(arg1(dependencyMap[21]).Stack, obj12);
  const obj15 = {};
  const obj16 = { style: tmp.container };
  const items5 = [callback2(arg1(dependencyMap[22]).Text, { "Null": false, "Null": false }), callback2(arg1(dependencyMap[22]).Text, { "Null": true, "Null": true })];
  obj16.children = items5;
  const items6 = [callback3(arg1(dependencyMap[21]).Stack, obj16), ];
  const obj14 = {
    children: closure_16.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_18, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items6[1] = callback2(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: items, children: callback2(closure_18, obj) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = tmp);
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj15.children = items6;
  items1[4] = callback3(arg1(dependencyMap[21]).Stack, obj15);
  const obj18 = {};
  const obj19 = { style: tmp.container };
  const items7 = [callback2(arg1(dependencyMap[22]).Text, { "Null": false, "Null": false }), callback2(arg1(dependencyMap[22]).Text, { "Null": true, "Null": true })];
  obj19.children = items7;
  const items8 = [callback3(arg1(dependencyMap[21]).Stack, obj19), ];
  const obj20 = {};
  const obj21 = { style: tmp.buttonContainer };
  const obj22 = {
    -9223372036854775808: "Array",
    0: "gradientTop",
    -9223372036854775808: "EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED",
    0: "removeReactionsForEmoji",
    onPress() {

    }
  };
  const obj23 = { source: importDefault(dependencyMap[23]) };
  obj22.icon = callback2(arg1(dependencyMap[6]).Button.Icon, obj23);
  obj21.children = callback2(arg1(dependencyMap[6]).Button, obj22);
  const items9 = [callback2(closure_5, obj21), ];
  const obj24 = { style: tmp.buttonContainer };
  const obj25 = {
    -9223372036854775808: "wumpus-snowglobe 43",
    0: 2,
    -9223372036854775808: 1,
    0: null,
    onPress() {

    }
  };
  const obj26 = { variant: "entity", source: importDefault(dependencyMap[24]) };
  obj25.icon = callback2(arg1(dependencyMap[6]).Button.Icon, obj26);
  obj24.children = callback2(arg1(dependencyMap[6]).Button, obj25);
  items9[1] = callback2(closure_5, obj24);
  obj20.children = items9;
  items8[1] = callback3(closure_5, obj20);
  obj18.children = items8;
  items1[5] = callback3(arg1(dependencyMap[21]).Stack, obj18);
  const obj27 = {};
  const obj28 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": "<string:1604950823>", "Null": false }) };
  const items10 = [callback2(arg1(dependencyMap[21]).Stack, obj28), ];
  const obj29 = {};
  const obj30 = { style: tmp.buttonContainer };
  const obj31 = {
    -9223372036854775808: 8,
    0: false,
    -9223372036854775808: "start",
    0: false,
    onPress() {

    },
    icon: importDefault(dependencyMap[23])
  };
  obj30.children = callback2(arg1(dependencyMap[6]).Button, obj31);
  const items11 = [callback2(closure_5, obj30), , , ];
  const obj32 = { style: tmp.buttonContainer };
  const obj33 = {
    9223372036854775807: 8,
    0: false,
    9223372036854775807: "start",
    0: false,
    0: false,
    9223372036854775807: true,
    onPress() {

    },
    icon: importDefault(dependencyMap[23])
  };
  obj32.children = callback2(arg1(dependencyMap[6]).Button, obj33);
  items11[1] = callback2(closure_5, obj32);
  const obj17 = {
    children: closure_13.map((variant) => {
      let obj = { style: items, children: callback2(closure_18, obj) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = tmp);
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  const obj35 = {
    -9223372036854775808: 8,
    0: false,
    -9223372036854775808: "start",
    0: false,
    onPress() {

    }
  };
  items11[2] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(arg1(dependencyMap[6]).Button, obj35) });
  const obj34 = { style: tmp.buttonContainer, children: callback2(arg1(dependencyMap[6]).Button, obj35) };
  items11[3] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(arg1(dependencyMap[6]).Button, obj37) });
  obj29.children = items11;
  items10[1] = callback3(closure_5, obj29);
  obj27.children = items10;
  items1[6] = callback3(arg1(dependencyMap[21]).Stack, obj27);
  const obj38 = {};
  const obj39 = { style: tmp.container };
  const items12 = [callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, {})];
  obj39.children = items12;
  const items13 = [callback3(arg1(dependencyMap[21]).Stack, obj39), ];
  const obj40 = {};
  const obj36 = { style: tmp.buttonContainer, children: callback2(arg1(dependencyMap[6]).Button, obj37) };
  const items14 = [callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) }), ];
  const obj41 = { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) };
  items14[1] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) });
  obj40.children = items14;
  items13[1] = callback3(closure_5, obj40);
  obj38.children = items13;
  items1[7] = callback3(arg1(dependencyMap[21]).Stack, obj38);
  const obj43 = {};
  const obj44 = { style: tmp.container };
  const items15 = [callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, { "Null": null, "Null": null }), callback2(arg1(dependencyMap[22]).Text, { "Null": -0.000000000000007107584598523223, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000160678068369081 })];
  obj44.children = items15;
  const items16 = [callback3(arg1(dependencyMap[21]).Stack, obj44), ];
  const obj42 = { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) };
  items16[1] = callback2(closure_5, {
    children: closure_12.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_19, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj43.children = items16;
  items1[8] = callback3(arg1(dependencyMap[21]).Stack, obj43);
  const obj46 = {};
  const obj47 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": -0.000000000000007107431656136684, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002348290892885714 }) };
  const items17 = [callback2(arg1(dependencyMap[21]).Stack, obj47), ];
  const obj45 = {
    children: closure_12.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_19, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items17[1] = callback2(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_19, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj46.children = items17;
  items1[9] = callback3(arg1(dependencyMap[21]).Stack, obj46);
  const obj49 = {};
  const obj50 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": -0.000000000000007108356616115086, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002441743670410286 }) };
  const items18 = [callback2(arg1(dependencyMap[21]).Stack, obj50), ];
  const obj48 = {
    children: closure_14.map((variant) => {
      let obj = { style: tmp.buttonContainer, children: callback2(closure_19, obj) };
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  items18[1] = callback2(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: items, children: callback2(closure_19, obj) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = tmp);
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  });
  obj49.children = items18;
  items1[10] = callback3(arg1(dependencyMap[21]).Stack, obj49);
  const obj52 = {};
  const obj53 = { style: tmp.container };
  const items19 = [callback2(arg1(dependencyMap[22]).Text, { "Null": 0.000000000000000000000000000000000000000000089721545515435, "Null": 563535081898017.6 }), callback2(arg1(dependencyMap[22]).Text, { "Null": 563535081898017.6, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000146245827967038 })];
  obj53.children = items19;
  const items20 = [callback3(arg1(dependencyMap[21]).Stack, obj53), ];
  const obj54 = {};
  const obj55 = { style: items21 };
  const items21 = [tmp.buttonContainer];
  const obj51 = {
    children: closure_13.map((variant) => {
      let obj = { style: items, children: callback2(closure_19, obj) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = tmp);
      obj = { variant };
      return callback2(closure_5, obj, variant);
    })
  };
  obj55.children = callback2(ExampleImageButton, { image: importDefault(dependencyMap[25]), label: "Telegram" });
  const items22 = [callback2(closure_5, obj55), , ];
  const obj57 = { style: items23 };
  const items23 = [tmp.buttonContainer];
  const obj56 = { image: importDefault(dependencyMap[25]), label: "Telegram" };
  obj57.children = callback2(ExampleImageButton, { image: importDefault(dependencyMap[26]), label: "WhatsApp" });
  items22[1] = callback2(closure_5, obj57);
  const obj59 = { style: items24 };
  const items24 = [tmp.buttonContainer];
  const obj58 = { image: importDefault(dependencyMap[26]), label: "WhatsApp" };
  obj59.children = callback2(ExampleImageButton, { image: importDefault(dependencyMap[27]), label: "Twitter" });
  items22[2] = callback2(closure_5, obj59);
  obj54.children = items22;
  items20[1] = callback3(closure_5, obj54);
  obj52.children = items20;
  items1[11] = callback3(arg1(dependencyMap[21]).Stack, obj52);
  const obj61 = { spacing: 24 };
  const obj62 = { style: tmp.container };
  const items25 = [callback2(arg1(dependencyMap[22]).Text, { "Null": "diversity", "Null": "Array" }), callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, { "Null": null, "Null": null })];
  obj62.children = items25;
  const items26 = [callback3(arg1(dependencyMap[21]).Stack, obj62), , ];
  const obj63 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj64 = { "Null": null, "Null": 8, style: tmp.buttonContainer, children: closure_12.map((variant) => callback2(closure_19, { variant, showLabel: true }, variant)) };
  obj63.children = callback2(arg1(dependencyMap[21]).Stack, obj64);
  items26[1] = callback2(closure_6, obj63);
  const obj65 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj66 = { "Null": null, "Null": 8, style: tmp.buttonContainer };
  const obj67 = {
    "Null": "Text & Images",
    "Null": "Automatically play GIFs when possible",
    "Null": true,
    "Null": null,
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  const items27 = [callback2(arg1(dependencyMap[8]).IconButton, obj67), , ];
  const obj68 = {
    "Null": "Text & Images",
    "Null": "Automatically play GIFs when possible",
    "Null": true,
    "Null": null,
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  items27[1] = callback2(arg1(dependencyMap[8]).IconButton, obj68);
  const obj69 = {
    "Null": "Text & Images",
    "Null": "Automatically play GIFs when possible",
    "Null": true,
    "Null": null,
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  items27[2] = callback2(arg1(dependencyMap[8]).IconButton, obj69);
  obj66.children = items27;
  obj65.children = callback3(arg1(dependencyMap[21]).Stack, obj66);
  items26[2] = callback2(closure_6, obj65);
  obj61.children = items26;
  items1[12] = callback3(arg1(dependencyMap[21]).Stack, obj61);
  const obj70 = { spacing: 24 };
  const obj71 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": "<string:1071513602>", "Null": "<string:3829596161>" }) };
  const items28 = [callback2(arg1(dependencyMap[21]).Stack, obj71), , ];
  const obj72 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj73 = { "Null": null, "Null": 8, style: tmp.buttonContainer };
  const obj74 = { image: importDefault(dependencyMap[28]) };
  const items29 = [callback2(ExampleImageButton, obj74), , ];
  const obj60 = { image: importDefault(dependencyMap[27]), label: "Twitter" };
  items29[1] = callback2(ExampleImageButton, { image: importDefault(dependencyMap[24]) });
  const obj75 = { image: importDefault(dependencyMap[24]) };
  items29[2] = callback2(ExampleImageButton, { image: importDefault(dependencyMap[29]) });
  obj73.children = items29;
  obj72.children = callback3(arg1(dependencyMap[21]).Stack, obj73);
  items28[1] = callback2(closure_6, obj72);
  const obj77 = { horizontal: true, contentContainerStyle: { minWidth: "100%" } };
  const obj78 = { "Null": null, "Null": 8, style: tmp.buttonContainer };
  const obj79 = { image: importDefault(dependencyMap[25]) };
  const items30 = [callback2(ExampleImageButton, obj79), , ];
  const obj76 = { image: importDefault(dependencyMap[29]) };
  items30[1] = callback2(ExampleImageButton, { image: importDefault(dependencyMap[26]) });
  const obj80 = { image: importDefault(dependencyMap[26]) };
  items30[2] = callback2(ExampleImageButton, { image: importDefault(dependencyMap[27]) });
  obj78.children = items30;
  obj77.children = callback3(arg1(dependencyMap[21]).Stack, obj78);
  items28[2] = callback2(closure_6, obj77);
  obj70.children = items28;
  items1[13] = callback3(arg1(dependencyMap[21]).Stack, obj70);
  const obj82 = { spacing: 24 };
  const obj83 = { style: tmp.container, children: callback2(arg1(dependencyMap[22]).Text, { "Null": true, "Null": true }) };
  const items31 = [callback2(arg1(dependencyMap[21]).Stack, obj83), ];
  const obj84 = { direction: "horizontal", style: tmp.container };
  const items32 = [callback2(ExampleButton, { body: "isArray", title: "mode", accessibilityRole: "registerAsset" }), callback2(ExampleIconButton, { variant: "secondary" })];
  obj84.children = items32;
  items31[1] = callback3(arg1(dependencyMap[30]).ButtonGroup, obj84);
  obj82.children = items31;
  items1[14] = callback3(arg1(dependencyMap[21]).Stack, obj82);
  const obj85 = {};
  const obj86 = { style: tmp.container };
  const items33 = [callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, { "Null": null, "Null": null })];
  obj86.children = items33;
  const items34 = [callback3(arg1(dependencyMap[21]).Stack, obj86), ];
  const obj87 = { theme: "light" };
  let obj91 = arg1(dependencyMap[32]);
  obj87.primaryColor = obj91.hex2int("#ffae70");
  let obj92 = arg1(dependencyMap[32]);
  obj87.secondaryColor = obj92.hex2int("#cc2300");
  const obj88 = { style: { padding: 16 }, start: { max: -536870861, guildId: -299892737 }, end: {}, colors: [1532035073, -1287372395] };
  const obj81 = { image: importDefault(dependencyMap[27]) };
  const obj89 = {};
  const obj90 = { spacing: 16 };
  const items35 = [closure_12.map((variant) => callback2(closure_18, { variant }, variant)), closure_14.map((variant) => callback2(closure_18, { variant }, variant))];
  obj90.children = items35;
  obj89.children = callback3(arg1(dependencyMap[21]).Stack, obj90);
  obj88.children = callback2(arg1(dependencyMap[34]).Card, obj89);
  obj87.children = callback2(importDefault(dependencyMap[33]), obj88);
  items34[1] = callback2(arg1(dependencyMap[31]).ThemeContextProvider, obj87);
  obj85.children = items34;
  items1[15] = callback3(arg1(dependencyMap[21]).Stack, obj85);
  obj91 = {};
  obj92 = { style: tmp.container };
  const items36 = [callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, {})];
  obj92.children = items36;
  const items37 = [callback3(arg1(dependencyMap[21]).Stack, obj92), ];
  const obj93 = { theme: "dark" };
  obj = arg1(dependencyMap[32]);
  obj93.primaryColor = obj.hex2int("#490000");
  obj = arg1(dependencyMap[32]);
  obj93.secondaryColor = obj.hex2int("#cc2300");
  obj = { style: { padding: 16 }, start: { max: -536870861, guildId: -299892737 }, end: {}, colors: [3328429877496736300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003391710318265841] };
  const tmp3 = importDefault(dependencyMap[33]);
  obj = {};
  obj = { spacing: 16 };
  const items38 = [closure_12.map((variant) => callback2(closure_18, { variant }, variant)), closure_14.map((variant) => callback2(closure_18, { variant }, variant))];
  obj.children = items38;
  obj.children = callback3(arg1(dependencyMap[21]).Stack, obj);
  obj.children = callback2(arg1(dependencyMap[34]).Card, obj);
  obj93.children = callback2(importDefault(dependencyMap[33]), obj);
  items37[1] = callback2(arg1(dependencyMap[31]).ThemeContextProvider, obj93);
  obj91.children = items37;
  items1[16] = callback3(arg1(dependencyMap[21]).Stack, obj91);
  obj = {};
  obj = { style: tmp.container };
  const items39 = [callback2(arg1(dependencyMap[22]).Text, { "Null": null, "Null": null }), callback2(arg1(dependencyMap[22]).Text, { "Null": "text-subtle", "Null": "By default, stacks buttons vertically. This is best for buttons with text." })];
  obj.children = items39;
  const items40 = [callback3(arg1(dependencyMap[21]).Stack, obj), ];
  obj = { theme: closure_7[0].theme, gradient: closure_7[0] };
  obj = arg1(dependencyMap[31]);
  obj.flags = obj.setThemeFlag(0, arg1(dependencyMap[31]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  obj = { style: { "Null": "Agree", "Null": "primary" } };
  obj = { absolute: true, gradient: closure_7[0] };
  const items41 = [callback2(arg1(dependencyMap[35]).Gradient, obj), ];
  obj = {};
  obj = {};
  obj = arg1(dependencyMap[31]);
  obj.backgroundColor = obj.setColorOpacity("white", 0.7);
  obj.style = obj;
  obj = { spacing: 16 };
  const items42 = [closure_12.map((variant) => callback2(closure_18, { variant }, variant)), closure_14.map((variant) => callback2(closure_18, { variant }, variant))];
  obj.children = items42;
  obj.children = callback3(arg1(dependencyMap[21]).Stack, obj);
  items41[1] = callback2(closure_5, obj);
  obj.children = items41;
  obj.children = callback3(closure_5, obj);
  items40[1] = callback2(arg1(dependencyMap[31]).ThemeContextProvider, obj);
  obj.children = items40;
  items1[17] = callback3(arg1(dependencyMap[21]).Stack, obj);
  obj = {};
  obj = { style: tmp.container };
  const items43 = [callback2(arg1(dependencyMap[22]).Text, { "Null": null, "Null": "Primary Row Button" }), callback2(arg1(dependencyMap[22]).Text, {})];
  obj.children = items43;
  const items44 = [callback3(arg1(dependencyMap[21]).Stack, obj), ];
  obj = { theme: closure_8[0].theme, gradient: closure_8[0] };
  obj = arg1(dependencyMap[31]);
  obj.flags = obj.setThemeFlag(0, arg1(dependencyMap[31]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  obj = { style: { "Null": "Agree", "Null": "primary" } };
  obj = { absolute: true, gradient: closure_8[0] };
  const items45 = [callback2(arg1(dependencyMap[35]).Gradient, obj), ];
  obj = {};
  obj = {};
  obj = arg1(dependencyMap[31]);
  obj.backgroundColor = obj.setColorOpacity("black", 0.7);
  obj.style = obj;
  obj = { spacing: 16 };
  const items46 = [closure_12.map((variant) => callback2(closure_18, { variant }, variant)), closure_14.map((variant) => callback2(closure_18, { variant }, variant))];
  obj.children = items46;
  obj.children = callback3(arg1(dependencyMap[21]).Stack, obj);
  items45[1] = callback2(closure_5, obj);
  obj.children = items45;
  obj.children = callback3(closure_5, obj);
  items44[1] = callback2(arg1(dependencyMap[31]).ThemeContextProvider, obj);
  obj.children = items44;
  items1[18] = callback3(arg1(dependencyMap[21]).Stack, obj);
  obj = {};
  obj = { style: tmp.container };
  const items47 = [callback2(arg1(dependencyMap[22]).Text, {}), callback2(arg1(dependencyMap[22]).Text, { "Null": "Array", "Null": "MAX_FILE_SIZE_250_MB" })];
  obj.children = items47;
  const items48 = [callback3(arg1(dependencyMap[21]).Stack, obj), callback2(closure_5, { style: { padding: 48 } })];
  obj.children = items48;
  items1[19] = callback3(arg1(dependencyMap[21]).Stack, obj);
  obj2.children = items1;
  obj1.children = callback3(arg1(dependencyMap[21]).Stack, obj2);
  const items49 = [callback2(closure_6, obj1), ];
  obj = {
    icon: importDefault(dependencyMap[9]),
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  };
  items49[1] = callback2(arg1(dependencyMap[36]).FloatingActionButton, obj);
  obj.children = items49;
  return callback3(closure_11, obj);
};
