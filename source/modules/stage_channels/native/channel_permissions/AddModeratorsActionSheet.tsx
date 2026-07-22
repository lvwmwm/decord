// Module ID: 15393
// Function ID: 117365
// Name: AddModeratorsActionSheet
// Dependencies: []
// Exports: default

// Module 15393 (AddModeratorsActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const RowType = arg1(dependencyMap[5]).RowType;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx");

export default function AddModeratorsActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  function _handleAddModeratorsPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleAddModeratorsPressed = obj;
    return obj(...arguments);
  }
  const tmp2 = callback(React.useState({}), 2);
  const first = tmp2[0];
  importDefault = first;
  let obj = arg1(_handleAddModeratorsPressed[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guild.getGuild(guildId);
  });
  const tmp5 = importDefault(_handleAddModeratorsPressed[10])(channel, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    const _Object = Object;
    const tmp17 = 0 === Object.keys(first).length;
    obj = {};
    obj = {};
    const intl3 = arg1(_handleAddModeratorsPressed[18]).intl;
    obj.title = intl3.string(arg1(_handleAddModeratorsPressed[18]).t.n3bcy8);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp17) {
        const obj1 = { size: "sm" };
        const intl2 = arg1(_handleAddModeratorsPressed[18]).intl;
        obj1.text = intl2.string(arg1(_handleAddModeratorsPressed[18]).t.5Wxrcd);
        obj1.onPress = function handleSkip() {
          first(_handleAddModeratorsPressed[15]).hideActionSheet();
        };
        let obj4 = obj1;
      }
      obj.trailing = tmp18(tmp21, obj4);
      obj.header = tmp18(arg1(_handleAddModeratorsPressed[17]).BottomSheetTitleHeader, obj);
      const obj2 = { style: tmp.container };
      const obj3 = { inActionSheet: true, channel, guild: stateFromStores, permission: arg1(_handleAddModeratorsPressed[21]).MODERATE_STAGE_CHANNEL_PERMISSIONS, pendingAdditions: first, setPendingAdditions: tmp2[1] };
      obj2.children = jsx(importDefault(_handleAddModeratorsPressed[20]), obj3);
      obj.children = <View {...obj2} />;
      return tmp18(arg1(_handleAddModeratorsPressed[16]).BottomSheet, obj);
    }
    obj4 = { size: "sm", disabled: tmp17 };
    const intl = arg1(_handleAddModeratorsPressed[18]).intl;
    obj4.text = intl.string(arg1(_handleAddModeratorsPressed[18]).t.OYkgVk);
    obj4.onPress = function handleAddModeratorsPressed() {
      return _handleAddModeratorsPressed(...arguments);
    };
  }
};
