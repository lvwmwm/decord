// Module ID: 12035
// Function ID: 12036
// Name: MediaTile
// Dependencies: [19, 17, 6843, 5681, 21, 5014, 575, 12026, 1491, 8773, 504, 12036, 1187, 2]

// Module 12035 (MediaTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CallConstants from "CallConstants" /* 5681 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import createStyles from "createStyles" /* 5014 */;
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
  const obj = channel(12026);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const width = participant(1491)().width;
  const obj2 = channel(8773);
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
      const tmp2Result = channel(12026);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      const tmp2Result2 = channel(12026);
      items2[2] = tmp2Result2.getTileWidthStyle(size, width, isScreenLandscape);
      ({ hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: channel(1187).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media });
      tmp5(12036);
      tmp8 = <View style={items2}>{null}</View>;
    }
  }
  return tmp8;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;
