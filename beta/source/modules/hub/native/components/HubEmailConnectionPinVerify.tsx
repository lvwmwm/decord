// Module ID: 12254
// Function ID: 12255
// Name: HubEmailConnectionPinVerify
// Dependencies: [32, 5, 19, 17, 2067, 21, 4836, 4528, 9338, 12255, 10787, 12, 12246, 1115, 4735, 6760, 12241, 12256, 4832, 6501, 2]
// Exports: default

// Module 12254 (HubEmailConnectionPinVerify)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 9338 */;
import HubJoinManagerDefault from "HubJoinManager" /* 12255 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, closure_3, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
function presentResendToast(content) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "HUB_EMAIL_RESET", content, icon: AssetRegistryDefault };
  obj.open(obj2);
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  let c3;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj2;
  let onClose;
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  _slicedToArray = undefined;
  let obj = function _handleCodeEntered() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      let obj3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let closure_1;
          let guild2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              guild2 = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj3.verifyCode(guild2, importDefault, email), done: false };
              obj3 = closure_1(closure_2[12]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_1 = closure_3;
              const self = this;
              const self2 = this;
              const aPIError = new guild2(closure_2[14]).APIError(closure_1);
              closure_130_3(aPIError);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              guild2 = guild.getGuild(closure_130_1);
              if (null != guild2) {
                closure_130_2(true);
                obj = guild2(closure_2[15]);
                obj.transitionToGuild(guild2.id);
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  const items = [onClose];
  const effect = react.useEffect(() => {
    obj = HubJoinManagerDefault;
    obj.initialize(() => {
      closure_1_2(true);
      require("navigateToLastChannel")();
    });
    return () => {
      obj = closure_1_1(onClose[9]);
      obj.terminate();
    };
  }, items);
  const tmp3 = onClose;
  obj = require("module_12");
  const throttleResult = obj.throttle(obj(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            onClose = tmp;
            importDefault = tmp4;
            aPIError = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj3.sendVerificationEmail(email, true, importDefault), done: false };
            obj3 = require("HubActionCreators");
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            importDefault = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new email(onClose[14]).APIError(importDefault);
            let anyErrorMessage;
            const obj2 = aPIError;
            const tmp21 = presentResendToast;
            if (aPIError != null) {
              anyErrorMessage = obj2.getAnyErrorMessage();
            }
            email = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = email(onClose[13]).intl;
              email = intl2.string(email(onClose[13]).t.FPzC5z);
            }
            tmp21(email);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const intl = email(onClose[13]).intl;
            presentResendToast(intl.string(email(onClose[13]).t["2bO4dz"]));
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 1;
        }
      }
    }
  }), 1000);
  [obj2, c3] = _slicedToArray(react.useState(null), 2);
  let obj3 = { style: tmp.container, children: items1 };
  const tmp5 = _slicedToArray(react.useState(null), 2);
  let obj4 = { source: require("AssetRegistry") };
  const HubEmailConnectionScreen = email(onClose[16]).HubEmailConnectionScreen;
  items1 = [closure_9(closure_7, obj4), , , , , ];
  let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(email(onClose[13]).t.SJ3Lxc) };
  const Text = email(onClose[18]).Text;
  intl = email(onClose[13]).intl;
  items1[1] = closure_9(Text, obj5);
  let obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(email(onClose[13]).t["b+W0oq"], { onClick: throttleResult, email }) };
  const Text2 = email(onClose[18]).Text;
  intl2 = email(onClose[13]).intl;
  items1[2] = closure_9(Text2, obj6);
  const obj7 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted", children: intl3.string(email(onClose[13]).t.rpWT1s) };
  const Text3 = email(onClose[18]).Text;
  intl3 = email(onClose[13]).intl;
  items1[3] = closure_9(Text3, obj7);
  const obj8 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      return obj(...arguments);
    },
    codeType: email(onClose[19]).CodeType.ALPHANUMERIC
  };
  const CodeBlocks = email(onClose[19]).CodeBlocks;
  items1[4] = closure_9(CodeBlocks, obj8);
  let tmp6Result = null != obj2;
  const tmp7 = email;
  const tmp8 = closure_10;
  const tmp9 = closure_6;
  if (tmp6Result) {
    const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: obj2.getAnyErrorMessage() };
    const Text4 = tmp7(tmp3[18]).Text;
    tmp6Result = tmp6(Text4, obj9);
  }
  items1[5] = tmp6Result;
  const obj10 = { children: tmp8(tmp9, obj3) };
  return closure_9(HubEmailConnectionScreen, obj10);
};
