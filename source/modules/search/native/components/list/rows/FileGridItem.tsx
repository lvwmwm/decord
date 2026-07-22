// Module ID: 15255
// Function ID: 115151
// Name: getAttachmentIcon
// Dependencies: []

// Module 15255 (getAttachmentIcon)
function getAttachmentIcon(filename) {
  if (obj.isImageFile(filename)) {
    let tmp3Result = callback(arg1(dependencyMap[7]).ImageIcon, {});
  } else {
    if (obj2.isVideoFile(filename)) {
      tmp3Result = tmp3(tmp4(tmp5[8]).VideoIcon, {});
    } else {
      tmp3Result = tmp3(tmp4(tmp5[9]).FileIcon, {});
    }
    const obj2 = arg1(dependencyMap[6]);
  }
  return tmp3Result;
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, useWindowDimensions: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_7, SearchFileTypes: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ icon: { <string:3596066964>: null, <string:3638417373>: null } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function FileGridItem(containerStyle) {
  const data = containerStyle.data;
  const arg1 = data;
  const onPress = containerStyle.onPress;
  const importDefault = onPress;
  const imageStyle = containerStyle.imageStyle;
  const dependencyMap = imageStyle;
  let closure_6;
  const tmp = callback2();
  const scale = stateFromStores().scale;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.getChannel(data.channelId));
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
  const tmp6 = importDefault(dependencyMap[11])(data.attachment);
  closure_6 = tmp6;
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
    if (constants.MEDIA_ATTACHMENT === type) {
      let obj = { containerStyle: imageStyle };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = data);
      obj.authorId = data.author.id;
      obj.scale = scale;
      obj.containerHeight = imageStyle.height + closure_7;
      obj.containerWidth = imageStyle.width + closure_7;
      obj.renderFallback = function renderFallback() {
        const items = [icon.icon, closure_2];
        return callback(closure_4, { style: items, children: callback2(attachment.attachment.filename) });
      };
      return callback(data(imageStyle[12]).SearchAttachmentMediaImage, obj);
    } else if (constants.ATTACHMENT === type) {
      obj = { fileName: callback, containerStyle: imageStyle };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return callback(data(imageStyle[12]).SearchFileMediaImage, obj);
    } else if (constants.AUDIO === type) {
      obj = { containerStyle: imageStyle };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return callback(data(imageStyle[12]).SearchSoundMediaImage, obj);
    }
  }, items3);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback };
  const items4 = [callback(arg1(dependencyMap[13]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  obj = { label: tmp6 };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = arg1(dependencyMap[14]).sizeString(size);
    const obj4 = arg1(dependencyMap[14]);
  }
  obj.subLabel = sizeStringResult;
  items4[1] = callback(arg1(dependencyMap[13]).SearchListCardContent, obj);
  items4[2] = callback(arg1(dependencyMap[13]).SearchListCardFooter, { author: data.author, avatarSource: memo, channel: stateFromStores });
  obj.children = items4;
  return closure_10(arg1(dependencyMap[13]).SearchListCardContainer, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default memoResult;
