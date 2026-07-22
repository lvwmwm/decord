// Module ID: 8940
// Function ID: 70457
// Name: _authorizeLink
// Dependencies: []
// Exports: TwoWayLinkPreConnect

// Module 8940 (_authorizeLink)
function _authorizeLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _authorizeLink = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
const WebBrowserType = arg1(dependencyMap[4]).WebBrowserType;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("TwoWayLink");
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[7]).createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export const TwoWayLinkPreConnect = function TwoWayLinkPreConnect(platformType) {
  let body;
  let img;
  let imgStyle;
  let redirectDestination;
  let title;
  let tmp4;
  platformType = platformType.platformType;
  const arg1 = platformType;
  const onError = platformType.onError;
  const importDefault = onError;
  const onNext = platformType.onNext;
  const dependencyMap = onNext;
  ({ imgStyle, redirectDestination } = platformType);
  ({ img, title, body } = platformType);
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp4, closure_3] = callback(React.useState(false), 2);
  const ref = React.useRef(undefined);
  const callback2 = ref;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onError, platformType];
  const items1 = [platformType, onNext];
  const callback = React.useCallback(callback2(ref), items);
  const callback1 = React.useCallback((callbackState) => {
    callbackState = callbackState.callbackState;
    if (callbackState === ref.current) {
      const obj = { callbackCode: tmp, callbackState };
      onNext(obj);
    } else {
      const _HermesInternal = HermesInternal;
      closure_11.warn("" + platformType + " link: received mismatching callback state!");
    }
  }, items1);
  const React = callback1;
  const items2 = [callback1];
  const effect = React.useEffect(() => {
    const subscription = onError(onNext[15]).subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      callback(closure_2[15]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
    };
  }, items2);
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const obj1 = { source: img };
  const items3 = [tmp.image, ];
  let tmp13 = null != imgStyle;
  if (tmp13) {
    tmp13 = imgStyle;
  }
  items3[1] = tmp13;
  obj1.style = items3;
  const items4 = [callback3(closure_6, obj1), , , ];
  const obj2 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, paddingHorizontal: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003202169671031755, backgroundColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062920633412691296, style: twoWayLinkStyles.title, children: title };
  items4[1] = callback3(arg1(dependencyMap[16]).Text, obj2);
  items4[2] = callback3(arg1(dependencyMap[16]).Text, { style: twoWayLinkStyles.body, children: body });
  let tmp14 = null != redirectDestination;
  if (tmp14) {
    const obj4 = { style: tmp.redirect };
    const intl = arg1(dependencyMap[17]).intl;
    const obj5 = { redirectUrl: redirectDestination };
    obj4.children = intl.format(arg1(dependencyMap[17]).t.XhlYYn, obj5);
    tmp14 = callback3(arg1(dependencyMap[16]).Text, obj4);
  }
  items4[3] = tmp14;
  obj.children = items4;
  const items5 = [closure_10(closure_7, obj), ];
  const obj6 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj7 = { style: twoWayLinkStyles.footerButton };
  const obj8 = {};
  const intl2 = arg1(dependencyMap[17]).intl;
  obj8.text = intl2.string(arg1(dependencyMap[17]).t.3PatSz);
  obj8.onPress = callback;
  obj8.loading = tmp4;
  obj7.children = callback3(arg1(dependencyMap[19]).Button, obj8);
  obj6.children = callback3(closure_7, obj7);
  items5[1] = callback3(arg1(dependencyMap[18]).SafeAreaPaddingView, obj6);
  obj.children = items5;
  return closure_10(closure_7, obj);
};
