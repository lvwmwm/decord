// Module ID: 11583
// Function ID: 11584
// Name: useTrackAppLauncherItemImpressionOnFirstView
// Dependencies: [19, 10785, 1486, 8230, 1249, 2]
// Exports: useTrackAppLauncherItemImpressionOnFirstView

// Module 11583 (useTrackAppLauncherItemImpressionOnFirstView)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useTrackImpression from "useTrackImpression" /* 8230 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, itemKey, set;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let entrypoint;
  let items;
  let ref;
  let obj = entrypoint(10785);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  const useRef = react.useRef;
  set = new Set();
  dependencyMap = useRef(set);
  let obj2 = entrypoint(1486);
  const focusEffect = obj2.useFocusEffect(react.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const obj3 = {
    trackAppLauncherItemImpressionOnFirstView: react.useCallback((itemKey) => {
      let applicationFlags;
      let applicationId;
      let commandId;
      let obj2;
      let sectionName;
      let sectionOverallPosition;
      let sectionPosition;
      itemKey = itemKey.itemKey;
      const current = ref.current;
      ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
      const tmp = ref;
      if (!current.has(itemKey)) {
        const current2 = tmp.current;
        current2.add(itemKey);
        const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM, properties: obj2 };
        const trackImpression = useTrackImpression.trackImpression;
        useTrackImpression;
        obj2 = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
        trackImpression(obj);
      }
    }, items)
  };
  items = [entrypoint];
  return obj3;
};
