// Module ID: 8992
// Function ID: 70809
// Name: DomainScreen
// Dependencies: []
// Exports: default

// Module 8992 (DomainScreen)
function DomainScreen(onClose) {
  const arg1 = onClose.onClose;
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  function verify() {
    callback2(true);
    callback(null);
    const HTTP = onClose(first[8]).HTTP;
    const obj = { url: closure_6.CONNECTION(constants.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, first), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      if (null != body) {
        if (body.proof) {
          const obj = { proof: body.body.proof, domain: closure_2 };
          const arr = arr.push(constants.PROOF_DNS, obj);
        }
      }
      const body2 = body.body;
      let message;
      if (null != body2) {
        const errors = body2.errors;
        if (null != errors) {
          const domain = errors.domain;
          if (null != domain) {
            const _errors = domain._errors;
            if (null != _errors) {
              const first = _errors[0];
              if (null != first) {
                message = first.message;
              }
            }
          }
        }
      }
      if (!message) {
        const body3 = body.body;
        let message1;
        if (null != body3) {
          message1 = body3.message;
        }
        message = message1;
      }
      if (!message) {
        message = body.message;
      }
      closure_3(message);
    }).finally(() => {
      callback2(false);
    });
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  importDefault = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  dependencyMap = first;
  const tmp4 = callback(React.useState(null), 2);
  callback = tmp4[1];
  const tmp5 = callback(React.useState(false), 2);
  React = tmp5[1];
  obj = { bottom: true, style: tmp.container };
  obj = { cachedAt: 1, edpbxy: 1, style: tmp.description };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.NxPUqY);
  const items = [callback2(arg1(dependencyMap[10]).Text, obj), , ];
  const obj1 = { autoFocus: true, style: tmp.input };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[11]).t.4jIAa+);
  obj1.placeholder = arg1(dependencyMap[13]).EXAMPLE_DOMAIN;
  obj1.error = tmp4[0];
  obj1.returnKeyType = "done";
  obj1.onChangeText = tmp2[1];
  obj1.onSubmitEditing = verify;
  items[1] = callback2(importDefault(dependencyMap[12]), obj1);
  const obj2 = { loading: tmp5[0], disabled: "" === first };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[11]).t.PDTjLN);
  obj2.onPress = verify;
  items[2] = callback2(arg1(dependencyMap[14]).Button, obj2);
  obj.children = items;
  return callback3(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
}
function DNSProofScreen(proof) {
  let domain;
  ({ onClose: closure_0, domain } = proof);
  const importDefault = domain;
  proof = proof.proof;
  const dependencyMap = proof;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const callback = obj.useNavigation();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const React = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  let closure_5 = tmp4[1];
  obj = { bottom: true, style: tmp.container };
  obj = { variant: "text-md/normal" };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.cSURbq);
  const items = [callback2(arg1(dependencyMap[10]).Text, obj), , , , ];
  const obj1 = { style: tmp.dns };
  const obj2 = { variant: "text-md/normal" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[11]).t.GL3q7k);
  const items1 = [callback2(arg1(dependencyMap[10]).Text, obj2), , , , , ];
  const obj3 = { body: 24, type: 24, style: tmp.code };
  let obj6 = arg1(dependencyMap[13]);
  obj3.children = obj6.getDnsName(domain);
  items1[1] = callback2(arg1(dependencyMap[10]).Text, obj3);
  const obj4 = { variant: "text-md/normal" };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[11]).t.Ccmixu);
  items1[2] = callback2(arg1(dependencyMap[10]).Text, obj4);
  const obj5 = { body: 24, type: 24, accessibilityRole: null, flex: "21db92a27b93246affffebffc643fa50", style: tmp.code };
  items1[3] = callback2(arg1(dependencyMap[10]).Text, obj5);
  obj6 = { variant: "text-md/normal" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj6.children = intl4.string(arg1(dependencyMap[11]).t.PVLriT);
  items1[4] = callback2(arg1(dependencyMap[10]).Text, obj6);
  const obj7 = { body: 24, type: 24, style: tmp.code, children: proof };
  items1[5] = callback2(arg1(dependencyMap[10]).Text, obj7);
  obj1.children = items1;
  items[1] = callback3(closure_5, obj1);
  let tmp6 = null != first;
  if (tmp6) {
    const obj8 = { style: tmp.error, children: first };
    tmp6 = callback2(arg1(dependencyMap[10]).Text, obj8);
  }
  items[2] = tmp6;
  const obj9 = { style: tmp.button };
  const obj10 = { loading: tmp4[0] };
  const intl5 = arg1(dependencyMap[11]).intl;
  obj10.text = intl5.string(arg1(dependencyMap[11]).t.13ofGu);
  obj10.onPress = function onPress() {
    callback3(true);
    callback2(null);
    const HTTP = callback(proof[8]).HTTP;
    const obj = { url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      let message;
      if (null != body) {
        const errors = body.errors;
        if (null != errors) {
          const domain = errors.domain;
          if (null != domain) {
            const _errors = domain._errors;
            if (null != _errors) {
              const first = _errors[0];
              if (null != first) {
                message = first.message;
              }
            }
          }
        }
      }
      if (!message) {
        const body2 = body.body;
        let message1;
        if (null != body2) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = body.message;
      }
      closure_4(message);
    }).finally(() => {
      callback2(false);
    });
  };
  obj9.children = callback2(arg1(dependencyMap[14]).Button, obj10);
  items[3] = callback2(closure_5, obj9);
  const obj11 = { style: tmp.button };
  const obj12 = { variant: "secondary" };
  const intl6 = arg1(dependencyMap[11]).intl;
  obj12.text = intl6.string(arg1(dependencyMap[11]).t.CkfdNx);
  obj12.onPress = function onPress() {

  };
  obj11.children = callback2(arg1(dependencyMap[14]).Button, obj12);
  items[4] = callback2(closure_5, obj11);
  obj.children = items;
  return callback3(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
}
function HTTPProofScreen(proof) {
  let domain;
  ({ onClose: closure_0, domain } = proof);
  const importDefault = domain;
  const tmp = callback4();
  let obj = arg1(closure_2[7]);
  closure_2 = obj.useNavigation();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  const React = tmp4[1];
  obj = { bottom: true, style: tmp.container };
  obj = { variant: "text-md/normal" };
  const intl = arg1(closure_2[11]).intl;
  obj.children = intl.string(arg1(closure_2[11]).t.p4ql7y);
  const items = [callback2(arg1(closure_2[10]).Text, obj), , , , ];
  const obj1 = { style: tmp.dns };
  const obj2 = { variant: "text-md/normal" };
  const intl2 = arg1(closure_2[11]).intl;
  obj2.children = intl2.string(arg1(closure_2[11]).t.GL3q7k);
  const items1 = [callback2(arg1(closure_2[10]).Text, obj2), , , ];
  const obj3 = { body: 24, type: 24, style: tmp.code };
  let obj6 = arg1(closure_2[13]);
  obj3.children = obj6.getHttpName(domain);
  items1[1] = callback2(arg1(closure_2[10]).Text, obj3);
  const obj4 = { variant: "text-md/normal" };
  const intl3 = arg1(closure_2[11]).intl;
  obj4.children = intl3.string(arg1(closure_2[11]).t.PVLriT);
  items1[2] = callback2(arg1(closure_2[10]).Text, obj4);
  const obj5 = { body: 24, type: 24, style: tmp.code, children: proof.proof };
  items1[3] = callback2(arg1(closure_2[10]).Text, obj5);
  obj1.children = items1;
  items[1] = callback3(View, obj1);
  let tmp6 = null != first;
  if (tmp6) {
    obj6 = { style: tmp.error, children: first };
    tmp6 = callback2(arg1(closure_2[10]).Text, obj6);
  }
  items[2] = tmp6;
  const obj7 = { style: tmp.button };
  const obj8 = { loading: tmp4[0] };
  const intl4 = arg1(closure_2[11]).intl;
  obj8.text = intl4.string(arg1(closure_2[11]).t.13ofGu);
  obj8.onPress = function onPress() {
    callback3(true);
    callback2(null);
    const HTTP = callback(closure_2[8]).HTTP;
    const obj = { url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: closure_6.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      let message;
      if (null != body) {
        const errors = body.errors;
        if (null != errors) {
          const domain = errors.domain;
          if (null != domain) {
            const _errors = domain._errors;
            if (null != _errors) {
              const first = _errors[0];
              if (null != first) {
                message = first.message;
              }
            }
          }
        }
      }
      if (!message) {
        const body2 = body.body;
        let message1;
        if (null != body2) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = body.message;
      }
      closure_3(message);
    }).finally(() => {
      callback2(false);
    });
  };
  obj7.children = callback2(arg1(closure_2[14]).Button, obj8);
  items[3] = callback2(View, obj7);
  const obj9 = { style: tmp.button };
  const obj10 = { variant: "secondary" };
  const intl5 = arg1(closure_2[11]).intl;
  obj10.text = intl5.string(arg1(closure_2[11]).t.RhJMVQ);
  obj10.onPress = function onPress() {

  };
  obj9.children = callback2(arg1(closure_2[14]).Button, obj10);
  items[4] = callback2(View, obj9);
  obj.children = items;
  return callback3(arg1(closure_2[9]).SafeAreaPaddingView, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ Endpoints: closure_6, PlatformTypes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: { padding: 16 }, description: { textAlign: "center" }, input: { "Null": 16, "Null": 20, "Null": null } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[6]).radii.xs, padding: 8, marginTop: 16 };
obj.dns = obj;
obj.error = { marginTop: 16 };
obj.code = { -1320090558: true, -1309881241: true };
obj.button = { marginTop: 16 };
let closure_10 = obj.createStyles(obj);
let closure_11 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default function DomainVerifyModal(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    function onClose() {
      return callback(closure_2[15]).pop();
    }
    const arg1 = onClose;
    let obj = {};
    obj = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj.headerTitle = intl.string(arg1(dependencyMap[11]).t.7lo8+e);
    let obj2 = arg1(dependencyMap[16]);
    obj.headerLeft = obj2.getHeaderBackButton(onClose);
    obj.render = function render() {
      return callback2(closure_12, { onClose });
    };
    obj[constants.DOMAIN] = obj;
    obj = {};
    const intl2 = arg1(dependencyMap[11]).intl;
    obj.headerTitle = intl2.string(arg1(dependencyMap[11]).t.7lo8+e);
    obj.headerLeft = arg1(dependencyMap[16]).getHeaderBackButton(onClose);
    obj.render = function render(domain) {
      return callback2(closure_13, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_DNS] = obj;
    const obj1 = {};
    const intl3 = arg1(dependencyMap[11]).intl;
    obj1.headerTitle = intl3.string(arg1(dependencyMap[11]).t.7lo8+e);
    const obj5 = arg1(dependencyMap[16]);
    obj1.headerLeft = arg1(dependencyMap[16]).getHeaderBackButton(onClose);
    obj1.render = function render(domain) {
      return callback2(closure_14, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_HTTP] = obj1;
    obj2 = { screens: obj, initialRouteName: constants.DOMAIN };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj2.headerBackTitle = intl4.string(arg1(dependencyMap[11]).t.13/7kX);
    return callback2(arg1(dependencyMap[17]).Navigator, obj2);
  }
};
