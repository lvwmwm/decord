// Module ID: 8394
// Function ID: 66825
// Name: StageChannelUpsell
// Dependencies: []
// Exports: default

// Module 8394 (StageChannelUpsell)
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
obj = { "Bool(false)": "ti", "Bool(false)": "y", "Bool(false)": "isArray", "Bool(false)": "key", "Bool(false)": "Text", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.container = obj;
obj.image = { marginBottom: 16 };
obj.closeContainer = { onLongPressAvatar: false, onTapUsername: false, onLongPressUsername: false };
obj.header = {};
obj.description = { person_pouting: "/assets/design/components/Illustration/native/redesign/generated/images", cv: 160 };
obj.button = { "Null": null, "Null": null };
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
    const obj2 = { Promise: "data", marginTop: "category", flags: "Array", style: tmp.header };
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
          const obj = { INTEGRATION_CREATE: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007863204514436, ConstraintReasonCode: 127277221446373050000000000, children };
          return callback3(callback(tmp3[14]).Text, obj, arg1);
        }
    };
    obj4.children = intl3.format(arg1(dependencyMap[15]).t.Vh7rP7, obj5);
    items[4] = callback3(arg1(dependencyMap[14]).Text, obj4);
    const obj6 = { style: tmp.button };
    const obj7 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
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
