// Module ID: 15371
// Function ID: 117321
// Name: getAttachmentIcon
// Dependencies: [31, 27, 1348, 9103, 33, 4130, 4317, 4644, 10159, 10274, 566, 7900, 15359, 15361, 4670, 2]

// Module 15371 (getAttachmentIcon)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getAttachmentIcon(filename) {
  if (obj.isImageFile(filename)) {
    let tmp3Result = callback(require(4644) /* ImageIcon */.ImageIcon, { size: "lg", color: "interactive-text-default" });
  } else {
    if (obj2.isVideoFile(filename)) {
      tmp3Result = tmp3(tmp4(10159).VideoIcon, { size: "lg", color: "interactive-text-default" });
    } else {
      tmp3Result = tmp3(tmp4(10274).FileIcon, { size: "lg", color: "interactive-text-default" });
    }
    obj2 = require(4317) /* urlMatchesFileExtension */;
  }
  return tmp3Result;
}
({ View: closure_4, useWindowDimensions: closure_5 } = get_ActivityIndicator);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_7, SearchFileTypes: closure_8 } = SearchAutocompleteSelectAnalyticsActions);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const memoResult = importAllResult.memo(function FileGridItem(containerStyle) {
  const data = containerStyle.data;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let c6;
  const tmp = callback2();
  const scale = stateFromStores().scale;
  let obj = data(imageStyle[10]);
  let items = [c6];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getChannel(data.channelId));
  const items1 = [data.author, ];
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = importAllResult.useMemo(() => {
    const author = data.author;
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const tmp6 = onPress(imageStyle[11])(data.attachment);
  c6 = tmp6;
  const size = data.attachment.size;
  const items2 = [, , ];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp6, imageStyle, scale, tmp.icon];
  const callback = importAllResult.useCallback(() => {
    onPress({ channelId: data.channelId, messageId: data.messageId });
  }, items2);
  const memo1 = importAllResult.useMemo(() => {
    const type = data.type;
    if (outer1_8.MEDIA_ATTACHMENT === type) {
      let obj = { containerStyle: imageStyle };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = data);
      obj.authorId = data.author.id;
      obj.scale = scale;
      obj.containerHeight = imageStyle.height + outer1_7;
      obj.containerWidth = imageStyle.width + outer1_7;
      obj.renderFallback = function renderFallback() {
        const items = [outer1_3.icon, outer1_2];
        return outer2_9(scale, { style: items, children: outer2_12(outer1_0.attachment.filename) });
      };
      return outer1_9(data(imageStyle[12]).SearchAttachmentMediaImage, obj);
    } else if (outer1_8.ATTACHMENT === type) {
      obj = { fileName: c6, containerStyle: imageStyle };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return outer1_9(data(imageStyle[12]).SearchFileMediaImage, obj);
    } else if (outer1_8.AUDIO === type) {
      obj = { containerStyle: imageStyle };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return outer1_9(data(imageStyle[12]).SearchSoundMediaImage, obj);
    }
  }, items3);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback };
  const items4 = [callback(data(imageStyle[13]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  obj = { label: tmp6 };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = data(imageStyle[14]).sizeString(size);
    const obj4 = data(imageStyle[14]);
  }
  obj.subLabel = sizeStringResult;
  items4[1] = callback(data(imageStyle[13]).SearchListCardContent, obj);
  items4[2] = callback(data(imageStyle[13]).SearchListCardFooter, { author: data.author, avatarSource: memo, channel: stateFromStores });
  obj.children = items4;
  return closure_10(data(imageStyle[13]).SearchListCardContainer, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default memoResult;
