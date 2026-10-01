// Module ID: 11370
// Function ID: 11371
// Name: ClassificationMessageEvidence
// Dependencies: [32, 19, 17, 1182, 1372, 7881, 7868, 1074, 21, 7374, 4836, 504, 4685, 11371, 11372, 7867, 4986, 7707, 7756, 11373, 8112, 5058, 11, 2]
// Exports: default

// Module 11370 (ClassificationMessageEvidence)
import Constants from "Constants" /* 1074 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import openMediaModal from "openMediaModal" /* 7707 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserStore from "UserStore" /* 1372 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, filename, width;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: hasOwnProperty, findNodeHandle: metroRequire, Image: metroImportDefault, ActivityIndicator: metroImportAll } = react_native);
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: map1, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = SafetyHubConstants);
const MessageTypes = Constants.MessageTypes;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let tmp5 = new RowGeneratorDefault();
const rowGenerator = tmp5;
let closure_21 = createStyles.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  let assetSource;
  let closure_2;
  let closure_4;
  let createMessageRecord;
  let date;
  let first1;
  let first3;
  let found;
  let id;
  let items8;
  let memo;
  let obj8;
  let ref;
  let tmp14;
  let tmp25Result;
  let tmp27;
  let username;
  flaggedContent = flaggedContent.flaggedContent;
  let tmp2 = ref;
  let tmp3 = dependencyMap;
  let tmp = closure_21();
  let obj = ref(504);
  const items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  let obj2 = react;
  ref = react.useRef(null);
  const tmp7 = first1(react.useState(null), 2);
  const reactTag = tmp7[0];
  dependencyMap = tmp7[1];
  let tmp9 = first1(react.useState({}), 2);
  const tmp6 = first1;
  first1 = tmp9[0];
  react = tmp9[1];
  let obj3 = ref(504);
  const items1 = [id];
  const resolveAssetSource = first3.resolveAssetSource;
  const tmp12 = reactTag;
  if (obj3.useStateFromStores(items1, () => {
    const obj = ref(closure_2[12]);
    return obj.isThemeLight(id.theme);
  })) {
    assetSource = resolveAssetSource(tmp12(11371));
    tmp14 = tmp12;
  } else {
    assetSource = resolveAssetSource(tmp12(11372));
    tmp14 = tmp12;
  }
  const first2 = flaggedContent[0];
  const tmp6Result = tmp6(obj2.useState(first2.attachments.length), 2);
  first3 = tmp6Result[0];
  let closure_8 = tmp6Result[1];
  let tmp2Result = tmp2(504);
  const items2 = [SafetyHubStore];
  id = first2.id;
  const items3 = [first2.attachments, first1, assetSource];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => username.getUsername());
  memo = obj2.useMemo(() => {
    let uri;
    const attachments = first2.attachments;
    return attachments.map((filename) => {
      let obj2;
      let str;
      let tmp4;
      const obj = { filename: str, flags: obj2.getSpoilerFlagsForAttachment(filename), size: 0, proxy_url: filename.url };
      const merged = Object.assign(filename);
      str = filename.filename;
      if (str == null) {
        str = "";
      }
      obj2 = ref(closure_2[15]);
      const obj3 = ref(closure_2[16]);
      const tmp2 = ref;
      const tmp3 = closure_2;
      if (obj3.isImageFile(filename.filename)) {
        const obj4 = { width, height };
        const merged1 = Object.assign(obj);
        width = undefined;
        const tmp15 = first1;
        if (first1[filename.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = closure_2_12;
        }
        height = undefined;
        if (tmp15[filename.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = closure_2_13;
        }
        tmp4 = obj4;
      } else {
        tmp4 = obj;
        const tmp2Result = tmp2(tmp3[16]);
        if (tmp2Result.isVideoFile(filename.filename)) {
          const obj5 = { width, height, proxy_url: uri.uri, filename };
          const merged2 = Object.assign(obj);
          tmp4 = obj5;
        }
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, first2.attachments, id, first1, assetSource];
  const items5 = [reactTag];
  const callback = obj2.useCallback((nativeEvent) => {
    let attachments;
    let index;
    let layout;
    let messageId;
    let uri;
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      let tmp5;
      let url;
      size = { uri: uri.url, videoURI: url, thumbnail: tmp5, mediaIndex, channelId: "1", messageId, width, height, accessoryType: "attachment", attachmentId: uri.id };
      url = undefined;
      const obj2 = ref(closure_2[16]);
      const tmp = ref;
      const tmp2 = closure_2;
      const tmp3 = attachments;
      if (obj2.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      tmp5 = undefined;
      const tmpResult = tmp(tmp2[16]);
      if (tmpResult.isVideoFile(tmp3.attachments[mediaIndex].filename)) {
        const size1 = { width, height, uri: uri.uri };
        tmp5 = size1;
      }
      width = undefined;
      const tmp9 = first1;
      if (first1[uri.id] != null) {
        width = tmp10.width;
      }
      if (width == null) {
        width = closure_2_12;
      }
      height = undefined;
      if (tmp9[uri.id] != null) {
        height = tmp12.height;
      }
      if (height == null) {
        height = closure_2_13;
      }
      return size;
    });
    const obj = openMediaModal;
    obj.openMediaModal({ initialIndex: index, initialSources: mapped, disableDownload: true, disableMediaOverlayButton: true, shareable: false, originViewOrOriginLayout: layout });
  }, items4);
  const items6 = [first2.attachments];
  const callback1 = obj2.useCallback((arg0) => {
    arg0.reactTag = reactTag;
  }, items5);
  const effect = obj2.useEffect(() => {
    const attachments = first2.attachments;
    const found = attachments.filter((filename) => {
      filename = filename.filename;
      const obj = ref(closure_1_2[16]);
      return obj.isImageFile(filename);
    });
    const mapped = found.map((item) => {
      let closure_0 = item;
      const promise = new Promise((arg0, arg1) => {
        url = arg0;
        return size.getSize(url.url, (width, height) => {
          size = { width, height };
          return closure_0(size);
        }, arg1);
      });
      const nextPromise = promise.then((result) => {
        id = result;
        return closure_1_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[id.id] = id;
          return obj;
        });
      });
      return nextPromise.finally(() => closure_1_8((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first3];
  const effect1 = obj2.useEffect(() => {
    if (0 === first3) {
      closure_2(metroRequire(ref.current));
    }
  }, items7);
  if ("" !== first2.content) {
    let obj10;
    const tmp25 = closure_19;
    if (first3 > 0) {
      let obj4 = { children: items8 };
      items8 = [closure_18(closure_8, {}), ];
      let obj5 = {
        style: tmp.dummyVideoAttachments,
        children: found.map((uri, index) => {
              let closure_0 = uri;
              let obj = {
                source: { uri: uri.url },
                onLoad(arg0) {
                  let closure_0 = arg0;
                  closure_1_4((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    size = { width: closure_0.naturalSize.width, height: closure_0.naturalSize.height };
                    obj[closure_0.id] = size;
                    return obj;
                  });
                  closure_1_8((arg0) => arg0 - 1);
                },
                onError() {
                  return closure_1_8((arg0) => arg0 - 1);
                }
              };
              return closure_1_18(first(closure_2[18]), obj, index);
            })
      };
      let attachments = first2.attachments;
      found = attachments.filter((filename) => {
        filename = filename.filename;
        const obj = ref(closure_2[16]);
        return obj.isVideoFile(filename);
      });
      items8[1] = closure_18(assetSource, obj5);
      obj10 = obj4;
    } else {
      const obj6 = { ref, onTapImage: callback, inverted: false };
      const items9 = [closure_18(tmp14(11373), obj6), ];
      const obj7 = { rowGenerator, message: createMessageRecord(obj8), modifyRow: callback1, pointerEvents: "none" };
      const tmp14Result = tmp14(8112);
      const _Date = Date;
      obj8 = { id: first2.id, timestamp: date.toUTCString(), channel_id: "1", type: MessageTypes.DEFAULT, author: tmp27, content: first2.content, attachments: memo };
      createMessageRecord = tmp2(5058).createMessageRecord;
      tmp2(5058);
      const self = this;
      const self2 = this;
      const tmp14Result2 = tmp14(11);
      tmp27 = stateFromStores;
      date = new Date(tmp14Result2.extractTimestamp(first2.id));
      const tmp30 = closure_18;
      if (stateFromStores == null) {
        tmp27 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
        const obj9 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
      }
      obj10 = { children: items9 };
      items9[1] = tmp30(tmp14Result, obj7);
    }
    tmp25Result = tmp25(tmp26, obj10);
  } else {
    tmp25Result = null;
  }
  return tmp25Result;
};
