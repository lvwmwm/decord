// Module ID: 9638
// Function ID: 75065
// Name: UploadPreviewActionSheet
// Dependencies: []
// Exports: default

// Module 9638 (UploadPreviewActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const DraftType = arg1(dependencyMap[3]).DraftType;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[4]).ACTION_SHEET_MAX_WIDTH;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { contentContainer: { padding: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, padding: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.md, width: "100%" };
obj.imageWrap = obj;
const obj1 = { shapes: "flex", ip: "wrap", borderRadius: importDefault(dependencyMap[7]).radii.md - importDefault(dependencyMap[7]).space.PX_4 };
obj.imageContainer = obj1;
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/media_uploads/native/UploadPreviewActionSheet.tsx");

export default function UploadPreviewActionSheet(onAdd) {
  let disableAddDescription;
  let isImage;
  let isThumbnail;
  onAdd = onAdd.onAdd;
  const arg1 = onAdd;
  const onEdit = onAdd.onEdit;
  const importDefault = onEdit;
  const onRemove = onAdd.onRemove;
  const dependencyMap = onRemove;
  const channelId = onAdd.channelId;
  let callback = channelId;
  ({ onClose: closure_4, disableAddDescription } = onAdd);
  if (disableAddDescription === undefined) {
    disableAddDescription = false;
  }
  const upload = onAdd.upload;
  let tmp;
  let id;
  let DraftType;
  let ACTION_SHEET_MAX_WIDTH;
  let spoiler;
  let width;
  let callback2;
  tmp = callback2();
  id = upload.id;
  const isVideo = upload.isVideo;
  DraftType = isVideo;
  ({ isImage, isThumbnail } = upload);
  const item = upload.item;
  ACTION_SHEET_MAX_WIDTH = item;
  spoiler = upload.spoiler;
  importDefault(dependencyMap[8])(item.platform === arg1(dependencyMap[9]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  width = importDefault(dependencyMap[10])().width;
  const bottom = importDefault(dependencyMap[11])().bottom;
  importDefault(dependencyMap[12])(() => () => {
    if (null != callback) {
      callback();
    }
  });
  const items = [width, item, tmp];
  const size = React.useMemo(() => {
    const height = item.height;
    let width = item.width;
    width = Math.min(width, item) - 2 * tmp.contentContainer.padding - 2 * tmp.imageWrap.padding;
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
        return {};
      }
    }
    return { width, height: width };
  }, items);
  const items1 = [onRemove, id];
  const items2 = [onAdd];
  callback = React.useCallback(() => {
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
  callback2 = React.useCallback(() => {
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
      if (null != callback2) {
        callback2(callback(closure_2[15]).cropResultToUploadItem(path));
        const obj = callback(closure_2[15]);
      }
    }).catch((code) => {
      if ("E_PICKER_CANCELLED" !== code.code) {
        let obj = callback2(closure_2[16]);
        obj = { key: "CROP_ERROR", IconComponent: callback(closure_2[17]).CircleErrorIcon, content: code.message };
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
  let tmp12 = importDefault(dependencyMap[19])(channelId, upload);
  const tmp3 = importDefault(dependencyMap[8]);
  const tmp14 = callback(React.useState(undefined), 2);
  const first = tmp14[0];
  callback2 = tmp14[1];
  let sum2;
  if (null != first) {
    const sum = first + bottom;
    const sum1 = sum + importDefault(dependencyMap[7]).space.PX_32;
    sum2 = sum1 + importDefault(dependencyMap[7]).space.PX_16;
  }
  if (isImage) {
    isImage = null != onEdit;
  }
  let obj = { scrollable: true, startHeight: sum2 };
  obj = {};
  obj = { padding: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: bottom };
  obj.contentContainerStyle = obj;
  const obj1 = {
    spacing: 16,
    onLayout(nativeEvent) {
      callback(nativeEvent.nativeEvent.layout.height);
    }
  };
  const items5 = [spoiler(arg1(dependencyMap[24]).Text, { variant: "text-md/semibold", children: item.filename }), , , ];
  const obj3 = { style: tmp.imageWrap };
  const obj4 = { style: items6 };
  const items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  let obj7 = arg1(dependencyMap[25]);
  if (obj7.isIOS()) {
    if (isVideo) {
      const uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj5 = {};
        ({ width: obj11.width, height: obj11.height } = size);
        obj5.style = {};
        obj7 = { uri: item.uri };
        obj5.source = obj7;
        let tmp24 = spoiler(arg1(dependencyMap[26]).VideoComponent, obj5);
        const obj6 = {};
      }
      const items7 = [tmp24, ];
      let tmp28 = null != memo;
      if (tmp28) {
        tmp28 = "" !== memo;
      }
      if (tmp28) {
        const obj8 = { label: memo };
        tmp28 = spoiler(arg1(dependencyMap[27]).Caption, obj8);
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
            const obj9 = { icon: spoiler(arg1(dependencyMap[39]).TrashIcon, {}) };
            const intl6 = arg1(dependencyMap[32]).intl;
            obj9.text = intl6.string(arg1(dependencyMap[32]).t.40jBO/);
            obj9.onPress = callback;
            obj9.variant = "destructive";
            let tmp54 = spoiler(arg1(dependencyMap[38]).Button, obj9);
          } else {
            tmp54 = null;
            if (null != onAdd) {
              const obj10 = { icon: spoiler(arg1(dependencyMap[30]).ImageFileIcon, {}) };
              const intl5 = arg1(dependencyMap[32]).intl;
              obj10.text = intl5.string(arg1(dependencyMap[32]).t.s7oPyG);
              obj10.onPress = callback1;
              tmp54 = spoiler(arg1(dependencyMap[38]).Button, obj10);
            }
          }
          items5[3] = tmp54;
          obj1.children = items5;
          obj.children = tmp22(arg1(dependencyMap[23]).Stack, obj1);
          obj.children = tmp21(arg1(dependencyMap[22]).BottomSheetScrollView, obj);
          return tmp21(arg1(dependencyMap[21]).BottomSheet, obj);
        }
      }
      const obj11 = { hasIcons: true };
      let tmp36 = null;
      if (tmp10) {
        const obj12 = {
          icon: spoiler(arg1(dependencyMap[30]).ImageFileIcon, {}),
          onPress() {
                  let obj = onEdit(onRemove[31]);
                  obj = { source: item, channelId, id };
                  return obj.open(obj);
                }
        };
        const intl = arg1(dependencyMap[32]).intl;
        obj12.label = intl.string(arg1(dependencyMap[32]).t.5S2AK+);
        obj12.arrow = true;
        tmp36 = spoiler(arg1(dependencyMap[29]).TableRow, obj12);
      }
      const items8 = [tmp36, , , ];
      let tmp40 = null;
      if (tmp11) {
        const obj13 = {
          icon: spoiler(arg1(dependencyMap[34]).SpoilerIcon, {}),
          onPress() {
                  let obj = onEdit(onRemove[13]);
                  obj.hideActionSheet();
                  obj = { spoiler: !spoiler };
                  onEdit(onRemove[35]).update(channelId, id, isVideo.ChannelMessage, obj);
                }
        };
        const intl2 = arg1(dependencyMap[32]).intl;
        obj13.label = intl2.string(arg1(dependencyMap[32]).t.gsI+xC);
        obj13.checked = spoiler;
        tmp40 = spoiler(arg1(dependencyMap[33]).TableCheckboxRow, obj13);
      }
      items8[1] = tmp40;
      if (tmp12) {
        const obj14 = { icon: spoiler(arg1(dependencyMap[36]).ImageIcon, {}) };
        const intl3 = arg1(dependencyMap[32]).intl;
        obj14.label = intl3.string(arg1(dependencyMap[32]).t.ews2pj);
        obj14.onPress = tmp13;
        obj14.checked = tmp2;
        tmp12 = spoiler(arg1(dependencyMap[33]).TableCheckboxRow, obj14);
      }
      items8[2] = tmp12;
      let tmp47 = null;
      if (isImage) {
        const obj15 = { icon: spoiler(arg1(dependencyMap[37]).PencilSparkleIcon, {}), onPress: callback2 };
        const intl4 = arg1(dependencyMap[32]).intl;
        obj15.label = intl4.string(arg1(dependencyMap[32]).t.b0y3DL);
        obj15.arrow = true;
        tmp47 = spoiler(arg1(dependencyMap[29]).TableRow, obj15);
      }
      items8[3] = tmp47;
      obj11.children = items8;
      tmp33Result = width(arg1(dependencyMap[28]).TableRowGroup, obj11);
      const tmp33 = width;
    }
  }
  tmp24 = spoiler(tmp, { style: { width: size.width, height: size.height }, source: item });
};
