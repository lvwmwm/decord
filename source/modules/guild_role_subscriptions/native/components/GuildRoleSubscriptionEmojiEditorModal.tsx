// Module ID: 16337
// Function ID: 126058
// Name: GuildRoleSubscriptionEmojiEditorModal
// Dependencies: []
// Exports: default

// Module 16337 (GuildRoleSubscriptionEmojiEditorModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, SectionList: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Bool(false)": 8, "Bool(false)": 4, "Bool(false)": 16, "Bool(false)": "text-xs/normal", "Bool(false)": "text-feedback-critical", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const obj1 = { C: true, c: true, D: null, borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
obj.emojiList = obj1;
obj.row = { <string:4178783607>: "gr", <string:199936531>: null, <string:3260308108>: "Rectangle 1" };
obj.emojiImage = { "Bool(false)": "flex-start", "Bool(false)": 12, "Bool(false)": 12 };
obj.emojiAlias = { marginBottom: 2 };
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
  let initialTierEmojiIds;
  let listingId;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const subscriptionRoleId = guildId.subscriptionRoleId;
  const importDefault = subscriptionRoleId;
  const onClose = guildId.onClose;
  const dependencyMap = onClose;
  const onSave = guildId.onSave;
  let first;
  function handleSave() {
    return _handleSave(...arguments);
  }
  function _handleSave(stateFromStores, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = onSave(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  ({ initialTierEmojiIds, listingId } = guildId);
  const tmp = callback3();
  const callback = tmp;
  const tmp2 = importDefault(dependencyMap[8])(guildId);
  const React = tmp2;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionRoles.getSubscriptionRoles(guildId));
  const tmp4 = callback(React.useState(initialTierEmojiIds), 2);
  first = tmp4[0];
  closure_8 = tmp4[1];
  const items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
  const callback2 = React.useMemo(() => {
    if (null == subscriptionRoleId) {
      const _Set2 = Set;
      const set = new Set();
      return set;
    } else {
      const found = tmp2.filter((roles) => {
        roles = roles.roles;
        return 0 === roles.filter((arg0) => {
          let tmp = arg0 === closure_1;
          if (tmp) {
            tmp = !set2.has(arg0.id);
          }
          let hasItem = !tmp;
          if (!tmp) {
            hasItem = set.has(arg0);
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
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.W4XhnR);
  obj.onClose = onClose;
  obj.onSave = function onSave() {
    if (0 === set.size) {
      handleSave();
    } else {
      let obj = subscriptionRoleId(onClose[14]);
      obj = {};
      const intl = guildId(onClose[13]).intl;
      obj.title = intl.string(guildId(onClose[13]).t.30V0t5);
      const intl2 = guildId(onClose[13]).intl;
      obj = { numberOfEmojiSlatedForDeletion: set.size };
      obj.body = intl2.formatToPlainString(guildId(onClose[13]).t.o6j/wN, obj);
      const intl3 = guildId(onClose[13]).intl;
      obj.cancelText = intl3.string(guildId(onClose[13]).t.ETE/oC);
      const intl4 = guildId(onClose[13]).intl;
      obj.confirmText = intl4.string(guildId(onClose[13]).t.cY+Oob);
      obj.onConfirm = handleSave;
      obj.confirmColor = subscriptionRoleId(onClose[15]).Colors.RED;
      obj.show(obj);
    }
  };
  obj.listingId = listingId;
  obj.canSave = true;
  const items2 = [callback2(importDefault(dependencyMap[12]), obj), ];
  const obj1 = {
    style: tmp.emojiList,
    renderItem(item) {
      item = item.item;
      const guildId = item;
      const hasItem = first.has(item.id);
      const subscriptionRoleId = set.has(item.id);
      let obj = { style: tmp.row };
      obj = { style: tmp.emojiImage };
      obj = {};
      const tmp2 = subscriptionRoleId(onClose[10]);
      obj.uri = subscriptionRoleId(onClose[11]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
      obj.source = obj;
      obj.leading = set(tmp2, obj);
      obj.label = function label() {
        let obj = {};
        obj = { name: item.name, style: emojiAlias.emojiAlias };
        const items = [callback3(callback(closure_2[17]), obj), ];
        let tmp3 = callback;
        if (callback) {
          obj = {};
          const obj1 = {};
          const intl = item(closure_2[13]).intl;
          obj1.children = intl.string(item(closure_2[13]).t.1GlN06);
          const items1 = [callback3(item(closure_2[18]).Text, obj1), ];
          const obj2 = { cachedAt: "GESTURE_FULL", edpbxy: "Int8Array" };
          const intl2 = item(closure_2[13]).intl;
          obj2.children = intl2.string(item(closure_2[13]).t.J0XdJ4);
          items1[1] = callback3(item(closure_2[18]).Text, obj2);
          obj.children = items1;
          tmp3 = callback4(closure_10, obj);
        }
        items[1] = tmp3;
        obj.children = items;
        return callback4(closure_10, obj);
      };
      obj.onPress = function onPress() {
        const id = item.id;
        const set = new Set(closure_7);
        if (set.has(id)) {
          set.delete(id);
        } else {
          set.add(id);
        }
        callback2(set);
      };
      obj.trailing = set(guildId(onClose[16]).FormRow.Checkbox, { selected: hasItem });
      return set(guildId(onClose[16]).FormRow, obj);
    }
  };
  const obj2 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.title = intl2.string(arg1(dependencyMap[13]).t.9Oq93m);
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
