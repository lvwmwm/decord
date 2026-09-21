// Module ID: 10233
// Function ID: 10234
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10234, 10235, 21, 4758, 558, 568, 5903, 10236, 10237, 10239, 1119, 4754, 10243, 10244, 10246, 7371, 5186, 2]

// Module 10233 (UserSettingsVoice)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import Stack_Stack from "Stack/Stack" /* 5186 */;
import TableRowGroup from "TableRowGroup" /* 5903 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7371 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10236 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 10237 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 10243 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 10244 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 10246 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(10234).isMobileOverlaySupported;
const guideURL = fn(10235).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp9 = timestampProducer(TableRowGroup.TableRowGroup, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "NewUserSettingsVoice" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig(first).nonContextualStreamOutputPresent;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = timestampProducer(tmp6(10237), {});
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== nonContextualStreamOutputPresent) {
    let tmp11 = nonContextualStreamOutputPresent;
    if (nonContextualStreamOutputPresent) {
      tmp11 = timestampProducer(tmp6(10239), {});
    }
    cResult[2] = nonContextualStreamOutputPresent;
    cResult[3] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const obj4 = { guideURL };
    const formatResult = intl.format(tmp(1119).t["V+B3FH"], obj4);
    cResult[4] = formatResult;
    let tmp13 = formatResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.tableRow) {
    const obj5 = { style: tmp4.tableRow, variant: "text-sm/medium", children: tmp13 };
    const tmp18 = timestampProducer(tmp(4754).Text, obj5);
    cResult[5] = tmp4.tableRow;
    cResult[6] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp24 = timestampProducer(tmp6(10243), {});
    const tmp26 = isMobileOverlaySupported() && timestampProducer(tmp6(10244), {});
    const tmp23Result = timestampProducer(tmp6(10246), {});
    const tmp23Result2 = timestampProducer(tmp(7371).SafeAreaPaddingView, { bottom: true });
    cResult[7] = tmp23Result2;
    cResult[8] = tmp24;
    cResult[9] = tmp26;
    cResult[10] = tmp23Result;
    let tmp21 = tmp26;
    let tmp22 = tmp23Result;
    let tmp20 = tmp24;
    let tmp19 = tmp23Result2;
  } else {
    tmp19 = cResult[7];
    tmp20 = cResult[8];
    tmp21 = cResult[9];
    tmp22 = cResult[10];
  }
  if (cResult[11] === tmp10) {
    if (cResult[12] === tmp16) {
      let tmp29 = cResult[13];
    }
    if (cResult[14] === tmp4.container) {
      if (cResult[15] === tmp29) {
        let tmp31 = cResult[16];
      }
      return tmp31;
    }
    const obj6 = { style: tmp4.container, children: tmp29 };
    const tmp34 = timestampProducer(View, obj6);
    cResult[14] = tmp4.container;
    cResult[15] = tmp29;
    cResult[16] = tmp34;
    tmp31 = tmp34;
  }
  const obj7 = { spacing: 24, children: null };
  const items = [tmp7, tmp10, tmp16, tmp20, tmp21, tmp22, tmp19];
  obj7.children = items;
  const tmp30 = React5(Stack_Stack.Stack, obj7);
  cResult[11] = tmp10;
  cResult[12] = tmp16;
  cResult[13] = tmp30;
  tmp29 = tmp30;
}) : (() => {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10239), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1119).intl;
  obj3.children = intl.format(util.t["V+B3FH"], { guideURL });
  items[2] = timestampProducer(Text_Text.Text, obj3);
  items[3] = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
  const obj4 = { guideURL };
  const tmp5 = View;
  const tmp6 = React5;
  const obj5 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
  items[5] = timestampProducer(UserSettingsVoiceProcessingDefault, {});
  items[6] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  obj5.children = items;
  obj2.children = tmp6(Stack_Stack.Stack, obj5);
  return timestampProducer(tmp5, obj2);
});
export const UserSettingsTableRowGroup = tmp4;
