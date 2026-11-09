// Module ID: 12316
// Function ID: 12317
// Name: ConjureFileThumbnail
// Dependencies: [19, 21, 575, 12281, 11194, 12317, 5842, 2]
// Exports: default

// Module 12316 (ConjureFileThumbnail)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5842 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 12281 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12317 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const FileIcon = tmp(11194);
function ImageThumbnail(style) {
  let attachmentId;
  let iconColor;
  let projectId;
  style = style.style;
  ({ projectId, attachmentId, iconColor } = style);
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, attachmentId);
  const src = conjureAttachmentImage.src;
  if (null != src) {
    let tmp7;
    if (!conjureAttachmentImage.gone) {
      const obj3 = { uri: src };
      tmp7 = jsx(FastImageDefault, { source: obj3, style, resizeMode: "cover", onError: tmp4 });
    }
    return tmp7;
  }
  tmp7 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileThumbnail.tsx");

export default function ConjureFileThumbnail(arg0) {
  let file;
  let iconColor;
  let projectId;
  let style;
  ({ projectId, file, style, iconColor } = arg0);
  if (iconColor === undefined) {
    iconColor = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (null != projectId) {
    if (null != file) {
      let tmp5;
      const CONJURE_VIEWABLE_IMAGE_TYPES = ConjureAttachmentTypes.CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(file.content_type)) {
        tmp5 = <ImageThumbnail projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
      }
      return tmp5;
    }
  }
  tmp5 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
};
