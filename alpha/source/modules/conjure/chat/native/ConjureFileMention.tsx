// Module ID: 12450
// Function ID: 12451
// Name: ConjureFileMention
// Dependencies: [5, 19, 17, 21, 5009, 575, 12449, 12451, 12454, 5619, 1114, 3865, 12421, 12456, 1995, 2]
// Exports: default

// Module 12450 (ConjureFileMention)
import nativeDefault from "native" /* 575 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c3, paths;

let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let size;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { chip: obj2, thumbnail: size, name: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, transform: items };
createStyles = createStyles.createStyles;
let obj3 = { translateY: nativeDefault.space.PX_4 };
items = [obj3];
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj4 = { color: nativeDefault.colors.MENTION_FOREGROUND };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileMention.tsx");

export default function ConjureFileMention(variant) {
  let intl2;
  let items;
  let name;
  let obj6;
  let str = variant.variant;
  const attachmentId = variant.attachmentId;
  if (str === undefined) {
    str = "text-md/normal";
  }
  let context;
  const tmp = closure_9();
  const tmp3 = dependencyMap;
  context = react.useContext(context(12449).ConjureFileMentionProjectContext);
  let obj = context(12451);
  const conjureStoredAttachment = obj.useConjureStoredAttachment(context, attachmentId);
  const obj2 = { style: tmp.chip, children: items };
  let obj3 = { projectId: context, file: conjureStoredAttachment, style: tmp.thumbnail, iconColor: conjureStoredAttachment(575).colors.MENTION_FOREGROUND };
  const tmp10 = conjureStoredAttachment(12454);
  items = [closure_7(tmp10, obj3), ];
  let obj4 = { variant: str, style: tmp.name, children: name };
  name = undefined;
  const Text = context(5619).Text;
  const tmp6 = closure_8;
  const tmp7 = closure_6;
  if (conjureStoredAttachment != null) {
    name = conjureStoredAttachment.name;
  }
  if (name == null) {
    const intl = tmp2(1114).intl;
    name = intl.string(tmp9(3865).ff9Q4C);
  }
  items[1] = closure_7(Text, obj4);
  const tmp6Result = tmp6(tmp7, obj2);
  let tmp8Result = tmp6Result;
  if (null != context) {
    tmp8Result = tmp6Result;
    if (null != conjureStoredAttachment) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = tmp2(12421).CONJURE_VIEWABLE_IMAGE_TYPES;
      tmp8Result = tmp6Result;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(conjureStoredAttachment.content_type)) {
        let obj5 = {
          onPress: _asyncToGenerator(async (arg0, value) => {
                  let closure_0;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      let openConjureNativeImages;
                      c3 = 2;
                      if (0 === paths) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          let closure_1 = tmp4;
                          openConjureNativeImages = undefined;
                          paths = 1;
                          c3 = 1;
                          const obj5 = { value: tmp(paths[14])(paths[13], paths.paths), done: false };
                          return obj5;
                        }
                      } else if (1 === paths) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj6 = { value, done: true };
                          return obj6;
                        } else {
                          openConjureNativeImages = value.openConjureNativeImages;
                          const obj7 = { id: null, alt: null };
                          ({ id: obj2.id, name: obj2.alt } = closure_129_1);
                          const items = [obj7];
                          paths = 2;
                          c3 = 1;
                          const obj13 = { value: openConjureNativeImages(closure_129_0, items, 0), done: false };
                          return obj13;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        c3 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp12) {
                      c3 = 3;
                      throw tmp12;
                    }
                  }
                }),
          accessibilityRole: "button",
          accessibilityLabel: intl2.formatToPlainString(tmp9(3865).GtNukg, obj6),
          children: tmp6Result
        };
        intl2 = tmp2(1114).intl;
        obj6 = { name: conjureStoredAttachment.name };
        tmp8Result = tmp8(closure_5, obj5);
      }
    }
  }
  return tmp8Result;
};
