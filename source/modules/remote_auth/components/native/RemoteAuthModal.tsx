// Module ID: 12740
// Function ID: 97750
// Name: RemoteAuthBody
// Dependencies: []
// Exports: default

// Module 12740 (RemoteAuthBody)
function RemoteAuthBody(remoteAuthFingerprint) {
  let tmp4;
  function transitionStep(arg0) {
    callback(arg0);
    const result = remoteAuthFingerprint(closure_2[10]).DeprecatedLayoutAnimation();
  }
  const callback = transitionStep;
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  const arg1 = remoteAuthFingerprint;
  const tmp = callback(React.useState(constants.LOADING), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  [tmp4, closure_2] = callback(React.useState(null), 2);
  const items = [remoteAuthFingerprint];
  const effect = React.useEffect(() => {
    const HTTP = remoteAuthFingerprint(closure_2[11]).HTTP;
    let obj = { url: constants.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      callback(body.body.handshake_token);
      callback2(constants.LOADED);
    }).catch(() => {
      callback2(constants.NOT_FOUND);
    });
  }, items);
  if (constants.LOADING === first) {
    return callback2(RemoteAuthLoading, {});
  } else if (constants.LOADED === first) {
    if (null == tmp4) {
      let tmp14 = callback2(RemoteAuthNotFound, {});
    } else {
      const obj = { handshakeToken: tmp4, setAuthStep: transitionStep };
      tmp14 = callback2(RemoteAuthLogin, obj);
    }
    return tmp14;
  } else if (constants.SUCCEEDED === first) {
    return callback2(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return callback2(RemoteAuthNotFound, {});
  }
  const tmp3 = callback(React.useState(null), 2);
}
function RemoteAuthLogin(arg0) {
  ({ handshakeToken: closure_0, setAuthStep: closure_1 } = arg0);
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let closure_2 = tmp2[1];
  const tmp3 = callback(React.useState(false), 2);
  const callback = tmp3[1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 1000);
    return () => clearTimeout(closure_0);
  }, []);
  let obj = importDefault(closure_2[12]);
  let tmp6 = !tmp2[0];
  if (tmp6) {
    tmp6 = !tmp3[0];
  }
  obj = {};
  obj = { source: importDefault(closure_2[13]), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  const obj1 = { variant: "heading-md/extrabold" };
  const intl = arg1(closure_2[15]).intl;
  obj1.children = intl.string(arg1(closure_2[15]).t.jD2pqF);
  items[1] = callback2(arg1(closure_2[14]).Heading, obj1);
  const obj2 = { style: tmp.warningCaption };
  const intl2 = arg1(closure_2[15]).intl;
  obj2.children = intl2.string(arg1(closure_2[15]).t.hcd/kh);
  items[2] = callback2(arg1(closure_2[16]).LegacyText, obj2);
  const obj3 = { style: tmp.buttonGroup };
  const obj4 = {};
  const intl3 = arg1(closure_2[15]).intl;
  obj4.text = intl3.string(arg1(closure_2[15]).t.N3qV8e);
  obj4.onPress = obj.throttle(() => {
    callback3(true);
    const HTTP = callback(closure_2[11]).HTTP;
    let obj = { url: constants.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: callback };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then(() => {
      callback(constants.SUCCEEDED);
    }).catch(() => {
      callback(constants.NOT_FOUND);
    });
  }, 1000, { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 });
  obj4.disabled = tmp6;
  const items1 = [callback2(arg1(closure_2[18]).Button, obj4, "" + tmp6), ];
  const obj5 = { variant: "secondary" };
  const intl4 = arg1(closure_2[15]).intl;
  obj5.text = intl4.string(arg1(closure_2[15]).t.ETE/oC);
  obj5.onPress = function onPress() {
    const HTTP = callback(closure_2[11]).HTTP;
    let obj = { url: constants.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: callback };
    HTTP.post(obj);
    let arr = callback2(closure_2[19]);
    arr = arr.pop();
  };
  items1[1] = callback2(arg1(closure_2[18]).Button, obj5);
  obj3.children = items1;
  items[3] = callback3(arg1(closure_2[17]).ButtonGroup, obj3);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoginSucceeded() {
  const tmp = callback4();
  let obj = {};
  obj = { source: importDefault(dependencyMap[20]), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold" };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.HbwTOZ);
  items[1] = callback2(arg1(dependencyMap[14]).Heading, obj);
  const obj1 = { style: tmp.caption };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[15]).t.wKknJ0);
  items[2] = callback2(arg1(dependencyMap[14]).Text, obj1);
  const obj2 = { style: tmp.buttonGroup };
  const obj3 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[15]).t.pYWLA0);
  obj3.onPress = importDefault(dependencyMap[19]).pop;
  obj2.children = callback2(arg1(dependencyMap[18]).Button, obj3);
  items[3] = callback2(arg1(dependencyMap[17]).ButtonGroup, obj2);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthNotFound() {
  const tmp = callback4();
  let obj = {};
  obj = { source: importDefault(dependencyMap[21]), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold" };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.NShI3Q);
  items[1] = callback2(arg1(dependencyMap[14]).Heading, obj);
  const obj1 = { style: tmp.caption };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[15]).t.Ygezov);
  items[2] = callback2(arg1(dependencyMap[14]).Text, obj1);
  const obj2 = { style: tmp.buttonGroup };
  const obj3 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[15]).t.ETE/oC);
  obj3.onPress = importDefault(dependencyMap[19]).pop;
  obj2.children = callback2(arg1(dependencyMap[18]).Button, obj3);
  items[3] = callback2(arg1(dependencyMap[17]).ButtonGroup, obj2);
  obj.children = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoading() {
  return callback2(closure_7, { style: callback4().loadingContainer, children: callback2(arg1(dependencyMap[22]).ActivityIndicator, {}) });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ImageBackground: closure_5, Image: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { background: { aze: 30271555, azj: 22092032 }, container: { variant: 0, color: "100%", gradient: 106 }, imageStyle: { resizeMode: "cover" }, logo: {}, mainImage: { visible: 826347876, transparent: 1912603216 } };
obj = { color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
obj.warningCaption = obj;
obj.caption = { "Bool(true)": "center", "Bool(true)": true, "Bool(true)": "/assets/images/native/premium/guild_boosting", "Bool(true)": 24 };
const tmp3 = arg1(dependencyMap[4]);
obj.mainCard = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[6]).radii.sm, shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: { <string:1140607356>: "y", <string:1751293292>: "isArray" } };
obj.buttonGroup = { paddingVertical: 0 };
obj.loadingContainer = {};
let closure_12 = obj.createStyles(obj);
let closure_13 = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[6]).radii.sm, shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: { <string:1140607356>: "y", <string:1751293292>: "isArray" } };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = callback4();
  let obj = { source: importDefault(dependencyMap[8]) };
  ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
  obj = { style: items, source: importDefault(dependencyMap[9]) };
  const items = [tmp.logo, { marginTop: importDefault(dependencyMap[7])().top }];
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
