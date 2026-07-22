// Module ID: 10419
// Function ID: 80290
// Name: ForumPostActionBar
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10419 (ForumPostActionBar)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import { AnalyticsSections } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_10, jsxs: closure_11 } = __exportStarResult1);
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOWER };
obj.actionBarContainer = obj;
obj.actionRow = {};
obj.reactionRow = {};
obj.actionButton = { borderRadius: require("__exportStarResult1").radii.xs, backgroundColor: require("__exportStarResult1").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: require("__exportStarResult1").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
obj.actionButtonsContainer = { justifyContent: "flex-end" };
obj.lastActionButton = { marginRight: 0 };
obj.buttonText = { marginLeft: 8 };
let closure_12 = obj.createStyles(obj);
const result = __exportStarResult1.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let items9 = function handleFollow() {
    const result = channel(closure_2[13]).handleToggleFollowForumPost(channel, stateFromStores1);
  };
  const tmp = callback3();
  let obj = arg1(guildId[10]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channel.parent_id));
  let obj1 = arg1(guildId[11]);
  const firstMessage = obj1.useFirstForumPostMessage(channel).firstMessage;
  let obj2 = arg1(guildId[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_7.hasJoined(channel.id));
  importDefault = stateFromStores1;
  const guildId = channel.getGuildId();
  let obj3 = arg1(guildId[10]);
  const items2 = [closure_6];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(closure_2);
    }
    return isLurkingResult;
  });
  const width = importDefault(guildId[12])().width;
  let callback = width;
  const tmp5 = callback(React.useState(0), 2);
  const React = tmp5[1];
  const items3 = [width];
  callback = React.useCallback((nativeEvent) => {
    callback(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  let obj4 = arg1(guildId[14]);
  obj = {};
  const items4 = [tmp.actionBarContainer, obj4.useGradientTop()];
  obj.style = items4;
  let tmp9 = null != firstMessage;
  if (tmp9) {
    obj = { style: tmp.reactionRow };
    obj1 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp5[0] };
    obj.children = callback2(arg1(guildId[15]).ForumPostActionBarReactions, obj1);
    tmp9 = callback2(View, obj);
  }
  const items5 = [tmp9, ];
  obj2 = { style: items6, onLayout: callback };
  const items6 = [, ];
  ({ actionRow: arr8[0], actionButtonsContainer: arr8[1] } = tmp);
  if (!!stateFromStores2) {
    const items7 = [tmp16, ];
    obj3 = { accessible: true };
    const intl4 = arg1(guildId[17]).intl;
    obj3.accessibilityLabel = intl4.string(arg1(guildId[17]).t.WqhZss);
    const items8 = [, ];
    ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
    obj3.style = items8;
    obj3.onPress = function onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        let obj = channel(closure_2[13]);
        obj = { section: constants.CHANNEL_HEADER };
        const result = obj.handleCopyLinkForumPost(guildId, channel.id, obj);
      }
    };
    obj4 = { size: "xs" };
    obj3.children = callback2(arg1(guildId[21]).LinkIcon, obj4);
    items7[1] = callback2(arg1(guildId[16]).PressableOpacity, obj3);
    obj2.children = items7;
    items5[1] = tmp14(tmp15, obj2);
    obj.children = items5;
    return closure_11(View, obj);
  } else {
    const obj5 = { accessible: true };
    let num3 = 17;
    let intl = arg1(guildId[17]).intl;
    let Text = intl.string;
    let t = arg1(guildId[17]).t;
    if (stateFromStores1) {
      obj5.accessibilityLabel = Text(t.G3ooHD);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      intl = callback2;
      items9 = [callback2(tmp20(tmp21[18]).CheckmarkLargeIcon, {}), ];
      Text = tmp20(tmp21[19]).Text;
      const obj6 = {};
      const items10 = [tmp.buttonText];
      obj6.style = items10;
      const intl3 = tmp20(tmp21[num3]).intl;
      num3 = intl3.string(tmp20(tmp21[num3]).t.OtF+lC);
      obj6.children = num3;
      t = callback2(Text, obj6);
      items9[1] = t;
      obj5.children = items9;
      let tmp23 = obj5;
    } else {
      obj5.accessibilityLabel = Text(t.DjZ+6E);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      const obj7 = { size: "xs" };
      const items11 = [callback2(tmp20(tmp21[20]).BellIcon, obj7), ];
      const obj8 = { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011542551594659, "Null": 1758014435012901800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, alignItems: -1096315541048896000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.buttonText };
      const intl2 = tmp20(tmp21[num3]).intl;
      obj8.children = intl2.string(tmp20(tmp21[num3]).t.0rQinA);
      items11[1] = callback2(tmp20(tmp21[19]).Text, obj8);
      obj5.children = items11;
      tmp23 = obj5;
    }
    closure_11(arg1(guildId[16]).PressableOpacity, tmp23);
    const tmp17 = closure_11;
  }
};
