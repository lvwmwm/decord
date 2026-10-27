// Module ID: 19325
// Function ID: 19326
// Name: GuildRoleSubscriptionGroupDetailsModal
// Dependencies: [32, 19, 17, 19326, 16604, 1084, 21, 4972, 558, 576, 15181, 19322, 1125, 9044, 19327, 5235, 16616, 7182, 19328, 2]

// Module 19325 (GuildRoleSubscriptionGroupDetailsModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl6 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5235 */;
import TextArea2 from "TextArea" /* 7182 */;
import FormHeaderDefault from "FormHeader" /* 9044 */;
import FormStylesDefault from "FormStyles" /* 15181 */;
import FormSeparatorDefault from "FormSeparator" /* 16616 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19322 */;
import FormImagePicker from "FormImagePicker" /* 19327 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19328 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19326 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16604 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const View = react_native.View;
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroImportDefault } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = Constants.UPLOAD_BANNER_SIZE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content(arg0) {
  let cover;
  let description;
  let first;
  let items;
  let items1;
  let setCover;
  let setDescription;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(33);
  ({ cover, setCover, description, setDescription } = arg0);
  const tmp4 = closure_12();
  const tmp6 = FormStylesDefault();
  const obj2 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  const header = tmp6.header;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl6.t["3S8gA7"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp6.header) {
    const obj3 = { style: header, children: first };
    const tmp12 = React4(FormHeaderDefault, obj3);
    cResult[1] = tmp6.header;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === cover) {
    if (cResult[4] === roleSubscriptionSettingsDisabled) {
      if (cResult[5] === setCover) {
        let tmp14;
        let tmp16;
        let tmp18;
        if (cResult[6] === tmp4.coverPhoto) {
          tmp14 = cResult[7];
        }
        const _Symbol = Symbol;
        const coverDescription = tmp4.coverDescription;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1125).intl;
          const stringResult1 = intl2.string(intl6.t["0ng4rB"]);
          cResult[8] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== tmp4.coverDescription) {
          const obj4 = { style: coverDescription, variant: "text-sm/medium", color: "text-default", children: tmp16 };
          const tmp20 = React4(Text_Text.Text, obj4);
          cResult[9] = tmp4.coverDescription;
          cResult[10] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp4.paddedContainer) {
          if (cResult[12] === tmp14) {
            let tmp21;
            let tmp25;
            let tmp28;
            let tmp30;
            let tmp33;
            let tmp35;
            if (cResult[13] === tmp18) {
              tmp21 = cResult[14];
            }
            if (cResult[15] !== tmp4.paddedContainer) {
              const obj5 = { style: tmp4.paddedContainer };
              const tmp27 = React4(FormSeparatorDefault, obj5);
              cResult[15] = tmp4.paddedContainer;
              cResult[16] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            const _Symbol2 = Symbol;
            const header2 = tmp6.header;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1125).intl;
              const stringResult2 = intl3.string(intl6.t["74JctW"]);
              cResult[17] = stringResult2;
              tmp28 = stringResult2;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] !== tmp6.header) {
              const obj6 = { style: header2, children: tmp28 };
              const tmp32 = React4(FormHeaderDefault, obj6);
              cResult[18] = tmp6.header;
              cResult[19] = tmp32;
              tmp30 = tmp32;
            } else {
              tmp30 = cResult[19];
            }
            const _Symbol3 = Symbol;
            const inputContainer = tmp6.inputContainer;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1125).intl;
              const stringResult3 = intl4.string(intl6.t["74JctW"]);
              cResult[20] = stringResult3;
              tmp33 = stringResult3;
            } else {
              tmp33 = cResult[20];
            }
            const _Symbol4 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(1125).intl;
              const stringResult4 = intl5.string(intl6.t["3YHwoG"]);
              cResult[21] = stringResult4;
              tmp35 = stringResult4;
            } else {
              tmp35 = cResult[21];
            }
            if (cResult[22] === description) {
              if (cResult[23] === tmp6.inputContainer) {
                if (cResult[24] === roleSubscriptionSettingsDisabled) {
                  let tmp37;
                  if (cResult[25] === setDescription) {
                    tmp37 = cResult[26];
                  }
                  if (cResult[27] === tmp25) {
                    if (cResult[28] === tmp30) {
                      if (cResult[29] === tmp37) {
                        if (cResult[30] === tmp10) {
                          let tmp41;
                          if (cResult[31] === tmp21) {
                            tmp41 = cResult[32];
                          }
                          return tmp41;
                        }
                      }
                    }
                  }
                  const obj7 = { children: items };
                  items = [tmp10, tmp21, tmp25, tmp30, tmp37];
                  const tmp44 = authStore(unpackModuleId, obj7);
                  cResult[27] = tmp25;
                  cResult[28] = tmp30;
                  cResult[29] = tmp37;
                  cResult[30] = tmp10;
                  cResult[31] = tmp21;
                  cResult[32] = tmp44;
                  tmp41 = tmp44;
                }
              }
            }
            const obj8 = { containerStyle: inputContainer, accessibilityLabel: tmp33, maxLength: metroImportDefault, value: description, placeholder: tmp35, onChange: setDescription, disabled: roleSubscriptionSettingsDisabled };
            const tmp40 = React4(TextArea2.TextArea, obj8);
            cResult[22] = description;
            cResult[23] = tmp6.inputContainer;
            cResult[24] = roleSubscriptionSettingsDisabled;
            cResult[25] = setDescription;
            cResult[26] = tmp40;
            tmp37 = tmp40;
          }
        }
        const obj9 = { style: tmp13, children: items1 };
        items1 = [tmp14, tmp18];
        const tmp24 = authStore(View, obj9);
        cResult[11] = tmp4.paddedContainer;
        cResult[12] = tmp14;
        cResult[13] = tmp18;
        cResult[14] = tmp24;
        tmp21 = tmp24;
      }
    }
  }
  const obj10 = { style: tmp4.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
  const ImagePickerIcon = tmp(19327).ImagePickerIcon;
  const tmp15 = React4(ImagePickerIcon, obj10);
  cResult[3] = cover;
  cResult[4] = roleSubscriptionSettingsDisabled;
  cResult[5] = setCover;
  cResult[6] = tmp4.coverPhoto;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : (function Content(arg0) {
  let cover;
  let description;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let setCover;
  let setDescription;
  ({ cover, setCover, description, setDescription } = arg0);
  const tmp = closure_12();
  const tmp2 = FormStylesDefault();
  const obj = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const obj2 = { children: items };
  const obj3 = { style: tmp2.header, children: intl.string(intl6.t["3S8gA7"]) };
  const tmp4 = FormHeaderDefault;
  intl = intl6.intl;
  items = [React4(tmp4, obj3), , , , ];
  const obj4 = { style: tmp.paddedContainer, children: items1 };
  const obj5 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
  const ImagePickerIcon = FormImagePicker.ImagePickerIcon;
  items1 = [React4(ImagePickerIcon, obj5), ];
  const obj6 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl6.t["0ng4rB"]) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items1[1] = React4(Text, obj6);
  items[1] = authStore(View, obj4);
  const obj7 = { style: tmp.paddedContainer };
  items[2] = React4(FormSeparatorDefault, obj7);
  const obj8 = { style: tmp2.header, children: intl3.string(intl6.t["74JctW"]) };
  const tmp5 = FormHeaderDefault;
  intl3 = intl6.intl;
  items[3] = React4(tmp5, obj8);
  const obj9 = { containerStyle: tmp2.inputContainer, accessibilityLabel: intl4.string(intl6.t["74JctW"]), maxLength: metroImportDefault, value: description, placeholder: intl5.string(intl6.t["3YHwoG"]), onChange: setDescription, disabled: roleSubscriptionSettingsDisabled };
  const TextArea = TextArea2.TextArea;
  intl4 = intl6.intl;
  intl5 = intl6.intl;
  items[4] = React4(TextArea, obj9);
  return authStore(unpackModuleId, obj2);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let arr;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  [tmp5, tmp6] = RoleTierEditStore.useGroupCoverState();
  _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  [arr, tmp8] = RoleTierEditStore.useGroupDescriptionState();
  let tmp9 = arr.length > 0;
  _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 2);
  if (tmp9) {
    tmp9 = null != tmp5;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl6.t.EPOLQD);
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(intl6.t["LeAm+L"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp11 = stringResult;
    tmp12 = stringResult1;
  } else {
    [tmp11, tmp12] = cResult;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === arr) {
      if (cResult[4] === arg0) {
        if (cResult[5] === tmp6) {
          let tmp15;
          if (cResult[6] === tmp8) {
            tmp15 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === arg0) {
              let tmp18;
              if (cResult[10] === tmp15) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
          const obj2 = { title: tmp11, description: tmp12, canProceedToNextStep: tmp9, nextStep: metroRequire.DETAILS, children: tmp15 };
          const tmp21 = GuildRoleSubscriptionTierEditStepDefault;
          const merged = Object.assign(arg0);
          const tmp26 = React4(tmp21, obj2);
          cResult[8] = tmp9;
          cResult[9] = arg0;
          cResult[10] = tmp15;
          cResult[11] = tmp26;
          tmp18 = tmp26;
        }
      }
    }
  }
  const obj3 = { cover: tmp5, setCover: tmp6, description: arr, setDescription: tmp8 };
  const merged1 = Object.assign(arg0);
  const tmp17 = React4(closure_13, obj3);
  cResult[2] = tmp5;
  cResult[3] = arr;
  cResult[4] = arg0;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  cResult[7] = tmp17;
  tmp15 = tmp17;
}) : (function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let first;
  let intl;
  let intl2;
  let obj2;
  let tmp2;
  let tmp3;
  let tmp5;
  [tmp2, tmp3] = RoleTierEditStore.useGroupCoverState();
  _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  [first, tmp5] = RoleTierEditStore.useGroupDescriptionState();
  const tmp6 = first.length > 0 && null != tmp2;
  const obj = { title: intl.string(intl6.t.EPOLQD), description: intl2.string(intl6.t["LeAm+L"]), canProceedToNextStep: tmp6, nextStep: metroRequire.DETAILS, children: React4(closure_13, obj2) };
  const tmp8 = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl6.intl;
  intl2 = intl6.intl;
  const merged = Object.assign(arg0);
  obj2 = { cover: tmp2, setCover: tmp3, description: first, setDescription: tmp5 };
  const merged1 = Object.assign(arg0);
  return React4(tmp8, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default tmp6;
export const Content = tmp5;
