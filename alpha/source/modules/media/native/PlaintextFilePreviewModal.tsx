// Module ID: 11615
// Function ID: 11616
// Name: PlaintextFilePreviewModal
// Dependencies: [32, 19, 17, 1083, 21, 5014, 575, 6744, 11614, 8711, 11616, 5709, 11618, 5624, 1113, 6953, 7303, 6998, 9874, 7558, 9756, 11481, 2]
// Exports: default

// Module 11615 (PlaintextFilePreviewModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import openPlaintextFilePreview from "openPlaintextFilePreview" /* 11614 */;
import useDownloadedFile from "useDownloadedFile" /* 11618 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let url;
  let wordWrap;
  ({ url, wordWrap } = arg0);
  const tmp = closure_9();
  const obj = useDownloadedFile;
  const downloadedFile = obj.useDownloadedFile(url, undefined);
  const fileContents = downloadedFile.fileContents;
  if (downloadedFile.hadError) {
    ({ variant: "text-md/normal", color: "text-muted", children: intl.string(intl3.t.fEptJP) });
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    return <metroRequire style={tmp.errorContainer}>{null}</metroRequire>;
  } else if (null == fileContents) {
    return <metroRequire style={tmp.loadingContainer}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</metroRequire>;
  } else {
    let obj8;
    const tmp2Result = useDownloadedFile;
    const bytesLeftNotice = tmp2Result.getBytesLeftNotice(tmp5);
    let combined = fileContents;
    if ("" !== bytesLeftNotice) {
      const _HermesInternal = HermesInternal;
      combined = "" + fileContents + "\n" + bytesLeftNotice;
    }
    const tmp10 = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp.code, selectable: true, children: combined });
    if (wordWrap) {
      const obj7 = { style: null, contentContainerStyle: null, children: tmp10 };
      ({ scroller: obj5.style, scrollerContent: obj5.contentContainerStyle } = tmp);
      obj8 = obj7;
    } else {
      obj8 = { style: tmp.scroller, children: null };
    }
    return <hasOwnProperty {...obj8} />;
  }
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
const constants = { PREVIEW: "PREVIEW" };
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
  url = url.url;
  const fileName = url.fileName;
  let first;
  react = undefined;
  const tmp = closure_9();
  dependencyMap = tmp;
  const tmp2 = first(react.useState(true), 2);
  first = tmp2[0];
  react = tmp2[1];
  let items = [url, first];
  const memo = react.useMemo(() => {
    let CheckmarkSmallIcon;
    let intl;
    let intl2;
    let obj = {
      label: intl.string(intl3.t.AMKNT1),
      trailingIndicator: CheckmarkSmallIcon,
      action() {
        return closure_1_4((arg0) => !arg0);
      }
    };
    intl = intl3.intl;
    CheckmarkSmallIcon = undefined;
    if (first) {
      CheckmarkSmallIcon = tmp(7303).CheckmarkSmallIcon;
    }
    const items = [obj, ];
    let obj2 = {
      label: intl2.string(tmp(1113).t["1WjMbC"]),
      action() {
        const obj = url(closure_2[9]);
        if (null == obj.isSuspiciousDownload(closure_1_0)) {
          const obj3 = fileName(closure_2[11]);
          obj3.openURL(closure_1_0);
        } else {
          const obj2 = fileName(closure_2[10]);
          obj2.show(closure_1_0);
        }
      }
    };
    intl2 = tmp(1113).intl;
    items[1] = obj2;
    return items;
  }, items);
  const items1 = [fileName, memo, tmp.container, url, first];
  const memo1 = react.useMemo(() => {
    let container;
    let items;
    let obj3;
    let wordWrap;
    let obj = {};
    const obj2 = {
      title: fileName,
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      headerRight() {
        return jsx(url(container[18]).ContextMenu, {
          items,
          children(ref) {
            let intl;
            ref = ref.ref;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { IconComponent: url(container[20]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(container[14]).t.PdRCRg), ref };
            const HeaderActionButton = url(container[19]).HeaderActionButton;
            intl = url(container[14]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_7(HeaderActionButton, obj);
          }
        });
      },
      render() {
        return <closure_2_6 style={container.container}>{null}</closure_2_6>;
      }
    };
    const PREVIEW = constants.PREVIEW;
    obj[PREVIEW] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items1);
  return jsx(url(11481).Modal, { screens: memo1, initialRouteName: constants.PREVIEW });
};
