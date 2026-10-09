// Module ID: 10706
// Function ID: 10707
// Name: PlaintextFilePreviewModal
// Dependencies: [109, 32, 19, 17, 1096, 21, 5091, 587, 5941, 10705, 8248, 10707, 4765, 558, 576, 10709, 5087, 1126, 6160, 6819, 6205, 9335, 7082, 9214, 10568, 2]

// Module 10706 (PlaintextFilePreviewModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4765 */;
import Text_Text from "Text/Text" /* 5087 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6160 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import SuspiciousDownloadUtils from "SuspiciousDownloadUtils" /* 8248 */;
import ContextMenu from "ContextMenu" /* 9335 */;
import openPlaintextFilePreview from "openPlaintextFilePreview" /* 10705 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 10707 */;
import useDownloadedFile from "useDownloadedFile" /* 10709 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, items;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function closeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(openPlaintextFilePreview.PLAINTEXT_FILE_PREVIEW_MODAL_KEY);
}
let closure_3 = ["ref"];
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
const constants = { PREVIEW: "PREVIEW" };
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, scroller: { flex: 1 }, scrollerContent: obj3, code: { fontFamily: Fonts.CODE_NORMAL }, errorContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlaintextFilePreviewContent(arg0) {
  let bytesLeft;
  let fileContents;
  let url;
  let wordWrap;
  const obj = react2;
  const cResult = obj.c(21);
  ({ url, wordWrap } = arg0);
  const tmp4 = closure_11();
  const obj2 = useDownloadedFile;
  const downloadedFile = obj2.useDownloadedFile(url, undefined);
  ({ fileContents, bytesLeft } = downloadedFile);
  if (downloadedFile.hadError) {
    let first;
    let tmp38;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const Text = tmp(5087).Text;
      const intl = tmp(1126).intl;
      const tmp37 = <Text variant="text-md/normal" color="text-muted">{intl.string(intl3.t.fEptJP)}</Text>;
      cResult[0] = tmp37;
      first = tmp37;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp4.errorContainer) {
      const tmp41 = <metroImportAll style={tmp4.errorContainer}>{first}</metroImportAll>;
      cResult[1] = tmp4.errorContainer;
      cResult[2] = tmp41;
      tmp38 = tmp41;
    } else {
      tmp38 = cResult[2];
    }
    return tmp38;
  } else if (null == fileContents) {
    let tmp27;
    let tmp30;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp29 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      cResult[3] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[3];
    }
    if (cResult[4] !== tmp4.loadingContainer) {
      const tmp33 = <metroImportAll style={tmp4.loadingContainer}>{tmp27}</metroImportAll>;
      cResult[4] = tmp4.loadingContainer;
      cResult[5] = tmp33;
      tmp30 = tmp33;
    } else {
      tmp30 = cResult[5];
    }
    return tmp30;
  } else {
    let tmp7;
    if (cResult[6] !== bytesLeft) {
      const tmpResult = useDownloadedFile;
      const bytesLeftNotice = tmpResult.getBytesLeftNotice(bytesLeft);
      cResult[6] = bytesLeft;
      cResult[7] = bytesLeftNotice;
      tmp7 = bytesLeftNotice;
    } else {
      tmp7 = cResult[7];
    }
    let combined = fileContents;
    if ("" !== tmp7) {
      const _HermesInternal = HermesInternal;
      combined = "" + fileContents + "\n" + tmp7;
    }
    if (cResult[8] === tmp4.code) {
      let tmp11;
      let tmp18;
      if (cResult[9] === combined) {
        tmp11 = cResult[10];
      }
      if (wordWrap) {
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp4.scroller) {
            let tmp22;
            if (cResult[13] === tmp4.scrollerContent) {
              tmp22 = cResult[14];
            }
            tmp18 = tmp22;
          }
        }
        ({ scroller: obj7.style, scrollerContent: obj7.contentContainerStyle } = tmp4);
        const tmp25 = <metroImportDefault style={null} contentContainerStyle={null}>{tmp11}</metroImportDefault>;
        cResult[11] = tmp11;
        cResult[12] = tmp4.scroller;
        cResult[13] = tmp4.scrollerContent;
        cResult[14] = tmp25;
        tmp22 = tmp25;
      } else {
        if (cResult[15] === tmp11) {
          let tmp14;
          if (cResult[16] === tmp4.scrollerContent) {
            tmp14 = cResult[17];
          }
          if (cResult[18] === tmp4.scroller) {
            if (cResult[19] === tmp14) {
              tmp18 = cResult[20];
            }
          }
          const tmp21 = <metroImportDefault style={tmp4.scroller}>{tmp14}</metroImportDefault>;
          cResult[18] = tmp4.scroller;
          cResult[19] = tmp14;
          cResult[20] = tmp21;
          tmp18 = tmp21;
        }
        const tmp17 = <metroImportDefault horizontal contentContainerStyle={tmp4.scrollerContent}>{tmp11}</metroImportDefault>;
        cResult[15] = tmp11;
        cResult[16] = tmp4.scrollerContent;
        cResult[17] = tmp17;
        tmp14 = tmp17;
      }
      return tmp18;
    }
    const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp4.code, selectable: true, children: combined });
    cResult[8] = tmp4.code;
    cResult[9] = combined;
    cResult[10] = tmp13;
    tmp11 = tmp13;
  }
}) : (function PlaintextFilePreviewContent(arg0) {
  let intl;
  let url;
  let wordWrap;
  ({ url, wordWrap } = arg0);
  const tmp = closure_11();
  const obj = useDownloadedFile;
  const downloadedFile = obj.useDownloadedFile(url, undefined);
  const fileContents = downloadedFile.fileContents;
  if (downloadedFile.hadError) {
    ({ variant: "text-md/normal", color: "text-muted", children: intl.string(intl3.t.fEptJP) });
    const Text = tmp2(5087).Text;
    intl = tmp2(1126).intl;
    return <metroImportAll style={tmp.errorContainer}>{null}</metroImportAll>;
  } else if (null == fileContents) {
    return <metroImportAll style={tmp.loadingContainer}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</metroImportAll>;
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
    return <metroImportDefault {...obj8} />;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlaintextFilePreviewModal(url) {
  let container;
  let first1;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let wordWrap;
  let tmp = url;
  let obj = url(wordWrap[14]);
  const cResult = obj.c(23);
  url = url.url;
  const tmp4 = closure_11();
  importDefault = tmp4;
  [wordWrap, closure_3] = react.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[17]).intl;
    const stringResult = intl.string(tmp(wordWrap[17]).t.AMKNT1);
    cResult[0] = stringResult;
    first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  let CheckmarkSmallIcon;
  if (wordWrap) {
    CheckmarkSmallIcon = tmp(tmp2[19]).CheckmarkSmallIcon;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      return closure_3((arg0) => !arg0);
    };
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== CheckmarkSmallIcon) {
    let obj2 = { label: first1, trailingIndicator: CheckmarkSmallIcon, action: tmp10 };
    cResult[2] = CheckmarkSmallIcon;
    cResult[3] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[17]).intl;
    const stringResult1 = intl2.string(tmp(wordWrap[17]).t["1WjMbC"]);
    cResult[4] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== url) {
    let obj3 = {
      label: tmp12,
      action() {
          const obj = SuspiciousDownloadUtils;
          if (null == obj.isSuspiciousDownload(url)) {
            const obj3 = LinkingDefault;
            obj3.openURL(url);
          } else {
            const obj2 = SuspiciousDownloadModalActionCreatorsDefault;
            obj2.show(url);
          }
        }
    };
    cResult[5] = url;
    cResult[6] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === tmp11) {
    let tmp15;
    if (cResult[8] === tmp14) {
      tmp15 = cResult[9];
    }
    items = tmp15;
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult = tmp(wordWrap[20]);
      const headerCloseButton = tmpResult.getHeaderCloseButton(closeModal);
      cResult[10] = headerCloseButton;
    }
    if (cResult[11] !== tmp15) {
      class A {
        constructor() {
          return jsx(ContextMenu.ContextMenu, {
            items,
            children(ref) {
              let intl;
              ref = ref.ref;
              const obj = { IconComponent: url(wordWrap[23]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(wordWrap[17]).t.PdRCRg), ref };
              const tmp = items(ref, closure_1_3);
              const HeaderActionButton = url(wordWrap[22]).HeaderActionButton;
              intl = url(wordWrap[17]).intl;
              const merged = Object.assign(tmp);
              return closure_1_9(HeaderActionButton, obj);
            }
          });
        }
      }
      cResult[11] = tmp15;
      cResult[12] = A;
    } else {
      class A {
        constructor() {
          return jsx(ContextMenu.ContextMenu, {
            items,
            children(ref) {
              let intl;
              ref = ref.ref;
              const obj = { IconComponent: url(wordWrap[23]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(wordWrap[17]).t.PdRCRg), ref };
              const tmp = items(ref, closure_1_3);
              const HeaderActionButton = url(wordWrap[22]).HeaderActionButton;
              intl = url(wordWrap[17]).intl;
              const merged = Object.assign(tmp);
              return closure_1_9(HeaderActionButton, obj);
            }
          });
        }
      }
    }
    if (cResult[13] === tmp4.container) {
      class A {
        constructor() {
          return jsx(ContextMenu.ContextMenu, {
            items,
            children(ref) {
              let intl;
              ref = ref.ref;
              const obj = { IconComponent: url(wordWrap[23]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(wordWrap[17]).t.PdRCRg), ref };
              const tmp = items(ref, closure_1_3);
              const HeaderActionButton = url(wordWrap[22]).HeaderActionButton;
              intl = url(wordWrap[17]).intl;
              const merged = Object.assign(tmp);
              return closure_1_9(HeaderActionButton, obj);
            }
          });
        }
      }
    }
    class N {
      constructor() {
        return <metroImportAll style={container.container}>{null}</metroImportAll>;
      }
    }
    cResult[13] = tmp4.container;
    cResult[14] = url;
    cResult[15] = wordWrap;
    cResult[16] = N;
  }
  items = [tmp11, tmp14];
  cResult[7] = tmp11;
  cResult[8] = tmp14;
  cResult[9] = items;
  tmp15 = items;
}) : (function PlaintextFilePreviewModal(url) {
  let closure_2;
  url = url.url;
  const fileName = url.fileName;
  let memo;
  const tmp = closure_11();
  dependencyMap = tmp;
  const tmp2 = memo(react.useState(true), 2);
  const first = tmp2[0];
  let closure_4 = tmp2[1];
  items = [url, first];
  memo = react.useMemo(() => {
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
      CheckmarkSmallIcon = tmp(6819).CheckmarkSmallIcon;
    }
    items = [obj, ];
    let obj2 = {
      label: intl2.string(tmp(1126).t["1WjMbC"]),
      action() {
        const obj = url(closure_2[10]);
        if (null == obj.isSuspiciousDownload(closure_1_0)) {
          const obj3 = fileName(closure_2[12]);
          obj3.openURL(closure_1_0);
        } else {
          const obj2 = fileName(closure_2[11]);
          obj2.show(closure_1_0);
        }
      }
    };
    intl2 = tmp(1126).intl;
    items[1] = obj2;
    return items;
  }, items);
  const items1 = [fileName, memo, tmp.container, url, first];
  const memo1 = react.useMemo(() => {
    let container;
    let obj3;
    let wordWrap;
    let obj = {};
    const obj2 = {
      title: fileName,
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      headerRight() {
        return jsx(url(container[21]).ContextMenu, {
          items,
          children(ref) {
            let intl;
            ref = ref.ref;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { IconComponent: url(container[23]).MoreHorizontalIcon, accessibilityLabel: intl.string(url(container[17]).t.PdRCRg), ref };
            const HeaderActionButton = url(container[22]).HeaderActionButton;
            intl = url(container[17]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_9(HeaderActionButton, obj);
          }
        });
      },
      render() {
        return <closure_2_8 style={container.container}>{null}</closure_2_8>;
      }
    };
    const PREVIEW = constants.PREVIEW;
    obj[PREVIEW] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items1);
  return jsx(url(10568).Modal, { screens: memo1, initialRouteName: constants.PREVIEW });
});
const result = size.fileFinishedImporting("modules/media/native/PlaintextFilePreviewModal.tsx");

export default tmp4;
