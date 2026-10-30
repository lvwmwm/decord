// Module ID: 12706
// Function ID: 12707
// Name: ConjurePlanAutomodExamples
// Dependencies: [19, 17, 21, 5009, 575, 12707, 1188, 1410, 5619, 2]
// Exports: default

// Module 12706 (ConjurePlanAutomodExamples)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import Text_Text from "Text/Text" /* 5619 */;
import ConjurePlanAutomodOutcomes from "ConjurePlanAutomodOutcomes" /* 12707 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
function ExampleRow(showReason) {
  let example;
  let found;
  let items2;
  let items3;
  let makeSource;
  let tmp2Result5;
  let tmp2Result6;
  let username;
  ({ example, username } = showReason);
  showReason = showReason.showReason;
  const tmp = closure_8();
  const tmp4 = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome];
  const blockedStyle = tmp4.blockedStyle;
  let result = null;
  const label = tmp4.label;
  if (showReason) {
    const tmp2Result = ConjurePlanAutomodOutcomes;
    result = tmp2Result.planAutomodReasonText(example);
  }
  const items = [tmp.row, ];
  const tmp8 = blockedStyle && tmp.blockedRow;
  items[1] = tmp8;
  const obj = { style: items, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
  const items1 = ["" + label() + ": " + username + ", " + example.content, result];
  found = items1.filter((item) => null != item);
  let tmp9 = null;
  if (blockedStyle) {
    const obj2 = { style: tmp.blockedBar };
    tmp9 = _false(tmp7, obj2);
  }
  items2 = [tmp9, , ];
  const obj3 = { source: makeSource(tmp2Result5.getDefaultAvatarURL(undefined, undefined)), size: native.AvatarSizes.XSMALL };
  const Avatar = tmp2(1188).Avatar;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp2Result5 = AvatarUtils;
  items2[1] = _false(Avatar, obj3);
  const obj4 = { style: tmp.rowBody, children: items3 };
  items3 = [_false(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: username }), , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp2Result6.renderPlanAutomodExampleContent(example.content) };
  const Text = tmp2(5619).Text;
  tmp2Result6 = ConjurePlanAutomodOutcomes;
  items3[1] = _false(Text, obj5);
  let tmp11Result = null;
  const tmp11 = _false;
  if (null != result) {
    const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: result };
    tmp11Result = tmp11(tmp2(5619).Text, obj6);
  }
  items3[2] = tmp11Result;
  items2[2] = React3(View, obj4);
  return React3(View, obj);
}
function ExampleSection(arg0) {
  let examples1;
  let group;
  let items;
  let items1;
  let items2;
  let length;
  let require;
  ({ group, firstIndex: require } = arg0);
  set = undefined;
  const tmp = closure_8();
  let obj = require("ConjurePlanAutomodOutcomes").CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
  const examples = group.examples;
  set = new Set(examples.map(require("ConjurePlanAutomodOutcomes").planAutomodReasonText));
  let result = null;
  if (1 === set.size) {
    const tmp2Result = require("ConjurePlanAutomodOutcomes");
    result = tmp2Result.planAutomodReasonText(group.examples[0]);
  }
  const obj2 = { style: tmp.section, children: items2 };
  const obj3 = { style: tmp.caption, accessibilityRole: "header", children: items };
  const obj4 = { variant: "text-xs/semibold", color: closure_6[obj.tone], children: obj.label() };
  const Text = tmp2(tmp3[8]).Text;
  items = [closure_3(Text, obj4), ];
  let tmp6Result = null;
  if (null != result) {
    const obj5 = { children: items1 };
    const obj6 = { variant: "text-xs/semibold", color: "text-muted", style: tmp.dot, accessible: false, children: "\u00B7" };
    items1 = [closure_3(require("Text/Text").Text, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: result };
    items1[1] = closure_3(require("Text/Text").Text, obj7);
    tmp6Result = tmp6(closure_5, obj5);
  }
  items[1] = tmp6Result;
  items2 = [closure_4(View, obj3), ];
  const obj8 = {
    style: tmp.rows,
    children: examples1.map((example, index) => {
      const obj = { example, username: length[(_require + index) % length.length], showReason: set.size > 1 };
      return _false(ExampleRow, obj, index);
    })
  };
  examples1 = group.examples;
  items2[1] = closure_3(View, obj8);
  return closure_4(View, obj2);
}
const View = react_native.View;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
let closure_7 = ["glazedgamer", "sprinkles", "donutking"];
let createStyles = createStyles_mod;
let obj = { card: obj2, rule: obj3, section: obj4, caption: obj5, dot: obj6, rows: obj7, row: obj8, blockedRow: { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT }, blockedBar: rect, rowBody: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 } };
obj2 = { gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", paddingHorizontal: nativeDefault.space.PX_12 };
obj6 = { marginHorizontal: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_12 };
({ backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT });
rect = { position: "absolute", top: 0, bottom: 0, start: 0, width: 2, backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 });
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default function ConjurePlanAutomodExamples(automod) {
  let _undefined;
  let items;
  let obj4;
  automod = automod.automod;
  _require = undefined;
  const tmp = closure_8();
  let obj = require("ConjurePlanAutomodOutcomes");
  const result = obj.groupPlanAutomodExamples(automod.examples);
  const tmp2 = _require;
  _require = result;
  const str = automod.rule_name;
  const trimmed = str.trim();
  let tmp7 = null;
  const obj2 = { style: tmp.card, children: items };
  const tmp5 = closure_4;
  if ("" !== trimmed) {
    const obj3 = { style: tmp.rule, children: closure_3(tmp2(5619).Text, obj4) };
    obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
    tmp7 = closure_3(tmp6, obj3);
  }
  items = [
    tmp7,
    result.map((group, index) => {
      let substr;
      const obj = { group, firstIndex: substr.reduce((acc, examples) => acc + examples.examples.length, 0) };
      substr = _undefined.slice(0, index);
      return _false(ExampleSection, obj, group.section);
    })
  ];
  return tmp5(View, obj2);
};
