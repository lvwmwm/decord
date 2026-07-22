// Module ID: 7535
// Function ID: 60299
// Name: AgeVerificationIncodeMethodSelectScreen
// Dependencies: [31, 7531, 33, 7537, 3979, 4343, 7541, 4126, 689, 4333, 5783, 1212, 5516, 2, 31, 33, 4126, 689, 4333]
// Exports: default

// Module 7535 (AgeVerificationIncodeMethodSelectScreen)
import module_31 from "module_31";
import set from "set";
import module_33 from "module_33";
import { View } from "parseMessageEmbedForProps";
import closure_7 from "_createForOfIteratorHelperLoose";
import { VerificationMethod } from "isReactiveCheckEnabled";
import { buildIncodeParamsInjection as closure_9 } from "WebView";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_4333 from "module_4333";

({ jsx: closure_10, jsxs: closure_11 } = _createForOfIteratorHelperLoose);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("module_4333").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { padding: require("module_4333").space.PX_16 };
const obj1 = { padding: require("module_4333").space.PX_16 };
_createForOfIteratorHelperLoose.loadingOverlay = { backgroundColor: require("module_4333").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = module_4333.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  let tmp2;
  let tmp4;
  onMethodSelected = onMethodSelected.onMethodSelected;
  const arg1 = onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  const importDefault = trustedOrigin;
  [tmp2, closure_2] = callback(React.useState(false), 2);
  const tmp = callback(React.useState(false), 2);
  [tmp4, module_31] = callback(React.useState(false), 2);
  const tmp5 = _createForOfIteratorHelperLoose();
  const items = [onMethodSelected, trustedOrigin];
  const callback = React.useCallback(() => {
    let closure_0 = callback(async (arg0) => {
      callback2(true);
      callback3(false);
      let obj = callback(callback2[10]);
      const tmp3 = yield obj.requestIncodeMethodSession(arg0);
      if (null == tmp3) {
        callback3(true);
        callback2(false);
      } else {
        obj = {};
        ({ apiUrl: obj2.apiUrl, sessionToken: obj2.sessionToken, consentId: obj2.consentId, interviewId: obj2.interviewId } = tmp3);
        obj.theme = theme.theme;
        obj.method = arg0;
        callback(callback4(obj, closure_1));
        callback2(false);
      }
    });
    return function() {
      return callback(...arguments);
    };
  }(), items);
  let obj = {};
  if (tmp2) {
    obj.style = tmp5.loadingOverlay;
    obj.children = callback2(arg1(dependencyMap[11]).ActivityIndicator, {});
    let tmp21 = obj;
  } else {
    obj.style = tmp5.container;
    obj = { spacing: 16, style: tmp5.content };
    obj = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj.children = intl.string(importDefault(dependencyMap[15]).eZvwAe);
    const items1 = [callback2(arg1(dependencyMap[13]).Heading, obj), , , ];
    const obj1 = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj1.children = intl2.string(importDefault(dependencyMap[15]).5yWXmT);
    items1[1] = callback2(arg1(dependencyMap[13]).Text, obj1);
    if (tmp4) {
      const obj2 = { cachedAt: 1, edpbxy: "center" };
      const intl3 = arg1(dependencyMap[14]).intl;
      obj2.children = intl3.string(arg1(dependencyMap[14]).t.c6kn6F);
      tmp4 = callback2(arg1(dependencyMap[13]).Text, obj2);
    }
    items1[2] = tmp4;
    const obj3 = { hasIcons: false };
    const obj4 = { arrow: true };
    const intl4 = arg1(dependencyMap[14]).intl;
    obj4.label = intl4.string(importDefault(dependencyMap[15]).rgXXcW);
    const intl5 = arg1(dependencyMap[14]).intl;
    obj4.subLabel = intl5.string(importDefault(dependencyMap[15]).fm7qBC);
    obj4.onPress = function onPress() {
      callback2(constants.FACIAL_AGE_ESTIMATION);
    };
    const items2 = [callback2(arg1(dependencyMap[17]).TableRow, obj4), ];
    const obj5 = { arrow: true };
    const intl6 = arg1(dependencyMap[14]).intl;
    obj5.label = intl6.string(importDefault(dependencyMap[15]).NeVlw/);
    const intl7 = arg1(dependencyMap[14]).intl;
    obj5.subLabel = intl7.string(importDefault(dependencyMap[15]).ARmJ0M);
    obj5.onPress = function onPress() {
      callback2(constants.ID_VERIFICATION);
    };
    items2[1] = callback2(arg1(dependencyMap[17]).TableRow, obj5);
    obj3.children = items2;
    items1[3] = callback3(arg1(dependencyMap[16]).TableRowGroup, obj3);
    obj.children = items1;
    obj.children = callback3(arg1(dependencyMap[12]).Stack, obj);
    tmp21 = obj;
    const tmp8 = callback3;
  }
  return callback2(View, tmp21);
};
