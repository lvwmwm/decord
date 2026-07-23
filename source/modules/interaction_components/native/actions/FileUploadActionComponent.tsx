// Module ID: 16078
// Function ID: 124571
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 31, 27, 1348, 4468, 653, 33, 4130, 4025, 5165, 13544, 1212, 4353, 4091, 9836, 7771, 5119, 7794, 44, 566, 11281, 4711, 4670, 16079, 1881, 4470, 4674, 11121, 7938, 9653, 1820, 9652, 4672, 4541, 689, 5503, 2]
// Exports: default

// Module 16078 (_createForOfIteratorHelperLoose)
import ME from "ME";
import closure_4 from "_createForOfIteratorHelperLoose";
import { View } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import { NOOP } from "ME";
import jsxProd from "Stack";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function MainAreaCanUpload(arg0) {
  let maxSizeBytes;
  let maxValues;
  let minValues;
  let openFilePicker;
  let types;
  ({ minValues, maxValues } = arg0);
  ({ openFilePicker, types, maxSizeBytes } = arg0);
  let obj = require(4025) /* formatSize */;
  obj = { onPress: openFilePicker };
  obj = { IconComponent: require(13544) /* FileUpIcon */.FileUpIcon };
  obj.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.format(require(1212) /* getSystemLocale */.t["/2JwTv"], { maxValues });
  const formatSizeResult = obj.formatSize(maxSizeBytes / require(4025) /* formatSize */.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  obj.subLabel = require(4353) /* _createForOfIteratorHelperLoose */.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  obj.start = true;
  obj.end = true;
  obj.arrow = true;
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
function MainAreaLimitReached() {
  let obj = { icon: null, label: null, subLabel: null, disabled: true, start: true, end: true };
  obj = { IconComponent: require(4091) /* CircleCheckIcon */.CircleCheckIcon };
  obj.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["0PhgpK"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t.HYg2Hn);
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
function File(upload) {
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  let obj = {};
  obj = { uri: upload.item.uri, isImage: upload.isImage, isVideo: upload.isVideo, width: 32, height: 32 };
  obj = { style: callback2().defaultAttachmentIconWrapper };
  const tmp = callback2();
  const tmp2 = callback;
  obj.children = callback(upload(9836).AttachmentIcon, { fileName: upload.filename });
  obj.defaultPreview = callback(View, obj);
  obj.icon = callback(handleRemoveFile(9836), obj);
  let filename = upload.filename;
  if (null == filename) {
    const intl = upload(1212).intl;
    filename = intl.string(upload(1212).t.ZMirp0);
  }
  obj.label = filename;
  const obj2 = {
    variant: "tertiary",
    size: "sm",
    icon: callback(upload(5119).XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    }
  };
  const intl2 = upload(1212).intl;
  obj2.accessibilityLabel = intl2.string(upload(1212).t.N86XcP);
  obj.trailing = callback(upload(7771).IconButton, obj2);
  obj.start = true;
  obj.end = true;
  return tmp2(upload(5165).TableRow, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  let obj = maxValues(customId[17]);
  const componentStateContext = obj.useComponentStateContext();
  channelId(customId[18])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  channelId = componentStateContext.channelId;
  channelId(customId[18])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  customId = undefined;
  if (null != modal) {
    customId = modal.customId;
  }
  channelId(customId[18])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  let obj2 = maxValues(customId[19]);
  let items = [showInvalidFileTypeAlert];
  const stateFromStores = obj2.useStateFromStores(items, () => showInvalidFileTypeAlert.getChannel(channelId));
  channelId(customId[18])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  const fileTypeFiltering = maxValues(customId[20]).useFileTypeFiltering(maxValues.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const obj4 = maxValues(customId[20]);
  const kestrelConfig = maxValues(customId[21]).getKestrelConfig({ location: "native.FileUploadActionComponent" });
  const obj5 = maxValues(customId[21]);
  const obj6 = maxValues(customId[21]);
  const effectiveKestrelLimit = obj6.getEffectiveKestrelLimit(kestrelConfig, maxValues(customId[22]).maxFileSize(stateFromStores.guild_id));
  const obj7 = maxValues(customId[22]);
  const fileUploadComponentState = maxValues(customId[23]).useFileUploadComponentState(maxValues);
  const uploadIds = fileUploadComponentState.uploadIds;
  const setUploadIds = fileUploadComponentState.setUploadIds;
  const currentUploads = fileUploadComponentState.currentUploads;
  const parents = componentStateContext.getParents(maxValues);
  let first;
  if (null != parents) {
    first = parents[0];
  }
  let type;
  if (null != first) {
    type = first.type;
  }
  let tmp14;
  if (type === maxValues(customId[24]).ComponentType.LABEL) {
    tmp14 = first;
  }
  channelId(customId[18])(null != tmp14, "FileUploadActionComponent must be used within a label Component");
  const items1 = [uploadIds, maxValues, allowedExtensions.length, validateFilenames, setUploadIds, effectiveKestrelLimit, showInvalidFileTypeAlert, customId, channelId];
  const callback = allowedExtensions.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [channelId, uploadIds, setUploadIds];
  const callback1 = allowedExtensions.useCallback((arg0) => {
    let closure_0 = arg0;
    channelId(customId[28]).remove(channelId, arg0, mediaFilesAllowed.InteractionModal);
    setUploadIds(uploadIds.filter((arg0) => arg0 !== closure_0));
  }, items2);
  const items3 = [stateFromStores, allowedExtensions, maxValues, mediaFilesAllowed, callback, uploadIds, currentUploads, callback1];
  const callback2 = allowedExtensions.useCallback(() => {
    const InteractionModal = mediaFilesAllowed.InteractionModal;
    let obj = {
      channel: stateFromStores,
      extensions: allowedExtensions,
      uploadLimit: InteractionModal,
      onDismissKeyboard() {
        return maxValues(customId[29]).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveKestrelLimit,
      onSelectFiles(arg0) {
        outer1_12(arg0);
      }
    };
    let result = maxValues(customId[30]).dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      let tmp2Result = tmp2(tmp3[29]);
      obj = {
        channel: stateFromStores,
        draftType: InteractionModal,
        extensions: allowedExtensions,
        uploadLimit: InteractionModal,
        disableWhenReachedLimit: true,
        includedUploadIds: uploadIds,
        onAttachPress() {
            let obj = maxValues(customId[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj.handleAttachFile(obj);
          },
        onPressCamera(arg0) {
            let obj = maxValues(customId[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj["previewType"] = arg0;
            obj.handleCameraDialog(obj);
          },
        onPressItem(item) {
            item = item.item;
            const result = maxValues(customId[29]).hideMediaKeyboardActionSheet();
            if (item.isIncluded) {
              const found = outer1_11.find((closure_0) => maxValues(customId[32]).doesImageMatchUpload(item.node.image, closure_0));
              if (null != found) {
                outer1_13(found.id);
              }
            } else {
              const items = [maxValues(customId[31]).mediaNodeToUploadItem(item)];
              outer1_12(items);
              const obj2 = maxValues(customId[31]);
            }
          },
        onViewAll() {
            let obj = maxValues(customId[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj["draftType"] = InteractionModal;
            obj["includedUploadIds"] = outer1_9;
            obj.handleViewAllDialog(obj);
          },
        onManageLimited() {
            let obj = maxValues(customId[31]);
            obj = { onDismissKeyboard: maxValues(customId[29]).hideMediaKeyboardActionSheet, onRestoreKeyboard: effectiveKestrelLimit };
            const result = obj.handleLimitedPickerDialog(obj);
          },
        onClose: tmp2(tmp3[29]).hideMediaKeyboardActionSheet,
        onBack: tmp2(tmp3[29]).hideMediaKeyboardActionSheet
      };
      const result1 = tmp2Result.showMediaKeyboardActionSheet(obj);
    } else {
      tmp2Result = tmp2(tmp3[31]);
      obj = {};
      let merged = Object.assign(obj);
      tmp2Result.handleAttachFile(obj);
    }
  }, items3);
  if (1 === maxValues) {
    if (1 === currentUploads.length) {
      obj = { upload: currentUploads[0], handleRemoveFile: callback1 };
      let tmp19Result = uploadIds(File, obj);
    }
    return tmp19Result;
  }
  obj = { spacing: channelId(customId[34]).space.PX_12 };
  if (uploadIds.length >= maxValues) {
    let tmp22 = uploadIds(MainAreaLimitReached, {});
  } else {
    const obj1 = { openFilePicker: callback2, minValues: maxValues.minValues, maxValues, types: fileTypeFiltering.typesFormattedString, maxSizeBytes: effectiveKestrelLimit };
    tmp22 = uploadIds(MainAreaCanUpload, obj1);
  }
  const items4 = [tmp22, ];
  let tmp25 = currentUploads.length > 0;
  if (tmp25) {
    obj2 = { hasIcons: true, children: currentUploads.map((id) => uploadIds(outer1_16, { upload: id, handleRemoveFile: callback1 }, id.id)) };
    tmp25 = uploadIds(maxValues(customId[35]).TableRowGroup, obj2);
  }
  items4[1] = tmp25;
  obj.children = items4;
  tmp19Result = setUploadIds(maxValues(customId[33]).Stack, obj);
};
