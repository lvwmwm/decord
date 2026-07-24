// Module ID: 9686
// Function ID: 75373
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 1280, 1348, 4468, 1906, 4467, 1552, 653, 4344, 4665, 8025, 4672, 4674, 4675, 675, 4686, 477, 4110, 9687, 1207, 9713, 4539, 9843, 9844, 22, 2]
// Exports: addAttachmentForCommand, cropResultToUploadItem, handleSelectGift, handleSelectThread

// Module 9686 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import DRAG_HANDLE from "DRAG_HANDLE";
import ME from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
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
function addImagesFromPicker(id, items, IMAGE_PICKER) {
  const _require = id;
  const importDefault = IMAGE_PICKER;
  if (IMAGE_PICKER !== _require(4665).UploadOrigin.FILE_ATTACHMENT) {
    const found = items.filter((uri) => {
      let closure_0 = uri;
      let tmp = null != closure_0 && null != uri.uri;
      if (tmp) {
        tmp = "" !== uri.uri;
      }
      if (tmp) {
        tmp = null == outer1_8.findUpload(closure_0, outer1_6.ChannelMessage, (closure_0) => uri(outer2_2[11]).doesImageMatchUpload(uri, closure_0));
      }
      return tmp;
    });
    const mapped = found.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["origin"] = closure_1;
      return obj;
    });
    let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
    importDefault(8025).addFiles(obj);
    const obj3 = importDefault(8025);
  } else {
    obj = importDefault(8025);
    obj = { files: items, channelId: id, draftType: DraftType.ChannelMessage };
    obj.addFiles(obj);
  }
}
function handleCameraDialog(arg0) {
  let _isNativeReflectConstruct;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let require;
  ({ channel: require, previewType: importDefault, onDismissKeyboard: dependencyMap, onRestoreKeyboard: _isNativeReflectConstruct, onSelectFiles: closure_4 } = arg0);
  const permission = importDefault(4675).requestPermission(NativePermissionTypes.CAMERA);
  permission.then((arg0) => {
    if (arg0) {
      let obj = outer1_1(outer1_2[14]);
      obj = { type: outer1_16.CAMERA };
      ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_0);
      obj.track(outer1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
      callback();
      obj = { mediaType: "mixed", includeBase64: false, quality: null, videoQuality: "high", saveToPhotos: null, skipProcessing: true };
      const obj3 = outer1_1(outer1_2[15]);
      obj.quality = outer1_0(outer1_2[12]).getImageCompressionQuality();
      obj.saveToPhotos = outer1_4.saveCameraUploadsToDevice;
      obj3.launchCamera(obj, (didCancel) => {
        if (didCancel.didCancel) {
          outer1_3();
        } else if (null == didCancel.errorCode) {
          if (null != didCancel.assets) {
            if (didCancel.assets.length > 0) {
              const size = didCancel.assets[0];
              if (null != size) {
                if (null != size.uri) {
                  if (null != size.height) {
                    if (null != size.width) {
                      let str8 = size.type;
                      if (null == str8) {
                        let arr;
                        if (null != size.fileName) {
                          const parts = str.split(".");
                          arr = parts.pop();
                        }
                        let str4 = "image/jpeg";
                        if (null != arr) {
                          str4 = "image/jpeg";
                          if (null != size.fileType) {
                            const _HermesInternal = HermesInternal;
                            str4 = "" + size.fileType + "/" + arr.toLowerCase();
                            const str7 = "" + size.fileType + "/" + arr;
                          }
                        }
                        str8 = str4;
                      }
                      let obj = {};
                      ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, width: obj.width, height: obj.height } = size);
                      if (null != size.fileName) {
                        if ("" !== size.fileName) {
                          let fileName = size.fileName;
                        }
                        obj.filename = fileName;
                        obj.playableDuration = size.duration;
                        obj.platform = outer2_0(outer2_2[9]).UploadPlatform.REACT_NATIVE;
                        obj.createdUsingInAppCamera = true;
                        obj.mimeType = str8;
                        const items = [obj];
                        outer1_4(items);
                        obj = { camera_view: outer2_10.FULLY_EXPANDED, camera_preview_type: outer1_1 };
                        outer2_1(outer2_2[14]).track(outer2_11.IN_APP_CAMERA_USED, obj);
                        outer1_3();
                        const obj2 = outer2_1(outer2_2[14]);
                      }
                      const tmp4 = str8.split("/")[1];
                      let str11 = "jpeg";
                      if (null != tmp4) {
                        str11 = tmp4;
                      }
                      const _HermesInternal2 = HermesInternal;
                      fileName = "camera_upload." + str11;
                    }
                  }
                }
              }
            }
          }
        }
      });
      const obj5 = outer1_0(outer1_2[12]);
    }
  });
}
function handleViewAllDialog(arg0) {
  let DraftType;
  let _isNativeReflectConstruct;
  let closure_4;
  let closure_5;
  let dependencyMap;
  let importDefault;
  let require;
  ({ channel: require, draftType: importDefault, uploadLimit: dependencyMap, includedUploadIds: _isNativeReflectConstruct, onDismissKeyboard: closure_4, onRestoreKeyboard: closure_5, onSelectFiles: DraftType } = arg0);
  if (obj.isIOS()) {
    if (obj2.getSystemVersionMajor() >= 14) {
      let resolved = Promise.resolve(true);
    }
    resolved.then((arg0) => {
      if (arg0) {
        let obj = outer1_1(outer1_2[14]);
        obj = { type: outer1_16.NATIVE_MEDIA_PICKER };
        ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
        obj.track(outer1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
        callback();
        const uploads = outer1_8.getUploads(found.id, closure_1);
        found = uploads;
        let arr2 = uploads;
        if (null != _isNativeReflectConstruct) {
          found = uploads.filter((id) => outer1_3.includes(id.id));
          arr2 = found;
        }
        obj = { mediaType: "any", includeBase64: false };
        if (closure_2 <= 1) {
          obj.selectionLimit = 1;
          obj.selections = arr2.map((id) => id.id);
          obj.includeExtra = !outer1_0(outer1_2[16]).isIOS();
          obj.skipProcessing = true;
          const obj5 = outer1_0(outer1_2[16]);
          outer1_1(outer1_2[15]).launchImageLibrary(obj, (didCancel) => {
            let iter2;
            let closure_0 = didCancel;
            outer1_5();
            if (!didCancel.didCancel) {
              if (null == didCancel.errorCode) {
                if (0 !== closure_0.length) {
                  if (didCancel.replaceSelection) {
                    const item = closure_0.forEach((origin) => {
                      const didCancel = origin;
                      let tmp = origin.origin !== outer3_0(outer3_2[9]).UploadOrigin.IMAGE_PICKER;
                      if (!tmp) {
                        const assets = didCancel.assets;
                        tmp = null != assets && assets.some((image) => outer4_0(outer4_2[11]).doesImageMatchUpload(image, closure_0));
                        const tmp4 = null != assets && assets.some((image) => outer4_0(outer4_2[11]).doesImageMatchUpload(image, closure_0));
                      }
                      if (!tmp) {
                        outer3_1(outer3_2[10]).remove(found.id, origin.id, outer3_6.ChannelMessage);
                        const obj = outer3_1(outer3_2[10]);
                      }
                    });
                  }
                  const items = [];
                  const tmp6 = outer2_21(didCancel.assets);
                  let iter = tmp6();
                  if (!iter.done) {
                    do {
                      let value = iter.value;
                      if (null != value.uri) {
                        let obj = {};
                        ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, fileName: obj.filename, duration: obj.playableDuration } = value);
                        let tmp10 = outer2_0;
                        let tmp11 = outer2_2;
                        obj.platform = outer2_0(outer2_2[9]).UploadPlatform.REACT_NATIVE;
                        let arr = items.push(obj);
                      }
                      iter2 = tmp6();
                      iter = iter2;
                    } while (!iter2.done);
                  }
                  if (items.length > 0) {
                    outer1_6(items);
                  }
                }
              }
            }
          });
          const obj6 = outer1_1(outer1_2[15]);
        } else {
          if (obj4.isIOS()) {
            let length = arr2.filter((origin) => origin.origin !== outer2_0(outer2_2[9]).UploadOrigin.IMAGE_PICKER).length;
          } else {
            length = arr2.length;
          }
          const diff = closure_2 - length;
          obj4 = outer1_0(outer1_2[16]);
          const tmp15 = closure_2;
        }
      }
    });
  }
  obj = require(477) /* set */;
  resolved = importDefault(4675).requestPermission(NativePermissionTypes.PHOTOS);
}
function handleLimitedPickerDialog(arg0) {
  return _handleLimitedPickerDialog(...arguments);
}
function _handleLimitedPickerDialog() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleAttachFile(arg0) {
  return _handleAttachFile(...arguments);
}
function _handleAttachFile() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function mediaNodeToUploadItem(item, createdUsingInAppCamera) {
  const image = item.node.image;
  let obj = {};
  let uri = item.node.id;
  if (null == uri) {
    uri = image.uri;
  }
  obj.id = uri;
  obj.origin = require(4665) /* _isNativeReflectConstruct */.UploadOrigin.IMAGE_PICKER;
  ({ uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, filename: obj.filename, playableDuration: obj.playableDuration } = image);
  obj.platform = require(4665) /* _isNativeReflectConstruct */.UploadPlatform.REACT_NATIVE;
  let tmp = null != createdUsingInAppCamera;
  if (tmp) {
    obj = { createdUsingInAppCamera };
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  return obj;
}
function handleSelectKeyboardItem(channelId, item, isIncluded, createdUsingInAppCamera) {
  const image = item.node.image;
  if (isIncluded) {
    const findUploadResult = closure_8.findUpload(channelId, DraftType.ChannelMessage, (closure_0) => image(outer1_2[11]).doesImageMatchUpload(image, closure_0));
    if (null != findUploadResult) {
      importDefault(8025).remove(channelId, findUploadResult.id, DraftType.ChannelMessage);
      const obj3 = importDefault(8025);
    }
  } else {
    let obj = importDefault(8025);
    obj = { channelId, file: mediaNodeToUploadItem(item, createdUsingInAppCamera), draftType: DraftType.ChannelMessage };
    obj.addFile(obj);
  }
}
function getMediaKeyboardDraftType(target) {
  if (constants.CHAT === target) {
    return DraftType.ChannelMessage;
  } else if (constants.COMMAND === target) {
    return DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === target) {
    return DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === target) {
    return DraftType.InteractionModal;
  }
}
({ MediaKeyboardTarget: closure_9, InAppCameraUsedViews: closure_10 } = DRAG_HANDLE);
({ AnalyticEvents: closure_11, AnalyticsObjects: closure_12, AnalyticsObjectTypes: closure_13, AnalyticsPages: closure_14, AnalyticsSections: closure_15, ChatInputComponentViewedTypes: closure_16, ComponentActions: closure_17, MAX_UPLOAD_COUNT: closure_18 } = ME);
let closure_20 = { code: "function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}" };
let tmp4 = (() => {
  export function animatedIndexThreshold(get) {
    if (1 === get.get().length) {
      let diff = arg1 - 1;
    } else {
      diff = arg1 * (get.get().length - 1);
    }
    return diff;
  }
  animatedIndexThreshold.__closure = {};
  animatedIndexThreshold.__workletHash = 97398083076;
  animatedIndexThreshold.__initData = closure_20;
  return animatedIndexThreshold;
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardUtils.tsx");
function showSimpleMediaKeyboard(channel) {
  const _require = channel;
  function onAttachFileParams(arg0) {
    let closure_0 = arg0;
    return {
      channel: closure_0,
      uploadLimit: outer1_18,
      onDismissKeyboard() {
        return lib(onAttachFileParams[18]).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard() {
        outer2_33(closure_0);
      },
      onSelectFiles(arg0) {
        outer2_23(lib.id, arg0, lib);
      }
    };
  }
  let obj = { target: constants.CHAT };
  const tmp = getMediaKeyboardDraftType(obj.target);
  const importDefault = tmp;
  obj = {
    channel,
    draftType: tmp,
    uploadLimit: closure_18,
    disableWhenReachedLimit: true,
    onAttachPress() {
      const merged = Object.assign(onAttachFileParams(channel(onAttachFileParams[9]).UploadOrigin.FILE_ATTACHMENT));
      outer1_28({});
    },
    onPressCamera(arg0) {
      const obj = {};
      const merged = Object.assign(onAttachFileParams(channel(onAttachFileParams[9]).UploadOrigin.IMAGE_PICKER));
      obj["previewType"] = arg0;
      outer1_24(obj);
    },
    onPressItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      const result = channel(onAttachFileParams[18]).hideMediaKeyboardActionSheet();
      outer1_31(channelId, item, isIncluded);
    },
    onViewAll() {
      const obj = {};
      const merged = Object.assign(onAttachFileParams(channel(onAttachFileParams[9]).UploadOrigin.IMAGE_PICKER));
      obj["draftType"] = closure_1;
      outer1_25(obj);
    },
    onManageLimited() {
      outer1_26({
        onDismissKeyboard: channel(onAttachFileParams[18]).hideMediaKeyboardActionSheet,
        onRestoreKeyboard() {
          outer2_33(outer1_0);
        }
      });
    },
    onClose: _require(onAttachFileParams[18]).hideMediaKeyboardActionSheet,
    onBack: _require(onAttachFileParams[18]).hideMediaKeyboardActionSheet
  };
  let result = _require(onAttachFileParams[18]).showMediaKeyboardActionSheet(obj);
}

export { addImagesFromPicker };
export const addAttachmentForCommand = function addAttachmentForCommand(channelId, onSelectFiles, result1, outer1_5, IMAGE_PICKER) {
  const option = outer1_5.option;
  let obj = require(4674) /* openImagePickerUnhandled */;
  const filename = obj.getFileFromUploadItem(result1).filename;
  if (outer1_5.target === constants.COMMAND) {
    const current = onSelectFiles.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (null != applicationCommandManager) {
      obj = { displayText: filename, preferred: true };
      const result = applicationCommandManager.insertOrJumpCommandOption(option, undefined, false, obj);
    }
  }
  const tmp7 = getMediaKeyboardDraftType(outer1_5.target);
  importDefault(8025).remove(channelId, outer1_5.option.name, tmp7);
  const obj4 = importDefault(8025);
  obj = { channelId };
  const obj1 = {};
  const merged = Object.assign(result1);
  obj1["origin"] = IMAGE_PICKER;
  obj1["id"] = option.name;
  obj1["filename"] = filename;
  obj.file = obj1;
  obj.draftType = tmp7;
  obj.allowOptimization = false;
  importDefault(8025).addFile(obj);
};
export { handleCameraDialog };
export { handleViewAllDialog };
export { handleLimitedPickerDialog };
export const handleSelectGift = function handleSelectGift(analyticsLocations, chatInput, current2) {
  const _require = current2;
  let current = chatInput.current;
  channelId = channelId.getChannelId();
  current.closeCustomKeyboard();
  channel = channel.getChannel(channelId);
  const ComponentDispatch = _require(1207).ComponentDispatch;
  ComponentDispatch.dispatch(constants8.MEDIA_KEYBOARD_GIFT_SELECTED);
  let obj = { section: constants6.CHANNEL_TEXT_AREA, object: constants3.BUTTON_ICON, objectType: constants4.GIFT };
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  if (null != guild_id) {
    let DM_CHANNEL = constants5.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants5.DM_CHANNEL;
  }
  obj.page = DM_CHANNEL;
  obj = { type: constants7.NITRO_GIFTING };
  let id;
  if (null != channel) {
    id = channel.id;
  }
  obj.channel_id = id;
  let guild_id1;
  if (null != channel) {
    guild_id1 = channel.guild_id;
  }
  obj.guild_id = guild_id1;
  importDefault(675).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  const obj3 = importDefault(675);
  const obj1 = {};
  let recipientId;
  if (null != channel) {
    if (channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
  }
  obj1.recipientUserId = recipientId;
  obj1.analyticsLocation = obj;
  obj1.analyticsLocations = analyticsLocations;
  obj1.navigationParams = { presentation: "card" };
  current = undefined;
  if (null != current2) {
    current = current2.current;
  }
  let fn;
  if (null != current) {
    fn = () => {
      let obj = current2(outer1_2[21]);
      obj = { ref: current2 };
      return obj.setAccessibilityFocus(obj);
    };
  }
  obj1.onDismiss = fn;
  _require(9713).openGiftModal(obj1);
};
export const handleSelectThread = function handleSelectThread(channel, chatInput) {
  let obj = importDefault(675);
  obj = { type: constants7.START_THREAD, channel_id: channel.id };
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  if (null != channel) {
    const current = chatInput.current;
    current.openSystemKeyboard();
    if (obj3.isIOS()) {
      const current2 = chatInput.current;
      current2.blur();
    }
    obj3 = require(477) /* set */;
    const result = require(9843) /* navigateToThreadCreation */.navigateToThreadCreation(channel, "Plus Button");
    const obj4 = require(9843) /* navigateToThreadCreation */;
  }
};
export { handleAttachFile };
export { mediaNodeToUploadItem };
export const cropResultToUploadItem = function cropResultToUploadItem(path) {
  path = path.path;
  const path2 = path.path;
  if (path.startsWith("file://")) {
    let combined = path2;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "file://" + path2;
  }
  const parts = path.path.split("/");
  const obj = {};
  const arr = parts.pop();
  const str = path.path;
  obj.id = importDefault(22).uniqueId(path.path);
  obj.uri = combined;
  obj.originalUri = combined;
  ({ mime: obj.mimeType, width: obj.width, height: obj.height } = path);
  obj.filename = arr;
  obj.platform = require(4665) /* _isNativeReflectConstruct */.UploadPlatform.REACT_NATIVE;
  return obj;
};
export { handleSelectKeyboardItem };
export { showSimpleMediaKeyboard };
export { getMediaKeyboardDraftType };
