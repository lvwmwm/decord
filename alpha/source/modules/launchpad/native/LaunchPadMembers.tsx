// Module ID: 19086
// Function ID: 19087
// Name: LaunchPadMembers
// Dependencies: [19, 17, 4863, 4917, 21, 5014, 563, 12381, 18766, 11620, 5624, 1113, 2]

// Module 19086 (LaunchPadMembers)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl2 from "intl" /* 1113 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let channel, currentlySelectedChannelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const memoResult = react.memo(function LaunchPadMembers() {
  let intl;
  let tmp8;
  const tmp = closure_7();
  const obj = useStateFromStores;
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          return { channelId: currentlySelectedChannelId, type: "private" };
        } else {
          let obj3;
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
            const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
          } else {
            obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
          }
          return obj3;
        }
      }
    }
    return { channelId: "children", type: false };
  });
  if ("private" === stateFromStoresObject.type) {
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("thread" === stateFromStoresObject.type) {
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else {
    ({ style: tmp.emptyText, variant: "text-md/semibold", children: intl.string(intl2.t["+7wtJq"]) });
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;
