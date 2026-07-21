// Module ID: 16324
// Function ID: 125991
// Name: FormChannelPicker
// Dependencies: []
// Exports: default

// Module 16324 (FormChannelPicker)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {}, content: { -392852907: null, -1030708856: null } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let onChange;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ guildId: closure_1, onChange } = channelId);
  let closure_3;
  const tmp2 = callback2();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => onChange.getChannel(channelId), items1);
  const dependencyMap = stateFromStores;
  let stringResult = importDefault(dependencyMap[6])(stateFromStores);
  if (null == onChange) {
    onChange = () => {

    };
  }
  closure_3 = onChange;
  obj = {
    style: items2,
    accessibilityRole: "link",
    onPress() {
      let obj = callback(stateFromStores[8]);
      obj = { guildId: callback };
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      obj.selectedChannelId = id;
      obj.onChannelSelected = onChange;
      obj.openLazy(channelId(stateFromStores[10])(stateFromStores[9], stateFromStores.paths), "ChannelSelectorActionSheet", obj);
    }
  };
  const items2 = [tmp2.container, importDefault(dependencyMap[4])().textInput];
  let tmp8 = null;
  const tmp = importDefault(dependencyMap[4])();
  const tmp5 = closure_5;
  const tmp6 = dependencyMap;
  if (null != stateFromStores) {
    let obj2 = arg1(dependencyMap[11]);
    let TextIcon = obj2.getChannelIconComponent(stateFromStores);
    if (null == TextIcon) {
      TextIcon = arg1(dependencyMap[12]).TextIcon;
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
    const intl = arg1(dependencyMap[14]).intl;
    stringResult = intl.string(arg1(dependencyMap[14]).t.r2ptsz);
  }
  obj1.children = stringResult;
  items3[1] = callback(arg1(tmp6[13]).Text, obj1);
  obj2 = { size: arg1(dependencyMap[15]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[16]) };
  items3[2] = callback(arg1(dependencyMap[15]).Icon, obj2);
  obj.children = items3;
  return tmp5(importDefault(dependencyMap[7]), obj);
};
