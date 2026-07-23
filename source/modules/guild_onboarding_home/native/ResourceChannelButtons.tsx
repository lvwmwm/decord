// Module ID: 11381
// Function ID: 88461
// Name: ResourceChannelButtons
// Dependencies: [57, 31, 27, 33, 4130, 689, 1457, 11382, 11383, 4543, 1273, 10005, 11385, 2]
// Exports: default

// Module 11381 (ResourceChannelButtons)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonWrapper = { flex: 1 };
_createForOfIteratorHelperLoose.spacer = { width: 8 };
_createForOfIteratorHelperLoose.iconColor = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  let obj = channel(first[6]);
  const navigation = obj.useNavigation();
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = channel(first[7]);
  const tmp3 = callback(obj1.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
  first = tmp3[0];
  callback = tmp5;
  const items = [channel.guild_id, navigation];
  React = React.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = channel(first[8]).selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    obj = { style: tmp2.wrapper };
    let tmp9 = null != first;
    if (tmp9) {
      obj = { style: tmp2.buttonWrapper };
      obj1 = { variant: "secondary", text: first.title };
      const obj2 = { color: tmp2.iconColor.color, source: navigation(first[11]) };
      obj1.icon = callback2(channel(first[10]).Icon, obj2);
      obj1.onPress = function onPress() {
        return callback(first.channelId);
      };
      obj1.grow = true;
      obj.children = callback2(channel(first[9]).Button, obj1);
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
      const obj6 = { color: tmp2.iconColor.color, source: navigation(first[12]) };
      obj5.icon = callback2(channel(first[10]).Icon, obj6);
      obj5.iconPosition = "end";
      obj5.onPress = function onPress() {
        return callback(tmp5.channelId);
      };
      obj5.grow = true;
      obj4.children = callback2(channel(first[9]).Button, obj5);
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
