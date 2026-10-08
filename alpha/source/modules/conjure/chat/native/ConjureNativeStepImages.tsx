// Module ID: 16967
// Function ID: 16968
// Name: ConjureNativeStepImages
// Dependencies: [19, 17, 13072, 21, 5090, 587, 558, 576, 16941, 6164, 8362, 2]

// Module 16967 (ConjureNativeStepImages)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6164 */;
import openMediaModal from "openMediaModal" /* 8362 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13072 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 16941 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const getAttachmentUrl = ConjureConnectionStore.getAttachmentUrl;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { strip: obj2, thumb: obj3, placeholder: obj4 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function StepImage(image) {
  let handleError;
  let src;
  const obj = react2;
  const cResult = obj.c(12);
  image = image.image;
  const onOpen = image.onOpen;
  const projectId = image.projectId;
  const tmp3 = closure_10();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, image.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (cResult[0] === image) {
    let tmp6;
    if (cResult[1] === onOpen) {
      tmp6 = cResult[2];
    }
    let tmp8 = null;
    if (!tmp5) {
      let tmp12;
      if (cResult[3] === handleError) {
        if (cResult[4] === src) {
          if (cResult[5] === tmp3.placeholder) {
            let tmp9;
            if (cResult[6] === tmp3.thumb) {
              tmp9 = cResult[7];
            }
            if (cResult[8] === tmp6) {
              if (cResult[9] === image.name) {
                let tmp16;
                if (cResult[10] === tmp9) {
                  tmp16 = cResult[11];
                }
                tmp8 = tmp16;
              }
            }
            const tmp19 = <hasOwnProperty onPress={tmp6} accessibilityRole="imagebutton" accessibilityLabel={image.name}>{tmp9}</hasOwnProperty>;
            cResult[8] = tmp6;
            cResult[9] = image.name;
            cResult[10] = tmp9;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      if (null == src) {
        tmp12 = <metroImportDefault style={tmp3.placeholder}><React3 size="small" /></metroImportDefault>;
      } else {
        const obj6 = { uri: src };
        tmp12 = jsx(FastImageDefault, { source: obj6, style: tmp3.thumb, resizeMode: "cover", onError: handleError });
      }
      cResult[3] = handleError;
      cResult[4] = src;
      cResult[5] = tmp3.placeholder;
      cResult[6] = tmp3.thumb;
      cResult[7] = tmp12;
      tmp9 = tmp12;
    }
    return tmp8;
  }
  const fn = function n() {
    return onOpen(image);
  };
  cResult[0] = image;
  cResult[1] = onOpen;
  cResult[2] = fn;
  tmp6 = fn;
}) : (function StepImage(image) {
  let gone;
  let handleError;
  let obj5;
  let tmp6Result;
  image = image.image;
  const onOpen = image.onOpen;
  const projectId = image.projectId;
  const tmp = closure_10();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, image.id);
  const src = conjureAttachmentImage.src;
  const items = [image, onOpen];
  ({ gone, handleError } = conjureAttachmentImage);
  let tmp6Result2 = null;
  if (!gone) {
    const obj2 = { onPress: tmp4, accessibilityRole: "imagebutton", accessibilityLabel: image.name, children: tmp6Result };
    const tmp7 = hasOwnProperty;
    if (null == src) {
      const obj3 = { style: tmp.placeholder, children: <React3 size="small" /> };
      tmp6Result = tmp6(metroImportDefault, obj3);
    } else {
      const obj4 = { source: obj5, style: tmp.thumb, resizeMode: "cover", onError: handleError };
      obj5 = { uri: src };
      tmp6Result = tmp6(FastImageDefault, obj4);
    }
    tmp6Result2 = tmp6(tmp7, obj2);
  }
  return tmp6Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStepImages(projectId) {
  let onOpen;
  let obj = projectId(576);
  const cResult = obj.c(13);
  projectId = projectId.projectId;
  let images = projectId.images;
  const tmp2 = closure_10();
  if (cResult[0] === images) {
    let tmp3;
    if (cResult[1] === projectId) {
      tmp3 = cResult[2];
    }
    dependencyMap = tmp3;
    if (0 === images.length) {
      return null;
    } else {
      let tmp4;
      if (cResult[3] === tmp3) {
        if (cResult[4] === images) {
          if (cResult[5] === projectId) {
            tmp4 = cResult[6];
          }
          if (cResult[10] === tmp2.strip) {
            let tmp7;
            if (cResult[11] === tmp4) {
              tmp7 = cResult[12];
            }
            return tmp7;
          }
          class C {
            constructor(image) {
              return <closure_11 key={arg0.id} projectId={projectId} image={arg0} onOpen={onOpen} />;
            }
          }
          const tmp9 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp11}>{tmp4}</closure_6>;
          cResult[10] = tmp2.strip;
          cResult[11] = tmp4;
          cResult[12] = tmp9;
          tmp7 = tmp9;
        }
      }
      if (cResult[7] === tmp3) {
        let tmp5;
        if (cResult[8] === projectId) {
          tmp5 = cResult[9];
        }
        let mapped = images.map(tmp5);
        class C {
          constructor(image) {
            return <closure_11 key={arg0.id} projectId={projectId} image={arg0} onOpen={onOpen} />;
          }
        }
        cResult[3] = tmp3;
        cResult[4] = images;
        cResult[5] = projectId;
        cResult[6] = mapped;
        tmp4 = mapped;
      }
      class C {
        constructor(image) {
          return <closure_11 key={arg0.id} projectId={projectId} image={arg0} onOpen={onOpen} />;
        }
      }
      cResult[7] = tmp3;
      cResult[8] = projectId;
      cResult[9] = C;
      tmp5 = C;
    }
  }
  const fn = function n(arg0) {
    let closure_1;
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    const allPromises = Promise.all(images.map((id) => getAttachmentUrl(id, id.id)));
    allPromises.then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      const obj2 = { initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
      obj.openMediaModal(obj2);
    }, () => {

    });
  };
  cResult[0] = images;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function ConjureNativeStepImages(projectId) {
  projectId = projectId.projectId;
  let images = projectId.images;
  const items = [images, projectId];
  const tmp = closure_10();
  const onOpen = react.useCallback((arg0) => {
    let closure_1;
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    const allPromises = Promise.all(images.map((id) => getAttachmentUrl(id, id.id)));
    allPromises.then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      const obj2 = { initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
      obj.openMediaModal(obj2);
    }, () => {

    });
  }, items);
  let tmp2 = null;
  if (0 !== images.length) {
    tmp2 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp.strip}>{images.map((image) => <closure_11 key={arg0.id} projectId={projectId} image={arg0} onOpen={onOpen} />)}</closure_6>;
  }
  return tmp2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeStepImages.tsx");

export default tmp4;
