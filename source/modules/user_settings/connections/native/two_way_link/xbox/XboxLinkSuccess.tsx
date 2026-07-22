// Module ID: 9025
// Function ID: 70954
// Name: XboxLinkDiscordSuccess
// Dependencies: []
// Exports: default

// Module 9025 (XboxLinkDiscordSuccess)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6, Linking: closure_7, Pressable: closure_8 } = arg1(dependencyMap[2]));
const XboxLinkModalScenes = arg1(dependencyMap[3]).XboxLinkModalScenes;
const tmp2 = arg1(dependencyMap[2]);
({ XBOX_ANDROID_APP_LINK: closure_10, XBOX_IOS_APP_LINK: closure_11, XBOX_URL_BASE: closure_12 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { image: { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006312418372658124, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122671433504, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019187302744385818 } };
obj = { "Bool(false)": "application/vnd.sentry.items.trace-metric+json", "Null": "first-input", "Null": true, "Null": "auto.core.linked_errors", "Null": "eq", "Null": "neq", "Null": "gt", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.getApp = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.appLogoBox = { borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PLATFORM_XBOX };
obj.appLogo = { "Null": true, "Null": true };
obj.getAppTitle = { flex: 1 };
obj.icon = { marginLeft: 8 };
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PLATFORM_XBOX };
obj.externalLinkIcon = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp3 = callback(React.useState(true), 2);
  const first = tmp3[0];
  const arg1 = first;
  const importDefault = tmp3[1];
  const effect = React.useEffect(() => {
    closure_7.canOpenURL(closure_12).then(closure_1);
  }, []);
  const items = [first];
  const callback = React.useCallback(() => {
    if (!first) {
      const openURL = closure_7.openURL;
      if (obj.isAndroid()) {
        openURL(closure_10);
      } else {
        openURL(closure_11);
      }
      const obj = first(navigation[9]);
    }
  }, items);
  let obj1 = arg1(dependencyMap[10]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  const items1 = [navigation];
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  obj1 = {};
  const callback1 = React.useCallback(() => {
    navigation.push(constants.EDUCATION);
  }, items1);
  obj1.source = importDefault(dependencyMap[11]);
  obj1.style = tmp.image;
  const items2 = [callback2(closure_5, obj1), , , ];
  const obj2 = { style: twoWayLinkStyles.title };
  const intl = arg1(dependencyMap[13]).intl;
  obj2.children = intl.string(arg1(dependencyMap[13]).t.aGRPVq);
  items2[1] = callback2(arg1(dependencyMap[12]).Text, obj2);
  const obj3 = { cachedAt: 1, edpbxy: 1, style: twoWayLinkStyles.body };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[13]).t.m3mBYE);
  items2[2] = callback2(arg1(dependencyMap[12]).Text, obj3);
  const obj4 = { onPress: callback, style: tmp.getApp };
  const obj5 = { style: tmp.appLogoBox, children: callback2(closure_5, { source: importDefault(dependencyMap[14]), style: tmp.appLogo }) };
  const items3 = [callback2(closure_6, obj5), , ];
  const obj7 = { "Null": "String", "Null": "justifyContent", alignItems: "np", style: tmp.getAppTitle };
  const intl3 = arg1(dependencyMap[13]).intl;
  const string = intl3.string;
  const t = arg1(dependencyMap[13]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t.12Kx2v);
  }
  obj7.children = stringResult;
  items3[1] = callback2(arg1(dependencyMap[12]).Text, obj7);
  if (first) {
    const obj8 = { source: importDefault(dependencyMap[15]), style: tmp.icon };
    let tmp14Result = tmp14(closure_5, obj8);
  } else {
    const obj9 = { source: importDefault(dependencyMap[17]), size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    tmp14Result = tmp14(arg1(dependencyMap[16]).Icon, obj9);
  }
  items3[2] = tmp14Result;
  obj4.children = items3;
  items2[3] = closure_14(closure_8, obj4);
  obj.children = items2;
  const items4 = [closure_14(closure_6, obj), ];
  const obj10 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj11 = { style: twoWayLinkStyles.footerButton };
  const obj12 = { <string:1986169986>: true, <string:2487833047>: true };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj12.text = intl4.string(arg1(dependencyMap[13]).t.3PatSz);
  obj12.onPress = callback1;
  obj11.children = callback2(arg1(dependencyMap[19]).Button, obj12);
  obj10.children = callback2(closure_6, obj11);
  items4[1] = callback2(arg1(dependencyMap[18]).SafeAreaPaddingView, obj10);
  obj.children = items4;
  return closure_14(closure_6, obj);
};
