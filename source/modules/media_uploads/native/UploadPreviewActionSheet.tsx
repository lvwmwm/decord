// Module ID: 9685
// Function ID: 75359
// Name: UploadPreviewActionSheet
// Dependencies: [57, 31, 27, 4468, 5188, 33, 4130, 689, 44, 4665, 1450, 1557, 4559, 4098, 4686, 9686, 3831, 7577, 4674, 9856, 9857, 5187, 5189, 4541, 4126, 477, 8346, 8306, 5501, 5165, 9858, 9860, 1212, 9132, 9864, 8025, 4644, 9866, 4543, 4089, 2]
// Exports: default

// Module 9685 (UploadPreviewActionSheet)
import _slicedToArray from "_slicedToArray";
import module_9860 from "module_9860";
import get_ActivityIndicator from "Caption";
import { DraftType } from "_isNativeReflectConstruct";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "TableCheckboxRow";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { contentContainer: { padding: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, width: "100%" };
_createForOfIteratorHelperLoose.imageWrap = _createForOfIteratorHelperLoose;
let obj1 = { overflow: "hidden", alignSelf: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md - require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.imageContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_uploads/native/UploadPreviewActionSheet.tsx");

export default function UploadPreviewActionSheet(onAdd) {
  let module_9860;
  let disableAddDescription;
  let isImage;
  let isThumbnail;
  onAdd = onAdd.onAdd;
  const onEdit = onAdd.onEdit;
  const onRemove = onAdd.onRemove;
  const channelId = onAdd.channelId;
  ({ onClose: module_9860, disableAddDescription } = onAdd);
  if (disableAddDescription === undefined) {
    disableAddDescription = false;
  }
  const upload = onAdd.upload;
  let c5;
  let id;
  let isVideo;
  let item;
  let spoiler;
  let width;
  let _createForOfIteratorHelperLoose;
  const tmp = _createForOfIteratorHelperLoose();
  c5 = tmp;
  id = upload.id;
  isVideo = upload.isVideo;
  ({ isImage, isThumbnail } = upload);
  item = upload.item;
  spoiler = upload.spoiler;
  onEdit(onRemove[8])(item.platform === onAdd(onRemove[9]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  width = onEdit(onRemove[10])().width;
  const bottom = onEdit(onRemove[11])().bottom;
  onEdit(onRemove[12])(() => () => {
    if (null != outer1_4) {
      outer1_4();
    }
  });
  const items = [width, item, tmp];
  const size = React.useMemo(() => {
    const height = item.height;
    let width = item.width;
    width = Math.min(width, item) - 2 * _undefined.contentContainer.padding - 2 * _undefined.imageWrap.padding;
    if (null != height) {
      if (null != width) {
        if (0 !== height) {
          if (0 !== width) {
            const _Math = Math;
            const result = width / Math.max(width, height);
            const obj = { width: width * result, height: height * result };
            return obj;
          }
        }
        return { width: 300, height: 300 };
      }
    }
    return { width, height: width };
  }, items);
  const items1 = [onRemove, id];
  const items2 = [onAdd];
  const callback = React.useCallback(() => {
    onEdit(onRemove[13]).hideActionSheet();
    if (null != onRemove) {
      onRemove(id);
    }
  }, items1);
  const items3 = [onEdit, item];
  const callback1 = React.useCallback(() => {
    onEdit(onRemove[13]).hideActionSheet();
    if (null != onAdd) {
      onAdd();
    }
  }, items2);
  const items4 = [isVideo, item];
  const callback2 = React.useCallback(() => {
    let obj = onEdit(onRemove[13]);
    obj.hideActionSheet();
    const width = item.width;
    const height = item.height;
    obj = { uri: item.uri, freeStyleCropEnabled: true };
    let tmp2;
    if (0 !== width) {
      tmp2 = width;
    }
    obj.width = tmp2;
    let tmp3;
    if (0 !== height) {
      tmp3 = height;
    }
    obj.height = tmp3;
    const obj2 = onEdit(onRemove[14]);
    const launchCropperResult = onEdit(onRemove[14]).launchCropper(obj);
    onEdit(onRemove[14]).launchCropper(obj).then((path) => {
      if (null != outer1_1) {
        outer1_1(onAdd(onRemove[15]).cropResultToUploadItem(path));
        const obj = onAdd(onRemove[15]);
      }
    }).catch((code) => {
      if ("E_PICKER_CANCELLED" !== code.code) {
        let obj = onEdit(onRemove[16]);
        obj = { key: "CROP_ERROR", IconComponent: onAdd(onRemove[17]).CircleErrorIcon, content: code.message };
        obj.open(obj);
      }
    });
  }, items3);
  const memo = React.useMemo(() => {
    const obj = onAdd(onRemove[18]);
    return obj.getCaptionLabel(onAdd(onRemove[18]).getType(item.uri), isVideo, item);
  }, items4);
  let tmp10 = isImage;
  if (isImage) {
    tmp10 = !disableAddDescription;
  }
  let tmp12 = onEdit(onRemove[19])(channelId, upload);
  let tmp3 = onEdit(onRemove[8]);
  const tmp14 = channelId(React.useState(undefined), 2);
  const first = tmp14[0];
  _createForOfIteratorHelperLoose = tmp14[1];
  let sum2;
  if (null != first) {
    const sum = first + bottom;
    const sum1 = sum + onEdit(onRemove[7]).space.PX_32;
    sum2 = sum1 + onEdit(onRemove[7]).space.PX_16;
  }
  if (isImage) {
    isImage = null != onEdit;
  }
  let obj = { scrollable: true, startHeight: sum2 };
  obj = {};
  obj = { padding: onEdit(onRemove[7]).space.PX_16, paddingBottom: bottom };
  obj.contentContainerStyle = obj;
  const obj1 = {
    spacing: 16,
    onLayout(nativeEvent) {
      callback(nativeEvent.nativeEvent.layout.height);
    }
  };
  const items5 = [spoiler(onAdd(onRemove[24]).Text, { variant: "text-md/semibold", children: item.filename }), , , ];
  const obj3 = { style: tmp.imageWrap };
  const obj4 = { style: items6 };
  items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  let obj7 = onAdd(onRemove[25]);
  if (obj7.isIOS()) {
    if (isVideo) {
      const uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj5 = { style: null, source: null, muted: true, paused: true, preventsDisplaySleepDuringVideoPlayback: false };
        ({ width: obj11.width, height: obj11.height } = size);
        obj5.style = {};
        obj7 = { uri: item.uri };
        obj5.source = obj7;
        let tmp24 = spoiler(onAdd(onRemove[26]).VideoComponent, obj5);
        const obj6 = {};
      }
      const items7 = [tmp24, ];
      let tmp28 = null != memo;
      if (tmp28) {
        tmp28 = "" !== memo;
      }
      if (tmp28) {
        const obj8 = { label: memo };
        tmp28 = spoiler(onAdd(onRemove[27]).Caption, obj8);
      }
      items7[1] = tmp28;
      obj4.children = items7;
      obj3.children = tmp22(tmp23, obj4);
      items5[1] = tmp21(tmp23, obj3);
      if (!tmp10) {
        if (!tmp11) {
          if (!tmp12) {
            let tmp33Result = null;
          }
          items5[2] = tmp33Result;
          if (null != onRemove) {
            const obj9 = { icon: spoiler(onAdd(onRemove[39]).TrashIcon, { size: "sm", color: "control-primary-text-default" }) };
            const intl6 = onAdd(onRemove[32]).intl;
            obj9.text = intl6.string(onAdd(onRemove[32]).t["40jBO/"]);
            obj9.onPress = callback;
            obj9.variant = "destructive";
            let tmp54 = spoiler(onAdd(onRemove[38]).Button, obj9);
          } else {
            tmp54 = null;
            if (null != onAdd) {
              const obj10 = { icon: spoiler(onAdd(onRemove[30]).ImageFileIcon, { size: "sm", color: "control-primary-text-default" }) };
              const intl5 = onAdd(onRemove[32]).intl;
              obj10.text = intl5.string(onAdd(onRemove[32]).t.s7oPyG);
              obj10.onPress = callback1;
              tmp54 = spoiler(onAdd(onRemove[38]).Button, obj10);
            }
          }
          items5[3] = tmp54;
          obj1.children = items5;
          obj.children = tmp22(onAdd(onRemove[23]).Stack, obj1);
          obj.children = tmp21(onAdd(onRemove[22]).BottomSheetScrollView, obj);
          return tmp21(onAdd(onRemove[21]).BottomSheet, obj);
        }
      }
      const obj11 = { hasIcons: true };
      let tmp36 = null;
      if (tmp10) {
        const obj12 = {
          icon: spoiler(onAdd(onRemove[30]).ImageFileIcon, {}),
          onPress() {
                  let obj = onEdit(onRemove[31]);
                  obj = { source: item, channelId, id };
                  return obj.open(obj);
                }
        };
        const intl = onAdd(onRemove[32]).intl;
        obj12.label = intl.string(onAdd(onRemove[32]).t["5S2AK+"]);
        obj12.arrow = true;
        tmp36 = spoiler(onAdd(onRemove[29]).TableRow, obj12);
      }
      const items8 = [tmp36, , , ];
      let tmp40 = null;
      if (tmp11) {
        const obj13 = {
          icon: spoiler(onAdd(onRemove[34]).SpoilerIcon, {}),
          onPress() {
                  let obj = onEdit(onRemove[13]);
                  obj.hideActionSheet();
                  obj = { spoiler: !spoiler };
                  onEdit(onRemove[35]).update(channelId, id, isVideo.ChannelMessage, obj);
                }
        };
        const intl2 = onAdd(onRemove[32]).intl;
        obj13.label = intl2.string(onAdd(onRemove[32]).t["gsI+xC"]);
        obj13.checked = spoiler;
        tmp40 = spoiler(onAdd(onRemove[33]).TableCheckboxRow, obj13);
      }
      items8[1] = tmp40;
      if (tmp12) {
        const obj14 = { icon: spoiler(onAdd(onRemove[36]).ImageIcon, {}) };
        const intl3 = onAdd(onRemove[32]).intl;
        obj14.label = intl3.string(onAdd(onRemove[32]).t.ews2pj);
        obj14.onPress = tmp13;
        obj14.checked = tmp2;
        tmp12 = spoiler(onAdd(onRemove[33]).TableCheckboxRow, obj14);
      }
      items8[2] = tmp12;
      let tmp47 = null;
      if (isImage) {
        const obj15 = { icon: spoiler(onAdd(onRemove[37]).PencilSparkleIcon, {}), onPress: callback2 };
        const intl4 = onAdd(onRemove[32]).intl;
        obj15.label = intl4.string(onAdd(onRemove[32]).t.b0y3DL);
        obj15.arrow = true;
        tmp47 = spoiler(onAdd(onRemove[29]).TableRow, obj15);
      }
      items8[3] = tmp47;
      obj11.children = items8;
      tmp33Result = width(onAdd(onRemove[28]).TableRowGroup, obj11);
      const tmp33 = width;
    }
  }
  tmp24 = spoiler(c5, { style: { width: size.width, height: size.height }, source: item });
};
