// Module ID: 16448
// Function ID: 128194
// Name: DeleteButton
// Dependencies: [5, 57, 31, 27, 3767, 1849, 16447, 14094, 653, 33, 4130, 689, 5052, 12905, 4660, 4089, 1273, 1212, 1557, 16449, 4320, 7495, 16451, 7494, 16452, 2]

// Module 16448 (DeleteButton)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import resetImperatively from "resetImperatively";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
const require = arg1;
function DeleteButton(onDelete) {
  const tmp = callback4();
  let obj = { style: items, accessibilityRole: "button", onPress: onDelete.onDelete };
  items = [importDefault(12905)().textInput, tmp.deleteButton];
  obj = { style: tmp.deleteIcon, color: importDefault(689).unsafe_rawColors.RED_400, size: "custom" };
  const items1 = [callback2(require(4089) /* TrashIcon */.TrashIcon, obj), ];
  obj = { style: tmp.deleteLabel };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.p4Bh7f);
  items1[1] = callback2(require(1273) /* Button */.LegacyText, obj);
  obj.children = items1;
  return callback3(require(4660) /* PressableBase */.PressableOpacity, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ GuildRoleSubscriptionBenefitTypes: closure_10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = MAX_SUBSCRIPTION_TIERS);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
obj.container = obj;
obj.scrollContainer = { flexGrow: 1 };
obj.deleteButton = { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" };
obj.deleteIcon = { width: 20, height: 20 };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, 16));
_createForOfIteratorHelperLoose["marginStart"] = 8;
_createForOfIteratorHelperLoose["lineHeight"] = 20;
obj.deleteLabel = _createForOfIteratorHelperLoose;
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((benefitType) => {
  const _require = benefitType;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    return obj(...arguments);
  }
  function _handleDelete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = first(12905)();
  const tmp3 = callback(resetImperatively.useNameState(), 2);
  first = tmp3[0];
  const dependencyMap = tmp4;
  const tmp5 = callback(resetImperatively.useEmojiIdState(), 2);
  const first1 = tmp5[0];
  callback = tmp5[1];
  const tmp6 = callback(resetImperatively.useEmojiNameState(), 2);
  const first2 = tmp6[0];
  let closure_6 = tmp6[1];
  const tmp7 = callback(resetImperatively.useDescriptionState(), 2);
  const first3 = tmp7[0];
  const tmp9 = callback(resetImperatively.useRefIdState(), 2);
  const first4 = tmp9[0];
  resetImperatively = tmp9[1];
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
      const intl2 = _require(1212).intl;
      let stringResult = intl2.string(_require(1212).t.Odqwp9);
    } else {
      const intl = _require(1212).intl;
      stringResult = intl.string(_require(1212).t["0rVUnI"]);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl4 = _require(1212).intl;
      let stringResult1 = intl4.string(_require(1212).t.GK18KJ);
    } else {
      const intl3 = _require(1212).intl;
      stringResult1 = intl3.string(_require(1212).t["kV54/Y"]);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl6 = _require(1212).intl;
      let stringResult2 = intl6.string(_require(1212).t["DDUpp+"]);
    } else {
      const intl5 = _require(1212).intl;
      stringResult2 = intl5.string(_require(1212).t.NNqncc);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      let obj = {
        channelId: first4,
        guildId: benefitType.guildId,
        onChange: function handleChannelSelected(id) {
              callback3(id.id);
              tmp4(benefitType(tmp4[20]).computeChannelName(id, first4, first3));
            }
      };
      let tmp40 = callback2(first(16449), obj);
    } else {
      obj = { style: tmp2.textInput, showTopContainer: false, multiline: false, maxLength: closure_12, value: first };
      const intl9 = _require(1212).intl;
      obj.placeholder = intl9.string(_require(1212).t["kV54/Y"]);
      obj.onChange = tmp4;
      obj.autoFocus = true;
      obj.clearButtonVisibility = _require(1273).ClearButtonVisibility.WITH_CONTENT;
      tmp40 = callback2(_require(7495).FormInput, obj);
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
    const items = [callback2(first(16451), obj1), ];
    const obj2 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false };
    const items1 = [tmp.scrollContainer, ];
    const obj3 = { paddingBottom: first(1557)().bottom + 32 + 16 };
    items1[1] = obj3;
    obj2.contentContainerStyle = items1;
    const obj4 = { style: tmp2.header, children: stringResult1 };
    const items2 = [callback2(first(7494), obj4), tmp40, , , , , ];
    const obj5 = { style: tmp2.header };
    const intl7 = _require(1212).intl;
    obj5.children = intl7.string(_require(1212).t.sMOuuS);
    items2[2] = callback2(first(7494), obj5);
    const obj6 = {};
    const obj7 = { emojiId: first1, emojiName: first2 };
    obj6.emoji = obj7;
    obj6.guildId = benefitType.guildId;
    obj6.onChange = function handleSetEmoji(emojiId) {
      callback(emojiId.emojiId);
      callback2(emojiId.emojiName);
    };
    items2[3] = callback2(first(16452), obj6);
    const obj8 = { style: tmp2.header };
    const tmp41 = closure_14;
    const tmp42 = first2;
    const tmp46 = closure_14;
    const tmp47 = closure_6;
    const tmp50 = first(7494);
    const intl8 = _require(1212).intl;
    obj8.children = intl8.string(_require(1212).t["74JctW"]);
    items2[4] = callback2(first(7494), obj8);
    const obj9 = { style: tmp2.textInput, showTopContainer: false, multiline: true, maxLength: _handleDelete, numberOfLines: 3, value: first3, onChange: tmp7[1], placeholder: stringResult2 };
    items2[5] = callback2(_require(7495).FormInput, obj9);
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
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default forwardRefResult;
