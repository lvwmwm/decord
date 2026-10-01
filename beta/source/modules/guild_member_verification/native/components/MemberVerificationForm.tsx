// Module ID: 5908
// Function ID: 5909
// Name: MemberVerificationForm
// Dependencies: [5, 32, 19, 17, 5884, 1074, 21, 4836, 4528, 1115, 5909, 5886, 5910, 4658, 504, 5365, 5859, 5911, 6360, 5281, 2]
// Exports: default

// Module 5908 (MemberVerificationForm)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import MemberVerificationFormStore2 from "MemberVerificationFormStore" /* 5884 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, phone;

let c10;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let closure_8 = MemberVerificationFormStore2.NO_MEMBER_VERIFICATION_FORM;
const VerificationLevels = Constants.VerificationLevels;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 }, submitButton: { marginTop: 12, marginBottom: 12 }, error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  let Button;
  let _undefined;
  let _undefined2;
  let c8;
  let c9;
  let closure_5;
  let intl;
  let items8;
  let obj9;
  let onClose;
  let tmp26;
  let tmp28;
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  let first1;
  let closure_7;
  c8 = undefined;
  c9 = undefined;
  let memo1;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj3;
      let obj4;
      function showIncompleteToast() {
        let intl;
        obj = { key: "MEMBER_VERIFICATION_FORM_INCOMPLETE", content: intl.string(closure_1_0(closure_1_2[9]).t.StC497), icon: closure_1_1(closure_1_2[10]) };
        const open = closure_1_1(closure_1_2[8]).open;
        closure_1_1(closure_1_2[8]);
        intl = closure_1_0(closure_1_2[9]).intl;
        open(obj);
      }
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
        let body;
        try {
          let closure_2;
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
              closure_2 = tmp;
              let closure_1 = tmp4;
              id = undefined;
              body = undefined;
              if (null != first1) {
                const tmp33 = memo1;
                if (tmp33) {
                  showIncompleteToast();
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  _undefined2(null);
                  _undefined(true);
                  id = closure_2_6;
                  if (closure_2_6 == null) {
                    id = closure_1_8;
                  }
                  const obj6 = { formFields: obj3.removeInternalFields(tmp56) };
                  const merged = Object.assign(id);
                  obj3 = id(closure_2[15]);
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: obj4.submitVerificationForm(id.id, obj6), done: false };
                  obj4 = closure_1(closure_2[16]);
                  return obj7;
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            body = undefined;
            if (body != null) {
              body = body.body;
            }
            let version;
            const tmp19 = closure_130_9;
            if (body != null) {
              const errors = body.errors;
              if (errors != null) {
                version = errors.version;
              }
            }
            if (null == version) {
              let message;
              let form_fields;
              if (body != null) {
                const errors2 = body.errors;
                if (errors2 != null) {
                  form_fields = errors2.form_fields;
                }
              }
              if (null == form_fields) {
                if (body != null) {
                  message = body.message;
                }
              }
              tmp19(message);
              closure_130_8(false);
            }
            let intl = id(closure_2[9]).intl;
            message = intl.string(id(closure_2[9]).t.PD09Sl);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            id = value;
            closure_130_8(false);
            if (closure_130_1 != null) {
              tmp9(id);
            }
            if (closure_130_2 != null) {
              closure_130_2(true);
            }
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp49) {
          body = tmp49;
          if (0 === c4) {
            c6 = 3;
            throw tmp49;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp2 = closure_12();
  const tmp3 = guild;
  const tmp4 = onClose;
  obj = guild(onClose[11]);
  const userVerificationState = obj.useUserVerificationState();
  let memo;
  react = undefined;
  let closure_6;
  function getFormFields() {
    const tmp2 = memo;
    if (!tmp2) {
      let items;
      if (null != closure_1) {
        items = [tmp3];
        let formFields;
        if (stateFromStores != null) {
          formFields = stateFromStores.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        HermesBuiltin.arraySpread(items, formFields, 1);
      }
      return items;
    }
    let formFields1;
    if (stateFromStores != null) {
      formFields1 = stateFromStores.formFields;
    }
    if (formFields1 == null) {
      formFields1 = [];
    }
  }
  let id = guild.id;
  let obj2 = guild(onClose[11]);
  obj2.useInitialVerification(guild.id);
  const tmp7 = require("react")(() => {
    if (guild.verificationLevel === constants.VERY_HIGH) {
      phone = undefined;
      if (phone != null) {
        phone = phone.phone;
      }
      let tmp5 = null;
      if (!phone) {
        tmp5 = { field_type: guild(onClose[13]).VerificationFormFieldTypes.VERIFICATION, platform: guild(onClose[13]).UserVerificationFieldPlatforms.PHONE };
        const obj2 = { field_type: guild(onClose[13]).VerificationFormFieldTypes.VERIFICATION, platform: guild(onClose[13]).UserVerificationFieldPlatforms.PHONE };
      }
      obj = tmp5;
    } else {
      obj = { field_type: guild(onClose[13]).VerificationFormFieldTypes.VERIFICATION, platform: guild(onClose[13]).UserVerificationFieldPlatforms.EMAIL };
    }
    return obj;
  });
  let closure_1 = tmp7;
  let obj3 = guild(onClose[14]);
  let items = [closure_7];
  const items1 = [id];
  const stateFromStores = obj3.useStateFromStores(items, () => closure_7.get(id), items1);
  let obj4 = react;
  let formFields;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  memo = useMemo(() => {
    let someResult;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        someResult = formFields.some((field_type) => field_type.field_type !== id(stateFromStores[13]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  react = obj4.useRef(getFormFields);
  const effect = obj4.useEffect(() => {
    ref.current = getFormFields;
  });
  if (!memo) {
    let items3;
    if (null != tmp7) {
      items3 = [tmp7];
      let formFields1;
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      if (formFields1 == null) {
        formFields1 = [];
      }
      let arraySpreadResult = HermesBuiltin.arraySpread(items3, formFields1, 1);
    }
    const tmp17 = first1(tmp12(items3), 2);
    let tmp19 = tmp17[1];
    const items4 = [stateFromStores];
    const first = tmp17[0];
    const effect1 = obj4.useEffect(() => {
      if (null != stateFromStores) {
        closure_6(ref.current());
      }
    }, items4);
    const items5 = [first, tmp19, stateFromStores, memo];
    const tmp21 = first1(items5, 4);
    first1 = tmp21[0];
    react = tmp21[1];
    closure_6 = tmp23;
    closure_7 = tmp24;
    [tmp26, c8] = first1(obj4.useState(false), 2);
    const tmp25 = first1(obj4.useState(false), 2);
    [tmp28, c9] = first1(obj4.useState(null), 2);
    const items6 = [onClose, tmp23];
    const tmp27 = first1(obj4.useState(null), 2);
    const effect2 = obj4.useEffect(() => {
      if (closure_6 === closure_8) {
        if (onClose != null) {
          tmp(false);
        }
      }
    }, items6);
    const items7 = [guild.verificationLevel, tmp24, userVerificationState, first1];
    memo1 = obj4.useMemo(() => {
      obj = first1;
      let someResult;
      if (first1 != null) {
        someResult = obj.some((item) => {
          obj = guild(onClose[15]);
          return !obj.isValidFormResponse(item);
        });
      }
      if (someResult) {
        return true;
      } else {
        const tmp2 = closure_7;
        if (tmp2) {
          return false;
        } else {
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.VERY_HIGH === verificationLevel) {
            return !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE];
          } else {
            if (VerificationLevels.HIGH !== verificationLevel) {
              if (VerificationLevels.MEDIUM !== verificationLevel) {
                if (VerificationLevels.LOW !== verificationLevel) {
                  const NONE = tmp4.NONE;
                  return false;
                }
              }
            }
            const tmp8 = !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL] && !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE];
            return tmp8;
          }
        }
      }
    }, items7);
    if (null == first1) {
      return null;
    } else {
      let tmp33 = closure_6;
      let obj5 = { style: tmp2.container, children: items8 };
      let obj6 = {
        rulesChannelId: guild.rulesChannelId,
        formFields: first1,
        onChange: function handleFormChange(arg0, response) {
              if (null != first1) {
                const items = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(items, first1.slice(0, arg0), 0);
                obj = { response };
                const merged = Object.assign(tmp4);
                items[arraySpreadResult] = obj;
                HermesBuiltin.arraySpread(items, first1.slice(arg0 + 1), arraySpreadResult + 1);
                closure_5(items);
              }
            },
        verification: userVerificationState
      };
      items8 = [memo1(tmp6(tmp4[17]), obj6), , ];
      let tmp34Result = null;
      const tmp32 = obj;
      if (null != tmp28) {
        let obj7 = { style: tmp2.error, children: tmp28 };
        tmp34Result = tmp34(tmp6(tmp4[18]), obj7);
      }
      items8[1] = tmp34Result;
      const obj8 = { style: tmp2.submitButton, children: memo1(Button, obj9) };
      obj9 = {
        variant: "primary",
        size: "md",
        grow: true,
        text: intl.string(tmp3(tmp4[9]).t["r8/DT+"]),
        loading: tmp26,
        disabled: tmp26,
        onPress: function handleSubmit() {
              return obj(...arguments);
            }
      };
      Button = tmp3(tmp4[19]).Button;
      intl = tmp3(tmp4[9]).intl;
      items8[2] = memo1(tmp33, obj8);
      return tmp32(tmp33, obj5);
    }
  }
  let formFields2;
  if (stateFromStores != null) {
    formFields2 = stateFromStores.formFields;
  }
  if (formFields2 == null) {
    formFields2 = [];
  }
};
