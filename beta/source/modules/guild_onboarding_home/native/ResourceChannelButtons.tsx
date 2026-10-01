// Module ID: 11765
// Function ID: 11766
// Name: ResourceChannelButtons
// Dependencies: [32, 19, 17, 21, 4836, 576, 1486, 11766, 11767, 5281, 1177, 11074, 11769, 2]
// Exports: default

// Module 11765 (ResourceChannelButtons)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 11767 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, buttonWrapper: { flex: 1 }, spacer: { width: 8 }, iconColor: obj3 };
obj2 = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  let Button;
  let Button2;
  let Icon;
  let Icon2;
  let channelId;
  let closure_4;
  let items1;
  let obj10;
  let obj5;
  let obj6;
  let obj9;
  let tmp9Result;
  channel = channel.channel;
  let first;
  _slicedToArray = undefined;
  react = undefined;
  let obj = channel(first[6]);
  navigation = obj.useNavigation();
  const tmp4 = closure_8();
  const obj2 = channel(first[7]);
  const tmp5 = _slicedToArray(obj2.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
  first = tmp5[0];
  _slicedToArray = tmp7;
  const items = [channel.guild_id, navigation];
  react = react.useCallback((channelId) => {
    navigation.goBack();
    const obj = GuildOnboardingHomeActionCreators;
    const homeResourceChannel = obj.selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    let tmp11 = null != first;
    const obj3 = { style: tmp4.wrapper, children: items1 };
    const tmp9 = closure_7;
    if (tmp11) {
      const obj4 = { style: tmp4.buttonWrapper, children: closure_6(Button, obj5) };
      obj5 = {
        variant: "secondary",
        text: first.title,
        icon: closure_6(Icon, obj6),
        onPress() {
              return closure_4(first.channelId);
            },
        grow: true
      };
      Button = tmp(tmp2[9]).Button;
      obj6 = { color: tmp4.iconColor.color, source: navigation(first[11]) };
      Icon = tmp(tmp2[10]).Icon;
      tmp11 = closure_6(tmp10, obj4);
    }
    items1 = [tmp11, , ];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj7 = { style: tmp4.spacer };
      tmp14 = closure_6(tmp10, obj7);
    }
    items1[1] = tmp14;
    let tmp16 = null != tmp7;
    if (tmp16) {
      const obj8 = { style: tmp4.buttonWrapper, children: closure_6(Button2, obj9) };
      obj9 = {
        text: tmp5[1].title,
        icon: closure_6(Icon2, obj10),
        iconPosition: "end",
        onPress() {
              return closure_4(channelId.channelId);
            },
        grow: true
      };
      Button2 = tmp(tmp2[9]).Button;
      obj10 = { color: tmp4.iconColor.color, source: navigation(first[12]) };
      Icon2 = tmp(tmp2[10]).Icon;
      tmp16 = closure_6(tmp10, obj8);
    }
    items1[2] = tmp16;
    tmp9Result = tmp9(tmp10, obj3);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};
