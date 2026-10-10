// Module ID: 17151
// Function ID: 17152
// Name: ConjurePlanTypeTags
// Dependencies: [19, 17, 21, 6946, 8233, 8228, 17152, 9211, 17154, 10408, 11433, 10619, 5092, 587, 558, 576, 5088, 1126, 17143, 2]

// Module 17151 (ConjurePlanTypeTags)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8228 */;
import AppsIcon from "AppsIcon" /* 8233 */;
import GameControllerIcon from "GameControllerIcon" /* 9211 */;
import ShieldIcon from "ShieldIcon" /* 10408 */;
import SlashBoxIcon from "SlashBoxIcon" /* 10619 */;
import RobotIcon from "RobotIcon" /* 11433 */;
import conjurePlanTags from "conjurePlanTags" /* 17143 */;
import ActivitiesIcon from "ActivitiesIcon" /* 17152 */;
import WidgetsIcon from "WidgetsIcon" /* 17154 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {};
obj[ConjureTypes.ConjureSupportedSurface.APP_CHANNEL] = AppsIcon.AppsIcon;
obj[ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL] = VoiceNormalIcon.VoiceNormalIcon;
obj[ConjureTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj[ConjureTypes.ConjureSupportedSurface.OVERLAY] = GameControllerIcon.GameControllerIcon;
obj[ConjureTypes.ConjureSupportedSurface.PROFILE_WIDGET] = WidgetsIcon.WidgetsIcon;
obj[ConjureTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
obj[ConjureTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj[ConjureTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = SlashBoxIcon.SlashBoxIcon;
let createStyles = createStyles_mod;
let obj2 = { tags: obj3, tag: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
obj3 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
let closure_7 = createStyles(obj2);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanTypeTags(tags) {
  let tag;
  let tmp5;
  let tmp6;
  obj = require("react");
  const cResult = obj.c(9);
  tags = tags.tags;
  const tmp2 = closure_7();
  _require = tmp2;
  if (cResult[0] === tmp2.tag) {
    let tmp4;
    if (cResult[1] === tags) {
      tmp4 = cResult[2];
    }
    if (cResult[6] === tmp2.tags) {
      let tmp8;
      if (cResult[7] === tmp4) {
        tmp8 = cResult[8];
      }
      return tmp8;
    }
    let obj2 = { style: tmp3, children: tmp4 };
    const tmp11 = closure_4(View, obj2);
    cResult[6] = tmp2.tags;
    cResult[7] = tmp4;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(arg0) {
      return arg0 in obj;
    };
    cResult[3] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== tmp2.tag) {
    class S {
      constructor(arg0) {
        let intl;
        let items;
        obj = { style: tag.tag, children: items };
        items = [, ];
        const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
        items[0] = React3(obj[arg0], obj2);
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(conjurePlanTags.CONJURE_PLAN_SURFACE_LABELS[arg0]) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(View, obj, arg0);
      }
    }
    cResult[4] = tmp2.tag;
    cResult[5] = S;
    tmp6 = S;
  } else {
    class S {
      constructor(arg0) {
        let intl;
        let items;
        obj = { style: tag.tag, children: items };
        items = [, ];
        const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
        items[0] = React3(obj[arg0], obj2);
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(conjurePlanTags.CONJURE_PLAN_SURFACE_LABELS[arg0]) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(View, obj, arg0);
      }
    }
  }
  const found = tags.filter(tmp5);
  const mapped = found.map(tmp6);
  cResult[0] = tmp2.tag;
  cResult[1] = tags;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : (function ConjurePlanTypeTags(tags) {
  let found;
  tags = tags.tags;
  const tmp = closure_7();
  const tag = tmp;
  obj = {
    style: tmp.tags,
    children: found.map((item) => {
      let intl;
      let items;
      obj = { style: tag.tag, children: items };
      items = [, ];
      const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      items[0] = React3(obj[item], obj2);
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(conjurePlanTags.CONJURE_PLAN_SURFACE_LABELS[item]) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj, item);
    })
  };
  found = tags.filter((item) => item in obj);
  return closure_4(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanTypeTags.tsx");

export default tmp5;
