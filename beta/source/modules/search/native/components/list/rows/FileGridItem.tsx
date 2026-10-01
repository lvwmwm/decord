// Module ID: 16498
// Function ID: 16499
// Name: FileGridItem
// Dependencies: [19, 17, 2045, 7303, 21, 4836, 4986, 5401, 9569, 9593, 504, 7714, 16486, 16488, 5446, 2]

// Module 16498 (FileGridItem)
import SearchMediaImage from "SearchMediaImage" /* 16486 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ View: closure_4, useWindowDimensions: hasOwnProperty } = react_native);
({ FILE_OR_LINK_IMAGE_BUFFER: metroImportDefault, SearchFileTypes: metroImportAll } = SearchConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const memoResult = react.memo(function FileGridItem(data) {
  let closure_3;
  let items4;
  let sizeStringResult;
  data = data.data;
  const onPress = data.onPress;
  const imageStyle = data.imageStyle;
  let stateFromStores;
  let fileName;
  const containerStyle = data.containerStyle;
  let tmp = closure_11();
  react = tmp;
  const scale = stateFromStores().scale;
  let tmp2 = data;
  let tmp3 = imageStyle;
  let obj = data(imageStyle[10]);
  let items = [fileName];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(data.channelId));
  let obj2 = react;
  const items1 = [data.author, ];
  let guild_id;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = useMemo(() => {
    const author = data.author;
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items1);
  const tmp7 = onPress(tmp3[11])(data.attachment);
  fileName = tmp7;
  size = data.attachment.size;
  const items2 = [, , ];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
  const callback = obj2.useCallback(() => {
    const obj = { channelId: data.channelId, messageId: data.messageId };
    onPress(obj);
  }, items2);
  const memo1 = obj2.useMemo(() => {
    let attachment;
    let icon;
    const tmp = data;
    const type = data.type;
    let tmp2 = metroImportAll;
    if (metroImportAll.MEDIA_ATTACHMENT === type) {
      const obj4 = {
        containerStyle: imageStyle,
        attachment: null,
        channelId: null,
        authorId: tmp.author.id,
        scale,
        containerHeight: imageStyle.height + metroImportDefault,
        containerWidth: imageStyle.width + metroImportDefault,
        renderFallback() {
            let items;
            let tmpResult;
            const obj = { style: items, children: tmpResult };
            items = [icon.icon, closure_1_2];
            const filename = attachment.attachment.filename;
            const obj2 = data(imageStyle[6]);
            const tmp2 = scale;
            if (obj2.isImageFile(filename)) {
              tmpResult = tmp(tmp3(tmp4[7]).ImageIcon, { size: "lg", color: "interactive-text-default" });
            } else {
              const tmp3Result = data(imageStyle[6]);
              if (tmp3Result.isVideoFile(filename)) {
                tmpResult = tmp(tmp3(tmp4[8]).VideoIcon, { size: "lg", color: "interactive-text-default" });
              } else {
                tmpResult = tmp(tmp3(tmp4[9]).FileIcon, { size: "lg", color: "interactive-text-default" });
              }
            }
            return closure_2_9(tmp2, obj);
          }
      };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = tmp);
      return React4(SearchMediaImage.SearchAttachmentMediaImage, obj4);
    } else if (tmp2.ATTACHMENT === type) {
      size = { fileName, containerStyle: imageStyle, height: null, width: null };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return React4(SearchMediaImage.SearchFileMediaImage, size);
    } else if (tmp2.AUDIO === type) {
      const tmp3 = React4;
      const tmp4 = require;
      const size1 = { containerStyle: imageStyle, height: null, width: null };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return React4(SearchMediaImage.SearchSoundMediaImage, size1);
    }
  }, items3);
  const obj3 = { containerStyle, onPress: callback, children: items4 };
  const SearchListCardContainer = tmp2(tmp3[13]).SearchListCardContainer;
  items4 = [closure_9(tmp2(tmp3[13]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  let obj4 = { label: tmp7, subLabel: sizeStringResult };
  sizeStringResult = undefined;
  const SearchListCardContent = tmp2(tmp3[13]).SearchListCardContent;
  const tmp10 = closure_10;
  if (size > 0) {
    const tmp2Result = tmp2(tmp3[14]);
    sizeStringResult = tmp2Result.sizeString(size);
  }
  items4[1] = closure_9(SearchListCardContent, obj4);
  const obj5 = { author: data.author, avatarSource: memo, channel: stateFromStores };
  items4[2] = closure_9(tmp2(tmp3[13]).SearchListCardFooter, obj5);
  return tmp10(SearchListCardContainer, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default memoResult;
