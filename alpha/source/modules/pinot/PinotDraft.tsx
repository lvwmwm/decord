// Module ID: 11336
// Function ID: 11337
// Name: PinotDraft
// Dependencies: [2]
// Exports: draftFromFeature, eligibleChannelIds, isDraftDirty, patchBodyForDraft

// Module 11336 (PinotDraft)
import size from "module_2" /* 2 */;

let eligible;

const result = size.fileFinishedImporting("modules/pinot/PinotDraft.tsx");

export function draftFromFeature(enabled) {
  let found;
  const f99128 = (channelId) => channelId.channelId;
  const channels = enabled.channels;
  const obj = { enabled: enabled.enabled, includedChannelIds: new Set(found.map(f99128)) };
  found = channels.filter((included) => included.included);
  new Set(found.map(f99128));
  return obj;
}
export function isDraftDirty(enabled, enabled2) {
  let closure_0 = enabled2;
  let someResult = enabled.enabled !== enabled2.enabled;
  if (!someResult) {
    const channels = enabled.channels;
    someResult = channels.some((eligible) => {
      eligible = eligible.eligible;
      if (eligible) {
        const includedChannelIds = tmp.includedChannelIds;
        eligible = eligible.included !== includedChannelIds.has(eligible.channelId);
      }
      return eligible;
    });
  }
  return someResult;
}
export function patchBodyForDraft(enabled, enabled2) {
  let obj = {};
  if (enabled.enabled !== enabled2.enabled) {
    obj.enabled = enabled2.enabled;
  }
  const channels = enabled.channels;
  const found = channels.filter((eligible) => {
    eligible = eligible.eligible;
    if (eligible) {
      const includedChannelIds = tmp.includedChannelIds;
      eligible = eligible.included !== includedChannelIds.has(eligible.channelId);
    }
    return eligible;
  });
  const mapped = found.map((channelId) => {
    let includedChannelIds;
    const obj = { channel_id: channelId.channelId, included: includedChannelIds.has(channelId.channelId) };
    includedChannelIds = enabled2.includedChannelIds;
    return obj;
  });
  if (mapped.length > 0) {
    obj.channels = mapped;
  }
  return obj;
}
export function eligibleChannelIds(channels) {
  channels = channels.channels;
  const found = channels.filter((eligible) => eligible.eligible);
  return found.map((channelId) => channelId.channelId);
}
