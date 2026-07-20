// Module ID: 15062
// Function ID: 113393
// Name: ICYMIInfoScreen
// Dependencies: []
// Exports: default

// Module 15062 (ICYMIInfoScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const ThemeTypes = arg1(dependencyMap[4]).ThemeTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Bool(false)": 2, "Bool(false)": "metrics_sample_rate", "Bool(false)": "scalar", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.closeIcon = { height: arg1(dependencyMap[8]).NAV_BAR_HEIGHT };
const obj1 = { height: arg1(dependencyMap[8]).NAV_BAR_HEIGHT };
obj.closeIconColor = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.bgImage = {};
obj.headerImg = { sku: 29315839, wishlistId: 41043290, analyticsLocations: 16777216, flexDirection: 1929379840 };
obj.flashIcon = {};
obj.subContainer = {};
obj.header = { xxs: "isArrayBufferToString", xs: "sy" };
obj.headerText = { concat: -0.0014069081515246523, now: -0.0001058445630777106 };
const obj3 = { marginTop: false, alignItems: false, flexDirection: false, backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.body = obj3;
const obj4 = { width: null, flex: null, justifyContent: null, backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.divider = obj4;
obj.infoRow = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.infoIcon = { padding: 8, backgroundColor: importDefault(dependencyMap[7]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.infoText = { flexShrink: 1 };
obj.hint = { margin: 12 };
const obj5 = { padding: 8, backgroundColor: importDefault(dependencyMap[7]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.footer = { left: importDefault(dependencyMap[7]).space.PX_24, right: importDefault(dependencyMap[7]).space.PX_24, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
let closure_12 = obj.createStyles(obj);
const obj6 = { left: importDefault(dependencyMap[7]).space.PX_24, right: importDefault(dependencyMap[7]).space.PX_24, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  let bottom;
  let top;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const arg1 = extendedOnboarding;
  let closure_2;
  const tmp = callback5();
  ({ top, bottom } = importDefault(closure_2[9])());
  const tmp2 = importDefault(closure_2[9])();
  let obj = arg1(closure_2[11]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = React.useCallback(callback2(obj), items);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      }
    });
  }, items1);
  const tmp7 = callback(React.useState(false), 2);
  closure_2 = tmp7[1];
  obj = {};
  obj = { style: items2 };
  const items2 = [{ marginTop: top }, tmp.closeIcon];
  const obj1 = {
    source: importDefault(closure_2[16]),
    onPress() {
      return navigation(closure_2[14]).pop();
    }
  };
  const intl = arg1(closure_2[17]).intl;
  obj1.accessibilityLabel = intl.string(arg1(closure_2[17]).t.cpT0Cq);
  obj1.color = tmp.closeIconColor.backgroundColor;
  obj.children = callback3(arg1(closure_2[15]).HeaderIconButton, obj1);
  const items3 = [callback3(closure_6, obj), , ];
  const obj2 = { style: items4 };
  const items4 = [tmp.container, { marginBottom: bottom }];
  const obj3 = {};
  const obj4 = {};
  const tmp10 = callback3;
  const tmp12 = closure_7;
  const tmp3 = importDefault(closure_2[10])();
  const tmp9 = closure_11;
  obj4.uri = importDefault(closure_2[19]);
  obj3.source = obj4;
  obj3.style = tmp.bgImage;
  const items5 = [callback3(importDefault(closure_2[18]), obj3), ];
  const obj5 = {};
  const items6 = [tmp.subContainer, ];
  const tmp13 = importDefault(closure_2[18]);
  items6[1] = { marginTop: top + importDefault(closure_2[7]).space.PX_12 };
  obj5.style = items6;
  const obj7 = { style: tmp.header };
  const obj8 = {};
  const obj9 = {};
  const obj6 = { marginTop: top + importDefault(closure_2[7]).space.PX_12 };
  if (tmp3 === ThemeTypes.LIGHT) {
    let tmp17 = importDefault(closure_2[20]);
  } else {
    tmp17 = importDefault(closure_2[21]);
  }
  obj9.uri = tmp17;
  obj8.source = obj9;
  obj8.style = tmp.headerImg;
  const items7 = [tmp10(importDefault(closure_2[18]), obj8), , , ];
  const obj10 = {};
  const tmp14 = importDefault(closure_2[18]);
  obj10.source = importDefault(closure_2[22]);
  obj10.style = tmp.flashIcon;
  items7[1] = callback3(importDefault(closure_2[18]), obj10);
  const obj11 = {};
  const intl2 = arg1(closure_2[17]).intl;
  obj11.children = intl2.string(arg1(closure_2[17]).t.jnXV/V);
  items7[2] = callback3(arg1(closure_2[23]).Text, obj11);
  const obj12 = { style: tmp.headerText };
  const intl3 = arg1(closure_2[17]).intl;
  obj12.children = intl3.string(arg1(closure_2[17]).t.9SjvoK);
  items7[3] = callback3(arg1(closure_2[23]).Text, obj12);
  obj7.children = items7;
  const items8 = [callback4(closure_6, obj7), ];
  const obj13 = {};
  const obj14 = { style: tmp.body };
  const obj15 = { style: tmp.infoRow };
  const tmp21 = importDefault(closure_2[18]);
  const items9 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(arg1(closure_2[24]).ServerIcon, {}) }), ];
  const obj17 = { style: tmp.infoText };
  const intl4 = arg1(closure_2[17]).intl;
  obj17.children = intl4.string(arg1(closure_2[17]).t.knxfqR);
  items9[1] = callback3(arg1(closure_2[23]).Text, obj17);
  obj15.children = items9;
  const items10 = [callback4(closure_6, obj15), callback3(closure_6, { style: tmp.divider }), , , ];
  const obj19 = { style: tmp.infoRow };
  const obj16 = { style: tmp.infoIcon, children: callback3(arg1(closure_2[24]).ServerIcon, {}) };
  const obj18 = { style: tmp.divider };
  const tmp22 = closure_6;
  const items11 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(arg1(closure_2[25]).NewUserIcon, {}) }), ];
  const obj21 = { style: tmp.infoText };
  const intl5 = arg1(closure_2[17]).intl;
  obj21.children = intl5.string(arg1(closure_2[17]).t.BnUXZi);
  items11[1] = callback3(arg1(closure_2[23]).Text, obj21);
  obj19.children = items11;
  items10[2] = callback4(closure_6, obj19);
  items10[3] = callback3(closure_6, { style: tmp.divider });
  const obj23 = { style: tmp.infoRow };
  const obj20 = { style: tmp.infoIcon, children: callback3(arg1(closure_2[25]).NewUserIcon, {}) };
  const obj22 = { style: tmp.divider };
  const items12 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(arg1(closure_2[26]).CircleCheckIcon, {}) }), ];
  const obj25 = { style: tmp.infoText };
  const intl6 = arg1(closure_2[17]).intl;
  obj25.children = intl6.string(arg1(closure_2[17]).t.itb1rh);
  items12[1] = callback3(arg1(closure_2[23]).Text, obj25);
  obj23.children = items12;
  items10[4] = callback4(closure_6, obj23);
  obj14.children = items10;
  const items13 = [callback4(closure_6, obj14), ];
  const obj26 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.hint };
  const intl7 = arg1(closure_2[17]).intl;
  obj26.children = intl7.format(arg1(closure_2[17]).t.jVS/hc, {
    feedbackHook(children) {
      const obj = {
        INTEGRATION_CREATE: "abf5b4249ea38c96687799aa130b2321",
        ConstraintReasonCode: "img_no_results_darker",
        onPress() {
          return callback2(paths[27]).openLazy(callback(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      };
      return callback(extendedOnboarding(closure_2[23]).Text, obj, arg1);
    }
  });
  items13[1] = callback3(arg1(closure_2[23]).Text, obj26);
  obj13.children = items13;
  items8[1] = callback4(closure_6, obj13);
  obj5.children = items8;
  items5[1] = callback4(closure_6, obj5);
  obj2.children = items5;
  items3[1] = callback4(tmp12, obj2);
  const obj28 = { style: items14 };
  const items14 = [{ marginBottom: bottom }, tmp.footer];
  const obj29 = { size: "lg", loading: tmp7[0] };
  const intl8 = arg1(closure_2[17]).intl;
  const string = intl8.string;
  const t = arg1(closure_2[17]).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t.+IrDzN);
  }
  obj29.text = stringResult;
  obj29.onPress = callback;
  obj28.children = callback3(arg1(closure_2[30]).Button, obj29);
  items3[2] = callback3(tmp22, obj28);
  obj.children = items3;
  return callback4(tmp9, obj);
};
