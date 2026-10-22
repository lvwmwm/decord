// Module ID: 18490
// Function ID: 18491
// Name: VoiceChannelAppSurface
// Dependencies: [19, 21, 558, 576, 1633, 11826, 5612, 17941, 17944, 11827, 11828, 11832, 17951, 1128, 3928, 2]

// Module 18490 (VoiceChannelAppSurface)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3928 from "module_3928" /* 3928 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11826 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11827 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11828 */;
import FrameStackLevel from "FrameStackLevel" /* 11832 */;
import useFrameLifecycle from "useFrameLifecycle" /* 17941 */;
import conjureBackgroundFramesDefault from "conjureBackgroundFrames" /* 17944 */;
import FrameSurfaceState from "FrameSurfaceState" /* 17951 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useFrameLifecycleDefault = useFrameLifecycle;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppSurface(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  let left;
  let right;
  const obj = react2;
  const cResult = obj.c(17);
  ({ applicationId, channelId, guildId } = arg0);
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  if (cResult[0] === left) {
    let tmp6;
    if (cResult[1] === right) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === channelId) {
      let tmp8;
      if (cResult[4] === guildId) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === applicationId) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        const tmp10 = useFrameLifecycleDefault(tmp9);
        conjureBackgroundFramesDefault(applicationId, tmp8);
        let tmp13 = null;
        const tmp4Result = useInlineFrameOAuthNavigationDefault;
        if (tmp10.state === useFrameLifecycle.FrameLifecycleState.Launched) {
          tmp13 = applicationId;
        }
        tmp4Result(tmp13);
        const state = tmp10.state;
        if (useFrameLifecycle.FrameLifecycleState.Launched === state) {
          if (cResult[9] === tmp10.frame.id) {
            let tmp35;
            if (cResult[10] === tmp6) {
              tmp35 = cResult[11];
            }
            return tmp35;
          }
          FrameRenderTargetDefault;
          const tmp38 = <tmp4Result2 frameId={tmp10.frame.id} level={FrameStackLevel.FrameStackLevel.WithinCallContent} presentation={tmp6} />;
          cResult[9] = tmp10.frame.id;
          cResult[10] = tmp6;
          cResult[11] = tmp38;
          tmp35 = tmp38;
        } else if (useFrameLifecycle.FrameLifecycleState.RenderingElsewhere === state) {
          let tmp32;
          const _Symbol5 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation4 = tmp(17951).FrameSurfaceExplanation;
            const intl5 = tmp(1128).intl;
            const tmp34 = <FrameSurfaceExplanation4 description={intl5.string(intl6.t["2KIDX+"])} />;
            cResult[12] = tmp34;
            tmp32 = tmp34;
          } else {
            tmp32 = cResult[12];
          }
          return tmp32;
        } else if (useFrameLifecycle.FrameLifecycleState.NoApplication === state) {
          let tmp28;
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation3 = tmp(17951).FrameSurfaceExplanation;
            const intl4 = tmp(1128).intl;
            const tmp30 = <FrameSurfaceExplanation3 description={intl4.string(_modDef3928.TQptZV)} />;
            cResult[13] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          return tmp28;
        } else if (useFrameLifecycle.FrameLifecycleState.DoesNotSupportSurface === state) {
          let tmp24;
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation2 = tmp(17951).FrameSurfaceExplanation;
            const intl3 = tmp(1128).intl;
            const tmp26 = <FrameSurfaceExplanation2 description={intl3.string(_modDef3928["13FYwI"])} />;
            cResult[14] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          return tmp24;
        } else if (useFrameLifecycle.FrameLifecycleState.Error === state) {
          let tmp20;
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation = tmp(17951).FrameSurfaceExplanation;
            const intl = tmp(1128).intl;
            const intl2 = tmp(1128).intl;
            const tmp22 = <FrameSurfaceExplanation heading={intl.string(intl6.t.VquUff)} error={intl2.string(intl6.t["Sd9D/R"])} />;
            cResult[15] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          return tmp20;
        } else {
          let tmp16;
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = jsx(FrameSurfaceState.FrameSurfaceLoading, {});
            cResult[16] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[16];
          }
          return tmp16;
        }
      }
      const obj7 = { applicationId, surface: tmp8 };
      cResult[6] = applicationId;
      cResult[7] = tmp8;
      cResult[8] = obj7;
      tmp9 = obj7;
    }
    const obj8 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId };
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = obj8;
    tmp8 = obj8;
  }
  const tmp7 = getInlineFramePresentationDefault({ top: 0, bottom: 0, left, right }, true);
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function VoiceChannelAppSurface(guildId) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = guildId);
  guildId = guildId.guildId;
  let left;
  let rect = guildId(left[4])();
  left = rect.left;
  const right = rect.right;
  const items = [left, right];
  const items1 = [channelId, guildId];
  const memo = right.useMemo(() => {
    const rect = { top: 0, bottom: 0, left, right };
    return getInlineFramePresentationDefault(rect, true);
  }, items);
  const memo1 = right.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId };
    return obj;
  }, items1);
  const tmp5 = guildId(left[7])({ applicationId, surface: memo1 });
  guildId(left[8])(applicationId, memo1);
  let tmp9 = null;
  const tmp7 = guildId(left[9]);
  if (tmp5.state === channelId(left[7]).FrameLifecycleState.Launched) {
    tmp9 = applicationId;
  }
  tmp7(tmp9);
  const state = tmp5.state;
  if (channelId(left[7]).FrameLifecycleState.Launched === state) {
    guildId(left[10]);
    return <tmpResult frameId={tmp5.frame.id} level={channelId(left[11]).FrameStackLevel.WithinCallContent} presentation={memo} />;
  } else if (channelId(left[7]).FrameLifecycleState.RenderingElsewhere === state) {
    const FrameSurfaceExplanation4 = tmp8(tmp2[12]).FrameSurfaceExplanation;
    const intl5 = tmp8(tmp2[13]).intl;
    return <FrameSurfaceExplanation4 description={intl5.string(channelId(left[13]).t["2KIDX+"])} />;
  } else if (channelId(left[7]).FrameLifecycleState.NoApplication === state) {
    const FrameSurfaceExplanation3 = tmp8(tmp2[12]).FrameSurfaceExplanation;
    const intl4 = tmp8(tmp2[13]).intl;
    return <FrameSurfaceExplanation3 description={intl4.string(guildId(left[14]).TQptZV)} />;
  } else if (channelId(left[7]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const FrameSurfaceExplanation2 = tmp8(tmp2[12]).FrameSurfaceExplanation;
    const intl3 = tmp8(tmp2[13]).intl;
    return <FrameSurfaceExplanation2 description={intl3.string(guildId(left[14])["13FYwI"])} />;
  } else if (channelId(left[7]).FrameLifecycleState.Error === state) {
    const FrameSurfaceExplanation = tmp8(tmp2[12]).FrameSurfaceExplanation;
    const intl = tmp8(tmp2[13]).intl;
    const intl2 = tmp8(tmp2[13]).intl;
    return <FrameSurfaceExplanation heading={intl.string(channelId(left[13]).t.VquUff)} error={intl2.string(channelId(left[13]).t["Sd9D/R"])} />;
  } else {
    return jsx(channelId(left[12]).FrameSurfaceLoading, {});
  }
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSurface.tsx");

export default tmp2;
