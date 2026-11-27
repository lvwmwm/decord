// Module ID: 20008
// Function ID: 20009
// Name: ConjureServerAppsSection
// Dependencies: [19, 21, 20006, 1112, 4245, 11564, 575, 2]
// Exports: default

// Module 20008 (ConjureServerAppsSection)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 11564 */;
import GuildSettingsModalIntegrationsAppsDefault from "GuildSettingsModalIntegrationsApps" /* 20006 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/server_apps/native/ConjureServerAppsSection.tsx");

export default function ConjureServerAppsSection(arg0) {
  const merged = Object.assign(arg0);
  const intl = intl2.intl;
  return <tmp title={intl.string(_modDef4245.EPSYTs)} renderIcon={function renderIcon(application) {
    ConjureAppSheetIconDefault;
    return <tmp application={arg0} size={32} radius={nativeDefault.radii.sm} />;
  }} />;
};
