// Module ID: 10784
// Function ID: 83688
// Dependencies: [31, 27, 4144, 4149, 33, 4131, 689, 10775, 1450, 4664, 566, 10785, 1273, 2]

// Module 10784
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 } };
obj = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.media = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = callback();
  let obj = channel(10775);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const isScreenLandscape = channel(4664).useIsScreenLandscape();
  const obj2 = channel(4664);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(566).useStateFromStores(items, () => outer1_4.getParticipant(channel.id, participant.id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      obj = {};
      const items2 = [tmp.container, channel(10775).getSizeStyle(size, speakerTileStyles), ];
      const obj5 = channel(10775);
      items2[2] = channel(10775).getTileWidthStyle(size, participant(1450)().width, isScreenLandscape);
      obj.style = items2;
      obj = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores };
      const obj6 = channel(10775);
      obj.avatarSize = channel(1273).AvatarSizes.XLARGE;
      obj.channel = channel;
      obj.shrinkStreamEmptyState = false;
      obj.contentStyle = tmp.media;
      obj.children = jsx(participant(10785), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores });
      tmp5 = <View hasBottomSafeArea={false} hasLeftSafeArea={false} hasRightSafeArea={false} hasTopSafeArea={false} participant={stateFromStores} />;
      const tmp12 = participant(10785);
    }
  }
  return tmp5;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;
