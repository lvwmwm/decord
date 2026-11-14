// Module ID: 13774
// Function ID: 13775
// Name: ConjurePublishEvalCard
// Dependencies: [19, 17, 21, 5306, 575, 5378, 10183, 10181, 13164, 5929, 13753, 1113, 4131, 7859, 13166, 5936, 2]
// Exports: default

// Module 13774 (ConjurePublishEvalCard)
import nativeDefault from "native" /* 575 */;
import _modDef4131 from "module_4131" /* 4131 */;
import react_native from "react-native" /* 5378 */;
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ScoreStar(score) {
  let StarOutlineIcon;
  let closure_129_1;
  let disabled;
  let obj4;
  let tmp2Result;
  let value;
  score = score.score;
  ({ value, disabled, onChange: closure_129_1 } = score);
  const dimension = score.dimension;
  const tmp = closure_7();
  const obj = react_native;
  const obj2 = { selected: value === score, disabled };
  const radioA11yNative = obj.useRadioA11yNative(obj2);
  if (null != value && score <= value) {
    StarOutlineIcon = tmp2(10183).StarIcon;
  } else {
    StarOutlineIcon = tmp2(10181).StarOutlineIcon;
  }
  const obj3 = {
    style: tmp.star,
    accessibilityLabel: tmp2Result.conjurePublishEvalScoreLabel(dimension, score),
    disabled,
    hitSlop: nativeDefault.space.PX_4,
    onPress() {
      return closure_1_1(score);
    },
    children: hasOwnProperty(StarOutlineIcon, obj4)
  };
  const merged = Object.assign(radioA11yNative);
  tmp2Result = conjurePublishEval;
  const colors = nativeDefault.colors;
  obj4 = { size: "md", color: null != value && score <= value ? colors.ICON_BRAND : colors.ICON_MUTED };
  return hasOwnProperty(_false, obj3);
}
function ScoreRow(dimension) {
  let closure_3;
  let disabled;
  let items;
  let onChange;
  let prop;
  let value;
  dimension = dimension.dimension;
  ({ value: importDefault, disabled: dependencyMap, onChange: closure_3 } = dimension);
  const tmp = closure_7();
  let obj = dimension(13164);
  const result = obj.conjurePublishEvalDimensionLabel(dimension);
  const obj2 = { style: tmp.scoreRow, children: items };
  items = [closure_5(dimension(5929).Text, { variant: "body-sm/medium", color: "text-default", children: result }), ];
  const obj3 = {
    style: tmp.stars,
    accessibilityRole: "radiogroup",
    accessibilityLabel: result,
    children: prop.map((score) => {
      const obj = { dimension, score, value: importDefault, disabled: dependencyMap, onChange };
      return hasOwnProperty(ScoreStar, obj, score);
    })
  };
  prop = dimension(13753).CONJURE_PUBLISH_RATINGS;
  items[1] = closure_5(closure_4, obj3);
  return closure_6(closure_4, obj2);
}
({ Pressable: c3, View: closure_4 } = react_native2);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, header: obj3, scores: obj4, scoreRow: obj5, stars: { flexDirection: "row" }, star: obj6 };
obj2 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj6 = { padding: nativeDefault.space.PX_6 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/publish_eval/native/ConjurePublishEvalCard.tsx");

export default function ConjurePublishEvalCard(pending) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let conjurePublishEvalForm;
  pending = pending.pending;
  const tmp = closure_7();
  let obj = conjurePublishEvalForm(13164);
  conjurePublishEvalForm = obj.useConjurePublishEvalForm(pending);
  const obj2 = { style: tmp.card, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { variant: "heading-md/semibold", children: intl.string(_modDef4131.GVLtfq) };
  const Heading = conjurePublishEvalForm(5929).Heading;
  intl = conjurePublishEvalForm(1113).intl;
  items = [closure_5(Heading, obj4), ];
  const obj5 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(_modDef4131["Zj4E+A"]) };
  const Text = conjurePublishEvalForm(5929).Text;
  intl2 = conjurePublishEvalForm(1113).intl;
  items[1] = closure_5(Text, obj5);
  items1 = [closure_6(closure_4, obj3), , , , ];
  const dimensions = conjurePublishEvalForm.dimensions;
  const obj6 = { style: tmp.scores, children: items2 };
  items2 = [
    dimensions.map((dimension) => {
      conjurePublishEvalForm = dimension;
      const obj = {
        dimension,
        value: conjurePublishEvalForm.scores[dimension],
        disabled: conjurePublishEvalForm.submitting,
        onChange(arg0) {
          return conjurePublishEvalForm.setScore(dimension, arg0);
        }
      };
      return closure_1_5(ScoreRow, obj, dimension);
    }),

  ];
  const obj7 = { variant: "body-xs/normal", color: "text-muted", children: intl3.string(_modDef4131.BvaFUc) };
  const Text2 = conjurePublishEvalForm(5929).Text;
  intl3 = conjurePublishEvalForm(1113).intl;
  items2[1] = closure_5(Text2, obj7);
  items1[1] = closure_6(closure_4, obj6);
  const obj9 = { label: intl4.string(_modDef4131.d28g0o), placeholder: intl5.string(_modDef4131.EBB7lL), maxLength: conjurePublishEvalForm(13166).CONJURE_PUBLISH_EVAL_FEEDBACK_MAX_LENGTH, value: null, onChange: null, disabled: null };
  const TextArea = conjurePublishEvalForm(7859).TextArea;
  intl4 = conjurePublishEvalForm(1113).intl;
  intl5 = conjurePublishEvalForm(1113).intl;
  ({ feedback: obj8.value, setFeedback: obj8.onChange, submitting: obj8.disabled } = conjurePublishEvalForm);
  items1[2] = closure_5(TextArea, obj9);
  let tmp7Result = null;
  const tmp5 = closure_6;
  const tmp6 = closure_4;
  if (null != conjurePublishEvalForm.error) {
    const obj19 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: conjurePublishEvalForm.error };
    tmp7Result = tmp7(tmp2(5929).Text, obj19);
  }
  items1[3] = tmp7Result;
  const obj20 = { variant: "primary", text: intl6.string(_modDef4131.CYQood), disabled: !conjurePublishEvalForm.canSubmit, loading: null, onPress: null };
  const Button = tmp2(5936).Button;
  intl6 = tmp2(1113).intl;
  ({ submitting: obj10.loading, submit: obj10.onPress } = conjurePublishEvalForm);
  items1[4] = closure_5(Button, obj20);
  return tmp5(tmp6, obj2);
};
