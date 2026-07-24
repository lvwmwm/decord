// Module ID: 16501
// Function ID: 128556
// Name: GuildRoleSubscriptionEmojiEditorModal
// Dependencies: [5, 57, 31, 27, 4992, 33, 4130, 689, 16492, 566, 5085, 1392, 16498, 1212, 4470, 4561, 7636, 16488, 4126, 2]
// Exports: default

// Module 16501 (GuildRoleSubscriptionEmojiEditorModal)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, SectionList: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexGrow: 0, marginVertical: 24, marginHorizontal: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.emojiList = obj1;
_createForOfIteratorHelperLoose.row = { alignItems: "flex-start", paddingTop: 16, paddingBottom: 14 };
_createForOfIteratorHelperLoose.emojiImage = { width: 24, height: 24, marginBottom: 2 };
_createForOfIteratorHelperLoose.emojiAlias = { marginBottom: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
  let initialTierEmojiIds;
  let listingId;
  guildId = guildId.guildId;
  const subscriptionRoleId = guildId.subscriptionRoleId;
  const onClose = guildId.onClose;
  const onSave = guildId.onSave;
  let first;
  function handleSave() {
    return _handleSave(...arguments);
  }
  function _handleSave(stateFromStores, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = onSave(tmp);
    return obj(...arguments);
  }
  ({ initialTierEmojiIds, listingId } = guildId);
  let tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  let tmp2 = subscriptionRoleId(onClose[8])(guildId);
  const React = tmp2;
  let obj = guildId(onClose[9]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionRoles.getSubscriptionRoles(guildId));
  const tmp4 = callback(React.useState(initialTierEmojiIds), 2);
  first = tmp4[0];
  _isNativeReflectConstruct = tmp4[1];
  let items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
  const callback2 = React.useMemo(() => {
    if (null == subscriptionRoleId) {
      const _Set2 = Set;
      const set = new Set();
      return set;
    } else {
      const found = tmp2.filter((roles) => {
        let closure_0 = roles;
        roles = roles.roles;
        return 0 === roles.filter((arg0) => {
          let tmp = arg0 === outer2_1;
          if (tmp) {
            tmp = !outer2_7.has(id.id);
          }
          let hasItem = !tmp;
          if (!tmp) {
            hasItem = outer2_6.has(arg0);
          }
          return hasItem;
        }).length;
      });
      const _Set = Set;
      const set1 = new Set(found.map((id) => id.id));
      return set1;
    }
  }, items1);
  obj = { style: tmp.container };
  obj = {};
  let intl = guildId(onClose[13]).intl;
  obj.title = intl.string(guildId(onClose[13]).t.W4XhnR);
  obj.onClose = onClose;
  obj.onSave = function onSave() {
    if (0 === set.size) {
      handleSave();
    } else {
      let obj = subscriptionRoleId(onClose[14]);
      obj = {};
      const intl = guildId(onClose[13]).intl;
      obj.title = intl.string(guildId(onClose[13]).t["30V0t5"]);
      const intl2 = guildId(onClose[13]).intl;
      obj = { numberOfEmojiSlatedForDeletion: set.size };
      obj.body = intl2.formatToPlainString(guildId(onClose[13]).t["o6j/wN"], obj);
      const intl3 = guildId(onClose[13]).intl;
      obj.cancelText = intl3.string(guildId(onClose[13]).t["ETE/oC"]);
      const intl4 = guildId(onClose[13]).intl;
      obj.confirmText = intl4.string(guildId(onClose[13]).t["cY+Oob"]);
      obj.onConfirm = handleSave;
      obj.confirmColor = subscriptionRoleId(onClose[15]).Colors.RED;
      obj.show(obj);
    }
  };
  obj.listingId = listingId;
  obj.canSave = true;
  const items2 = [callback2(subscriptionRoleId(onClose[12]), obj), ];
  let obj1 = {
    style: tmp.emojiList,
    renderItem(item) {
      item = item.item;
      const hasItem = first.has(item.id);
      let closure_1 = set.has(item.id);
      let obj = { style: tmp.row };
      obj = { style: tmp.emojiImage };
      obj = {};
      const tmp2 = subscriptionRoleId(onClose[10]);
      obj.uri = subscriptionRoleId(onClose[11]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
      obj.source = obj;
      obj.leading = set(tmp2, obj);
      obj.label = function label() {
        let obj = {};
        obj = { name: item.name, style: outer1_4.emojiAlias };
        const items = [callback(subscriptionRoleId(onClose[17]), obj), ];
        let tmp3 = closure_1;
        if (closure_1) {
          obj = {};
          const obj1 = { variant: "text-sm/normal", color: "interactive-text-active" };
          const intl = guildId(onClose[13]).intl;
          obj1.children = intl.string(guildId(onClose[13]).t["1GlN06"]);
          const items1 = [callback(guildId(onClose[18]).Text, obj1), ];
          const obj2 = { variant: "text-sm/normal", color: "text-feedback-critical" };
          const intl2 = guildId(onClose[13]).intl;
          obj2.children = intl2.string(guildId(onClose[13]).t.J0XdJ4);
          items1[1] = callback(guildId(onClose[18]).Text, obj2);
          obj.children = items1;
          tmp3 = _handleSave(handleSave, obj);
        }
        items[1] = tmp3;
        obj.children = items;
        return _handleSave(handleSave, obj);
      };
      obj.onPress = function onPress() {
        const id = item.id;
        const set = new Set(outer1_7);
        if (set.has(id)) {
          set.delete(id);
        } else {
          set.add(id);
        }
        outer1_8(set);
      };
      obj.trailing = set(guildId(onClose[16]).FormRow.Checkbox, { selected: hasItem });
      return set(guildId(onClose[16]).FormRow, obj);
    }
  };
  let obj2 = {};
  let intl2 = guildId(onClose[13]).intl;
  obj2.title = intl2.string(guildId(onClose[13]).t["9Oq93m"]);
  obj2.data = tmp2;
  const items3 = [obj2];
  obj1.sections = items3;
  obj1.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return set(guildId(onClose[16]).FormDivider, { iconPush: true });
  };
  obj1.keyboardShouldPersistTaps = "always";
  items2[1] = callback2(first, obj1);
  obj.children = items2;
  return _handleSave(stateFromStores, obj);
};
