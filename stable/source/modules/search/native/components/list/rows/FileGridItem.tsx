// Module ID: 16791
// Function ID: 16792
// Name: FileGridItem
// Dependencies: [19, 17, 1957, 7982, 21, 4636, 4786, 5168, 10238, 10265, 504, 8384, 16779, 16781, 5215, 2]

// Module 16791 (FileGridItem)
import SearchMediaImage from "SearchMediaImage" /* 16779 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, useWindowDimensions: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(7982);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_7, SearchFileTypes: closure_8 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default noop.memo(function FileGridItem(containerStyle) {
  const data = containerStyle.data;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let stateFromStores;
  let fileName;
  const tmp = closure_11();
  noop = tmp;
  const scale = stateFromStores().scale;
  let items = [fileName];
  stateFromStores = data(imageStyle[10]).useStateFromStores(items, () => ChannelStore.getChannel(data.channelId));
  const items1 = [data.author, ];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = noop.useMemo(() => {
    const author = data.author;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const tmp7 = onPress(imageStyle[11])(data.attachment);
  fileName = tmp7;
  let size = data.attachment.size;
  const items2 = [, , ];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
  const callback = obj2.useCallback(() => {
    onPress({ channelId: data.channelId, messageId: data.messageId });
  }, items2);
  const memo1 = obj2.useMemo(() => {
    const type = data.type;
    if (constants.MEDIA_ATTACHMENT === type) {
      const obj4 = { containerStyle: imageStyle, attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null, renderFallback: null };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = tmp);
      obj4.authorId = tmp.author.id;
      obj4.scale = scale;
      obj4.containerHeight = imageStyle.height + React5;
      obj4.containerWidth = imageStyle.width + React5;
      obj4.renderFallback = function renderFallback() {
        const obj = { style: null, children: null };
        const items = [icon.icon, imageStyle];
        obj.style = items;
        const filename = attachment.attachment.filename;
        if (obj2.isImageFile(filename)) {
          let tmpResult = tmp(tmp3(tmp4[7]).ImageIcon, { size: "lg", color: "interactive-text-default" });
        } else {
          if (tmp3Result.isVideoFile(filename)) {
            tmpResult = tmp(tmp3(tmp4[8]).VideoIcon, { size: "lg", color: "interactive-text-default" });
          } else {
            tmpResult = tmp(tmp3(tmp4[9]).FileIcon, { size: "lg", color: "interactive-text-default" });
          }
          tmp3Result = tmp3(tmp4[6]);
        }
        obj.children = tmpResult;
        return closure_2_9(scale, obj);
      };
      return React7(SearchMediaImage.SearchAttachmentMediaImage, obj4);
    } else if (tmp2.ATTACHMENT === type) {
      const size = { fileName, containerStyle: imageStyle, height: null, width: null };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return React7(SearchMediaImage.SearchFileMediaImage, size);
    } else if (tmp2.AUDIO === type) {
      const size1 = { containerStyle: imageStyle, height: null, width: null };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return React7(SearchMediaImage.SearchSoundMediaImage, size1);
    }
  }, items3);
  const obj3 = { containerStyle: containerStyle.containerStyle, onPress: callback, children: null };
  const items4 = [closure_9(data(imageStyle[13]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  let obj4 = { label: tmp7, subLabel: null };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = tmp2(tmp3[14]).sizeString(size);
    const tmp2Result = tmp2(tmp3[14]);
  }
  obj4.subLabel = sizeStringResult;
  items4[1] = closure_9(data(imageStyle[13]).SearchListCardContent, obj4);
  items4[2] = closure_9(data(imageStyle[13]).SearchListCardFooter, { author: data.author, avatarSource: memo, channel: stateFromStores });
  obj3.children = items4;
  return closure_10(data(imageStyle[13]).SearchListCardContainer, obj3);
});
