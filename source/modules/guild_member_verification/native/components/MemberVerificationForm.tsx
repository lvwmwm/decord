// Module ID: 9163
// Function ID: 71792
// Name: useVerificationForm
// Dependencies: []
// Exports: default

// Module 9163 (useVerificationForm)
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
  const View = getFormFields;
  const id = guild.id;
  const arg1 = id;
  let closure_1 = function useRequiredVerificationFields(id) {
    const callback = id(stateFromStores[11]).useInitialVerification(id.id);
    return callback(stateFromStores[12])(() => {
      if (arg0.verificationLevel === constants.VERY_HIGH) {
        if (null == phone) {
          let obj = { field_type: arg0(closure_2[13]).VerificationFormFieldTypes.VERIFICATION, platform: arg0(closure_2[13]).UserVerificationFieldPlatforms.PHONE };
          let tmp6 = obj;
        } else {
          tmp6 = null;
        }
        obj = tmp6;
      } else {
        obj = { field_type: arg0(closure_2[13]).VerificationFormFieldTypes.VERIFICATION, platform: arg0(closure_2[13]).UserVerificationFieldPlatforms.EMAIL };
      }
      return obj;
    });
  }(guild);
  const items = [closure_7];
  const items1 = [id];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => closure_7.get(id), items1);
  const dependencyMap = stateFromStores;
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
        someResult = formFields.some((field_type) => field_type.field_type !== callback(closure_2[13]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  let closure_3 = memo;
  const callback = React.useRef(getFormFields);
  const effect = React.useEffect(() => {
    closure_4.current = getFormFields;
  });
  const tmp6 = callback(React.useState(getFormFields()), 2);
  const React = tmp7;
  const items3 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      tmp7(ref.current());
    }
  }, items3);
  const items4 = [tmp6[0], tmp6[1], stateFromStores, memo];
  return items4;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[4]).NO_MEMBER_VERIFICATION_FORM;
const VerificationLevels = arg1(dependencyMap[5]).VerificationLevels;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createStyles({ container: {}, submitButton: { visible: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", transparent: "bun run write-native-version" }, error: { -9223372036854775808: null, 0: null, 0: null } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  let onClose;
  let tmp10;
  let tmp8;
  guild = guild.guild;
  const arg1 = guild;
  ({ onSuccess: closure_1, onClose } = guild);
  const dependencyMap = onClose;
  let callback;
  let View;
  let closure_8;
  let closure_9;
  let memo;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = userVerificationState(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback2();
  let obj = arg1(dependencyMap[11]);
  const userVerificationState = obj.useUserVerificationState();
  let closure_3 = userVerificationState;
  const tmp3 = callback(useVerificationForm(guild), 4);
  const first = tmp3[0];
  callback = first;
  const React = tmp3[1];
  View = tmp5;
  let closure_7 = tmp6;
  [tmp8, closure_8] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  [tmp10, closure_9] = callback(React.useState(null), 2);
  const items = [onClose, tmp3[2]];
  const effect = React.useEffect(() => {
    if (tmp5 === closure_8) {
      if (null != onClose) {
        onClose(false);
      }
    }
  }, items);
  const items1 = [guild.verificationLevel, tmp3[3], userVerificationState, first];
  memo = React.useMemo(() => {
    if (null != first) {
      if (first.some((required) => !callback(closure_2[15]).isValidFormResponse(required))) {
        return true;
      }
    }
    if (tmp6) {
      return false;
    } else {
      const verificationLevel = guild.verificationLevel;
      if (constants.VERY_HIGH === verificationLevel) {
        return !userVerificationState[closure_0(undefined, closure_2[13]).UserVerificationFieldPlatforms.PHONE];
      } else {
        if (constants.HIGH !== verificationLevel) {
          if (constants.MEDIUM !== verificationLevel) {
            if (constants.LOW !== verificationLevel) {
              const NONE = constants.NONE;
              return false;
            }
          }
        }
        let tmp10 = !userVerificationState[closure_0(undefined, closure_2[13]).UserVerificationFieldPlatforms.EMAIL];
        if (tmp10) {
          tmp10 = !userVerificationState[closure_0(undefined, closure_2[13]).UserVerificationFieldPlatforms.PHONE];
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
    const items2 = [memo(importDefault(dependencyMap[17]), obj), , ];
    let tmp16 = null;
    if (null != tmp10) {
      const obj1 = { style: tmp.error, children: tmp10 };
      tmp16 = memo(importDefault(dependencyMap[18]), obj1);
    }
    items2[1] = tmp16;
    const obj2 = { style: tmp.submitButton };
    const obj3 = {};
    const intl = arg1(dependencyMap[9]).intl;
    obj3.text = intl.string(arg1(dependencyMap[9]).t.r8/DT+);
    obj3.loading = tmp8;
    obj3.disabled = tmp8;
    obj3.onPress = function handleSubmit() {
      return _handleSubmit(...arguments);
    };
    obj2.children = memo(arg1(dependencyMap[19]).Button, obj3);
    items2[2] = memo(View, obj2);
    obj.children = items2;
    return _handleSubmit(View, obj);
  }
  const tmp9 = callback(React.useState(null), 2);
};
