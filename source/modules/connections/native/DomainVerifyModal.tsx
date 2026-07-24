// Module ID: 9038
// Function ID: 71065
// Name: DomainScreen
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 1456, 507, 5121, 4126, 1212, 9039, 9044, 4543, 4337, 5087, 5517, 2]
// Exports: default

// Module 9038 (DomainScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function DomainScreen(onClose) {
  onClose = onClose.onClose;
  let importDefault;
  let first;
  let callback;
  let React;
  function verify() {
    callback2(true);
    callback(null);
    const HTTP = onClose(first[8]).HTTP;
    let obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
    }).catch((body) => {
      body = body.body;
      if (null != body) {
        if (body.proof) {
          const obj = { proof: body.body.proof, domain: outer1_2 };
          outer1_1.push(outer2_11.PROOF_DNS, obj);
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
      outer1_3(message);
    }).finally(() => {
      outer1_4(false);
    });
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onClose(first[7]);
  importDefault = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  first = tmp2[0];
  const tmp4 = callback(React.useState(null), 2);
  callback = tmp4[1];
  const tmp5 = callback(React.useState(false), 2);
  React = tmp5[1];
  obj = { bottom: true, style: tmp.container };
  obj = { variant: "text-md/normal", color: "text-default", style: tmp.description };
  const intl = onClose(first[11]).intl;
  obj.children = intl.string(onClose(first[11]).t.NxPUqY);
  const items = [callback2(onClose(first[10]).Text, obj), , ];
  const obj1 = { autoFocus: true, style: tmp.input };
  const intl2 = onClose(first[11]).intl;
  obj1.label = intl2.string(onClose(first[11]).t["4jIAa+"]);
  obj1.placeholder = onClose(first[13]).EXAMPLE_DOMAIN;
  obj1.error = tmp4[0];
  obj1.returnKeyType = "done";
  obj1.onChangeText = tmp2[1];
  obj1.onSubmitEditing = verify;
  items[1] = callback2(importDefault(first[12]), obj1);
  const obj2 = { loading: tmp5[0], disabled: "" === first };
  const intl3 = onClose(first[11]).intl;
  obj2.text = intl3.string(onClose(first[11]).t.PDTjLN);
  obj2.onPress = verify;
  items[2] = callback2(onClose(first[14]).Button, obj2);
  obj.children = items;
  return callback3(onClose(first[9]).SafeAreaPaddingView, obj);
}
function DNSProofScreen(proof) {
  let domain;
  let require;
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(proof[7]);
  const callback = obj.useNavigation();
  const tmp2 = callback(React.useState(null), 2);
  let first = tmp2[0];
  React = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  let closure_5 = tmp4[1];
  obj = { bottom: true, style: tmp.container };
  obj = { variant: "text-md/normal" };
  const intl = require(proof[11]).intl;
  obj.children = intl.string(require(proof[11]).t.cSURbq);
  const items = [callback2(require(proof[10]).Text, obj), , , , ];
  const obj1 = { style: tmp.dns };
  const obj2 = { variant: "text-md/normal" };
  const intl2 = require(proof[11]).intl;
  obj2.children = intl2.string(require(proof[11]).t.GL3q7k);
  const items1 = [callback2(require(proof[10]).Text, obj2), , , , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code };
  let obj6 = require(proof[13]);
  obj3.children = obj6.getDnsName(domain);
  items1[1] = callback2(require(proof[10]).Text, obj3);
  const obj4 = { variant: "text-md/normal" };
  const intl3 = require(proof[11]).intl;
  obj4.children = intl3.string(require(proof[11]).t.Ccmixu);
  items1[2] = callback2(require(proof[10]).Text, obj4);
  const obj5 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: "TXT" };
  items1[3] = callback2(require(proof[10]).Text, obj5);
  obj6 = { variant: "text-md/normal" };
  const intl4 = require(proof[11]).intl;
  obj6.children = intl4.string(require(proof[11]).t.PVLriT);
  items1[4] = callback2(require(proof[10]).Text, obj6);
  const obj7 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof };
  items1[5] = callback2(require(proof[10]).Text, obj7);
  obj1.children = items1;
  items[1] = callback3(closure_5, obj1);
  let tmp6 = null != first;
  if (tmp6) {
    const obj8 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: first };
    tmp6 = callback2(require(proof[10]).Text, obj8);
  }
  items[2] = tmp6;
  const obj9 = { style: tmp.button };
  const obj10 = { loading: tmp4[0] };
  const intl5 = require(proof[11]).intl;
  obj10.text = intl5.string(require(proof[11]).t["13ofGu"]);
  obj10.onPress = function onPress() {
    callback2(true);
    callback(null);
    const HTTP = outer1_0(proof[8]).HTTP;
    const obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
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
      outer1_4(message);
    }).finally(() => {
      outer1_5(false);
    });
  };
  obj9.children = callback2(require(proof[14]).Button, obj10);
  items[3] = callback2(closure_5, obj9);
  const obj11 = { style: tmp.button };
  const obj12 = { variant: "secondary" };
  const intl6 = require(proof[11]).intl;
  obj12.text = intl6.string(require(proof[11]).t.CkfdNx);
  obj12.onPress = function onPress() {

  };
  obj11.children = callback2(require(proof[14]).Button, obj12);
  items[4] = callback2(closure_5, obj11);
  obj.children = items;
  return callback3(require(proof[9]).SafeAreaPaddingView, obj);
}
function HTTPProofScreen(proof) {
  let domain;
  let require;
  ({ onClose: require, domain } = proof);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(1456) /* useNavigation */;
  const dependencyMap = obj.useNavigation();
  const tmp2 = callback(React.useState(null), 2);
  let first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  React = tmp4[1];
  obj = { bottom: true, style: tmp.container };
  obj = { variant: "text-md/normal" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.p4ql7y);
  const items = [callback2(require(4126) /* Text */.Text, obj), , , , ];
  const obj1 = { style: tmp.dns };
  const obj2 = { variant: "text-md/normal" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.GL3q7k);
  const items1 = [callback2(require(4126) /* Text */.Text, obj2), , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code };
  let obj6 = require(9044) /* EXAMPLE_DOMAIN */;
  obj3.children = obj6.getHttpName(domain);
  items1[1] = callback2(require(4126) /* Text */.Text, obj3);
  const obj4 = { variant: "text-md/normal" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl3.string(require(1212) /* getSystemLocale */.t.PVLriT);
  items1[2] = callback2(require(4126) /* Text */.Text, obj4);
  const obj5 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof.proof };
  items1[3] = callback2(require(4126) /* Text */.Text, obj5);
  obj1.children = items1;
  items[1] = callback3(View, obj1);
  let tmp6 = null != first;
  if (tmp6) {
    obj6 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: first };
    tmp6 = callback2(require(4126) /* Text */.Text, obj6);
  }
  items[2] = tmp6;
  const obj7 = { style: tmp.button };
  const obj8 = { loading: tmp4[0] };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj8.text = intl4.string(require(1212) /* getSystemLocale */.t["13ofGu"]);
  obj8.onPress = function onPress() {
    callback2(true);
    callback(null);
    const HTTP = outer1_0(arr[8]).HTTP;
    const obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      outer1_0();
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
      outer1_3(message);
    }).finally(() => {
      outer1_4(false);
    });
  };
  obj7.children = callback2(require(4543) /* Button */.Button, obj8);
  items[3] = callback2(View, obj7);
  const obj9 = { style: tmp.button };
  const obj10 = { variant: "secondary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj10.text = intl5.string(require(1212) /* getSystemLocale */.t.RhJMVQ);
  obj10.onPress = function onPress() {

  };
  obj9.children = callback2(require(4543) /* Button */.Button, obj10);
  items[4] = callback2(View, obj9);
  obj.children = items;
  return callback3(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
({ Endpoints: closure_6, PlatformTypes: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 8, marginTop: 16 };
_createForOfIteratorHelperLoose.dns = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.error = { marginTop: 16 };
_createForOfIteratorHelperLoose.code = { fontFamily: "monospace", marginBottom: 4 };
_createForOfIteratorHelperLoose.button = { marginTop: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default function DomainVerifyModal(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    function onClose(arg0) {
      return outer1_1(outer1_2[15]).pop();
    }
    let obj = {};
    obj = {};
    const intl = onClose(1212).intl;
    obj.headerTitle = intl.string(onClose(1212).t["7lo8+e"]);
    let obj2 = onClose(5087);
    obj.headerLeft = obj2.getHeaderBackButton(onClose);
    obj.render = function render() {
      return outer1_8(outer1_12, { onClose });
    };
    obj[constants.DOMAIN] = obj;
    obj = {};
    const intl2 = onClose(1212).intl;
    obj.headerTitle = intl2.string(onClose(1212).t["7lo8+e"]);
    obj.headerLeft = onClose(5087).getHeaderBackButton(onClose);
    obj.render = function render(domain) {
      return outer1_8(outer1_13, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_DNS] = obj;
    const obj1 = {};
    const intl3 = onClose(1212).intl;
    obj1.headerTitle = intl3.string(onClose(1212).t["7lo8+e"]);
    const obj5 = onClose(5087);
    obj1.headerLeft = onClose(5087).getHeaderBackButton(onClose);
    obj1.render = function render(domain) {
      return outer1_8(outer1_14, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_HTTP] = obj1;
    obj2 = { screens: obj, initialRouteName: constants.DOMAIN };
    const intl4 = onClose(1212).intl;
    obj2.headerBackTitle = intl4.string(onClose(1212).t["13/7kX"]);
    return callback2(onClose(5517).Navigator, obj2);
  }
};
