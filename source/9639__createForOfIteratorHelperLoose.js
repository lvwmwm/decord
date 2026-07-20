// Module ID: 9639
// Function ID: 75079
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: addAttachmentForCommand, cropResultToUploadItem, handleSelectGift, handleSelectThread

// Module 9639 (_createForOfIteratorHelperLoose)
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
function addImagesFromPicker(id, items, IMAGE_PICKER) {
  items = id;
  const importDefault = IMAGE_PICKER;
  if (IMAGE_PICKER !== items(dependencyMap[9]).UploadOrigin.FILE_ATTACHMENT) {
    const found = items.filter((uri) => {
      let tmp = null != uri && null != uri.uri;
      if (tmp) {
        tmp = "" !== uri.uri;
      }
      if (tmp) {
        tmp = null == closure_8.findUpload(uri, ChannelMessage.ChannelMessage, (id) => id(closure_2[11]).doesImageMatchUpload(id, id));
      }
      return tmp;
    });
    const mapped = found.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["origin"] = arg2;
      return obj;
    });
    let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
    importDefault(dependencyMap[10]).addFiles(obj);
    const obj3 = importDefault(dependencyMap[10]);
  } else {
    obj = importDefault(dependencyMap[10]);
    obj = { files: items, channelId: id, draftType: DraftType.ChannelMessage };
    obj.addFiles(obj);
  }
}
function handleCameraDialog(arg0) {
  ({ channel: closure_0, previewType: closure_1, onDismissKeyboard: closure_2, onRestoreKeyboard: closure_3, onSelectFiles: closure_4 } = arg0);
  const permission = importDefault(dependencyMap[13]).requestPermission(NativePermissionTypes.CAMERA);
  permission.then((arg0) => {
    if (arg0) {
      let obj = callback2(callback3[14]);
      obj = { type: constants2.CAMERA };
      ({ id: obj2.channel_id, guild_id: obj2.guild_id } = callback);
      obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
      callback3();
      obj = { 1632723514: false, -1235459506: false, 1661142353: false, 1364605794: false, -1436432332: false, 1655629137: false };
      const obj3 = callback2(callback3[15]);
      obj.quality = callback(callback3[12]).getImageCompressionQuality();
      obj.saveToPhotos = obj.saveCameraUploadsToDevice;
      obj3.launchCamera(obj, (didCancel) => {
        if (didCancel.didCancel) {
          callback3();
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
                        obj.platform = callback(closure_2[9]).UploadPlatform.REACT_NATIVE;
                        obj.createdUsingInAppCamera = true;
                        obj.mimeType = str8;
                        const items = [obj];
                        callback4(items);
                        obj = { camera_view: constants.FULLY_EXPANDED, camera_preview_type: callback2 };
                        callback2(closure_2[14]).track(constants2.IN_APP_CAMERA_USED, obj);
                        callback3();
                        const obj2 = callback2(closure_2[14]);
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
      const obj5 = callback(callback3[12]);
    }
  });
}
function handleViewAllDialog(arg0) {
  ({ channel: closure_0, draftType: closure_1, uploadLimit: closure_2, includedUploadIds: closure_3, onDismissKeyboard: closure_4, onRestoreKeyboard: closure_5, onSelectFiles: closure_6 } = arg0);
  if (obj.isIOS()) {
    if (obj2.getSystemVersionMajor() >= 14) {
      let resolved = Promise.resolve(true);
    }
    resolved.then((arg0) => {
      if (arg0) {
        let obj = callback(closure_2[14]);
        obj = { type: constants2.NATIVE_MEDIA_PICKER };
        ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
        callback2();
        const uploads = uploads.getUploads(found.id, callback);
        let found = uploads;
        let arr2 = uploads;
        if (null != closure_3) {
          found = uploads.filter((id) => closure_3.includes(id.id));
          arr2 = found;
        }
        obj = { borderRadius: null, flexDirection: null };
        if (closure_2 <= 1) {
          obj.selectionLimit = 1;
          obj.selections = arr2.map((id) => id.id);
          obj.includeExtra = !found(closure_2[16]).isIOS();
          obj.skipProcessing = true;
          const obj5 = found(closure_2[16]);
          callback(closure_2[15]).launchImageLibrary(obj, (didCancel) => {
            let iter2;
            const found = didCancel;
            callback();
            if (!didCancel.didCancel) {
              if (null == didCancel.errorCode) {
                if (0 !== found.length) {
                  if (didCancel.replaceSelection) {
                    const item = found.forEach((origin) => {
                      let tmp = origin.origin !== origin(closure_2[9]).UploadOrigin.IMAGE_PICKER;
                      if (!tmp) {
                        const assets = origin.assets;
                        tmp = null != assets && assets.some((image) => image(closure_2[11]).doesImageMatchUpload(image, image));
                        const tmp4 = null != assets && assets.some((image) => image(closure_2[11]).doesImageMatchUpload(image, image));
                      }
                      if (!tmp) {
                        callback(closure_2[10]).remove(origin.id, origin.id, ChannelMessage.ChannelMessage);
                        const obj = callback(closure_2[10]);
                      }
                    });
                  }
                  const items = [];
                  const tmp6 = callback3(didCancel.assets);
                  let iter = tmp6();
                  if (!iter.done) {
                    do {
                      let value = iter.value;
                      if (null != value.uri) {
                        let obj = {};
                        ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, fileName: obj.filename, duration: obj.playableDuration } = value);
                        let tmp10 = closure_0;
                        let tmp11 = closure_2;
                        obj.platform = closure_0(closure_2[9]).UploadPlatform.REACT_NATIVE;
                        let arr = items.push(obj);
                      }
                      iter2 = tmp6();
                      iter = iter2;
                    } while (!iter2.done);
                  }
                  if (items.length > 0) {
                    callback2(items);
                  }
                }
              }
            }
          });
          const obj6 = callback(closure_2[15]);
        } else {
          if (obj4.isIOS()) {
            let length = arr2.filter((origin) => origin.origin !== found(closure_2[9]).UploadOrigin.IMAGE_PICKER).length;
          } else {
            length = arr2.length;
          }
          const diff = closure_2 - length;
          const obj4 = found(closure_2[16]);
          const tmp15 = closure_2;
        }
      }
    });
  }
  const obj = arg1(dependencyMap[16]);
  resolved = importDefault(dependencyMap[13]).requestPermission(NativePermissionTypes.PHOTOS);
}
function handleLimitedPickerDialog(arg0) {
  return _handleLimitedPickerDialog(...arguments);
}
function _handleLimitedPickerDialog() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleLimitedPickerDialog = obj;
  return obj(...arguments);
}
function handleAttachFile(arg0) {
  return _handleAttachFile(...arguments);
}
function _handleAttachFile() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleAttachFile = obj;
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
  obj.origin = createdUsingInAppCamera(dependencyMap[9]).UploadOrigin.IMAGE_PICKER;
  ({ uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, filename: obj.filename, playableDuration: obj.playableDuration } = image);
  obj.platform = createdUsingInAppCamera(dependencyMap[9]).UploadPlatform.REACT_NATIVE;
  let tmp = null != createdUsingInAppCamera;
  if (tmp) {
    obj = { createdUsingInAppCamera };
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  return obj;
}
function handleSelectKeyboardItem(channelId, item, isIncluded, createdUsingInAppCamera) {
  item = item.node.image;
  if (isIncluded) {
    const findUploadResult = closure_8.findUpload(channelId, DraftType.ChannelMessage, (id) => image(closure_2[11]).doesImageMatchUpload(image, id));
    if (null != findUploadResult) {
      importDefault(dependencyMap[10]).remove(channelId, findUploadResult.id, DraftType.ChannelMessage);
      const obj3 = importDefault(dependencyMap[10]);
    }
  } else {
    let obj = importDefault(dependencyMap[10]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const DraftType = arg1(dependencyMap[3]).DraftType;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ MediaKeyboardTarget: closure_9, InAppCameraUsedViews: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ AnalyticEvents: closure_11, AnalyticsObjects: closure_12, AnalyticsObjectTypes: closure_13, AnalyticsPages: closure_14, AnalyticsSections: closure_15, ChatInputComponentViewedTypes: closure_16, ComponentActions: closure_17, MAX_UPLOAD_COUNT: closure_18 } = arg1(dependencyMap[7]));
const NativePermissionTypes = arg1(dependencyMap[8]).NativePermissionTypes;
let closure_20 = { code: "function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}" };
const tmp3 = arg1(dependencyMap[7]);
const tmp4 = () => {
  function animatedIndexThreshold(get) {
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
}();
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardUtils.tsx");
function showSimpleMediaKeyboard(channel) {
  const arg1 = channel;
  function onAttachFileParams(arg0) {
    return {
      channel: arg0,
      uploadLimit: closure_18,
      onDismissKeyboard() {
        return arg0(closure_2[18]).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard() {
        callback2(arg0);
      },
      onSelectFiles(arg0) {
        callback(arg0.id, arg0, arg0);
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
      const merged = Object.assign(onAttachFileParams(arg0(onAttachFileParams[9]).UploadOrigin.FILE_ATTACHMENT));
      callback4({});
    },
    onPressCamera(arg0) {
      const obj = {};
      const merged = Object.assign(onAttachFileParams(arg0(onAttachFileParams[9]).UploadOrigin.IMAGE_PICKER));
      obj["previewType"] = arg0;
      callback(obj);
    },
    onPressItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      const result = arg0(onAttachFileParams[18]).hideMediaKeyboardActionSheet();
      callback5(channelId, item, isIncluded);
    },
    onViewAll() {
      const obj = {};
      const merged = Object.assign(onAttachFileParams(arg0(onAttachFileParams[9]).UploadOrigin.IMAGE_PICKER));
      obj["draftType"] = tmp;
      callback2(obj);
    },
    onManageLimited() {
      callback3({
        onDismissKeyboard: arg0(onAttachFileParams[18]).hideMediaKeyboardActionSheet,
        onRestoreKeyboard() {
          callback(closure_0);
        }
      });
    },
    onClose: arg1(onAttachFileParams[18]).hideMediaKeyboardActionSheet,
    onBack: arg1(onAttachFileParams[18]).hideMediaKeyboardActionSheet
  };
  const result = arg1(onAttachFileParams[18]).showMediaKeyboardActionSheet(obj);
}

export { addImagesFromPicker };
export const addAttachmentForCommand = function addAttachmentForCommand(channelId, closure_10, result1, closure_5, IMAGE_PICKER) {
  const option = closure_5.option;
  let obj = closure_10(dependencyMap[12]);
  const filename = obj.getFileFromUploadItem(result1).filename;
  if (closure_5.target === constants.COMMAND) {
    const current = closure_10.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (null != applicationCommandManager) {
      obj = { displayText: filename, preferred: true };
      const result = applicationCommandManager.insertOrJumpCommandOption(option, undefined, false, obj);
    }
  }
  const tmp7 = getMediaKeyboardDraftType(closure_5.target);
  importDefault(dependencyMap[10]).remove(channelId, closure_5.option.name, tmp7);
  const obj4 = importDefault(dependencyMap[10]);
  obj = { channelId };
  const obj1 = {};
  const merged = Object.assign(result1);
  obj1["origin"] = IMAGE_PICKER;
  obj1["id"] = option.name;
  obj1["filename"] = filename;
  obj.file = obj1;
  obj.draftType = tmp7;
  obj.allowOptimization = false;
  importDefault(dependencyMap[10]).addFile(obj);
};
export { handleCameraDialog };
export { handleViewAllDialog };
export { handleLimitedPickerDialog };
export const handleSelectGift = function handleSelectGift(analyticsLocations, chatInput, current2) {
  chatInput = current2;
  let current = chatInput.current;
  const channelId = channelId.getChannelId();
  current.closeCustomKeyboard();
  const channel = channel.getChannel(channelId);
  const ComponentDispatch = chatInput(dependencyMap[19]).ComponentDispatch;
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
  importDefault(dependencyMap[14]).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  const obj3 = importDefault(dependencyMap[14]);
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
      let obj = arg2(closure_2[21]);
      obj = { ref: arg2 };
      return obj.setAccessibilityFocus(obj);
    };
  }
  obj1.onDismiss = fn;
  chatInput(dependencyMap[20]).openGiftModal(obj1);
};
export const handleSelectThread = function handleSelectThread(channel, chatInput) {
  let obj = importDefault(dependencyMap[14]);
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
    const obj3 = chatInput(dependencyMap[16]);
    const result = chatInput(dependencyMap[22]).navigateToThreadCreation(channel, "Plus Button");
    const obj4 = chatInput(dependencyMap[22]);
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
  obj.id = importDefault(dependencyMap[24]).uniqueId(path.path);
  obj.uri = combined;
  obj.originalUri = combined;
  ({ mime: obj.mimeType, width: obj.width, height: obj.height } = path);
  obj.filename = arr;
  obj.platform = arg1(dependencyMap[9]).UploadPlatform.REACT_NATIVE;
  return obj;
};
export { handleSelectKeyboardItem };
export { showSimpleMediaKeyboard };
export const animatedIndexThreshold = tmp4;
export { getMediaKeyboardDraftType };
