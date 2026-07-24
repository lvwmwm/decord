// Module ID: 10979
// Function ID: 85329
// Name: ExperimentOverrideActionSheet
// Dependencies: [31, 27, 1194, 4045, 6978, 33, 7722, 7872, 10490, 10491, 3840, 10980, 10981, 10982, 7724, 10983, 7874, 4098, 4052, 5187, 5186, 10984, 10489, 2]
// Exports: createExperimentEmbed, default

// Module 10979 (ExperimentOverrideActionSheet)
import result from "result";
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ExperimentEmbedType } from "ExperimentBuckets";
import { InviteTypes } from "InviteSendStates";
import { jsx } from "jsxProd";

const require = arg1;
function ExperimentOverrideActionSheet(override) {
  const id = override.id;
  const experiment = override.experiment;
  let items = [experiment];
  const memo = React.useMemo(() => {
    if (null != experiment) {
      let experimentVariantsForDevTools = id(memo[16]).getExperimentVariantsForDevTools(experiment);
      const obj = id(memo[16]);
    } else {
      experimentVariantsForDevTools = [];
    }
    return experimentVariantsForDevTools;
  }, items);
  const items1 = [id, experiment, memo];
  const memo1 = React.useMemo(() => {
    if (null == items) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map();
      const item = memo.forEach((id) => {
        const result = map.set(id.id, id);
      });
      items = [];
      const item1 = map.forEach((label) => {
        let closure_0 = label;
        items.push({
          label: label.label,
          onPress() {
            experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = experiment(memo[17]);
            id(memo[18]).overrideBucket(items.system, map, label.id);
          }
        });
      });
      let obj = {
        label: "Clear Override",
        isDestructive: true,
        onPress() {
            experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = experiment(memo[17]);
            id(memo[18]).overrideBucket(items.system, map, null);
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
  obj.header = jsx(id(memo[20]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
  obj.children = jsx(id(memo[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback });
  return jsx(id(memo[19]).BottomSheet, { title: experiment.title, subtitle: id });
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
  id = id.id;
  let obj = id(overridesInfo[8]);
  const legacyExperiments = obj.useLegacyExperiments();
  const experiments = legacyExperiments.experiments;
  overridesInfo = legacyExperiments.overridesInfo;
  const apexExperiments = id(overridesInfo[9]).useApexExperiments();
  const experiments2 = apexExperiments.experiments;
  const overridesInfo2 = apexExperiments.overridesInfo;
  const items = [experiments, experiments2, id];
  const memo = experiments2.useMemo(() => {
    let tmp = experiments[id];
    if (null == tmp) {
      tmp = experiments2[id];
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    return tmp4;
  }, items);
  const items1 = [overridesInfo, overridesInfo2, id];
  const memo1 = experiments2.useMemo(() => {
    let tmp = overridesInfo[id];
    if (null == tmp) {
      tmp = overridesInfo2[id];
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    return tmp4;
  }, items1);
  id(overridesInfo[22]);
  let tmp7 = null;
  if (null != memo) {
    tmp7 = null;
    if (tmp6) {
      obj = { id, experiment: memo, override: memo1 };
      tmp7 = <ExperimentOverrideActionSheet id={id} experiment={memo} override={memo1} />;
    }
  }
  return tmp7;
};
export const createExperimentEmbed = function createExperimentEmbed(url, closure_2) {
  let baseColors;
  let colors;
  let experiments;
  let overridesInfo;
  ({ colors, baseColors } = importDefault(7722)(closure_2));
  let obj = experimentTreatmentFromEmbedURL(7872);
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  let obj1 = experimentTreatmentFromEmbedURL(7872);
  experimentTreatmentFromEmbedURL = obj1.getExperimentTreatmentFromEmbedURL(url);
  const tmp = importDefault(7722)(closure_2);
  const legacyExperiments = experimentTreatmentFromEmbedURL(10490).getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj3 = experimentTreatmentFromEmbedURL(10490);
  const apexExperiments = experimentTreatmentFromEmbedURL(10491).getApexExperiments();
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
      const experimentBuckets = experimentTreatmentFromEmbedURL(7872).getExperimentBuckets(tmp7);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        let EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
      } else {
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      id = id.getId();
      const obj5 = experimentTreatmentFromEmbedURL(7872);
      const experimentServerAssignment = experimentTreatmentFromEmbedURL(10982).getExperimentServerAssignment(tmp7, id);
      const obj6 = experimentTreatmentFromEmbedURL(10982);
      const experimentServerAssignmentLabel = experimentTreatmentFromEmbedURL(7872).getExperimentServerAssignmentLabel(tmp7, experimentServerAssignment);
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
        obj["thumbnailUrl"] = experimentTreatmentFromEmbedURL(7724).getAssetUriForEmbed(importDefault(10983));
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
        obj["thumbnailUrl"] = experimentTreatmentFromEmbedURL(7724).getAssetUriForEmbed(importDefault(10983));
        obj["thumbnailBackgroundColor"] = colors.backgroundColor;
        obj["acceptLabelColor"] = colors.acceptLabelGreenColor;
        obj["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
        obj["acceptLabelText"] = "View Experiment Details";
        obj["embedCanBeTapped"] = true;
        obj["type"] = InviteTypes.GUILD;
        return obj;
      }
      const obj7 = experimentTreatmentFromEmbedURL(7872);
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
  const obj4 = experimentTreatmentFromEmbedURL(10491);
  if (obj12.isThemeDark(closure_2)) {
    let tmp42Result = tmp42(10980);
  } else {
    tmp42Result = tmp42(10981);
  }
  obj1["thumbnailUrl"] = Image.resolveAssetSource(tmp42Result).uri;
  obj1["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
  obj1["type"] = InviteTypes.GUILD;
  return obj1;
};
