// Module ID: 13688
// Function ID: 105072
// Name: TwoFASetupLanding
// Dependencies: [31, 27, 33, 4130, 13689, 13685, 5121, 13690, 4126, 1212, 2]
// Exports: default

// Module 13688 (TwoFASetupLanding)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = callback3();
  let obj = require(13689) /* styles */;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { bottom: true, style: tmp.container };
  const obj2 = { source: importDefault(13690), style: tmp.authIcon };
  const items = [callback(closure_3, obj2), , ];
  const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t["9E74Dx"]);
  items[1] = callback(require(4126) /* Text */.Heading, obj3);
  const obj4 = { variant: "text-md/normal", style: items1 };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.format(require(1212) /* getSystemLocale */.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = callback(require(4126) /* Text */.Text, obj4);
  obj1.children = items;
  obj.children = callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj1);
  obj.children = callback(closure_4, obj);
  return callback(require(13685) /* getPageMarker */.TwoFASetupModalScreen, obj);
};
