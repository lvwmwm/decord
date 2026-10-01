// Module ID: 15095
// Function ID: 15096
// Name: ChangeLogModal
// Dependencies: [19, 17, 1074, 2098, 21, 4836, 576, 4540, 1241, 7707, 15096, 5899, 7755, 1115, 5435, 9203, 9859, 1177, 7537, 1479, 7538, 1486, 5936, 4421, 7539, 4832, 5039, 6421, 2]
// Exports: default

// Module 15095 (ChangeLogModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import native from "native" /* 4540 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5936 */;
import Navigator from "Navigator" /* 6421 */;
import ChangeLogStandardTemplateDefault from "ChangeLogStandardTemplate" /* 7537 */;
import openMediaModal2 from "openMediaModal" /* 7707 */;
import common_VideoDefault from "common/Video" /* 7755 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import AssetRegistryDefault from "AssetRegistry" /* 9859 */;
import _modDef15096 from "module_15096" /* 15096 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj4;
let size;
let size1;
class ChangeLogScreen {
  constructor(onClose) {
    let Text2;
    let intl2;
    let obj4;
    let tmp16Result;
    let fn = onClose.onClose;
    let changelog;
    navigation = undefined;
    let tmp = changelog;
    let tmp2 = navigation;
    let obj = changelog(navigation[5]);
    const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_10);
    let obj2 = changelog(navigation[20]);
    const currentChangelog = obj2.useCurrentChangelog();
    changelog = currentChangelog.changelog;
    const loaded = currentChangelog.loaded;
    const clientTooOld = currentChangelog.clientTooOld;
    size = loaded(navigation[19])();
    let diff = size.width - 36;
    const result = diff * c9;
    const result1 = 0.5 * size.height;
    const bound = Math.min(result, result1);
    const tmp6 = c9;
    if (result1 < result) {
      diff = result1 / tmp6;
    }
    const tmpResult = tmp(tmp2[21]);
    navigation = tmpResult.useNavigation();
    if (null == fn) {
      fn = function o() {
        return navigation.goBack();
      };
    }
    const items = [changelog, navigation];
    const effect = react.useEffect(() => {
      let date;
      if (null != changelog) {
        let tmp = navigation;
        let obj = {
          headerTitle() {
              let intl;
              const obj = { title: intl.string(changelog(navigation[13]).t.LRmNAl), subtitle: null };
              const NavigatorHeader = changelog(navigation[22]).NavigatorHeader;
              intl = changelog(navigation[13]).intl;
              const intl2 = changelog(navigation[13]).intl;
              const formatToPlainString = intl2.formatToPlainString;
              const tmp = closure_2_7;
              const tmp2 = navigation;
              if (null != date.date) {
                let toDateResult;
                if ("" !== date.date) {
                  const obj2 = loaded(tmp2[23])(date.date);
                  toDateResult = obj2.toDate();
                }
                const obj3 = { date: toDateResult };
                obj.subtitle = formatToPlainString(tmp3, obj3);
                return tmp(NavigatorHeader, obj);
              }
              toDateResult = new Date();
            }
        };
        navigation.setOptions(obj);
      }
    }, items);
    const items1 = [loaded, changelog];
    const effect1 = react.useEffect(() => {
      const tmp = loaded;
      if (tmp) {
        if (null != changelog) {
          return () => {
            const obj = loaded(navigation[24]);
            return obj.markChangelogAsSeen(changelog.id, changelog.date);
          };
        }
      }
    }, items1);
    if (clientTooOld) {
      let obj3 = { style: legacyClassComponentStyles.empty, children: closure_7(Text2, obj4) };
      obj4 = { variant: "heading-lg/medium", children: intl2.string(tmp(tmp2[13]).t.V9ospk) };
      Text2 = tmp(tmp2[25]).Text;
      intl2 = tmp(tmp2[13]).intl;
      tmp16Result = closure_7(View, obj3);
    } else if (null == changelog) {
      let tmp18;
      const obj5 = { style: legacyClassComponentStyles.empty, children: null };
      const Text = tmp(tmp2[25]).Text;
      const obj6 = { variant: "text-md/semibold", children: null };
      let intl = tmp(tmp2[13]).intl;
      const string = intl.string;
      const t = tmp(tmp2[13]).t;
      const tmp17 = View;
      if (loaded) {
        obj6.children = string(t.O1iRT8);
        obj5.children = closure_7(Text, obj6);
        tmp18 = obj5;
      } else {
        obj6.children = string(t.ZTNur7);
        obj5.children = closure_7(Text, obj6);
        tmp18 = obj5;
      }
      tmp16Result = tmp16(tmp17, tmp18);
    } else {
      const size1 = { onClose: fn, height: bound, width: diff, changeLog: changelog };
      tmp16Result = closure_7(ChangeLog, size1);
    }
    return tmp16Result;
  }
}
function hideChangeLog() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(CHANGELOG_MODAL_KEY);
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.5625;
let createStyles = createStyles_mod;
let obj = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 }, videoSpecial: obj2, videoOverlay: { position: "absolute", width: "100%", height: "100%" }, playButton: size, playIcon: { width: 21, height: 21 }, empty: { width: "100%", height: 240, alignItems: "center", paddingTop: 48 } };
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
size = { position: "absolute", top: "50%", left: "50%", marginLeft: -28, marginTop: -28, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 56, height: 56 };
const authStore = createLegacyClassComponentStyles(obj);
createStyles = createStyles_mod;
let obj3 = { bulletPoint: size1, listItem: { flexDirection: "row", marginLeft: 4, marginBottom: 8 }, listText: obj4, listItemContent: { flexDirection: "column", flex: 1 } };
size1 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const createLegacyClassComponentStyles2 = createStyles.createLegacyClassComponentStyles;
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
const unpackModuleId = createLegacyClassComponentStyles2(obj3);
const PureComponent = react.PureComponent;
class ListItem extends PureComponent {
  render() {
    let childrenResult;
    let items;
    const children = this.props.children;
    const tmp = closure_11(this.context);
    const obj = { style: tmp.listItem, children: items };
    items = [, ];
    const obj2 = { style: tmp.bulletPoint };
    items[0] = metroImportDefault(View, obj2);
    const obj3 = { style: tmp.listText, children: childrenResult };
    childrenResult = children;
    const tmp2 = metroImportAll;
    const tmp4 = metroImportDefault;
    if (typeof children === "function") {
      const obj4 = { style: tmp.listText };
      childrenResult = children(obj4);
    }
    items[1] = tmp4(View, obj3);
    return tmp2(View, obj);
  }
}
const prototype = ListItem.prototype;
ListItem.contextType = native.ThemeContext;
const PureComponent2 = react.PureComponent;
class ChangeLog extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.mountedAt = 0;
    applyArgumentsResult.ref = react.createRef();
    applyArgumentsResult.maxScrolledPercentage = 0;
    applyArgumentsResult.state = { ytVideoReady: false };
    applyArgumentsResult.handleScroll = function handleScroll(contentOffset) {
      require.maxScrolledPercentage = Math.min(Math.max(require.maxScrolledPercentage, (contentOffset.contentOffset.y + contentOffset.layoutMeasurement.height) / contentOffset.contentSize.height), 1);
    };
    applyArgumentsResult.playVideo = function playVideo() {
      let height;
      let image;
      let items;
      let obj3;
      let video;
      let width;
      const props = require.props;
      ({ video, image } = props.changeLog);
      ({ width, height } = props);
      if (null == video) {
        if (null == image) {
          return null;
        }
      }
      if (null != video) {
        obj3 = { videoURI: video };
        const obj2 = { videoURI: video };
      } else {
        obj3 = { uri: image };
      }
      require.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      const current = obj.ref.current;
      if (null != current) {
        const obj4 = { initialSources: items, disableDownload: true, shareable: false, analyticsSource: "Change Log", originViewOrOriginLayout: current };
        const obj5 = { width, height };
        const openMediaModal = openMediaModal2.openMediaModal;
        openMediaModal2;
        const merged = Object.assign(obj3);
        items = [obj5];
        openMediaModal(obj4);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.mountedAt = Date.now();
    this.track(AnalyticEvents.CHANGE_LOG_OPENED);
  }
  componentWillUnmount() {
    this.track(AnalyticEvents.CHANGE_LOG_CLOSED);
  }
  track(arg0) {
    let maxScrolledPercentage;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const self = this;
    const changeLog = this.props.changeLog;
    if (null != changeLog) {
      const obj3 = { change_log_id: "" + changeLog.date + ":" + changeLog.revision };
      const _HermesInternal = HermesInternal;
      const merged = Object.assign(obj);
      let tmp10 = obj3;
      if (arg0 === AnalyticEvents.CHANGE_LOG_CLOSED) {
        const _Math = Math;
        const _Date = Date;
        const _parseInt = parseInt;
        const obj4 = { seconds_open: Math.round((Date.now() - self.mountedAt) / 1000), max_scrolled_percentage: 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10) };
        maxScrolledPercentage = self.maxScrolledPercentage;
        const merged1 = Object.assign(obj3);
        tmp10 = obj4;
      }
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(arg0, tmp10);
    }
  }
  renderVideo() {
    let changeLog;
    let height;
    let image;
    let intl;
    let items;
    let items1;
    let obj;
    let obj10;
    let obj6;
    let obj8;
    let onClose;
    let tmp14;
    let tmp15Result;
    let video;
    let youtube_video_id;
    const self = this;
    const tmp = closure_10(this.context);
    const props = this.props;
    ({ changeLog, height, onClose } = props);
    ({ video, image, youtube_video_id } = changeLog);
    const width = props.width;
    if (null != video) {
      obj = { videoURI: video };
      const obj2 = { videoURI: video };
    } else if (null == image) {
      let tmp4Result = null;
      if (null != youtube_video_id) {
        const obj3 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: items };
        const obj4 = {
          height,
          play: false,
          videoId: youtube_video_id,
          onReady() {
                return self.setState({ ytVideoReady: true });
              },
          useLocalHTML: true
        };
        items = [closure_7(_modDef15096, obj4), ];
        let tmp6Result = null;
        const tmp4 = closure_8;
        const tmp5 = View;
        const tmp6 = closure_7;
        const tmp7 = importDefault;
        if (!tmp2) {
          const obj5 = { style: tmp.videoOverlay, source: obj6 };
          const _HermesInternal = HermesInternal;
          obj6 = { uri: "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg" };
          const tmp7Result = tmp7(5899);
          tmp6Result = tmp6(tmp7Result, obj5);
        }
        items[1] = tmp6Result;
        tmp4Result = tmp4(tmp5, obj3);
      }
      return tmp4Result;
    } else {
      obj = { uri: image };
    }
    const obj7 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: tmp14(View, obj8) };
    obj8 = { ref: self.ref, style: tmp.videoSpecial, children: items1 };
    size = {
      style: tmp.video,
      src: obj,
      width,
      height,
      paused: true,
      canOpenFullscreen: true,
      unmutedOnFullScreen: true,
      accessibilityLabel: intl.string(self(1115).t.zHeo07),
      onPress() {
        self.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      }
    };
    const tmp17 = common_VideoDefault;
    intl = self(1115).intl;
    items1 = [closure_7(tmp17, size), ];
    let tmp12Result = null;
    tmp14 = closure_8;
    if (null != video) {
      const obj9 = { accessibilityLabel: "Play Video", accessibilityRole: "button", style: tmp.videoOverlay, onPress: self.playVideo, children: closure_7(tmp15Result, obj10) };
      const PressableOpacity = tmp18(5435).PressableOpacity;
      obj10 = { accessibilityLabel: "Play Video", accessibilityRole: "button", source: AssetRegistryDefault, onPress: self.playVideo, style: tmp.playButton, iconSize: self(1177).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
      tmp15Result = TouchableHitBoxDefault;
      tmp12Result = tmp12(PressableOpacity, obj9);
    }
    items1[1] = tmp12Result;
    return closure_7(View, obj7);
  }
  render() {
    const obj = { video: this.renderVideo(), onScroll: this.handleScroll };
    const tmp = ChangeLogStandardTemplateDefault;
    const merged = Object.assign(this.props);
    return metroImportDefault(tmp, obj);
  }
}
const prototype2 = ChangeLog.prototype;
ChangeLog.contextType = native.ThemeContext;
size = size_mod;
let result = size.fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default function ChangelogModal() {
  const screens = react.useMemo(() => {
    let obj2;
    let obj3;
    let onClose;
    let obj = { CHANGELOG: obj2 };
    obj2 = {
      name: "CHANGELOG",
      headerLeft: obj3.getHeaderCloseButton(hideChangeLog),
      render() {
        const obj = { onClose };
        return closure_1_7(closure_1_13, obj);
      }
    };
    obj3 = NavigatorHeader2;
    return obj;
  }, []);
  return metroImportDefault(Navigator.Navigator, { screens, initialRouteName: "CHANGELOG" });
};
export { ListItem };
export { ChangeLogScreen };
