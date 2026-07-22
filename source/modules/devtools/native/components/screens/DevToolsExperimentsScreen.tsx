// Module ID: 10947
// Function ID: 85114
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10947 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    let obj = arg1(dependencyMap[25]);
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  let obj1 = arg1(dependencyMap[26]);
  const experimentAssignment = obj1.useExperimentAssignment(experiment, tmp7);
  let obj2 = arg1(dependencyMap[26]);
  const experimentServerAssignment = obj2.useExperimentServerAssignment(experiment, tmp7);
  let obj3 = importDefault(dependencyMap[15]);
  const tmp = callback4();
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
  if (experiment.system === arg1(dependencyMap[21]).ExperimentSystem.LEGACY) {
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
  obj = {};
  obj1 = { label: str };
  let str4;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  obj1.subLabel = str4;
  obj.children = callback2(arg1(dependencyMap[23]).TableRow, obj1);
  const items = [callback2(arg1(dependencyMap[27]).TableRowGroup, obj), callback2(arg1(dependencyMap[16]).Spacer, { size: 16 }), , , , , ];
  obj2 = {};
  obj3 = {};
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  obj3.label = str6;
  obj2.children = callback2(arg1(dependencyMap[23]).TableRow, obj3);
  items[2] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj2);
  items[3] = callback2(arg1(dependencyMap[16]).Spacer, { size: 16 });
  const obj4 = {};
  const obj5 = {};
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  obj5.label = json;
  obj4.children = callback2(arg1(dependencyMap[23]).TableRow, obj5);
  items[4] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj4);
  items[5] = callback2(arg1(dependencyMap[16]).Spacer, { size: 16 });
  const obj6 = { -9223372036854775808: "e53950ae8b4e55a0d929557716fe168b", 9223372036854775807: "img_kick_member" };
  const obj7 = {};
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  obj7.label = str5;
  obj6.children = callback2(arg1(dependencyMap[23]).TableRow, obj7);
  items[6] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj6);
  obj.children = items;
  return closure_12(View, obj);
}
function GuildExperimentDebugView(arg0) {
  let id;
  let iter2;
  let override;
  ({ id, override } = arg0);
  const loadedGuildExperiment = store.getLoadedGuildExperiment(id);
  let obj = importDefault(dependencyMap[15]);
  const tmp = callback4();
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
  let obj1 = importDefault(dependencyMap[15]);
  obj = {};
  const arg1 = obj;
  const items = [];
  const tmp3 = _createForOfIteratorHelperLoose(obj1.sortBy(guildsArray.getGuildsArray(), (name) => name.name.toLowerCase()));
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = closure_6;
      let guildExperimentDescriptor = closure_6.getGuildExperimentDescriptor(id, value.id);
      let bucket;
      if (null != guildExperimentDescriptor) {
        bucket = guildExperimentDescriptor.bucket;
      }
      if (null == bucket) {
        let tmp7 = closure_9;
        bucket = closure_9.NOT_ELIGIBLE;
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
  let obj3 = importDefault(dependencyMap[15])(obj);
  const keys = obj3.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((arg0) => "" + obj[arg0] + " guilds are in bucket " + arg0);
  obj = { style: tmp.debugContainer };
  const joined = mapped2.join(", ");
  obj1 = {};
  const obj2 = { label: "Current Assignments: " + joined };
  let str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  obj2.subLabel = str;
  obj1.children = callback2(arg1(dependencyMap[23]).TableRow, obj2);
  const items1 = [callback2(arg1(dependencyMap[27]).TableRowGroup, obj1), callback2(arg1(dependencyMap[16]).Spacer, { size: 16 }), , , , , , , ];
  obj3 = { -9223372036854775808: null, 9223372036854775807: null };
  const obj4 = { label: items.join("\n") };
  obj3.children = callback2(arg1(dependencyMap[23]).TableRow, obj4);
  items1[2] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj3);
  items1[3] = callback2(arg1(dependencyMap[16]).Spacer, { size: 16 });
  const obj5 = {};
  const obj6 = {};
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  obj6.label = str3;
  obj5.children = callback2(arg1(dependencyMap[23]).TableRow, obj6);
  items1[4] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj5);
  items1[5] = callback2(arg1(dependencyMap[16]).Spacer, { size: 16 });
  const obj7 = {};
  const obj8 = {};
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  obj8.label = str2;
  obj7.children = callback2(arg1(dependencyMap[23]).TableRow, obj8);
  items1[6] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj7);
  items1[7] = callback2(arg1(dependencyMap[16]).Spacer, { size: 16 });
  const obj9 = { -9223372036854775808: "e53950ae8b4e55a0d929557716fe168b", 9223372036854775807: "img_kick_member" };
  if (0 === mapped.length) {
    const obj10 = { label: "none" };
    let mapped3 = callback2(arg1(dependencyMap[23]).TableRow, obj10);
  } else {
    mapped3 = mapped.map((label) => {
      const obj = { label, labelLineClamp: 1 };
      return callback(obj(closure_2[23]).TableRow, obj, label);
    });
  }
  obj9.children = mapped3;
  items1[8] = callback2(arg1(dependencyMap[27]).TableRowGroup, obj9);
  obj.children = items1;
  return closure_12(View, obj);
}
class ExperimentDetails {
  constructor(arg0) {
    ({ experiment, override, id, options, onCopyLink } = global);
    arg1 = onCopyLink;
    tmp = closure_13();
    obj = arg1(dependencyMap[28]);
    uRLForExperiment = obj.getURLForExperiment(id);
    importDefault = uRLForExperiment;
    items = [, ];
    items[0] = uRLForExperiment;
    items[1] = onCopyLink;
    obj = {};
    obj1 = {};
    callback = closure_4.useCallback(() => {
      onCopyLink(closure_2[29]).copy(uRLForExperiment, () => {
        let obj = callback2(closure_2[30]);
        obj = { IconComponent: callback(closure_2[31]).CircleCheckIcon };
        obj.open(obj);
        if (null != callback) {
          callback();
        }
      });
    }, items);
    tmp4 = jsxs;
    tmp5 = View;
    obj1.paddingHorizontal = importDefault(dependencyMap[9]).space.PX_12;
    obj.style = obj1;
    obj2 = { -9223372036854775808: true, 9223372036854775807: "/assets/images/native" };
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
      return closure_11(onCopyLink(closure_2[23]).TableRow, obj, arg1);
    });
    items1 = [, , ];
    items1[0] = jsx(arg1(dependencyMap[27]).TableRowGroup, obj2);
    obj3 = { style: tmp.copyExperimentLink };
    obj4 = { -9223372036854775808: 184, 9223372036854775807: 152 };
    obj4.children = jsx(arg1(dependencyMap[23]).TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback });
    obj3.children = jsx(arg1(dependencyMap[27]).TableRowGroup, obj4);
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
  obj.header = callback2(arg1(dependencyMap[33]).BottomSheetTitleHeader, obj);
  obj.children = callback2(ExperimentDetails, { experiment, override, id, options, onCopyLink });
  return callback2(arg1(dependencyMap[32]).BottomSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ ExperimentBuckets: closure_9, ExperimentTypes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_12 };
obj.listContainer = obj1;
const tmp3 = arg1(dependencyMap[7]);
obj.searchBar = { paddingVertical: importDefault(dependencyMap[9]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_12 };
const obj2 = { paddingVertical: importDefault(dependencyMap[9]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_12 };
obj.debugContainer = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
const obj3 = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
obj.copyExperimentLink = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
let closure_13 = obj1.createStyles(obj);
const obj4 = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
let closure_14 = importAllResult.memo((id) => {
  let end;
  let start;
  id = id.id;
  const arg1 = id;
  const override = id.override;
  const importDefault = override;
  const experiment = id.experiment;
  const dependencyMap = experiment;
  const items = [experiment];
  ({ start, end } = id);
  const memo = importAllResult.useMemo(() => id(experiment[20]).getExperimentVariantsForDevTools(experiment), items);
  let closure_3 = memo;
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = importAllResult.useCallback(() => {
    const map = new Map();
    const id = map;
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const override = items;
    const item1 = map.forEach((label) => {
      items.push({
        label: label.label,
        onPress() {
          arg0(system[21]).overrideBucket(system.system, arg0, arg0.id);
          const obj = arg0(system[21]);
          callback(system[22]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    let obj = {
      onPress() {
        map(system[21]).overrideBucket(system.system, map, null);
        const obj = map(system[21]);
        items(system[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    items.push(obj);
    obj = { default: closure_20 };
    obj = {
      id,
      experiment,
      override,
      options: items,
      onCopyLink(arg0) {
        return items(closure_2[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    override(experiment[22]).openLazy(Promise.resolve(obj), "UserSettingsExperimentBucket", obj);
  }, items1);
  if (null != override) {
    variantId = override.variantId;
  }
  let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback };
  obj = {
    cachedAt: "FrameEffect_02-4_Out",
    edpbxy: 0,
    children: function getVariantLabel(memo, variantId) {
      const id = variantId;
      if (null == variantId) {
        return "N/A";
      } else {
        const found = memo.find((id) => id.id === arg1);
        if (null != found) {
          let label = found.label;
        } else {
          const _HermesInternal = HermesInternal;
          label = "Unknown (" + variantId + ")";
        }
        return label;
      }
    }(memo, variantId)
  };
  obj.trailing = callback2(arg1(dependencyMap[24]).Text, obj);
  return callback2(arg1(dependencyMap[23]).TableRow, obj);
});
const memoResult = importAllResult.memo(() => {
  let tmp3;
  let tmp4;
  const tmp = callback4();
  [tmp3, tmp4] = callback(importAllResult.useState(""), 2);
  let obj = arg1(dependencyMap[10]);
  const legacyExperiments = obj.useLegacyExperiments();
  const experiments = legacyExperiments.experiments;
  const arg1 = experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const importDefault = overridesInfo;
  let obj1 = arg1(dependencyMap[11]);
  const apexExperiments = obj1.useApexExperiments();
  const experiments2 = apexExperiments.experiments;
  const dependencyMap = experiments2;
  const overridesInfo2 = apexExperiments.overridesInfo;
  let callback = overridesInfo2;
  const items = [experiments, experiments2];
  const memo = importAllResult.useMemo(() => {
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return {};
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  const memo1 = importAllResult.useMemo(() => {
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return {};
  }, items1);
  const tmp2 = callback(importAllResult.useState(""), 2);
  let obj2 = arg1(dependencyMap[14]);
  let obj3 = arg1(dependencyMap[14]);
  const tmp9 = importDefault(dependencyMap[13])();
  const bestMatches = obj2.getBestMatches(obj3.sortEntries(arg1(dependencyMap[14]).getEntries(memo), memo1), tmp3);
  const View = bestMatches;
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = importAllResult.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  callback = importAllResult.useCallback((arg0, arg1) => callback(closure_14, { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 }), items3);
  const obj5 = arg1(dependencyMap[14]);
  if (obj6.isEmpty(memo)) {
    obj = { -9223372036854775808: "Text", 9223372036854775807: "keys", 9223372036854775807: "HTTP", Illustration: arg1(dependencyMap[17]).NoResults };
    let tmp22 = callback2(arg1(dependencyMap[16]).EmptyState, obj);
  } else {
    obj = { style: tmp.container };
    obj1 = { style: tmp.searchBar };
    obj2 = { size: "md", onChange: tmp4 };
    obj1.children = callback2(arg1(dependencyMap[18]).SearchField, obj2);
    const items4 = [callback2(View, obj1), ];
    obj3 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp9, insetEnd: importDefault(dependencyMap[12])({ includeKeyboardHeight: true }).insets.bottom + importDefault(dependencyMap[9]).space.PX_16, renderItem: callback };
    items4[1] = callback2(importDefault(dependencyMap[19]), obj3);
    obj.children = items4;
    tmp22 = callback3(View, obj);
    const tmp21 = importDefault(dependencyMap[19]);
  }
  return tmp22;
});
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default memoResult;
export { ExperimentDetails };
