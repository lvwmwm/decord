// Module ID: 15304
// Function ID: 116374
// Name: MoreButton
// Dependencies: []
// Exports: default

// Module 15304 (MoreButton)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = {};
      obj = {};
      const intl = arg1(dependencyMap[5]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.UKOtz+);
      obj.source = importDefault(dependencyMap[6]);
      obj.onPress = tmp;
      obj.children = jsx(arg1(dependencyMap[4]).HeaderIconButton, obj);
      tmp2 = jsx(importDefault(dependencyMap[3]), obj);
      const tmp6 = importDefault(dependencyMap[3]);
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
