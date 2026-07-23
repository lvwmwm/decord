// Module ID: 9667
// Function ID: 75294
// Name: isSpecialMediaGridNode
// Dependencies: [31, 27, 4467, 9668, 33, 3991, 4130, 689, 3974, 1273, 9610, 4126, 566, 4672, 9669, 1212, 4704, 4674, 8262, 9670, 4131, 1450, 9671, 4644, 9657, 2]
// Exports: isAttachFilesNode, isMediaCameraNode, isViewAllPhotosNode

// Module 9667 (isSpecialMediaGridNode)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import frozen from "frozen";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let Pressable;
let closure_10;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = ["allphotos", "attach", "camera"];
    hasItem = items.includes(type.type);
  }
  return hasItem;
}
function useLayoutStyle(index, numItemsPerRow, totalNumItems) {
  let closure_0 = index;
  let closure_1 = numItemsPerRow;
  let closure_2 = totalNumItems;
  const items = [index, numItemsPerRow, totalNumItems];
  return importAllResult.useMemo(() => {
    let num = 0;
    if (0 !== closure_2) {
      const _Math = Math;
      num = Math.floor((closure_2 - 1) / closure_1);
    }
    const obj = {};
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(closure_0 / closure_1);
    if (0 === closure_0) {
      num4 = 16;
    }
    obj.borderTopLeftRadius = num4;
    if (closure_2 >= closure_1) {
      let tmp7 = closure_0 === closure_1 - 1;
    } else {
      tmp7 = closure_0 === closure_2 - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj.borderTopRightRadius = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (closure_0 % closure_1 == 0) {
        num8 = 16;
      }
    }
    obj.borderBottomLeftRadius = num8;
    if (closure_0 === closure_2 - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (closure_2 % closure_1 != 0) {
        num9 = num3;
      }
    }
    obj.borderBottomRightRadius = num9;
    if (closure_0 % closure_1 == 0) {
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
  items = [tmp.labelContainer, style];
  obj = { source: importDefault(9610), style: tmp.icon };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label };
  items1[1] = callback(require(4126) /* Text */.Text, obj);
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
  const item = draftType.item;
  ({ size, channelId } = draftType);
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  ({ index, totalNumItems, numItemsPerRow, disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp = callback3();
  const node = item.node;
  const image = node.image;
  const type = node.type;
  let obj = draftType(channelId[12]);
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {
      upload: image.findUpload(channelId, draftType, (id) => {
        let doesImageMatchUploadResult = draftType(channelId[13]).doesImageMatchUpload(outer1_6, id);
        if (doesImageMatchUploadResult) {
          let hasItem = null == outer1_5;
          if (!hasItem) {
            hasItem = outer1_5.includes(id.id);
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
  const constants = tmp3;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(() => ({
    onPress() {
      let obj = item(channelId[14]);
      obj.hideNativeMenu();
      obj = { channelId: outer1_2, item: outer1_1, isIncluded: outer1_7 };
      outer1_3(obj);
    },
    onLongPress() {
      let obj = item(channelId[14]);
      obj.hideNativeMenu();
      if (null != outer1_4) {
        obj = { channelId: outer1_2, item: outer1_1, isIncluded: outer1_7 };
        outer1_4(obj);
      }
    }
  }), items2);
  if (constants.PHOTO !== type) {
    if (constants2.IMAGE !== type) {
      if (constants.VIDEO === type) {
        const intl = draftType(channelId[15]).intl;
        let stringResult = intl.string(draftType(channelId[15]).t.FlNoSV);
      }
    }
    if (constants.VIDEO !== type) {
      if (constants2.VIDEO !== type) {
        if (constants.PHOTO === type) {
          let obj1 = draftType(channelId[17]);
          let tmp15 = null;
          if ("image/gif" === obj1.getType(image.uri)) {
            obj = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp15 = callback(draftType(channelId[18]).Caption, obj);
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
      obj1 = { source: item(channelId[19]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      obj.children = callback(draftType(channelId[9]).Icon, obj1);
      const obj2 = { accessibilityRole: "button", accessibilityLabel: stringResult };
      const obj3 = { selected: tmp3 };
      obj2.accessibilityState = obj3;
      obj2.onPress = tmp5;
      obj2.onLongPress = tmp6;
      obj2.disabled = tmp25;
      const items3 = [tmp.imageContainer, , ];
      let imageDisabled;
      const tmp32 = callback(item(channelId[5]).View, obj);
      if (tmp25) {
        imageDisabled = tmp.imageDisabled;
      }
      items3[1] = imageDisabled;
      items3[2] = useLayoutStyle(index, numItemsPerRow, totalNumItems);
      obj2.style = items3;
      let obj4 = { resizeMode: "cover", resizeMethod: "resize" };
      const items4 = [tmp.image, ];
      const obj5 = { height: size, width: size };
      items4[1] = obj5;
      obj4.style = items4;
      const obj6 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      obj4.source = obj6;
      const obj7 = { uri: image.uri, width: size, height: size };
      obj4.localImageSource = obj7;
      const items5 = [callback(draftType(channelId[9]).ThumbnailImage, obj4), tmp15, , ];
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
      return closure_10(includedUploadIds, obj2);
    }
    const obj10 = {};
    obj4 = draftType(channelId[16]);
    obj10.label = obj4.getTimeFormat(image.playableDuration);
    tmp15 = callback(NewCaption, obj10);
  }
  const intl2 = draftType(channelId[15]).intl;
  stringResult = intl2.string(draftType(channelId[15]).t.SkfkEJ);
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
  let obj = sharedValue(pressedBackgroundColor[5]);
  sharedValue = obj.useSharedValue(0);
  const tmp3 = hexToRgb();
  const backgroundColor = tmp3.backgroundColor;
  pressedBackgroundColor = tmp3.pressedBackgroundColor;
  const fn = function h() {
    let obj = {};
    const obj2 = sharedValue(pressedBackgroundColor[20]);
    const items = [backgroundColor, pressedBackgroundColor];
    obj = { duration: 200 };
    const obj3 = sharedValue(pressedBackgroundColor[5]);
    const Easing = sharedValue(pressedBackgroundColor[5]).Easing;
    obj.easing = Easing.out(sharedValue(pressedBackgroundColor[5]).Easing.quad);
    obj.backgroundColor = obj2.withTiming(sharedValue(pressedBackgroundColor[5]).interpolateColor(sharedValue.get(), [0, 1], items), obj);
    return obj;
  };
  obj = { withTiming: sharedValue(pressedBackgroundColor[20]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 15924448581794;
  fn.__initData = closure_14;
  const animatedStyle = sharedValue(pressedBackgroundColor[5]).useAnimatedStyle(fn);
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
  let items = [animatedStyle, , , , , ];
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
({ View: closure_4, Pressable } = get_ActivityIndicator);
({ ALAssetsType: closure_7, DeviceMediaType: closure_8 } = frozen);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = require("module_3991").createAnimatedComponent(Pressable);
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.image = obj;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", position: "relative" };
obj.imageContainer = obj1;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", backgroundColor: null, borderRadius: null, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.6);
_createForOfIteratorHelperLoose.borderRadius = require("_createForOfIteratorHelperLoose").radii.xs;
obj.labelContainer = _createForOfIteratorHelperLoose;
obj.mediaKeyboardItemLabelContainer = { right: 10 };
let obj3 = { width: 12, height: 12, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, marginEnd: 4 };
obj.icon = obj3;
let obj4 = { width: 14, height: 14, color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.checkIcon = obj4;
let obj5 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderWidth: 1 };
obj5.borderColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.1);
obj.checkIconContainer = obj5;
let obj6 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj6["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.xs;
obj6["backgroundColor"] = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.3);
obj.selectedOverlay = obj6;
obj.specialButton = { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 };
obj.disabled = { opacity: 0.4 };
obj.imageDisabled = { opacity: 0.2 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
hexToRgb = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
hexToRgb = _createForOfIteratorHelperLoose.createStyleProperties(hexToRgb);
let closure_14 = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
const memoResult = importAllResult.memo((arg0) => {
  let Pressable;
  let closure_10;
  let closure_3;
  let closure_4;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let importDefault;
  let items;
  let numPerRow;
  let require;
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: closure_3, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  let closure_11 = (importDefault(1450)().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  let obj = {};
  obj = { text: require(1212) /* getSystemLocale */.t.uje3P9, onPress: handleCameraPress, Icon: require(9671) /* CameraIcon */.CameraIcon };
  obj.camera = obj;
  obj = { text: require(1212) /* getSystemLocale */.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: require(4644) /* ImageIcon */.ImageIcon };
  obj.allphotos = obj;
  const tmp = obj();
  obj.attach = { text: require(1212) /* getSystemLocale */.t["8Hvr3+"], onPress: handleAttachPress, Icon: require(9657) /* AttachmentIcon */.AttachmentIcon };
  let obj1 = { text: require(1212) /* getSystemLocale */.t["8Hvr3+"], onPress: handleAttachPress, Icon: require(9657) /* AttachmentIcon */.AttachmentIcon };
  return callback(closure_4, {
    style: tmp.container,
    children: items.map((item) => {
      if (null == item) {
        let obj = { size: closure_11, isFirstInRow: 0 === arg1 };
        return outer1_9(outer1_19, obj, arg1);
      } else if (outer1_15(item)) {
        obj = { size: closure_11 };
        obj.onPress = obj[item.type].onPress;
        obj.disabled = closure_10;
        const intl = outer1_0(outer1_2[15]).intl;
        obj.accessibilityLabel = intl.string(obj[item.type].text);
        obj.index = closure_4 * numPerRow + arg1;
        obj.totalNumItems = closure_5;
        obj.numItemsPerRow = numPerRow;
        const obj1 = { color: outer1_1(outer1_2[7]).colors.ICON_SUBTLE, size: "lg" };
        obj.children = outer1_9(obj[item.type].Icon, obj1);
        return outer1_9(outer1_20, obj, arg1);
      } else {
        obj = { channelId: id.id, draftType: closure_1, index: closure_4 * numPerRow + arg1, totalNumItems: closure_5, numItemsPerRow: numPerRow, item, includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, size: closure_11, onPressItem: closure_2, onLongPressItem: closure_3, disabled: closure_10 };
        return outer1_9(outer1_18, obj, arg1);
      }
    })
  });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

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
