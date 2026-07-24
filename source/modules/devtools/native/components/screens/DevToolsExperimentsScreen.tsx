// Module ID: 10984
// Function ID: 85352
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4044, 1194, 1838, 4045, 33, 4130, 689, 10490, 10491, 5160, 8871, 10985, 22, 1273, 8547, 5772, 9280, 7874, 4052, 4098, 5165, 4126, 490, 10982, 5501, 7872, 5490, 3831, 4091, 5187, 5186, 2]

// Module 10984 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "CircleCheckIcon";
import { View } from "TableRowGroupTitle";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import ExperimentBuckets from "ExperimentBuckets";
import jsxProd from "RedesignBottomSheetTitleHeaderBase";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function UserExperimentDebugView(id) {
  let experiment;
  let override;
  ({ override, experiment } = id);
  id = store2.getId();
  const installationForTracking = store2.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    let obj = require(490) /* extractId */;
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  let obj1 = require(10982) /* getExperimentServerAssignment */;
  const experimentAssignment = obj1.useExperimentAssignment(experiment, tmp7);
  let obj2 = require(10982) /* getExperimentServerAssignment */;
  const experimentServerAssignment = obj2.useExperimentServerAssignment(experiment, tmp7);
  let obj3 = importDefault(22);
  const tmp = callback3();
  const mapped = obj3.sortBy(store.getRecentExposures(constants2.USER, id.id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  }).map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === require(4052) /* trackExposureToExperiment */.ExperimentSystem.LEGACY) {
    let NOT_ELIGIBLE = experimentAssignment;
    if (null == experimentAssignment) {
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal2 = HermesInternal;
    let str = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    str = "Currently unassigned";
    if (null != experimentAssignment) {
      const _HermesInternal = HermesInternal;
      str = "Currently assigned to variant " + experimentAssignment;
    }
  }
  obj = { style: tmp.debugContainer };
  obj = { title: "Overview", hasIcons: false };
  obj1 = { label: str };
  let str4;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  obj1.subLabel = str4;
  obj.children = callback(require(5165) /* TableRowInner */.TableRow, obj1);
  const items = [callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj), callback(require(1273) /* Button */.Spacer, { size: 16 }), , , , , ];
  obj2 = { title: "Server Descriptor", hasIcons: false };
  obj3 = {};
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  obj3.label = str6;
  obj2.children = callback(require(5165) /* TableRowInner */.TableRow, obj3);
  items[2] = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj2);
  items[3] = callback(require(1273) /* Button */.Spacer, { size: 16 });
  const obj4 = { title: "Override Descriptor", hasIcons: false };
  const obj5 = {};
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  obj5.label = json;
  obj4.children = callback(require(5165) /* TableRowInner */.TableRow, obj5);
  items[4] = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj4);
  items[5] = callback(require(1273) /* Button */.Spacer, { size: 16 });
  const obj6 = { title: "Recent Exposures", hasIcons: false };
  const obj7 = {};
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  obj7.label = str5;
  obj6.children = callback(require(5165) /* TableRowInner */.TableRow, obj7);
  items[6] = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj6);
  obj.children = items;
  return closure_12(View, obj);
}
function GuildExperimentDebugView(arg0) {
  let id;
  let iter2;
  let override;
  ({ id, override } = arg0);
  const loadedGuildExperiment = store.getLoadedGuildExperiment(id);
  let obj = importDefault(22);
  const tmp = callback3();
  const mapped = obj.sortBy(store.getRecentExposures(constants2.GUILD, id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  }).map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  let obj1 = importDefault(22);
  obj = {};
  const items = [];
  const tmp3 = _createForOfIteratorHelperLoose(obj1.sortBy(guildsArray.getGuildsArray(), (name) => name.name.toLowerCase()));
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = store;
      let guildExperimentDescriptor = store.getGuildExperimentDescriptor(id, value.id);
      let bucket;
      if (null != guildExperimentDescriptor) {
        bucket = guildExperimentDescriptor.bucket;
      }
      if (null == bucket) {
        let tmp7 = constants;
        bucket = constants.NOT_ELIGIBLE;
      }
      if (!(bucket in obj)) {
        obj[bucket] = 0;
      }
      obj[bucket] = obj[bucket] + 1;
      let _HermesInternal = HermesInternal;
      let arr = items.push("" + value.name + ": " + bucket);
      iter2 = tmp3();
      iter = iter2;
    } while (!iter2.done);
  }
  let obj3 = importDefault(22)(obj);
  const keys = obj3.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((arg0) => "" + obj[arg0] + " guilds are in bucket " + arg0);
  obj = { style: tmp.debugContainer };
  const joined = mapped2.join(", ");
  obj1 = { title: "Overview", hasIcons: false };
  const obj2 = { label: "Current Assignments: " + joined };
  let str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  obj2.subLabel = str;
  obj1.children = callback(obj(5165).TableRow, obj2);
  const items1 = [callback(obj(5501).TableRowGroup, obj1), callback(obj(1273).Spacer, { size: 16 }), , , , , , , ];
  obj3 = { title: "Guild Assignments", hasIcons: false };
  const obj4 = { label: items.join("\n") };
  obj3.children = callback(obj(5165).TableRow, obj4);
  items1[2] = callback(obj(5501).TableRowGroup, obj3);
  items1[3] = callback(obj(1273).Spacer, { size: 16 });
  const obj5 = { title: "Server Descriptor", hasIcons: false };
  const obj6 = {};
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  obj6.label = str3;
  obj5.children = callback(obj(5165).TableRow, obj6);
  items1[4] = callback(obj(5501).TableRowGroup, obj5);
  items1[5] = callback(obj(1273).Spacer, { size: 16 });
  const obj7 = { title: "Override Descriptor", hasIcons: false };
  const obj8 = {};
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  obj8.label = str2;
  obj7.children = callback(obj(5165).TableRow, obj8);
  items1[6] = callback(obj(5501).TableRowGroup, obj7);
  items1[7] = callback(obj(1273).Spacer, { size: 16 });
  const obj9 = { title: "Recent Exposures", hasIcons: false };
  if (0 === mapped.length) {
    const obj10 = { label: "none" };
    let mapped3 = callback(obj(5165).TableRow, obj10);
  } else {
    mapped3 = mapped.map((label) => {
      const obj = { label, labelLineClamp: 1 };
      return outer1_11(obj(outer1_2[23]).TableRow, obj, label);
    });
  }
  obj9.children = mapped3;
  items1[8] = callback(obj(5501).TableRowGroup, obj9);
  obj.children = items1;
  return closure_12(View, obj);
}
class ExperimentDetails {
  constructor(arg0) {
    ({ experiment, override, id, options, onCopyLink } = global);
    tmp = c13();
    obj = require("regExp");
    uRLForExperiment = obj.getURLForExperiment(id);
    closure_1 = uRLForExperiment;
    items = [, ];
    items[0] = uRLForExperiment;
    items[1] = onCopyLink;
    obj = {};
    obj1 = {};
    callback = closure_4.useCallback(() => {
      onCopyLink(outer1_2[29]).copy(uRLForExperiment, () => {
        let obj = uRLForExperiment(outer2_2[30]);
        obj = { key: "experiment-link-copied", content: "Copied experiment link", IconComponent: onCopyLink(outer2_2[31]).CircleCheckIcon, iconColor: "status-positive" };
        obj.open(obj);
        if (null != outer1_0) {
          outer1_0();
        }
      });
    }, items);
    tmp4 = jsxs;
    tmp5 = View;
    obj1.paddingHorizontal = require("_createForOfIteratorHelperLoose").space.PX_12;
    obj.style = obj1;
    obj2 = { title: "Experiment Assignments", hasIcons: false };
    obj2.children = options.map((arg0, arg1) => {
      let isDestructive;
      let label;
      let onPress;
      ({ label, isDestructive, onPress } = arg0);
      const obj = {};
      let str = "default";
      if (isDestructive) {
        str = "danger";
      }
      obj.variant = str;
      obj.label = label;
      obj.onPress = onPress;
      return outer1_11(onCopyLink(outer1_2[23]).TableRow, obj, arg1);
    });
    items1 = [, , ];
    items1[0] = jsx(require("TableRowGroupTitle").TableRowGroup, obj2);
    obj3 = { style: tmp.copyExperimentLink };
    obj4 = { title: "Share", hasIcons: false };
    obj4.children = jsx(require("TableRowInner").TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback });
    obj3.children = jsx(require("TableRowGroupTitle").TableRowGroup, obj4);
    items1[1] = jsx(View, obj3);
    if ("guild" === experiment.kind) {
      tmp9 = jsx;
      tmp10 = GuildExperimentDebugView;
      obj5 = {};
      obj5.id = id;
      obj5.override = override;
      tmp8 = jsx(GuildExperimentDebugView, obj5);
    } else {
      tmp6 = jsx;
      tmp7 = UserExperimentDebugView;
      obj6 = {};
      obj6.id = id;
      obj6.override = override;
      obj6.experiment = experiment;
      tmp8 = jsx(UserExperimentDebugView, obj6);
    }
    items1[2] = tmp8;
    obj.children = items1;
    return tmp4(tmp5, obj);
  }
}
function ExperimentActionSheet(arg0) {
  let experiment;
  let id;
  let onCopyLink;
  let options;
  let override;
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  let obj = {};
  obj = { title: experiment.title, subtitle: id };
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj.children = callback(ExperimentDetails, { experiment, override, id, options, onCopyLink });
  return callback(require(5187) /* Background */.BottomSheet, obj);
}
({ ExperimentBuckets: closure_9, ExperimentTypes: closure_10 } = ExperimentBuckets);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.listContainer = _createForOfIteratorHelperLoose;
obj.searchBar = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.debugContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.copyExperimentLink = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_14 = importAllResult.memo((id) => {
  let end;
  let start;
  id = id.id;
  const override = id.override;
  const experiment = id.experiment;
  let items = [experiment];
  ({ start, end } = id);
  const memo = importAllResult.useMemo(() => id(experiment[20]).getExperimentVariantsForDevTools(experiment), items);
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = importAllResult.useCallback(() => {
    const map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      let closure_0 = label;
      items.push({
        label: label.label,
        onPress() {
          id(experiment[21]).overrideBucket(outer2_2.system, map, label.id);
          const obj = id(experiment[21]);
          override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        id(experiment[21]).overrideBucket(outer1_2.system, map, null);
        const obj = id(experiment[21]);
        override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    items.push(obj);
    obj = { default: outer1_20 };
    obj = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink(arg0) {
        return override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    override(experiment[22]).openLazy(Promise.resolve(obj), "UserSettingsExperimentBucket", obj);
  }, items1);
  if (null != override) {
    variantId = override.variantId;
  }
  let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback };
  obj = {
    variant: "text-md/medium",
    color: "text-muted",
    children: (function getVariantLabel(memo, variantId) {
      let closure_0 = variantId;
      if (null == variantId) {
        return "N/A";
      } else {
        const found = memo.find((id) => id.id === closure_0);
        if (null != found) {
          let label = found.label;
        } else {
          const _HermesInternal = HermesInternal;
          label = "Unknown (" + variantId + ")";
        }
        return label;
      }
    })(memo, variantId)
  };
  obj.trailing = callback(id(experiment[24]).Text, obj);
  return callback(id(experiment[23]).TableRow, obj);
});
const memoResult = importAllResult.memo(() => {
  let tmp3;
  let tmp4;
  const tmp = callback3();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  let obj = experiments(experiments2[10]);
  const legacyExperiments = obj.useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  let obj1 = experiments(experiments2[11]);
  const apexExperiments = obj1.useApexExperiments();
  experiments2 = apexExperiments.experiments;
  overridesInfo2 = apexExperiments.overridesInfo;
  let items = [experiments, experiments2];
  const memo = memo1.useMemo(() => {
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return {};
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  memo1 = memo1.useMemo(() => {
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return {};
  }, items1);
  const tmp2 = overridesInfo2(memo1.useState(""), 2);
  let obj2 = experiments(experiments2[14]);
  let obj3 = experiments(experiments2[14]);
  const tmp9 = overridesInfo(experiments2[13])();
  const bestMatches = obj2.getBestMatches(obj3.sortEntries(experiments(experiments2[14]).getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => outer1_11(outer1_14, { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 }), items3);
  const obj5 = experiments(experiments2[14]);
  if (obj6.isEmpty(memo)) {
    obj = { Illustration: experiments(experiments2[17]).NoResults, title: "No Experiments", body: "No experiments are currently running." };
    let tmp22 = callback(experiments(experiments2[16]).EmptyState, obj);
  } else {
    obj = { style: tmp.container };
    obj1 = { style: tmp.searchBar };
    obj2 = { size: "md", onChange: tmp4 };
    obj1.children = callback(experiments(experiments2[18]).SearchField, obj2);
    const items4 = [callback(bestMatches, obj1), ];
    obj3 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp9, insetEnd: overridesInfo(experiments2[12])({ includeKeyboardHeight: true }).insets.bottom + overridesInfo(experiments2[9]).space.PX_16, renderItem: callback };
    items4[1] = callback(overridesInfo(experiments2[19]), obj3);
    obj.children = items4;
    tmp22 = callback2(bestMatches, obj);
    const tmp21 = overridesInfo(experiments2[19]);
  }
  return tmp22;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default memoResult;
export { ExperimentDetails };
