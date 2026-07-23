// Module ID: 11220
// Function ID: 87325
// Name: useTrackAppLauncherItemImpressionOnFirstView
// Dependencies: [31, 10884, 1457, 8559, 480, 2]
// Exports: useTrackAppLauncherItemImpressionOnFirstView

// Module 11220 (useTrackAppLauncherItemImpressionOnFirstView)
import result from "result";

const require = arg1;
const result = require("Link").fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let obj = entrypoint(10884);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  const dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1457).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  obj = {
    trackAppLauncherItemImpressionOnFirstView: React.useCallback((itemKey) => {
      let applicationFlags;
      let applicationId;
      let commandId;
      let sectionName;
      let sectionOverallPosition;
      let sectionPosition;
      itemKey = itemKey.itemKey;
      const current = ref.current;
      ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
      if (!current.has(itemKey)) {
        const current2 = ref.current;
        current2.add(itemKey);
        let obj = entrypoint(ref[3]);
        obj = { type: entrypoint(ref[4]).ImpressionTypes.VIEW, name: entrypoint(ref[4]).ImpressionNames.APP_LAUNCHER_ITEM };
        obj = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
        obj.properties = obj;
        obj.trackImpression(obj);
      }
    }, items)
  };
  items = [entrypoint];
  return obj;
};
