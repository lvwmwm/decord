// Module ID: 12647
// Function ID: 12648
// Name: useTrackAppLauncherItemImpressionOnFirstView
// Dependencies: [19, 11689, 1500, 6163, 1260, 2]
// Exports: useTrackAppLauncherItemImpressionOnFirstView

// Module 12647 (useTrackAppLauncherItemImpressionOnFirstView)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useTrackImpression from "useTrackImpression" /* 6163 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, itemKey, set;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export function useTrackAppLauncherItemImpressionOnFirstView() {
  let entrypoint;
  let items;
  let ref;
  let obj = entrypoint(11689);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  const useRef = react.useRef;
  set = new Set();
  dependencyMap = useRef(set);
  let obj2 = entrypoint(1500);
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
}
