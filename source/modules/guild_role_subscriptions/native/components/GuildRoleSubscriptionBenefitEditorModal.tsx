// Module ID: 16308
// Function ID: 125886
// Name: DeleteButton
// Dependencies: []

// Module 16308 (DeleteButton)
function DeleteButton(onDelete) {
  const tmp = callback4();
  let obj = { style: items, accessibilityRole: "button", onPress: onDelete.onDelete };
  const items = [importDefault(dependencyMap[13])().textInput, tmp.deleteButton];
  obj = { style: tmp.deleteIcon, color: importDefault(dependencyMap[11]).unsafe_rawColors.RED_400, size: "custom" };
  const items1 = [callback2(arg1(dependencyMap[15]).TrashIcon, obj), ];
  obj = { style: tmp.deleteLabel };
  const intl = arg1(dependencyMap[17]).intl;
  obj.children = intl.string(arg1(dependencyMap[17]).t.p4Bh7f);
  items1[1] = callback2(arg1(dependencyMap[16]).LegacyText, obj);
  obj.children = items1;
  return callback3(arg1(dependencyMap[14]).PressableOpacity, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[3]));
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importAll(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ GuildRoleSubscriptionBenefitTypes: closure_10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.scrollContainer = { flexGrow: 1 };
obj.deleteButton = { "Null": null, "Null": "4b2e500a83e119218e6e2834f09f9cd5", "Null": "ic_add_tier_40px", "Null": "png" };
obj.deleteIcon = { aze: false, azj: false };
obj1 = {};
const tmp4 = arg1(dependencyMap[9]);
const merged = Object.assign(importDefault(dependencyMap[12])(arg1(dependencyMap[8]).Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[11]).unsafe_rawColors.RED_400, 16));
obj1["marginStart"] = 8;
obj1["lineHeight"] = 20;
obj.deleteLabel = obj1;
let closure_15 = obj1.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[12]);
const forwardRefResult = importAllResult.forwardRef((benefitType) => {
  const arg1 = benefitType;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  function _handleDelete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    const _handleDelete = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[13])();
  const tmp3 = callback(closure_9.useNameState(), 2);
  const first = tmp3[0];
  const importDefault = first;
  const dependencyMap = tmp4;
  const tmp5 = callback(closure_9.useEmojiIdState(), 2);
  const first1 = tmp5[0];
  let closure_3 = first1;
  const callback = tmp5[1];
  const tmp6 = callback(closure_9.useEmojiNameState(), 2);
  const first2 = tmp6[0];
  let closure_6 = tmp6[1];
  const tmp7 = callback(closure_9.useDescriptionState(), 2);
  const first3 = tmp7[0];
  let closure_7 = first3;
  const tmp9 = callback(closure_9.useRefIdState(), 2);
  const first4 = tmp9[0];
  let closure_8 = first4;
  closure_9 = tmp9[1];
  let length;
  if (null != first1) {
    length = first1.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  let tmp12 = num > 0;
  if (!tmp12) {
    let length1;
    if (null != first2) {
      length1 = first2.length;
    }
    let num2 = 0;
    if (null != length1) {
      num2 = length1;
    }
    tmp12 = num2 > 0;
  }
  if (!tmp12) {
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl2 = arg1(dependencyMap[17]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[17]).t.Odqwp9);
    } else {
      const intl = arg1(dependencyMap[17]).intl;
      stringResult = intl.string(arg1(dependencyMap[17]).t.0rVUnI);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl4 = arg1(dependencyMap[17]).intl;
      let stringResult1 = intl4.string(arg1(dependencyMap[17]).t.GK18KJ);
    } else {
      const intl3 = arg1(dependencyMap[17]).intl;
      stringResult1 = intl3.string(arg1(dependencyMap[17]).t.kV54/Y);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl6 = arg1(dependencyMap[17]).intl;
      let stringResult2 = intl6.string(arg1(dependencyMap[17]).t.DDUpp+);
    } else {
      const intl5 = arg1(dependencyMap[17]).intl;
      stringResult2 = intl5.string(arg1(dependencyMap[17]).t.NNqncc);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      let obj = {
        channelId: first4,
        guildId: benefitType.guildId,
        onChange: function handleChannelSelected(id) {
              callback3(id.id);
              tmp4(id(tmp4[20]).computeChannelName(id, first4, first3));
            }
      };
      let tmp40 = callback2(importDefault(dependencyMap[19]), obj);
    } else {
      obj = { "Null": true, "Null": true, "Null": true, style: tmp2.textInput, maxLength: closure_12, value: first };
      const intl9 = arg1(dependencyMap[17]).intl;
      obj.placeholder = intl9.string(arg1(dependencyMap[17]).t.kV54/Y);
      obj.onChange = tmp4;
      obj.autoFocus = true;
      obj.clearButtonVisibility = arg1(dependencyMap[16]).ClearButtonVisibility.WITH_CONTENT;
      tmp40 = callback2(arg1(dependencyMap[21]).FormInput, obj);
    }
    obj = { style: tmp.container };
    const obj1 = {
      title: stringResult,
      onClose: benefitType.onClose,
      canSave: tmp12,
      onSave: function handleSave() {
          return _handleSave(...arguments);
        },
      listingId: benefitType.listingId
    };
    const items = [callback2(importDefault(dependencyMap[22]), obj1), ];
    const obj2 = { -1636630524: true, -1976696828: true, -1610678268: true };
    const items1 = [tmp.scrollContainer, ];
    const obj3 = { paddingBottom: importDefault(dependencyMap[18])().bottom + 32 + 16 };
    items1[1] = obj3;
    obj2.contentContainerStyle = items1;
    const obj4 = { style: tmp2.header, children: stringResult1 };
    const items2 = [callback2(importDefault(dependencyMap[23]), obj4), tmp40, , , , , ];
    const obj5 = { style: tmp2.header };
    const intl7 = arg1(dependencyMap[17]).intl;
    obj5.children = intl7.string(arg1(dependencyMap[17]).t.sMOuuS);
    items2[2] = callback2(importDefault(dependencyMap[23]), obj5);
    const obj6 = {};
    const obj7 = { emojiId: first1, emojiName: first2 };
    obj6.emoji = obj7;
    obj6.guildId = benefitType.guildId;
    obj6.onChange = function handleSetEmoji(emojiId) {
      callback(emojiId.emojiId);
      callback2(emojiId.emojiName);
    };
    items2[3] = callback2(importDefault(dependencyMap[24]), obj6);
    const obj8 = { style: tmp2.header };
    const tmp41 = closure_14;
    const tmp42 = first2;
    const tmp46 = closure_14;
    const tmp47 = closure_6;
    const tmp50 = importDefault(dependencyMap[23]);
    const intl8 = arg1(dependencyMap[17]).intl;
    obj8.children = intl8.string(arg1(dependencyMap[17]).t.74JctW);
    items2[4] = callback2(importDefault(dependencyMap[23]), obj8);
    const obj9 = { "Bool(true)": null, "Bool(true)": "text-sm/medium", "Bool(true)": "text-default", "Bool(true)": true, "Bool(true)": "no-hide-descendants", style: tmp2.textInput, maxLength: _handleDelete, value: first3, onChange: tmp7[1], placeholder: stringResult2 };
    items2[5] = callback2(arg1(dependencyMap[21]).FormInput, obj9);
    let tmp57 = null;
    if (null != benefitType.onDelete) {
      const obj10 = {
        onDelete: function handleDelete() {
              return _handleDelete(...arguments);
            }
      };
      tmp57 = callback2(DeleteButton, obj10);
    }
    items2[6] = tmp57;
    obj2.children = items2;
    items[1] = tmp46(tmp47, obj2);
    obj.children = items;
    return tmp41(tmp42, obj);
  } else if (benefitType.benefitType === _handleSave.CHANNEL) {
    let tmp16 = null != first4;
  } else {
    let length2;
    if (null != first) {
      length2 = first.length;
    }
    let num3 = 0;
    if (null != length2) {
      num3 = length2;
    }
    tmp16 = num3 > 0;
  }
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default forwardRefResult;
