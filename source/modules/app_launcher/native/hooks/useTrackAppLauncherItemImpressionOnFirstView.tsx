// Module ID: 11209
// Function ID: 87262
// Name: useTrackAppLauncherItemImpressionOnFirstView
// Dependencies: []
// Exports: useTrackAppLauncherItemImpressionOnFirstView

// Module 11209 (useTrackAppLauncherItemImpressionOnFirstView)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let obj = arg1(closure_1[1]);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  const arg1 = entrypoint;
  closure_1 = React.useRef(new Set());
  const set = new Set();
  const focusEffect = arg1(closure_1[2]).useFocusEffect(React.useCallback(() => {
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
  const items = [entrypoint];
  return obj;
};
