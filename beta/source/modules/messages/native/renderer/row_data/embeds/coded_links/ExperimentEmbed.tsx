// Module ID: 11285
// Function ID: 11286
// Name: ExperimentEmbed
// Dependencies: [19, 17, 502, 4751, 7155, 21, 7387, 7316, 11016, 11017, 4538, 11286, 11287, 11288, 7388, 11289, 7318, 4800, 4755, 6571, 6570, 11290, 11015, 2]
// Exports: createExperimentEmbed, default

// Module 11285 (ExperimentEmbed)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import themes from "themes" /* 4538 */;
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import Constants from "Constants" /* 7155 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7316 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 7318 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7387 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7388 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11015 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11016 */;
import useApexExperiments from "useApexExperiments" /* 11017 */;
import useExperimentAssignments from "useExperimentAssignments" /* 11288 */;
import AssetRegistryDefault from "AssetRegistry" /* 11289 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let BottomSheet, map;

function ExperimentOverrideActionSheet(id) {
  id = id.id;
  const experiment = id.experiment;
  let items = [experiment];
  const override = id.override;
  const memo = react.useMemo(() => {
    let experimentVariantsForDevTools;
    if (null != experiment) {
      const obj = ExperimentDevToolsUtils;
      experimentVariantsForDevTools = obj.getExperimentVariantsForDevTools(tmp);
    } else {
      experimentVariantsForDevTools = [];
    }
    return experimentVariantsForDevTools;
  }, items);
  const items1 = [id, experiment, memo];
  const memo1 = react.useMemo(function() {
    let items;
    if (null == items) {
      return [];
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const item = memo.forEach((id) => {
        const result = map.set(id.id, id);
      });
      items = [];
      const item1 = map.forEach((label) => {
        let system;
        let closure_0 = label;
        let obj = {
          label: label.label,
          onPress() {
            const obj = items(memo[17]);
            obj.hideActionSheet("ExperimentOverrideSheet");
            const obj2 = map(memo[18]);
            obj2.overrideBucket(system.system, closure_2_0, id.id);
          }
        };
        items.push(obj);
      });
      let obj = {
        label: "Clear Override",
        isDestructive: true,
        onPress() {
            const obj = experiment(memo[17]);
            obj.hideActionSheet("ExperimentOverrideSheet");
            const obj2 = id(memo[18]);
            obj2.overrideBucket(items.system, map, null);
          }
      };
      items.push(obj);
      return items;
    }
  }, items1);
  const callback = react.useCallback(() => {
    const obj = experiment(memo[17]);
    obj.hideActionSheet("ExperimentOverrideSheet");
  }, []);
  BottomSheet = id(memo[19]).BottomSheet;
  let obj2 = { title: experiment.title, subtitle: id };
  return <BottomSheet header={null}>{null}</BottomSheet>;
}
const Image = react_native.Image;
const ExperimentEmbedType = ExperimentConstants.ExperimentEmbedType;
const InviteTypes = Constants.InviteTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
  id = id.id;
  const obj = useLegacyExperiments;
  const legacyExperiments = obj.useLegacyExperiments();
  const experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const obj2 = useApexExperiments;
  const apexExperiments = obj2.useApexExperiments();
  const experiments2 = apexExperiments.experiments;
  const overridesInfo2 = apexExperiments.overridesInfo;
  const items = [experiments, experiments2, id];
  const memo = react.useMemo(() => {
    let tmp2 = experiments[id];
    if (tmp2 == null) {
      tmp2 = experiments2[tmp];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items);
  const items1 = [overridesInfo, overridesInfo2, id];
  const memo1 = react.useMemo(() => {
    let tmp2 = overridesInfo[id];
    if (tmp2 == null) {
      tmp2 = overridesInfo2[tmp];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items1);
  useCodedLinksExperimentEmbeds;
  let tmp7 = null;
  if (null != memo) {
    tmp7 = null;
    if (tmp6) {
      tmp7 = <ExperimentOverrideActionSheet id={id} experiment={memo} override={memo1} />;
    }
  }
  return tmp7;
};
export const createExperimentEmbed = function createExperimentEmbed(url, arg1) {
  let baseColors;
  let colors;
  let combined;
  let combined1;
  let experiments;
  let overridesInfo;
  let resolveAssetSource;
  let str8;
  let tmp4Result8;
  let tmp4Result9;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
  getEmbedThemeColorsDefault(arg1);
  const obj = ExperimentEmbedUtils;
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  const obj2 = ExperimentEmbedUtils;
  const experimentTreatmentFromEmbedURL = obj2.getExperimentTreatmentFromEmbedURL(url);
  const obj3 = useLegacyExperiments;
  const legacyExperiments = obj3.getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj4 = useApexExperiments;
  const apexExperiments = obj4.getApexExperiments();
  let tmp10 = null;
  const overridesInfo2 = apexExperiments.overridesInfo;
  if (null != experimentFromEmbedURL) {
    let tmp11 = experiments[experimentFromEmbedURL];
    if (tmp11 == null) {
      tmp11 = tmp9[experimentFromEmbedURL];
    }
    tmp10 = tmp11;
  }
  if (null != experimentFromEmbedURL) {
    if (null != tmp10) {
      let EXPERIMENT;
      let tmp13;
      let tmp12 = overridesInfo[experimentFromEmbedURL];
      if (tmp12 == null) {
        tmp12 = overridesInfo2[experimentFromEmbedURL];
      }
      if (tmp12 == null) {
        tmp12 = null;
      }
      const tmp4Result = ExperimentEmbedUtils;
      const experimentBuckets = tmp4Result.getExperimentBuckets(tmp10);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
        tmp13 = ExperimentEmbedType;
      } else {
        tmp13 = ExperimentEmbedType;
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      const id = AuthenticationStore.getId();
      const tmp4Result6 = useExperimentAssignments;
      const experimentServerAssignment = tmp4Result6.getExperimentServerAssignment(tmp10, id);
      const tmp4Result7 = ExperimentEmbedUtils;
      const experimentServerAssignmentLabel = tmp4Result7.getExperimentServerAssignmentLabel(tmp10, experimentServerAssignment);
      if (EXPERIMENT === tmp13.EXPERIMENT_TREATMENT) {
        let label;
        if (null != iter) {
          label = iter.label;
        } else {
          const _HermesInternal3 = HermesInternal;
          label = "Server Config: " + experimentServerAssignmentLabel;
        }
        const obj5 = { headerText: "EXPERIMENT TREATMENT", titleText: experimentFromEmbedURL, titleColor: colors.titleColor, subtitle: label, subtitleColor: colors.subtitleColor, thumbnailUrl: tmp4Result8.getAssetUriForEmbed(AssetRegistryDefault), thumbnailBackgroundColor: colors.backgroundColor, acceptLabelColor: null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedColor : colors.acceptLabelGreenColor, acceptLabelBackgroundColor: null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedBackgroundColor : colors.acceptLabelGreenBackgroundColor, acceptLabelText: combined, embedCanBeTapped: true, type: InviteTypes.GUILD };
        const merged = Object.assign(baseColors);
        const _HermesInternal4 = HermesInternal;
        tmp4Result8 = renderer_EmbedUtils;
        if (null != tmp12 && null != iter && tmp12.variantId === iter.value) {
          combined = concat(experimentTreatmentFromEmbedURL);
        } else {
          combined = concat(experimentTreatmentFromEmbedURL);
        }
        return obj5;
      } else {
        const obj6 = { headerText: "EXPERIMENT", titleText: experimentFromEmbedURL, titleColor: colors.titleColor, subtitle: combined1, subtitleColor: colors.subtitleColor, thumbnailUrl: tmp4Result9.getAssetUriForEmbed(AssetRegistryDefault), acceptLabelText: "View Experiment Details", embedCanBeTapped: true, type: InviteTypes.GUILD };
        const merged1 = Object.assign(baseColors);
        if (null != tmp12) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "Client Override Applied: Treatment " + tmp12.variantId;
        } else {
          const _HermesInternal = HermesInternal;
          combined1 = "Server Assignment: " + experimentServerAssignmentLabel;
        }
        ({ backgroundColor: obj13.thumbnailBackgroundColor, acceptLabelGreenColor: obj13.acceptLabelColor, acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor } = colors);
        tmp4Result9 = renderer_EmbedUtils;
        return obj6;
      }
    }
  }
  const obj7 = { headerText: "EXPERIMENT", titleText: str8, titleColor: colors.titleColor, subtitle: "Unknown Experiment", subtitleColor: colors.subtitleColor, bodyText: "This client is missing this experiment. You may need to open the surface where the experiment is used first.", bodyTextColor: colors.bodyTextColor, thumbnailUrl: resolveAssetSource(tmpResult).uri, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, type: InviteTypes.GUILD };
  const merged2 = Object.assign(baseColors);
  str8 = "Unknown Experiment";
  if (null != experimentFromEmbedURL) {
    str8 = experimentFromEmbedURL;
  }
  resolveAssetSource = Image.resolveAssetSource;
  const tmp4Result10 = themes;
  if (tmp4Result10.isThemeDark(arg1)) {
    tmpResult = tmp(11286);
  } else {
    tmpResult = tmp(11287);
  }
  return obj7;
};
