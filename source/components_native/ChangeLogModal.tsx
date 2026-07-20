// Module ID: 14243
// Function ID: 107665
// Name: _callSuper
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14243 (_callSuper)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_7 from "result";
import importAllResult from "result";
import { View } from "result";
import { AnalyticEvents } from "result";
import { CHANGELOG_MODAL_KEY } from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class ChangeLogScreen {
  constructor(arg0) {
    fn = global.onClose;
    tmp = arg1;
    tmp2 = dependencyMap;
    obj = require("result");
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(jsx);
    obj2 = require("result");
    currentChangelog = obj2.useCurrentChangelog();
    changelog = currentChangelog.changelog;
    arg1 = changelog;
    loaded = currentChangelog.loaded;
    importDefault = loaded;
    size = require("result")();
    diff = size.width - 36;
    result = diff * closure_14;
    result1 = 0.5 * size.height;
    obj = { height: Math.min(result, result1) };
    if (result > result1) {
      tmp8 = closure_14;
      diff = result1 / closure_14;
    }
    obj.width = diff;
    ({ width, height } = obj);
    tmpResult = require("result");
    navigation = tmpResult.useNavigation();
    dependencyMap = navigation;
    if (null == fn) {
      fn = function e() {
        return navigation.goBack();
      };
    }
    items = [, ];
    items[0] = changelog;
    items[1] = navigation;
    effect = Object.useEffect(() => {
      if (null != changelog) {
        const obj = {
          headerTitle() {
              let obj = {};
              const intl = lib(closure_2[18]).intl;
              obj.title = intl.string(lib(closure_2[18]).t.LRmNAl);
              const intl2 = lib(closure_2[18]).intl;
              obj = {};
              if (null != lib.date) {
                if ("" !== lib.date) {
                  let toDateResult = callback(closure_2[28])(lib.date).toDate();
                  const obj3 = callback(closure_2[28])(lib.date);
                }
                obj.date = toDateResult;
                obj.subtitle = intl2.formatToPlainString(tmp2, obj);
                return closure_12(lib(closure_2[27]).NavigatorHeader, obj);
              }
              toDateResult = new Date();
            }
        };
        navigation.setOptions(obj);
      }
    }, items);
    items1 = [, ];
    items1[0] = loaded;
    items1[1] = changelog;
    effect1 = Object.useEffect(() => {
      if (loaded) {
        if (null != changelog) {
          return () => callback(closure_2[29]).markChangelogAsSeen(closure_0.id, closure_0.date);
        }
      }
    }, items1);
    if (currentChangelog.clientTooOld) {
      tmp22 = jsx;
      tmp23 = View;
      obj1 = {};
      obj1.style = legacyClassComponentStyles.empty;
      tmp24 = jsx;
      tmp25 = arg1;
      tmp26 = dependencyMap;
      num3 = 30;
      obj2 = {};
      str2 = "heading-lg/medium";
      obj2.variant = "heading-lg/medium";
      num4 = 18;
      intl2 = require("result").intl;
      obj2.children = intl2.string(require("result").t.V9ospk);
      obj1.children = jsx(require("result").Text, obj2);
      tmp14 = jsx(View, obj1);
    } else if (null == changelog) {
      obj3 = {};
      obj3.style = legacyClassComponentStyles.empty;
      tmp17 = jsx;
      tmp18 = arg1;
      tmp19 = dependencyMap;
      num = 30;
      tmp15 = jsx;
      tmp16 = View;
      Text = require("result").Text;
      obj4 = {};
      str = "text-md/semibold";
      obj4.variant = "text-md/semibold";
      num2 = 18;
      intl = require("result").intl;
      string = intl.string;
      t = require("result").t;
      if (loaded) {
        t = string(t.O1iRT8);
        obj4.children = t;
        obj4 = tmp17(Text, obj4);
        obj3.children = obj4;
        tmp20 = obj3;
      } else {
        obj4.children = string(t.ZTNur7);
        obj3.children = tmp17(Text, obj4);
        tmp20 = obj3;
      }
      tmp15Result = tmp15(tmp16, tmp20);
    } else {
      tmp12 = jsx;
      tmp13 = f107680;
      obj5 = {};
      obj5.onClose = fn;
      obj5.height = height;
      obj5.width = width;
      obj5.changeLog = changelog;
      tmp14 = jsx(f107680, obj5);
    }
    return tmp14;
  }
}
function hideChangeLog() {
  importDefault(dependencyMap[31]).popWithKey(CHANGELOG_MODAL_KEY);
}
({ jsx: closure_12, jsxs: closure_13 } = result);
let closure_14 = 0.5625;
result = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 } };
result = { borderRadius: require("result").radii.xs, overflow: "hidden" };
result.videoSpecial = result;
result.videoOverlay = { "Null": true, "Null": false, "Null": "" };
const obj1 = { <string:2974200120>: "p", <string:1668606818>: "Array", <string:1635173881>: "isArray", <string:2898154076>: "<string:868417537>", <string:979676309>: "<string:967639041>", <string:1654696534>: "<string:437911554>", <string:2355277539>: "<string:911278081>", <string:2927059630>: "<string:275333378>", <string:4182879841>: "<string:3528523777>", borderRadius: require("result").radii.round, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH };
result.playButton = obj1;
result.playIcon = { aze: 24, azj: 24 };
result.empty = { align: "oneTimeCode", label: "stretch", subLabel: 1, icon: "center" };
result = result.createLegacyClassComponentStyles(result);
const obj2 = { bulletPoint: { backgroundColor: require("result").colors.BACKGROUND_MOD_STRONG }, listItem: {} };
result = { frameCount: 16, startTime: 16, top: null, bottom: 20, color: require("result").colors.TEXT_DEFAULT };
obj2.listText = result;
obj2.listItemContent = { clientThemeSettings: true, useItemDragState: true };
let closure_16 = result.createLegacyClassComponentStyles(obj2);
const tmp4 = (PureComponent) => {
  class ListItem {
    constructor() {
      tmp = closure_3(this, ListItem);
      return closure_18(this, ListItem, arguments);
    }
  }
  const arg1 = ListItem;
  callback3(ListItem, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const children = this.props.children;
        const tmp = callback3(this.context);
        let obj = { style: tmp.listItem };
        obj = { style: tmp.bulletPoint };
        const items = [callback2(closure_9, obj), ];
        obj = { style: tmp.listText };
        let childrenResult = children;
        if ("function" === typeof children) {
          const obj1 = { style: tmp.listText };
          childrenResult = children(obj1);
        }
        obj.children = childrenResult;
        items[1] = callback2(closure_9, obj);
        obj.children = items;
        return closure_13(closure_9, obj);
      }
    }
  ];
  return callback(ListItem, items);
}(importAllResult.PureComponent);
tmp4.contextType = require("result").ThemeContext;
const tmp5 = (PureComponent) => {
  class ChangeLog {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_3(this, ChangeLog);
      items1 = [...items];
      tmp2 = closure_18(this, ChangeLog, items1);
      ChangeLog = tmp2;
      tmp2.mountedAt = 0;
      tmp2.ref = closure_8.createRef();
      tmp2.maxScrolledPercentage = 0;
      tmp2.state = { ytVideoReady: false };
      tmp2.handleScroll = (contentOffset) => {
        tmp2.maxScrolledPercentage = Math.min(Math.max(tmp2.maxScrolledPercentage, (contentOffset.contentOffset.y + contentOffset.layoutMeasurement.height) / contentOffset.contentSize.height), 1);
      };
      tmp2.playVideo = () => {
        let height;
        let image;
        let video;
        let width;
        const props = tmp2.props;
        ({ video, image } = props.changeLog);
        ({ width, height } = props);
        if (null == video) {
          if (null == image) {
            return null;
          }
        }
        if (null != video) {
          let obj = { videoURI: video };
        } else {
          obj = { uri: image };
        }
        tmp2.track(constants.CHANGE_LOG_VIDEO_INTERACTED);
        const current = tmp2.ref.current;
        if (null != current) {
          obj = {};
          const obj1 = {};
          const merged = Object.assign(obj);
          obj1["width"] = width;
          obj1["height"] = height;
          const items = [obj1];
          obj.initialSources = items;
          obj.originViewOrOriginLayout = current;
          tmp2(closure_2[13]).openMediaModal(obj);
          const obj3 = tmp2(closure_2[13]);
        }
      };
      return tmp2;
    }
  }
  const arg1 = ChangeLog;
  callback3(ChangeLog, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.mountedAt = Date.now();
      this.track(constants.CHANGE_LOG_OPENED);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      this.track(constants.CHANGE_LOG_CLOSED);
    }
  };
  items[1] = obj;
  obj = {
    key: "track",
    value(arg0) {
      let obj = arg1;
      const self = this;
      if (arg1 === undefined) {
        obj = {};
      }
      const changeLog = self.props.changeLog;
      if (null != changeLog) {
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.change_log_id = "" + changeLog.date + ":" + changeLog.revision;
        const merged = Object.assign(obj);
        let tmp4 = obj;
        if (arg0 === constants.CHANGE_LOG_CLOSED) {
          obj = {};
          const _Math = Math;
          const _Date = Date;
          obj.seconds_open = Math.round((Date.now() - self.mountedAt) / 1000);
          const _parseInt = parseInt;
          const maxScrolledPercentage = self.maxScrolledPercentage;
          obj.max_scrolled_percentage = 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10);
          const merged1 = Object.assign(obj);
          tmp4 = obj;
        }
        callback(closure_2[14]).track(arg0, tmp4);
        const obj3 = callback(closure_2[14]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderVideo",
    value() {
      let changeLog;
      let height;
      let image;
      let onClose;
      let video;
      let youtube_video_id;
      const self = this;
      const ChangeLog = this;
      const tmp = callback4(this.context);
      const props = this.props;
      ({ changeLog, height, onClose } = props);
      ({ video, image, youtube_video_id } = changeLog);
      if (null != video) {
        let obj = { videoURI: video };
      } else if (null == image) {
        let tmp4Result = null;
        if (null != youtube_video_id) {
          obj = { style: tmp.videoWrapper, onAccessibilityEscape: onClose };
          const obj1 = {
            height,
            play: false,
            videoId: youtube_video_id,
            onReady() {
                  return self.setState({ ytVideoReady: true });
                },
            useLocalHTML: true
          };
          const items = [callback3(callback(closure_2[15]), obj1), ];
          let tmp9 = null;
          if (!tmp2) {
            const obj2 = { style: tmp.videoOverlay };
            const obj3 = {};
            const _HermesInternal = HermesInternal;
            obj3.uri = "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg";
            obj2.source = obj3;
            tmp9 = callback3(callback(closure_2[16]), obj2);
            const tmp13 = callback(closure_2[16]);
          }
          items[1] = tmp9;
          obj.children = items;
          tmp4Result = closure_13(closure_9, obj);
          const tmp4 = closure_13;
          const tmp5 = closure_9;
        }
        return tmp4Result;
      } else {
        obj = { uri: image };
      }
      const obj4 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose };
      const obj5 = { ref: self.ref, style: tmp.videoSpecial };
      const obj6 = { style: tmp.video, src: obj, width: props.width, height, paused: true, canOpenFullscreen: true, unmutedOnFullScreen: true };
      const intl = ChangeLog(closure_2[18]).intl;
      obj6.accessibilityLabel = intl.string(ChangeLog(closure_2[18]).t.zHeo07);
      obj6.onPress = function onPress() {
        self.track(constants.CHANGE_LOG_VIDEO_INTERACTED);
      };
      const items1 = [callback3(callback(closure_2[17]), obj6), ];
      let tmp20 = null;
      if (null != video) {
        const obj7 = { style: tmp.videoOverlay, onPress: self.playVideo };
        const obj8 = { source: callback(closure_2[21]), onPress: self.playVideo, style: tmp.playButton, iconSize: ChangeLog(closure_2[22]).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
        obj7.children = callback3(callback(closure_2[20]), obj8);
        tmp20 = callback3(ChangeLog(closure_2[19]).PressableOpacity, obj7);
        const tmp26 = callback(closure_2[20]);
      }
      items1[1] = tmp20;
      obj5.children = items1;
      obj4.children = closure_13(closure_9, obj5);
      return callback3(closure_9, obj4);
    }
  };
  items[4] = {
    key: "render",
    value() {
      const obj = {};
      const merged = Object.assign(this.props);
      obj["video"] = this.renderVideo();
      obj["onScroll"] = this.handleScroll;
      return callback3(callback(closure_2[23]), obj);
    }
  };
  return callback(ChangeLog, items);
}(importAllResult.PureComponent);
tmp5.contextType = require("result").ThemeContext;
result = result.fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default function ChangelogModal() {
  const screens = importAllResult.useMemo(() => {
    let obj = {};
    obj = {
      name: "CHANGELOG",
      headerLeft: callback(closure_2[27]).getHeaderCloseButton(closure_21),
      render() {
        return callback(closure_20, { onClose: closure_21 });
      }
    };
    obj.CHANGELOG = obj;
    return obj;
  }, []);
  return callback4(arg1(dependencyMap[32]).Navigator, { screens, initialRouteName: "CHANGELOG" });
};
export const ListItem = tmp4;
export { ChangeLogScreen };
