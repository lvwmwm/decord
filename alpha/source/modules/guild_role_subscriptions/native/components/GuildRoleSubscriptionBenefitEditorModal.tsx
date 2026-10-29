// Module ID: 19843
// Function ID: 19844
// Name: GuildRoleSubscriptionBenefitEditorModal
// Dependencies: [5, 32, 19, 17, 4947, 1389, 19842, 17071, 21, 5005, 587, 558, 576, 1125, 5727, 5281, 15640, 1631, 19844, 5641, 7068, 19846, 9080, 19847, 7240, 2]
// Exports: default

// Module 19843 (GuildRoleSubscriptionBenefitEditorModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl11 from "intl" /* 1125 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useChannelName from "useChannelName" /* 5641 */;
import TrashIcon2 from "TrashIcon" /* 5727 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore_mod from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 19842 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
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
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: { flexGrow: 1 }, deleteButton: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function DeleteButton(onDelete) {
  let tmp11;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  onDelete = onDelete.onDelete;
  const tmp4 = closure_15();
  const deleteButton = tmp4.deleteButton;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl11.t.p4Bh7f);
    const obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT };
    const TrashIcon = tmp(5727).TrashIcon;
    const tmp10 = map1(TrashIcon, obj2);
    cResult[0] = stringResult;
    cResult[1] = tmp10;
    tmp5 = stringResult;
    tmp6 = tmp10;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== onDelete) {
    const obj3 = { variant: "critical-secondary", text: tmp5, icon: tmp6, onPress: onDelete };
    const tmp13 = map1(components_Button_Button.Button, obj3);
    cResult[2] = onDelete;
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.deleteButton) {
    let tmp14;
    if (cResult[5] === tmp11) {
      tmp14 = cResult[6];
    }
    return tmp14;
  }
  const tmp15 = map1(hasOwnProperty, { style: deleteButton, children: tmp11 });
  cResult[4] = tmp4.deleteButton;
  cResult[5] = tmp11;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (function DeleteButton(onDelete) {
  let Button;
  let TrashIcon;
  let intl;
  let obj2;
  let obj3;
  onDelete = onDelete.onDelete;
  const obj = { style: closure_15().deleteButton, children: map1(Button, obj2) };
  obj2 = { variant: "critical-secondary", text: intl.string(intl11.t.p4Bh7f), icon: map1(TrashIcon, obj3), onPress: onDelete };
  Button = components_Button_Button.Button;
  intl = intl11.intl;
  obj3 = { size: "sm", color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT };
  TrashIcon = TrashIcon2.TrashIcon;
  return map1(hasOwnProperty, obj);
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
  let intl10;
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
  let tmp27;
  let tmp28;
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
          return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
            return { value: "IconComponent", done: "IconComponent" };
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
  const tmp5 = value(15640)();
  const tmp6 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState(), 2);
  value = tmp6[0];
  dependencyMap = tmp7;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  [first3, tmp12] = GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState();
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
  const bottom = value(1631)().bottom;
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
    const intl2 = merged(1125).intl;
    stringResult = intl2.string(merged(1125).t.Odqwp9);
    tmp21 = merged;
  } else {
    const tmp19 = merged;
    const intl = merged(1125).intl;
    stringResult = intl.string(merged(1125).t["0rVUnI"]);
    tmp21 = merged;
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl4 = tmp21(1125).intl;
    stringResult1 = intl4.string(tmp21(1125).t.GK18KJ);
  } else {
    const intl3 = tmp21(1125).intl;
    stringResult1 = intl3.string(tmp21(1125).t["kV54/Y"]);
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl6 = tmp21(1125).intl;
    stringResult2 = intl6.string(tmp21(1125).t["DDUpp+"]);
  } else {
    const intl5 = tmp21(1125).intl;
    stringResult2 = intl5.string(tmp21(1125).t.NNqncc);
  }
  if (merged.benefitType === obj.CHANNEL) {
    let obj2 = {
      channelId: first4,
      guildId: merged.guildId,
      onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          obj = useChannelName;
          closure_2(obj.computeChannelName(id, UserStore, RelationshipStore));
        }
    };
    tmp27 = closure_13(tmp3(19844), obj2);
    tmp28 = closure_13;
  } else {
    obj = { containerStyle: tmp5.inputContainer, accessibilityLabel: stringResult1, maxLength, value, placeholder: intl7.string(tmp21(1125).t["kV54/Y"]), onChange: tmp6[1], returnKeyType: "done", autoFocus: true, clearable: true };
    const tmp26 = maxLength;
    const TextInput = tmp21(7068).TextInput;
    intl7 = tmp21(1125).intl;
    tmp27 = closure_13(TextInput, obj);
    tmp28 = closure_13;
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
  items = [tmp28(tmp3(19846), obj4), ];
  let obj5 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: items1, children: items2 };
  items1 = [tmp2.scrollContainer, ];
  const obj6 = { paddingBottom: bottom + 32 + 16 };
  items1[1] = obj6;
  items2 = [, , , , , , ];
  const obj7 = { style: tmp5.header, children: stringResult1 };
  items2[0] = tmp28(tmp3(9080), obj7);
  items2[1] = tmp27;
  const obj8 = { style: tmp5.header, children: intl8.string(tmp21(1125).t.sMOuuS) };
  const tmp3Result = tmp3(9080);
  intl8 = tmp21(1125).intl;
  items2[2] = tmp28(tmp3Result, obj8);
  const obj9 = {
    emoji: { emojiId: first1, emojiName: first2 },
    guildId: merged.guildId,
    onChange: function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    }
  };
  items2[3] = tmp28(tmp3(19847), obj9);
  const obj10 = { style: tmp5.header, children: intl9.string(tmp21(1125).t["74JctW"]) };
  const tmp3Result2 = tmp3(9080);
  intl9 = tmp21(1125).intl;
  items2[4] = tmp28(tmp3Result2, obj10);
  const obj11 = { containerStyle: tmp5.inputContainer, accessibilityLabel: intl10.string(tmp21(1125).t["74JctW"]), maxLength: obj, value: first3, onChange: tmp12, placeholder: stringResult2 };
  const TextArea = tmp21(7240).TextArea;
  intl10 = tmp21(1125).intl;
  items2[5] = tmp28(TextArea, obj11);
  let tmp28Result = null;
  const tmp31 = first2;
  const tmp32 = closure_6;
  if (null != merged.onDelete) {
    const obj12 = {
      onDelete: function handleDelete() {
          return obj(...arguments);
        }
    };
    tmp28Result = tmp28(closure_16, obj12);
  }
  items2[6] = tmp28Result;
  items[1] = closure_14(tmp32, obj5);
  return closure_14(tmp31, obj3);
};
