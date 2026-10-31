// Module ID: 19964
// Function ID: 19965
// Name: GuildRoleSubscriptionBenefitEditorModal
// Dependencies: [5, 32, 19, 17, 4956, 1383, 19963, 17183, 21, 5014, 575, 5634, 1113, 5738, 19943, 1625, 7060, 19965, 5652, 7082, 19967, 19968, 7253, 2]
// Exports: default

// Module 19964 (GuildRoleSubscriptionBenefitEditorModal)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import useChannelName from "useChannelName" /* 5652 */;
import TrashIcon2 from "TrashIcon" /* 5738 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore_mod from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 19963 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, dependencyMap;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
function DeleteButton(onDelete) {
  let TrashIcon;
  let intl;
  let obj2;
  onDelete = onDelete.onDelete;
  const obj = { variant: "critical-secondary", text: intl.string(intl10.t.p4Bh7f), icon: map1(TrashIcon, obj2), onPress: onDelete };
  const Button = components_Button_Button.Button;
  intl = intl10.intl;
  obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT };
  TrashIcon = TrashIcon2.TrashIcon;
  return map1(Button, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
let GuildRoleSubscriptionBenefitEditorModalStateStore = GuildRoleSubscriptionBenefitEditorModalStateStore_mod;
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: unpackModuleId, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = GuildRoleSubscriptionsConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { container: obj2, scrollContainer: { flexGrow: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
let closure_15 = createStyles.createStyles(obj);
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
  let obj3;
  let obj9;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let sum;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  const tmp5 = value(19943)();
  const tmp6 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState(), 2);
  value = tmp6[0];
  dependencyMap = tmp7;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  [first3, tmp12] = GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState();
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
  const bottom = value(1625)().bottom;
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
    const intl2 = merged(1113).intl;
    stringResult = intl2.string(merged(1113).t.Odqwp9);
    tmp21 = merged;
  } else {
    const tmp19 = merged;
    const intl = merged(1113).intl;
    stringResult = intl.string(merged(1113).t["0rVUnI"]);
    tmp21 = merged;
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl4 = tmp21(1113).intl;
    stringResult1 = intl4.string(tmp21(1113).t.GK18KJ);
  } else {
    const intl3 = tmp21(1113).intl;
    stringResult1 = intl3.string(tmp21(1113).t["kV54/Y"]);
  }
  if (merged.benefitType === obj.CHANNEL) {
    const intl6 = tmp21(1113).intl;
    stringResult2 = intl6.string(tmp21(1113).t["DDUpp+"]);
  } else {
    const intl5 = tmp21(1113).intl;
    stringResult2 = intl5.string(tmp21(1113).t.NNqncc);
  }
  if (merged.benefitType === obj.CHANNEL) {
    let obj2 = { title: stringResult1, hasIcons: true, children: closure_13(tmp3(19965), obj3) };
    const TableRowGroup = tmp21(7060).TableRowGroup;
    obj3 = {
      channelId: first4,
      guildId: merged.guildId,
      onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          obj = useChannelName;
          closure_2(obj.computeChannelName(id, UserStore, RelationshipStore));
        }
    };
    tmp27 = closure_13(TableRowGroup, obj2);
    tmp28 = closure_13;
  } else {
    obj = { label: stringResult1, maxLength, value, placeholder: intl7.string(tmp21(1113).t["kV54/Y"]), onChange: tmp6[1], returnKeyType: "done", autoFocus: true, clearable: true };
    const tmp26 = maxLength;
    const TextInput = tmp21(7082).TextInput;
    intl7 = tmp21(1113).intl;
    tmp27 = closure_13(TextInput, obj);
    tmp28 = closure_13;
  }
  let obj4 = { style: tmp2.container, children: items };
  let obj5 = {
    title: stringResult,
    onClose: merged.onClose,
    canSave: tmp15,
    onSave: function handleSave() {
      return obj(...arguments);
    },
    listingId: merged.listingId
  };
  items = [tmp28(tmp3(19967), obj5), ];
  const obj6 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: items1, children: items2 };
  items1 = [tmp2.scrollContainer, tmp5.container, ];
  const obj7 = { paddingBottom: sum + tmp3(575).space.PX_16 };
  sum = bottom + tmp3(575).space.PX_32;
  items1[2] = obj7;
  items2 = [tmp27, , , ];
  const obj8 = { title: intl8.string(tmp21(1113).t.sMOuuS), hasIcons: true, children: tmp28(tmp3(19968), obj9) };
  const TableRowGroup2 = tmp21(7060).TableRowGroup;
  intl8 = tmp21(1113).intl;
  obj9 = {
    emoji: { emojiId: first1, emojiName: first2 },
    guildId: merged.guildId,
    onChange: function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    }
  };
  items2[1] = tmp28(TableRowGroup2, obj8);
  const obj10 = { label: intl9.string(tmp21(1113).t["74JctW"]), maxLength: obj, value: first3, onChange: tmp12, placeholder: stringResult2 };
  const TextArea = tmp21(7253).TextArea;
  intl9 = tmp21(1113).intl;
  items2[2] = tmp28(TextArea, obj10);
  let tmp28Result = null;
  const tmp31 = first2;
  const tmp32 = closure_6;
  if (null != merged.onDelete) {
    const obj11 = {
      onDelete: function handleDelete() {
          return obj(...arguments);
        }
    };
    tmp28Result = tmp28(DeleteButton, obj11);
  }
  items2[3] = tmp28Result;
  items[1] = closure_14(tmp32, obj6);
  return closure_14(tmp31, obj4);
};
