// Module ID: 11080
// Function ID: 86154
// Name: sharedClientThemeToThemeSettings
// Dependencies: []
// Exports: default

// Module 11080 (sharedClientThemeToThemeSettings)
function sharedClientThemeToThemeSettings(sharedClientTheme) {
  if (undefined !== sharedClientTheme) {
    const obj = {};
    const colors = sharedClientTheme.colors;
    obj.colors = colors.map((arg0) => "#" + arg0);
    obj.gradientColorStops = [];
    ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
    return obj;
  }
}
function PrimaryActionButton(onPressApply) {
  const tmp = callback6();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    obj = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj.text = intl2.string(arg1(dependencyMap[14]).t.pj0XBN);
    obj.onPress = function onPressSubscribe() {
      const obj = { premiumType: TIER_2.TIER_2 };
      const items = [callback(closure_2[22]).SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      callback(closure_2[21])(obj);
    };
    obj.renderIcon = function renderIcon() {
      const style = [tmp.nitroWheelButton];
      return callback2(tmp(closure_2[23]).NitroWheel, { style });
    };
    obj.style = tmp.getNitroButton;
    let tmp6 = callback4(arg1(dependencyMap[23]).ShinyButton, obj);
  } else {
    obj = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj.text = intl.string(arg1(dependencyMap[14]).t.1Qm822);
    obj.onPress = onPressApply.onPressApply;
    obj.variant = "primary";
    tmp6 = callback4(arg1(dependencyMap[18]).Button, obj);
  }
  return tmp6;
}
function getBaseThemeFromSharedClientTheme(sharedClientTheme) {
  if (undefined !== sharedClientTheme) {
    return arg1(dependencyMap[24]).getBaseTheme(sharedClientTheme.base_theme);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ useEffect: closure_5, useLayoutEffect: closure_6, useRef: closure_7 } = arg1(dependencyMap[1]));
const View = arg1(dependencyMap[2]).View;
let closure_9 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const PremiumTypes = arg1(dependencyMap[5]).PremiumTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { contentWrapper: { width: null, marginHorizontal: null }, centeredText: { textAlign: "center" }, ctaContainer: {}, nitroWheelButton: {} };
obj = { borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.getNitroButton = obj;
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  const sharedClientTheme = message.message.sharedClientTheme;
  const arg1 = sharedClientTheme;
  const tmp = callback6();
  const tmp2 = callback3(null);
  const importDefault = tmp2;
  const tmp3 = callback(React.useState(sharedClientThemeToThemeSettings(sharedClientTheme)), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  const callback = tmp3[1];
  const tmp5 = callback(React.useState(getBaseThemeFromSharedClientTheme(sharedClientTheme)), 2);
  const first1 = tmp5[0];
  const React = first1;
  const callback2 = tmp5[1];
  const tmp7 = callback(React.useState(false), 2);
  const first2 = tmp7[0];
  const callback3 = tmp7[1];
  const ref = React.useRef(true);
  const View = ref;
  const items = [sharedClientTheme];
  callback2(() => {
    callback(callback4(sharedClientTheme));
    const tmp2 = callback2(callback5(sharedClientTheme));
    callback2(callback5(sharedClientTheme))(first[9]).track(constants.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [first, first1];
  callback2(() => {
    let tmp = undefined !== first;
    if (tmp) {
      tmp = undefined !== first1;
    }
    if (tmp) {
      let obj = sharedClientTheme(first[10]);
      obj = { baseTheme: first1, customTheme: first };
      obj.previewCustomTheme(obj);
      sharedClientTheme(first[11]).refreshTheme();
      const obj3 = sharedClientTheme(first[11]);
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  callback2(() => () => {
    if (ref.current) {
      callback(closure_2[10]).clearPreviewTheme();
      const obj = callback(closure_2[10]);
      callback(closure_2[11]).refreshTheme();
      const obj2 = callback(closure_2[11]);
    }
  }, items3);
  let obj = { ref: tmp2, backdropOpacity: 0 };
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(importDefault(dependencyMap[15]).3ej1LT);
  const items4 = [callback4(arg1(dependencyMap[13]).BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.contentWrapper };
  const obj1 = { variant: "heading-md/medium", style: tmp.centeredText };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj1.children = intl2.string(importDefault(dependencyMap[15]).qZMUoL);
  obj.children = callback4(arg1(dependencyMap[16]).Text, obj1);
  items4[1] = callback4(View, obj);
  const obj2 = { style: tmp.ctaContainer };
  const items5 = [
    callback4(PrimaryActionButton, {
      onPressApply() {
        let tmp = undefined !== first;
        if (tmp) {
          tmp = undefined !== first1;
        }
        if (tmp) {
          tmp = null !== tmp2.current;
        }
        if (tmp) {
          callback3(true);
          let obj = sharedClientTheme(first[10]);
          obj.updateCustomTheme(first, first1);
          obj = { customUserThemeSettings: first, theme: first1 };
          sharedClientTheme(first[17]).saveClientTheme(obj);
          const obj2 = sharedClientTheme(first[17]);
          sharedClientTheme(first[10]).clearPreviewTheme();
          const obj4 = sharedClientTheme(first[10]);
          tmp2(first[9]).track(constants.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = tmp2.current;
          current.closeActionSheet();
          const obj5 = tmp2(first[9]);
        }
      }
    }),

  ];
  const obj4 = {};
  const intl3 = arg1(dependencyMap[14]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[14]).t.13/7kX);
  obj4.onPress = function onPress() {
    if (null !== tmp2.current) {
      sharedClientTheme(first[10]).clearPreviewTheme();
      const obj = sharedClientTheme(first[10]);
      sharedClientTheme(first[11]).refreshTheme();
      const current = tmp2.current;
      current.closeActionSheet();
      const obj2 = sharedClientTheme(first[11]);
    }
  };
  obj4.variant = "secondary";
  items5[1] = callback4(arg1(dependencyMap[18]).Button, obj4);
  obj2.children = items5;
  items4[2] = callback5(View, obj2);
  obj.children = items4;
  return callback5(arg1(dependencyMap[12]).BottomSheet, obj);
};
