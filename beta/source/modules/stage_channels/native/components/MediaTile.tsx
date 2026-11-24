// Module ID: 11078
// Function ID: 11079
// Name: MediaTile
// Dependencies: [19, 17, 6620, 5563, 21, 4913, 575, 11068, 1494, 8150, 504, 11079, 1186, 2]

// Module 11078 (MediaTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CallConstants from "CallConstants" /* 5563 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: obj2 };
obj2 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function MediaTile(channel) {
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  const tmp = closure_7();
  const obj = channel(11068);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const width = participant(1494)().width;
  const obj2 = channel(8150);
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
      const tmp2Result = channel(11068);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      const tmp2Result2 = channel(11068);
      items2[2] = tmp2Result2.getTileWidthStyle(size, width, isScreenLandscape);
      ({ hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: channel(1186).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media });
      tmp5(11079);
      tmp8 = <View style={items2}>{null}</View>;
    }
  }
  return tmp8;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;
