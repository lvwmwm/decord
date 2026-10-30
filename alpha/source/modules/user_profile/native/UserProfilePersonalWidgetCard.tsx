// Module ID: 14925
// Function ID: 14926
// Name: UserProfilePersonalWidgetCard
// Dependencies: [32, 19, 17, 1072, 21, 5009, 575, 14926, 14927, 5619, 1114, 4834, 14928, 5075, 5712, 5582, 8565, 14918, 9506, 2]
// Exports: default

// Module 14925 (UserProfilePersonalWidgetCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 5075 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GifTagDefault from "GifTag" /* 8565 */;
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext" /* 14926 */;
import PersonalWidgetMarkupUtils from "PersonalWidgetMarkupUtils" /* 14927 */;
import WidgetAssetUtils from "WidgetAssetUtils" /* 14928 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let rect1;
let size;
function PersonalWidgetText(variant) {
  let lineClamp;
  let onTextLayout;
  variant = variant.variant;
  const color = variant.color;
  const children = variant.children;
  const maxLines = variant.maxLines;
  let obj = variant(children[7]);
  const personalWidgetFieldClamp = obj.usePersonalWidgetFieldClamp(maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  const children1 = react.useMemo(() => {
    const obj = PersonalWidgetMarkupUtils;
    const obj2 = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj2);
  }, items);
  return closure_9(variant(children[9]).Text, { variant, color, lineClamp, onTextLayout, children: children1 });
}
function PersonalWidgetShowMoreButton() {
  let Text;
  let closure_129_0;
  let isExpanded;
  let obj3;
  let obj4;
  let tmp5Result;
  const obj = PersonalWidgetExpandCollapseContext;
  const personalWidgetExpandCollapse = obj.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: closure_129_0 } = personalWidgetExpandCollapse);
  if (personalWidgetExpandCollapse.isAnyFieldClipped) {
    const obj2 = {
      hitSlop,
      onPress() {
          return closure_1_0((arg0) => !arg0);
        },
      accessibilityRole: "button",
      accessibilityState: obj3,
      children: React4(Text, obj4)
    };
    obj3 = { expanded: isExpanded };
    Text = tmp(5619).Text;
    const intl = tmp(1114).intl;
    const string = intl.string;
    const t = tmp(1114).t;
    obj4 = { variant: "text-sm/medium", color: "text-subtle", children: string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
    tmp5Result = tmp5(hasOwnProperty, obj2);
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
}
function useWidgetImage(userId, image, disableInteraction) {
  let callback;
  let closure_2;
  let isAnimated;
  _require = userId;
  const GifAutoPlay = require("UserSettings").GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  let obj = react;
  let tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_1 = tmp2[1];
  dependencyMap = tmp3;
  let tmp4 = null;
  if (null != image) {
    tmp4 = null;
    if ("fileId" in image) {
      tmp4 = image;
    }
  }
  _slicedToArray = tmp4;
  const items = [userId, tmp4, tmp3];
  const memo = obj.useMemo(() => {
    let obj2;
    let tmp2 = null;
    if (null != image) {
      let isAnimated = tmp.isAnimated;
      const getWidgetAssetURL = WidgetAssetUtils.getWidgetAssetURL;
      const fileId = tmp.fileId;
      WidgetAssetUtils;
      const tmp6 = userId;
      if (isAnimated) {
        isAnimated = closure_2;
      }
      const obj = { uri: getWidgetAssetURL(tmp6, fileId, obj2) };
      tmp2 = obj;
      obj2 = { animated: isAnimated };
    }
    return tmp2;
  }, items);
  let obj2 = { source: memo, showGifTag: isAnimated, canToggleAnimation: null != tmp4 && tmp4.isAnimated && !setting && !disableInteraction, toggleAnimation: callback };
  isAnimated = null != tmp4;
  callback = obj.useCallback(() => closure_1((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !tmp3;
  }
  if (isAnimated) {
    isAnimated = !disableInteraction;
  }
  return obj2;
}
function CoverSection(section) {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items1;
  let items2;
  let obj5;
  let obj7;
  let showGifTag;
  let toggleAnimation;
  let userId;
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp = closure_14();
  const tmp2 = useWidgetImage(userId, section.image, disableInteraction);
  const source = tmp2.source;
  const items = [tmp.coverContent, ];
  let prop = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    prop = tmp.coverContentWithImage;
  }
  const obj = { style: items, pointerEvents: "box-none", children: items1 };
  items[1] = prop;
  let tmp6 = null;
  if ("" !== section.title) {
    const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
    tmp6 = React4(PersonalWidgetText, obj2);
  }
  items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = React4(PersonalWidgetText, obj3);
  }
  items1[1] = tmp9;
  const tmp3Result = authStore(metroImportDefault, obj);
  let tmp24Result6 = tmp3Result;
  if (null != source) {
    let tmp24Result;
    let tmp15;
    let tmp14;
    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: authStore(metroImportDefault, obj5) };
    obj5 = { style: tmp.coverContainer, children: items2 };
    const ThemeContextProvider = native.ThemeContextProvider;
    if (canToggleAnimation) {
      const obj6 = { style: metroRequire.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: React4(FastImageDefault, obj7) };
      intl = tmp25(1114).intl;
      obj7 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
      tmp24Result = tmp24(hasOwnProperty, obj6);
      tmp15 = metroRequire;
      tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      tmp15 = metroRequire;
      const obj8 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
      tmp24Result = tmp24(FastImageDefault, obj8);
    }
    items2 = [tmp24Result, , , ];
    let tmp24Result4 = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj9 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result4 = tmp24(tmp14(5582), obj9);
      } else {
        tmp24Result4 = null;
      }
    }
    items2[1] = tmp24Result4;
    items2[2] = tmp3Result;
    let tmp24Result5 = null;
    if (showGifTag) {
      const obj10 = { style: tmp.gifTag };
      tmp24Result5 = tmp24(tmp14(8565), obj10);
    }
    items2[3] = tmp24Result5;
    tmp24Result6 = tmp24(ThemeContextProvider, obj4);
  }
  return tmp24Result6;
}
function FieldRow(field) {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items;
  let items1;
  let items2;
  let showGifTag;
  let toggleAnimation;
  let userId;
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = closure_14();
  const tmp2 = useWidgetImage(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    const obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = React4(FastImageDefault, obj);
  }
  let tmp7Result = tmp3;
  const obj2 = { style: tmp.fieldRow, children: items1 };
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      const obj3 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: items };
      intl = intl2.intl;
      items = [tmp3, ];
      let tmp13 = null;
      const tmp10 = hasOwnProperty;
      if (showGifTag) {
        const obj4 = { style: tmp.gifTagSmall };
        tmp13 = React4(GifTagDefault, obj4);
      }
      items[1] = tmp13;
      tmp7Result = tmp7(tmp10, obj3);
    }
  }
  items1 = [tmp7Result, ];
  let tmp16 = null;
  const obj5 = { style: tmp.fieldContent, children: items2 };
  if ("" !== field.title) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = React4(PersonalWidgetText, obj6);
  }
  items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = React4(PersonalWidgetText, obj7);
  }
  items2[1] = tmp19;
  items1[1] = authStore(metroImportDefault, obj5);
  return authStore(metroImportDefault, obj2);
}
function FieldsSection(arg0) {
  let disableInteraction;
  let fields;
  let require;
  let section;
  let userId;
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    let obj = {
      style: tmp.fieldsContainer,
      children: fields.map((field) => {
          const obj = { userId: require, field, disableInteraction: importDefault };
          return React4(FieldRow, obj, field.key);
        })
    };
    fields = section.fields;
    tmp2 = closure_9(closure_7, obj);
  }
  return tmp2;
}
function UserProfilePersonalWidgetCardContent(userId) {
  let disableInteraction;
  let items;
  let obj2;
  let tmp4;
  let tmp5;
  let widget;
  userId = userId.userId;
  ({ widget, disableInteraction } = userId);
  const cardStyle = userId.cardStyle;
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  const tmp = closure_14();
  let obj = { userId, widget, style: cardStyle, titleLeadingIcon: closure_9(userId(9506).NitroWheelIcon, { size: "xs", color: "icon-subtle" }), title: widget.header, disableInteraction, children: tmp4(tmp5, obj2) };
  obj2 = { style: tmp.sectionsContainer, children: items };
  const sections = widget.sections;
  const tmp3 = disableInteraction(14918);
  items = [
    sections.map(function renderSection(type, index) {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return React4(CoverSection, obj2, index);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return React4(FieldsSection, obj, index);
      } else {
        return null;
      }
    }),

  ];
  let tmp2Result = null;
  tmp4 = closure_10;
  tmp5 = closure_7;
  if (!disableInteraction) {
    tmp2Result = tmp2(PersonalWidgetShowMoreButton, {});
  }
  items[1] = tmp2Result;
  return closure_9(tmp3, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { coverContainer: obj2, coverContent: obj3, coverContentWithImage: obj4, sectionsContainer: obj5, fieldsContainer: obj6, fieldRow: obj7, fieldImage: size, fieldContent: { flex: 1 }, gifTag: rect, gifTagSmall: rect1 };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { padding: nativeDefault.space.PX_16, marginTop: 56 };
obj5 = { gap: nativeDefault.space.PX_12 };
obj6 = { gap: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.sm };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
let closure_14 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(arg0) {
  let obj2;
  const obj = { children: React4(UserProfilePersonalWidgetCardContent, obj2) };
  obj2 = {};
  const PersonalWidgetExpandCollapseProvider = PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider;
  const merged = Object.assign(arg0);
  return React4(PersonalWidgetExpandCollapseProvider, obj);
};
