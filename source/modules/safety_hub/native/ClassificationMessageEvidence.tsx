// Module ID: 11062
// Function ID: 86083
// Name: ClassificationEvidence
// Dependencies: [57, 31, 27, 1278, 1849, 11053, 7589, 653, 33, 7710, 4130, 566, 3976, 11063, 11064, 7588, 4317, 8318, 8192, 10055, 9329, 4351, 21, 2]
// Exports: default

// Module 11062 (ClassificationEvidence)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { MessageTypes } from "ME";
import jsxProd from "jsxProd";
import importDefaultResult from "RowManager";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, findNodeHandle: closure_6, Image: closure_7, ActivityIndicator: closure_8 } = get_ActivityIndicator);
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: closure_13, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = SafetyHubLinks);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
importDefaultResult = new importDefaultResult();
let closure_21 = _createForOfIteratorHelperLoose.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default function ClassificationEvidence(arg0) {
  let found = callback2();
  let obj = ref(566);
  const items = [memo];
  let stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  ref = React.useRef(null);
  const tmp3 = first1(React.useState(null), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = first1(React.useState({}), 2);
  first1 = tmp5[0];
  React = tmp5[1];
  let obj1 = ref(566);
  const items1 = [id];
  const resolveAssetSource = first2.resolveAssetSource;
  if (obj1.useStateFromStores(items1, () => ref(3976).isThemeLight(id.theme))) {
    let assetSource = resolveAssetSource(tmp8(11063));
  } else {
    assetSource = resolveAssetSource(tmp8(11064));
  }
  let map = arg0.flaggedContent[0];
  const tmp11 = first1(React.useState(map.attachments.length), 2);
  first2 = tmp11[0];
  let closure_8 = tmp11[1];
  let obj2 = ref(566);
  const items2 = [closure_11];
  id = map.id;
  const items3 = [map.attachments, first1, assetSource];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => outer1_11.getUsername());
  memo = React.useMemo(() => {
    const attachments = map.attachments;
    return attachments.map((filename) => {
      let obj = {};
      const merged = Object.assign(filename);
      filename = filename.filename;
      let str = "";
      if (null != filename) {
        str = filename;
      }
      obj["filename"] = str;
      obj["flags"] = ref(7588).getSpoilerFlagsForAttachment(filename);
      obj["size"] = 0;
      obj["proxy_url"] = filename.url;
      const obj2 = ref(7588);
      if (obj3.isImageFile(filename.filename)) {
        obj = {};
        const merged1 = Object.assign(obj);
        let width;
        if (null != outer1_3[filename.id]) {
          width = tmp16.width;
        }
        if (null == width) {
          width = outer2_12;
        }
        obj["width"] = width;
        let height;
        if (null != outer1_3[filename.id]) {
          height = tmp19.height;
        }
        if (null == height) {
          height = outer2_13;
        }
        obj["height"] = height;
        let tmp4 = obj;
      } else {
        tmp4 = obj;
        if (obj4.isVideoFile(filename.filename)) {
          obj = {};
          const merged2 = Object.assign(obj);
          obj["width"] = outer2_14;
          obj["height"] = outer2_15;
          obj["proxy_url"] = outer1_5.uri;
          obj["filename"] = outer2_16;
          tmp4 = obj;
        }
        obj4 = ref(4317);
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, map.attachments, id, first1, assetSource];
  const items5 = [first];
  const callback = React.useCallback((nativeEvent) => {
    let index;
    let layout;
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      let obj = { uri: uri.url };
      let url;
      if (obj2.isVideoFile(outer1_6.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      obj.videoURI = url;
      obj2 = ref(4317);
      let tmp2;
      if (obj3.isVideoFile(outer1_6.attachments[mediaIndex].filename)) {
        obj = { width: outer2_14, height: outer2_15, uri: outer1_5.uri };
        tmp2 = obj;
      }
      obj.thumbnail = tmp2;
      obj.mediaIndex = mediaIndex;
      obj.channelId = "1";
      obj.messageId = outer1_9;
      let width;
      if (null != outer1_3[uri.id]) {
        width = tmp6.width;
      }
      if (null == width) {
        width = outer2_12;
      }
      obj.width = width;
      let height;
      if (null != outer1_3[uri.id]) {
        height = tmp8.height;
      }
      if (null == height) {
        height = outer2_13;
      }
      obj.height = height;
      obj.accessoryType = "attachment";
      obj.attachmentId = uri.id;
      return obj;
    });
    let obj = ref(8318);
    obj = { initialIndex: index, initialSources: mapped, disableDownload: true, disableMediaOverlayButton: true, shareable: false, originViewOrOriginLayout: layout };
    obj.openMediaModal(obj);
  }, items4);
  const items6 = [map.attachments];
  const callback1 = React.useCallback((arg0) => {
    arg0.reactTag = first;
  }, items5);
  const effect = React.useEffect(() => {
    const attachments = map.attachments;
    const found = attachments.filter((filename) => ref(table[16]).isImageFile(filename.filename));
    const mapped = found.map((arg0) => {
      let closure_0 = arg0;
      const promise = (function getImageAttachmentDimensions(arg0) {
        let closure_0 = arg0;
        return new Promise((arg0, arg1) => {
          const url = arg0;
          return first2.getSize(url.url, () => { ... }, arg1);
        });
      })(arg0);
      return (function getImageAttachmentDimensions(arg0) {
        let closure_0 = arg0;
        return new Promise((arg0, arg1) => {
          const url = arg0;
          return first2.getSize(url.url, () => { ... }, arg1);
        });
      })(arg0).then((arg0) => {
        let closure_0 = arg0;
        return outer2_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[id.id] = id;
          return obj;
        });
      }).finally(() => outer2_8((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first2];
  const effect1 = React.useEffect(() => {
    if (0 === first2) {
      dependencyMap(map(ref.current));
    }
  }, items7);
  if ("" === map.content) {
    if (0 === map.attachments.length) {
      return null;
    }
  }
  if (first2 > 0) {
    obj = {};
    const items8 = [callback(closure_8, {}), ];
    obj = { style: found.dummyVideoAttachments };
    let attachments = map.attachments;
    found = attachments.filter((filename) => ref(4317).isVideoFile(filename.filename));
    map = found.map;
    obj.children = map((uri) => {
      let closure_0 = uri;
      obj = {
        source: obj,
        onLoad(arg0) {
          let closure_0 = arg0;
          outer1_4((arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            obj = { width: closure_0.naturalSize.width, height: closure_0.naturalSize.height };
            obj[closure_0.id] = obj;
            return obj;
          });
          outer1_8((arg0) => arg0 - 1);
        },
        onError() {
          return outer1_8((arg0) => arg0 - 1);
        }
      };
      obj = { uri: uri.url };
      return outer1_18(first(8192), obj, arg1);
    });
    items8[1] = callback(assetSource, obj);
    obj.children = items8;
    obj1 = obj;
  } else {
    obj1 = {};
    obj2 = { ref, onTapImage: callback, inverted: false };
    const items9 = [callback(first(10055), obj2), ];
    const obj3 = { rowGenerator: closure_20 };
    const tmp26 = callback;
    const tmp29 = first(9329);
    let obj4 = { id: map.id };
    const _Date = Date;
    const obj10 = ref(4351);
    const date = new Date(first(21).extractTimestamp(map.id));
    obj4.timestamp = date.toUTCString();
    obj4.channel_id = "1";
    obj4.type = MessageTypes.DEFAULT;
    if (null == stateFromStores) {
      const obj5 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
      stateFromStores = obj5;
    }
    obj4.author = stateFromStores;
    obj4.content = map.content;
    obj4.attachments = memo;
    obj3.message = obj10.createMessageRecord(obj4);
    obj3.modifyRow = callback1;
    items9[1] = tmp26(tmp29, obj3);
    obj1.children = items9;
    const obj12 = first(21);
  }
  closure_19(assetSource, obj1);
};
