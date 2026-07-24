// Module ID: 12922
// Function ID: 100307
// Name: RemoteAuthBody
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 1557, 12923, 12921, 5162, 507, 22, 12924, 4126, 1212, 1273, 4965, 4543, 4337, 12925, 12926, 5584, 2]
// Exports: default

// Module 12922 (RemoteAuthBody)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Endpoints } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function RemoteAuthBody(remoteAuthFingerprint) {
  let dependencyMap;
  let tmp4;
  function transitionStep(result, arg1) {
    callback(result);
    const result = remoteAuthFingerprint(outer1_2[10]).DeprecatedLayoutAnimation();
  }
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  const tmp = transitionStep(React.useState(constants.LOADING), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  [tmp4, dependencyMap] = transitionStep(React.useState(null), 2);
  const items = [remoteAuthFingerprint];
  const effect = React.useEffect(() => {
    const HTTP = remoteAuthFingerprint(outer1_2[11]).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      outer1_2(body.body.handshake_token);
      outer1_3(outer2_13.LOADED);
    }).catch(() => {
      outer1_3(outer2_13.NOT_FOUND);
    });
  }, items);
  if (constants.LOADING === first) {
    return callback2(RemoteAuthLoading, {});
  } else if (constants.LOADED === first) {
    if (null == tmp4) {
      let tmp14 = callback2(RemoteAuthNotFound, {});
    } else {
      let obj = { handshakeToken: tmp4, setAuthStep: transitionStep };
      tmp14 = callback2(RemoteAuthLogin, obj);
    }
    return tmp14;
  } else if (constants.SUCCEEDED === first) {
    return callback2(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return callback2(RemoteAuthNotFound, {});
  }
  const tmp3 = transitionStep(React.useState(null), 2);
}
function RemoteAuthLogin(arg0) {
  let importDefault;
  let require;
  ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  const dependencyMap = tmp2[1];
  const tmp3 = callback(React.useState(false), 2);
  callback = tmp3[1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_2(true);
    }, 1000);
    return () => clearTimeout(closure_0);
  }, []);
  let obj = importDefault(22);
  let tmp6 = !tmp2[0];
  if (tmp6) {
    tmp6 = !tmp3[0];
  }
  obj = {};
  obj = { source: importDefault(12924), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  const obj1 = { variant: "heading-md/extrabold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.jD2pqF);
  items[1] = callback2(require(4126) /* Text */.Heading, obj1);
  const obj2 = { style: tmp.warningCaption };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["hcd/kh"]);
  items[2] = callback2(require(1273) /* Button */.LegacyText, obj2);
  const obj3 = { style: tmp.buttonGroup };
  const obj4 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl3.string(require(1212) /* getSystemLocale */.t.N3qV8e);
  obj4.onPress = obj.throttle(() => {
    callback(true);
    const HTTP = outer1_0(507).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: closure_0 };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then(() => {
      outer1_1(outer2_13.SUCCEEDED);
    }).catch(() => {
      outer1_1(outer2_13.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  obj4.disabled = tmp6;
  const items1 = [callback2(require(4543) /* Button */.Button, obj4, "" + tmp6), ];
  const obj5 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj5.onPress = function onPress() {
    const HTTP = outer1_0(507).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: closure_0 };
    HTTP.post(obj);
    let arr = outer1_1(4337);
    arr = arr.pop();
  };
  items1[1] = callback2(require(4543) /* Button */.Button, obj5);
  obj3.children = items1;
  items[3] = callback3(require(4965) /* ButtonGroup */.ButtonGroup, obj3);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoginSucceeded() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { source: importDefault(12925), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.HbwTOZ);
  items[1] = callback2(require(4126) /* Text */.Heading, obj);
  const obj1 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.wKknJ0);
  items[2] = callback2(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.buttonGroup };
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.pYWLA0);
  obj3.onPress = importDefault(4337).pop;
  obj2.children = callback2(require(4543) /* Button */.Button, obj3);
  items[3] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj2);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthNotFound() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { source: importDefault(12926), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.NShI3Q);
  items[1] = callback2(require(4126) /* Text */.Heading, obj);
  const obj1 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.Ygezov);
  items[2] = callback2(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.buttonGroup };
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj3.onPress = importDefault(4337).pop;
  obj2.children = callback2(require(4543) /* Button */.Button, obj3);
  items[3] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj2);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoading() {
  return callback2(closure_7, { style: _createForOfIteratorHelperLoose().loadingContainer, children: callback2(require(5584) /* ActivityIndicator */.ActivityIndicator, {}) });
}
({ ImageBackground: closure_5, Image: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: { resizeMode: "cover" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 } };
_createForOfIteratorHelperLoose = { fontSize: 16, lineHeight: 20, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
_createForOfIteratorHelperLoose.warningCaption = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.caption = { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 };
let obj1 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
_createForOfIteratorHelperLoose.mainCard = obj1;
_createForOfIteratorHelperLoose.buttonGroup = { paddingVertical: 0 };
_createForOfIteratorHelperLoose.loadingContainer = { height: 300, justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { source: importDefault(12923) };
  ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
  obj = { style: items, source: importDefault(12921) };
  items = [tmp.logo, { marginTop: importDefault(1557)().top }];
  const items1 = [callback2(closure_6, obj), ];
  obj = { style: tmp.container };
  const obj1 = { style: tmp.mainCard };
  const merged = Object.assign(arg0);
  obj1.children = callback2(RemoteAuthBody, {});
  obj.children = callback2(closure_7, obj1);
  items1[1] = callback2(closure_7, obj);
  obj.children = items1;
  return callback3(closure_5, obj);
};
