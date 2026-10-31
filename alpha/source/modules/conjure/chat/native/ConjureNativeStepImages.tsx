// Module ID: 12715
// Function ID: 12716
// Name: ConjureNativeStepImages
// Dependencies: [19, 17, 21, 5014, 575, 12490, 5717, 12491, 2]
// Exports: default

// Module 12715 (ConjureNativeStepImages)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12490 */;
import openConjureNativeImages2 from "openConjureNativeImages" /* 12491 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function StepImage(image) {
  let gone;
  let handleError;
  let obj5;
  let tmp6Result;
  image = image.image;
  const onOpen = image.onOpen;
  const projectId = image.projectId;
  const tmp = closure_9();
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
}
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { strip: obj2, thumb: obj3, placeholder: obj4 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeStepImages.tsx");

export default function ConjureNativeStepImages(projectId) {
  projectId = projectId.projectId;
  const images = projectId.images;
  const items = [images, projectId];
  const tmp = closure_9();
  const onOpen = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const openConjureNativeImages = openConjureNativeImages2.openConjureNativeImages;
    openConjureNativeImages2;
    const mapped = images.map((id) => ({ id: id.id, alt: id.name }));
    const result = openConjureNativeImages(projectId, mapped, images.findIndex((id) => id.id === id.id));
  }, items);
  let tmp2 = null;
  if (0 !== images.length) {
    tmp2 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp.strip}>{images.map((image) => <StepImage key={arg0.id} projectId={projectId} image={arg0} onOpen={onOpen} />)}</closure_6>;
  }
  return tmp2;
};
