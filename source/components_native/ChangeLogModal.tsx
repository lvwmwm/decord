// Module ID: 14425
// Function ID: 110239
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 653, 1905, 33, 4130, 689, 3842, 8318, 675, 14426, 5085, 8346, 1212, 4660, 8518, 9646, 1273, 7859, 1450, 7860, 1457, 5087, 3712, 7861, 4126, 4337, 5517, 2]
// Exports: default

// Module 14425 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import module_14426 from "module_14426";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import importAllResult from "module_4337";
import { View } from "HeaderBackImage";
import { AnalyticEvents } from "ME";
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
const require = arg1;
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
  return module_14426(arg0, constructResult);
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
    tmp = changelog;
    tmp2 = closure_2;
    obj = require("_createForOfIteratorHelperLoose");
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(jsx);
    obj2 = require("useChangelog");
    currentChangelog = obj2.useCurrentChangelog();
    changelog = currentChangelog.changelog;
    loaded = currentChangelog.loaded;
    size = require("useWindowDimensions")();
    diff = size.width - 36;
    result = diff * c14;
    result1 = 0.5 * size.height;
    obj = { height: Math.min(result, result1) };
    if (result > result1) {
      tmp8 = c14;
      diff = result1 / c14;
    }
    obj.width = diff;
    ({ width, height } = obj);
    tmpResult = require("Link");
    navigation = tmpResult.useNavigation();
    closure_2 = navigation;
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
        let obj = {
          headerTitle() {
              let obj = {};
              const intl = changelog(navigation[18]).intl;
              obj.title = intl.string(changelog(navigation[18]).t.LRmNAl);
              const intl2 = changelog(navigation[18]).intl;
              obj = {};
              if (null != outer1_0.date) {
                if ("" !== outer1_0.date) {
                  let toDateResult = loaded(navigation[28])(outer1_0.date).toDate();
                  const obj3 = loaded(navigation[28])(outer1_0.date);
                }
                obj.date = toDateResult;
                obj.subtitle = intl2.formatToPlainString(tmp2, obj);
                return outer2_12(changelog(navigation[27]).NavigatorHeader, obj);
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
          return () => loaded(navigation[29]).markChangelogAsSeen(outer1_0.id, outer1_0.date);
        }
      }
    }, items1);
    if (currentChangelog.clientTooOld) {
      tmp22 = jsx;
      tmp23 = View;
      obj1 = {};
      obj1.style = legacyClassComponentStyles.empty;
      tmp24 = jsx;
      tmp25 = changelog;
      tmp26 = closure_2;
      num3 = 30;
      obj2 = {};
      str2 = "heading-lg/medium";
      obj2.variant = "heading-lg/medium";
      num4 = 18;
      intl2 = require("getSystemLocale").intl;
      obj2.children = intl2.string(require("getSystemLocale").t.V9ospk);
      obj1.children = jsx(require("Text").Text, obj2);
      tmp14 = jsx(View, obj1);
    } else if (null == changelog) {
      obj3 = {};
      obj3.style = legacyClassComponentStyles.empty;
      tmp17 = jsx;
      tmp18 = changelog;
      tmp19 = closure_2;
      num = 30;
      tmp15 = jsx;
      tmp16 = View;
      Text = require("Text").Text;
      obj4 = {};
      str = "text-md/semibold";
      obj4.variant = "text-md/semibold";
      num2 = 18;
      intl = require("getSystemLocale").intl;
      string = intl.string;
      t = require("getSystemLocale").t;
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
      tmp13 = f110254;
      obj5 = {};
      obj5.onClose = fn;
      obj5.height = height;
      obj5.width = width;
      obj5.changeLog = changelog;
      tmp14 = jsx(f110254, obj5);
    }
    return tmp14;
  }
}
function hideChangeLog() {
  importDefault(4337).popWithKey(CHANGELOG_MODAL_KEY);
}
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let c14 = 0.5625;
_createForOfIteratorHelperLoose = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.videoSpecial = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.videoOverlay = { position: "absolute", width: "100%", height: "100%" };
let obj1 = { position: "absolute", top: "50%", left: "50%", marginLeft: -28, marginTop: -28, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, width: 56, height: 56 };
_createForOfIteratorHelperLoose.playButton = obj1;
_createForOfIteratorHelperLoose.playIcon = { width: 21, height: 21 };
_createForOfIteratorHelperLoose.empty = { width: "100%", height: 240, alignItems: "center", paddingTop: 48 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let obj2 = {};
let obj3 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
obj2.bulletPoint = obj3;
obj2.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
obj2.listText = _createForOfIteratorHelperLoose;
obj2.listItemContent = { flexDirection: "column", flex: 1 };
let closure_16 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj2);
let tmp4 = ((PureComponent) => {
  class ListItem {
    constructor() {
      tmp = outer1_3(this, ListItem);
      return outer1_18(this, ListItem, arguments);
    }
  }
  callback3(ListItem, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        const children = this.props.children;
        const tmp = outer1_16(this.context);
        let obj = { style: tmp.listItem };
        obj = { style: tmp.bulletPoint };
        const items = [outer1_12(outer1_9, obj), ];
        obj = { style: tmp.listText };
        let childrenResult = children;
        if ("function" === typeof children) {
          const obj1 = { style: tmp.listText };
          childrenResult = children(obj1);
        }
        obj.children = childrenResult;
        items[1] = outer1_12(outer1_9, obj);
        obj.children = items;
        return outer1_13(outer1_9, obj);
      }
    }
  ];
  return callback(ListItem, items);
})(importAllResult.PureComponent);
tmp4.contextType = require("ManaContext").ThemeContext;
let tmp5 = ((PureComponent) => {
  class ChangeLog {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_3(this, ChangeLog);
      items1 = [...items];
      tmp2 = outer1_18(this, ChangeLog, items1);
      ChangeLog = tmp2;
      tmp2.mountedAt = 0;
      tmp2.ref = outer1_8.createRef();
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
        tmp2.track(outer2_10.CHANGE_LOG_VIDEO_INTERACTED);
        const current = tmp2.ref.current;
        if (null != current) {
          obj = { initialSources: null, disableDownload: true, shareable: false, analyticsSource: "Change Log" };
          const obj1 = {};
          const merged = Object.assign(obj);
          obj1["width"] = width;
          obj1["height"] = height;
          const items = [obj1];
          obj.initialSources = items;
          obj.originViewOrOriginLayout = current;
          ChangeLog(outer2_2[13]).openMediaModal(obj);
          const obj3 = ChangeLog(outer2_2[13]);
        }
      };
      return tmp2;
    }
  }
  callback3(ChangeLog, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.mountedAt = Date.now();
      this.track(outer1_10.CHANGE_LOG_OPENED);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      this.track(outer1_10.CHANGE_LOG_CLOSED);
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
        if (arg0 === outer1_10.CHANGE_LOG_CLOSED) {
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
        outer1_1(outer1_2[14]).track(arg0, tmp4);
        const obj3 = outer1_1(outer1_2[14]);
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
      let self = this;
      self = this;
      const tmp = outer1_15(this.context);
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
          const items = [outer1_12(outer1_1(outer1_2[15]), obj1), ];
          let tmp9 = null;
          if (!tmp2) {
            const obj2 = { style: tmp.videoOverlay };
            const obj3 = {};
            const _HermesInternal = HermesInternal;
            obj3.uri = "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg";
            obj2.source = obj3;
            tmp9 = outer1_12(outer1_1(outer1_2[16]), obj2);
            const tmp13 = outer1_1(outer1_2[16]);
          }
          items[1] = tmp9;
          obj.children = items;
          tmp4Result = outer1_13(outer1_9, obj);
          const tmp4 = outer1_13;
          const tmp5 = outer1_9;
        }
        return tmp4Result;
      } else {
        obj = { uri: image };
      }
      const obj4 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose };
      const obj5 = { ref: self.ref, style: tmp.videoSpecial };
      const obj6 = { style: tmp.video, src: obj, width: props.width, height, paused: true, canOpenFullscreen: true, unmutedOnFullScreen: true };
      const intl = ChangeLog(outer1_2[18]).intl;
      obj6.accessibilityLabel = intl.string(ChangeLog(outer1_2[18]).t.zHeo07);
      obj6.onPress = function onPress() {
        self.track(outer2_10.CHANGE_LOG_VIDEO_INTERACTED);
      };
      const items1 = [outer1_12(outer1_1(outer1_2[17]), obj6), ];
      let tmp20 = null;
      if (null != video) {
        const obj7 = { accessibilityLabel: "Play Video", accessibilityRole: "button", style: tmp.videoOverlay, onPress: self.playVideo };
        const obj8 = { accessibilityLabel: "Play Video", accessibilityRole: "button", source: outer1_1(outer1_2[21]), onPress: self.playVideo, style: tmp.playButton, iconSize: ChangeLog(outer1_2[22]).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
        obj7.children = outer1_12(outer1_1(outer1_2[20]), obj8);
        tmp20 = outer1_12(ChangeLog(outer1_2[19]).PressableOpacity, obj7);
        const tmp26 = outer1_1(outer1_2[20]);
      }
      items1[1] = tmp20;
      obj5.children = items1;
      obj4.children = outer1_13(outer1_9, obj5);
      return outer1_12(outer1_9, obj4);
    }
  };
  items[4] = {
    key: "render",
    value() {
      const obj = {};
      const merged = Object.assign(this.props);
      obj["video"] = this.renderVideo();
      obj["onScroll"] = this.handleScroll;
      return outer1_12(outer1_1(outer1_2[23]), obj);
    }
  };
  return callback(ChangeLog, items);
})(importAllResult.PureComponent);
let closure_17 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default function ChangelogModal() {
  const screens = importAllResult.useMemo(() => {
    let obj = {};
    obj = {
      name: "CHANGELOG",
      headerLeft: outer1_0(outer1_2[27]).getHeaderCloseButton(outer1_21),
      render() {
        return outer2_12(outer2_20, { onClose: outer2_21 });
      }
    };
    obj.CHANGELOG = obj;
    return obj;
  }, []);
  return callback4(require(5517) /* NavigationStack */.Navigator, { screens, initialRouteName: "CHANGELOG" });
};
export const ListItem = tmp4;
export { ChangeLogScreen };
