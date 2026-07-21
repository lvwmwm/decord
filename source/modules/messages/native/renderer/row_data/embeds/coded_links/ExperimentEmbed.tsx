// Module ID: 10941
// Function ID: 85078
// Name: ExperimentOverrideActionSheet
// Dependencies: []
// Exports: createExperimentEmbed, default

// Module 10941 (ExperimentOverrideActionSheet)
function ExperimentOverrideActionSheet(override) {
  const id = override.id;
  const arg1 = id;
  const experiment = override.experiment;
  const importDefault = experiment;
  const items = [experiment];
  const memo = React.useMemo(() => {
    if (null != experiment) {
      let experimentVariantsForDevTools = id(memo[16]).getExperimentVariantsForDevTools(experiment);
      const obj = id(memo[16]);
    } else {
      experimentVariantsForDevTools = [];
    }
    return experimentVariantsForDevTools;
  }, items);
  const dependencyMap = memo;
  const items1 = [id, experiment, memo];
  const memo1 = React.useMemo(() => {
    if (null == experiment) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map();
      const id = map;
      const item = memo.forEach((id) => {
        const result = map.set(id.id, id);
      });
      const items = [];
      const experiment = items;
      const item1 = map.forEach((label) => {
        items.push({
          label: label.label,
          onPress() {
            lib(closure_2[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = lib(closure_2[17]);
            arg0(closure_2[18]).overrideBucket(lib.system, arg0, arg0.id);
          }
        });
      });
      const obj = {
        <string:1369782698>: false,
        <string:3110185467>: false,
        onPress() {
            items(closure_2[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = items(closure_2[17]);
            map(closure_2[18]).overrideBucket(items.system, map, null);
          }
      };
      items.push(obj);
      return items;
    }
  }, items1);
  const callback = React.useCallback(() => {
    experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
  }, []);
  let obj = {};
  obj = { title: experiment.title, subtitle: id };
  obj.header = jsx(arg1(dependencyMap[20]).BottomSheetTitleHeader, obj);
  obj.children = jsx(arg1(dependencyMap[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback });
  return jsx(arg1(dependencyMap[19]).BottomSheet, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_5 = importDefault(dependencyMap[2]);
const ExperimentEmbedType = arg1(dependencyMap[3]).ExperimentEmbedType;
const InviteTypes = arg1(dependencyMap[4]).InviteTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
  id = id.id;
  const arg1 = id;
  let obj = arg1(dependencyMap[8]);
  const legacyExperiments = obj.useLegacyExperiments();
  const experiments = legacyExperiments.experiments;
  const importDefault = experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const dependencyMap = overridesInfo;
  const apexExperiments = arg1(dependencyMap[9]).useApexExperiments();
  const experiments2 = apexExperiments.experiments;
  const React = experiments2;
  const overridesInfo2 = apexExperiments.overridesInfo;
  const Image = overridesInfo2;
  const items = [experiments, experiments2, id];
  const memo = React.useMemo(() => {
    let tmp = experiments[closure_0];
    if (null == tmp) {
      tmp = experiments2[closure_0];
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    return tmp4;
  }, items);
  const items1 = [overridesInfo, overridesInfo2, id];
  const memo1 = React.useMemo(() => {
    let tmp = overridesInfo[closure_0];
    if (null == tmp) {
      tmp = overridesInfo2[closure_0];
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    return tmp4;
  }, items1);
  arg1(dependencyMap[22]);
  let tmp7 = null;
  if (null != memo) {
    tmp7 = null;
    if (tmp6) {
      obj = { id, experiment: memo, override: memo1 };
      tmp7 = <ExperimentOverrideActionSheet {...obj} />;
    }
  }
  return tmp7;
};
export const createExperimentEmbed = function createExperimentEmbed(url, arg1) {
  let baseColors;
  let colors;
  let experiments;
  let overridesInfo;
  ({ colors, baseColors } = importDefault(dependencyMap[6])(arg1));
  let obj = arg1(dependencyMap[7]);
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  let obj1 = arg1(dependencyMap[7]);
  const experimentTreatmentFromEmbedURL = obj1.getExperimentTreatmentFromEmbedURL(url);
  arg1 = experimentTreatmentFromEmbedURL;
  const tmp = importDefault(dependencyMap[6])(arg1);
  const legacyExperiments = arg1(dependencyMap[8]).getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj3 = arg1(dependencyMap[8]);
  const apexExperiments = arg1(dependencyMap[9]).getApexExperiments();
  let tmp7 = null;
  if (null != experimentFromEmbedURL) {
    let tmp8 = experiments[experimentFromEmbedURL];
    if (null == tmp8) {
      tmp8 = tmp6[experimentFromEmbedURL];
    }
    tmp7 = tmp8;
  }
  if (null != experimentFromEmbedURL) {
    if (null != tmp7) {
      let tmp9 = overridesInfo[experimentFromEmbedURL];
      if (null == tmp9) {
        tmp9 = apexExperiments.overridesInfo[experimentFromEmbedURL];
      }
      let tmp10 = null;
      if (null != tmp9) {
        tmp10 = tmp9;
      }
      const experimentBuckets = arg1(dependencyMap[7]).getExperimentBuckets(tmp7);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        let EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
      } else {
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      const id = id.getId();
      const obj5 = arg1(dependencyMap[7]);
      const experimentServerAssignment = arg1(dependencyMap[13]).getExperimentServerAssignment(tmp7, id);
      const obj6 = arg1(dependencyMap[13]);
      const experimentServerAssignmentLabel = arg1(dependencyMap[7]).getExperimentServerAssignmentLabel(tmp7, experimentServerAssignment);
      if (EXPERIMENT === ExperimentEmbedType.EXPERIMENT_TREATMENT) {
        if (null != iter) {
          let label = iter.label;
        } else {
          const _HermesInternal3 = HermesInternal;
          label = "Server Config: " + experimentServerAssignmentLabel;
        }
        obj = {};
        const merged = Object.assign(baseColors);
        obj["headerText"] = "EXPERIMENT TREATMENT";
        obj["titleText"] = experimentFromEmbedURL;
        obj["titleColor"] = colors.titleColor;
        obj["subtitle"] = label;
        obj["subtitleColor"] = colors.subtitleColor;
        obj["thumbnailUrl"] = arg1(dependencyMap[14]).getAssetUriForEmbed(importDefault(dependencyMap[15]));
        obj["thumbnailBackgroundColor"] = colors.backgroundColor;
        obj["acceptLabelColor"] = null != tmp10 && null != iter && tmp10.variantId === iter.value ? colors.clearLabelRedColor : colors.acceptLabelGreenColor;
        obj["acceptLabelBackgroundColor"] = null != tmp10 && null != iter && tmp10.variantId === iter.value ? colors.clearLabelRedBackgroundColor : colors.acceptLabelGreenBackgroundColor;
        const _HermesInternal4 = HermesInternal;
        if (null != tmp10 && null != iter && tmp10.variantId === iter.value) {
          let combined = concat(experimentTreatmentFromEmbedURL);
        } else {
          combined = concat(experimentTreatmentFromEmbedURL);
        }
        obj["acceptLabelText"] = combined;
        obj["embedCanBeTapped"] = true;
        obj["type"] = InviteTypes.GUILD;
        return obj;
      } else {
        obj = {};
        const merged1 = Object.assign(baseColors);
        obj["headerText"] = "EXPERIMENT";
        obj["titleText"] = experimentFromEmbedURL;
        obj["titleColor"] = colors.titleColor;
        if (null != tmp10) {
          const _HermesInternal2 = HermesInternal;
          let combined1 = "Client Override Applied: Treatment " + tmp10.variantId;
        } else {
          const _HermesInternal = HermesInternal;
          combined1 = "Server Assignment: " + experimentServerAssignmentLabel;
        }
        obj["subtitle"] = combined1;
        obj["subtitleColor"] = colors.subtitleColor;
        obj["thumbnailUrl"] = arg1(dependencyMap[14]).getAssetUriForEmbed(importDefault(dependencyMap[15]));
        obj["thumbnailBackgroundColor"] = colors.backgroundColor;
        obj["acceptLabelColor"] = colors.acceptLabelGreenColor;
        obj["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
        obj["acceptLabelText"] = "View Experiment Details";
        obj["embedCanBeTapped"] = true;
        obj["type"] = InviteTypes.GUILD;
        return obj;
      }
      const obj7 = arg1(dependencyMap[7]);
    }
  }
  obj1 = {};
  const merged2 = Object.assign(baseColors);
  obj1["headerText"] = "EXPERIMENT";
  let str29 = "Unknown Experiment";
  if (null != experimentFromEmbedURL) {
    str29 = experimentFromEmbedURL;
  }
  obj1["titleText"] = str29;
  obj1["titleColor"] = colors.titleColor;
  obj1["subtitle"] = "Unknown Experiment";
  obj1["subtitleColor"] = colors.subtitleColor;
  obj1["bodyText"] = "This client is missing this experiment. You may need to open the surface where the experiment is used first.";
  obj1["bodyTextColor"] = colors.bodyTextColor;
  const obj4 = arg1(dependencyMap[9]);
  if (obj12.isThemeDark(arg1)) {
    let tmp42Result = tmp42(tmp43[11]);
  } else {
    tmp42Result = tmp42(tmp43[12]);
  }
  obj1["thumbnailUrl"] = Image.resolveAssetSource(tmp42Result).uri;
  obj1["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
  obj1["type"] = InviteTypes.GUILD;
  return obj1;
};
