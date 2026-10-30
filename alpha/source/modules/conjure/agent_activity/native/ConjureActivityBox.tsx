// Module ID: 12632
// Function ID: 12633
// Name: ConjureActivityBox
// Dependencies: [32, 19, 17, 1072, 21, 5009, 12596, 575, 12633, 12552, 12404, 1114, 3865, 12587, 12679, 5619, 12421, 8018, 12680, 2]
// Exports: default, stretchOf

// Module 12632 (ConjureActivityBox)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5619 */;
import ConjureNativeStatusLineDefault from "ConjureNativeStatusLine" /* 12587 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12596 */;
import ConjureSubagentMark from "ConjureSubagentMark" /* 12633 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
let tmp5;
const WarningIcon2 = tmp2(8018);
const ConjureNativeStepImagesDefault = tmp5(12680);
function TurnStatusLine(epoch) {
  let _undefined;
  let c3;
  let c4;
  let projectId;
  let steps1;
  let tmp19;
  let tmp20;
  let tmp3;
  let tree;
  let turnActive;
  ({ projectId: require, tree, turnActive } = epoch);
  epoch = epoch.epoch;
  _slicedToArray = undefined;
  react = undefined;
  const besideAvatar = epoch.besideAvatar;
  let tmp = closure_8();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c3] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = require("ConjureTimelineTree");
  const currentStepResult = obj.currentStep(tree.steps);
  react = currentStepResult;
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
    const tmp5Result = require("ConjureDuration");
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = require("ConjureTimelineTree");
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(tmp6[11]).intl;
    groupLabel = intl.string(turnActive(tmp6[12]).t8skVB);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp19, epoch, expanded: tmp3, onToggle: tmp20 };
  tmp19 = undefined;
  const tmp15 = closure_7;
  const tmp18 = turnActive(epoch[13]);
  if (besideAvatar) {
    tmp19 = null;
  }
  tmp20 = undefined;
  if (someResult) {
    tmp20 = callback;
  }
  const children = [closure_6(tmp18, obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = {
        style: tmp.activityDetail,
        children: steps1.map((node) => {
              let tmp3;
              const obj = { projectId: require, node, live: tmp3, epoch };
              tmp3 = turnActive;
              const tmp = metroRequire;
              const tmp2 = TimelineRow;
              if (turnActive) {
                tmp3 = node === c4;
              }
              return tmp(tmp2, obj, node.id);
            })
      };
      steps1 = tree.steps;
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(View, { children });
}
function LaneStatusLine(arg0) {
  let _undefined;
  let c3;
  let c4;
  let describeTaskOutcomeResult;
  let epoch;
  let items1;
  let lane;
  let mark;
  let projectId;
  let tmp11;
  let tmp23;
  let tmp24;
  let tmp3;
  let turnActive;
  ({ projectId: require, lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_8();
  [tmp3, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = require("ConjureTimelineTree");
    currentStepResult = obj.currentStep(lane.steps);
  }
  react = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    let tmp15;
    if (null != currentStepResult) {
      const obj4 = require("ConjureTimelineTree");
      describeNodeResult = obj4.describeNode(currentStepResult);
      tmp15 = epoch;
    } else {
      tmp15 = epoch;
      const obj3 = require("ConjureTaskOutcome");
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    tmp11 = tmp15;
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    tmp11 = epoch;
    const obj2 = require("ConjureTaskOutcome");
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_6(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = mark(tmp11[13]);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_6(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_6(require("Text/Text").Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { projectId: require, node, live: node === c4, crestColor: mark.tint, epoch };
        return metroRequire(TimelineRow, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_7(View, { children });
}
function TimelineRow(inGutter) {
  let closure_1;
  let crestColor;
  let detail;
  let epoch;
  let node;
  let obj2;
  let obj6;
  let projectId;
  let str2;
  let tmp4Result;
  let tmp8Result;
  let tmp9;
  ({ projectId, node } = inGutter);
  let flag = inGutter.inGutter;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = inGutter.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ epoch, crestColor } = inGutter);
  if (epoch === undefined) {
    epoch = 0;
  }
  const tmp = closure_8();
  importDefault = tmp;
  const attachments = node.attachments;
  const flatMapResult = attachments.flatMap((id) => {
    if (null != id.id) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[16]).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
        const obj = { id: id.id };
        const merged = Object.assign(id);
        const items = [obj];
      }
      return [];
    }
  });
  let tmp2 = closure_7;
  let obj = { line: obj2.describeNode(node), live: flag2, settled: tmp9, failed: "failed" === node.status, presentation: str2, crestColor, inGutter: flag, epoch, trailing: tmp4Result };
  let tmp8 = node;
  let tmp7 = ConjureNativeStatusLineDefault;
  obj2 = node(12552);
  str2 = "detail";
  tmp9 = !flag2 && "failed" !== node.status;
  if (flag2) {
    str2 = "headline";
  }
  tmp4Result = null;
  if (null != node.durationMs) {
    let obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp8Result.describeDuration(node.durationMs) };
    let Text = tmp8(5619).Text;
    tmp8Result = tmp8(12404);
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [tmp4(tmp7, obj), , ];
  let tmp4Result3 = null;
  if (node.detail.length > 0) {
    let obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          let WarningIcon;
          let items;
          let obj4;
          const Text = Text_Text.Text;
          let stepCommand;
          if (children.startsWith("$ ")) {
            stepCommand = closure_1.stepCommand;
          }
          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
          const tmpResult = metroRequire(Text, obj, index);
          let tmp7 = node.detailError[index];
          if (tmp7 == null) {
            tmp7 = null;
          }
          let tmp8 = tmpResult;
          if (null != tmp7) {
            const obj2 = { style: closure_1.stepLine, children: items };
            items = [tmpResult, ];
            const obj3 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp7, children: metroRequire(WarningIcon, obj4) };
            obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
            WarningIcon = WarningIcon2.WarningIcon;
            items[1] = metroRequire(View, obj3);
            tmp8 = metroImportDefault(View, obj2, index);
          }
          return tmp8;
        })
    };
    detail = node.detail;
    tmp4Result3 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != projectId) {
    tmp4Result4 = null;
    if (flatMapResult.length > 0) {
      const obj5 = { style: tmp.stepDetail, children: closure_6(ConjureNativeStepImagesDefault, obj6) };
      obj6 = { projectId, images: flatMapResult };
      tmp4Result4 = tmp4(tmp3, obj5);
    }
  }
  children[2] = tmp4Result4;
  return tmp2(View, { children });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { activityBox: obj2, activityDetail: obj3, stepDetail: obj4, stepLine: obj5, stepCommand: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 } };
obj2 = { marginLeft: -conjureNativeChatLayout.RAIL_INDENT };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: conjureNativeChatLayout.RAIL_INDENT };
obj4 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureActivityBox.tsx");

export default function ConjureActivityBox(projectId) {
  let items;
  let tree;
  let turnActive;
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  let flag = projectId.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  let closure_3;
  const tmp = closure_8();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = projectId(length[8]);
  const tasks = tree.tasks;
  closure_3 = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_6(TurnStatusLine, { projectId, tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      const obj = ConjureSubagentMark;
      familiarMarkResult = obj.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_3.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = metroRequire(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_7(View, obj2);
};
export function stretchOf(memo, index, arg2) {
  let steps;
  let tasks;
  let closure_0 = index;
  const obj = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
  steps = memo.steps;
  tasks = memo.tasks;
  const tmp = arg2;
  if (tmp) {
    let obj3;
    if (null != memo.turn) {
      obj3 = { turn: memo.turn };
      const obj2 = { turn: memo.turn };
    }
    const merged = Object.assign(obj3);
    return obj;
  }
  obj3 = {};
}
