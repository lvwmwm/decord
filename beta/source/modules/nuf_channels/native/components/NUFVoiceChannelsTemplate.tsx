// Module ID: 14048
// Function ID: 14049
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 558, 568, 1119, 14049, 14050, 14038, 1879, 5630, 2]

// Module 14048 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1879 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 14038 */;
import NUFTemplateDefault from "NUFTemplate" /* 14049 */;
import _modDef14050 from "module_14050" /* 14050 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(5);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.w5HAll);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.Ww4hhq);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult2 = intl3.string(tmp(1119).t.eIi3Om);
    cResult[2] = stringResult2;
    let tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== channel.id) {
    let obj2 = {
      title: tmp4,
      description: tmp5,
      imageSrc: _modDef14050,
      CTALabel: tmp8,
      onCTAPress() {
          const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
          const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
        }
    };
    const tmp14 = jsx(NUFTemplateDefault, {
      title: tmp4,
      description: tmp5,
      imageSrc: _modDef14050,
      CTALabel: tmp8,
      onCTAPress() {
          const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
          const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
        }
    });
    cResult[3] = channel.id;
    cResult[4] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : ((channel) => {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1119).intl;
  obj.title = intl.string(channel(1119).t.w5HAll);
  const intl2 = channel(1119).intl;
  obj.description = intl2.string(channel(1119).t.Ww4hhq);
  obj.imageSrc = _modDef14050;
  const intl3 = channel(1119).intl;
  obj.CTALabel = intl3.string(channel(1119).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
});
