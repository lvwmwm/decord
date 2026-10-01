// Module ID: 10111
// Function ID: 10112
// Name: MediaKeyboardItem
// Dependencies: [19, 17, 5199, 10112, 21, 4566, 4836, 576, 4683, 1177, 9859, 4832, 504, 5448, 10113, 1115, 5481, 5450, 10114, 10115, 4837, 1479, 10116, 5401, 9571, 2]
// Exports: isAttachFilesNode, isMediaCameraNode, isSpecialMediaGridNode, isViewAllPhotosNode

// Module 10111 (MediaKeyboardItem)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import ImageIcon from "ImageIcon" /* 5401 */;
import AttachmentIcon from "AttachmentIcon" /* 9571 */;
import AssetRegistryDefault from "AssetRegistry" /* 9859 */;
import CameraIcon from "CameraIcon" /* 10116 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import DeviceConstants from "DeviceConstants" /* 10112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let constants;

let ColorUtils;
let Pressable;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
let size2;
function NewCaption(arg0) {
  let items;
  let items1;
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_12();
  const obj = { style: items, children: items1 };
  items = [tmp.labelContainer, style];
  const obj2 = { source: AssetRegistryDefault, style: tmp.icon };
  const Icon = native.Icon;
  items1 = [React4(Icon, obj2), React4(Text_Text.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label })];
  return authStore(React3, obj);
}
function MediaKeyboardImage(draftType) {
  let Icon;
  let channelId;
  let closure_7;
  let disableWhenReachedLimit;
  let disabled;
  let index;
  let items4;
  let items5;
  let items6;
  let items7;
  let numItemsPerRow;
  let obj5;
  let obj7;
  let size2;
  let size3;
  let tmp2Result2;
  let totalNumItems;
  let uploadLimit;
  draftType = draftType.draftType;
  const item = draftType.item;
  ({ index, totalNumItems, numItemsPerRow, size, channelId } = draftType);
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  ({ disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  let tmp = closure_12();
  const node = item.node;
  const image = node.image;
  const type = node.type;
  let tmp2 = draftType;
  const tmp3 = channelId;
  let obj = draftType(channelId[12]);
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let length;
    let obj = {
      upload: UploadAttachmentStore.findUpload(channelId, draftType, (id) => {
        const obj = draftType(channelId[13]);
        let doesImageMatchUploadResult = obj.doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: length
    };
    length = undefined;
    const obj2 = UploadAttachmentStore;
    const tmp = channelId;
    const tmp2 = draftType;
    if (includedUploadIds != null) {
      length = includedUploadIds.length;
    }
    if (length == null) {
      length = obj2.getUploadCount(tmp, tmp2);
    }
    return obj;
  }, items1);
  constants = tmp5;
  let obj2 = onPressItem;
  const items2 = [channelId, item, tmp5, onPressItem, onLongPressItem];
  const uploadCount = stateFromStoresObject.uploadCount;
  const memo = onPressItem.useMemo(() => {
    let isIncluded;
    let obj = {
      onPress() {
        const obj = item(channelId[14]);
        obj.hideNativeMenu();
        const obj2 = { channelId, item, isIncluded };
        onPressItem(obj2);
      },
      onLongPress() {
        const obj = item(channelId[14]);
        obj.hideNativeMenu();
        if (onLongPressItem != null) {
          const obj2 = { channelId, item, isIncluded };
          tmp2(obj2);
        }
      }
    };
    return obj;
  }, items2);
  if (constants.PHOTO !== type) {
    let stringResult;
    if (constants2.IMAGE !== type) {
      if (constants.VIDEO === type) {
        const intl = tmp2(tmp3[15]).intl;
        stringResult = intl.string(tmp2(tmp3[15]).t.FlNoSV);
      }
    }
    if (constants.VIDEO !== type) {
      let tmp12;
      if (constants2.VIDEO !== type) {
        if (constants.PHOTO === type) {
          tmp12 = null;
          const tmp2Result = tmp2(tmp3[17]);
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            const obj3 = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp12 = closure_9(tmp2(tmp3[18]).Caption, obj3);
          }
        } else {
          tmp12 = null;
        }
      }
      let tmp16 = !tmp5;
      if (tmp16) {
        tmp16 = uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      const obj4 = { style: tmp.checkIconContainer, children: closure_9(Icon, obj5) };
      const View = item(tmp3[5]).View;
      obj5 = { source: item(tmp3[19]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      Icon = tmp2(tmp3[9]).Icon;
      const items3 = [index, numItemsPerRow, totalNumItems];
      const obj6 = { accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj7, onPress: tmp7, onLongPress: tmp8, disabled: tmp16, style: items4, children: items6 };
      items4 = [tmp.imageContainer, , ];
      let imageDisabled;
      obj7 = { selected: null != stateFromStoresObject.upload };
      const tmp20 = closure_9(View, obj4);
      const memo1 = obj2.useMemo(() => {
        let num7;
        let num8;
        let num9;
        let tmp7;
        let num = 0;
        if (0 !== totalNumItems) {
          const _Math = Math;
          num = Math.floor((tmp - 1) / numItemsPerRow);
        }
        let num3 = 4;
        let num4 = 4;
        const rounded = Math.floor(index / numItemsPerRow);
        if (0 === index) {
          num4 = 16;
        }
        const obj = { borderTopLeftRadius: num4, borderTopRightRadius: num7, borderBottomLeftRadius: num8, borderBottomRightRadius: num9, marginLeft: num3 };
        if (totalNumItems >= numItemsPerRow) {
          tmp7 = tmp4 === tmp5 - 1;
        } else {
          tmp7 = tmp4 === tmp - 1;
        }
        num7 = num3;
        if (tmp7) {
          num7 = 16;
        }
        num8 = num3;
        if (rounded === num) {
          num8 = num3;
          if (index % numItemsPerRow == 0) {
            num8 = 16;
          }
        }
        if (index === totalNumItems - 1) {
          num9 = 16;
        } else {
          num9 = num3;
          if (totalNumItems % numItemsPerRow != 0) {
            num9 = num3;
          }
        }
        if (index % numItemsPerRow == 0) {
          num3 = 0;
        }
        return obj;
      }, items3);
      const tmp22 = closure_10;
      const tmp23 = includedUploadIds;
      if (tmp16) {
        imageDisabled = tmp.imageDisabled;
      }
      items4[1] = imageDisabled;
      items4[2] = memo1;
      const obj8 = { resizeMode: "cover", resizeMethod: "resize", style: items5, source: size2, localImageSource: size3 };
      items5 = [tmp.image, ];
      const size1 = { height: size, width: size };
      items5[1] = size1;
      size2 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      size3 = { uri: image.uri, width: size, height: size };
      items6 = [closure_9(tmp2(tmp3[9]).ThumbnailImage, obj8), tmp12, , ];
      let tmp18Result = null;
      if (null != stateFromStoresObject.upload) {
        const obj9 = { style: items7 };
        items7 = [tmp.selectedOverlay, ];
        const size4 = { height: size, width: size };
        items7[1] = size4;
        tmp18Result = tmp18(onLongPressItem, obj9);
      }
      items6[2] = tmp18Result;
      let tmp27 = null;
      if (null != stateFromStoresObject.upload) {
        tmp27 = tmp20;
      }
      items6[3] = tmp27;
      return tmp22(tmp23, obj6);
    }
    const obj10 = { label: tmp2Result2.getTimeFormat(image.playableDuration) };
    tmp2Result2 = tmp2(tmp3[16]);
    tmp12 = closure_9(NewCaption, obj10);
  }
  const intl2 = tmp2(tmp3[15]).intl;
  stringResult = intl2.string(tmp2(tmp3[15]).t.SkfkEJ);
}
function MediaKeyboardDummy(arg0) {
  let isFirstInRow;
  let items1;
  let obj2;
  ({ size, isFirstInRow } = arg0);
  const tmp = closure_12();
  const items = [tmp.imageContainer, ];
  const tmp4 = !isFirstInRow && { marginLeft: 4 };
  items[1] = tmp4;
  const obj = { style: items, children: React4(React3, obj2) };
  obj2 = { style: items1 };
  items1 = [tmp.image, { height: size, width: size }];
  return React4(React3, obj);
}
function MediaKeyboardSpecialButton(arg0) {
  let accessibilityLabel;
  let children;
  let disabled;
  let index;
  let items1;
  let numItemsPerRow;
  let onPress;
  let totalNumItems;
  ({ size, disabled, index, totalNumItems, numItemsPerRow } = arg0);
  let sharedValue;
  let pressedBackgroundColor;
  ({ onPress, accessibilityLabel, children } = arg0);
  const tmp = closure_12();
  let obj = sharedValue(pressedBackgroundColor[5]);
  sharedValue = obj.useSharedValue(0);
  const tmp3 = closure_16();
  const backgroundColor = tmp3.backgroundColor;
  pressedBackgroundColor = tmp3.pressedBackgroundColor;
  let obj2 = sharedValue(pressedBackgroundColor[5]);
  const fn = function h() {
    let Easing;
    let interpolateColorResult;
    let obj3;
    let withTiming;
    const obj = { backgroundColor: withTiming(interpolateColorResult, obj3) };
    withTiming = timing.withTiming;
    timing;
    const items = [backgroundColor, pressedBackgroundColor];
    obj3 = { duration: 200, easing: Easing.out(ReanimatedRexport2.Easing.quad) };
    const obj2 = ReanimatedRexport2;
    interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
    Easing = ReanimatedRexport2.Easing;
    return obj;
  };
  let obj3 = { withTiming: sharedValue(pressedBackgroundColor[20]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__closure = obj3;
  fn.__workletHash = 15924448581794;
  fn.__initData = __initData;
  let items = [index, numItemsPerRow, totalNumItems];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = {
    disabled,
    accessibilityRole: "button",
    accessibilityLabel,
    onPressIn() {
      const result = sharedValue.set(1);
    },
    onPressOut() {
      const result = sharedValue.set(0);
    },
    onPress,
    style: items1,
    children
  };
  items1 = [animatedStyle, , , , , ];
  ({ imageContainer: arr2[1], specialButton: arr2[2] } = tmp);
  items1[3] = { width: size, height: size };
  items1[4] = react.useMemo(() => {
    let num7;
    let num8;
    let num9;
    let tmp7;
    let num = 0;
    if (0 !== totalNumItems) {
      const _Math = Math;
      num = Math.floor((tmp - 1) / numItemsPerRow);
    }
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(index / numItemsPerRow);
    if (0 === index) {
      num4 = 16;
    }
    const obj = { borderTopLeftRadius: num4, borderTopRightRadius: num7, borderBottomLeftRadius: num8, borderBottomRightRadius: num9, marginLeft: num3 };
    if (totalNumItems >= numItemsPerRow) {
      tmp7 = tmp4 === tmp5 - 1;
    } else {
      tmp7 = tmp4 === tmp - 1;
    }
    num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (index % numItemsPerRow == 0) {
        num8 = 16;
      }
    }
    if (index === totalNumItems - 1) {
      num9 = 16;
    } else {
      num9 = num3;
      if (totalNumItems % numItemsPerRow != 0) {
        num9 = num3;
      }
    }
    if (index % numItemsPerRow == 0) {
      num3 = 0;
    }
    return obj;
  }, items);
  let disabled1;
  const tmp5 = closure_9;
  const tmp6 = closure_11;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items1[5] = disabled1;
  return tmp5(tmp6, obj4);
}
({ View: closure_4, Pressable } = react_native);
const StyleSheet = react_native.StyleSheet;
({ ALAssetsType: metroImportDefault, DeviceMediaType: metroImportAll } = DeviceConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" }, image: obj2, imageContainer: obj3, labelContainer: rect, mediaKeyboardItemLabelContainer: { right: 10 }, icon: size, checkIcon: size1, checkIconContainer: size2, selectedOverlay: obj4, specialButton: { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 }, disabled: { opacity: 0.4 }, imageDisabled: { opacity: 0.2 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
rect = { flexDirection: "row", alignItems: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.6), borderRadius: nativeDefault.radii.xs, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
ColorUtils = ColorUtils_mod;
size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE, marginEnd: 4 };
size1 = { width: 14, height: 14, color: nativeDefault.colors.BACKGROUND_BRAND };
size2 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE, borderWidth: 1, borderColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.1) };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.xs, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3) };
const merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
let closure_12 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
let closure_16 = createStyles.createStyleProperties(obj5);
const __initData = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
const memoResult = react.memo((arg0) => {
  let closure_10;
  let closure_4;
  let closure_7;
  let closure_8;
  let closure_9;
  let disabled;
  let draftType;
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let id;
  let includedUploadIds;
  let items;
  let numPerRow;
  let obj2;
  let obj3;
  let obj4;
  let onLongPressItem;
  let onPressItem;
  let totalNumItems;
  let uploadLimit;
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: react, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  let obj;
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  const tmp = obj();
  size = (useWindowDimensionsDefault().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  obj = { camera: obj2, allphotos: obj3, attach: obj4 };
  obj2 = { text: intl3.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  obj3 = { text: intl3.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  obj4 = { text: intl3.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  const obj5 = {
    style: tmp.container,
    children: items.map((type, index) => {
      let Icon;
      let intl;
      let obj4;
      if (null == type) {
        const obj2 = { size, isFirstInRow: 0 === index };
        return React4(MediaKeyboardDummy, obj2, index);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          const obj3 = { size, onPress: obj[type.type].onPress, disabled, accessibilityLabel: intl.string(obj[type.type].text), index: closure_4 * numPerRow + index, totalNumItems: Pressable, numItemsPerRow: numPerRow, children: React4(Icon, obj4) };
          intl = intl3.intl;
          Icon = tmp17.Icon;
          obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
          return React4(MediaKeyboardSpecialButton, obj3, index);
        } else {
          obj = { channelId: require.id, draftType: importDefault, index: closure_4 * numPerRow + index, totalNumItems: Pressable, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size, onPressItem: dependencyMap, onLongPressItem: react, disabled };
          return React4(MediaKeyboardImage, obj, index);
        }
      }
    })
  };
  return disableWhenReachedLimit(closure_4, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default memoResult;
export const PARENT_PADDING = 24;
export const CHILD_PADDING = 4;
export const SEPARATOR_SIZE = 4;
export const isMediaCameraNode = function isMediaCameraNode(type) {
  return "type" in type && "camera" === type.type;
};
export const isAttachFilesNode = function isAttachFilesNode(type) {
  return "type" in type && "attach" === type.type;
};
export const isViewAllPhotosNode = function isViewAllPhotosNode(type) {
  return "type" in type && "allphotos" === type.type;
};
export const isSpecialMediaGridNode = function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = ["allphotos", "attach", "camera"];
    hasItem = items.includes(type.type);
  }
  return hasItem;
};
