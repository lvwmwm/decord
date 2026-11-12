// Module ID: 12413
// Function ID: 12414
// Name: PlaintextFilePreviewModal
// Dependencies: [32, 19, 17, 1083, 21, 5243, 575, 6785, 12412, 12414, 12416, 5949, 12418, 5866, 1113, 7354, 12419, 12427, 7831, 7427, 9081, 7363, 7356, 12428, 2]
// Exports: default

// Module 12413 (PlaintextFilePreviewModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 7831 */;
import openPlaintextFilePreview from "openPlaintextFilePreview" /* 12412 */;
import useDownloadedFile from "useDownloadedFile" /* 12418 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function closeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(openPlaintextFilePreview.PLAINTEXT_FILE_PREVIEW_MODAL_KEY);
}
function PlaintextFilePreviewContent(arg0) {
  let intl;
  let renderMarkdown;
  let url;
  let wordWrap;
  ({ url, wordWrap, renderMarkdown } = arg0);
  const tmp = closure_9();
  const obj = useDownloadedFile;
  const downloadedFile = obj.useDownloadedFile(url, undefined);
  const fileContents = downloadedFile.fileContents;
  if (downloadedFile.hadError) {
    ({ variant: "body-md/normal", color: "text-muted", children: intl.string(intl4.t.fEptJP) });
    const Text = tmp2(5866).Text;
    intl = tmp2(1113).intl;
    return <metroRequire style={tmp.errorContainer}>{null}</metroRequire>;
  } else if (null == fileContents) {
    return <metroRequire style={tmp.loadingContainer}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</metroRequire>;
  } else {
    const tmp2Result = useDownloadedFile;
    const bytesLeftNotice = tmp2Result.getBytesLeftNotice(tmp5);
    if (renderMarkdown) {
      ({ scroller: obj6.style, scrollerContent: obj6.contentContainerStyle } = tmp);
      return <hasOwnProperty style={null} contentContainerStyle={null}>{null}</hasOwnProperty>;
    } else {
      let obj11;
      let combined = fileContents;
      if ("" !== bytesLeftNotice) {
        const _HermesInternal = HermesInternal;
        combined = "" + fileContents + "\n" + bytesLeftNotice;
      }
      const tmp10 = jsx(Text_Text.Text, { variant: "body-sm/normal", color: "text-default", style: tmp.code, selectable: true, children: combined });
      if (wordWrap) {
        const obj10 = { style: null, contentContainerStyle: null, children: tmp10 };
        ({ scroller: obj5.style, scrollerContent: obj5.contentContainerStyle } = tmp);
        obj11 = obj10;
      } else {
        obj11 = { style: tmp.scroller, children: null };
      }
      return <hasOwnProperty {...obj11} />;
    }
  }
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
let jsx = Fragment.jsx;
let closure_8 = { PREVIEW: "PREVIEW" };
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, scroller: { flex: 1 }, scrollerContent: obj3, code: { fontFamily: Fonts.CODE_NORMAL }, errorContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media/native/PlaintextFilePreviewModal.tsx");

export default function PlaintextFilePreviewModal(url) {
  let closure_2;
  let closure_4;
  let closure_7;
  url = url.url;
  const str = url.fileName;
  let first;
  react = undefined;
  const tmp = closure_9();
  dependencyMap = tmp;
  let obj = react;
  let tmp2 = first(react.useState(true), 2);
  first = tmp2[0];
  react = tmp2[1];
  const MARKDOWN_LANGUAGES = url(12427).MARKDOWN_LANGUAGES;
  const has = MARKDOWN_LANGUAGES.has;
  const parts = str.split(".");
  const hasItem = has(parts.slice(-1)[0]);
  const tmp7 = first(react.useState(true), 2);
  let closure_6 = tmp7[1];
  jsx = tmp8;
  let items = [hasItem, hasItem && tmp7[0], url, first];
  const memo = obj.useMemo(() => {
    let CheckmarkSmallIcon;
    let CheckmarkSmallIcon1;
    let intl;
    let intl2;
    let intl3;
    let items1;
    let items3;
    const tmp2 = hasItem;
    if (tmp2) {
      let obj = {
        label: intl.string(intl4.t.zstmkn),
        trailingIndicator: CheckmarkSmallIcon,
        action() {
            return closure_1_6((arg0) => !arg0);
          }
      };
      intl = intl4.intl;
      CheckmarkSmallIcon = undefined;
      if (closure_7) {
        CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      }
      const items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...items1];
    const tmp12 = closure_7;
    if (tmp12) {
      items3 = [];
    } else {
      let obj2 = {
        label: intl2.string(intl4.t.AMKNT1),
        trailingIndicator: CheckmarkSmallIcon1,
        action() {
            return closure_1_4((arg0) => !arg0);
          }
      };
      intl2 = intl4.intl;
      CheckmarkSmallIcon1 = undefined;
      if (first) {
        CheckmarkSmallIcon1 = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      }
      items3 = [obj2];
    }
    let obj3 = {
      label: intl3.string(intl4.t["1WjMbC"]),
      action() {
        const obj = url(closure_2[9]);
        if (null == obj.isSuspiciousDownload(closure_1_0)) {
          const obj3 = str(closure_2[11]);
          obj3.openURL(closure_1_0);
        } else {
          const obj2 = str(closure_2[10]);
          obj2.show(closure_1_0);
        }
      }
    };
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, items3, tmp11);
    intl3 = intl4.intl;
    items2[arraySpreadResult] = obj3;
    return items2;
  }, items);
  let items1 = [str, memo, hasItem && tmp7[0], tmp.container, url, first];
  const memo1 = obj.useMemo(() => {
    let container;
    let items;
    let obj3;
    let renderMarkdown;
    let wordWrap;
    let obj = {};
    let obj2 = {
      title: str,
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      headerRight() {
        let obj = {
          items,
          children(ref) {
            let intl;
            ref = ref.ref;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { IconComponent: url(container[22]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(container[14]).t.PdRCRg), ref };
            const HeaderActionButton = url(container[21]).HeaderActionButton;
            intl = url(container[14]).intl;
            const merged1 = Object.assign(merged);
            return renderMarkdown(HeaderActionButton, obj);
          }
        };
        return renderMarkdown(url(container[20]).ContextMenu, obj);
      },
      render() {
        let obj2;
        const obj = { style: container.container, children: renderMarkdown(PlaintextFilePreviewContent, obj2) };
        obj2 = { url, wordWrap, renderMarkdown };
        return renderMarkdown(closure_6, obj);
      }
    };
    const PREVIEW = memo.PREVIEW;
    obj[PREVIEW] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items1);
  return jsx(url(12428).Modal, { screens: memo1, initialRouteName: memo.PREVIEW });
};
