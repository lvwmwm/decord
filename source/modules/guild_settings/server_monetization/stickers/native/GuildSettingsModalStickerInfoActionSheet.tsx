// Module ID: 16321
// Function ID: 126996
// Dependencies: [5, 57, 31, 27, 5035, 33, 566, 9637, 3831, 7577, 1212, 5187, 5186, 689, 5501, 5165, 9142, 16314, 4089, 2]

// Module 16321
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const memoResult = importAllResult.memo(function GuildSettingsModalStickerInfoActionSheet(arg0) {
  let hideActionSheet;
  let importDefault;
  let require;
  ({ guildId: require, stickerId: importDefault, hideActionSheet } = arg0);
  let stateFromStores;
  let callback;
  function _onDeleteSticker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    return obj(...arguments);
  }
  let obj = require(hideActionSheet[6]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const stickersByGuildId = outer1_8.getStickersByGuildId(closure_0);
    let found;
    if (null != stickersByGuildId) {
      found = stickersByGuildId.find((id) => id.id === outer1_1);
    }
    return found;
  });
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
    obj.header = callback2(require(hideActionSheet[12]).BottomSheetTitleHeader, obj);
    const obj1 = {};
    const obj2 = { paddingHorizontal: importDefault(hideActionSheet[13]).space.PX_12, paddingBottom: importDefault(hideActionSheet[13]).space.PX_16 };
    obj1.style = obj2;
    const obj3 = { hasIcons: true };
    const obj4 = { icon: callback2(require(hideActionSheet[16]).PencilIcon, {}) };
    const intl = require(hideActionSheet[10]).intl;
    obj4.label = intl.string(require(hideActionSheet[10]).t.tdhW5b);
    obj4.onPress = function onPress() {
      outer1_1(hideActionSheet[17])({ guildId: closure_0, stickerId: closure_1 });
    };
    const items2 = [callback2(require(hideActionSheet[15]).TableRow, obj4), ];
    const obj5 = {};
    const obj6 = { color: "text-feedback-critical" };
    obj5.icon = callback2(require(hideActionSheet[18]).TrashIcon, obj6);
    let tmp12 = null;
    if (first) {
      tmp12 = callback2(closure_6, {});
    }
    obj5.trailing = tmp12;
    const intl2 = require(hideActionSheet[10]).intl;
    obj5.label = intl2.string(require(hideActionSheet[10]).t["+ZhGOk"]);
    obj5.variant = "danger";
    obj5.disabled = first;
    obj5.onPress = function onDeleteSticker() {
      return _onDeleteSticker(...arguments);
    };
    items2[1] = callback2(require(hideActionSheet[15]).TableRow, obj5);
    obj3.children = items2;
    obj1.children = closure_10(require(hideActionSheet[14]).TableRowGroup, obj3);
    obj.children = callback2(closure_7, obj1);
    tmp6Result = tmp6(require(hideActionSheet[11]).BottomSheet, obj);
    const tmp11 = closure_10;
    const tmp9 = closure_7;
  }
  return tmp6Result;
});
const result = require("result").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx");

export default memoResult;
