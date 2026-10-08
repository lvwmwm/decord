// Module ID: 18281
// Function ID: 18282
// Name: GuildRoleSubscriptionBenefitEditorModal
// Dependencies: [5, 32, 19, 17, 4717, 1389, 18280, 15300, 1085, 21, 5090, 587, 5902, 558, 576, 13950, 5047, 1126, 1200, 6189, 1630, 18282, 5417, 8555, 18284, 8654, 18285, 2]
// Exports: default

// Module 18281 (GuildRoleSubscriptionBenefitEditorModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import TrashIcon2 from "TrashIcon" /* 5047 */;
import useChannelName from "useChannelName" /* 5417 */;
import Pressables from "Pressables" /* 6189 */;
import FormStylesDefault from "FormStyles" /* 13950 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore_mod from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 18280 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import TextStyles from "TextStyles" /* 5902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, dependencyMap;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
let GuildRoleSubscriptionBenefitEditorModalStateStore = GuildRoleSubscriptionBenefitEditorModalStateStore_mod;
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: unpackModuleId, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = GuildRoleSubscriptionsConstants);
const Fonts = Constants.Fonts;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: { flexGrow: 1 }, deleteButton: { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" }, deleteIcon: { width: 20, height: 20 }, deleteLabel: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, lineHeight: 20 };
let merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.unsafe_rawColors.RED_400, 16));
let closure_15 = createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function DeleteButton(onDelete) {
  let items;
  const obj = react2;
  const cResult = obj.c(13);
  onDelete = onDelete.onDelete;
  const tmp4 = closure_15();
  const tmp6 = FormStylesDefault();
  if (cResult[0] === tmp6.textInput) {
    let tmp7;
    let tmp8;
    let tmp12;
    let tmp14;
    if (cResult[1] === tmp4.deleteButton) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4.deleteIcon) {
      const obj2 = { style: tmp4.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
      const TrashIcon = tmp(5047).TrashIcon;
      const tmp10 = map1(TrashIcon, obj2);
      cResult[3] = tmp4.deleteIcon;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    const deleteLabel = tmp4.deleteLabel;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl10.t.p4Bh7f);
      cResult[5] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.deleteLabel) {
      const obj3 = { style: deleteLabel, children: tmp12 };
      const tmp16 = map1(native.LegacyText, obj3);
      cResult[6] = tmp4.deleteLabel;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === onDelete) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          let tmp17;
          if (cResult[11] === tmp14) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
    }
    const obj4 = { style: tmp7, accessibilityRole: "button", onPress: onDelete, children: items };
    items = [tmp8, tmp14];
    const tmp19 = authStore2(Pressables.PressableOpacity, obj4);
    cResult[8] = onDelete;
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = tmp19;
    tmp17 = tmp19;
  }
  const items1 = [tmp6.textInput, tmp4.deleteButton];
  cResult[0] = tmp6.textInput;
  cResult[1] = tmp4.deleteButton;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function DeleteButton(onDelete) {
  let intl;
  let items;
  let items1;
  onDelete = onDelete.onDelete;
  const tmp = closure_15();
  const obj = { style: items, accessibilityRole: "button", onPress: onDelete, children: items1 };
  items = [FormStylesDefault().textInput, tmp.deleteButton];
  FormStylesDefault();
  const PressableOpacity = Pressables.PressableOpacity;
  const obj2 = { style: tmp.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
  const TrashIcon = TrashIcon2.TrashIcon;
  items1 = [map1(TrashIcon, obj2), ];
  const obj3 = { style: tmp.deleteLabel, children: intl.string(intl10.t.p4Bh7f) };
  const LegacyText = native.LegacyText;
  intl = intl10.intl;
  items1[1] = map1(LegacyText, obj3);
  return authStore2(PressableOpacity, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default function GuildRoleSubscriptionBenefitEditorModal(arg0) {
  let closure_4;
  let closure_6;
  let closure_9;
  let first1;
  let first2;
  let first3;
  let first4;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp12;
  let tmp21;
  let tmp26;
  let tmp27;
  const merged = Object.assign(arg0, Object.assign({ ref: 0 }));
  let value;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_6 = undefined;
  first3 = undefined;
  first4 = undefined;
  GuildRoleSubscriptionBenefitEditorModalStateStore = undefined;
  let obj = function _handleSave() {
    let emoji_name;
    let name;
    let ref_id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let tmp15;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              if (null != first1) {
                c3 = 1;
                const obj4 = { name, emoji_id: tmp26, emoji_name, description: tmp15, ref_type: merged.benefitType, ref_id };
                tmp15 = undefined;
                if ("" !== first3) {
                  tmp15 = first3;
                }
                c1 = 2;
                c4 = 1;
                const obj5 = { value: merged.onSave(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0.onClose();
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp19) {
          closure_2 = tmp19;
          if (0 === c3) {
            c4 = 3;
            throw tmp19;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleDelete() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              c3 = 1;
              onDelete = onDelete.onDelete;
              let onDeleteResult;
              if (onDelete != null) {
                onDeleteResult = onDelete();
              }
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onDeleteResult, done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0.onClose();
              c3 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          closure_2 = tmp10;
          if (0 === c3) {
            c4 = 3;
            throw tmp10;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = closure_15();
  const tmp3 = value;
  const tmp4 = dependencyMap;
  const tmp5 = value(13950)();
  const tmp6 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState(), 2);
  value = tmp6[0];
  dependencyMap = tmp7;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  [first3, tmp12] = GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState();
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
  const bottom = value(1630)().bottom;
  if (first1 != null) {
    num = first1.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp15 = num > 0;
  if (!tmp15) {
    let num2;
    if (first2 != null) {
      num2 = first2.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp15 = num2 > 0;
  }
  if (tmp15) {
    let tmp17;
    if (merged.benefitType === obj.CHANNEL) {
      tmp17 = null != first4;
    } else {
      let num3;
      if (value != null) {
        num3 = value.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp17 = num3 > 0;
    }
    tmp15 = tmp17;
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl2 = merged(1126).intl;
    stringResult = intl2.string(merged(1126).t.Odqwp9);
    tmp21 = merged;
  } else {
    const tmp19 = merged;
    const intl = merged(1126).intl;
    stringResult = intl.string(merged(1126).t["0rVUnI"]);
    tmp21 = merged;
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl4 = tmp21(1126).intl;
    stringResult1 = intl4.string(tmp21(1126).t.GK18KJ);
  } else {
    const intl3 = tmp21(1126).intl;
    stringResult1 = intl3.string(tmp21(1126).t["kV54/Y"]);
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl6 = tmp21(1126).intl;
    stringResult2 = intl6.string(tmp21(1126).t["DDUpp+"]);
  } else {
    const intl5 = tmp21(1126).intl;
    stringResult2 = intl5.string(tmp21(1126).t.NNqncc);
  }
  if (merged.benefitType === obj.CHANNEL) {
    obj = {
      channelId: first4,
      guildId: merged.guildId,
      onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          obj = useChannelName;
          closure_2(obj.computeChannelName(id, UserStore, RelationshipStore));
        }
    };
    tmp26 = closure_13(tmp3(18282), obj);
    tmp27 = closure_13;
  } else {
    let obj2 = { style: tmp5.textInput, showTopContainer: false, multiline: false, maxLength, value, placeholder: intl9.string(tmp21(1126).t["kV54/Y"]), onChange: tmp6[1], autoFocus: true, clearButtonVisibility: tmp21(1200).ClearButtonVisibility.WITH_CONTENT };
    const FormInput = tmp21(8555).FormInput;
    intl9 = tmp21(1126).intl;
    tmp26 = closure_13(FormInput, obj2);
    tmp27 = closure_13;
  }
  let obj3 = { style: tmp2.container, children: items };
  let obj4 = {
    title: stringResult,
    onClose: merged.onClose,
    canSave: tmp15,
    onSave: function handleSave() {
      return obj(...arguments);
    },
    listingId: merged.listingId
  };
  items = [tmp27(tmp3(18284), obj4), ];
  let obj5 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: items1, children: items2 };
  items1 = [tmp2.scrollContainer, ];
  const obj6 = { paddingBottom: bottom + 32 + 16 };
  items1[1] = obj6;
  items2 = [, , , , , , ];
  const obj7 = { style: tmp5.header, children: stringResult1 };
  items2[0] = tmp27(tmp3(8654), obj7);
  items2[1] = tmp26;
  const obj8 = { style: tmp5.header, children: intl7.string(tmp21(1126).t.sMOuuS) };
  const tmp3Result = tmp3(8654);
  intl7 = tmp21(1126).intl;
  items2[2] = tmp27(tmp3Result, obj8);
  const obj9 = {
    emoji: { emojiId: first1, emojiName: first2 },
    guildId: merged.guildId,
    onChange: function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    }
  };
  items2[3] = tmp27(tmp3(18285), obj9);
  const obj10 = { style: tmp5.header, children: intl8.string(tmp21(1126).t["74JctW"]) };
  const tmp3Result2 = tmp3(8654);
  intl8 = tmp21(1126).intl;
  items2[4] = tmp27(tmp3Result2, obj10);
  const obj11 = { style: tmp5.textInput, showTopContainer: false, multiline: true, maxLength: obj, numberOfLines: 3, value: first3, onChange: tmp12, placeholder: stringResult2 };
  items2[5] = tmp27(tmp21(8555).FormInput, obj11);
  let tmp27Result = null;
  const tmp29 = first2;
  const tmp30 = closure_6;
  if (null != merged.onDelete) {
    const obj12 = {
      onDelete: function handleDelete() {
          return obj(...arguments);
        }
    };
    tmp27Result = tmp27(closure_16, obj12);
  }
  items2[6] = tmp27Result;
  items[1] = closure_14(tmp30, obj5);
  return closure_14(tmp29, obj3);
};
