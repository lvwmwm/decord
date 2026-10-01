// Module ID: 9516
// Function ID: 9517
// Name: MediaTile
// Dependencies: [19, 17, 4852, 4857, 21, 4836, 576, 9506, 1479, 5438, 504, 9517, 1177, 2]

// Module 9516 (MediaTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import CallConstants from "CallConstants" /* 4857 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let channel;

let obj2;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: obj2 };
obj2 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  const tmp = closure_7();
  const obj = channel(9506);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const width = participant(1479)().width;
  const obj2 = channel(5438);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  const tmp5 = participant;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const items2 = [tmp.container, , ];
      const tmp2Result = channel(9506);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      const tmp2Result2 = channel(9506);
      items2[2] = tmp2Result2.getTileWidthStyle(size, width, isScreenLandscape);
      ({ hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: channel(1177).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media });
      tmp5(9517);
      tmp8 = <View style={items2}>{null}</View>;
    }
  }
  return tmp8;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;
