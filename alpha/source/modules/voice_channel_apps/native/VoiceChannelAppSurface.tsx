// Module ID: 19275
// Function ID: 19276
// Name: VoiceChannelAppSurface
// Dependencies: [19, 21, 1625, 12096, 5675, 18659, 18662, 12097, 12106, 12110, 18671, 1113, 3966, 2]
// Exports: default

// Module 19275 (VoiceChannelAppSurface)
import Fragment from "Fragment" /* 21 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12096 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSurface.tsx");

export default function VoiceChannelAppSurface(guildId) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = guildId);
  guildId = guildId.guildId;
  let left;
  let rect = guildId(left[2])();
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
  const tmp5 = guildId(left[5])({ applicationId, surface: memo1 });
  guildId(left[6])(applicationId, memo1);
  let tmp9 = null;
  const tmp7 = guildId(left[7]);
  if (tmp5.state === channelId(left[5]).FrameLifecycleState.Launched) {
    tmp9 = applicationId;
  }
  tmp7(tmp9);
  const state = tmp5.state;
  if (channelId(left[5]).FrameLifecycleState.Launched === state) {
    guildId(left[8]);
    return <tmpResult frameId={tmp5.frame.id} level={channelId(left[9]).FrameStackLevel.WithinCallContent} presentation={memo} />;
  } else if (channelId(left[5]).FrameLifecycleState.RenderingElsewhere === state) {
    const FrameSurfaceExplanation4 = tmp8(tmp2[10]).FrameSurfaceExplanation;
    const intl5 = tmp8(tmp2[11]).intl;
    return <FrameSurfaceExplanation4 description={intl5.string(channelId(left[11]).t["2KIDX+"])} />;
  } else if (channelId(left[5]).FrameLifecycleState.NoApplication === state) {
    const FrameSurfaceExplanation3 = tmp8(tmp2[10]).FrameSurfaceExplanation;
    const intl4 = tmp8(tmp2[11]).intl;
    return <FrameSurfaceExplanation3 description={intl4.string(guildId(left[12]).TQptZV)} />;
  } else if (channelId(left[5]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const FrameSurfaceExplanation2 = tmp8(tmp2[10]).FrameSurfaceExplanation;
    const intl3 = tmp8(tmp2[11]).intl;
    return <FrameSurfaceExplanation2 description={intl3.string(guildId(left[12])["13FYwI"])} />;
  } else if (channelId(left[5]).FrameLifecycleState.Error === state) {
    const FrameSurfaceExplanation = tmp8(tmp2[10]).FrameSurfaceExplanation;
    const intl = tmp8(tmp2[11]).intl;
    const intl2 = tmp8(tmp2[11]).intl;
    return <FrameSurfaceExplanation heading={intl.string(channelId(left[11]).t.VquUff)} error={intl2.string(channelId(left[11]).t["Sd9D/R"])} />;
  } else {
    return jsx(channelId(left[10]).FrameSurfaceLoading, {});
  }
};
