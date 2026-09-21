// Module ID: 15051
// Function ID: 15052
// Name: TwoFASetupLanding
// Dependencies: [19, 17, 21, 4758, 558, 568, 15052, 15053, 4754, 1119, 7371, 15048, 2]

// Module 15051 (TwoFASetupLanding)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7371 */;
import TwoFASetupModal from "TwoFASetupModal" /* 15048 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 15052 */;
import _modDef15053 from "module_15053" /* 15053 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(16);
  const tmp4 = closure_7();
  const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
  ({ container, container: container2 } = tmp4);
  if (cResult[0] !== tmp4.authIcon) {
    const obj3 = { source: _modDef15053, style: tmp4.authIcon };
    const tmp10 = hasOwnProperty(React3, obj3);
    cResult[0] = tmp4.authIcon;
    cResult[1] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1119).intl;
    obj4.children = intl.string(tmp(1119).t["9E74Dx"]);
    const tmp13 = hasOwnProperty(tmp(4754).Heading, obj4);
    cResult[2] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === twoFASetupStyles.modalBody) {
    if (cResult[4] === twoFASetupStyles.text) {
      let tmp14 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const formatResult = intl2.format(tmp(1119).t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
      cResult[6] = formatResult;
      let tmp15 = formatResult;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== tmp14) {
      const obj5 = { variant: "text-md/normal", style: tmp14, children: tmp15 };
      const tmp19 = hasOwnProperty(tmp(4754).Text, obj5);
      cResult[7] = tmp14;
      cResult[8] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp17) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp20) {
            let tmp23 = cResult[15];
          }
          return tmp23;
        }
        const obj6 = { children: null };
        const obj7 = { style: container, children: tmp20 };
        obj6.children = hasOwnProperty(React4, obj7);
        const tmp26 = hasOwnProperty(tmp(15048).TwoFASetupModalScreen, obj6);
        cResult[13] = tmp4.container;
        cResult[14] = tmp20;
        cResult[15] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj8 = { bottom: true, style: container2, children: null };
    const items = [tmp6, tmp11, tmp17];
    obj8.children = items;
    const tmp22 = timestampProducer(tmp(7371).SafeAreaPaddingView, obj8);
    cResult[9] = tmp4.container;
    cResult[10] = tmp6;
    cResult[11] = tmp17;
    cResult[12] = tmp22;
    tmp20 = tmp22;
  }
  const items1 = [, ];
  ({ modalBody: arr[0], text: arr[1] } = twoFASetupStyles);
  cResult[3] = twoFASetupStyles.modalBody;
  cResult[4] = twoFASetupStyles.text;
  cResult[5] = items1;
  tmp14 = items1;
}) : (() => {
  const tmp = closure_7();
  const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { bottom: true, style: tmp.container, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef15053, style: tmp.authIcon }), , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["9E74Dx"]);
  items[1] = hasOwnProperty(Text_Text.Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: null, children: null };
  const items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj7.style = items1;
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = hasOwnProperty(Text_Text.Text, obj7);
  obj4.children = items;
  obj3.children = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj2.children = hasOwnProperty(React4, obj3);
  return hasOwnProperty(TwoFASetupModal.TwoFASetupModalScreen, obj2);
});
