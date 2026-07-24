// Module ID: 16496
// Function ID: 128531
// Name: FormChannelPicker
// Dependencies: [31, 1348, 33, 4130, 12957, 566, 4320, 8518, 4098, 16497, 1934, 4593, 4638, 4126, 1212, 1273, 10710, 2]
// Exports: default

// Module 16496 (FormChannelPicker)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let importDefault;
  let onChange;
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  onChange = undefined;
  const tmp2 = callback2();
  let obj = channelId(stateFromStores[5]);
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => onChange.getChannel(channelId), items1);
  let stringResult = importDefault(stateFromStores[6])(stateFromStores);
  if (null == onChange) {
    onChange = () => {

    };
  }
  obj = {
    style: items2,
    accessibilityRole: "link",
    onPress() {
      let obj = outer1_1(stateFromStores[8]);
      obj = { guildId: closure_1 };
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      obj.selectedChannelId = id;
      obj.onChannelSelected = onChange;
      obj.openLazy(channelId(stateFromStores[10])(stateFromStores[9], stateFromStores.paths), "ChannelSelectorActionSheet", obj);
    }
  };
  items2 = [tmp2.container, importDefault(stateFromStores[4])().textInput];
  let tmp8 = null;
  const tmp = importDefault(stateFromStores[4])();
  const tmp5 = closure_5;
  const tmp6 = stateFromStores;
  if (null != stateFromStores) {
    let obj2 = channelId(stateFromStores[11]);
    let TextIcon = obj2.getChannelIconComponent(stateFromStores);
    if (null == TextIcon) {
      TextIcon = channelId(stateFromStores[12]).TextIcon;
    }
    obj = { size: "sm" };
    tmp8 = callback(TextIcon, obj);
  }
  const items3 = [tmp8, , ];
  const obj1 = { style: tmp2.content, variant: "text-md/medium" };
  let str2 = "text-muted";
  if (null != channelId) {
    str2 = "text-default";
  }
  obj1.color = str2;
  if (null == stringResult) {
    const intl = channelId(stateFromStores[14]).intl;
    stringResult = intl.string(channelId(stateFromStores[14]).t.r2ptsz);
  }
  obj1.children = stringResult;
  items3[1] = callback(channelId(tmp6[13]).Text, obj1);
  obj2 = { size: channelId(stateFromStores[15]).Icon.Sizes.MEDIUM, source: importDefault(stateFromStores[16]) };
  items3[2] = callback(channelId(stateFromStores[15]).Icon, obj2);
  obj.children = items3;
  return tmp5(importDefault(stateFromStores[7]), obj);
};
