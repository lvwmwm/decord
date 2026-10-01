// Module ID: 16334
// Function ID: 16335
// Name: VibegrationsNativeChat
// Dependencies: [32, 19, 17, 1980, 12643, 12642, 21, 576, 16335, 672, 4836, 16337, 16343, 1115, 3715, 5279, 4832, 4823, 16344, 5281, 5919, 4525, 16349, 16350, 16351, 16352, 1364, 5976, 5293, 16376, 16238, 16341, 16338, 16342, 15561, 16377, 16378, 16379, 16380, 16381, 16383, 16386, 504, 1613, 16387, 16388, 16389, 16390, 16391, 16392, 16252, 16393, 12446, 16394, 8179, 16397, 16398, 16399, 16403, 2]
// Exports: default

// Module 16334 (VibegrationsNativeChat)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import intl7 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import _modDef3715 from "module_3715" /* 3715 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import Card_Card from "Card/Card" /* 5919 */;
import _modDef5976 from "module_5976" /* 5976 */;
import VibegrationsChatStore2 from "VibegrationsChatStore" /* 12643 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16238 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16335 */;
import VibegrationsRepliedMessage from "VibegrationsRepliedMessage" /* 16337 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16341 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16343 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 16344 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16349 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16350 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16352 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16376 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16380 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16388 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16389 */;
import VibegrationsRepliedMessage2 from "VibegrationsRepliedMessage" /* 16392 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 12642 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VibegrationsNativeStatusLineDefault = VibegrationsNativeStatusLine;
const VibegrationsChatStore = VibegrationsChatStore2;
let dependencyMap, map, nativeEvent, set, viewableItems;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
function PlanDesign(arg0) {
  let design;
  let intl2;
  let obj4;
  let obj6;
  let projectId;
  ({ projectId, design } = arg0);
  const tmp = closure_24();
  const obj = useVibegrationsPlanDesign;
  const vibegrationsPlanDesign = obj.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    let tmp9Result;
    const intl = tmp2(1115).intl;
    const stringResult = intl.string(_modDef3715.FW8UcU);
    const Stack = tmp2(5279).Stack;
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3715["9W8SbY"]) };
    const Text = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items = [closure_17(Text, obj2), ];
    const tmp8 = authStore4;
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: closure_17(hasOwnProperty, obj4) };
      obj4 = { size: "small", accessibilityLabel: stringResult };
      tmp9Result = tmp9(metroImportAll, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp.designImage, resizeMode: "cover", onError: tmp5, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult };
      obj6 = { uri: src };
      tmp9Result = tmp9(metroRequire, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: items };
    items[1] = tmp9Result;
    return tmp8(Stack, obj7);
  }
}
function ProposalCard(projectId) {
  let Button;
  let Stack;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj13;
  let onApprove;
  let proposal;
  let stringResult;
  ({ proposal, onApprove } = projectId);
  projectId = projectId.projectId;
  const str = proposal.summary;
  const tmp = closure_24();
  const trimmed = str.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  let obj = { style: tmp.surface, children: authStore4(Stack, { direction: "vertical", spacing: 8, children: items }) };
  Stack = Stack_Stack.Stack;
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: intl.string(_modDef3715["60htw+"]) };
  let Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_17(Text, obj2), , , , , , ];
  const Text2 = Text_Text.Text;
  const tmp4 = metroImportAll;
  if ("" === trimmed) {
    const intl2 = tmp6(1115).intl;
    stringResult = intl2.string(tmp8(3715).IHCafX);
  } else {
    const tmp8Result = MarkupUtilsDefault;
    stringResult = tmp8Result.parse(trimmed, true, tmp6(16344).VIBEGRATIONS_MARKUP_OPTIONS);
  }
  items[1] = closure_17(Text2, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj3 = { projectId, design: proposal.design_image };
    tmp3Result = tmp3(PlanDesign, obj3);
  }
  items[2] = tmp3Result;
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj4 = { direction: "vertical", spacing: 4, children: items1 };
    const Stack2 = tmp6(5279).Stack;
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: intl3.string(_modDef3715.KLyB8Y) };
    const Text3 = tmp6(4832).Text;
    intl3 = tmp6(1115).intl;
    items1 = [closure_17(Text3, obj5), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => {
      const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
      const Text = Text_Text.Text;
      return closure_1_17(Text, obj, index);
    });
    tmp5Result = tmp5(Stack2, obj4);
  }
  items[3] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj6 = { direction: "vertical", spacing: 4, children: items2 };
    const Stack3 = tmp6(5279).Stack;
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: intl4.string(_modDef3715.ieqTtP) };
    const Text4 = tmp6(4832).Text;
    intl4 = tmp6(1115).intl;
    items2 = [closure_17(Text4, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    const Text5 = tmp6(4832).Text;
    items2[1] = closure_17(Text5, obj8);
    tmp5Result3 = tmp5(Stack3, obj6);
  }
  items[4] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj9 = { direction: "vertical", spacing: 4, children: items3 };
    const Stack4 = tmp6(5279).Stack;
    const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: intl5.string(_modDef3715.Cn9qix) };
    const Text6 = tmp6(4832).Text;
    intl5 = tmp6(1115).intl;
    items3 = [closure_17(Text6, obj10), ];
    const obj11 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    const Text7 = tmp6(4832).Text;
    items3[1] = closure_17(Text7, obj11);
    tmp5Result4 = tmp5(Stack4, obj9);
  }
  items[5] = tmp5Result4;
  let tmp3Result2 = null;
  if (null != onApprove) {
    const obj12 = { direction: "horizontal", children: closure_17(Button, obj13) };
    const Stack5 = tmp6(5279).Stack;
    obj13 = { text: intl6.string(_modDef3715["hG0Y0+"]), variant: "primary", onPress: onApprove };
    Button = tmp6(5281).Button;
    intl6 = tmp6(1115).intl;
    tmp3Result2 = tmp3(Stack5, obj12);
  }
  items[6] = tmp3Result2;
  return closure_17(tmp4, obj);
}
function IdeaCards(arg0) {
  let ideas;
  let intl;
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_24().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3715.DAvYsi) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items = [
    closure_17(Text, obj2),
    ideas.map((title) => {
      let Stack;
      let intl;
      let obj2;
      let tmp4;
      require = title;
      const obj = {
        onPress() {
          return require(title);
        },
        accessibilityLabel: intl.formatToPlainString(_modDef3715.pztRGi, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = Card_Card.Card;
      intl = intl7.intl;
      obj2 = { title: title.title };
      Stack = Stack_Stack.Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_17(Text_Text.Text, obj3);
      let tmpResult = null;
      const tmp2 = require;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_18;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[16]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_17(Card, obj, title.id);
    })
  ];
  return closure_18(closure_8, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_24();
  let closure_1 = tmp;
  items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    const promise = map1(projectId, arg0);
    const nextPromise = promise.then((result) => {
      const obj = closure_1_1(closure_1_2[21]);
      return obj.openURL(result);
    });
    nextPromise.catch(() => {

    });
  }, items);
  let obj = {
    style: tmp.attachmentPills,
    children: attachments.map((id, index) => {
      let Text;
      let intl;
      let intl2;
      let obj2;
      let obj3;
      let obj5;
      let obj6;
      let tmp12;
      if (null != id.id) {
        const obj = {
          style: closure_1.attachmentPill,
          onPress() {
              return closure_2(id.id);
            },
          accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[14]).QUFLUq, obj2),
          children: closure_1_17(projectId(closure_2[16]).Text, obj3)
        };
        const Card = projectId(closure_2[20]).Card;
        intl = projectId(closure_2[13]).intl;
        obj2 = { name: id.name };
        obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        tmp12 = closure_1_17(Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: closure_1_17(Text, obj5) };
        obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[14]).OBr7WW, obj6) };
        Text = projectId(closure_2[16]).Text;
        intl2 = projectId(closure_2[13]).intl;
        const _HermesInternal = HermesInternal;
        obj6 = { name: id.name };
        tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  };
  return closure_17(closure_8, obj);
}
function IdeasOffer(onAsk) {
  let Text;
  let intl;
  let intl2;
  let obj3;
  onAsk = onAsk.onAsk;
  const tmp = closure_24();
  const obj = { style: tmp.ideasOffer, children: items };
  const obj2 = { style: tmp.ideasOfferHint, children: closure_17(Text, obj3) };
  obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3715.tG5PBo) };
  Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_17(metroImportAll, obj2), ];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: intl2.string(_modDef3715.cwTe5o) };
  const Button = components_Button_Button.Button;
  intl2 = intl7.intl;
  items[1] = closure_17(Button, obj4);
  return authStore4(metroImportAll, obj);
}
function TimelineRow(live) {
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let node;
  let obj2;
  let str2;
  let tmp4Result;
  let tmp7Result;
  let tmp8;
  ({ node, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  let flag = live.live;
  if (flag === undefined) {
    flag = false;
  }
  ({ epoch, crestColor } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  let obj = { line: obj2.describeNode(node), live: flag, settled: tmp8, failed: "failed" === node.status, presentation: str2, crestColor, inGutter, epoch, trailing: tmp4Result };
  const tmp = closure_24();
  const tmp6 = VibegrationsNativeStatusLineDefault;
  tmp8 = !flag;
  obj2 = VibegrationsTimelineTree;
  const tmp2 = authStore4;
  if (tmp8) {
    tmp8 = "failed" !== node.status;
  }
  str2 = "detail";
  if (flag) {
    str2 = "headline";
  }
  tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7Result.describeDuration(node.durationMs) };
    const Text = tmp7(4832).Text;
    tmp7Result = VibegrationsDuration;
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [closure_17(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          const obj = { variant: "text-sm/normal", color: "text-muted", children };
          return closure_1_17(Text_Text.Text, obj, index);
        })
    };
    detail = node.detail;
    tmp4Result2 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result2;
  return tmp2(metroImportAll, { children });
}
function TurnStatusLine(epoch) {
  let _undefined;
  let c2;
  let c3;
  let steps1;
  let tmp19;
  let tmp3;
  let tree;
  let turnActive;
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = closure_24();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = turnActive(16349);
  const currentStepResult = obj.currentStep(tree.steps);
  _slicedToArray = currentStepResult;
  let tmp8;
  if (!turnActive) {
    const turn = tree.turn;
    let durationMs;
    if (turn != null) {
      durationMs = turn.durationMs;
    }
    tmp8 = durationMs;
  }
  const tasks = tree.tasks;
  const found = tasks.find((task) => null != task.task.groupLabel);
  let groupLabel;
  if (found != null) {
    groupLabel = found.task.groupLabel;
  }
  if (null != tmp8) {
    const tmp5Result = turnActive(16350);
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = turnActive(16349);
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(1115).intl;
    groupLabel = intl.string(epoch(3715).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: tmp19 };
  tmp19 = undefined;
  const tmp15 = closure_18;
  const tmp18 = epoch(16335);
  if (someResult) {
    tmp19 = callback;
  }
  const children = [closure_17(tmp18, obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = {
        style: tmp.activityDetail,
        children: steps1.map((node) => {
              let tmp3;
              const obj = { node, live: tmp3, epoch };
              tmp3 = turnActive;
              const tmp = closure_17;
              const tmp2 = TimelineRow;
              if (turnActive) {
                tmp3 = node === c3;
              }
              return tmp(tmp2, obj, node.id);
            })
      };
      steps1 = tree.steps;
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(closure_8, { children });
}
function LaneStatusLine(arg0) {
  let _undefined;
  let c2;
  let c3;
  let describeTaskOutcomeResult;
  let epoch;
  let items1;
  let lane;
  let mark;
  let tmp23;
  let tmp24;
  let tmp3;
  let turnActive;
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_24();
  [tmp3, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => c2((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = mark(16349);
    currentStepResult = obj.currentStep(lane.steps);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const obj4 = mark(16349);
      describeNodeResult = obj4.describeNode(currentStepResult);
    } else {
      const obj3 = mark(16351);
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const obj2 = mark(16351);
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_17(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = epoch(16335);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_17(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_17(mark(c2[16]).Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { node, live: node === c3, crestColor: mark.tint, epoch };
        return closure_17(TimelineRow, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_18(closure_8, { children });
}
function ActivityBox(arg0) {
  let closure_2;
  let tree;
  let turnActive;
  ({ tree, turnActive } = arg0);
  let length;
  dependencyMap = undefined;
  const tmp = closure_24();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = turnActive(16352);
  const tasks = tree.tasks;
  dependencyMap = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_17(TurnStatusLine, { tree, turnActive, epoch: length }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      const obj = VibegrationsSubagentMark;
      familiarMarkResult = obj.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_2.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = closure_17(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_18(closure_8, obj2);
}
function TranscriptFade(children) {
  let obj3;
  let obj7;
  children = children.children;
  const clearance = children.clearance;
  const tmp = closure_24();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: authStore4(metroImportAll, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef5976;
    items[0] = closure_17(metroImportAll, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_17(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - 52) };
    items[2] = closure_17(metroImportAll, obj6);
    tmp3 = closure_17(tmp6, obj2);
  }
  return tmp3;
}
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
const turnSettled = VibegrationsChatStore2.turnSettled;
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
({ ensureConnection: closure_12, getAttachmentUrl: map1, interruptTurn: closure_14, sendUserMessage: closure_15 } = VibegrationsConnectionStore);
VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let Fragment = Fragment_mod;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET - VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj2 = _modDef672(BLACK);
const alphaResult = obj2.alpha(0.2);
items[1] = alphaResult.css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptDimmed: { opacity: 0.4 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, row: obj4, rowGroupStart: { marginTop: PX_12 }, avatar: rect, spoken: { position: "relative", gap: PX_8 }, avatarSpoken: rect1, avatarSpokenReplying: obj5, header: obj6, surface: obj7, designImage: obj8, designPlaceholder: obj9, ideaCards: { gap: PX_8 }, activityBox: { marginLeft: -diff }, activityDetail: { paddingLeft: diff }, stepDetail: obj10, attachmentPills: obj11, attachmentPill: obj12, ideasOffer: { flexDirection: "row", alignItems: "center", gap: PX_8 }, ideasOfferHint: { flexShrink: 1 }, placeholder: obj13 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { position: "relative", paddingLeft: VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
rect = { position: "absolute", left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, top: 2 };
rect1 = { left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET - VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj5 = { top: VibegrationsRepliedMessage.REPLY_PREVIEW_HEIGHT + PX_8 };
obj6 = { marginBottom: -nativeDefault.space.PX_4 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
obj8 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj10 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj13 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles(obj);
let closure_35 = react.memo((onToggleChecklist) => {
  let StopIcon;
  let Text2;
  let c10;
  let callback2;
  let checklistExpanded;
  let checklistSuperseded;
  let first;
  let groupStart;
  let intl;
  let intl2;
  let intl3;
  let isNewest;
  let items10;
  let items14;
  let items9;
  let message;
  let obj12;
  let obj13;
  let obj14;
  let obj21;
  let obj25;
  let obj31;
  let obj5;
  let obj7;
  let onAnswerClarification;
  let onApprovePlan;
  let onAskForIdeas;
  let onPickIdea;
  let projectId;
  let showsClosingMessage;
  let tmp17Result6;
  let tmp37;
  let tmp53;
  let tmp56;
  let tmp74;
  ({ projectId, message } = onToggleChecklist);
  ({ groupStart, isNewest, checklistSuperseded } = onToggleChecklist);
  onToggleChecklist = onToggleChecklist.onToggleChecklist;
  const replied = onToggleChecklist.replied;
  const onJumpToReplied = onToggleChecklist.onJumpToReplied;
  let trimmed;
  let user_id;
  c10 = undefined;
  let index;
  closure_12 = undefined;
  let open;
  ({ first, checklistExpanded, onApprovePlan, onPickIdea, onAskForIdeas, onAnswerClarification } = onToggleChecklist);
  let tmp = closure_24();
  const spoken = tmp;
  let obj = onJumpToReplied;
  items = [message];
  const memo = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  const items1 = [message];
  const memo1 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.turnSegments(message.steps, obj2);
  }, items1);
  const items2 = [message];
  const memo2 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.latestTodos(message.steps);
  }, items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTodoAgents;
    return obj.runningTodoAgents(memo.tasks);
  }, items3);
  const items5 = [onJumpToReplied, replied];
  const callback = onJumpToReplied.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [message.content];
  const callback1 = onJumpToReplied.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const memo4 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsDesignFeedback;
    return obj.parseVibegrationsDesignRemark(message.content);
  }, items6);
  let body;
  if (memo4 != null) {
    body = memo4.body;
  }
  if (body == null) {
    body = message.content;
  }
  trimmed = body.trim();
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  const items7 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items8 = [trimmed, user_id];
  if ("" !== trimmed) {
    callback2 = obj.useCallback(() => {
      const obj = VibegrationsMessageActionSheet;
      const obj2 = { content: trimmed, userId: user_id };
      return obj.showVibegrationsMessageActions(obj2);
    }, items8);
  }
  if ("user" === message.role) {
    let tmp77Result;
    if ("" === trimmed) {
      let tmp77Result2;
      if (null == memo4) {
        tmp77Result2 = null;
      }
      return tmp77Result2;
    }
    let obj3 = { style: items7, onLongPress: callback2, accessible: false, children: items9 };
    let tmp79 = null;
    const tmp78 = memo1;
    if (groupStart) {
      let obj4 = { style: tmp.avatar, children: closure_17(message(onToggleChecklist[32]).VibegrationsUserAvatar, obj5) };
      obj5 = { userId: message.user_id };
      tmp79 = closure_17(trimmed, obj4);
    }
    items9 = [tmp79, , , ];
    let tmp84 = null;
    if (groupStart) {
      let obj6 = { style: tmp.header, children: closure_17(message(onToggleChecklist[32]).VibegrationsUserHeader, obj7) };
      obj7 = { userId: null, at: null };
      ({ user_id: obj40.userId, created_at: obj40.at } = message);
      tmp84 = closure_17(trimmed, obj6);
    }
    items9[1] = tmp84;
    if ("" !== trimmed) {
      let combined;
      const Text3 = message(onToggleChecklist[16]).Text;
      if (!groupStart) {
        const intl4 = tmp90(tmp91[13]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl4.string(tmp90(tmp91[13]).t.KD6OJJ) + ": " + trimmed;
      }
      let tmp94 = null;
      const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items10 };
      if (null != memo4) {
        const obj9 = { label: memo4.label, variant: "text-md/medium" };
        tmp94 = closure_17(checklistSuperseded(tmp91[33]), obj9);
      }
      items10 = [tmp94, , ];
      let str5 = null;
      if (null != memo4) {
        str5 = null;
        if ("" !== trimmed) {
          str5 = " ";
        }
      }
      items10[1] = str5;
      items10[2] = trimmed;
      tmp77Result = tmp77(Text3, obj8);
    } else {
      tmp77Result = null;
    }
    items9[2] = tmp77Result;
    let tmp97 = null;
    if (null != attachments) {
      const obj10 = { projectId, attachments };
      tmp97 = closure_17(AttachmentPills, obj10);
    }
    items9[3] = tmp97;
    tmp77Result2 = tmp77(tmp78, obj3);
  } else if (true === message.interrupted) {
    const obj11 = { style: items7, children: closure_17(trimmed, obj12) };
    obj12 = { style: tmp.activityBox, children: closure_17(tmp74, obj13) };
    obj13 = { line: intl3.string(checklistSuperseded(onToggleChecklist[14])["5T7DSm"]), live: false, settled: true, inGutter: true, glyph: closure_17(StopIcon, obj14) };
    tmp74 = checklistSuperseded(onToggleChecklist[8]);
    intl3 = message(onToggleChecklist[13]).intl;
    obj14 = { size: "refresh_sm", color: checklistSuperseded(onToggleChecklist[7]).colors.TEXT_MUTED };
    StopIcon = message(onToggleChecklist[34]).StopIcon;
    return closure_17(trimmed, obj11);
  } else {
    let provisionalTodo;
    let tmp38Result17;
    let steps = message.steps;
    const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
    let proposal;
    if ("proposal" === message.kind) {
      proposal = message.proposal;
    }
    let ideas = null;
    if (null != message.ideas) {
      ideas = null;
      if (message.ideas.length > 0) {
        ideas = message.ideas;
      }
    }
    let secretRequest = message.secretRequest;
    if (secretRequest == null) {
      secretRequest = null;
    }
    let tmp17 = message;
    let obj2 = message(onToggleChecklist[35]);
    const activeAwaitingUserResult = obj2.activeAwaitingUser(message, isNewest);
    let settingsRequest = message.settingsRequest;
    if (settingsRequest == null) {
      settingsRequest = null;
    }
    let clarification = null;
    if (isNewest) {
      clarification = null;
      if (null != message.clarification) {
        clarification = null;
        if (message.clarification.questions.length > 0) {
          clarification = message.clarification;
        }
      }
    }
    let items15 = memo2;
    if (memo2 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      items15 = todos;
    }
    if (null == items15) {
      if (null != message.provisionalTodo) {
        if ("" !== message.provisionalTodo) {
          provisionalTodo = message.provisionalTodo;
        }
      }
    }
    const obj15 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasAttachments: null != attachments };
    const tmp17Result = tmp17(onToggleChecklist[36]);
    const turnPresentation = tmp17Result.resolveTurnPresentation(obj15);
    ({ showsClosingMessage, replyKey: c10 } = turnPresentation);
    let tmp24 = "plan_implemented" === message.kind;
    const closingContent = turnPresentation.closingContent;
    if (tmp24) {
      tmp24 = isNewest;
    }
    if (!(memo.steps.length > 0 || memo.tasks.length > 0)) {
      if (0 === turnPresentation.streamed.length) {
        if ("" === trimmed) {
          if (null == proposal) {
            if (null == found) {
              if (null == ideas) {
                if (null == items15) {
                  if (null == provisionalTodo) {
                    if (null == secretRequest) {
                      if (null == settingsRequest) {
                        if (null == attachments) {
                          if (null == clarification) {
                            if (!tmp24) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const tmp17Result4 = tmp17(onToggleChecklist[36]);
    const turnLeadsWithStretchResult = tmp17Result4.turnLeadsWithStretch(memo.steps.length > 0 || memo.tasks.length > 0, turnPresentation);
    const found1 = memo1.filter((hasWork) => hasWork.hasWork);
    const atResult = found1.at(-1);
    index = undefined;
    if (atResult != null) {
      index = atResult.index;
    }
    const tmp30 = !index(message);
    closure_12 = tmp30;
    const obj16 = { turnActive: tmp30 };
    const tmp17Result5 = tmp17(onToggleChecklist[22]);
    open = tmp17Result5.turnLifecycle(memo1, obj16).open;
    let avatarSpokenReplying = groupStart && null != replied;
    let tmp34Result = null;
    const tmp32 = closure_19;
    if (avatarSpokenReplying) {
      const obj17 = { replied, onJump: tmp37 };
      tmp37 = undefined;
      const tmp34 = closure_17;
      const tmp36 = checklistSuperseded(onToggleChecklist[11]);
      if (null != onJumpToReplied) {
        tmp37 = callback1;
      }
      tmp34Result = tmp34(tmp36, obj17);
    }
    const items11 = [tmp34Result, , ];
    const items12 = [, , ];
    ({ avatar: arr13[0], avatarSpoken: arr13[1] } = tmp);
    if (avatarSpokenReplying) {
      avatarSpokenReplying = tmp.avatarSpokenReplying;
    }
    const obj18 = { children: items11 };
    items12[2] = avatarSpokenReplying;
    const obj19 = { style: items12, children: closure_17(tmp17(onToggleChecklist[32]).VibegrationsConjureAvatar, {}) };
    items11[1] = closure_17(trimmed, obj19);
    const obj20 = { style: tmp.header, children: closure_17(tmp17(onToggleChecklist[32]).VibegrationsConjureHeader, obj21) };
    obj21 = { at: message.created_at };
    items11[2] = closure_17(trimmed, obj20);
    const tmp31Result = closure_18(tmp32, obj18);
    const obj22 = { style: items7, onLongPress: callback2, accessible: false, children: null };
    let tmp38Result = null;
    const tmp41 = memo1;
    if (turnLeadsWithStretchResult) {
      tmp38Result = null;
      if (groupStart) {
        const obj23 = { style: tmp.spoken, children: tmp31Result };
        tmp38Result = tmp38(tmp39, obj23);
      }
    }
    const items13 = [
      tmp38Result,
      memo1.map((prose, index) => {
          let VibegrationsRevealedMarkdown;
          let obj3;
          let steps;
          let tasks;
          let tmp6;
          let tmp16Result = null;
          const Fragment = react.Fragment;
          const tmp = authStore4;
          if (null != prose.prose) {
            tmp16Result = null;
            if (prose.prose.key !== c10) {
              const obj2 = { style: spoken.spoken, children: closure_17(VibegrationsRevealedMarkdown, obj3) };
              obj3 = { source: prose.prose.content, streaming: tmp6 };
              tmp6 = closure_12;
              VibegrationsRevealedMarkdown = VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown;
              const tmp17 = metroImportAll;
              if (closure_12) {
                tmp6 = index === memo1.length - 1;
              }
              if (tmp6) {
                tmp6 = !prose.hasWork;
              }
              tmp16Result = tmp16(tmp17, obj2);
            }
          }
          const children = [tmp16Result, ];
          let tmp8Result = null;
          if (prose.hasWork) {
            const obj = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
            steps = memo.steps;
            index = prose.index;
            tasks = memo.tasks;
            const tmp8 = closure_17;
            const tmp9 = ActivityBox;
            if (index === index) {
              let obj6;
              if (null != memo.turn) {
                obj6 = { turn: memo.turn };
                const obj4 = { turn: memo.turn };
              }
              const obj5 = { tree: obj, turnActive: prose.index === open };
              const merged = Object.assign(obj6);
              tmp8Result = tmp8(tmp9, obj5);
            }
            obj6 = {};
          }
          children[1] = tmp8Result;
          return tmp(Fragment, { children }, prose.key);
        }),
  ,

    ];
    if (!showsClosingMessage) {
      if (null == proposal) {
        if (null == clarification) {
          if (null == ideas) {
            if (null == secretRequest) {
              if (null == settingsRequest) {
                if (null == attachments) {
                  if (null == found) {
                    if (null == items15) {
                      let tmp31Result2;
                      if (null == provisionalTodo) {
                        tmp31Result2 = null;
                      }
                      items13[2] = tmp31Result2;
                      let tmp38Result13 = null;
                      if (null != activeAwaitingUserResult) {
                        const obj24 = { style: tmp.spoken, children: closure_17(Text2, obj25) };
                        obj25 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(checklistSuperseded(onToggleChecklist[14])["1LEnd8"]) };
                        Text2 = tmp17(tmp18[16]).Text;
                        intl2 = tmp17(tmp18[13]).intl;
                        tmp38Result13 = tmp38(tmp39, obj24);
                      }
                      items13[3] = tmp38Result13;
                      obj22.children = items13;
                      return closure_18(tmp41, obj22);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp44 = null;
    const obj26 = { style: tmp.spoken, children: items14 };
    if (groupStart) {
      tmp44 = null;
      if (!turnLeadsWithStretchResult) {
        tmp44 = tmp31Result;
      }
    }
    items14 = [tmp44, , , , , , , , , , , ];
    let tmp38Result14 = null;
    if (showsClosingMessage) {
      const obj27 = { source: closingContent };
      tmp38Result14 = tmp38(checklistSuperseded(tmp18[18]), obj27);
    }
    items14[1] = tmp38Result14;
    let tmp38Result15 = null;
    if ("side_reply" === message.kind) {
      const obj28 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(checklistSuperseded(onToggleChecklist[14]).OAjkIT) };
      const Text = tmp17(tmp18[16]).Text;
      intl = tmp17(tmp18[13]).intl;
      tmp38Result15 = tmp38(Text, obj28);
    }
    items14[2] = tmp38Result15;
    let tmp38Result16 = null;
    if (null != attachments) {
      const obj29 = { projectId, attachments };
      tmp38Result16 = tmp38(AttachmentPills, obj29);
    }
    items14[3] = tmp38Result16;
    if (null != items15) {
      const obj30 = { style: tmp.surface, children: closure_17(tmp53, obj31) };
      tmp53 = checklistSuperseded(onToggleChecklist[37]);
      if (items15 == null) {
        items15 = [];
      }
      obj31 = { todos: items15, provisional: provisionalTodo, agents: memo3, live: tmp17Result6.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
      tmp17Result6 = tmp17(onToggleChecklist[38]);
      tmp38Result17 = tmp38(tmp39, obj30);
    } else {
      tmp38Result17 = null;
    }
    items14[4] = tmp38Result17;
    let tmp38Result18 = null;
    if (null != proposal) {
      const obj32 = { projectId, proposal, onApprove: tmp56 };
      tmp56 = undefined;
      const tmp55 = ProposalCard;
      if (isNewest) {
        tmp56 = onApprovePlan;
      }
      tmp38Result18 = tmp38(tmp55, obj32);
    }
    items14[5] = tmp38Result18;
    let tmp38Result19 = null;
    if (null != clarification) {
      const obj33 = { clarification, onSubmit: onAnswerClarification };
      tmp38Result19 = tmp38(checklistSuperseded(tmp18[39]), obj33);
    }
    items14[6] = tmp38Result19;
    let tmp38Result20 = null;
    if (null != secretRequest) {
      const obj34 = { projectId, request: secretRequest, awaiting: activeAwaitingUserResult };
      tmp38Result20 = tmp38(checklistSuperseded(tmp18[40]), obj34);
    }
    items14[7] = tmp38Result20;
    let tmp38Result21 = null;
    if (null != settingsRequest) {
      const obj35 = { projectId, request: settingsRequest };
      tmp38Result21 = tmp38(checklistSuperseded(tmp18[41]), obj35);
    }
    items14[8] = tmp38Result21;
    let tmp38Result22 = null;
    if (null != ideas) {
      const obj36 = { ideas, onPick: onPickIdea };
      tmp38Result22 = tmp38(IdeaCards, obj36);
    }
    items14[9] = tmp38Result22;
    let tmp38Result23 = null;
    if (tmp24) {
      const obj37 = { onAsk: onAskForIdeas };
      tmp38Result23 = tmp38(IdeasOffer, obj37);
    }
    items14[10] = tmp38Result23;
    let tmp38Result24 = null;
    if (null != found) {
      tmp38Result24 = null;
      if ("message" in found) {
        const obj38 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
        tmp38Result24 = tmp38(tmp17(tmp18[16]).Text, obj38);
      }
    }
    items14[11] = tmp38Result24;
    tmp31Result2 = tmp31(tmp39, obj26);
  }
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  let FlashList;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c17;
  let c18;
  let c23;
  let c29;
  let c6;
  let c7;
  let items42;
  let items43;
  let items44;
  let items45;
  let items46;
  let obj11;
  let obj13;
  let obj16;
  let str2;
  let tmp14;
  let tmp15;
  let tmp2Result21;
  let tmp37;
  let tmp43;
  let tmp63;
  let tmp72Result;
  let tmp84;
  const f104625 = () => {
    map = new Map();
    return map;
  };
  projectId = projectId.projectId;
  let stateFromStores1;
  _slicedToArray = undefined;
  let render_id;
  set = undefined;
  c6 = undefined;
  c7 = undefined;
  let onToggleChecklist;
  let state;
  let closure_10;
  let onPickIdea;
  closure_12 = undefined;
  let closure_13;
  let closure_14;
  let memo;
  let memo1;
  c17 = undefined;
  c18 = undefined;
  let bound;
  let ref;
  let ref2;
  c23 = undefined;
  let ref3;
  let ref4;
  let callback2;
  let closure_27;
  let onJumpToReplied;
  c29 = undefined;
  let tmp = ref3();
  let tmp2 = projectId;
  let tmp3 = stateFromStores1;
  let obj = projectId(stateFromStores1[42]);
  items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === state.getState(), []);
  let tmp5 = stateFromStores;
  let obj2 = render_id;
  const items1 = [stateFromStores, projectId];
  const bottom = stateFromStores(stateFromStores1[43])().bottom;
  const effect = render_id.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      closure_12(projectId);
    }
  }, items1);
  let tmp7 = closure_10;
  const items2 = [closure_10];
  const items3 = [projectId];
  const obj3 = projectId(stateFromStores1[42]);
  stateFromStores1 = obj3.useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const items4 = [closure_10];
  const items5 = [projectId];
  const obj4 = projectId(stateFromStores1[42]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  const items6 = [closure_10];
  const items7 = [projectId];
  const obj5 = projectId(stateFromStores1[42]);
  const stateFromStores3 = obj5.useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  const items8 = [closure_10];
  const items9 = [projectId];
  const obj6 = projectId(stateFromStores1[42]);
  const stateFromStores4 = obj6.useStateFromStores(items8, () => VibegrationsChatStore.getThinkingActivity(projectId), items9);
  const items10 = [closure_10];
  const items11 = [projectId];
  const obj7 = projectId(stateFromStores1[42]);
  const stateFromStores5 = obj7.useStateFromStores(items10, () => VibegrationsChatStore.getProjectUsage(projectId), items11);
  let tmp12 = _slicedToArray;
  [tmp14, tmp15] = _slicedToArray(render_id.useState(null), 2);
  const tmp13 = _slicedToArray(render_id.useState(null), 2);
  _slicedToArray = tmp15;
  let tmp16 = null == tmp14;
  if (!tmp16) {
    tmp16 = stateFromStores2 && tmp14 === projectId;
  }
  if (!tmp16) {
    tmp15(null);
  }
  const items12 = [projectId];
  let tmp20 = stateFromStores2;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items12);
  if (stateFromStores2) {
    tmp20 = tmp14 === projectId;
  }
  const items13 = [memo1];
  const items14 = [projectId];
  const tmp2Result = tmp2(tmp3[42]);
  const stateFromStores6 = tmp2Result.useStateFromStores(items13, () => VibegrationsConnectionStore.getConnState(projectId), items14);
  const items15 = [memo1];
  const items16 = [projectId];
  const tmp2Result12 = tmp2(tmp3[42]);
  const stateFromStores7 = tmp2Result12.useStateFromStores(items15, () => VibegrationsConnectionStore.isChatStopped(projectId), items16);
  const items17 = [tmp7];
  const items18 = [projectId];
  const tmp2Result13 = tmp2(tmp3[42]);
  const stateFromStores8 = tmp2Result13.useStateFromStores(items17, () => VibegrationsChatStore.hasLoadedHistory(projectId), items18);
  const items19 = [tmp7];
  const items20 = [projectId];
  const tmp2Result14 = tmp2(tmp3[42]);
  const stateFromStores9 = tmp2Result14.useStateFromStores(items19, () => VibegrationsChatStore.isHistoryUnavailable(projectId), items20);
  const tmp2Result15 = tmp2(tmp3[44]);
  const chatEmptyStateResult = tmp2Result15.chatEmptyState({ historyLoaded: stateFromStores8, historyUnavailable: stateFromStores9, connState: stateFromStores6 });
  render_id = null;
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items21 = [stateFromStores1];
  set = obj2.useMemo(() => {
    const obj = VibegrationsTodoState;
    return obj.supersededChecklists(stateFromStores1);
  }, items21);
  [c6, c7] = tmp12(obj2.useState(f104625), 2);
  tmp12(obj2.useState(f104625), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores1[38]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items22 = [stateFromStores1];
  state = obj2.useMemo(() => {
    let obj = VibegrationsChatGrouping;
    return obj.groupChatRows(stateFromStores1.map((key) => {
      let str;
      let tmp3;
      let user_id;
      const obj = { key: key.render_id, actor: str, authorId: user_id, boundary: render_id, separate: tmp3 };
      str = "assistant";
      if ("user" === key.role) {
        str = "user";
      }
      user_id = undefined;
      if ("user" === key.role) {
        user_id = key.user_id;
      }
      render_id = undefined;
      if ("user" !== key.role) {
        render_id = key.render_id;
      }
      tmp3 = "assistant" === key.role;
      if (tmp3) {
        tmp3 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
        const tmp5 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
      }
      return obj;
    }));
  }, items22);
  const items23 = [projectId];
  closure_10 = obj2.useCallback(() => {
    const sendVibegrationsCardReply = vibegrationsAttachmentDrafts.sendVibegrationsCardReply;
    vibegrationsAttachmentDrafts;
    const intl = intl7.intl;
    const result = sendVibegrationsCardReply(projectId, intl.string(_modDef3715.ga8too));
  }, items23);
  const items24 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const obj = vibegrationsAttachmentDrafts;
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items24);
  const items25 = [projectId];
  closure_12 = obj2.useCallback(() => {
    const intl = intl7.intl;
    memo(projectId, intl.string(_modDef3715["3sTTBu"]));
  }, items25);
  const items26 = [projectId];
  closure_13 = obj2.useCallback((implementation_prompt) => {
    const obj = vibegrationsAttachmentDrafts;
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt);
  }, items26);
  let tmp29 = tmp28;
  if (!tmp29) {
    let str = "connecting";
    tmp29 = "connecting" === stateFromStores6;
  }
  if (tmp29) {
    tmp29 = !stateFromStores7;
  }
  closure_14 = tmp29;
  const items27 = [stateFromStores1];
  memo = obj2.useMemo(() => {
    let diff = stateFromStores1.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = stateFromStores1[diff];
        if ("assistant" === tmp3.role) {
          if (!turnSettled(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items27);
  const items28 = [stateFromStores1, memo];
  memo1 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = stateFromStores1[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      const obj = VibegrationsTimelineTree;
      timelineTree = obj.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items28);
  let tmp32 = null != memo1;
  if (tmp32) {
    tmp32 = memo1.steps.length > 0 || memo1.tasks.length > 0;
  }
  const items29 = [memo1];
  let memo2 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo1) {
      const obj = VibegrationsTimelineTree;
      currentStepResult = obj.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      const obj2 = VibegrationsTimelineTree;
      describeNodeResult = obj2.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items29);
  [obj13, c17] = tmp12(obj2.useState(null), 2);
  tmp12(obj2.useState(null), 2);
  [tmp37, c18] = tmp12(obj2.useState(64), 2);
  tmp12(obj2.useState(64), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined4((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  bound = tmp37;
  const tmp2Result16 = tmp2(tmp3[26]);
  if (!tmp2Result16.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp37, 52);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(false);
  [tmp43, c23] = tmp12(obj2.useState(false), 2);
  tmp12(obj2.useState(false), 2);
  ref3 = obj2.useRef(null);
  ref4 = obj2.useRef(0);
  callback2 = obj2.useCallback(() => {
    const current = ref3.current;
    const current2 = ref.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    const tmp4 = c23;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref4.current;
    }
    tmp4(tmp5);
  }, []);
  const items30 = [callback2];
  const items31 = [callback2];
  const callback3 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback2();
  }, items30);
  const callback4 = obj2.useCallback((arg0, contentHeight) => {
    const current = ref.current;
    if (null != current) {
      let obj;
      if (current.contentHeight - current.offsetY - current.viewportHeight <= 0.2 * current.viewportHeight) {
        const obj2 = { contentHeight, offsetY: Math.max(0, contentHeight - current.viewportHeight) };
        const merged = Object.assign(current);
        const _Math = Math;
        obj = obj2;
      } else {
        obj = { contentHeight };
        const merged1 = Object.assign(current);
      }
      tmp.current = obj;
      if (ref2.current) {
        tmp9.current = false;
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollToEnd({ animated: true });
        }
      }
      callback2();
    }
  }, items31);
  const items32 = [callback2];
  const memo3 = obj2.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores1[47]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback5 = obj2.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    set = new Set();
    const iter = viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined3(set);
    callback2();
  }, items32);
  if (stateFromStores3) {
    const intl2 = tmp2(tmp3[13]).intl;
    memo2 = intl2.string(tmp5(tmp3[14])["0vH/5G"]);
  } else if (memo2 == null) {
    let intl = tmp2(tmp3[13]).intl;
    memo2 = intl.string(tmp5(tmp3[14]).QDGuNS);
  }
  const items33 = [stateFromStores1, memo];
  let tmp50;
  const memo4 = obj2.useMemo(() => {
    if (null == memo) {
      return null;
    } else if (null == stateFromStores1[tmp]) {
      return null;
    } else {
      const obj = VibegrationsTimelineTree;
      let latestTodosResult = obj.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != stateFromStores1[tmp].todos) {
          todos = null;
          if (stateFromStores1[tmp].todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items33);
  if (null != memo) {
    tmp50 = stateFromStores1[memo];
  }
  let checklistLiveResult = null == tmp50;
  if (!checklistLiveResult) {
    const tmp2Result17 = tmp2(tmp3[38]);
    checklistLiveResult = tmp2Result17.checklistLive(tmp50);
  }
  let result;
  if (null != tmp50) {
    const tmp2Result18 = tmp2(tmp3[48]);
    result = tmp2Result18.vibegrationsTurnStartedAt(tmp50);
  }
  const items34 = [memo1];
  let tmp54;
  const memo5 = obj2.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo1) {
      const obj = VibegrationsTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items34);
  if (null != memo) {
    let render_id1;
    if (stateFromStores1[memo] != null) {
      render_id1 = tmp55.render_id;
    }
    tmp54 = render_id1;
  }
  let tmp57 = null != tmp54;
  if (tmp57) {
    tmp57 = null != obj13 && !obj13.has(tmp54) || tmp43;
    null != obj13 && !obj13.has(tmp54) || tmp43;
  }
  let tmp59 = null;
  if (stateFromStores2) {
    tmp59 = null;
    if (tmp32) {
      tmp59 = null;
      if (tmp57) {
        tmp59 = memo2;
      }
    }
  }
  const items35 = [bound, memo, callback2];
  const effect1 = obj2.useEffect(() => {
    ref3.current = memo;
    ref4.current = bound;
    let closure_0 = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(closure_0);
  }, items35);
  const items36 = [stateFromStores1];
  closure_27 = obj2.useMemo(() => {
    map = new Map();
    const iter = stateFromStores1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = VibegrationsRepliedMessage2;
          let repliedMessageResult = obj2.repliedMessage(stateFromStores1, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items36);
  const items37 = [stateFromStores1];
  onJumpToReplied = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    const findIndexResult = stateFromStores1.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items37);
  const items38 = [bound, memo];
  const callback6 = obj2.useCallback(() => {
    if (null != memo) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items38);
  [tmp63, c29] = tmp12(obj2.useState(false), 2);
  const items39 = [projectId];
  tmp12(obj2.useState(false), 2);
  const effect2 = obj2.useEffect(() => {
    let closure_0;
    let timeout;
    let obj = projectId(stateFromStores1[50]);
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = projectId(stateFromStores1[50]);
        const result = obj.markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
  }, items39);
  const items40 = [projectId];
  const callback7 = obj2.useCallback(() => _undefined5(false), []);
  const items41 = [projectId];
  const callback8 = obj2.useCallback((arg0, arg1) => {
    ref2.current = true;
    memo(projectId, arg0, arg1);
  }, items40);
  let connectionLabelResult = null;
  const callback9 = obj2.useCallback(() => {
    authStore2(projectId);
  }, items41);
  if ("open" !== stateFromStores6) {
    const tmp2Result19 = tmp2(tmp3[51]);
    connectionLabelResult = tmp2Result19.connectionLabel(stateFromStores6);
  }
  const obj8 = { style: tmp.container, children: items42 };
  const tmp2Result20 = tmp2(tmp3[52]);
  const vibegrationsControlActive = tmp2Result20.useVibegrationsControlActive(projectId);
  items42 = [c17(tmp5(tmp3[53]), { thinking: stateFromStores2, bleedBottom: bottom }), , ];
  const obj9 = { style: tmp.transcriptArea, children: items45 };
  const obj10 = { clearance: tmp37, children: c17(FlashList, obj11) };
  obj11 = {
    ref,
    fadingEdgeLength: 52,
    removeClippedSubviews: tmp2Result21.isIOS() && undefined,
    viewabilityConfig: memo3,
    onViewableItemsChanged: callback5,
    onScroll: callback3,
    onContentSizeChange: callback4,
    scrollEventThrottle: 16,
    pointerEvents: str2,
    style: items43,
    contentContainerStyle: items44,
    data: stateFromStores1,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListEmptyComponent: tmp72Result,
    renderItem(arg0) {
      let flag;
      let index;
      let item;
      let obj2;
      let tmp4;
      let tmp5;
      let tmp6;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), checklistExpanded: obj2.checklistExpanded(c6, item.render_id, set.has(item.render_id)), onToggleChecklist, replied: closure_27.get(item.render_id), onJumpToReplied, onApprovePlan: tmp4, onPickIdea, onAskForIdeas: tmp5, onAnswerClarification: tmp6 };
      flag = state[index];
      const tmp = closure_17;
      const tmp2 = closure_35;
      if (flag == null) {
        flag = true;
      }
      tmp4 = undefined;
      obj2 = VibegrationsTodoState;
      if (closure_14) {
        tmp4 = closure_10;
      }
      tmp5 = undefined;
      if (closure_14) {
        tmp5 = closure_12;
      }
      tmp6 = undefined;
      if (closure_14) {
        tmp6 = closure_13;
      }
      return tmp(tmp2, obj);
    }
  };
  FlashList = tmp2(tmp3[54]).FlashList;
  tmp2Result21 = tmp2(tmp3[26]);
  str2 = "auto";
  tmp2Result21.isIOS() && undefined;
  const tmp73 = TranscriptFade;
  if (tmp63) {
    str2 = "none";
  }
  items43 = [tmp.transcript, tmp63 && tmp.transcriptDimmed, ];
  const tmp2Result22 = tmp2(tmp3[26]);
  let tmp76 = !tmp2Result22.isIOS();
  tmp2Result22.isIOS();
  if (tmp76) {
    tmp76 = { marginBottom: tmp37 - bound };
    const obj12 = { marginBottom: tmp37 - bound };
  }
  items43[2] = tmp76;
  items44 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[7]).space.PX_8 }];
  let tmp77 = "loading" === chatEmptyStateResult;
  tmp72Result = null;
  ({ paddingBottom: bound + tmp5(tmp3[7]).space.PX_8 });
  if (!tmp77) {
    let jTuX7C;
    const obj15 = { style: tmp.placeholder, children: c17(Text, obj16) };
    Text = tmp2(tmp3[16]).Text;
    const intl3 = tmp2(tmp3[13]).intl;
    const string = intl3.string;
    if ("unavailable" === chatEmptyStateResult) {
      jTuX7C = tmp5(tmp3[14]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[14]).jTuX7C;
    }
    obj16 = { variant: "text-sm/normal", color: "text-muted", children: string(jTuX7C) };
    tmp72Result = tmp72(tmp71, obj15);
  }
  items45 = [c17(tmp73, obj10), , ];
  let tmp72Result3 = null;
  if (tmp20) {
    const obj17 = { projectId };
    tmp72Result3 = tmp72(tmp5(tmp3[55]), obj17);
  }
  items45[1] = tmp72Result3;
  let tmp72Result4 = null;
  if (null != tmp59) {
    const obj18 = { line: tmp59, onJumpToActivity: callback6, bottom: tmp5(tmp3[7]).space.PX_12 + tmp37, todos: memo4, todosLive: checklistLiveResult, agents: memo5 };
    const tmp5Result = tmp5(tmp3[56]);
    tmp72Result4 = tmp72(tmp5Result, obj18);
  }
  items45[2] = tmp72Result4;
  items42[1] = c18(onToggleChecklist, obj9);
  const obj19 = { style: tmp.bottomStack, onLayout: callback1, children: items46 };
  const obj20 = { projectId, thinking: stateFromStores2, turnStartedAt: result, compacting: stateFromStores3, recalling: tmp77, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[57]);
  if (tmp77) {
    tmp77 = 0 === stateFromStores1.length;
  }
  items46 = [c17(tmp5Result3, obj20), ];
  const obj21 = { projectId, canSend: tmp29, running: stateFromStores2, stopped: stateFromStores7, onSend: callback8, onInterrupt: tmp84, tipOpen: tmp63, onDismissTip: callback7 };
  tmp84 = undefined;
  const tmp5Result4 = tmp5(tmp3[58]);
  if (stateFromStores2) {
    tmp84 = callback9;
  }
  items46[1] = c17(tmp5Result4, obj21);
  items42[2] = c18(onToggleChecklist, obj19);
  return c18(onToggleChecklist, obj8);
};
