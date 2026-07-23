// Module ID: 7541
// Function ID: 60336
// Name: AgeVerificationIncodeMethodSelectScreen
// Dependencies: [5, 57, 31, 27, 1278, 7537, 7539, 33, 4130, 689, 7542, 5586, 4541, 4126, 1212, 2716, 5503, 5165, 2]
// Exports: default

// Module 7541 (AgeVerificationIncodeMethodSelectScreen)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VerificationMethod } from "set";
import { buildIncodeParamsInjection as closure_9 } from "postToNativeWebView";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.loadingOverlay = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  let set;
  let dependencyMap;
  let tmp2;
  let tmp4;
  onMethodSelected = onMethodSelected.onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  [tmp2, dependencyMap] = callback(React.useState(false), 2);
  const tmp = callback(React.useState(false), 2);
  [tmp4, set] = callback(React.useState(false), 2);
  const tmp5 = _createForOfIteratorHelperLoose();
  const items = [onMethodSelected, trustedOrigin];
  callback = React.useCallback((() => {
    let closure_0 = outer1_3(async (arg0) => {
      outer2_2(true);
      outer2_3(false);
      let obj = onMethodSelected(outer3_2[10]);
      const tmp3 = yield obj.requestIncodeMethodSession(arg0);
      if (null == tmp3) {
        outer2_3(true);
        outer2_2(false);
      } else {
        obj = {};
        ({ apiUrl: obj2.apiUrl, sessionToken: obj2.sessionToken, consentId: obj2.consentId, interviewId: obj2.interviewId } = tmp3);
        obj.theme = outer3_7.theme;
        obj.method = arg0;
        callback(outer3_9(obj, outer2_1));
        outer2_2(false);
      }
    });
    return function() {
      return callback(...arguments);
    };
  })(), items);
  let obj = {};
  if (tmp2) {
    obj.style = tmp5.loadingOverlay;
    obj.children = callback2(onMethodSelected(5586).ActivityIndicator, {});
    let tmp21 = obj;
  } else {
    obj.style = tmp5.container;
    obj = { spacing: 16, style: tmp5.content };
    obj = { variant: "heading-lg/bold", color: "text-strong" };
    const intl = onMethodSelected(1212).intl;
    obj.children = intl.string(trustedOrigin(2716).eZvwAe);
    const items1 = [callback2(onMethodSelected(4126).Heading, obj), , , ];
    const obj1 = { variant: "text-md/normal", color: "text-muted" };
    const intl2 = onMethodSelected(1212).intl;
    obj1.children = intl2.string(trustedOrigin(2716)["5yWXmT"]);
    items1[1] = callback2(onMethodSelected(4126).Text, obj1);
    if (tmp4) {
      const obj2 = { variant: "text-sm/medium", color: "text-feedback-critical" };
      const intl3 = onMethodSelected(1212).intl;
      obj2.children = intl3.string(onMethodSelected(1212).t.c6kn6F);
      tmp4 = callback2(onMethodSelected(4126).Text, obj2);
    }
    items1[2] = tmp4;
    const obj3 = { hasIcons: false };
    const obj4 = { arrow: true };
    const intl4 = onMethodSelected(1212).intl;
    obj4.label = intl4.string(trustedOrigin(2716).rgXXcW);
    const intl5 = onMethodSelected(1212).intl;
    obj4.subLabel = intl5.string(trustedOrigin(2716).fm7qBC);
    obj4.onPress = function onPress() {
      callback(outer1_8.FACIAL_AGE_ESTIMATION);
    };
    const items2 = [callback2(onMethodSelected(5165).TableRow, obj4), ];
    const obj5 = { arrow: true };
    const intl6 = onMethodSelected(1212).intl;
    obj5.label = intl6.string(trustedOrigin(2716)["NeVlw/"]);
    const intl7 = onMethodSelected(1212).intl;
    obj5.subLabel = intl7.string(trustedOrigin(2716).ARmJ0M);
    obj5.onPress = function onPress() {
      callback(outer1_8.ID_VERIFICATION);
    };
    items2[1] = callback2(onMethodSelected(5165).TableRow, obj5);
    obj3.children = items2;
    items1[3] = callback3(onMethodSelected(5503).TableRowGroup, obj3);
    obj.children = items1;
    obj.children = callback3(onMethodSelected(4541).Stack, obj);
    tmp21 = obj;
    const tmp8 = callback3;
  }
  return callback2(View, tmp21);
};
