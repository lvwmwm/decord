// Module ID: 9840
// Function ID: 9841
// Name: AppChannelApplicationIcon
// Dependencies: [19, 21, 4790, 580, 558, 568, 1401, 5834, 2]

// Module 9840 (AppChannelApplicationIcon)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import FastImageDefault from "FastImage" /* 5834 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
const obj2 = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  const cResult = c.c(6);
  application = application.application;
  const tmp3 = closure_4();
  if (cResult[0] === application.icon) {
    if (cResult[1] === application.id) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.icon) {
      if (cResult[4] === tmp4) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { source: tmp4, style: tmp3.icon };
    const tmp9 = jsx(FastImageDefault, { source: tmp4, style: tmp3.icon });
    cResult[3] = tmp3.icon;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 32 });
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp4 = applicationIconSource;
}) : ((application) => {
  application = application.application;
  const obj = { source: null, style: null };
  const tmp = closure_4();
  obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 32 });
  obj.style = tmp.icon;
  return <tmp2 source={null} style={null} />;
});
