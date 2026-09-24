// Module ID: 16821
// Function ID: 16822
// Name: ICYMIInfoScreen
// Dependencies: [32, 5, 19, 17, 1089, 21, 4790, 580, 5929, 1616, 4725, 1488, 8667, 16822, 4993, 8144, 8152, 1119, 5834, 16824, 16825, 16826, 16827, 4786, 9430, 13341, 4749, 4757, 16828, 1984, 5220, 2]
// Exports: default

// Module 16821 (ICYMIInfoScreen)
import nativeDefault from "native" /* 580 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 }, closeIcon: null, closeIconColor: null, bgImage: null, headerImg: null, flashIcon: null, subContainer: null, header: null, headerText: null, body: null, divider: null, infoRow: null, infoIcon: null, infoText: null, hint: null, footer: null };
let size = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: fn(5929).NAV_BAR_HEIGHT, zIndex: 2 };
obj2.closeIcon = size;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
obj2.closeIconColor = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.bgImage = { position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.2515923566878981, overflow: "visible" };
obj2.headerImg = { position: "absolute", top: 16, width: 361, height: 240 };
obj2.flashIcon = { marginBottom: 32, marginTop: 132 };
obj2.subContainer = { flex: 1, paddingHorizontal: 16, paddingTop: 16 };
obj2.header = { alignItems: "center", paddingHorizontal: 12 };
obj2.headerText = { textAlign: "center", marginTop: 8 };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.body = { gap: 16, padding: 16, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, marginTop: 40 };
let obj5 = { gap: 16, padding: 16, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, marginTop: 40 };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
obj2.infoRow = { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 };
let obj6 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
obj2.infoIcon = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.round };
obj2.infoText = { flexShrink: 1 };
obj2.hint = { margin: 12 };
const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = rect;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let navigation;
  const tmp = closure_12();
  ({ top, bottom } = navigation(1616)());
  const tmp4 = navigation(1616)();
  const tmp5 = navigation(4725)();
  navigation = extendedOnboarding(1488).useNavigation();
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (extendedOnboarding) {
            const ICYMIAnalytics = tmp2(8667).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "overview" });
            dependencyMap(true);
            v1 = 1;
            dependencyMap = 1;
            const obj5 = { value: tmp2(16822).maybeFetchGuildDiscoveryCategories(), done: false };
            return obj5;
          } else {
            v1(4993).pop();
            dependencyMap = 3;
            const arr = v1(4993);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            navigation.navigate("topics_cloud");
            const timerId = setTimeout(() => closure_1_2(false), 500);
          }, 100);
        }
        dependencyMap = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  }), items);
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      }
    });
  }, items1);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp10[1];
  const obj2 = { style: null, children: null };
  const items2 = [{ marginTop: top }, tmp.closeIcon];
  obj2.style = items2;
  let obj3 = {
    source: navigation(8152),
    onPress() {
      return navigation(4993).pop();
    },
    accessibilityLabel: null,
    color: null
  };
  const intl = extendedOnboarding(1119).intl;
  obj3.accessibilityLabel = intl.string(extendedOnboarding(1119).t.cpT0Cq);
  obj3.color = tmp.closeIconColor.backgroundColor;
  obj2.children = closure_9(extendedOnboarding(8144).HeaderIconButton, obj3);
  const items3 = [closure_9(closure_6, obj2), , ];
  let obj4 = { style: null, children: null };
  const items4 = [tmp.container, { marginBottom: bottom }];
  obj4.style = items4;
  let obj5 = { source: null, style: null };
  const obj6 = { uri: null };
  let obj = extendedOnboarding(1488);
  const tmp12 = closure_11;
  const tmp15 = closure_7;
  obj6.uri = navigation(16824);
  obj5.source = obj6;
  obj5.style = tmp.bgImage;
  const items5 = [closure_9(navigation(5834), obj5), ];
  const obj7 = { style: null, children: null };
  const items6 = [tmp.subContainer, ];
  const tmp16 = navigation(5834);
  items6[1] = { marginTop: top + navigation(580).space.PX_12 };
  obj7.style = items6;
  const obj9 = { style: tmp.header, children: null };
  const obj8 = { marginTop: top + navigation(580).space.PX_12 };
  if (tmp5 === ThemeTypes.LIGHT) {
    let tmp2Result = tmp2(16825);
  } else {
    tmp2Result = tmp2(16826);
  }
  const items7 = [closure_9(navigation(5834), { source: { uri: tmp2Result }, style: tmp.headerImg }), , , ];
  const obj11 = { source: null, style: null };
  const obj10 = { source: { uri: tmp2Result }, style: tmp.headerImg };
  const tmp17 = navigation(5834);
  obj11.source = navigation(16827);
  obj11.style = tmp.flashIcon;
  items7[1] = closure_9(navigation(5834), obj11);
  const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp6(1119).intl;
  obj12.children = intl2.string(extendedOnboarding(1119).t["jnXV/V"]);
  items7[2] = closure_9(extendedOnboarding(4786).Text, obj12);
  const obj13 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText, children: null };
  const intl3 = tmp6(1119).intl;
  obj13.children = intl3.string(extendedOnboarding(1119).t["9SjvoK"]);
  items7[3] = closure_9(extendedOnboarding(4786).Text, obj13);
  obj9.children = items7;
  const items8 = [closure_10(closure_6, obj9), ];
  const obj14 = { children: null };
  const obj15 = { style: tmp.body, children: null };
  const obj16 = { style: tmp.infoRow, children: null };
  const tmp2Result2 = navigation(5834);
  const items9 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(9430).ServerIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj18 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl4 = tmp6(1119).intl;
  obj18.children = intl4.string(extendedOnboarding(1119).t.knxfqR);
  items9[1] = closure_9(extendedOnboarding(4786).Text, obj18);
  obj16.children = items9;
  const items10 = [closure_10(closure_6, obj16), closure_9(closure_6, { style: tmp.divider }), , , ];
  const obj20 = { style: tmp.infoRow, children: null };
  const obj17 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(9430).ServerIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj19 = { style: tmp.divider };
  const items11 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(13341).NewUserIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj22 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl5 = tmp6(1119).intl;
  obj22.children = intl5.string(extendedOnboarding(1119).t.BnUXZi);
  items11[1] = closure_9(extendedOnboarding(4786).Text, obj22);
  obj20.children = items11;
  items10[2] = closure_10(closure_6, obj20);
  items10[3] = closure_9(closure_6, { style: tmp.divider });
  const obj24 = { style: tmp.infoRow, children: null };
  const obj21 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(13341).NewUserIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj23 = { style: tmp.divider };
  const items12 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(4749).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj26 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl6 = tmp6(1119).intl;
  obj26.children = intl6.string(extendedOnboarding(1119).t.itb1rh);
  items12[1] = closure_9(extendedOnboarding(4786).Text, obj26);
  obj24.children = items12;
  items10[4] = closure_10(closure_6, obj24);
  obj15.children = items10;
  const items13 = [closure_10(closure_6, obj15), ];
  const obj27 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint, children: null };
  const intl7 = tmp6(1119).intl;
  obj27.children = intl7.format(extendedOnboarding(1119).t["jVS/hc"], {
    feedbackHook(children, arg1) {
      return closure_1_9(extendedOnboarding(4786).Text, {
        variant: "text-xs/medium",
        color: "text-link",
        onPress() {
          return navigation(paths[27]).openLazy(extendedOnboarding(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      }, arg1);
    }
  });
  items13[1] = closure_9(extendedOnboarding(4786).Text, obj27);
  obj14.children = items13;
  items8[1] = closure_10(closure_6, obj14);
  obj7.children = items8;
  items5[1] = closure_10(closure_6, obj7);
  obj4.children = items5;
  items3[1] = closure_10(tmp15, obj4);
  const obj29 = { style: null, children: null };
  const items14 = [{ marginBottom: bottom }, tmp.footer];
  obj29.style = items14;
  const obj30 = { size: "lg", loading: tmp10[0], text: null, onPress: null };
  const intl8 = tmp6(1119).intl;
  const string = intl8.string;
  const t = tmp6(1119).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  const obj31 = { children: null };
  obj30.text = stringResult;
  obj30.onPress = callback;
  obj29.children = closure_9(extendedOnboarding(5220).Button, obj30);
  items3[2] = closure_9(closure_6, obj29);
  obj31.children = items3;
  return closure_10(tmp12, obj31);
};
