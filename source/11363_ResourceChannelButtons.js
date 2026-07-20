// Module ID: 11363
// Function ID: 88362
// Name: ResourceChannelButtons
// Dependencies: []
// Exports: default

// Module 11363 (ResourceChannelButtons)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.wrapper = obj;
obj.buttonWrapper = { flex: 1 };
obj.spacer = { width: 8 };
const tmp2 = arg1(dependencyMap[3]);
obj.iconColor = { color: importDefault(dependencyMap[5]).colors.WHITE };
let closure_8 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[5]).colors.WHITE };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const tmp2 = callback3();
  let obj1 = arg1(dependencyMap[7]);
  const tmp3 = callback(obj1.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  const callback = tmp5;
  const items = [channel.guild_id, navigation];
  const React = React.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = channel(first[8]).selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    obj = { style: tmp2.wrapper };
    let tmp9 = null != first;
    if (tmp9) {
      obj = { style: tmp2.buttonWrapper };
      obj1 = { variant: "secondary", text: first.title };
      const obj2 = { color: tmp2.iconColor.color, source: importDefault(dependencyMap[11]) };
      obj1.icon = callback2(arg1(dependencyMap[10]).Icon, obj2);
      obj1.onPress = function onPress() {
        return callback(first.channelId);
      };
      obj1.grow = true;
      obj.children = callback2(arg1(dependencyMap[9]).Button, obj1);
      tmp9 = callback2(View, obj);
    }
    const items1 = [tmp9, , ];
    let tmp15 = null != first && null != tmp5;
    if (tmp15) {
      const obj3 = { style: tmp2.spacer };
      tmp15 = callback2(View, obj3);
    }
    items1[1] = tmp15;
    let tmp18 = null != tmp5;
    if (tmp18) {
      const obj4 = { style: tmp2.buttonWrapper };
      const obj5 = { text: tmp5.title };
      const obj6 = { color: tmp2.iconColor.color, source: importDefault(dependencyMap[12]) };
      obj5.icon = callback2(arg1(dependencyMap[10]).Icon, obj6);
      obj5.iconPosition = "end";
      obj5.onPress = function onPress() {
        return callback(tmp5.channelId);
      };
      obj5.grow = true;
      obj4.children = callback2(arg1(dependencyMap[9]).Button, obj5);
      tmp18 = callback2(View, obj4);
    }
    items1[2] = tmp18;
    obj.children = items1;
    let tmp7Result = closure_7(View, obj);
    const tmp7 = closure_7;
    const tmp8 = View;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
