// Module ID: 16149
// Function ID: 124457
// Dependencies: []

// Module 16149
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function GuildSettingsModalStickerInfoActionSheet(arg0) {
  let hideActionSheet;
  ({ guildId: closure_0, stickerId: closure_1, hideActionSheet } = arg0);
  const dependencyMap = hideActionSheet;
  let closure_3;
  let callback;
  function _onDeleteSticker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    const _onDeleteSticker = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[6]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stickersByGuildId = stickersByGuildId.getStickersByGuildId(closure_0);
    let found;
    if (null != stickersByGuildId) {
      found = stickersByGuildId.find((id) => id.id === closure_1);
    }
    return found;
  });
  closure_3 = stateFromStores;
  const tmp2 = callback(_onDeleteSticker.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const items1 = [hideActionSheet, stateFromStores];
  const effect = _onDeleteSticker.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items1);
  let tmp6Result = null;
  if (null != stateFromStores) {
    obj = {};
    obj = {};
    ({ name: obj3.title, description: obj3.subtitle } = stateFromStores);
    obj.header = callback2(arg1(dependencyMap[12]).BottomSheetTitleHeader, obj);
    const obj1 = {};
    const obj2 = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_12, paddingBottom: importDefault(dependencyMap[13]).space.PX_16 };
    obj1.style = obj2;
    const obj3 = { hasIcons: true };
    const obj4 = { icon: callback2(arg1(dependencyMap[16]).PencilIcon, {}) };
    const intl = arg1(dependencyMap[10]).intl;
    obj4.label = intl.string(arg1(dependencyMap[10]).t.tdhW5b);
    obj4.onPress = function onPress() {
      callback(hideActionSheet[17])({ guildId: closure_0, stickerId: callback });
    };
    const items2 = [callback2(arg1(dependencyMap[15]).TableRow, obj4), ];
    const obj5 = {};
    const obj6 = { color: "text-feedback-critical" };
    obj5.icon = callback2(arg1(dependencyMap[18]).TrashIcon, obj6);
    let tmp12 = null;
    if (first) {
      tmp12 = callback2(closure_6, {});
    }
    obj5.trailing = tmp12;
    const intl2 = arg1(dependencyMap[10]).intl;
    obj5.label = intl2.string(arg1(dependencyMap[10]).t.+ZhGOk);
    obj5.variant = "danger";
    obj5.disabled = first;
    obj5.onPress = function onDeleteSticker() {
      return _onDeleteSticker(...arguments);
    };
    items2[1] = callback2(arg1(dependencyMap[15]).TableRow, obj5);
    obj3.children = items2;
    obj1.children = closure_10(arg1(dependencyMap[14]).TableRowGroup, obj3);
    obj.children = callback2(closure_7, obj1);
    tmp6Result = tmp6(arg1(dependencyMap[11]).BottomSheet, obj);
    const tmp11 = closure_10;
    const tmp9 = closure_7;
  }
  return tmp6Result;
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx");

export default memoResult;
