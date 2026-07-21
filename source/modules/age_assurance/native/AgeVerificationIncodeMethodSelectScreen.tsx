// Module ID: 7534
// Function ID: 60276
// Name: AgeVerificationIncodeMethodSelectScreen
// Dependencies: []
// Exports: default

// Module 7534 (AgeVerificationIncodeMethodSelectScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const VerificationMethod = arg1(dependencyMap[5]).VerificationMethod;
let closure_9 = arg1(dependencyMap[6]).buildIncodeParamsInjection;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.content = { padding: importDefault(dependencyMap[9]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[9]).space.PX_16 };
obj.loadingOverlay = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
let closure_12 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  let tmp2;
  let tmp4;
  onMethodSelected = onMethodSelected.onMethodSelected;
  const arg1 = onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  const importDefault = trustedOrigin;
  [tmp2, closure_2] = callback(React.useState(false), 2);
  const tmp = callback(React.useState(false), 2);
  [tmp4, closure_3] = callback(React.useState(false), 2);
  const tmp5 = callback4();
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
      const obj2 = {};
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
