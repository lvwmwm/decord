// Module ID: 16571
// Function ID: 16572
// Name: TinyBroncoAgeGroupHeader
// Dependencies: [32, 19, 17, 6731, 4855, 21, 5009, 575, 4842, 10112, 3125, 7947, 16561, 7563, 5730, 5619, 1114, 6974, 7048, 16572, 5629, 2]
// Exports: TinyBroncoAgeGroupHeader

// Module 16571 (TinyBroncoAgeGroupHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef3125 from "module_3125" /* 3125 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import Text_Text from "Text/Text" /* 5619 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6731 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10112 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 16572 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
function handleOpenBlog() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(TINY_BRONCO_BLOG_URL);
}
function AccountStatusNotice(ageGroup) {
  let closure_0;
  let first;
  let intl;
  let intl2;
  _require = undefined;
  ageGroup = ageGroup.ageGroup;
  const tmp = closure_10();
  const obj = require("TinyBroncoLazy");
  const shouldShowAgeNotice = obj.useShouldShowAgeNotice();
  const obj2 = require("useSelectedDismissibleContent");
  [first, [][0]] = obj2.useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12);
  _require = tmp7;
  let tmp9 = null;
  if (shouldShowAgeNotice) {
    tmp9 = null;
    if (null != first) {
      const obj3 = { style: tmp.notice, children: items };
      const obj4 = { style: tmp.noticeIcon, children: closure_8(require("CircleInformationIcon").CircleInformationIcon, { size: "xs", color: "text-link" }) };
      items = [closure_8(View, obj4), , ];
      obj5 = { style: tmp.noticeBody, variant: "text-sm/normal", color: "text-default", children: intl.format(obj5[ageGroup], obj6) };
      const Text = tmp2(5619).Text;
      intl = tmp2(1114).intl;
      obj6 = { handleOnBlogHook: handleOpenBlog };
      items[1] = closure_8(Text, obj5);
      const obj7 = { style: tmp.noticeDismiss, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.WAI6xu), hitSlop: 12, onPress: tmp8, children: closure_8(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-strong" }) };
      const PressableOpacity = tmp2(6974).PressableOpacity;
      intl2 = tmp2(1114).intl;
      items[2] = closure_8(PressableOpacity, obj7);
      tmp9 = closure_9(View, obj3);
    }
  }
  return tmp9;
}
function AgeGroupDescription(ageGroup) {
  let format;
  let format2;
  let format3;
  let gi4ulu;
  let obj3;
  let prop;
  let v221iML;
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    const obj2 = { variant: "text-sm/normal", color: "text-default", children: format3(gi4ulu, obj3) };
    const Text3 = tmp(5619).Text;
    const intl3 = tmp(1114).intl;
    format3 = intl3.format;
    obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
    gi4ulu = _modDef3125.gi4ulu;
    return metroImportAll(Text3, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: format2(v221iML, obj5) };
    const Text2 = tmp(5619).Text;
    const intl2 = tmp(1114).intl;
    format2 = intl2.format;
    obj5 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    v221iML = _modDef3125["221iML"];
    return metroImportAll(Text2, obj4);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { variant: "text-sm/normal", color: "text-default", children: format(prop, obj6) };
    const Text = tmp(5619).Text;
    const intl = tmp(1114).intl;
    format = intl.format;
    obj6 = { handleOnAgeGatedContentHook: handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    prop = _modDef3125["W0/7DD"];
    return metroImportAll(Text, obj);
  }
}
function AgeGroupCallToAction(ageGroup) {
  let intl;
  let intl2;
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj2 = { grow: true, variant: "secondary", size: "md", text: intl2.string(_modDef3125["+7NlgO"]), onPress: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
    const Button2 = tmp(5629).Button;
    intl2 = tmp(1114).intl;
    return metroImportAll(Button2, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { grow: true, variant: "secondary", size: "md", text: intl.string(_modDef3125["cI+bc/"]), onPress: useAgeGroupPresentation.handleShowAgeVerification };
    const Button = tmp(5629).Button;
    intl = tmp(1114).intl;
    return metroImportAll(Button, obj);
  }
}
const View = react_native.View;
const TINY_BRONCO_BLOG_URL = TinyBroncoConstants.TINY_BRONCO_BLOG_URL;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, notice: obj3, noticeIcon: { flexShrink: 0 }, noticeBody: { flex: 1 }, noticeDismiss: { flexShrink: 0 }, description: obj4 };
obj2 = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let items = [dismissible_content.DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj5 = {};
obj5[useAgeGroupPresentation.AgeGroupState.ADULT] = _modDef3125["8TWztV"];
obj5[useAgeGroupPresentation.AgeGroupState.TEEN] = _modDef3125.qSkhZH;
obj5[useAgeGroupPresentation.AgeGroupState.UNVERIFIED] = _modDef3125.vGxRDB;
let obj6 = {};
obj6[useAgeGroupPresentation.AgeGroupState.ADULT] = _modDef3125.t5QjmQ;
obj6[useAgeGroupPresentation.AgeGroupState.TEEN] = _modDef3125["41MDhK"];
obj6[useAgeGroupPresentation.AgeGroupState.UNVERIFIED] = _modDef3125.m95jW8;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export function TinyBroncoAgeGroupHeader() {
  let intl;
  let items1;
  const tmp = closure_10();
  const obj = useAgeGroupPresentation;
  const ageGroupState = obj.useAgeGroupState();
  const obj2 = { style: tmp.header, children: items };
  items = [metroImportAll(AccountStatusNotice, { ageGroup: ageGroupState }), , ];
  const obj3 = { style: tmp.description, children: items1 };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(obj6[ageGroupState]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items1 = [metroImportAll(Heading, obj4), metroImportAll(AgeGroupDescription, { ageGroup: ageGroupState })];
  items[1] = React4(View, obj3);
  items[2] = metroImportAll(AgeGroupCallToAction, { ageGroup: ageGroupState });
  return React4(View, obj2);
}
