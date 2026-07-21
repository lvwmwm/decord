// Module ID: 15949
// Function ID: 122312
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15949 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = arg1(dependencyMap[8]);
  obj = { onPress: openFilePicker };
  obj = { IconComponent: arg1(dependencyMap[10]).FileUpIcon };
  obj.icon = callback(arg1(dependencyMap[9]).TableRow.Icon, obj);
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.format(arg1(dependencyMap[11]).t./2JwTv, { maxValues });
  const formatSizeResult = obj.formatSize(maxSizeBytes / arg1(dependencyMap[8]).BYTE_IN_KB, { lineHeight: null, _$esjava$b: null });
  obj.subLabel = arg1(dependencyMap[12]).getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  obj.start = true;
  obj.end = true;
  obj.arrow = true;
  return callback(arg1(dependencyMap[9]).TableRow, obj);
}
function MainAreaLimitReached() {
  let obj = {};
  obj = { IconComponent: arg1(dependencyMap[13]).CircleCheckIcon };
  obj.icon = callback(arg1(dependencyMap[9]).TableRow.Icon, obj);
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.string(arg1(dependencyMap[11]).t.0PhgpK);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[11]).t.HYg2Hn);
  return callback(arg1(dependencyMap[9]).TableRow, obj);
}
function File(upload) {
  upload = upload.upload;
  const arg1 = upload;
  const importDefault = upload.handleRemoveFile;
  let obj = {};
  obj = { uri: upload.item.uri, isImage: upload.isImage, isVideo: upload.isVideo, width: 32, height: 32 };
  obj = { style: callback2().defaultAttachmentIconWrapper };
  const tmp = callback2();
  const tmp2 = callback;
  obj.children = callback(arg1(dependencyMap[14]).AttachmentIcon, { fileName: upload.filename });
  obj.defaultPreview = callback(View, obj);
  obj.icon = callback(importDefault(dependencyMap[14]), obj);
  let filename = upload.filename;
  if (null == filename) {
    const intl = arg1(dependencyMap[11]).intl;
    filename = intl.string(arg1(dependencyMap[11]).t.ZMirp0);
  }
  obj.label = filename;
  const obj2 = {
    9223372036854775807: 8817,
    -9223372036854775808: 1091633408,
    icon: callback(arg1(dependencyMap[16]).XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    }
  };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[11]).t.N86XcP);
  obj.trailing = callback(arg1(dependencyMap[15]).IconButton, obj2);
  obj.start = true;
  obj.end = true;
  return tmp2(arg1(dependencyMap[9]).TableRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const DraftType = arg1(dependencyMap[4]).DraftType;
const NOOP = arg1(dependencyMap[5]).NOOP;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ defaultAttachmentIconWrapper: { "Null": "Array", "Null": "summaryId" } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  const arg1 = maxValues;
  let obj = arg1(dependencyMap[17]);
  const componentStateContext = obj.useComponentStateContext();
  importDefault(dependencyMap[18])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  const importDefault = channelId;
  importDefault(dependencyMap[18])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  let customId;
  if (null != modal) {
    customId = modal.customId;
  }
  const dependencyMap = customId;
  importDefault(dependencyMap[18])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  let obj2 = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => showInvalidFileTypeAlert.getChannel(channelId));
  let closure_3 = stateFromStores;
  importDefault(dependencyMap[18])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  const fileTypeFiltering = arg1(dependencyMap[20]).useFileTypeFiltering(maxValues.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const React = allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  const View = validateFilenames;
  const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  closure_6 = showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const DraftType = mediaFilesAllowed;
  const obj4 = arg1(dependencyMap[20]);
  const kestrelConfig = arg1(dependencyMap[21]).getKestrelConfig({ location: "native.FileUploadActionComponent" });
  const obj5 = arg1(dependencyMap[21]);
  const obj6 = arg1(dependencyMap[21]);
  const effectiveKestrelLimit = obj6.getEffectiveKestrelLimit(kestrelConfig, arg1(dependencyMap[22]).maxFileSize(stateFromStores.guild_id));
  const NOOP = effectiveKestrelLimit;
  const obj7 = arg1(dependencyMap[22]);
  const fileUploadComponentState = arg1(dependencyMap[23]).useFileUploadComponentState(maxValues);
  const uploadIds = fileUploadComponentState.uploadIds;
  const setUploadIds = fileUploadComponentState.setUploadIds;
  const currentUploads = fileUploadComponentState.currentUploads;
  let closure_11 = currentUploads;
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
  if (type === arg1(dependencyMap[24]).ComponentType.LABEL) {
    tmp14 = first;
  }
  importDefault(dependencyMap[18])(null != tmp14, "FileUploadActionComponent must be used within a label Component");
  const items1 = [uploadIds, maxValues, allowedExtensions.length, validateFilenames, setUploadIds, effectiveKestrelLimit, showInvalidFileTypeAlert, customId, channelId];
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const _createForOfIteratorHelperLoose = callback;
  const items2 = [channelId, uploadIds, setUploadIds];
  const callback1 = React.useCallback((arg0) => {
    const maxValues = arg0;
    channelId(customId[28]).remove(channelId, arg0, mediaFilesAllowed.InteractionModal);
    setUploadIds(uploadIds.filter((arg0) => arg0 !== arg0));
  }, items2);
  const _arrayLikeToArray = callback1;
  const items3 = [stateFromStores, allowedExtensions, maxValues, mediaFilesAllowed, callback, uploadIds, currentUploads, callback1];
  const callback2 = React.useCallback(() => {
    const InteractionModal = mediaFilesAllowed.InteractionModal;
    const maxValues = InteractionModal;
    let obj = {
      channel: stateFromStores,
      extensions: allowedExtensions,
      uploadLimit: maxValues,
      onDismissKeyboard() {
        return InteractionModal(closure_2[29]).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveKestrelLimit,
      onSelectFiles(arg0) {
        callback(arg0);
      }
    };
    const channelId = obj;
    const result = maxValues(customId[30]).dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      let tmp2Result = tmp2(tmp3[29]);
      obj = {
        channel: stateFromStores,
        draftType: InteractionModal,
        extensions: allowedExtensions,
        uploadLimit: maxValues,
        disableWhenReachedLimit: true,
        includedUploadIds: uploadIds,
        onAttachPress() {
            let obj = InteractionModal(closure_2[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj.handleAttachFile(obj);
          },
        onPressCamera(arg0) {
            let obj = InteractionModal(closure_2[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj["previewType"] = arg0;
            obj.handleCameraDialog(obj);
          },
        onPressItem(item) {
            item = item.item;
            const InteractionModal = item;
            const result = InteractionModal(closure_2[29]).hideMediaKeyboardActionSheet();
            if (item.isIncluded) {
              const found = closure_11.find((id) => item(closure_2[32]).doesImageMatchUpload(item.node.image, id));
              if (null != found) {
                callback2(found.id);
              }
            } else {
              const items = [InteractionModal(closure_2[31]).mediaNodeToUploadItem(item)];
              callback(items);
              const obj2 = InteractionModal(closure_2[31]);
            }
          },
        onViewAll() {
            let obj = InteractionModal(closure_2[31]);
            obj = {};
            const merged = Object.assign(obj);
            obj["draftType"] = InteractionModal;
            obj["includedUploadIds"] = closure_9;
            obj.handleViewAllDialog(obj);
          },
        onManageLimited() {
            let obj = InteractionModal(closure_2[31]);
            obj = { onDismissKeyboard: InteractionModal(closure_2[29]).hideMediaKeyboardActionSheet, onRestoreKeyboard: closure_8 };
            const result = obj.handleLimitedPickerDialog(obj);
          },
        onClose: tmp2(tmp3[29]).hideMediaKeyboardActionSheet,
        onBack: tmp2(tmp3[29]).hideMediaKeyboardActionSheet
      };
      const result1 = tmp2Result.showMediaKeyboardActionSheet(obj);
    } else {
      tmp2Result = tmp2(tmp3[31]);
      obj = {};
      const merged = Object.assign(obj);
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
  obj = { spacing: importDefault(dependencyMap[34]).space.PX_12 };
  if (uploadIds.length >= maxValues) {
    let tmp22 = uploadIds(MainAreaLimitReached, {});
  } else {
    const obj1 = { openFilePicker: callback2, minValues: maxValues.minValues, maxValues, types: fileTypeFiltering.typesFormattedString, maxSizeBytes: effectiveKestrelLimit };
    tmp22 = uploadIds(MainAreaCanUpload, obj1);
  }
  const items4 = [tmp22, ];
  let tmp25 = currentUploads.length > 0;
  if (tmp25) {
    obj2 = { hasIcons: true, children: currentUploads.map((id) => uploadIds(closure_16, { upload: id, handleRemoveFile: callback1 }, id.id)) };
    tmp25 = uploadIds(arg1(dependencyMap[35]).TableRowGroup, obj2);
  }
  items4[1] = tmp25;
  obj.children = items4;
  tmp19Result = setUploadIds(arg1(dependencyMap[33]).Stack, obj);
};
