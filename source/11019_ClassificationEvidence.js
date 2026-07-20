// Module ID: 11019
// Function ID: 85799
// Name: ClassificationEvidence
// Dependencies: []
// Exports: default

// Module 11019 (ClassificationEvidence)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, findNodeHandle: closure_6, Image: closure_7, ActivityIndicator: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: closure_13, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = arg1(dependencyMap[6]));
const MessageTypes = arg1(dependencyMap[7]).MessageTypes;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[8]));
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult();
const tmp4 = arg1(dependencyMap[8]);
let closure_21 = arg1(dependencyMap[10]).createStyles({ dummyVideoAttachments: { aze: false, azj: true } });
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default function ClassificationEvidence(arg0) {
  let found = callback3();
  let obj = arg1(closure_2[11]);
  const items = [closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  const ref = React.useRef(null);
  const arg1 = ref;
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const importDefault = first;
  closure_2 = tmp3[1];
  const tmp5 = callback(React.useState({}), 2);
  const first1 = tmp5[0];
  let callback = first1;
  const React = tmp5[1];
  let obj1 = arg1(closure_2[11]);
  const items1 = [closure_9];
  const resolveAssetSource = first2.resolveAssetSource;
  if (obj1.useStateFromStores(items1, () => ref(closure_2[12]).isThemeLight(id.theme))) {
    let assetSource = resolveAssetSource(tmp8(tmp9[13]));
  } else {
    assetSource = resolveAssetSource(tmp8(tmp9[14]));
  }
  let map = arg0.flaggedContent[0];
  const tmp11 = callback(React.useState(map.attachments.length), 2);
  const first2 = tmp11[0];
  let closure_8 = tmp11[1];
  let obj2 = arg1(closure_2[11]);
  const items2 = [closure_11];
  const id = map.id;
  closure_9 = id;
  const items3 = [map.attachments, first1, assetSource];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => username.getUsername());
  const memo = React.useMemo(() => {
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
      obj["flags"] = callback(closure_2[15]).getSpoilerFlagsForAttachment(filename);
      obj["size"] = 0;
      obj["proxy_url"] = filename.url;
      const obj2 = callback(closure_2[15]);
      if (obj3.isImageFile(filename.filename)) {
        obj = {};
        const merged1 = Object.assign(obj);
        let width;
        if (null != closure_3[filename.id]) {
          width = tmp16.width;
        }
        if (null == width) {
          width = closure_12;
        }
        obj["width"] = width;
        let height;
        if (null != closure_3[filename.id]) {
          height = tmp19.height;
        }
        if (null == height) {
          height = closure_13;
        }
        obj["height"] = height;
        let tmp4 = obj;
      } else {
        tmp4 = obj;
        if (obj4.isVideoFile(filename.filename)) {
          obj = {};
          const merged2 = Object.assign(obj);
          obj["width"] = closure_14;
          obj["height"] = closure_15;
          obj["proxy_url"] = uri.uri;
          obj["filename"] = closure_16;
          tmp4 = obj;
        }
        const obj4 = callback(closure_2[16]);
      }
      return tmp4;
    });
  }, items3);
  closure_10 = memo;
  const items4 = [memo, map.attachments, id, first1, assetSource];
  const items5 = [first];
  callback = React.useCallback((nativeEvent) => {
    let index;
    let layout;
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      let obj = { uri: uri.url };
      let url;
      if (obj2.isVideoFile(closure_6.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      obj.videoURI = url;
      const obj2 = callback(closure_2[16]);
      let tmp2;
      if (obj3.isVideoFile(closure_6.attachments[mediaIndex].filename)) {
        obj = { width: closure_14, height: closure_15, uri: uri.uri };
        tmp2 = obj;
      }
      obj.thumbnail = tmp2;
      obj.mediaIndex = mediaIndex;
      obj.channelId = "1";
      obj.messageId = closure_9;
      let width;
      if (null != closure_3[uri.id]) {
        width = tmp6.width;
      }
      if (null == width) {
        width = closure_12;
      }
      obj.width = width;
      let height;
      if (null != closure_3[uri.id]) {
        height = tmp8.height;
      }
      if (null == height) {
        height = closure_13;
      }
      obj.height = height;
      obj.accessoryType = "attachment";
      obj.attachmentId = uri.id;
      return obj;
    });
    ref(closure_2[17]).openMediaModal({ initialIndex: index, initialSources: mapped, originViewOrOriginLayout: layout });
  }, items4);
  const items6 = [map.attachments];
  const callback1 = React.useCallback((arg0) => {
    arg0.reactTag = first;
  }, items5);
  const effect = React.useEffect(() => {
    const attachments = map.attachments;
    const found = attachments.filter((filename) => callback(closure_2[16]).isImageFile(filename.filename));
    const mapped = found.map((arg0) => {
      const promise = function getImageAttachmentDimensions(arg0) {
        return new Promise((arg0, arg1) => size.getSize(arg0.url, () => { ... }, arg1));
      }(arg0);
      return function getImageAttachmentDimensions(arg0) {
        return new Promise((arg0, arg1) => size.getSize(arg0.url, () => { ... }, arg1));
      }(arg0).then((arg0) => callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[arg0.id] = arg0;
        return obj;
      })).finally(() => callback2((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first2];
  const effect1 = React.useEffect(() => {
    if (0 === first2) {
      callback(map(ref.current));
    }
  }, items7);
  if ("" === map.content) {
    if (0 === map.attachments.length) {
      return null;
    }
  }
  if (first2 > 0) {
    obj = {};
    const items8 = [callback2(closure_8, {}), ];
    obj = { style: found.dummyVideoAttachments };
    const attachments = map.attachments;
    found = attachments.filter((filename) => ref(closure_2[16]).isVideoFile(filename.filename));
    map = found.map;
    obj.children = map((uri) => {
      let obj = {
        source: obj,
        onLoad(arg0) {
          callback((arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            obj = { width: arg0.naturalSize.width, height: arg0.naturalSize.height };
            obj[arg0.id] = obj;
            return obj;
          });
          callback2((arg0) => arg0 - 1);
        },
        onError() {
          return callback2((arg0) => arg0 - 1);
        }
      };
      obj = { uri: uri.url };
      return callback2(first(closure_2[18]), obj, arg1);
    });
    items8[1] = callback2(assetSource, obj);
    obj.children = items8;
    obj1 = obj;
  } else {
    obj1 = {};
    obj2 = { ref, onTapImage: callback, inverted: false };
    const items9 = [callback2(importDefault(closure_2[19]), obj2), ];
    const obj3 = { rowGenerator: importDefaultResult };
    const tmp26 = callback2;
    const tmp29 = importDefault(closure_2[20]);
    const obj4 = { id: map.id };
    const _Date = Date;
    const obj10 = arg1(closure_2[21]);
    const date = new Date(importDefault(closure_2[22]).extractTimestamp(map.id));
    obj4.timestamp = date.toUTCString();
    obj4.channel_id = "1";
    obj4.type = MessageTypes.DEFAULT;
    if (null == stateFromStores) {
      const obj5 = { GuildBadgeGem: -1740570623, renderSettingSearchResultItem: 822084322, new_moon_with_face: -1546188227, username: stateFromStores1 };
      stateFromStores = obj5;
    }
    obj4.author = stateFromStores;
    obj4.content = map.content;
    obj4.attachments = memo;
    obj3.message = obj10.createMessageRecord(obj4);
    obj3.modifyRow = callback1;
    items9[1] = tmp26(tmp29, obj3);
    obj1.children = items9;
    const obj12 = importDefault(closure_2[22]);
  }
  closure_19(assetSource, obj1);
};
