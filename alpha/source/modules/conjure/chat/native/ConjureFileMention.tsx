// Module ID: 11826
// Function ID: 11827
// Name: ConjureFileMention
// Dependencies: [19, 17, 21, 4971, 587, 558, 576, 11825, 11827, 11829, 1128, 3830, 5234, 2]

// Module 11826 (ConjureFileMention)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import conjureFileMentions from "conjureFileMentions" /* 11825 */;
import conjureStoredAttachments from "conjureStoredAttachments" /* 11827 */;
import ConjureFileThumbnailDefault from "ConjureFileThumbnail" /* 11829 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj4;
let size;
let tmp2;
const intl2 = tmp2(1128);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { chip: obj2, thumbnail: size, name: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, transform: items };
createStyles = createStyles.createStyles;
let obj3 = { translateY: nativeDefault.space.PX_4 };
items = [obj3];
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj4 = { color: nativeDefault.colors.MENTION_FOREGROUND };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureFileMention(variant) {
  let items;
  const obj = react2;
  const cResult = obj.c(14);
  variant = variant.variant;
  let str = "text-md/normal";
  const attachmentId = variant.attachmentId;
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_7();
  const context = react.useContext(tmp(11825).ConjureFileMentionProjectContext);
  const tmpResult = conjureStoredAttachments;
  const conjureStoredAttachment = tmpResult.useConjureStoredAttachment(context, attachmentId);
  if (cResult[0] === conjureStoredAttachment) {
    if (cResult[1] === context) {
      let tmp7;
      let tmp13;
      if (cResult[2] === tmp4.thumbnail) {
        tmp7 = cResult[3];
      }
      let name;
      const tmp10 = cResult[4];
      if (conjureStoredAttachment != null) {
        name = conjureStoredAttachment.name;
      }
      if (tmp10 !== name) {
        let name1;
        if (conjureStoredAttachment != null) {
          name1 = conjureStoredAttachment.name;
        }
        if (name1 == null) {
          const intl = tmp(1128).intl;
          name1 = intl.string(_modDef3830.ff9Q4C);
        }
        let name2;
        if (conjureStoredAttachment != null) {
          name2 = conjureStoredAttachment.name;
        }
        cResult[4] = name2;
        cResult[5] = name1;
        tmp13 = name1;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp4.name) {
        if (cResult[7] === tmp13) {
          let tmp17;
          if (cResult[8] === str) {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp4.chip) {
            if (cResult[11] === tmp7) {
              let tmp20;
              if (cResult[12] === tmp17) {
                tmp20 = cResult[13];
              }
              return tmp20;
            }
          }
          const obj2 = { style: tmp4.chip, children: items };
          items = [tmp7, tmp17];
          const tmp23 = metroRequire(View, obj2);
          cResult[10] = tmp4.chip;
          cResult[11] = tmp7;
          cResult[12] = tmp17;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
      }
      const obj3 = { variant: str, style: tmp4.name, children: tmp13 };
      const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[6] = tmp4.name;
      cResult[7] = tmp13;
      cResult[8] = str;
      cResult[9] = tmp19;
      tmp17 = tmp19;
    }
  }
  const obj4 = { projectId: context, file: conjureStoredAttachment, style: tmp4.thumbnail, iconColor: nativeDefault.colors.MENTION_FOREGROUND };
  const tmp8 = ConjureFileThumbnailDefault;
  const tmp9 = hasOwnProperty(tmp8, obj4);
  cResult[0] = conjureStoredAttachment;
  cResult[1] = context;
  cResult[2] = tmp4.thumbnail;
  cResult[3] = tmp9;
  tmp7 = tmp9;
}) : (function ConjureFileMention(variant) {
  let items;
  let name;
  let str = variant.variant;
  const attachmentId = variant.attachmentId;
  if (str === undefined) {
    str = "text-md/normal";
  }
  const tmp = closure_7();
  const context = react.useContext(conjureFileMentions.ConjureFileMentionProjectContext);
  const obj = conjureStoredAttachments;
  const conjureStoredAttachment = obj.useConjureStoredAttachment(context, attachmentId);
  const obj2 = { style: tmp.chip, children: items };
  const obj3 = { projectId: context, file: conjureStoredAttachment, style: tmp.thumbnail, iconColor: nativeDefault.colors.MENTION_FOREGROUND };
  const tmp10 = ConjureFileThumbnailDefault;
  items = [hasOwnProperty(tmp10, obj3), ];
  const obj4 = { variant: str, style: tmp.name, children: name };
  name = undefined;
  const Text = Text_Text.Text;
  const tmp6 = metroRequire;
  const tmp7 = View;
  const tmp8 = hasOwnProperty;
  if (conjureStoredAttachment != null) {
    name = conjureStoredAttachment.name;
  }
  if (name == null) {
    const intl = intl2.intl;
    name = intl.string(_modDef3830.ff9Q4C);
  }
  items[1] = tmp8(Text, obj4);
  return tmp6(tmp7, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileMention.tsx");

export default tmp4;
