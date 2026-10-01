// Module ID: 17587
// Function ID: 17588
// Name: GuildRoleSubscriptionEmojiEditorModal
// Dependencies: [5, 32, 19, 17, 5772, 21, 4836, 576, 17578, 504, 5899, 1397, 17584, 1115, 5203, 5300, 8053, 17574, 4832, 2]
// Exports: default

// Module 17587 (GuildRoleSubscriptionEmojiEditorModal)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import AlertDefault from "Alert" /* 5300 */;
import EmojiAliasDefault from "EmojiAlias" /* 17574 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5772 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c4, roles, set;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, SectionList: metroImportDefault } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, emojiList: obj3, row: { alignItems: "flex-start", paddingTop: 16, paddingBottom: 14 }, emojiImage: { width: 24, height: 24, marginBottom: 2 }, emojiAlias: { marginBottom: 2 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 0, marginVertical: 24, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
  let closure_4;
  let closure_5;
  let closure_8;
  let first;
  let initialTierEmojiIds;
  let intl;
  let intl2;
  let items2;
  let items3;
  let listingId;
  guildId = guildId.guildId;
  const subscriptionRoleId = guildId.subscriptionRoleId;
  const onClose = guildId.onClose;
  const onSave = guildId.onSave;
  first = undefined;
  closure_8 = undefined;
  function handleSave() {
    return obj(...arguments);
  }
  let obj = function _handleSave() {
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
          return { value: "HermesInternal", done: null };
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
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onSave(first), done: false };
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
              closure_128_2();
              c3 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          let closure_2 = tmp11;
          if (0 === c3) {
            c4 = 3;
            throw tmp11;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  ({ initialTierEmojiIds, listingId } = guildId);
  let tmp = closure_12();
  _slicedToArray = tmp;
  let tmp2 = subscriptionRoleId(onClose[8])(guildId);
  react = tmp2;
  obj = guildId(onClose[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionRoleStore.getSubscriptionRoles(guildId));
  [first, closure_8] = react.useState(initialTierEmojiIds);
  let items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
  set = react.useMemo(function() {
    if (null == subscriptionRoleId) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
      return set;
    } else {
      let tmp = closure_5;
      const found = closure_5.filter((roles) => {
        roles = roles.roles;
        return 0 === roles.filter((item) => {
          const tmp = item === subscriptionRoleId && !set2.has(roles.id);
          const hasItem = !tmp && set.has(item);
          return hasItem;
        }).length;
      });
      const _Set = Set;
      const self = this;
      const self2 = this;
      const set1 = new Set(found.map((id) => id.id));
      return set1;
    }
  }, items1);
  let obj2 = { style: tmp.container, children: items2 };
  let obj3 = {
    title: intl.string(guildId(onClose[13]).t.W4XhnR),
    onClose,
    onSave() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      if (0 === set.size) {
        handleSave();
      } else {
        obj = { title: intl.string(intl5.t["30V0t5"]), body: intl2.formatToPlainString(intl5.t["o6j/wN"], obj2), cancelText: intl3.string(intl5.t["ETE/oC"]), confirmText: intl4.string(intl5.t["cY+Oob"]), onConfirm: handleSave, confirmColor: AlertDefault.Colors.RED };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl5.intl;
        intl2 = intl5.intl;
        obj2 = { numberOfEmojiSlatedForDeletion: tmp.size };
        intl3 = intl5.intl;
        intl4 = intl5.intl;
        show(obj);
      }
    },
    listingId,
    canSave: true
  };
  const tmp6 = subscriptionRoleId(onClose[12]);
  intl = guildId(onClose[13]).intl;
  items2 = [set(tmp6, obj3), ];
  let obj4 = {
    style: tmp.emojiList,
    renderItem(item) {
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      let tmp2;
      item = item.item;
      const hasItem = first.has(item.id);
      let closure_1 = set.has(item.id);
      obj = {
        style: emojiAlias.row,
        leading: set(tmp2, obj2),
        label() {
          let intl;
          let intl2;
          let items1;
          const children = [, ];
          obj = { name: item.name, style: emojiAlias.emojiAlias };
          children[0] = React4(EmojiAliasDefault, obj);
          let tmpResult = closure_1;
          if (tmpResult) {
            const obj2 = { children: items1 };
            const obj3 = { variant: "text-sm/normal", color: "interactive-text-active", children: intl.string(intl5.t["1GlN06"]) };
            const Text = Text_Text.Text;
            intl = intl5.intl;
            items1 = [React4(Text, obj3), ];
            const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl2.string(intl5.t.J0XdJ4) };
            const Text2 = Text_Text.Text;
            intl2 = intl5.intl;
            items1[1] = React4(Text2, obj4);
            tmpResult = tmp(tmp2, obj2);
          }
          children[1] = tmpResult;
          return unpackModuleId(authStore, { children });
        },
        onPress() {
          const id = item.id;
          set = new Set(first);
          if (set.has(id)) {
            set.delete(id);
          } else {
            set.add(id);
          }
          closure_8(set);
        },
        trailing: set(guildId(onClose[16]).FormRow.Checkbox, { selected: hasItem })
      };
      const FormRow = guildId(onClose[16]).FormRow;
      obj2 = { style: emojiAlias.emojiImage, source: obj3 };
      obj3 = { uri: obj4.getEmojiURL(obj5) };
      tmp2 = subscriptionRoleId(onClose[10]);
      obj4 = subscriptionRoleId(onClose[11]);
      obj5 = { id: item.id, animated: item.animated, size: 48 };
      return set(FormRow, obj);
    },
    sections: items3,
    ItemSeparatorComponent() {
      return set(guildId(onClose[16]).FormDivider, { iconPush: true });
    },
    keyboardShouldPersistTaps: "always"
  };
  let obj5 = { title: intl2.string(guildId(onClose[13]).t["9Oq93m"]), data: tmp2 };
  intl2 = guildId(onClose[13]).intl;
  items3 = [obj5];
  items2[1] = set(first, obj4);
  return obj(stateFromStores, obj2);
};
