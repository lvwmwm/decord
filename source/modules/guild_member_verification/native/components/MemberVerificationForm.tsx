// Module ID: 9175
// Function ID: 71869
// Name: useVerificationForm
// Dependencies: [5, 57, 31, 27, 5082, 653, 33, 4130, 3831, 1212, 9176, 9149, 5450, 3950, 566, 4620, 5128, 9177, 9004, 4543, 2]
// Exports: default

// Module 9175 (useVerificationForm)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NO_MEMBER_VERIFICATION_FORM as closure_8 } from "_isNativeReflectConstruct";
import { VerificationLevels } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function useVerificationForm(guild) {
  function getFormFields() {
    if (!memo) {
      if (null != closure_1) {
        const items = [closure_1];
        let formFields;
        if (null != stateFromStores) {
          formFields = stateFromStores.formFields;
        }
        if (null == formFields) {
          formFields = [];
        }
        HermesBuiltin.arraySpread(formFields, 1);
      }
      return items;
    }
    let formFields1;
    if (null != stateFromStores) {
      formFields1 = stateFromStores.formFields;
    }
    if (null == formFields1) {
      formFields1 = [];
    }
  }
  const id = guild.id;
  let closure_1 = (function useRequiredVerificationFields(id) {
    let closure_0 = id;
    const callback = id(stateFromStores[11]).useInitialVerification(id.id);
    return callback(stateFromStores[12])(() => {
      if (verificationLevel.verificationLevel === outer2_9.VERY_HIGH) {
        if (null == phone) {
          let obj = { field_type: id(stateFromStores[13]).VerificationFormFieldTypes.VERIFICATION, platform: id(stateFromStores[13]).UserVerificationFieldPlatforms.PHONE };
          let tmp6 = obj;
        } else {
          tmp6 = null;
        }
        obj = tmp6;
      } else {
        obj = { field_type: id(stateFromStores[13]).VerificationFormFieldTypes.VERIFICATION, platform: id(stateFromStores[13]).UserVerificationFieldPlatforms.EMAIL };
      }
      return obj;
    });
  })(guild);
  let items = [_isNativeReflectConstruct];
  const items1 = [id];
  stateFromStores = id(stateFromStores[14]).useStateFromStores(items, () => outer1_7.get(id), items1);
  let formFields;
  if (null != stateFromStores) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  const memo = React.useMemo(() => {
    let someResult;
    if (null != stateFromStores) {
      const formFields = stateFromStores.formFields;
      if (null != formFields) {
        someResult = formFields.some((field_type) => field_type.field_type !== id(stateFromStores[13]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  let callback = React.useRef(getFormFields);
  const effect = React.useEffect(() => {
    _slicedToArray.current = getFormFields;
  });
  let tmp6 = callback(React.useState(getFormFields()), 2);
  React = tmp7;
  const items3 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      tmp7(ref.current());
    }
  }, items3);
  const items4 = [tmp6[0], tmp6[1], stateFromStores, memo];
  return items4;
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 }, submitButton: { marginTop: 12, marginBottom: 12 }, error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 } });
const result = require("result").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  let c8;
  let c9;
  let importDefault;
  let onClose;
  let tmp10;
  let tmp8;
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  let first;
  let c6;
  c8 = undefined;
  c9 = undefined;
  let memo;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = userVerificationState(tmp);
    return obj(...arguments);
  }
  const tmp = callback2();
  let obj = guild(onClose[11]);
  const userVerificationState = obj.useUserVerificationState();
  const tmp3 = first(useVerificationForm(guild), 4);
  first = tmp3[0];
  const React = tmp3[1];
  c6 = tmp5;
  let _isNativeReflectConstruct = tmp6;
  [tmp8, c8] = first(React.useState(false), 2);
  const tmp7 = first(React.useState(false), 2);
  [tmp10, c9] = first(React.useState(null), 2);
  let items = [onClose, tmp3[2]];
  const effect = React.useEffect(() => {
    if (c6 === c8) {
      if (null != onClose) {
        onClose(false);
      }
    }
  }, items);
  const items1 = [guild.verificationLevel, tmp3[3], userVerificationState, first];
  memo = React.useMemo(() => {
    if (null != first) {
      if (first.some((required) => !guild(onClose[15]).isValidFormResponse(required))) {
        return true;
      }
    }
    if (_isNativeReflectConstruct) {
      return false;
    } else {
      const verificationLevel = guild.verificationLevel;
      if (_undefined.VERY_HIGH === verificationLevel) {
        return !userVerificationState[guild(undefined, onClose[13]).UserVerificationFieldPlatforms.PHONE];
      } else {
        if (_undefined.HIGH !== verificationLevel) {
          if (_undefined.MEDIUM !== verificationLevel) {
            if (_undefined.LOW !== verificationLevel) {
              const NONE = _undefined.NONE;
              return false;
            }
          }
        }
        let tmp10 = !userVerificationState[guild(undefined, onClose[13]).UserVerificationFieldPlatforms.EMAIL];
        if (tmp10) {
          tmp10 = !userVerificationState[guild(undefined, onClose[13]).UserVerificationFieldPlatforms.PHONE];
        }
        return tmp10;
      }
    }
  }, items1);
  if (null == first) {
    return null;
  } else {
    obj = { style: tmp.container };
    obj = {
      rulesChannelId: guild.rulesChannelId,
      formFields: first,
      onChange: function handleFormChange(arg0, arg1) {
          if (null != first) {
            const items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(first.slice(0, arg0), 0);
            const obj = {};
            const merged = Object.assign(tmp2);
            obj["response"] = arg1;
            items[arraySpreadResult] = obj;
            const sum = arraySpreadResult + 1;
            arraySpreadResult = HermesBuiltin.arraySpread(first.slice(arg0 + 1), sum);
            callback(items);
          }
        },
      verification: userVerificationState
    };
    const items2 = [memo(importDefault(onClose[17]), obj), , ];
    let tmp16 = null;
    if (null != tmp10) {
      const obj1 = { style: tmp.error, children: tmp10 };
      tmp16 = memo(importDefault(onClose[18]), obj1);
    }
    items2[1] = tmp16;
    const obj2 = { style: tmp.submitButton };
    const obj3 = { variant: "primary", size: "md", grow: true };
    const intl = guild(onClose[9]).intl;
    obj3.text = intl.string(guild(onClose[9]).t["r8/DT+"]);
    obj3.loading = tmp8;
    obj3.disabled = tmp8;
    obj3.onPress = function handleSubmit() {
      return _handleSubmit(...arguments);
    };
    obj2.children = memo(guild(onClose[19]).Button, obj3);
    items2[2] = memo(c6, obj2);
    obj.children = items2;
    return _handleSubmit(c6, obj);
  }
  const tmp9 = first(React.useState(null), 2);
};
