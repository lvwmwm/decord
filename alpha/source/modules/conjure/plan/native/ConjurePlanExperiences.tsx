// Module ID: 12282
// Function ID: 12283
// Name: ConjurePlanExperiences
// Dependencies: [19, 17, 21, 9514, 12283, 10598, 11643, 10733, 5191, 587, 558, 576, 5187, 8506, 12272, 1128, 3883, 12285, 12281, 12265, 2]

// Module 12282 (ConjurePlanExperiences)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import AppsIcon2 from "AppsIcon" /* 8506 */;
import GameControllerIcon from "GameControllerIcon" /* 9514 */;
import UserCircleIcon from "UserCircleIcon" /* 10598 */;
import ShieldIcon from "ShieldIcon" /* 10733 */;
import RobotIcon from "RobotIcon" /* 11643 */;
import conjurePlanExperienceSurfaces from "conjurePlanExperienceSurfaces" /* 12272 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 12281 */;
import WindowTopIcon from "WindowTopIcon" /* 12283 */;
import conjurePlanExperienceSections from "conjurePlanExperienceSections" /* 12285 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let tmp;
const Text_Text = tmp(5187);
const f112530 = (caption) => {
  let obj2;
  obj = { caption: caption.caption, children: closure_1_5(closure_1_10, obj2) };
  const key = caption.key;
  obj2 = { labels: caption.labels };
  return closure_1_5(closure_1_9, obj, key);
};
function frameBlocks(proposal, experience, infoRows) {
  let channels;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let obj6;
  obj = conjurePlanExperienceSurfaces;
  const result = obj.conjurePlanExperiencePlacement(proposal, experience);
  if (null == result) {
    return [];
  } else {
    const items = [];
    if (result.channels.length > 0) {
      const push2 = items.push;
      const obj2 = { channels: true, caption: intl2.formatToPlainString(_modDef3883.w8F5sy, obj3), children: hasOwnProperty(View, obj4) };
      intl2 = tmp(1128).intl;
      obj3 = { count: result.channels.length };
      obj4 = {
        style: infoRows.infoRows,
        children: channels.map((description) => {
              const name = description.name;
              obj = { name, description: description.description };
              return closure_1_5(closure_1_11, obj, name);
            })
      };
      channels = result.channels;
      push2(hasOwnProperty(closure_9, obj2, "channels"));
    }
    const tmpResult = conjurePlanExperienceSections;
    const result1 = tmpResult.conjurePlanFrameFeatures(result);
    if (result1.length > 0) {
      const push = items.push;
      const obj5 = { caption: intl.string(_modDef3883.MY6UGJ), children: hasOwnProperty(closure_10, obj6) };
      intl = tmp(1128).intl;
      obj6 = { labels: result1 };
      push(hasOwnProperty(closure_9, obj5, "features"));
    }
    return items;
  }
}
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { frame: GameControllerIcon.GameControllerIcon, overlay_widget: WindowTopIcon.WindowTopIcon, user_widget: UserCircleIcon.UserCircleIcon, bot: RobotIcon.RobotIcon, commands: RobotIcon.RobotIcon, automod: ShieldIcon.ShieldIcon };
let createStyles = createStyles_mod;
let obj2 = { intro: obj3, divider: obj4, component: obj5, componentHeader: obj6, iconBox: size, preview: obj7, listItem: { flexDirection: "row" }, bullet: obj8, listText: { flex: 1, minWidth: 0 }, infoBlocks: obj9, infoBlock: obj10, channelsBlock: obj11, infoRows: { gap: nativeDefault.space.PX_8 }, infoRow: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 }, infoText: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 }, chips: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, chip: { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
obj3 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { marginVertical: nativeDefault.space.PX_24, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { gap: nativeDefault.space.PX_12 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20 };
obj7 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj8 = { width: nativeDefault.space.PX_24, paddingStart: nativeDefault.space.PX_8 };
obj9 = { gap: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_12 };
obj10 = { gap: nativeDefault.space.PX_8 };
obj11 = { gap: nativeDefault.space.PX_12 };
({ gap: nativeDefault.space.PX_8 });
({ flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 });
({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 });
({ flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 });
({ paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
let closure_8 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function InfoBlock(arg0) {
  let caption;
  let channels;
  let children;
  let items;
  obj = react2;
  const cResult = obj.c(9);
  ({ caption, channels, children } = arg0);
  let channelsBlock = undefined !== channels && channels;
  const tmp4 = closure_8();
  if (channelsBlock) {
    channelsBlock = tmp4.channelsBlock;
  }
  if (cResult[0] === tmp4.infoBlock) {
    let tmp5;
    let tmp6;
    if (cResult[1] === channelsBlock) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== caption) {
      const obj2 = { variant: "text-sm/normal", color: "text-muted", accessibilityRole: "header", children: caption };
      const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[3] = caption;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === children) {
      if (cResult[6] === tmp5) {
        let tmp9;
        if (cResult[7] === tmp6) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const obj3 = { style: tmp5, children: items };
    items = [tmp6, children];
    const tmp12 = metroRequire(View, obj3);
    cResult[5] = children;
    cResult[6] = tmp5;
    cResult[7] = tmp6;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const items1 = [tmp4.infoBlock, channelsBlock];
  cResult[0] = tmp4.infoBlock;
  cResult[1] = channelsBlock;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function InfoBlock(channels) {
  let items1;
  let flag = channels.channels;
  const caption = channels.caption;
  if (flag === undefined) {
    flag = false;
  }
  const children = channels.children;
  const tmp = closure_8();
  const items = [tmp.infoBlock, ];
  const tmp2 = metroRequire;
  const tmp3 = View;
  if (flag) {
    flag = tmp.channelsBlock;
  }
  obj = { style: items, children: items1 };
  items[1] = flag;
  items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", accessibilityRole: "header", children: caption }), children];
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function Chips(labels) {
  let chip;
  let tmp5;
  obj = require("react");
  const cResult = obj.c(8);
  labels = labels.labels;
  const tmp2 = closure_8();
  _require = tmp2;
  if (cResult[0] === labels) {
    let tmp4;
    if (cResult[1] === tmp2.chip) {
      tmp4 = cResult[2];
    }
    if (cResult[5] === tmp2.chips) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    let obj2 = { style: tmp3, children: tmp4 };
    const tmp10 = closure_5(View, obj2);
    cResult[5] = tmp2.chips;
    cResult[6] = tmp4;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  if (cResult[3] !== tmp2.chip) {
    const fn = function c(children) {
      let obj2;
      obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, obj2) };
      obj2 = { variant: "text-sm/normal", color: "text-subtle", children };
      return hasOwnProperty(View, obj, children);
    };
    cResult[3] = tmp2.chip;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = labels.map(tmp5);
  cResult[0] = labels;
  cResult[1] = tmp2.chip;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : (function Chips(labels) {
  labels = labels.labels;
  const tmp = closure_8();
  const chip = tmp;
  obj = {
    style: tmp.chips,
    children: labels.map((children) => {
      let obj2;
      obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, obj2) };
      obj2 = { variant: "text-sm/normal", color: "text-subtle", children };
      return hasOwnProperty(View, obj, children);
    })
  };
  return closure_5(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(arg0) {
  let description;
  let first;
  let items;
  let items1;
  let name;
  let tmp10;
  let tmp14;
  let tmp17;
  obj = react2;
  const cResult = obj.c(16);
  ({ name, description } = arg0);
  const tmp4 = closure_8();
  const combined = "" + name + ", " + description;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    const AppsIcon = tmp(8506).AppsIcon;
    const tmp9 = hasOwnProperty(AppsIcon, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconBox) {
    const obj3 = { style: tmp4.iconBox, children: first };
    const tmp13 = hasOwnProperty(View, obj3);
    cResult[1] = tmp4.iconBox;
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== name) {
    const obj4 = { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: name };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[3] = name;
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== description) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[5] = description;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp4.infoText) {
    if (cResult[8] === tmp14) {
      let tmp20;
      if (cResult[9] === tmp17) {
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp4.infoRow) {
        if (cResult[12] === combined) {
          if (cResult[13] === tmp10) {
            let tmp22;
            if (cResult[14] === tmp20) {
              tmp22 = cResult[15];
            }
            return tmp22;
          }
        }
      }
      const obj6 = { style: tmp4.infoRow, accessible: true, accessibilityLabel: combined, children: items };
      items = [tmp10, tmp20];
      const tmp25 = metroRequire(View, obj6);
      cResult[11] = tmp4.infoRow;
      cResult[12] = combined;
      cResult[13] = tmp10;
      cResult[14] = tmp20;
      cResult[15] = tmp25;
      tmp22 = tmp25;
    }
  }
  const obj7 = { style: tmp4.infoText, children: items1 };
  items1 = [tmp14, tmp17];
  const tmp21 = metroRequire(View, obj7);
  cResult[7] = tmp4.infoText;
  cResult[8] = tmp14;
  cResult[9] = tmp17;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : (function ChannelRow(arg0) {
  let AppsIcon;
  let description;
  let items;
  let items1;
  let name;
  let obj3;
  ({ name, description } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.infoRow, accessible: true, accessibilityLabel: "" + name + ", " + description, children: items };
  const obj2 = { style: tmp.iconBox, children: hasOwnProperty(AppsIcon, obj3) };
  obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
  AppsIcon = AppsIcon2.AppsIcon;
  items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.infoText, children: items1 };
  items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: name }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: description })];
  items[1] = metroRequire(View, obj4);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandList(commands) {
  let tmp3;
  obj = react2;
  const cResult = obj.c(6);
  commands = commands.commands;
  const tmp2 = closure_8();
  const infoRows = tmp2.infoRows;
  if (cResult[0] !== commands) {
    let tmp5;
    const _Symbol = Symbol;
    const str = "react.memo_cache_sentinel";
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(description, arg1) {
        let obj2;
        let str2;
        if (description.description != null) {
          str2 = str.trim();
        }
        if (str2 == null) {
          str2 = "";
        }
        const Text = require("Text/Text").Text;
        obj = { name: description.name, size: "text-sm", prefix: obj2.conjurePlanCommandPrefix(description) };
        const ConjurePlanCommandMention = require("ConjurePlanCommandText").ConjurePlanCommandMention;
        obj2 = require("conjurePlanFormat");
        const children = [closure_1_5(ConjurePlanCommandMention, obj), ];
        let combined = null;
        const tmp = closure_1_6;
        if ("" !== str2) {
          const _HermesInternal = HermesInternal;
          combined = " " + str2;
        }
        children[1] = combined;
        return tmp(Text, { variant: "text-sm/normal", color: "text-subtle", children }, arg1);
      };
      cResult[2] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[2];
    }
    const mapped = commands.map(tmp5);
    cResult[0] = commands;
    cResult[1] = mapped;
    tmp3 = mapped;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[3] === tmp2.infoRows) {
    let tmp7;
    if (cResult[4] === tmp3) {
      tmp7 = cResult[5];
    }
    return tmp7;
  }
  const tmp8 = hasOwnProperty(View, { style: infoRows, children: tmp3 });
  cResult[3] = tmp2.infoRows;
  cResult[4] = tmp3;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function CommandList(commands) {
  commands = commands.commands;
  obj = {
    style: closure_8().infoRows,
    children: commands.map((description, index) => {
      let obj2;
      let str2;
      if (description.description != null) {
        str2 = str.trim();
      }
      if (str2 == null) {
        str2 = "";
      }
      const Text = require("Text/Text").Text;
      obj = { name: description.name, size: "text-sm", prefix: obj2.conjurePlanCommandPrefix(description) };
      const ConjurePlanCommandMention = require("ConjurePlanCommandText").ConjurePlanCommandMention;
      obj2 = require("conjurePlanFormat");
      const children = [closure_1_5(ConjurePlanCommandMention, obj), ];
      let combined = null;
      const tmp = closure_1_6;
      if ("" !== str2) {
        const _HermesInternal = HermesInternal;
        combined = " " + str2;
      }
      children[1] = combined;
      return tmp(Text, { variant: "text-sm/normal", color: "text-subtle", children }, index);
    })
  };
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExperienceBlocks(arg0) {
  let experience;
  let first;
  let intl;
  let obj3;
  let proposal;
  obj = react2;
  const cResult = obj.c(10);
  ({ proposal, experience } = arg0);
  const tmp5 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if ("frame" === experience.kind) {
    if (cResult[1] === experience) {
      if (cResult[2] === proposal) {
        let tmp16;
        if (cResult[3] === tmp5) {
          tmp16 = cResult[4];
        }
        first = tmp16;
      }
    }
    const tmp18 = frameBlocks(proposal, experience, tmp5);
    cResult[1] = experience;
    cResult[2] = proposal;
    cResult[3] = tmp5;
    cResult[4] = tmp18;
    tmp16 = tmp18;
  } else {
    const tmp6 = "bot" !== experience.kind && "commands" !== experience.kind;
    if (!tmp6) {
      let tmp7;
      if (cResult[5] !== proposal) {
        let items2;
        if (proposal.commands.length > 0) {
          const obj2 = { caption: intl.string(intl3.t["0hKkS+"]), children: hasOwnProperty(closure_13, obj3) };
          intl = tmp2(1128).intl;
          obj3 = { commands: proposal.commands };
          const items1 = [hasOwnProperty(closure_9, obj2, "commands")];
          items2 = items1;
        } else {
          items2 = [];
        }
        const items3 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items3, items2, 0);
        const tmp2Result = conjurePlanExperienceSections;
        const result = tmp2Result.conjurePlanRequirementGroups(proposal);
        HermesBuiltin.arraySpread(items3, result.map(f112530), arraySpreadResult);
        cResult[5] = proposal;
        cResult[6] = items3;
        tmp7 = items3;
      } else {
        tmp7 = cResult[6];
      }
      first = tmp7;
    }
  }
  if (cResult[7] === first) {
    let tmp19;
    if (cResult[8] === tmp5) {
      tmp19 = cResult[9];
    }
    return tmp19;
  }
  let tmp20 = null;
  if (first.length > 0) {
    const obj4 = { style: tmp5.infoBlocks, children: first };
    tmp20 = hasOwnProperty(View, obj4);
  }
  cResult[7] = first;
  cResult[8] = tmp5;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : (function ExperienceBlocks(arg0) {
  let experience;
  let intl;
  let items;
  let obj2;
  let proposal;
  ({ proposal, experience } = arg0);
  const tmp2 = closure_8();
  if ("frame" === experience.kind) {
    items = frameBlocks(proposal, experience, tmp2);
  } else {
    items = [];
    const tmp3 = "bot" !== experience.kind && "commands" !== experience.kind;
    if (!tmp3) {
      let items2;
      if (proposal.commands.length > 0) {
        obj = { caption: intl.string(intl3.t["0hKkS+"]), children: hasOwnProperty(closure_13, obj2) };
        intl = intl3.intl;
        obj2 = { commands: proposal.commands };
        const items1 = [hasOwnProperty(closure_9, obj, "commands")];
        items2 = items1;
      } else {
        items2 = [];
      }
      const items3 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items3, items2, 0);
      const obj3 = conjurePlanExperienceSections;
      const result = obj3.conjurePlanRequirementGroups(proposal);
      HermesBuiltin.arraySpread(items3, result.map(f112530), arraySpreadResult);
      items = items3;
    }
  }
  let tmp17 = null;
  if (items.length > 0) {
    const obj4 = { style: tmp2.infoBlocks, children: items };
    tmp17 = hasOwnProperty(View, obj4);
  }
  return tmp17;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function Bullets(arg0) {
  let bullets;
  let commandNames;
  let tmp3;
  obj = commandNames(576);
  const cResult = obj.c(9);
  ({ bullets, commandNames } = arg0);
  const tmp2 = closure_8();
  let closure_1 = tmp2;
  if (cResult[0] === bullets) {
    if (cResult[1] === commandNames) {
      let tmp6;
      if (cResult[2] === tmp2) {
        tmp3 = cResult[3];
      }
      if (cResult[7] !== tmp3) {
        let obj2 = { children: tmp3 };
        const tmp9 = closure_5(View, obj2);
        cResult[7] = tmp3;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[8];
      }
      return tmp6;
    }
  }
  if (cResult[4] === commandNames) {
    let tmp4;
    if (cResult[5] === tmp2) {
      tmp4 = cResult[6];
    }
    const mapped = bullets.map(tmp4);
    cResult[0] = bullets;
    cResult[1] = commandNames;
    cResult[2] = tmp2;
    cResult[3] = mapped;
    tmp3 = mapped;
  }
  const fn = function s(text, arg1) {
    let items;
    let obj4;
    obj = { style: closure_1.listItem, children: items };
    items = [, ];
    const obj2 = { variant: "text-md/normal", color: "text-default", style: closure_1.bullet, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: "\u2022" };
    items[0] = hasOwnProperty(Text_Text.Text, obj2);
    const obj3 = { variant: "text-md/normal", color: "text-default", style: closure_1.listText, children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj4) };
    const Text = Text_Text.Text;
    obj4 = { text, commandNames, size: "text-md" };
    items[1] = hasOwnProperty(Text, obj3);
    return metroRequire(View, obj, arg1);
  };
  cResult[4] = commandNames;
  cResult[5] = tmp2;
  cResult[6] = fn;
  tmp4 = fn;
}) : (function Bullets(arg0) {
  let bullets;
  let commandNames;
  let require;
  ({ bullets, commandNames: require } = arg0);
  let closure_1 = closure_8();
  obj = {
    children: bullets.map((text, index) => {
      let items;
      let obj4;
      obj = { style: closure_1.listItem, children: items };
      items = [, ];
      const obj2 = { variant: "text-md/normal", color: "text-default", style: closure_1.bullet, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: "\u2022" };
      items[0] = hasOwnProperty(Text_Text.Text, obj2);
      const obj3 = { variant: "text-md/normal", color: "text-default", style: closure_1.listText, children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj4) };
      const Text = Text_Text.Text;
      obj4 = { text, commandNames: require, size: "text-md" };
      items[1] = hasOwnProperty(Text, obj3);
      return metroRequire(View, obj, index);
    })
  };
  return closure_5(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentSection(arg0) {
  let AppsIcon;
  let bullets;
  let commandNames;
  let component;
  let componentHeader;
  let experience;
  let items;
  let items1;
  let obj7;
  let preview;
  let proposal;
  let tmp5;
  let tmp8;
  obj = react2;
  const cResult = obj.c(32);
  ({ experience, bullets, preview, proposal, commandNames } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== experience) {
    const tmpResult = conjurePlanExperienceSections;
    const result = tmpResult.conjurePlanExperienceIsApp(experience);
    cResult[0] = experience;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  if (tmp5) {
    AppsIcon = tmp(8506).AppsIcon;
  } else {
    AppsIcon = obj[experience.kind];
  }
  ({ component, componentHeader } = tmp4);
  if (cResult[2] !== AppsIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    const tmp11 = hasOwnProperty(AppsIcon, obj2);
    cResult[2] = AppsIcon;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.iconBox) {
    let tmp12;
    let BM4Ymz;
    if (cResult[5] === tmp8) {
      tmp12 = cResult[6];
    }
    if (cResult[7] === experience.kind) {
      let tmp14;
      let tmp17;
      if (cResult[8] === tmp5) {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp14) {
        const obj3 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "header", children: tmp14 };
        const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[10] = tmp14;
        cResult[11] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp4.componentHeader) {
        if (cResult[13] === tmp12) {
          let tmp20;
          if (cResult[14] === tmp17) {
            tmp20 = cResult[15];
          }
          if (cResult[16] === preview) {
            let tmp24;
            let tmp28;
            let tmp29;
            if (cResult[17] === tmp4.preview) {
              tmp24 = cResult[18];
            }
            if (cResult[19] === bullets) {
              if (cResult[20] === commandNames) {
                if (cResult[21] === experience.kind) {
                  tmp28 = cResult[22];
                }
                if (cResult[23] === experience) {
                  let tmp33;
                  if (cResult[24] === proposal) {
                    tmp33 = cResult[25];
                  }
                  if (cResult[26] === tmp4.component) {
                    if (cResult[27] === tmp28) {
                      if (cResult[28] === tmp33) {
                        if (cResult[29] === tmp20) {
                          let tmp37;
                          if (cResult[30] === tmp24) {
                            tmp37 = cResult[31];
                          }
                          return tmp37;
                        }
                      }
                    }
                  }
                  const obj4 = { style: component, children: items };
                  items = [tmp20, tmp24, tmp28, tmp33];
                  const tmp40 = metroRequire(View, obj4);
                  cResult[26] = tmp4.component;
                  cResult[27] = tmp28;
                  cResult[28] = tmp33;
                  cResult[29] = tmp20;
                  cResult[30] = tmp24;
                  cResult[31] = tmp40;
                  tmp37 = tmp40;
                }
                const obj5 = { proposal, experience };
                const tmp36 = hasOwnProperty(closure_14, obj5);
                cResult[23] = experience;
                cResult[24] = proposal;
                cResult[25] = tmp36;
                tmp33 = tmp36;
              }
            }
            if ("automod" === experience.kind) {
              if (1 === bullets.length) {
                const obj6 = { variant: "text-md/normal", color: "text-default", children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj7) };
                const Text = tmp(5187).Text;
                obj7 = { text: bullets[0], commandNames, size: "text-md" };
                tmp29 = hasOwnProperty(Text, obj6);
              }
              cResult[19] = bullets;
              cResult[20] = commandNames;
              cResult[21] = experience.kind;
              cResult[22] = tmp29;
              tmp28 = tmp29;
            }
            tmp29 = null;
            if (bullets.length > 0) {
              const obj8 = { bullets, commandNames };
              tmp29 = hasOwnProperty(closure_15, obj8);
            }
          }
          let tmp25 = null;
          if (null != preview) {
            const obj9 = { style: tmp4.preview, children: preview };
            tmp25 = hasOwnProperty(View, obj9);
          }
          cResult[16] = preview;
          cResult[17] = tmp4.preview;
          cResult[18] = tmp25;
          tmp24 = tmp25;
        }
      }
      const obj10 = { style: componentHeader, children: items1 };
      items1 = [tmp12, tmp17];
      const tmp23 = metroRequire(View, obj10);
      cResult[12] = tmp4.componentHeader;
      cResult[13] = tmp12;
      cResult[14] = tmp17;
      cResult[15] = tmp23;
      tmp20 = tmp23;
    }
    const intl = tmp(1128).intl;
    const string = intl.string;
    if (tmp5) {
      BM4Ymz = _modDef3883.BM4Ymz;
    } else {
      BM4Ymz = tmp(12285).CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind];
    }
    const stringResult = string(BM4Ymz);
    cResult[7] = experience.kind;
    cResult[8] = tmp5;
    cResult[9] = stringResult;
    tmp14 = stringResult;
  }
  const obj11 = { style: tmp4.iconBox, children: tmp8 };
  const tmp13 = hasOwnProperty(View, obj11);
  cResult[4] = tmp4.iconBox;
  cResult[5] = tmp8;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function ComponentSection(proposal) {
  let AppsIcon;
  let BM4Ymz;
  let bullets;
  let commandNames;
  let experience;
  let items;
  let obj5;
  let obj9;
  let preview;
  let tmp8Result2;
  ({ experience, bullets, preview, commandNames } = proposal);
  proposal = proposal.proposal;
  const tmp = closure_8();
  obj = conjurePlanExperienceSections;
  const result = obj.conjurePlanExperienceIsApp(experience);
  if (result) {
    AppsIcon = tmp2(8506).AppsIcon;
  } else {
    AppsIcon = obj[experience.kind];
  }
  const obj2 = { style: tmp.component, children: null };
  const obj3 = { style: tmp.componentHeader, children: items };
  const obj4 = { style: tmp.iconBox, children: hasOwnProperty(AppsIcon, obj5) };
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
  items = [hasOwnProperty(View, obj4), ];
  const Text = tmp2(5187).Text;
  const intl = tmp2(1128).intl;
  const string = intl.string;
  if (result) {
    BM4Ymz = _modDef3883.BM4Ymz;
  } else {
    BM4Ymz = tmp2(12285).CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind];
  }
  const obj6 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "header", children: string(BM4Ymz) };
  items[1] = hasOwnProperty(Text, obj6);
  const items1 = [metroRequire(View, obj3), , , ];
  let tmp8Result = null;
  if (null != preview) {
    const obj7 = { style: tmp.preview, children: preview };
    tmp8Result = tmp8(tmp7, obj7);
  }
  items1[1] = tmp8Result;
  if ("automod" === experience.kind) {
    if (1 === bullets.length) {
      const obj8 = { variant: "text-md/normal", color: "text-default", children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj9) };
      const Text2 = tmp2(5187).Text;
      obj9 = { text: bullets[0], commandNames, size: "text-md" };
      tmp8Result2 = tmp8(Text2, obj8);
    }
    items1[2] = tmp8Result2;
    const obj10 = { proposal, experience };
    items1[3] = hasOwnProperty(closure_14, obj10);
    obj2.children = items1;
    return metroRequire(View, obj2);
  }
  tmp8Result2 = null;
  if (bullets.length > 0) {
    const obj11 = { bullets, commandNames };
    tmp8Result2 = tmp8(closure_15, obj11);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanExperiences(renderPreview) {
  let appName;
  let commandNames;
  let intro;
  let items;
  let items1;
  let proposal;
  let tmp5;
  obj = proposal(commandNames[11]);
  const cResult = obj.c(14);
  ({ appName, intro, proposal } = renderPreview);
  renderPreview = renderPreview.renderPreview;
  commandNames = renderPreview.commandNames;
  const tmp4 = closure_8();
  const divider = tmp4;
  if (cResult[0] !== appName) {
    let obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: appName };
    const tmp7 = closure_5(proposal(commandNames[12]).Heading, obj2);
    cResult[0] = appName;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === intro) {
    if (cResult[3] === tmp4.intro) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === commandNames) {
        if (cResult[7] === proposal) {
          if (cResult[8] === renderPreview) {
            let tmp10;
            if (cResult[9] === tmp4.divider) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === tmp8) {
              let tmp14;
              if (cResult[12] === tmp10) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
            let obj3 = { children: items };
            items = [tmp8, tmp10];
            const tmp17 = closure_6(View, obj3);
            cResult[11] = tmp8;
            cResult[12] = tmp10;
            cResult[13] = tmp17;
            tmp14 = tmp17;
          }
        }
      }
      let experiences = proposal.experiences;
      const conjurePlanDisplayedSections = proposal(commandNames[17]).conjurePlanDisplayedSections;
      proposal(commandNames[17]);
      if (experiences == null) {
        experiences = [];
      }
      const result = conjurePlanDisplayedSections(experiences, commandNames);
      const mapped = result.map((experience) => {
        let items;
        experience = experience.experience;
        const bullets = experience.bullets;
        const Fragment = react.Fragment;
        obj = { children: items };
        items = [, ];
        const obj2 = { style: divider.divider };
        items[0] = hasOwnProperty(View, obj2);
        const obj3 = { experience, bullets, preview: renderPreview(experience), proposal, commandNames };
        items[1] = hasOwnProperty(closure_16, obj3);
        return metroRequire(Fragment, obj, experience.id);
      });
      cResult[6] = commandNames;
      cResult[7] = proposal;
      cResult[8] = renderPreview;
      cResult[9] = tmp4.divider;
      cResult[10] = mapped;
      tmp10 = mapped;
    }
  }
  const obj4 = { style: tmp4.intro, children: items1 };
  items1 = [tmp5, intro];
  const tmp9 = closure_6(View, obj4);
  cResult[2] = intro;
  cResult[3] = tmp4.intro;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function ConjurePlanExperiences(proposal) {
  let appName;
  let commandNames;
  let intro;
  let items;
  proposal = proposal.proposal;
  ({ renderPreview: importDefault, commandNames } = proposal);
  ({ appName, intro } = proposal);
  const tmp = closure_8();
  const divider = tmp;
  obj = { style: tmp.intro, children: items };
  items = [closure_5(proposal(commandNames[12]).Heading, { variant: "heading-lg/semibold", color: "text-strong", children: appName }), intro];
  const items1 = [closure_6(View, obj), ];
  let experiences = proposal.experiences;
  const conjurePlanDisplayedSections = proposal(commandNames[17]).conjurePlanDisplayedSections;
  proposal(commandNames[17]);
  const tmp2 = closure_6;
  const tmp3 = View;
  if (experiences == null) {
    experiences = [];
  }
  let obj2 = { children: items1 };
  const result = conjurePlanDisplayedSections(experiences, commandNames);
  items1[1] = result.map((experience) => {
    let items;
    experience = experience.experience;
    const bullets = experience.bullets;
    const Fragment = react.Fragment;
    obj = { children: items };
    items = [, ];
    const obj2 = { style: divider.divider };
    items[0] = hasOwnProperty(View, obj2);
    const obj3 = { experience, bullets, preview: importDefault(experience), proposal, commandNames };
    items[1] = hasOwnProperty(closure_16, obj3);
    return metroRequire(Fragment, obj, experience.id);
  });
  return tmp2(tmp3, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanExperiences.tsx");

export default tmp4;
