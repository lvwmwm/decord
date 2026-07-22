// Module ID: 9660
// Function ID: 75253
// Name: isSpecialMediaGridNode
// Dependencies: []
// Exports: isAttachFilesNode, isMediaCameraNode, isViewAllPhotosNode

// Module 9660 (isSpecialMediaGridNode)
let Pressable;
function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012649669402721746, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009042807719543704, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003656370687005138];
    hasItem = items.includes(type.type);
  }
  return hasItem;
}
function useLayoutStyle(index, numItemsPerRow, totalNumItems) {
  numItemsPerRow = index;
  const importDefault = numItemsPerRow;
  const dependencyMap = totalNumItems;
  const items = [index, numItemsPerRow, totalNumItems];
  return importAllResult.useMemo(() => {
    let num = 0;
    if (0 !== arg2) {
      const _Math = Math;
      num = Math.floor((arg2 - 1) / arg1);
    }
    const obj = {};
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(arg0 / arg1);
    if (0 === arg0) {
      num4 = 16;
    }
    obj.borderTopLeftRadius = num4;
    if (arg2 >= arg1) {
      let tmp7 = arg0 === arg1 - 1;
    } else {
      tmp7 = arg0 === arg2 - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj.borderTopRightRadius = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (arg0 % arg1 == 0) {
        num8 = 16;
      }
    }
    obj.borderBottomLeftRadius = num8;
    if (arg0 === arg2 - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (arg2 % arg1 != 0) {
        num9 = num3;
      }
    }
    obj.borderBottomRightRadius = num9;
    if (arg0 % arg1 == 0) {
      num3 = 0;
    }
    obj.marginLeft = num3;
    return obj;
  }, items);
}
function NewCaption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.labelContainer, style];
  obj = { source: importDefault(dependencyMap[10]), style: tmp.icon };
  const items1 = [callback(arg1(dependencyMap[9]).Icon, obj), ];
  obj = { -9223372036854775808: "<string:1107296621>", 9223372036854775807: "text-lg/semibold", 0: "text-strong", style: textStyle, children: label };
  items1[1] = callback(arg1(dependencyMap[11]).Text, obj);
  obj.children = items1;
  return callback2(closure_4, obj);
}
function MediaKeyboardImage(draftType) {
  let channelId;
  let disableWhenReachedLimit;
  let disabled;
  let index;
  let numItemsPerRow;
  let size;
  let totalNumItems;
  let uploadLimit;
  draftType = draftType.draftType;
  const arg1 = draftType;
  const item = draftType.item;
  const importDefault = item;
  ({ size, channelId } = draftType);
  const dependencyMap = channelId;
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  const Pressable = includedUploadIds;
  ({ index, totalNumItems, numItemsPerRow, disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp = callback3();
  const node = item.node;
  const image = node.image;
  let closure_6 = image;
  const type = node.type;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {
      upload: image.findUpload(channelId, draftType, (id) => {
        let doesImageMatchUploadResult = callback(closure_2[13]).doesImageMatchUpload(closure_6, id);
        if (doesImageMatchUploadResult) {
          let hasItem = null == closure_5;
          if (!hasItem) {
            hasItem = closure_5.includes(id.id);
          }
          doesImageMatchUploadResult = hasItem;
        }
        return doesImageMatchUploadResult;
      })
    };
    let length;
    if (null != includedUploadIds) {
      length = includedUploadIds.length;
    }
    if (null == length) {
      length = image.getUploadCount(channelId, draftType);
    }
    obj.uploadCount = length;
    return obj;
  }, items1);
  const tmp3 = null != stateFromStoresObject.upload;
  const items2 = [channelId, item, tmp3, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(() => ({
    onPress() {
      let obj = callback(closure_2[14]);
      obj.hideNativeMenu();
      obj = { channelId: closure_2, item: callback, isIncluded: closure_7 };
      callback2(obj);
    },
    onLongPress() {
      let obj = callback(closure_2[14]);
      obj.hideNativeMenu();
      if (null != callback3) {
        obj = { channelId: closure_2, item: callback, isIncluded: closure_7 };
        callback3(obj);
      }
    }
  }), items2);
  if (tmp3.PHOTO !== type) {
    if (constants.IMAGE !== type) {
      if (tmp3.VIDEO === type) {
        const intl = arg1(dependencyMap[15]).intl;
        let stringResult = intl.string(arg1(dependencyMap[15]).t.FlNoSV);
      }
    }
    if (tmp3.VIDEO !== type) {
      if (constants.VIDEO !== type) {
        if (tmp3.PHOTO === type) {
          let obj1 = arg1(dependencyMap[17]);
          let tmp15 = null;
          if ("image/gif" === obj1.getType(image.uri)) {
            obj = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp15 = callback(arg1(dependencyMap[18]).Caption, obj);
          }
        } else {
          tmp15 = null;
        }
      }
      let tmp25 = !tmp3;
      if (!tmp3) {
        tmp25 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
        const tmp26 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      obj = { style: tmp.checkIconContainer };
      obj1 = { source: importDefault(dependencyMap[19]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      obj.children = callback(arg1(dependencyMap[9]).Icon, obj1);
      const obj2 = { accessibilityRole: "button", accessibilityLabel: stringResult };
      const obj3 = { selected: tmp3 };
      obj2.accessibilityState = obj3;
      obj2.onPress = tmp5;
      obj2.onLongPress = tmp6;
      obj2.disabled = tmp25;
      const items3 = [tmp.imageContainer, , ];
      let imageDisabled;
      const tmp32 = callback(importDefault(dependencyMap[5]).View, obj);
      if (tmp25) {
        imageDisabled = tmp.imageDisabled;
      }
      items3[1] = imageDisabled;
      items3[2] = useLayoutStyle(index, numItemsPerRow, totalNumItems);
      obj2.style = items3;
      let obj4 = { position: true, top: true };
      const items4 = [tmp.image, ];
      const obj5 = { height: size, width: size };
      items4[1] = obj5;
      obj4.style = items4;
      const obj6 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      obj4.source = obj6;
      const obj7 = { uri: image.uri, width: size, height: size };
      obj4.localImageSource = obj7;
      const items5 = [callback(arg1(dependencyMap[9]).ThumbnailImage, obj4), tmp15, , ];
      let tmp41 = null;
      if (tmp3) {
        const obj8 = {};
        const items6 = [tmp.selectedOverlay, ];
        const obj9 = { height: size, width: size };
        items6[1] = obj9;
        obj8.style = items6;
        tmp41 = callback(onLongPressItem, obj8);
      }
      items5[2] = tmp41;
      let tmp44 = null;
      if (tmp3) {
        tmp44 = tmp32;
      }
      items5[3] = tmp44;
      obj2.children = items5;
      return closure_10(Pressable, obj2);
    }
    const obj10 = {};
    obj4 = arg1(dependencyMap[16]);
    obj10.label = obj4.getTimeFormat(image.playableDuration);
    tmp15 = callback(NewCaption, obj10);
  }
  const intl2 = arg1(dependencyMap[15]).intl;
  stringResult = intl2.string(arg1(dependencyMap[15]).t.SkfkEJ);
}
function MediaKeyboardDummy(size) {
  size = size.size;
  const tmp = callback3();
  let obj = {};
  const items = [tmp.imageContainer, ];
  let tmp4 = !size.isFirstInRow;
  if (tmp4) {
    obj = { marginLeft: 4 };
    tmp4 = obj;
  }
  items[1] = tmp4;
  obj.style = items;
  const items1 = [tmp.image, { height: size, width: size }];
  obj.children = callback(closure_4, { style: items1 });
  return callback(closure_4, obj);
}
function MediaKeyboardSpecialButton(arg0) {
  let accessibilityLabel;
  let children;
  let disabled;
  let index;
  let numItemsPerRow;
  let onPress;
  let size;
  let totalNumItems;
  ({ size, disabled } = arg0);
  ({ onPress, accessibilityLabel, children, index, totalNumItems, numItemsPerRow } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  const tmp3 = callback4();
  const backgroundColor = tmp3.backgroundColor;
  const importDefault = backgroundColor;
  const pressedBackgroundColor = tmp3.pressedBackgroundColor;
  const dependencyMap = pressedBackgroundColor;
  const fn = function h() {
    let obj = {};
    const obj2 = sharedValue(pressedBackgroundColor[20]);
    const items = [backgroundColor, pressedBackgroundColor];
    obj = { duration: 200 };
    const obj3 = sharedValue(pressedBackgroundColor[5]);
    const Easing = sharedValue(pressedBackgroundColor[5]).Easing;
    obj.easing = Easing.out(sharedValue(pressedBackgroundColor[5]).Easing.quad);
    obj.backgroundColor = obj2.withTiming(sharedValue(pressedBackgroundColor[5]).interpolateColor(sharedValue.get(), [77601039, 1612144654], items), obj);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[20]).withTiming, interpolateColor: arg1(dependencyMap[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: arg1(dependencyMap[5]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 15924448581794;
  fn.__initData = closure_14;
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(fn);
  obj = {
    disabled,
    accessibilityRole: "button",
    accessibilityLabel,
    onPressIn() {
      const result = sharedValue.set(1);
    },
    onPressOut() {
      const result = sharedValue.set(0);
    },
    onPress
  };
  const items = [animatedStyle, , , , , ];
  ({ imageContainer: arr[1], specialButton: arr[2] } = tmp);
  items[3] = { width: size, height: size };
  items[4] = useLayoutStyle(index, numItemsPerRow, totalNumItems);
  disabled = undefined;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[5] = disabled;
  obj.style = items;
  obj.children = children;
  return closure_9(closure_11, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_4, Pressable } = tmp2);
let closure_6 = importDefault(dependencyMap[2]);
({ ALAssetsType: closure_7, DeviceMediaType: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]).createAnimatedComponent(Pressable);
let obj2 = arg1(dependencyMap[6]);
let obj = { container: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.image = obj;
const obj1 = { "Bool(false)": "center", "Bool(false)": "center", "Bool(false)": false, borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.imageContainer = obj1;
obj2 = {};
let obj7 = arg1(dependencyMap[8]);
obj2.backgroundColor = obj7.hexWithOpacity(importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_700, 0.6);
obj2.borderRadius = importDefault(dependencyMap[7]).radii.xs;
obj.labelContainer = obj2;
obj.mediaKeyboardItemLabelContainer = { right: 10 };
const importDefaultResult = importDefault(dependencyMap[5]);
obj.icon = { tintColor: importDefault(dependencyMap[7]).colors.WHITE };
const obj4 = { "Null": "<string:1912602975>", "Null": "height", color: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
obj.checkIcon = obj4;
const obj5 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.WHITE };
const obj3 = { tintColor: importDefault(dependencyMap[7]).colors.WHITE };
obj5.borderColor = arg1(dependencyMap[8]).hexWithOpacity(importDefault(dependencyMap[7]).unsafe_rawColors.BLACK, 0.1);
obj.checkIconContainer = obj5;
const obj6 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj6["borderRadius"] = importDefault(dependencyMap[7]).radii.xs;
const obj12 = arg1(dependencyMap[8]);
obj6["backgroundColor"] = arg1(dependencyMap[8]).hexWithOpacity(importDefault(dependencyMap[7]).unsafe_rawColors.BLACK, 0.3);
obj.selectedOverlay = obj6;
obj.specialButton = {};
obj.disabled = { opacity: 0.4 };
obj.imageDisabled = { opacity: 0.2 };
let closure_12 = obj2.createStyles(obj);
const obj14 = arg1(dependencyMap[8]);
obj7 = { backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
let closure_13 = arg1(dependencyMap[6]).createStyleProperties(obj7);
let closure_14 = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
const obj15 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((arg0) => {
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let items;
  let numPerRow;
  ({ items, channel: closure_0, draftType: closure_1, onPressItem: closure_2, onLongPressItem: closure_3, rowIndex: closure_4, totalNumItems: closure_5, numPerRow } = arg0);
  let closure_6 = numPerRow;
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  let closure_11 = (importDefault(dependencyMap[21])().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  let obj = {};
  obj = { text: arg1(dependencyMap[15]).t.uje3P9, onPress: handleCameraPress, Icon: arg1(dependencyMap[22]).CameraIcon };
  obj.camera = obj;
  obj = { text: arg1(dependencyMap[15]).t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: arg1(dependencyMap[23]).ImageIcon };
  obj.allphotos = obj;
  const tmp = callback3();
  obj.attach = { text: arg1(dependencyMap[15]).t.8Hvr3+, onPress: handleAttachPress, Icon: arg1(dependencyMap[24]).AttachmentIcon };
  const callback3 = obj;
  const obj1 = { text: arg1(dependencyMap[15]).t.8Hvr3+, onPress: handleAttachPress, Icon: arg1(dependencyMap[24]).AttachmentIcon };
  return callback(closure_4, {
    style: tmp.container,
    children: items.map((item) => {
      if (null == item) {
        let obj = { size: closure_11, isFirstInRow: 0 === arg1 };
        return callback2(closure_19, obj, arg1);
      } else if (callback3(item)) {
        obj = { size: closure_11 };
        obj.onPress = obj[item.type].onPress;
        obj.disabled = closure_10;
        const intl = lib(closure_2[15]).intl;
        obj.accessibilityLabel = intl.string(obj[item.type].text);
        obj.index = closure_4 * numPerRow + arg1;
        obj.totalNumItems = closure_5;
        obj.numItemsPerRow = numPerRow;
        const obj1 = { color: callback(closure_2[7]).colors.ICON_SUBTLE, size: "lg" };
        obj.children = callback2(obj[item.type].Icon, obj1);
        return callback2(closure_20, obj, arg1);
      } else {
        obj = { channelId: lib.id, draftType: callback, index: closure_4 * numPerRow + arg1, totalNumItems: closure_5, numItemsPerRow: numPerRow, item, includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: callback2, size: closure_11, onPressItem: closure_2, onLongPressItem: closure_3, disabled: closure_10 };
        return callback2(closure_18, obj, arg1);
      }
    })
  });
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default memoResult;
export const PARENT_PADDING = 24;
export const CHILD_PADDING = 4;
export const SEPARATOR_SIZE = 4;
export const isMediaCameraNode = function isMediaCameraNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "camera" === type.type;
  }
  return tmp;
};
export const isAttachFilesNode = function isAttachFilesNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "attach" === type.type;
  }
  return tmp;
};
export const isViewAllPhotosNode = function isViewAllPhotosNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "allphotos" === type.type;
  }
  return tmp;
};
export { isSpecialMediaGridNode };
