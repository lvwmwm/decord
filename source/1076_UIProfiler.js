// Module ID: 1076
// Function ID: 12355
// Name: UIProfiler
// Dependencies: [1099, 794, 1096, 65, 977, 65]

// Module 1076 (UIProfiler)
import module_1099 from "module_1099";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import DEFAULT_BUNDLE_NAME from "DEFAULT_BUNDLE_NAME";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const UIProfiler = () => {
  class UIProfiler {
    constructor() {
      tmp = closure_3(this, UIProfiler);
      this._client = undefined;
      this._profiler = undefined;
      this._chunkTimer = undefined;
      this._profilerId = undefined;
      this._isRunning = false;
      this._sessionSampled = false;
      this._lifecycleMode = undefined;
      set = new Set();
      this._activeRootSpanIds = set;
      map = new Map();
      this._rootSpanTimeouts = map;
      return;
    }
  }
  const dependencyMap = UIProfiler;
  let obj = {
    key: "initialize",
    value: function initialize(getOptions) {
      const self = this;
      const profileLifecycle = getOptions.getOptions().profileLifecycle;
      const shouldProfileSessionResult = callback(UIProfiler[3]).shouldProfileSession(getOptions.getOptions());
      if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug = callback(UIProfiler[5]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Profiling] Initializing profiler (lifecycle='" + profileLifecycle + "').");
      }
      if (!shouldProfileSessionResult) {
        if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug2 = callback(UIProfiler[5]).debug;
          debug2.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization.");
        }
      }
      const obj = callback(UIProfiler[3]);
      self._profilerId = callback(UIProfiler[5]).uuid4();
      self._client = getOptions;
      self._sessionSampled = shouldProfileSessionResult;
      self._lifecycleMode = profileLifecycle;
      if ("trace" === profileLifecycle) {
        const result = self._setupTraceLifecycleListeners(getOptions);
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "start",
    value: function start() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug3 = callback(UIProfiler[5]).debug;
            debug3.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
          }
        } else if (self._sessionSampled) {
          self._beginProfiling();
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug2 = callback(UIProfiler[5]).debug;
          debug2.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
        }
      } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug = callback(UIProfiler[5]).debug;
        debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.start()` are ignored in trace mode.");
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "stop",
    value: function stop() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          self._endProfiling();
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug2 = callback(UIProfiler[5]).debug;
          debug2.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
        }
      } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug = callback(UIProfiler[5]).debug;
        debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.stop()` are ignored in trace mode.");
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "notifyRootSpanActive",
    value: function notifyRootSpanActive(rootSpan) {
      const self = this;
      if ("trace" === this._lifecycleMode) {
        if (self._sessionSampled) {
          const spanId = rootSpan.spanContext().spanId;
          if (spanId) {
            const _activeRootSpanIds = self._activeRootSpanIds;
            if (!_activeRootSpanIds.has(spanId)) {
              const result = self._registerTraceRootSpan(spanId);
              const size = self._activeRootSpanIds.size;
              if (1 === size) {
                if (callback(UIProfiler[4]).DEBUG_BUILD) {
                  const debug = callback(UIProfiler[5]).debug;
                  debug.log("[Profiling] Detected already active root span during setup. Active root spans now:", size);
                }
                self._beginProfiling();
              }
            }
          }
        }
      }
    }
  };
  items[4] = {
    key: "_beginProfiling",
    value: function _beginProfiling() {
      const self = this;
      if (!this._isRunning) {
        self._isRunning = true;
        if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = callback(UIProfiler[5]).debug;
          debug.log("[Profiling] Started profiling with profiler ID:", self._profilerId);
        }
        let obj = callback(UIProfiler[5]);
        const globalScope = obj.getGlobalScope();
        obj = { profiler_id: self._profilerId };
        globalScope.setContext("profile", obj);
        const result = self._startProfilerInstance();
        if (self._profiler) {
          const result1 = self._startPeriodicChunking();
        } else {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug2 = callback(UIProfiler[5]).debug;
            debug2.log("[Profiling] Failed to start JS Profiler; stopping.");
          }
          self._resetProfilerInfo();
        }
      }
    }
  };
  items[5] = {
    key: "_endProfiling",
    value: function _endProfiling() {
      const self = this;
      if (this._isRunning) {
        self._isRunning = false;
        if (self._chunkTimer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._chunkTimer);
          self._chunkTimer = undefined;
        }
        const result = self._clearAllRootSpanTimeouts();
        self._collectCurrentChunk().catch((arg0) => {
          if (callback(closure_1[4]).DEBUG_BUILD) {
            const debug = callback(closure_1[5]).debug;
            debug.error("[Profiling] Failed to collect current profile chunk on `stop()`:", arg0);
          }
        });
        if ("manual" === self._lifecycleMode) {
          const globalScope = callback(UIProfiler[5]).getGlobalScope();
          globalScope.setContext("profile", {});
          const obj = callback(UIProfiler[5]);
        }
        const _collectCurrentChunkResult = self._collectCurrentChunk();
      }
    }
  };
  items[6] = {
    key: "_setupTraceLifecycleListeners",
    value: function _setupTraceLifecycleListeners(on) {
      let closure_0 = this;
      on.on("spanStart", (isRecording) => {
        if (self._sessionSampled) {
          if (isRecording === tmpResult.getRootSpan(isRecording)) {
            if (isRecording.isRecording()) {
              const spanId = isRecording.spanContext().spanId;
              if (spanId) {
                const _activeRootSpanIds = self._activeRootSpanIds;
                if (!_activeRootSpanIds.has(spanId)) {
                  const result = self._registerTraceRootSpan(spanId);
                  const size = self._activeRootSpanIds.size;
                  if (1 === size) {
                    if (self(closure_1[4]).DEBUG_BUILD) {
                      const debug3 = self(closure_1[5]).debug;
                      const _HermesInternal = HermesInternal;
                      debug3.log("[Profiling] Root span " + spanId + " started. Profiling active while there are active root spans (count=" + size + ").");
                    }
                    self._beginProfiling();
                  }
                }
              }
            } else if (self(closure_1[4]).DEBUG_BUILD) {
              const debug2 = self(closure_1[5]).debug;
              debug2.log("[Profiling] Discarding profile because root span was not sampled.");
            }
          }
          const tmpResult = tmp(tmp2[5]);
        } else if (tmp(tmp2[4]).DEBUG_BUILD) {
          const debug = self(closure_1[5]).debug;
          debug.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
        }
      });
      on.on("spanEnd", (spanContext) => {
        if (self._sessionSampled) {
          const spanId = spanContext.spanContext().spanId;
          if (spanId) {
            const _activeRootSpanIds = self._activeRootSpanIds;
            if (_activeRootSpanIds.has(spanId)) {
              const _activeRootSpanIds2 = self._activeRootSpanIds;
              _activeRootSpanIds2.delete(spanId);
              const size = self._activeRootSpanIds.size;
              if (self(closure_1[4]).DEBUG_BUILD) {
                const debug = self(closure_1[5]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[Profiling] Root span with ID " + spanId + " ended. Will continue profiling for as long as there are active root spans (currently: " + size + ").");
              }
              if (0 === size) {
                self._collectCurrentChunk().catch((arg0) => {
                  if (callback(closure_1[4]).DEBUG_BUILD) {
                    const debug = callback(closure_1[5]).debug;
                    debug.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", arg0);
                  }
                });
                self._endProfiling();
                const _collectCurrentChunkResult = self._collectCurrentChunk();
              }
            }
          }
        }
      });
    }
  };
  items[7] = {
    key: "_resetProfilerInfo",
    value: function _resetProfilerInfo() {
      this._isRunning = false;
      const globalScope = callback(UIProfiler[5]).getGlobalScope();
      globalScope.setContext("profile", {});
    }
  };
  items[8] = {
    key: "_clearAllRootSpanTimeouts",
    value: function _clearAllRootSpanTimeouts() {
      let _rootSpanTimeouts = this._rootSpanTimeouts;
      const item = _rootSpanTimeouts.forEach((arg0) => clearTimeout(arg0));
      _rootSpanTimeouts = this._rootSpanTimeouts;
      _rootSpanTimeouts.clear();
    }
  };
  items[9] = {
    key: "_registerTraceRootSpan",
    value: function _registerTraceRootSpan(spanId) {
      let closure_0 = spanId;
      const UIProfiler = this;
      const _activeRootSpanIds = this._activeRootSpanIds;
      _activeRootSpanIds.add(spanId);
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      const result = _rootSpanTimeouts.set(spanId, setTimeout(() => self._onRootSpanTimeout(arg0), 300000));
    }
  };
  items[10] = {
    key: "_startProfilerInstance",
    value: function _startProfilerInstance() {
      const _profiler = this._profiler;
      let stopped;
      if (null != _profiler) {
        stopped = _profiler.stopped;
      }
      if (false !== stopped) {
        const startJSSelfProfileResult = callback(UIProfiler[3]).startJSSelfProfile();
        if (startJSSelfProfileResult) {
          this._profiler = startJSSelfProfileResult;
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = callback(UIProfiler[5]).debug;
          debug.log("[Profiling] Failed to start JS Profiler.");
        }
        const obj = callback(UIProfiler[3]);
      }
    }
  };
  items[11] = {
    key: "_startPeriodicChunking",
    value: function _startPeriodicChunking() {
      let closure_0 = this;
      if (this._isRunning) {
        const _setTimeout = setTimeout;
        tmp._chunkTimer = setTimeout(() => {
          self._collectCurrentChunk().catch((arg0) => {
            if (callback(closure_1[4]).DEBUG_BUILD) {
              const debug = callback(closure_1[5]).debug;
              debug.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", arg0);
            }
          });
          if (self._isRunning) {
            const result = self._startProfilerInstance();
            if (self._profiler) {
              const result1 = obj._startPeriodicChunking();
            } else {
              obj._resetProfilerInfo();
            }
          }
        }, 60000);
      }
    }
  };
  items[12] = {
    key: "_onRootSpanTimeout",
    value: function _onRootSpanTimeout(arg0) {
      const self = this;
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      if (_rootSpanTimeouts.has(arg0)) {
        const _rootSpanTimeouts2 = self._rootSpanTimeouts;
        _rootSpanTimeouts2.delete(arg0);
        const _activeRootSpanIds = self._activeRootSpanIds;
        if (_activeRootSpanIds.has(arg0)) {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug = callback(UIProfiler[5]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("[Profiling] Reached 5-minute timeout for root span " + arg0 + ". You likely started a manual root span that never called `.end()`.");
          }
          const _activeRootSpanIds2 = self._activeRootSpanIds;
          _activeRootSpanIds2.delete(arg0);
          if (0 === self._activeRootSpanIds.size) {
            self._endProfiling();
          }
        }
      }
    }
  };
  const obj11 = { key: "_collectCurrentChunk" };
  let closure_0 = module_1099(async function() {
    const self = this;
    const _profiler = self._profiler;
    self._profiler = undefined;
    if (_profiler) {
      const tmp2 = yield obj.stop();
      const profileChunkPayload = callback(closure_1[3]).createProfileChunkPayload(tmp2, self._client, self._profilerId);
      const obj2 = callback(closure_1[3]);
      const validateProfileChunkResult = callback(closure_1[3]).validateProfileChunk(profileChunkPayload);
      if ("reason" in validateProfileChunkResult) {
        const DEBUG_BUILD = callback(closure_1[4]).DEBUG_BUILD;
        if (DEBUG_BUILD) {
          const debug2 = callback(closure_1[5]).debug;
          debug2.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", validateProfileChunkResult.reason);
        }
      } else {
        self._sendProfileChunk(profileChunkPayload);
        if (callback(closure_1[4]).DEBUG_BUILD) {
          const debug = callback(closure_1[5]).debug;
          debug.log("[Profiling] Collected browser profile chunk.");
        }
      }
      const obj3 = callback(closure_1[3]);
    }
  });
  obj11.value = function _collectCurrentChunk() {
    return callback(...arguments);
  };
  items[13] = obj11;
  items[14] = {
    key: "_sendProfileChunk",
    value: function _sendProfileChunk(profileChunkPayload) {
      const _client = this._client;
      let obj = callback(UIProfiler[5]);
      let sdkMetadata;
      if (null != _client.getSdkMetadata) {
        sdkMetadata = _client.getSdkMetadata();
      }
      const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdkMetadata);
      const dsn = _client.getDsn();
      let obj1 = callback(UIProfiler[5]);
      obj = { event_id: callback(UIProfiler[5]).uuid4() };
      const obj4 = callback(UIProfiler[5]);
      obj.sent_at = new Date().toISOString();
      let tmp4 = sdkMetadataForEnvelopeHeader;
      if (sdkMetadataForEnvelopeHeader) {
        obj = { sdk: sdkMetadataForEnvelopeHeader };
        tmp4 = obj;
      }
      const tmp5 = !_client.getOptions().tunnel;
      let tmp6 = !tmp5;
      if (!tmp5) {
        tmp6 = dsn;
      }
      if (tmp6) {
        obj1 = { dsn: callback(UIProfiler[5]).dsnToString(dsn) };
        tmp6 = obj1;
        const obj8 = callback(UIProfiler[5]);
      }
      const items = [{ type: "profile_chunk" }, profileChunkPayload];
      const items1 = [items];
      const date = new Date();
      _client.sendEnvelope(obj1.createEnvelope(Object.assign(obj, tmp4, tmp6), items1)).then(null, (arg0) => {
        if (callback(closure_1[4]).DEBUG_BUILD) {
          const debug = callback(closure_1[5]).debug;
          debug.error("Error while sending profile chunk envelope:", arg0);
        }
      });
    }
  };
  return DEFAULT_BUNDLE_NAME(UIProfiler, items);
}();
