// Module ID: 19981
// Function ID: 19982
// Name: GuildSettingsModalIntegrationsApps
// Dependencies: [19, 21, 5043, 575, 1112, 6140, 5730, 1413, 6144, 6158, 2]
// Exports: default

// Module 19981 (GuildSettingsModalIntegrationsApps)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import FastImageDefault from "FastImage" /* 5730 */;
import TableRowGroup2 from "TableRowGroup" /* 6140 */;
import TableRow3 from "TableRow" /* 6144 */;
import TableRowTrailingText from "TableRowTrailingText" /* 6158 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let application;

let size;
let jsx = Fragment.jsx;
let obj = { icon: size };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx");

export default function GuildSettingsModalIntegrationsApps(title) {
  let apps;
  let closure_3;
  ({ apps, removableApplicationIds: require, onRemove: importDefault, renderIcon: dependencyMap } = title);
  let text;
  title = title.title;
  jsx = text();
  let intl = intl2.intl;
  text = intl.string(intl2.t.N86XcP);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return <TableRowGroup title={title} hasIcons>{apps.map((application) => {
    let intl;
    let obj11;
    let obj2;
    let obj5;
    require = application;
    application = application.application;
    let tmp;
    if (dependencyMap != null) {
      tmp = dependencyMap(application);
    }
    if (tmp == null) {
      const obj = { source: obj2.getApplicationIconSource(obj5), style: closure_3.icon };
      obj5 = { id: null, icon: null, size: 24 };
      ({ id: obj3.id, icon: obj3.icon } = application);
      const tmp5 = FastImageDefault;
      obj2 = AvatarUtilsDefault;
      tmp = closure_3(tmp5, obj);
    }
    const obj4 = require;
    if (null != require) {
      let tmp15;
      if (!obj4.includes(application.id)) {
        const obj6 = { label: application.name, subLabel: intl.string(intl2.t.xRCMqx), icon: tmp };
        const TableRow = TableRow3.TableRow;
        intl = intl2.intl;
        tmp15 = closure_3(TableRow, obj6, application.integrationId);
      }
      return tmp15;
    }
    const obj7 = {
      label: application.name,
      icon: tmp,
      trailing: closure_3(TableRowTrailingText.TableRowTrailingText, obj11),
      onPress() {
        return importDefault(application);
      }
    };
    const TableRow2 = TableRow3.TableRow;
    obj11 = { text };
    tmp15 = closure_3(TableRow2, obj7, application.integrationId);
  })}</TableRowGroup>;
};
