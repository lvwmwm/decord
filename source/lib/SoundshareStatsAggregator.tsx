// Module ID: 4224
// Function ID: 36878
// Name: SoundshareStatsAggregator
// Dependencies: [6, 7, 2]

// Module 4224 (SoundshareStatsAggregator)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class SoundshareStatsAggregator {
    constructor() {
      tmp = SoundshareStatsAggregator(this, SoundshareStatsAggregator);
      this._report = { soundshare_attach_requested_count: 0, soundshare_capturing_count: 0, soundshare_capture_stopped_count: 0, soundshare_hooked_count: 0, soundshare_recv_connect_count: 0, soundshare_recv_disconnect_count: 0, soundshare_recv_started_count: 0, soundshare_recv_stopped_count: 0, soundshare_recv_failed_count: 0, soundshare_recv_format_count: 0, soundshare_send_announce_count: 0, soundshare_send_start_count: 0, soundshare_send_stop_count: 0, soundshare_malformed_trace_count: 0, soundshare_audio_detected_count: 0, soundshare_state_transition_detached_count: 0, soundshare_state_transition_waiting_count: 0, soundshare_state_transition_attached_count: 0, soundshare_state_transition_started_count: 0, soundshare_state_transition_playing_count: 0, soundshare_state_transition_silence_count: 0, soundshare_unknown_event_count: 0, soundshare_first_pid: 0, soundshare_last_pid: 0, soundshare_unique_pids: 0, soundshare_first_session: null, soundshare_last_session: null };
      set = new Set();
      this._pids = set;
      return;
    }
  }
  let obj = {
    key: "traceEvent",
    value(soundshare_first_session, type) {
      const _report = this._report;
      if ("soundshare_state_transition" === type.type) {
        const _HermesInternal2 = HermesInternal;
        let combined = "soundshare_state_transition_" + ["detached", "waiting", "attached", "started", "playing", "silence"][type.newState] + "_count";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + type.type + "_count";
      }
      if (undefined !== _report[combined]) {
        if (_report[combined] < 32767) {
          _report[combined] = _report[combined] + 1;
        }
      } else {
        _report.soundshare_unknown_event_count = _report.soundshare_unknown_event_count + 1;
      }
      if ("pid" in type) {
        if (0 === _report.soundshare_first_pid) {
          _report.soundshare_first_pid = type.pid;
        }
        _report.soundshare_last_pid = type.pid;
        const _pids = this._pids;
        _pids.add(type.pid);
      }
      if (null != soundshare_first_session) {
        if (null == _report.soundshare_first_session) {
          _report.soundshare_first_session = soundshare_first_session;
        }
        _report.soundshare_last_session = soundshare_first_session;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getStats",
    value() {
      const obj = {};
      const merged = Object.assign(this._report);
      obj["soundshare_unique_pids"] = this._pids.size;
      return obj;
    }
  };
  items[1] = obj;
  return callback(SoundshareStatsAggregator, items);
})();
const result = require("set").fileFinishedImporting("lib/SoundshareStatsAggregator.tsx");

export default tmp2;
