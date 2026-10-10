// Module ID: 16383
// Function ID: 16384
// Name: ExternalLink
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 6625, 1503, 6655, 1126, 5088, 5379, 5958, 2]

// Module 16383 (ExternalLink)
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Linking: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let space;
  let space2;
  let str;
  const container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", display: "flex", justifyContent: str, paddingLeft: arg0 ? space.PX_24 : space.PX_16, paddingRight: arg0 ? space2.PX_24 : space2.PX_16 };
  str = "center";
  if (arg0) {
    str = "space-between";
  }
  space = tmp(587).space;
  space2 = tmp(587).space;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalLink(externalURL) {
  let closure_2;
  let intl;
  let items1;
  let items2;
  let items3;
  let tmp11;
  let tmp15;
  let tmp17;
  let tmp22;
  let tmp24;
  let tmp27;
  let tmp29;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = externalURL(576);
  const cResult = obj.c(22);
  externalURL = externalURL.externalURL;
  const tmp5 = closure_9(navigation(6625)());
  const obj2 = externalURL(1503);
  const tmp4 = navigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== externalURL) {
    const fn = function l() {
      React3.openURL(externalURL);
    };
    cResult[0] = externalURL;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] !== tmp7) {
    const fn2 = function k() {
      closure_2();
    };
    const items = [tmp7];
    cResult[2] = tmp7;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp9 = items;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  const container = tmp5.container;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: intl.string(externalURL(1126).t["0Niu/F"]) };
    const tmp4Result = tmp4(6655);
    intl = tmp(1126).intl;
    const tmp14 = closure_7(tmp4Result, obj3);
    cResult[5] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
  }
  const description = tmp5.description;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(externalURL(1126).t.nToOEg);
    cResult[6] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp5.description) {
    const obj4 = { children: items1 };
    items1 = [tmp11, ];
    const obj5 = { style: description, variant: "text-md/medium", color: "text-default", children: tmp15 };
    items1[1] = closure_7(externalURL(5088).Text, obj5);
    const tmp21 = closure_8(closure_6, obj4);
    cResult[7] = tmp5.description;
    cResult[8] = tmp21;
    tmp17 = tmp21;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(externalURL(1126).t["2ixEBi"]);
    cResult[9] = stringResult1;
    tmp22 = stringResult1;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] !== tmp7) {
    const obj6 = { shrink: true, variant: "primary", text: tmp22, onPress: tmp7 };
    const tmp26 = closure_7(externalURL(5379).Button, obj6);
    cResult[10] = tmp7;
    cResult[11] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult2 = intl4.string(externalURL(1126).t.j3cG2p);
    cResult[12] = stringResult2;
    tmp27 = stringResult2;
  } else {
    tmp27 = cResult[12];
  }
  if (cResult[13] !== navigation) {
    const obj7 = {
      shrink: true,
      variant: "secondary",
      text: tmp27,
      onPress() {
          return navigation.pop();
        }
    };
    const tmp31 = closure_7(externalURL(5379).Button, obj7);
    cResult[13] = navigation;
    cResult[14] = tmp31;
    tmp29 = tmp31;
  } else {
    tmp29 = cResult[14];
  }
  if (cResult[15] === tmp24) {
    let tmp32;
    if (cResult[16] === tmp29) {
      tmp32 = cResult[17];
    }
    if (cResult[18] === tmp5.container) {
      if (cResult[19] === tmp32) {
        let tmp34;
        if (cResult[20] === tmp17) {
          tmp34 = cResult[21];
        }
        return tmp34;
      }
    }
    const obj8 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: container, children: items2 };
    items2 = [tmp17, tmp32];
    const tmp37 = closure_8(closure_5, obj8);
    cResult[18] = tmp5.container;
    cResult[19] = tmp32;
    cResult[20] = tmp17;
    cResult[21] = tmp37;
    tmp34 = tmp37;
  }
  const obj9 = { children: items3 };
  items3 = [tmp24, tmp29];
  const tmp33 = closure_8(externalURL(5958).ButtonGroup, obj9);
  cResult[15] = tmp24;
  cResult[16] = tmp29;
  cResult[17] = tmp33;
  tmp32 = tmp33;
}) : (function ExternalLink(externalURL) {
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  externalURL = externalURL.externalURL;
  importDefault = undefined;
  let onPress;
  const tmp = closure_9(require("useWideAuthView")());
  const obj = externalURL(onPress[8]);
  importDefault = obj.useNavigation();
  const items = [externalURL];
  onPress = react.useCallback(() => {
    React3.openURL(externalURL);
  }, items);
  const items1 = [onPress];
  const effect = react.useEffect(() => {
    callback();
  }, items1);
  const obj2 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.container, children: items3 };
  const obj3 = { children: items2 };
  const obj4 = { children: intl.string(externalURL(onPress[10]).t["0Niu/F"]) };
  const tmp4 = require("AuthHeader");
  intl = externalURL(onPress[10]).intl;
  items2 = [closure_7(tmp4, obj4), ];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: intl2.string(externalURL(onPress[10]).t.nToOEg) };
  const Text = externalURL(onPress[11]).Text;
  intl2 = externalURL(onPress[10]).intl;
  items2[1] = closure_7(Text, obj5);
  items3 = [closure_8(closure_6, obj3), ];
  const obj6 = { children: items4 };
  const ButtonGroup = externalURL(onPress[13]).ButtonGroup;
  const obj7 = { shrink: true, variant: "primary", text: intl3.string(externalURL(onPress[10]).t["2ixEBi"]), onPress };
  const Button = externalURL(onPress[12]).Button;
  intl3 = externalURL(onPress[10]).intl;
  items4 = [closure_7(Button, obj7), ];
  const obj8 = {
    shrink: true,
    variant: "secondary",
    text: intl4.string(externalURL(onPress[10]).t.j3cG2p),
    onPress() {
      return closure_1.pop();
    }
  };
  const Button2 = externalURL(onPress[12]).Button;
  intl4 = externalURL(onPress[10]).intl;
  items4[1] = closure_7(Button2, obj8);
  items3[1] = closure_8(ButtonGroup, obj6);
  return closure_8(closure_5, obj2);
});
const result = size.fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default tmp4;
