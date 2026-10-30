// Module ID: 12700
// Function ID: 12701
// Name: ConjurePlanExperiences
// Dependencies: [19, 17, 21, 9707, 12701, 10785, 12408, 11255, 5009, 575, 5619, 8670, 12686, 1114, 3865, 12703, 12704, 12694, 2]
// Exports: default

// Module 12700 (ConjurePlanExperiences)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import AppsIcon2 from "AppsIcon" /* 8670 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import UserCircleIcon from "UserCircleIcon" /* 10785 */;
import ShieldIcon from "ShieldIcon" /* 11255 */;
import RobotIcon from "RobotIcon" /* 12408 */;
import conjurePlanExperienceSurfaces from "conjurePlanExperienceSurfaces" /* 12686 */;
import conjurePlanFormat from "conjurePlanFormat" /* 12694 */;
import WindowTopIcon from "WindowTopIcon" /* 12701 */;
import conjurePlanExperienceSections from "conjurePlanExperienceSections" /* 12703 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 12704 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

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
function InfoBlock(channels) {
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
}
function Chips(labels) {
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
}
function ChannelRow(arg0) {
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
}
function CommandList(commands) {
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
      const Text = Text_Text.Text;
      obj = { name: description.name, size: "text-sm", prefix: obj2.conjurePlanCommandPrefix(description) };
      const ConjurePlanCommandMention = ConjurePlanCommandText.ConjurePlanCommandMention;
      obj2 = conjurePlanFormat;
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
}
function ExperienceBlocks(showsRequirements) {
  let channels;
  let experience;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let proposal;
  ({ proposal, experience } = showsRequirements);
  showsRequirements = showsRequirements.showsRequirements;
  const tmp2 = closure_8();
  if ("frame" === experience.kind) {
    let items;
    obj = conjurePlanExperienceSurfaces;
    const result = obj.conjurePlanExperiencePlacement(proposal, experience);
    if (null == result) {
      items = [];
    } else {
      const items1 = [];
      if (result.channels.length > 0) {
        let obj2 = { channels: true, caption: intl2.formatToPlainString(_modDef3865.w8F5sy, obj4), children: hasOwnProperty(View, obj5) };
        const push = items1.push;
        intl2 = tmp4(1114).intl;
        obj4 = { count: result.channels.length };
        obj5 = {
          style: tmp2.infoRows,
          children: channels.map((description) => {
                  const name = description.name;
                  obj = { name, description: description.description };
                  return closure_1_5(ChannelRow, obj, name);
                })
        };
        channels = result.channels;
        push(hasOwnProperty(InfoBlock, obj2, "channels"));
      }
      const tmp4Result = conjurePlanExperienceSections;
      const result1 = tmp4Result.conjurePlanFrameFeatures(result);
      items = items1;
      if (result1.length > 0) {
        const push2 = items1.push;
        const obj6 = { caption: intl3.string(_modDef3865.MY6UGJ), children: hasOwnProperty(Chips, obj7) };
        intl3 = tmp4(1114).intl;
        obj7 = { labels: result1 };
        push2(hasOwnProperty(InfoBlock, obj6, "features"));
        items = items1;
      }
    }
    items2 = items;
  } else {
    items2 = [];
    const tmp3 = "bot" !== experience.kind && "commands" !== experience.kind;
    if (!tmp3) {
      let items3;
      if (0 === proposal.commands.length) {
        items3 = [];
      } else {
        const obj8 = { caption: intl.string(intl4.t["0hKkS+"]), children: hasOwnProperty(CommandList, obj9) };
        intl = intl4.intl;
        obj9 = { commands: proposal.commands };
        items3 = [hasOwnProperty(InfoBlock, obj8, "commands")];
      }
      items2 = items3;
    }
  }
  let arr5 = items2;
  if (showsRequirements) {
    const items4 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items4, items2, 0);
    const obj3 = conjurePlanExperienceSections;
    const result2 = obj3.conjurePlanRequirementGroups(proposal);
    HermesBuiltin.arraySpread(items4, result2.map((caption) => {
      let obj2;
      obj = { caption: caption.caption, children: closure_1_5(Chips, obj2) };
      const key = caption.key;
      obj2 = { labels: caption.labels };
      return closure_1_5(InfoBlock, obj, key);
    }), arraySpreadResult);
    arr5 = items4;
  }
  let tmp15 = null;
  if (arr5.length > 0) {
    const obj10 = { style: tmp2.infoBlocks, children: arr5 };
    tmp15 = hasOwnProperty(View, obj10);
  }
  return tmp15;
}
function Bullets(arg0) {
  let bullets;
  let commandNames;
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
}
function ComponentSection(arg0) {
  let AppsIcon;
  let BM4Ymz;
  let bullets;
  let commandNames;
  let experience;
  let items;
  let obj5;
  let obj9;
  let preview;
  let proposal;
  let showsRequirements;
  let tmp8Result2;
  ({ experience, bullets, preview, commandNames } = arg0);
  ({ proposal, showsRequirements } = arg0);
  const tmp = closure_8();
  obj = conjurePlanExperienceSections;
  const result = obj.conjurePlanExperienceIsApp(experience);
  if (result) {
    AppsIcon = tmp2(8670).AppsIcon;
  } else {
    AppsIcon = obj[experience.kind];
  }
  const obj2 = { style: tmp.component, children: null };
  const obj3 = { style: tmp.componentHeader, children: items };
  const obj4 = { style: tmp.iconBox, children: hasOwnProperty(AppsIcon, obj5) };
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
  items = [hasOwnProperty(View, obj4), ];
  const Text = tmp2(5619).Text;
  const intl = tmp2(1114).intl;
  const string = intl.string;
  if (result) {
    BM4Ymz = _modDef3865.BM4Ymz;
  } else {
    BM4Ymz = tmp2(12703).CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind];
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
      const Text2 = tmp2(5619).Text;
      obj9 = { text: bullets[0], commandNames, size: "text-md" };
      tmp8Result2 = tmp8(Text2, obj8);
    }
    items1[2] = tmp8Result2;
    const obj10 = { proposal, experience, showsRequirements };
    items1[3] = hasOwnProperty(ExperienceBlocks, obj10);
    obj2.children = items1;
    return metroRequire(View, obj2);
  }
  tmp8Result2 = null;
  if (bullets.length > 0) {
    const obj11 = { bullets, commandNames };
    tmp8Result2 = tmp8(Bullets, obj11);
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
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanExperiences.tsx");

export default function ConjurePlanExperiences(proposal) {
  let appName;
  let commandNames;
  let intro;
  let items;
  let items1;
  proposal = proposal.proposal;
  ({ renderPreview: importDefault, commandNames } = proposal);
  let closure_4;
  ({ appName, intro } = proposal);
  const tmp = closure_8();
  const divider = tmp;
  let experiences = proposal.experiences;
  const conjurePlanDisplayedSections = proposal(commandNames[15]).conjurePlanDisplayedSections;
  proposal(commandNames[15]);
  if (experiences == null) {
    experiences = [];
  }
  const result = conjurePlanDisplayedSections(experiences, commandNames);
  const tmp2Result = proposal(commandNames[15]);
  closure_4 = tmp2Result.conjurePlanRequirementsSectionId(result);
  obj = { children: items1 };
  let obj2 = { style: tmp.intro, children: items };
  items = [closure_5(proposal(commandNames[10]).Heading, { variant: "heading-lg/semibold", color: "text-strong", children: appName }), intro];
  items1 = [
    closure_6(closure_4, obj2),
    result.map((experience) => {
      let items;
      experience = experience.experience;
      const bullets = experience.bullets;
      const Fragment = react.Fragment;
      obj = { children: items };
      items = [, ];
      const obj2 = { style: divider.divider };
      items[0] = hasOwnProperty(View, obj2);
      const obj3 = { experience, bullets, preview: importDefault(experience), proposal, commandNames, showsRequirements: experience.id === closure_4 };
      items[1] = hasOwnProperty(ComponentSection, obj3);
      return metroRequire(Fragment, obj, experience.id);
    })
  ];
  return closure_6(closure_4, obj);
};
