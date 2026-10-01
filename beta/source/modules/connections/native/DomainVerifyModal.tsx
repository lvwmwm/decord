// Module ID: 8582
// Function ID: 8583
// Name: DomainVerifyModal
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 1485, 1271, 6544, 4832, 1115, 6023, 8583, 5281, 5039, 5936, 6421, 2]
// Exports: default

// Module 8582 (DomainVerifyModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import useNavigation from "useNavigation" /* 1485 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import DomainVerifyUtils from "DomainVerifyUtils" /* 8583 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function DomainScreen(onClose) {
  let closure_1;
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let tmp4;
  onClose = onClose.onClose;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  function verify() {
    closure_4(true);
    let tmp2 = closure_3(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      onClose();
    });
    const catchPromise = nextPromise.catch((error) => {
      const body = error.body;
      let proof;
      if (body != null) {
        proof = body.proof;
      }
      if (proof) {
        const obj = { proof: error.body.proof, domain };
        closure_1_1.push(constants.PROOF_DNS, obj);
      } else {
        const body2 = error.body;
        let message;
        const tmp2 = closure_1_3;
        if (body2 != null) {
          const errors = body2.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body3 = error.body;
          let message1;
          if (body3 != null) {
            message1 = body3.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        tmp2(message);
      }
    });
    catchPromise.finally(() => {
      closure_1_4(false);
    });
  }
  const tmp = closure_10();
  let obj = onClose(first[7]);
  importDefault = obj.useNavigation();
  [first, tmp4] = react.useState("");
  [first1, _slicedToArray] = react.useState(null);
  [first2, react] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  const SafeAreaPaddingView = onClose(first[9]).SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl.string(onClose(first[11]).t.NxPUqY) };
  const Text = onClose(first[10]).Text;
  intl = onClose(first[11]).intl;
  items = [closure_8(Text, obj3), , ];
  const obj4 = { autoFocus: true, style: tmp.input, label: intl2.string(onClose(first[11]).t["4jIAa+"]), placeholder: onClose(first[13]).EXAMPLE_DOMAIN, error: first1, returnKeyType: "done", onChangeText: tmp4, onSubmitEditing: verify };
  const tmp9 = require("FreeFormInputGroup");
  intl2 = onClose(first[11]).intl;
  items[1] = closure_8(tmp9, obj4);
  const obj5 = { loading: first2, disabled: "" === first, text: intl3.string(onClose(first[11]).t.PDTjLN), onPress: verify };
  const Button = onClose(first[14]).Button;
  intl3 = onClose(first[11]).intl;
  items[2] = closure_8(Button, obj5);
  return closure_9(SafeAreaPaddingView, obj2);
}
function DNSProofScreen(proof) {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let c4;
  let c5;
  let closure_3;
  let domain;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let obj14;
  let obj16;
  let obj7;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  react = undefined;
  c5 = undefined;
  let tmp = closure_10();
  let obj = require("useNavigation");
  _slicedToArray = obj.useNavigation();
  [tmp5, c4] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [tmp7, c5] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  _slicedToArray(react.useState(false), 2);
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", children: intl.string(require("intl").t.cSURbq) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_8(Text, obj3), , , , ];
  const obj4 = { style: tmp.dns, children: items1 };
  const obj5 = { variant: "text-md/normal", children: intl2.string(require("intl").t.GL3q7k) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1 = [closure_8(Text2, obj5), , , , , ];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: obj7.getDnsName(domain) };
  const Text3 = require("Text/Text").Text;
  obj7 = require("DomainVerifyUtils");
  items1[1] = closure_8(Text3, obj6);
  const obj8 = { variant: "text-md/normal", children: intl3.string(require("intl").t.Ccmixu) };
  const Text4 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items1[2] = closure_8(Text4, obj8);
  const obj9 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: "TXT" };
  items1[3] = closure_8(require("Text/Text").Text, obj9);
  const obj10 = { variant: "text-md/normal", children: intl4.string(require("intl").t.PVLriT) };
  const Text5 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  items1[4] = closure_8(Text5, obj10);
  const obj11 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof };
  items1[5] = closure_8(require("Text/Text").Text, obj11);
  items[1] = closure_9(c5, obj4);
  let tmp9Result = null != tmp5;
  const tmp8 = closure_9;
  if (tmp9Result) {
    const obj12 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = tmp9(tmp2(tmp3[10]).Text, obj12);
  }
  items[2] = tmp9Result;
  const obj13 = { style: tmp.button, children: closure_8(Button, obj14) };
  obj14 = {
    loading: tmp7,
    text: intl5.string(require("intl").t["13ofGu"]),
    onPress() {
      let tmp = _undefined2(true);
      _undefined(null);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
      const postResult = HTTP.post(request);
      const nextPromise = postResult.then(() => {
        closure_1_0();
      });
      const catchPromise = nextPromise.catch((error) => {
        const body = error.body;
        let message;
        const tmp = _undefined;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        tmp(message);
      });
      catchPromise.finally(() => {
        _undefined2(false);
      });
    }
  };
  Button = tmp2(tmp3[14]).Button;
  intl5 = tmp2(tmp3[11]).intl;
  items[3] = closure_8(c5, obj13);
  const obj15 = { style: tmp.button, children: closure_8(Button2, obj16) };
  obj16 = {
    variant: "secondary",
    text: intl6.string(require("intl").t.CkfdNx),
    onPress() {
      const obj = { proof, domain };
      closure_3.push(constants.PROOF_HTTP, obj);
    }
  };
  Button2 = tmp2(tmp3[14]).Button;
  intl6 = tmp2(tmp3[11]).intl;
  items[4] = closure_8(c5, obj15);
  return tmp8(SafeAreaPaddingView, obj2);
}
function HTTPProofScreen(proof) {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let closure_2;
  let domain;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj12;
  let obj14;
  let obj7;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = proof);
  _slicedToArray = undefined;
  react = undefined;
  proof = proof.proof;
  let tmp = closure_10();
  const obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [tmp5, c3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [tmp7, c4] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  _slicedToArray(react.useState(false), 2);
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", children: intl.string(intl7.t.p4ql7y) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_8(Text, obj3), , , , ];
  const obj4 = { style: tmp.dns, children: items1 };
  const obj5 = { variant: "text-md/normal", children: intl2.string(intl7.t.GL3q7k) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items1 = [closure_8(Text2, obj5), , , ];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: obj7.getHttpName(domain) };
  const Text3 = Text_Text.Text;
  obj7 = DomainVerifyUtils;
  items1[1] = closure_8(Text3, obj6);
  const obj8 = { variant: "text-md/normal", children: intl3.string(intl7.t.PVLriT) };
  const Text4 = Text_Text.Text;
  intl3 = intl7.intl;
  items1[2] = closure_8(Text4, obj8);
  const obj9 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof };
  items1[3] = closure_8(Text_Text.Text, obj9);
  items[1] = closure_9(View, obj4);
  let tmp9Result = null != tmp5;
  const tmp8 = closure_9;
  if (tmp9Result) {
    const obj10 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = tmp9(tmp2(4832).Text, obj10);
  }
  items[2] = tmp9Result;
  const obj11 = { style: tmp.button, children: closure_8(Button, obj12) };
  obj12 = {
    loading: tmp7,
    text: intl4.string(intl7.t["13ofGu"]),
    onPress() {
      let tmp = _undefined2(true);
      _undefined(null);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
      const postResult = HTTP.post(request);
      const nextPromise = postResult.then(() => {
        closure_1_0();
      });
      const catchPromise = nextPromise.catch((error) => {
        const body = error.body;
        let message;
        const tmp = _undefined;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        tmp(message);
      });
      catchPromise.finally(() => {
        _undefined2(false);
      });
    }
  };
  Button = tmp2(5281).Button;
  intl4 = tmp2(1115).intl;
  items[3] = closure_8(View, obj11);
  const obj13 = { style: tmp.button, children: closure_8(Button2, obj14) };
  obj14 = {
    variant: "secondary",
    text: intl5.string(intl7.t.RhJMVQ),
    onPress() {
      closure_2.pop();
    }
  };
  Button2 = tmp2(5281).Button;
  intl5 = tmp2(1115).intl;
  items[4] = closure_8(View, obj13);
  return tmp8(SafeAreaPaddingView, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ Endpoints: metroRequire, PlatformTypes: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 }, dns: obj2, error: { marginTop: 16 }, code: { fontFamily: "monospace", marginBottom: 4 }, button: { marginTop: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginTop: 16 };
let closure_10 = createStyles.createStyles(obj);
const constants2 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
const result = size.fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default function DomainVerifyModal(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj5;
  let obj7;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    function onClose() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
    let obj = {};
    const DOMAIN = constants2.DOMAIN;
    const obj2 = {
      headerTitle: intl.string(onClose(1115).t["7lo8+e"]),
      headerLeft: obj3.getHeaderBackButton(onClose),
      render() {
          const obj = { onClose };
          return metroImportAll(DomainScreen, obj);
        }
    };
    intl = onClose(1115).intl;
    obj[DOMAIN] = obj2;
    obj3 = onClose(5936);
    const PROOF_DNS = constants2.PROOF_DNS;
    const obj4 = {
      headerTitle: intl2.string(onClose(1115).t["7lo8+e"]),
      headerLeft: obj5.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(DNSProofScreen, obj);
        }
    };
    intl2 = onClose(1115).intl;
    obj[PROOF_DNS] = obj4;
    obj5 = onClose(5936);
    const PROOF_HTTP = constants2.PROOF_HTTP;
    const obj6 = {
      headerTitle: intl3.string(onClose(1115).t["7lo8+e"]),
      headerLeft: obj7.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(HTTPProofScreen, obj);
        }
    };
    intl3 = onClose(1115).intl;
    obj[PROOF_HTTP] = obj6;
    obj7 = onClose(5936);
    const obj8 = { screens: obj, initialRouteName: constants2.DOMAIN, headerBackTitle: intl4.string(onClose(1115).t["13/7kX"]) };
    const Navigator = onClose(6421).Navigator;
    intl4 = onClose(1115).intl;
    return closure_8(Navigator, obj8);
  }
};
