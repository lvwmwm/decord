// Module ID: 8399
// Function ID: 66860
// Name: StageChannelUpsell
// Dependencies: []
// Exports: default

// Module 8399 (StageChannelUpsell)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const createChannelRecord = arg1(dependencyMap[3]).createChannelRecord;
let closure_7 = arg1(dependencyMap[4]).useStageChannelUpsellCardStore;
let closure_8 = arg1(dependencyMap[5]).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = arg1(dependencyMap[6]).ChannelTypes;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { 0: "v", 0: "r", 0: "isArray", 9223372036854775807: "color", 0: "v", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.container = obj;
obj.image = { marginBottom: 16 };
obj.closeContainer = { convertShortcutToName: false, hasUnreadMessages: false, CreatorMonetizationRestrictions: false };
obj.header = { -1576657582: 17891332, 1387815174: 2161 };
obj.description = { memo: "/assets/design/components/Illustration/native/redesign/generated/images", accessibilityRole: 160 };
obj.button = { -2124314034: null, 529464659: null };
let closure_12 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  ({ guildId: closure_0, onCreate: closure_1 } = arg0);
  const tmp = callback5();
  const tmp2 = callback(callback2(), 2);
  const dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container };
    obj = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer };
    obj = { source: importDefault(dependencyMap[12]) };
    obj.children = callback3(arg1(dependencyMap[11]).Icon, obj);
    const items = [callback3(arg1(dependencyMap[10]).PressableOpacity, obj), , , , , ];
    const obj1 = { source: importDefault(dependencyMap[13]), style: tmp.image };
    items[1] = callback3(closure_4, obj1);
    const obj2 = { "Null": "useStateFromStores", "Null": "track", alignItems: "Array", style: tmp.header };
    const intl = arg1(dependencyMap[15]).intl;
    obj2.children = intl.string(arg1(dependencyMap[15]).t.Sx8Ezi);
    items[2] = callback3(arg1(dependencyMap[14]).Text, obj2);
    const obj3 = { style: tmp.description };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[15]).t.JUzPhm);
    items[3] = callback3(arg1(dependencyMap[14]).Text, obj3);
    const obj4 = { style: tmp.description };
    const intl3 = arg1(dependencyMap[15]).intl;
    const obj5 = {
      suggestionsHook(children) {
          const obj = { cachedAt: true, edpbxy: true, children };
          return callback3(callback(tmp3[14]).Text, obj, arg1);
        }
    };
    obj4.children = intl3.format(arg1(dependencyMap[15]).t.Vh7rP7, obj5);
    items[4] = callback3(arg1(dependencyMap[14]).Text, obj4);
    const obj6 = { style: tmp.button };
    const obj7 = {};
    const intl4 = arg1(dependencyMap[15]).intl;
    obj7.text = intl4.string(arg1(dependencyMap[15]).t.X/3SyA);
    obj7.onPress = function onPress() {
      let obj = callback2(tmp3[17]);
      obj.popWithKey(closure_8);
      obj = {
        guildId: callback,
        channelType: constants.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = callback2({ id, type: constants.GUILD_STAGE_VOICE });
          if (null != tmp) {
            callback(tmp);
          }
        },
        onClose() {
          callback(closure_2[17]).popWithKey("CREATE_CHANNEL_MODAL_KEY");
        }
      };
      callback2(tmp3[17]).pushLazy(callback(tmp3[19])(tmp3[18], tmp3.paths), obj, "CREATE_CHANNEL_MODAL_KEY");
      const tmp3 = tmp3();
      const obj2 = callback2(tmp3[17]);
      callback2(tmp3[20]).hideActionSheet();
    };
    obj6.children = callback3(arg1(dependencyMap[16]).Button, obj7);
    items[5] = callback3(closure_5, obj6);
    obj.children = items;
    tmp4 = callback4(closure_5, obj);
  }
  return tmp4;
};
