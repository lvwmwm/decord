// Module ID: 11290
// Function ID: 11291
// Name: DevToolsExperimentsScreen
// Dependencies: [32, 19, 17, 4750, 502, 2067, 4751, 21, 4836, 576, 11016, 11017, 6402, 6470, 11291, 12, 1177, 7678, 6471, 6476, 7318, 4755, 4800, 5917, 4832, 1254, 11288, 5999, 7316, 6610, 4528, 4792, 6571, 6570, 2]

// Module 11290 (DevToolsExperimentsScreen)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import ExperimentManager from "ExperimentManager" /* 4755 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 7318 */;
import useExperimentAssignments from "useExperimentAssignments" /* 11288 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, map;

let c10;
let c9;
let closure_12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function UserExperimentDebugView(id) {
  let experiment;
  let items;
  let override;
  let str;
  let str4;
  ({ override, experiment } = id);
  id = id.id;
  const tmp = closure_13();
  const id1 = AuthenticationStore.getId();
  const installationForTracking = AuthenticationStore.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    const obj = FingerprintUtils;
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id1;
  if ("installation" === experiment.kind) {
    tmp7 = id1;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  const obj2 = useExperimentAssignments;
  const experimentAssignment = obj2.useExperimentAssignment(experiment, tmp7);
  const obj3 = useExperimentAssignments;
  const experimentServerAssignment = obj3.useExperimentServerAssignment(experiment, tmp7);
  const obj4 = _modDef12;
  const sortByResult = obj4.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  });
  const mapped = sortByResult.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const date = new Date(tmp2);
    return "" + date.toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal2 = HermesInternal;
    str = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    str = "Currently unassigned";
    if (null != experimentAssignment) {
      const _HermesInternal = HermesInternal;
      str = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const obj5 = { style: tmp.debugContainer, children: items };
  const TableRowGroup = tmp8(5999).TableRowGroup;
  const obj6 = { label: str, subLabel: str4 };
  str4 = undefined;
  const TableRow = tmp8(5917).TableRow;
  const tmp15 = closure_12;
  const tmp16 = View;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  items = [, , , , , , ];
  const obj7 = { title: "Overview", hasIcons: false, children: unpackModuleId(TableRow, obj6) };
  items[0] = unpackModuleId(TableRowGroup, obj7);
  items[1] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup2 = tmp8(5999).TableRowGroup;
  let str5 = "None";
  let str6 = "None";
  const TableRow2 = tmp8(5917).TableRow;
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  const obj8 = { title: "Server Descriptor", hasIcons: false, children: unpackModuleId(TableRow2, { label: str6 }) };
  items[2] = unpackModuleId(TableRowGroup2, obj8);
  items[3] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup3 = tmp8(5999).TableRowGroup;
  let json = str5;
  const TableRow3 = tmp8(5917).TableRow;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  const obj9 = { title: "Override Descriptor", hasIcons: false, children: unpackModuleId(TableRow3, { label: json }) };
  items[4] = unpackModuleId(TableRowGroup3, obj9);
  items[5] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup4 = tmp8(5999).TableRowGroup;
  const TableRow4 = tmp8(5917).TableRow;
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const obj10 = { title: "Recent Exposures", hasIcons: false, children: unpackModuleId(TableRow4, { label: str5 }) };
  items[6] = unpackModuleId(TableRowGroup4, obj10);
  return tmp15(tmp16, obj5);
}
function GuildExperimentDebugView(arg0) {
  let TableRow2;
  let id;
  let items1;
  let mapped3;
  let obj9;
  let override;
  let str;
  ({ id, override } = arg0);
  const tmp = closure_13();
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  let obj = _modDef12;
  const sortByResult = obj.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  });
  const mapped = sortByResult.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const date = new Date(tmp2);
    return "" + date.toLocaleString() + " (" + tmp + ")";
  });
  const obj3 = {};
  const items = [];
  const obj2 = _modDef12;
  const sortByResult1 = obj2.sortBy(GuildStore.getGuildsArray(), (name) => {
    const str = name.name;
    return str.toLowerCase();
  });
  const iter = sortByResult1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, nextResult.id);
    let bucket;
    if (guildExperimentDescriptor != null) {
      bucket = guildExperimentDescriptor.bucket;
    }
    if (bucket == null) {
      bucket = constants.NOT_ELIGIBLE;
    }
    let tmp10 = bucket;
    if (!(bucket in obj3)) {
      obj3[tmp10] = 0;
    }
    obj3[tmp10] = obj3[tmp10] + 1;
    let _HermesInternal = HermesInternal;
    let arr = items.push("" + tmp5.name + ": " + tmp10);
    continue;
  }
  const obj4 = _modDef12(obj3);
  const keys = obj4.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((item) => "" + obj3[item] + " guilds are in bucket " + item);
  const obj5 = { style: tmp.debugContainer, children: items1 };
  const joined = mapped2.join(", ");
  const TableRowGroup = obj3(5999).TableRowGroup;
  const obj6 = { label: "Current Assignments: " + joined, subLabel: str };
  const TableRow = obj3(5917).TableRow;
  str = null;
  const tmp17 = closure_12;
  const tmp18 = View;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  items1 = [, , , , , , , , ];
  const obj7 = { title: "Overview", hasIcons: false, children: closure_11(TableRow, obj6) };
  items1[0] = closure_11(TableRowGroup, obj7);
  items1[1] = closure_11(obj3(1177).Spacer, { size: 16 });
  const obj8 = { title: "Guild Assignments", hasIcons: false, children: closure_11(TableRow2, obj9) };
  const TableRowGroup2 = tmp20(5999).TableRowGroup;
  obj9 = { label: items.join("\n") };
  TableRow2 = tmp20(5917).TableRow;
  items1[2] = closure_11(TableRowGroup2, obj8);
  items1[3] = closure_11(obj3(1177).Spacer, { size: 16 });
  const TableRowGroup3 = tmp20(5999).TableRowGroup;
  let str2 = "None";
  let str3 = "None";
  const TableRow3 = tmp20(5917).TableRow;
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj10 = { title: "Server Descriptor", hasIcons: false, children: closure_11(TableRow3, { label: str3 }) };
  items1[4] = closure_11(TableRowGroup3, obj10);
  items1[5] = closure_11(obj3(1177).Spacer, { size: 16 });
  const TableRowGroup4 = tmp20(5999).TableRowGroup;
  const TableRow4 = tmp20(5917).TableRow;
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj11 = { title: "Override Descriptor", hasIcons: false, children: closure_11(TableRow4, { label: str2 }) };
  items1[6] = closure_11(TableRowGroup4, obj11);
  items1[7] = closure_11(obj3(1177).Spacer, { size: 16 });
  const TableRowGroup5 = tmp20(5999).TableRowGroup;
  if (0 === mapped.length) {
    mapped3 = tmp19(tmp20(5917).TableRow, { label: "none" });
  } else {
    mapped3 = mapped.map((label) => {
      const obj = { label, labelLineClamp: 1 };
      return closure_1_11(obj3(dependencyMap[23]).TableRow, obj, label);
    });
  }
  items1[8] = closure_11(TableRowGroup5, { title: "Recent Exposures", hasIcons: false, children: mapped3 });
  return tmp17(tmp18, obj5);
}
class ExperimentDetails {
  constructor(arg0) {
    let TableRowGroup2;
    let experiment;
    let id;
    let items1;
    let obj3;
    let obj6;
    let onCopyLink;
    let options;
    let override;
    let tmp6Result;
    ({ experiment, override, id, options, onCopyLink } = arg0);
    let tmp = closure_13();
    let obj = onCopyLink(7316);
    const uRLForExperiment = obj.getURLForExperiment(id);
    const items = [uRLForExperiment, onCopyLink];
    let obj2 = { style: obj3, children: items1 };
    obj3 = { paddingHorizontal: uRLForExperiment(576).space.PX_12 };
    const callback = react.useCallback(() => {
      let obj = ClipboardUtils;
      obj.copy(uRLForExperiment, () => {
        const obj = uRLForExperiment(dependencyMap[30]);
        const obj2 = { key: "experiment-link-copied", content: "Copied experiment link", IconComponent: onCopyLink(dependencyMap[31]).CircleCheckIcon, iconColor: "status-positive" };
        obj.open(obj2);
        if (closure_1_0 != null) {
          closure_1_0();
        }
      });
    }, items);
    const obj4 = {
      title: "Experiment Assignments",
      hasIcons: false,
      children: options.map((item, index) => {
        let isDestructive;
        let label;
        let onPress;
        ({ label, isDestructive, onPress } = item);
        let variant = "default";
        const TableRow = onCopyLink(dependencyMap[23]).TableRow;
        const tmp = closure_1_11;
        if (isDestructive) {
          variant = "danger";
        }
        return tmp(TableRow, { variant, label, onPress }, index);
      })
    };
    const TableRowGroup = onCopyLink(5999).TableRowGroup;
    items1 = [closure_11(TableRowGroup, obj4), , ];
    const obj5 = { style: tmp.copyExperimentLink, children: closure_11(TableRowGroup2, obj6) };
    obj6 = { title: "Share", hasIcons: false, children: closure_11(onCopyLink(5917).TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback }) };
    TableRowGroup2 = onCopyLink(5999).TableRowGroup;
    items1[1] = closure_11(View, obj5);
    const tmp4 = closure_12;
    const tmp5 = View;
    if ("guild" === experiment.kind) {
      const obj7 = { id, override };
      tmp6Result = tmp6(GuildExperimentDebugView, obj7);
    } else {
      const obj8 = { id, override, experiment };
      tmp6Result = tmp6(UserExperimentDebugView, obj8);
    }
    items1[2] = tmp6Result;
    return tmp4(tmp5, obj2);
  }
}
function ExperimentActionSheet(arg0) {
  let experiment;
  let id;
  let obj2;
  let onCopyLink;
  let options;
  let override;
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  const obj = { header: unpackModuleId(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), children: unpackModuleId(ExperimentDetails, { experiment, override, id, options, onCopyLink }) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: experiment.title, subtitle: id };
  return unpackModuleId(BottomSheet, obj);
}
const View = react_native.View;
({ ExperimentBuckets: c9, ExperimentTypes: c10 } = ExperimentConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, listContainer: obj3, searchBar: obj4, debugContainer: obj5, copyExperimentLink: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj5 = { marginTop: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_16 };
createStyles(obj);
const memoResult = react.memo(() => {
  let experiments;
  let experiments2;
  let items4;
  let memo1;
  let obj8;
  let overridesInfo2;
  let tmp21;
  let tmp3;
  let tmp4;
  const tmp = closure_13();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  overridesInfo2(memo1.useState(""), 2);
  let obj = experiments(experiments2[10]);
  const legacyExperiments = obj.useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const obj2 = experiments(experiments2[11]);
  const apexExperiments = obj2.useApexExperiments();
  experiments2 = apexExperiments.experiments;
  overridesInfo2 = apexExperiments.overridesInfo;
  let items = [experiments, experiments2];
  const memo = memo1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return obj;
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  memo1 = memo1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return obj;
  }, items1);
  const insets = overridesInfo(experiments2[12])({ includeKeyboardHeight: true }).insets;
  const tmp12 = overridesInfo(experiments2[13])();
  const getBestMatches = experiments(experiments2[14]).getBestMatches;
  experiments(experiments2[14]);
  const sortEntries = experiments(experiments2[14]).sortEntries;
  experiments(experiments2[14]);
  const obj3 = experiments(experiments2[14]);
  const bestMatches = getBestMatches(sortEntries(obj3.getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => {
    const obj = { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 };
    return unpackModuleId(closure_14, obj);
  }, items3);
  const obj4 = overridesInfo(experiments2[15]);
  if (obj4.isEmpty(memo)) {
    const obj5 = { Illustration: experiments(experiments2[17]).NoResults, title: "No Experiments", body: "No experiments are currently running." };
    const EmptyState = tmp5(tmp6[16]).EmptyState;
    tmp21 = closure_11(EmptyState, obj5);
  } else {
    const obj6 = { style: tmp.container, children: items4 };
    const obj7 = { style: tmp.searchBar, children: closure_11(experiments(experiments2[18]).SearchField, obj8) };
    obj8 = { size: "md", onChange: tmp4 };
    items4 = [closure_11(bestMatches, obj7), ];
    const obj9 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp12, insetEnd: insets.bottom + overridesInfo(experiments2[9]).space.PX_16, renderItem: callback };
    const tmp11Result = overridesInfo(experiments2[19]);
    items4[1] = closure_11(tmp11Result, obj9);
    tmp21 = closure_12(bestMatches, obj6);
  }
  return tmp21;
});
let closure_14 = react.memo((id) => {
  let end;
  let start;
  id = id.id;
  const override = id.override;
  const experiment = id.experiment;
  let items = [experiment];
  ({ start, end } = id);
  const memo = react.useMemo(() => {
    const obj = ExperimentDevToolsUtils;
    return obj.getExperimentVariantsForDevTools(experiment);
  }, items);
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = react.useCallback(() => {
    let system;
    map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      let closure_0 = label;
      let obj = {
        label: label.label,
        onPress() {
          const obj = map(system[21]);
          obj.overrideBucket(system.system, closure_2_0, id.id);
          const obj2 = items(system[22]);
          obj2.hideActionSheet("UserSettingsExperimentBucket");
        }
      };
      items.push(obj);
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        const obj = id(experiment[21]);
        obj.overrideBucket(system.system, map, null);
        const obj2 = override(experiment[22]);
        obj2.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    items.push(obj);
    let obj2 = override(experiment[22]);
    const obj3 = { default: ExperimentActionSheet };
    const obj4 = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        const obj = items(system[22]);
        return obj.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    obj2.openLazy(Promise.resolve(obj3), "UserSettingsExperimentBucket", obj4);
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  let str = "N/A";
  if (null != variantId) {
    let label;
    const found = memo.find((id) => id.id === variantId);
    if (null != found) {
      label = found.label;
    } else {
      const _HermesInternal = HermesInternal;
      label = "Unknown (" + variantId + ")";
    }
    str = label;
  }
  let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback, trailing: closure_11(id(experiment[24]).Text, { variant: "text-md/medium", color: "text-muted", children: str }) };
  const TableRow = id(experiment[23]).TableRow;
  return closure_11(TableRow, obj);
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default memoResult;
export { ExperimentDetails };
