// Module ID: 12199
// Function ID: 12200
// Name: ConjureFileThumbnail
// Dependencies: [19, 21, 558, 576, 587, 12168, 12063, 12200, 5670, 2]

// Module 12199 (ConjureFileThumbnail)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5670 */;
import FileIcon from "FileIcon" /* 12063 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 12168 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12200 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureFileThumbnail(arg0) {
  let file;
  let iconColor;
  let projectId;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  ({ projectId, file, style, iconColor } = arg0);
  if (undefined === iconColor) {
    iconColor = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (null != projectId) {
    if (null != file) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = tmp(12168).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(file.content_type)) {
        if (cResult[3] === file.id) {
          if (cResult[4] === iconColor) {
            if (cResult[5] === projectId) {
              let tmp7;
              if (cResult[6] === style) {
                tmp7 = cResult[7];
              }
              tmp5 = tmp7;
            }
          }
        }
        const tmp10 = <closure_4 projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
        cResult[3] = file.id;
        cResult[4] = iconColor;
        cResult[5] = projectId;
        cResult[6] = style;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      return tmp5;
    }
  }
  if (cResult[0] === iconColor) {
    if (cResult[1] === style) {
      tmp5 = cResult[2];
    }
  }
  const tmp6 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
  cResult[0] = iconColor;
  cResult[1] = style;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureFileThumbnail(arg0) {
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
        tmp5 = <closure_4 projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
      }
      return tmp5;
    }
  }
  tmp5 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageThumbnail(arg0) {
  let attachmentId;
  let handleError;
  let iconColor;
  let projectId;
  let src;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, iconColor, projectId, attachmentId } = arg0);
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, attachmentId);
  ({ src, handleError } = conjureAttachmentImage);
  if (null != src) {
    if (!conjureAttachmentImage.gone) {
      let tmp5;
      if (cResult[3] !== src) {
        const obj3 = { uri: src };
        cResult[3] = src;
        cResult[4] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[4];
      }
      if (cResult[5] === handleError) {
        if (cResult[6] === style) {
          if (cResult[7] === tmp5) {
            tmp6 = cResult[8];
          }
        }
      }
      const tmp9 = jsx(FastImageDefault, { source: tmp5, style, resizeMode: "cover", onError: handleError });
      cResult[5] = handleError;
      cResult[6] = style;
      cResult[7] = tmp5;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
    return tmp6;
  }
  if (cResult[0] === iconColor) {
    let tmp10;
    if (cResult[1] === style) {
      tmp10 = cResult[2];
    }
    tmp6 = tmp10;
  }
  const tmp11 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
  cResult[0] = iconColor;
  cResult[1] = style;
  cResult[2] = tmp11;
  tmp10 = tmp11;
}) : (function ImageThumbnail(style) {
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
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileThumbnail.tsx");

export default tmp3;
