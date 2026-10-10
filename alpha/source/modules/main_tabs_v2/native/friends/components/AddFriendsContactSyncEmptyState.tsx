// Module ID: 17471
// Function ID: 17472
// Name: AddFriendsContactSyncEmptyState
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 12398, 17472, 1126, 5088, 12402, 5379, 2]

// Module 17471 (AddFriendsContactSyncEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12398 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import CompassSpotIllustration from "CompassSpotIllustration" /* 17472 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerIllustration: obj3, title: obj4, subtitle: obj5, subtitleText: { textAlign: "center" }, trailing: obj6 };
obj2 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj6 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddFriendsContactSyncEmptyState() {
  let first;
  let intl3;
  let items;
  let subtitle;
  let subtitleText;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp20;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(22);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleNext() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
    cResult[0] = handleNext;
    first = handleNext;
  } else {
    first = cResult[0];
  }
  const content = tmp4.content;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = _false(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false });
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.headerIllustration) {
    const obj2 = { style: tmp4.headerIllustration, children: tmp6 };
    const tmp12 = _false(View, obj2);
    cResult[2] = tmp4.headerIllustration;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  const title = tmp4.title;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t["/G+nci"]);
    cResult[4] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj3 = { style: title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp13 };
    const tmp17 = _false(Text_Text.Heading, obj3);
    cResult[5] = tmp4.title;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  ({ subtitle, subtitleText } = tmp4);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const format = intl2.format;
    const obj4 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
    const OXdOPf = tmp(1126).t.OXdOPf;
    const formatResult = format(OXdOPf, obj4);
    cResult[7] = formatResult;
    tmp18 = formatResult;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitleText) {
    const obj5 = { style: subtitleText, variant: "text-sm/medium", children: tmp18 };
    const tmp22 = _false(Text_Text.Text, obj5);
    cResult[8] = tmp4.subtitleText;
    cResult[9] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === tmp4.subtitle) {
    let tmp23;
    let tmp25;
    let tmp28;
    if (cResult[11] === tmp20) {
      tmp23 = cResult[12];
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "primary", size: "lg", text: intl3.string(intl4.t.QUXSpo), onPress: first };
      const Button = tmp(5379).Button;
      intl3 = tmp(1126).intl;
      const tmp27 = _false(Button, obj6);
      cResult[13] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[13];
    }
    if (cResult[14] !== tmp4.trailing) {
      const obj7 = { style: tmp4.trailing, children: tmp25 };
      const tmp31 = _false(View, obj7);
      cResult[14] = tmp4.trailing;
      cResult[15] = tmp31;
      tmp28 = tmp31;
    } else {
      tmp28 = cResult[15];
    }
    if (cResult[16] === tmp4.content) {
      if (cResult[17] === tmp23) {
        if (cResult[18] === tmp28) {
          if (cResult[19] === tmp9) {
            let tmp32;
            if (cResult[20] === tmp15) {
              tmp32 = cResult[21];
            }
            return tmp32;
          }
        }
      }
    }
    const obj8 = { style: content, children: items };
    items = [tmp9, tmp15, tmp23, tmp28];
    const tmp35 = React3(View, obj8);
    cResult[16] = tmp4.content;
    cResult[17] = tmp23;
    cResult[18] = tmp28;
    cResult[19] = tmp9;
    cResult[20] = tmp15;
    cResult[21] = tmp35;
    tmp32 = tmp35;
  }
  const tmp24 = _false(View, { style: subtitle, children: tmp20 });
  cResult[10] = tmp4.subtitle;
  cResult[11] = tmp20;
  cResult[12] = tmp24;
  tmp23 = tmp24;
}) : (function AddFriendsContactSyncEmptyState() {
  let Button;
  let OXdOPf;
  let Text;
  let format;
  let intl;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let obj8;
  const tmp = closure_5();
  let obj = { style: tmp.content, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.headerIllustration, children: _false(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) };
  items[0] = _false(View, obj2);
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["/G+nci"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items[1] = _false(Heading, obj3);
  const obj4 = { style: tmp.subtitle, children: _false(Text, obj5) };
  obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: format(OXdOPf, obj6) };
  Text = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj6 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
  OXdOPf = intl4.t.OXdOPf;
  items[2] = _false(View, obj4);
  const obj7 = { style: tmp.trailing, children: _false(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl4.t.QUXSpo),
    onPress: function handleNext() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[3] = _false(View, obj7);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default tmp5;
